import Router from 'next/router';

function onPush(path: string | Object, asPath?: string, callback?: () => void) {
    //추후 개선 필요 (객체로 받을것)
    if (typeof path === 'object') {
        Router.push(path, asPath).then(() => callback && callback());
    } else {
        Router.push(path).then(() => callback && callback());
    }
}

export default onPush;
