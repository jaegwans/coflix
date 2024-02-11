import useScroll from './useScroll';
import { renderHook, act } from '@testing-library/react';

describe('useScroll hooks', () => {
    const setScrollY = (y) => {
        Object.defineProperty(window, 'scrollY', {
            value: y,
            configurable: true,
        });
        window.dispatchEvent(new Event('scroll'));
    };

    it('15미만 스크롤', () => {
        const { result } = renderHook(() => useScroll());

        act(() => {
            setScrollY(10); // 스크롤 위치를 10px로 설정
        });

        expect(result.current.scrollTop).toBe(true);
    });
    it('15이상 스크롤', () => {
        const { result } = renderHook(() => useScroll());

        act(() => {
            setScrollY(20); // 스크롤 위치를 20px로 설정
        });

        expect(result.current.scrollTop).toBe(false);
    });
});
