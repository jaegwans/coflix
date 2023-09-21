import { atom } from 'recoil';

export const videoListsState = atom({
    key: 'videoListsState',
    default: [],
});
export const keywordsState = atom({
    key: 'keywordsState',
    default: [] as any, // 추후 수정 필요
});
