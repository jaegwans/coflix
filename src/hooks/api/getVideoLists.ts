import keywords from '@/data/Search/keywords.json';
import { youtube } from 'scrape-youtube';

async function getVideoList() {
    const videoLists = await Promise.all(
        keywords.map((keyword) => youtube.search(keyword))
    );
    return videoLists;
}

export default getVideoList;
