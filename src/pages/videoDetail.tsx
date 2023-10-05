import React from 'react';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player/youtube';
import { useRecoilValue } from 'recoil';
import { videoListsState } from '@/atoms/youtube';
import styled from 'styled-components';
import Layout from '@/components/common/Layout';
import useCopy from '@/hooks/useCopy';
// poseMessage 에러 로그 발생하나 youtube api 문제로 자체 해결 불가
function VideoDetail() {
    const router = useRouter();
    const { vId, cId } = router.query;
    const videoLists = useRecoilValue<IvideoList[]>(videoListsState);
    console.log(
        '유투브 자체의 오리진 문제로 에러 로그가 송출됩니다.(유투브단 문제)'
    );
    const link = videoLists[Number(cId)]?.videos[Number(vId)]?.link;
    const { getCopy, copied, err } = useCopy(link);
    return (
        <StyledLayout>
            <StyledPlayerWrapper>
                <ReactPlayer
                    className="react-player"
                    url={link}
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </StyledPlayerWrapper>
            <StyeldButton onClick={getCopy}>
                {copied ? '복사완료' : '공유하기'}
            </StyeldButton>
        </StyledLayout>
    );
}

const StyeldButton = styled.button`
    all: unset;
    cursor: pointer;
    float: right;
    margin: 0.625rem;
    padding: 0.325rem 0.6rem;
    width: 3.75rem;
    text-align: center;
    align-self: flex-end;
    border: 2px solid ${({ theme }) => theme.color.grey};
    transition: border 0.2s ease-in, transform 0.2s ease-in 0.1s;

    &:hover {
        border: 2px solid ${({ theme }) => theme.color.white};
        transform: translateY(-0.2rem);
    }
`;
const StyledLayout = styled(Layout)`
    padding-top: ${({ theme }) => theme.len.tabHeight};
    display: flex;

    flex-direction: column;
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
