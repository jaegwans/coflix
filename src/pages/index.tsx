import styled from 'styled-components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Index() {
    const router = useRouter();
    useEffect(() => {
        //추후 토큰을 이용한 분기처리
        router.push('/intro');
    }, [router]);
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
