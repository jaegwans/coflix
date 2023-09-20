import React from 'react';
import styled from 'styled-components';
import Video from './Video';
import keywords from '@/data/Search/keywords.json';
import { isNumber } from '@/hooks/type/guard';
import Image from 'next/image';

function Category({
    videos,
    id,
}: {
    videos: Ivideo[];
    id: React.Key | null | undefined;
}) {
    console.log(id, videos);
    // null 값에 대한 예외 처리 필요 서스펜스와 에러처리로
    return (
        <StyledCategory>
            <StyledCategoryTitle>
                {isNumber(id) ? keywords[id] : '서버 호출 에러'}
            </StyledCategoryTitle>
            {/* <StyeldVideos>{JSON.stringify(videos)}</StyeldVideos> */}
            <StyeldVideos>
                {videos.map((video, i) => {
                    return <Video video={video} i={i} key={i} />;
                })}
                {/* 더보기 추가 */}
            </StyeldVideos>
        </StyledCategory>
    );
}

export default Category;

const StyeldVideos = styled.div`
    margin-top: 1.8rem;
    display: flex;
    justify-content: flex-start;
    gap: 0.625rem;
`;

const StyledCategoryTitle = styled.div`
    margin: 0.2rem 0.2rem 0.2rem 0.8rem;
    position: absolute;
    font-size: 1.2rem;
`;

const StyledCategory = styled.div`
    height: 11.25rem;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
`;
