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

function Intro() {
    const [show] = useDelay(1000);
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StyledIntro>
            <Waves />
            <StyledBlind />

            <div className="logoWrapper">
                <StyledLogo data-aos="fade-in" data-aos-delay="850">
                    FATUBE
                </StyledLogo>
            </div>
            <StyledHello>
                {show && <LottieWrapper lottieData={hello} />}
            </StyledHello>

            <StyledStartBtn onClick={() => onPush('main')}>
                시작하기
            </StyledStartBtn>
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
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100%;
`;
