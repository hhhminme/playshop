import { atom } from 'recoil';

export const tab = atom<number>({
  key: 'tab',
  default: 0,
});
