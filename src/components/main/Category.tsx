import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Video from './Video';
import initkeywords from '@/data/Search/keywords.json';
import { isNumber } from '@/hooks/type/guard';
import Image from 'next/image';
import VideoMore from './VideoMore';
import onPush from '@/hooks/onPush';
import { useRecoilState } from 'recoil';
import { videoListsState } from '@/atoms/youtube';
import useLocalStorage from '@/hooks/useLocalStorage';
function Category({
    videos,
    id,
}: {
    videos: Ivideo[];
    id: React.Key | null | undefined;
}) {
    // null 값에 대한 예외 처리 필요 서스펜스와 에러처리로
    const { getLocalStorage } = useLocalStorage();
    const [keywords, setKeywords] = useState<string[]>([]);

    useEffect(() => {
        const init = getLocalStorage('category') || initkeywords;
        setKeywords(init);
    }, []);

    if (typeof id !== 'number') {
        console.error('id must be a number');
        return;
    }

    return (
        <StyledCategory>
            <StyledCategoryTitle
                onClick={() =>
                    onPush({
                        pathname: '/categoryDetail',
                        query: { id: id, cName: keywords[id] },
                    })
                }
            >
                {isNumber(id) ? keywords[id] : '서버 호출 에러'}
            </StyledCategoryTitle>
            <StyeldVideos>
                {isNumber(id) &&
                    videos.map((video, i) => {
                        return <Video video={video} i={i} key={i} c={id} />;
                    })}
                {<VideoMore data={id} />}
            </StyeldVideos>
        </StyledCategory>
    );
}

export default React.memo(Category); //videos

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
    cursor: pointer;
    color: #e6e6e6;
`;

const StyledCategory = styled.div`
    height: 13.25rem;
    width: 100%;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
    margin-top: 1rem;
`;
