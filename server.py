from datetime import date, timedelta
import logging
import time
import signal
import os
import sys
import json
import traceback
import numpy


import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import tornado.httpclient
from tornado.web import HTTPError
from tornado.gen import coroutine
from tornado.options import define, options
import tornado.netutil
import psycopg2
import momoko
import tornado_mysql
import requests



def signal_handler(server):
    MAX_WAIT_SECONDS_BEFORE_SHUTDOWN = 0

    def shutdown():
        logging.info('Stopping http server')
        server.stop()

        io_loop = tornado.ioloop.IOLoop.instance()

        deadline = time.time() + MAX_WAIT_SECONDS_BEFORE_SHUTDOWN

        def stop_loop():
            now = time.time()
            if now < deadline and (len(server._pending_sockets) or
                                   io_loop._callbacks or io_loop._timeouts):
                logging.info('Will shutdown in %s seconds ...',
                             round(deadline - now))
                io_loop.add_timeout(timedelta(seconds=1), stop_loop)
            else:
                io_loop.stop()
                logging.info('Shutdown')

        logging.info('Will shutdown in %s seconds ...',
                     MAX_WAIT_SECONDS_BEFORE_SHUTDOWN)
        io_loop.add_timeout(timedelta(seconds=1), stop_loop)

    def real_handler(sig, frame):
        logging.warning('Caught signal: %s', sig)
        tornado.ioloop.IOLoop.instance().add_callback(shutdown)

    return real_handler


class StatusHandler(tornado.web.RequestHandler):
    def get(self):
        self.set_status(200)
        self.add_header('Content-Type', 'text/plain')
        self.write("I'm online")

class DataHandler(tornado.web.RequestHandler):
    @coroutine
    def get(self):
        filename = self.get_argument('filename', '')
        ##conn = http.client.HTTPSConnection('prd.external.backend.nfh.infra.fih.io')
        ##conn.request("GET", "/")
        ##conn.request("GET", "/api/v1/hotels/detail.json?client_ip=95.97.71.50&hotelFilename=hotel:Norlandia_Care_Tampere_Hotel&isAvailabilitySearch=false&lang=es&search_id=&session_id=fh_mkp_static_validation_tool")
        ##r1 = conn.getresponse()
        ##data1 = r1.read()

        r = requests.get('http://prd.external.backend.nfh.infra.fih.io/api/v1/hotels/detail.json?client_ip=95.97.71.50&hotelFilename=hotel:' + filename + '&isAvailabilitySearch=false&lang=es&search_id=&session_id=fh_mkp_static_validation_tool')

        self.set_status(200)
        self.add_header('Content-Type', 'text/plain')
        self.add_header('Access-Control-Allow-Origin', '*')

        self.write(json.dumps(r.json()))



if __name__ == "__main__":
    define("port", default=8000, help="run on the given port", type=int)
    define("host", default='0.0.0.0', help="run on the given host", type=str)

    tornado.options.parse_command_line()
    tornado.httpclient.AsyncHTTPClient.configure(None, max_clients=1024)
    tornado.netutil.Resolver.configure('tornado.netutil.ThreadedResolver')
    os.environ['TZ'] = 'Etc/UTC'
    app = tornado.web.Application(handlers=[
        (r"/status", StatusHandler),
        (r"/data", DataHandler),
    ],gzip=True,debug=True)
    http_server = tornado.httpserver.HTTPServer(app, xheaders=True)
    http_server.listen(options.port, address=options.host)

    ioloop = tornado.ioloop.IOLoop.instance()


    handler = signal_handler(http_server)
    signal.signal(signal.SIGTERM, handler)
    signal.signal(signal.SIGINT, handler)

    logging.info("Server was started at http://%s:%s", options.host,
                 options.port)
    logging.info("You can check status by url http://%s:%s/status",
                 options.host, options.port)
    tornado.ioloop.IOLoop.instance().start()
