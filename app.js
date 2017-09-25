'use strict';

let PARAMS = {
    'language': 'es',
    'filenames': [
        "Comfort_Suites_Escanaba",
        "Ramada_McComb",
        'Holiday_Inn_Express_Moss_Point',
        'Days_Inn_Pascagoula_Moss_Point',
        'BEST_WESTERN_Flagship_Inn',
        'Rodeway_Inn_Weedsport',
        'Strand_Palace_Hotel_London',
        'Pestana_Chelsea_Bridge_Hotel_Spa_London',
        'Park_Plaza_Westminster_Bridge_London'
    ]
};

let $body = document.getElementsByTagName('body')[0];
let msg = document.createElement('p');
let msg_t = document.createTextNode('LOADING...');
msg.appendChild(msg_t);
$body.appendChild(msg);

$.ajax({
    url: 'http://prd.external.frontend.nfh.infra.fih.io/api/v2/static/validation/hotels?language=' + PARAMS.language,
    dataType: 'json',
    method: 'post',
    data: {
        "filenames": PARAMS.filenames
    }
}).fail(function(){
    msg_t.nodeValue = 'ERRRRRROR! something went wrong'
})
    .done(function(d) {

    msg_t.nodeValue = 'DONE!';
    let total = document.createElement('p');
    let t = document.createTextNode(
        'TOTAL: ' +
        Math.round(d.errors_count * 100 / d.scenarios_count, 2) +
        '% hotels with some errors');
    total.appendChild(t);
    $body.appendChild(total);

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
            if(['mkp_link', 'nfh_link'].indexOf(key) === -1) {

                let title_tr = document.createElement('tr');
                let title_td = document.createElement('td');
                title_td.setAttribute('colspan', 2);
                title_tr.appendChild(title_td);

                let error_title = document.createElement('h4');
                let t = document.createTextNode(key);
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

});
