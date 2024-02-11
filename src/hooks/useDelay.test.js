import useDelay from './useDelay';
import { renderHook, act } from '@testing-library/react';

describe('useDelay hooks', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    // 테스트가 끝난 후 실제 타이머로 복원
    afterAll(() => {
        jest.useRealTimers();
    });

    it('useDelay 시간 경과 후 테스트', async () => {
        jest.useFakeTimers();
        const { result } = renderHook(() => useDelay(3000));
        expect(result.current[0]).toBe(false);
        act(() => {
            jest.advanceTimersByTime(3000);
        });
        expect(result.current[0]).toBe(true);
    });

    it('useDelay 시간 경과 전 테스트', async () => {
        jest.useFakeTimers();
        const { result } = renderHook(() => useDelay(4000));
        expect(result.current[0]).toBe(false);
        act(() => {
            jest.advanceTimersByTime(3000);
        });
        expect(result.current[0]).toBe(false);
    });
});
