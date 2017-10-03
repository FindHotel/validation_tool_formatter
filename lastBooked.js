/**
 * Created by danilr on 02/10/2017.
 */

let PARAMS = {
    'language': 'es'
};

let body = document.getElementsByTagName('body')[0];

let now = new Date();
let p = document.createElement('p');
let t = document.createTextNode(now);
p.appendChild(t);
body.appendChild(p);

let i = 0;
let j = 0;
let now_nfh_more_day = 0;
let now_mkp_more_day = 0;
let nfh_mkp = [];

let p_i = document.createElement('p');
let t_i = document.createTextNode('Hotels to check: 0');
p_i.appendChild(t_i);
body.appendChild(p_i);

let p_j = document.createElement('p');
let t_j = document.createTextNode('Hotels checked: 0');
p_j.appendChild(t_j);
body.appendChild(p_j);

let p_now_nfh_more_day = document.createElement('p');
let t_now_nfh_more_day = document.createTextNode('NOW - NFH more than day count: ' + now_nfh_more_day);
p_now_nfh_more_day.appendChild(t_now_nfh_more_day);
body.appendChild(p_now_nfh_more_day);

let p_now_mkp_more_day = document.createElement('p');
let t_now_mkp_more_day = document.createTextNode('NOW - MKP more than day count: ' + now_mkp_more_day);
p_now_mkp_more_day.appendChild(t_now_mkp_more_day);
body.appendChild(p_now_mkp_more_day);

let p_nfh_mkp = document.createElement('p');
let t_nfh_mkp = document.createTextNode('NFH - MKP average: 0');
p_nfh_mkp.appendChild(t_nfh_mkp);
body.appendChild(p_nfh_mkp);

function update_summary () {
    t_i.nodeValue = 'Hotels to check: ' + i;
    t_j.nodeValue = 'Hotels checked: ' + j;
    t_now_nfh_more_day.nodeValue = 'NOW - NFH more than day count: ' + now_nfh_more_day;
    t_now_mkp_more_day.nodeValue = 'NOW - MKP more than day count: ' + now_mkp_more_day;
    t_nfh_mkp.nodeValue = 'NFH - MKP average: ' + msToTime(nfh_mkp.reduce((t, v) => {
        return t + v;
    }, 0)/nfh_mkp.length);
}

let table = document.createElement('table');
body.appendChild(table);

let tr = document.createElement('tr');

// hotel name
let td1 = document.createElement('th');
let t1 = document.createTextNode('file_name');
td1.appendChild(t1);
tr.appendChild(td1);

// NFH value
let td2 = document.createElement('th');
let t2 = document.createTextNode('NFH value');
td2.appendChild(t2);
tr.appendChild(td2);

// NFH value and diff with now
let td21 = document.createElement('th');
let t21 = document.createTextNode('NOW - NFH value');
td21.appendChild(t21);
tr.appendChild(td21);

// NFH value and diff with now IN DAYS
let td22 = document.createElement('th');
let t22 = document.createTextNode('NOW - NFH value in days');
td22.appendChild(t22);
tr.appendChild(td22);

// NFH value
let td3 = document.createElement('th');
let t3 = document.createTextNode('MKP value');
td3.appendChild(t3);
tr.appendChild(td3);

// MKP value and diff with now
let td31 = document.createElement('th');
let t31 = document.createTextNode('NOW - MKP value');
td31.appendChild(t31);
tr.appendChild(td31);

// MKP value and diff with now IN DAYS
let td32 = document.createElement('th');
let t32 = document.createTextNode('NOW - MKP value in days');
td32.appendChild(t32);
tr.appendChild(td32);

// MKP value and diff with NFH
let td4 = document.createElement('th');
let t4 = document.createTextNode('NFH - MKP value');
td4.appendChild(t4);
tr.appendChild(td4);

table.appendChild(tr);

try {
    hotelsArr.forEach(function(v) {

        let r1 = $.ajax({
            url: 'http://0.0.0.0:8000/data?filename=' + v,
            dataType: 'json'
        });
        let r2 = $.ajax({
            url: 'https://mkp-static.datafh.com/prod/hotels/filename/' + v + '?language=es',
            dataType: 'json'
        });

        $.when(r1, r2).done(function ( v1, v2 ) {
            nfh = new Date(v1[0].hotel.lastBooked);
            mkp = new Date(v2[0].last_booked.time);

            let tr = document.createElement('tr');

            // hotel name
            let td1 = document.createElement('td');
            let t1 = document.createTextNode(v);
            td1.appendChild(t1);
            tr.appendChild(td1);

            // NFH value
            let td2 = document.createElement('td');
            let t2 = document.createTextNode(nfh);
            td2.appendChild(t2);
            tr.appendChild(td2);

            // NFH value and diff with now
            let td21 = document.createElement('td');
            let t21 = document.createTextNode(msToTime(now-nfh));
            td21.appendChild(t21);
            tr.appendChild(td21);

            // NFH value and diff with now
            let td22 = document.createElement('td');
            let t22 = document.createTextNode(((now-nfh)/1000/60/60/24).toFixed(2));
            td22.appendChild(t22);
            tr.appendChild(td22);
            if((now-nfh)/1000/60/60/24 > 1)
                now_nfh_more_day++;

            // NFH value
            let td3 = document.createElement('td');
            let t3 = document.createTextNode(mkp);
            td3.appendChild(t3);
            tr.appendChild(td3);

            // MKP value and diff with now
            let td31 = document.createElement('td');
            let t31 = document.createTextNode(msToTime(now-mkp));
            td31.appendChild(t31);
            tr.appendChild(td31);

            // MKP value and diff with now
            let td32 = document.createElement('td');
            let t32 = document.createTextNode(((now-mkp)/1000/60/60/24).toFixed(2));
            td32.appendChild(t32);
            tr.appendChild(td32);
            if((now-mkp)/1000/60/60/24 > 1)
                now_mkp_more_day++;

            // MKP value and diff with NFH
            let td4 = document.createElement('td');
            let t4 = document.createTextNode(msToTime(nfh-mkp));
            td4.appendChild(t4);
            tr.appendChild(td4);
            nfh_mkp.push(nfh-mkp);

            table.appendChild(tr);

            j++;
            update_summary();

        });
        i++;

        if(i>=50) ;//throw Error;
    });
} catch (e) {
    if (e !== Error) throw e;
}