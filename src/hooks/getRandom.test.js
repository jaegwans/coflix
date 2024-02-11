import { describe } from 'node:test';
import getRandom from './getRandom';

describe('getRandomFunction', () => {
    it('범위 테스트', () => {
        const min = 1;
        const max = 10;
        const result = getRandom(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThan(max);
    });
    it('난수 테스트 ', () => {
        const result = new Set();
        for (let i = 0; i < 100; i++) {
            result.add(getRandom(1, 10));
        }
        expect(result.size).toBeGreaterThan(1);
    });
});
