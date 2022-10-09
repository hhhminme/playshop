import React from 'react';
import styled from 'styled-components';

function EventMain() {
  return (
    <Container>
      <Inner>
        <h3>두근두근 플레이샵 한정 이벤트</h3>
        <h4>나의 마니또는 누구?</h4>
        <p>
          이번 1박 2일간 두근거리며 마니또에게 사랑을 담아 미션을 수행해야
          합니다.
          <br />
          마니또는 당신의 존재를 모르며 당신 또한 마니또에게 존재를 들켜선
          안됩니다.
          <br />
          저녁 식사 전까지 마니또를 위한 미션을 성공하고 경품 받아가세요!
        </p>
        <EventButton>내 마니또 바로 뽑아보기</EventButton>
      </Inner>
    </Container>
  );
}

export const Event = Object.assign(EventMain, {});

const Container = styled.div`
  margin-top: var(--padding-container-base);
  display: flex;
  padding: 10rem 0;
  background-color: var(--grey100);
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  padding: 0 var(--padding-container-base);
  width: 1100px;
  flex-direction: column;
  text-align: center;
  align-items: center;

  h3 {
    margin-bottom: var(--padding-m-horizontal);
    font-size: var(--font-size-h3);
  }
  h4 {
    margin-bottom: var(--padding-container-base);
    font-size: var(--font-size-h4);
  }
  p {
    margin-bottom: var(--padding-container-base);
    font-size: var(--font-size-p);
  }
`;

const EventButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #d9ac2b;
  border: none;
  border-radius: var(--btn-border-radius);
  color: var(--white);
  font-size: var(--btn-font-size);
  font-weight: 600;
  cursor: pointer;
`;
