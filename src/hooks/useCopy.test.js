import { describe } from 'node:test';
import useCopy from './useCopy';
import { renderHook, act, waitFor } from '@testing-library/react';

describe('useCopy', () => {
    let originalConsoleError;

    beforeAll(() => {
        global.navigator.clipboard = {
            writeText: jest.fn().mockResolvedValue('Mocked text'),
        };

        originalConsoleError = console.error;
        // console.error 모킹하여 에러 로그 억제
        console.error = jest.fn();
    });

    afterAll(() => {
        // 테스트 후에 console.error를 원래대로 복원
        console.error = originalConsoleError;
    });

    it('복사 테스트', async () => {
        const { result } = renderHook(() => useCopy('test_test')); //준비
        await act(async () => {
            //실행
            await result.current.getCopy();
            await waitFor(
                () => {
                    return result.current.copied;
                },
                {
                    timeout: 3000,
                }
            );
        });
        //검증
        expect(result.current.copied).toBeTruthy();
        expect(navigator.clipboard.writeText).toBeCalledWith('test_test');
    });

    it('copied 원복 테스트', async () => {
        jest.useFakeTimers();

        const { result } = renderHook(() => useCopy('test_test'));

        await act(async () => {
            await result.current.getCopy();
            await jest.advanceTimersByTime(6000);
        });

        expect(result.current.copied).toBeFalsy();
    });
    it('handles error on copy failure', async () => {
        // writeText 메서드가 실패하도록 설정
        navigator.clipboard.writeText.mockRejectedValue(
            new Error('copy failed')
        );

        const { result } = renderHook(() => useCopy('test text'));

        await act(async () => {
            result.current.getCopy();
        });

        // 에러 상태가 예상한 에러 객체로 설정되었는지 검증
        expect(result.current.err).toEqual(new Error('copy failed'));
        // copied 상태가 false인지 검증
        expect(result.current.copied).toBe(false);
    });
});
