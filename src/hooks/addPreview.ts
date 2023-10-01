import getOg from '@/hooks/api/getOg';
import exp from 'constants';

function constructFullUrl(base_url: string, image_path: string) {
    // 이미지 경로가 "https://" 또는 "http://"로 시작하는지 확인
    if (image_path.startsWith('https://') || image_path.startsWith('http://')) {
        return image_path;
    } else {
        // 원주소에서 도메인 부분만 추출
        const domain = base_url.split('/').slice(0, 3).join('/');
        return domain + image_path;
    }
}

async function addPreview(object: IResumes) {
    try {
        const og = await getOg(object.url);
        const url = constructFullUrl(object.url, og.image.url);
        if (url === undefined) {
            return Object.assign(object, { preview: '' });
        }

        return Object.assign(object, { preview: url });
    } catch (e) {
        console.log(e);
        return Object.assign(object, { preview: '' });
    }
}

export default addPreview;
