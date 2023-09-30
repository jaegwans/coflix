import axios from 'axios';
import cheerio from 'cheerio';
import getRandom from '../getRandom';

async function getBj() {
    const num = getRandom(1000, 25302).toString();
    try {
        // axios를 사용하여 웹 페이지의 내용을 가져옵니다.
        const response = await axios.get(
            'https://www.acmicpc.net/problem/' + num,
            {
                headers: {
                    'User-Agent':
                        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                },
            }
        );

        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);

            // 원하는 데이터를 cheerio를 사용하여 파싱합니다.
            // 예를 들어, 문제의 제목을 가져오려면:
            const title = $('#problem_title').text();
            const rate = $(
                '#problem-info > tbody > tr > td:nth-child(6)'
            ).text();

            // 여기에 다른 데이터를 파싱하는 코드를 추가할 수 있습니다.

            console.log('Title:', title);
            return {
                id: num,
                title: title,
                rate: rate,
            };
            // 다른 데이터도 출력할 수 있습니다.
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    return null; // 추가된 부분
}

export default getBj;
