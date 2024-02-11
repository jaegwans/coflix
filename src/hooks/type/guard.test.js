import { describe } from 'node:test';
import { isNumber } from './guard';

describe('isNumber', () => {
    it('guard 함수 테스트 undefined', () => {
        const result = isNumber(null);
        expect(result).toBe(false);
    });
    it('guard 함수 테스트 undefined', () => {
        const result = isNumber(undefined);
        expect(result).toBe(false);
    });
    it('guard 함수 테스트 undefined', () => {
        const result = isNumber(10);
        expect(result).toBe(true);
    });
});
