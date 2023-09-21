function getShortTitle(title: string, max: number = 20) {
    // max defulat: 20
    if (title.length > max) {
        return title.slice(0, max) + '...';
    }
    return title;
}

export default getShortTitle;
