import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { avatarState } from '../../recoil/Avatar';

interface AvatarProps {
  name: string;
}

export function Avatar({ name }: AvatarProps) {
  const [clickedName, setClickedName] = useRecoilState(avatarState);

  const handleClick = async () => {
    setClickedName(name);
  };
  return (
    <AvatarWrap
      onClick={handleClick}
      clicked={name === clickedName ? true : false}
    >
      <Image
        src={`/avatar/${name}.svg`}
        width={110}
        height={110}
        alt="avatar"
      />
      <p>{name}</p>
    </AvatarWrap>
  );
}

const AvatarWrap = styled.div<{ clicked: boolean }>`
  cursor: pointer;
  border-radius: var(--radius-l);
  background-color: ${(p) => p.clicked && 'var(--grey200)'};
  p {
    font-weight: ${(p) => p.clicked && 'var(--font-weight-bold)'};
  }
`;
