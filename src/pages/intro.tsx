import React, { use, useEffect, useState } from 'react';
import styled from 'styled-components';
import LottieWrapper from '@/components/common/LottieWrapper';
import hello from '@/assets/lottie/hello.json';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Waves from '@/components/Waves';
import useDelay from '@/hooks/useDelay';
import { useRouter } from 'next/router';
import onPush from '@/hooks/onPush';
import { onVisited } from '@/hooks/useVisited';
// import { m } from 'framer-motion';
// import {
//     defaultFadeInLeftVariants,
//     defaultFadeInRightVariants,
//     defaultFadeInUpVariants,
// } from '@/data/motion';

function Intro() {
    const [show] = useDelay(1000);
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StyledIntro>
            <Waves />
            <StyledBlind />

            <StyledHello>
                {show && <LottieWrapper lottieData={hello} />}
            </StyledHello>
            <div className="info">
                <div data-aos="fade-right" data-aos-delay="850">
                    오늘의 추천 코딩테스트 문제와
                </div>

                <div
                    className="right"
                    data-aos="fade-left"
                    data-aos-delay="950"
                >
                    개발에 도움이 될 수 있는 영상을 제공합니다.
                </div>
            </div>

            <div></div>
            <div className="bottom">
                <h3>개발자 취업을 위한 </h3>
                <div className="logoWrapper">
                    <StyledLogo data-aos="fade-in" data-aos-delay="850">
                        COFLIX
                    </StyledLogo>
                </div>
                <StyledStartBtn onClick={() => onPush('main', onVisited)}>
                    시작하기
                </StyledStartBtn>
            </div>
        </StyledIntro>
    );
}

export default Intro;
const StyledBlind = styled.div`
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.white};
    position: fixed;
    top: 0;
    animation-duration: 1s;
    animation-delay: 0.2s;
    animation-name: pull-down;
    animation-fill-mode: forwards;
    @keyframes pull-down {
        from {
            height: 100%;
        }

        to {
            height: 0%;
        }
    }
`;

const StyledHello = styled.div`
    width: 80vw;
    height: 200px;
    display: flex;
    justify-content: center;
`;

const StyledLogo = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
`;
const StyledStartBtn = styled.button`
    margin-top: 1rem;
    cursor: pointer;
    margin-bottom: 1.875rem;
    border: 0.0938rem solid ${({ theme }) => theme.color.grey};
    padding: 0.5rem 0.7rem 0.3rem 0.7rem;
    font-size: 1.8rem;
    color: white;
    transition: border 0.3s ease-in-out 0.19s, transform 0.3s ease-in-out;

    &:hover {
        border: 0.0938rem solid ${({ theme }) => theme.color.white};
        transform: translatey(-0.3rem);
    }
    @media screen and (min-width: 768px) {
        padding: 0.5rem 1rem 0.3rem 1rem;
    }
`;

const StyledIntro = styled.div`
    .bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 4rem;
    }

    .info {
        overflow: hidden;
        width: 100%;
        display: flex;
        padding: 1.5rem;
        justify-content: center;
        height: 300px;
        flex-direction: column;
        font-size: 1.2rem;
        .right {
            align-self: flex-end;
        }
        gap: 2rem;
        @media screen and (min-width: 768px) {
            height: 100%;
            width: 25rem;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            font-size: 1.2rem;
            .right {
                align-self: flex-end;
            }
        }
    }
    .logoWrapper {
        @media screen and (max-width: 768px) {
            animation-duration: 1s;
            animation-name: fiyfire;
            animation-delay: 3s;
            animation-iteration-count: infinite;
            animation-direction: alternate;

            @keyframes fiyfire {
                from {
                    color: ${({ theme }) => theme.color.middleWhite};
                }

                to {
                    color: ${({ theme }) => theme.color.white};
                }
            }
        }
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;
