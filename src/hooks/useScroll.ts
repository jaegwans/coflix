import { useState, useEffect } from 'react';

function useScroll() {
    const [scrollTop, setScrollTop] = useState<boolean>(true);

    useEffect(() => {
        const scrollHandler = () => {
            // 전역객체에 등록할 이벤트 핸들러 (스크롤을 전역객체에서 비교 및 감지 )
            const currentScrollPosition = window.scrollY;
            setScrollTop(currentScrollPosition < 15); // 스크롤이 15px 이하일때 true로 state값 변경
        };

        window.addEventListener('scroll', scrollHandler); // 스크롤시 이벤트가 발생하도록 등록

        return () => {
            window.removeEventListener('scroll', scrollHandler); // 벗어날때 이벤트 리스너도 제거
        };
    }, []);

    return {
        scrollTop,
    };
}

export default useScroll;
