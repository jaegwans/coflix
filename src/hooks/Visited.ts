function onVisited() {
    localStorage.setItem('visited', 'true');
}
function isVisited() {
    return localStorage.getItem('visited') === 'true';
}
export { onVisited, isVisited };
