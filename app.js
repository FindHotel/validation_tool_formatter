'use strict';

var total_errors = 0;
var total_scenarios = 0;
var total_image_error = 0;
var total_error_types = {};

load(0, 30);
//this is not working well becoase end point rejects to many requests
/*
loadAll();
function loadAll() {
    var from = -1;
    var to = 0
    for (var i = 0; i < (hotelsArr.length / 40); i++) {
        from += 1;
        to += 40;
        if (to >= (hotelsArr.length - 1)) {
            to = hotelsArr.length - 1;
        }
        setTimeout("load(" + from + "," + to + ")", 10000);
        from = to;
    }
}
*/

function load(from, to) {

    var hotelSlice = hotelsArr.slice(from, to);
    let PARAMS = {
        'language': 'es'
    };

    let $body = document.getElementsByTagName('body')[0];
    let loadings = document.getElementById('loadings');
    let totals = document.getElementById('totals');
    let total_errors_div = document.getElementById('errors');


    let msg = document.createElement('span');
    let msg_t = document.createTextNode(' LOADING... (' + from + "-" + to + ")");
    msg.appendChild(msg_t);
    loadings.appendChild(msg);

    $.ajax({
        url: 'http://prd.external.frontend.nfh.infra.fih.io/api/v2/static/validation/hotels?language=' + PARAMS.language,
        dataType: 'json',
        method: 'post',
        timeout: 60000,// sets timeout to 30 seconds
        data: {
            "filenames": hotelSlice
        }
    }).fail(function () {
        msg_t.nodeValue = ' ERRRRRROR! (' + from + "-" + to + ")";
        loadNextIfNeeded(from, to);
    })
        .done(function (d) {

            msg_t.nodeValue = ' DONE! (' + from + "-" + to + ")";
            let total = document.createElement('p');
            total_errors += d.errors_count;
            total_scenarios += d.scenarios_count;

            let t = document.createTextNode(
                'TOTAL: ' +
                Math.round(total_errors * 100 / total_scenarios, 2) +
                '% hotels with some errors, errors: ' + total_errors + " scenarios: " + total_scenarios);

            total.appendChild(t);
            totals.innerHTML = '';
            totals.appendChild(total);
            _.forEach(d.errors, (errors, filename) => {

                let hotel_title = document.createElement('h2');
                let t = document.createTextNode(filename);
                hotel_title.appendChild(t);
                $body.appendChild(hotel_title);

                let table = document.createElement('table');

                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                table.appendChild(tr);
                tr.appendChild(td1);
                tr.appendChild(td2);
                draw_src_title('nfh', td1);
                draw_src_title('mkp', td2);
                draw_link(errors.nfh_link, td1);
                draw_link(errors.mkp_link, td2);

                _.forEach(errors, (error, key) => {
                    if (['mkp_link', 'nfh_link'].indexOf(key) === -1) {

                        let title_tr = document.createElement('tr');
                        let title_td = document.createElement('td');
                        title_td.setAttribute('colspan', 2);
                        title_tr.appendChild(title_td);

                        let error_title = document.createElement('h4');
                        let t = document.createTextNode(key);
                        if (total_error_types[key] != undefined) {
                            total_error_types[key] += 1;
                        }
                        else {
                            total_error_types[key] = 1;
                        }

                        error_title.appendChild(t);
                        title_td.appendChild(error_title);
                        table.appendChild(title_tr);

                        let tr = document.createElement('tr');
                        let td1 = document.createElement('td');
                        let td2 = document.createElement('td');
                        table.appendChild(tr);
                        tr.appendChild(td1);
                        tr.appendChild(td2);

                        switch (key) {

                            case 'images':
                                draw_images(error, td1, td2);
                                break;

                            default:
                                draw_default(error, td1, td2);
                                break;

                        }

                    }
                });

                $body.appendChild(table);
            });

            loadNextIfNeeded(from, to);
           
            document.getElementById('errors').innerHTML = "ERRORS:<br>";
            bySortedValue(total_error_types, function(key, value) {
                document.getElementById('errors').innerHTML += `<span class="error">${key}:</span> ${value}<br>`
              });
        });

}

function loadNextIfNeeded(from, to) {
    if (to < hotelsArr.length - 1) {
        from = to + 1;
        to += 30;
        if (to >= (hotelsArr.length - 1)) {
            to = hotelsArr.length - 1;
        }
        load(from, to);
    }
}

function bySortedValue(obj, callback, context) {
    var tuples = [];
  
    for (var key in obj) tuples.push([key, obj[key]]);
  
    tuples.sort(function(a, b) {
      return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0
    });
  
    var length = tuples.length;
    while (length--) callback.call(context, tuples[length][0], tuples[length][1]);
  }
  
  bySortedValue({
    foo: 1,
    bar: 7,
    baz: 3
  }, function(key, value) {
    document.getElementById('res').innerHTML += `${key}: ${value}<br>`
  });

