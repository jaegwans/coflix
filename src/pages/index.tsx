import styled from 'styled-components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isVisited } from '@/hooks/visited';

function Index() {
    const router = useRouter();
    useEffect(() => {
        if (isVisited()) router.push('/main');
        else router.push('/intro');
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
