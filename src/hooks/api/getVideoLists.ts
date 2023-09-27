import { youtube } from 'scrape-youtube';

async function getVideoList(keywords: string[]) {
    const videoLists = await Promise.all(
        keywords.map((keyword) => youtube.search(keyword))
    );
    return videoLists;
}

export default getVideoList;
