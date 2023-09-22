import React from 'react';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player/youtube';
import { useRecoilValue } from 'recoil';
import { videoListsState } from '@/atoms/youtube';
import styled from 'styled-components';
import Layout from '@/components/common/Layout';
// poseMessage 에러 로그 발생하나 youtube api 문제로 자체 해결 불가
function VideoDetail() {
    const router = useRouter();
    const { vId, cId } = router.query;
    return (
        <StyledLayout>
            {cId},{vId}
            <StyledPlayerWrapper>
                <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/watch?v=W9q-0tCfvKE"
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </StyledPlayerWrapper>
        </StyledLayout>
    );
}

const StyledLayout = styled(Layout)`
    padding-top: ${({ theme }) => theme.len.tabHeight};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledPlayerWrapper = styled.div`
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
    .react-player {
        position: absolute;
        top: 0;
        left: 0;
    }
`;
export default VideoDetail;
