import React, { useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { videoListsState, keywordsState } from '@/atoms/youtube';
import Layout from '@/components/common/Layout';
import styled from 'styled-components';
import { Style } from '@mui/icons-material';
import Video from '@/components/main/Video';
import VideoMore from '../components/main/VideoMore';
import Link from 'next/link';

function CategoryDetail() {
    const router = useRouter();
    const videoLists = useRecoilValue(videoListsState);
    const keywords = useRecoilValue<string[]>(keywordsState); //추후 url 직접접근시 사용
    const [id, setid] = useState<number>(0);
    const moreLink = `https://www.youtube.com/results?search_query=${keywords[id]}`;
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
    }, [router.query, router, videoLists]);

    return (
        <StyledLayout>
            <StyledCategoryTitle>{keywords[id]}</StyledCategoryTitle>
            <StyledVideos>
                {videoLists != undefined &&
                    (videoLists[id] as IvideoList)?.videos?.map(
                        (video: Ivideo, i: number) => {
                            //any 수정 필요
                            return (
                                <Video
                                    video={video}
                                    i={i}
                                    key={i}
                                    h={280}
                                    c={id}
                                />
                            );
                        }
                    )}
                {/* {<VideoMore data={id} />} */}

                <StyledVideoMore href={moreLink} target="_blank">
                    more
                </StyledVideoMore>
            </StyledVideos>
        </StyledLayout>
    );
}

const StyledVideoMore = styled.a`
    all: unset;
    width: 90%;
    height: 70px;
    cursor: pointer;
    margin-bottom: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    border: 2px solid ${({ theme }) => theme.color.grey};
    transition: border 0.2s ease-in, transform 0.2s ease-in 0.1s;

    &:hover {
        border: 2px solid ${({ theme }) => theme.color.white};
        transform: translateY(-0.2rem);
    }
`;

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
