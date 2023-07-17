import React, { use, useEffect, useState } from 'react';
import styled from 'styled-components';
import LottieWrapper from '@/components/common/LottieWrapper';
import hello from '@/assets/lottie/hello.json';
import Link from 'next/link';

function Intro() {
    const [showhello, setShowhello] = useState<boolean>(false); // delay hoosk로 빼기
    useEffect(() => {
        setTimeout(() => {
            setShowhello(true);
        }, 1000);
    }, []);

    return (
        <StyledIntro>
            <StyledLogo>FATUBE</StyledLogo>
            <StyledHello>
                {showhello ? <LottieWrapper lottieData={hello} /> : null}
            </StyledHello>
            <StyledStartBtn href="/main">시작하기</StyledStartBtn>
        </StyledIntro>
    );
}

export default Intro;

const StyledHello = styled.div`
    width: 80vw;
    height: 200px;
`;

const StyledLogo = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    text-decoration-line: underline wavy;
`;
const StyledStartBtn = styled(Link)`
    cursor: pointer;
    border: 0.0938rem solid ${({ theme }) => theme.color.grey};
    padding: 0.5rem 0.7rem 0.3rem 0.7rem;
    font-size: 1.8rem;
    transition: border 0.3s ease-in-out 0.1s, transform 0.3s ease-in-out 0.01s;

    &:hover {
        border: 0.0938rem solid ${({ theme }) => theme.color.white};
        transform: translatey(-0.3rem);
    }
    @media screen and (min-width: 768px) {
        padding: 0.5rem 1rem 0.3rem 1rem;
    }
`;

const StyledIntro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100%;
`;
