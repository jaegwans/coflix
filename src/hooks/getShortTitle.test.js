import { describe } from 'node:test';
import getShortTitle from './getShortTitle';

describe('getShortTitle', () => {
    it('문자열 길이가 20자 이하인 경우', () => {
        const result = getShortTitle('12345678901234567890');
        expect(result).toBe('12345678901234567890');
    });
    it('문자열 길이가 20자 초과인 경우', () => {
        const result = getShortTitle('123456789012345678901');
        expect(result).toBe('12345678901234567890...');
    });
    it('문자열의 길이가 n개 이하인 경우', () => {
        const result = getShortTitle('123456789012345678901', 15);
        expect(result).toBe('123456789012345...');
    });
    it('문자열의 길이가 n개 초과인 경우', () => {
        const result = getShortTitle('123456789012345678901', 25);
        expect(result).toBe('123456789012345678901');
    });
});
