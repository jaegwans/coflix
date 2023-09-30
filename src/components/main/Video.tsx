import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import getShortTitle from '@/hooks/getShortTitle';
import onPush from '@/hooks/onPush';

//480 360
function Video({
    video,
    i,
    c,
    h = 180,
}: {
    video: Ivideo;
    i: number;
    c?: number;
    h?: number;
}) {
    const pushData = [
        {
            pathname: '/videoDetail',
            query: { vId: i, cId: c },
        },
        'videoDetail',
    ];
    const w = h * (4 / 3);

    return (
        <StyledImageWrapper w={w} h={h}>
            <StyledVideoTitle>{getShortTitle(video.title)}</StyledVideoTitle>
            <Image
                src={video.thumbnail}
                width={480}
                height={360}
                alt={video.title}
                style={{
                    zIndex: 1,
                    objectFit: 'cover',
                    width: '100%',
                    height: 'auto',
                }}
                onClick={() => onPush(...pushData)}
            />
        </StyledImageWrapper>
    );
}

const StyledImageWrapper = styled.div<{ w: number; h: number }>`
    height: ${({ h }) => h}px;
    width: ${({ w }) => w}px;
    position: relative;
    transition: all 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: translateY(-7px);
    }
`;
const StyledVideoTitle = styled.div`
    position: absolute;
    z-index: 2;
    top: 60%;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: rgba(0, 0, 0, 0.5);
`;

export default React.memo(Video);
