function onVisited() {
    localStorage.setItem('visited', 'true');
    console.log('visited');
}
function isVisited() {
    return localStorage.getItem('visited') === 'true';
    console.log('isVisited');
}
export { onVisited, isVisited };
