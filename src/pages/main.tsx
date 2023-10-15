import React, { use, useEffect } from 'react';
import onPush from '@/hooks/onPush';
import LottieWrapper from '@/components/common/LottieWrapper';
import loading from '@/assets/lottie/loading.json';
import styled from 'styled-components';
import useLocalStorage from '@/hooks/useLocalStorage';
import keywords from '@/data/Search/keywords.json';
function Main() {
    const { getLocalStorage } = useLocalStorage();
    useEffect(() => {
        const data = getLocalStorage('category') || keywords;

        document.cookie = `myData=${encodeURIComponent(
            JSON.stringify(data)
        )}; path=/; secure; samesite=strict`;

        onPush('/mainRaw', '/main');
    }, []);

    return (
        <StyledLoading>
            <LottieWrapper lottieData={loading} />
            <p>영상 정보를 미리 로드하고 있습니다.test3</p>
        </StyledLoading>
    );
}

export default Main;

const StyledLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    p {
        font-size: 1.2rem;
        margin-top: 1rem;
    }
`;
