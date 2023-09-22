import React, { useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { videoListsState, keywordsState } from '@/atoms/youtube';
import Layout from '@/components/common/Layout';
import styled from 'styled-components';
import { Style } from '@mui/icons-material';
import Video from '@/components/main/Video';

function CategoryDetail() {
    const router = useRouter();
    const videoLists = useRecoilValue(videoListsState);
    const keywords = useRecoilValue<string[]>(keywordsState); //추후 url 직접접근시 사용
    const [id, setid] = useState<number>(0);
    useLayoutEffect(() => {
        if (router.isReady) {
            setid(Number(router.query.id));

            console.log(videoLists[Number(router.query.id)]);

            if (router.query.id === undefined) {
                // url 직접접근시
                alert('잘못된 접근입니다.'); //임시로 처리,경진대회 이후 키워드접근으로 수정
                router.push('/main');
            }
        }
    }, [router.query]);

    return (
        <StyledLayout>
            <StyledCategoryTitle>{keywords[id]}</StyledCategoryTitle>
            <StyledVideos>
                {(videoLists[id] as any).videos.map(
                    (video: Ivideo, i: number) => {
                        //any 수정 필요
                        return (
                            <Video video={video} i={i} key={i} h={280} c={id} />
                        );
                    }
                )}
                {/* {<VideoMore data={id} />} */}
            </StyledVideos>
        </StyledLayout>
    );
}

const StyledVideos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
const StyledCategoryTitle = styled.div`
    margin: 0.2rem 0.2rem 0.2rem 0.8rem;
    font-size: 1.2rem;
`;

const StyledLayout = styled(Layout)`
    display: flex;
    padding-top: 4.375rem;
    width: 100vw;
    height: 100vh;
    position: relative;
`;

export default CategoryDetail;
