import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import getShortTitle from '@/hooks/getShortTitle';

//480 360
function Video({ video, i }: { video: Ivideo; i: number }) {
    return (
        <StyledImageWrapper>
            <StyledVideoTitle>{getShortTitle(video.title)}</StyledVideoTitle>
            <Image
                src={video.thumbnail}
                width={240}
                height={180}
                alt={video.title}
                style={{ zIndex: 1 }}
            />
        </StyledImageWrapper>
    );
}

const StyledImageWrapper = styled.div`
    position: relative;
`;
const StyledVideoTitle = styled.div`
    position: absolute;
    z-index: 2;
    top: 60%;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: rgba(0, 0, 0, 0.5);
`;

export default Video;
