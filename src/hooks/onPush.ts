import Router from 'next/router';
function onPush(...urls: any) {
    if (urls.length === 1) {
        Router.push(urls[0]);
    } else if (urls.length === 2) {
        Router.push(urls[0], urls[1]);
    }
}

export default onPush;
