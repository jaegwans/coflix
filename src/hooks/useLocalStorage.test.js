import { describe } from 'node:test';
import useLocalStorage from './useLocalStorage';
import { renderHook, act } from '@testing-library/react';

const mockLocalStorage = (function () {
    let store = {};
    return {
        getItem(key) {
            return store[key] || null;
        },
        setItem(key, value) {
            store[key] = String(value);
        },
        clear() {
            store = {};
        },
    };
})();

describe('useLocalStorage', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
            value: mockLocalStorage,
        });
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('setter getter test', async () => {
        const { result } = renderHook(() => useLocalStorage('test'));
        expect(result.current.isSet).toBe(false);
        await act(() => {
            result.current.setLocalStorage('test', '1');
        });
        await expect(result.current.getLocalStorage('test')).toBe('1');
        expect(result.current.isSet).toBe(true);
    });
    it('getter fail test', async () => {
        const { result } = renderHook(() => useLocalStorage('test'));
        expect(result.current.isSet).toBe(false);
        await act(() => {
            result.current.setLocalStorage('test', '1');
        });
        await expect(result.current.getLocalStorage('test2')).toBe(null);
    });
});
