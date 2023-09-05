import axios from 'axios';
import { useQuery, useQueries } from 'react-query';

function fetchYoutube() {
    return axios.get(
        'https://www.googleapis.com/youtube/v3/search?key=' +
            process.env.NEXT_PUBLIC_GOOGLE_KEY +
            '&q=한글' +
            '&part=snippet&type=video&maxResults=10'
    );
}

function useYoutube() {
    return useQuery('youtube', fetchYoutube, {
        select: (data) => data.data.items,
    });
}

export default useYoutube;
