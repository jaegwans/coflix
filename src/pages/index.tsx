import styled from 'styled-components';
import { useEffect } from 'react';
import Router from 'next/router';

function Index() {
    useEffect(() => {
        //추후 토큰을 이용한 분기처리
        Router.push('/intro');
    }, []);
    return <StyledHome />;
}

export default Index;

const StyledHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    width: 100vw;
    height: 100vh;
`;
