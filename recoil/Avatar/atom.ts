import { atom } from 'recoil';

export const avatarState = atom<string>({
  key: 'avatarState',
  default: '',
});
