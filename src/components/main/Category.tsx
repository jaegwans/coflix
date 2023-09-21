import React from 'react';
import styled from 'styled-components';
import Video from './Video';
import keywords from '@/data/Search/keywords.json';
import { isNumber } from '@/hooks/type/guard';
import Image from 'next/image';
import VideoMore from './VideoMore';
import onPush from '@/hooks/onPush';

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
            <StyledCategoryTitle
                onClick={() =>
                    onPush({
                        pathname: '/categoryDetail',
                        query: { id: id },
                    })
                }
            >
                {isNumber(id) ? keywords[id] : '서버 호출 에러'}
            </StyledCategoryTitle>
            <StyeldVideos>
                {videos.map((video, i) => {
                    return <Video video={video} i={i} key={i} />;
                })}
                {<VideoMore data={id} />}
            </StyeldVideos>
        </StyledCategory>
    );
}

export default Category;

const StyeldVideos = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

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
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
`;
