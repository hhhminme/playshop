import Image from 'next/image';
import { useReducer } from 'react';
import styled from 'styled-components';
import { devices } from '../../constants/constant';

interface ScheduleCardProps {
  src: string;
  title: string;
  subTitle: string;
  time: string;
}

interface ScheduleCardStyleProps {
  hover: boolean;
}

interface HoverAction {
  type: 'HOVER' | 'LEAVE';
}

const hoverReducer = (state: boolean, action: HoverAction) => {
  switch (action.type) {
    case 'HOVER':
      return true;
    case 'LEAVE':
      return false;
    default:
      return state;
  }
};

export function ScheduleCard({
  src,
  title,
  subTitle,
  time,
}: ScheduleCardProps) {
  const [hover, dispatch] = useReducer(hoverReducer, false);

  const handleHover = () => {
    dispatch({ type: 'HOVER' });
  };

  const handleLeave = () => {
    dispatch({ type: 'LEAVE' });
  };
  return (
    <CardWrapper onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <ImageWrap hover={hover}>
        <Image
          src={src}
          layout="fill"
          objectFit="contain"
          alt="schedule_img"
          quality={30}
          priority
        />
      </ImageWrap>
      <CardContent hover={hover}>
        <h3>{title}</h3>
        <h6>{subTitle}</h6>
        <p>{time}</p>
      </CardContent>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: var(--padding-container-base);

  :last-child {
    margin-bottom: 0;
  }
`;

const ImageWrap = styled.div<ScheduleCardStyleProps>`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: var(--radius-m);
  flex-shrink: 0;
  @media ${devices.mobile} {
    width: 140px;
    height: 140px;
  }

  img {
    border-radius: var(--radius-m);
    overflow: 'hidden';
  }

  // box-shadow: ${(p) => p.hover && 'var(--shadow-l)'};
  top: ${(p) => p.hover && '-7%'};
`;

const CardContent = styled.div<ScheduleCardStyleProps>`
  display: flex;
  flex-direction: column;
  margin-left: var(--padding-container-base);
  @media ${devices.mobile} {
    margin-left: var(--padding-l-horizontal);

    font-size: var(--font-size-h4);
  }

  h3 {
    font-size: var(--font-size-h3);
    font-weight: var(--font-weight-bold);
    color: ${(props) => props.hover && '#d7a601'};
    text-shadow: ${(p) => p.hover && '1px 1px 20px#fdf6e1'};
    @media ${devices.mobile} {
      font-size: var(--font-size-h4);
    }
  }
  h6 {
    font-size: var(--font-size-h7);
    font-weight: var(--font-weight-regular);
    color: var(--grey700);
    flex: 1;
  }

  p {
    font-size: var(--font-size-p);
    font-weight: var(--font-weight-regular);
    color: var(--grey500);

    @media ${devices.mobile} {
      font-size: var(--font-size-sm);
    }
  }
`;
