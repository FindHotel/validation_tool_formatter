/**
 * Created by danilr on 02/10/2017.
 */

let PARAMS = {
    'language': 'es'
};

try {
    hotelsArr.forEach(function(v) {

        let r1 = $.ajax({
            url: 'https://mkp-static.datafh.com/prod/hotels/filename/Norlandia_Care_Tampere_Hotel',
            dataType: 'json',
            data: {
                'client_ip': '95.97.71.50',
                'hotelFilename': 'hotel:Norlandia_Care_Tampere_Hotel',
                'isAvailabilitySearch': 'false',
                'lang': 'es',
                'search_id': '',
                'session_id': 'fh_mkp_static_validation_tool'
            }
        }).done((data) => {
            console.log(data)
        });

        /*
        $.when( d1, d2, d3 ).done(function ( v1, v2, v3 ) {
            console.log( v1 ); // v1 is undefined
            console.log( v2 ); // v2 is "abc"
            console.log( v3 ); // v3 is an array [ 1, 2, 3, 4, 5 ]
        });
        */


        throw Error;
    });
} catch (e) {
    if (e !== Error) throw e;
}