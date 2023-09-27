import React, { use, useEffect } from 'react';
import onPush from '@/hooks/onPush';
import LottieWrapper from '@/components/common/LottieWrapper';
import loading from '@/assets/lottie/loading.json';
import styled from 'styled-components';
import useLocalStorage from '@/hooks/useLocalStorage';
function Main() {
    const { getLocalStorage } = useLocalStorage();
    useEffect(() => {
        const data = getLocalStorage('caterory') || { now: '1' };

        document.cookie = `myData=${encodeURIComponent(
            // 쿠키에 등록
            JSON.stringify(data)
        )}; path=/`;

        onPush('/mainRaw', '/main');
    }, []);

    return (
        <StyledLoading>
            <LottieWrapper lottieData={loading} />
            <p>영상 정보를 미리 로드하고 있습니다.</p>
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
