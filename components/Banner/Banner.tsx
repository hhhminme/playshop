import styled, { Keyframes, keyframes } from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
export function Banner() {
  const [day, setDay] = useState<string>();
  var dday = new Date('October 13, 2022, 11:00:00').getTime();

  setInterval(function () {
    var today = new Date().getTime();
    var gap = dday - today;
    var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
    var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.ceil((gap % (1000 * 60)) / 1000);

    setDay(`${day}일 ${hour}시간 ${min}분 ${sec}초 남았습니다.`);
  }, 1000);

  return (
    <Container>
      <Inner>
        <ContentLeft boxFade={boxFade}>
          <Title>2022 콜라비 플레이샵에 여러분을 초대합니다.</Title>
          <SubTitle>
            제니와 허브가 준비한 다양한 이벤트와 행사 일정을 바로 만나보세요.
          </SubTitle>
          <Desc>
            이번 플레이샵은 대부도에 위차한 실내온수풀 독채 윈도우즈 월드D에서
            1박 2일 간 진행됩니다.
          </Desc>
          <Desc>
            플레이샵까지 앞으로 <span>{day}</span>
          </Desc>
        </ContentLeft>
        <ContentRight>
          <Image
            src="/images/banner.png"
            width={500}
            height={500}
            alt="사람이 밖으로 손을 꺼내고 신나게 운전하는 모습"
          />
        </ContentRight>
      </Inner>
    </Container>
  );
}

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.section`
  margin-top: var(--navbar-height);
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Inner = styled.div`
  width: 1440px;
  height: auto;
  display: flex;
  padding: 0 var(--padding-container-base);
`;
const ContentLeft = styled.div<{ boxFade: Keyframes }>`
  animation: ${boxFade} 1s linear;
  padding-top: 5rem;
  flex-grow: 1;
`;
const ContentRight = styled.div`
  padding-top: var(--padding-container-base);
`;

const Title = styled.h1`
  font-size: var(--font-size-h1);
  margin-bottom: 1rem;
`;
const SubTitle = styled.h2`
  font-size: var(--font-size-h7);
  margin-bottom: 5rem;
`;

const Desc = styled.p`
  font-size: var(--font-size-p);
  span {
    font-size: var(--font-size-p);
    font-weight: var(--font-weight-bold);
  }
`;
