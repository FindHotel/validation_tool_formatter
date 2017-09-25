'use strict';

function findGetParameter(parameterName) {
    let result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function draw_src_title(text, dest) {
    let src_title = document.createElement('p');
    let t = document.createTextNode(text);
    src_title.appendChild(t);
    dest.appendChild(src_title);
}

function draw_images_list(l, dest) {
    let list = document.createElement('ul');
    _.forEach(l, (v, k) => {
        let elem = document.createElement('li');
        let img = document.createElement('img');
        img.src = v.small;
        elem.appendChild(img);
        let counter = document.createElement('span');
        let t = document.createTextNode(k);
        counter.appendChild(t);
        elem.appendChild(counter);
        list.appendChild(elem);
    });
    dest.appendChild(list);
}

function draw_images(l, nfh_dest, mkp_dest) {
    draw_images_list(l.nfh, nfh_dest);
    draw_images_list(l.mkp, mkp_dest);
}

function draw_default(l, nfh_dest, mkp_dest) {
    let nfh = document.createElement('p');
    let t_nfh = document.createTextNode(JSON.stringify(l.nfh));
    nfh.appendChild(t_nfh);
    nfh_dest.appendChild(nfh);
    let mkp = document.createElement('p');
    let t_mkp = document.createTextNode(JSON.stringify(l.mkp));
    mkp.appendChild(t_mkp);
    mkp_dest.appendChild(mkp);
}

function draw_link(src, dest) {
    let a = document.createElement('a');
    a.href = src;
    a.target = '_blank';
    a.className = 'api_link';
    let t = document.createTextNode(src);
    a.appendChild(t);
    dest.appendChild(a);
}