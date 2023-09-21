import React, { useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { videoListsState, keywordsState } from '@/atoms/youtube';
import Layout from '@/components/common/Layout';

function CategoryDetail() {
    const router = useRouter();
    const videoLists = useRecoilValue(videoListsState);
    const keywords = useRecoilValue(keywordsState); //추후 url 직접접근시 사용

    const [id, setid] = useState<number>(0);
    useLayoutEffect(() => {
        if (router.isReady) {
            setid(Number(router.query.id));
        }
    }, [router.query]);

    return (
        <Layout>
            <p></p>
        </Layout>
    );
}

export default CategoryDetail;
