import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useManittoQuery } from '../../api/manitto';
import { avatarState } from '../../recoil/Avatar';
import { Avatar } from '../Avatar';

function EventMain() {
  const [showEvent, setShowEvent] = useState(false);
  const [sign, setSign] = useState('');
  const clickedName = useRecoilValue(avatarState);
  const ManittoResult = useManittoQuery(clickedName, sign, {
    retry: 0,
    enabled: false,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleClick = () => {
    setShowEvent(true);
  };

  const handleQuiz = () => {
    ManittoResult.refetch();
  };

  const userList = [
    '에반',
    '오제이',
    '앨런',
    '셀린',
    '지미',
    '문타리',
    '루나',
    '해리',
    '길버트',
    '이안',
    '에티엔',
    '제이슨',
    '라이언',
    '할리',
    '앤드류',
    '엘린',
    '헬레나',
  ];
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
          저녁 식사 전까지 마니또를 위한 미션을 성공하고 경품 받아 가세요!
        </p>

        {showEvent ? (
          <div>
            <h4>자신의 케릭터를 골라주세요!</h4>
            <AvatarWrap>
              {userList.map((name) => (
                <Avatar key={name} name={name} />
              ))}
            </AvatarWrap>

            <div>
              {clickedName !== '' && (
                <div>
                  <h4>
                    반가워요! {clickedName} 👋 <br />
                    저희가 알려드린 암호를 입력해주세요.
                  </h4>
                  {ManittoResult.isSuccess && (
                    <div>
                      <p>
                        당신의 마니또는
                        <span> {ManittoResult.data.manitto}</span> 입니다.
                      </p>
                      <p>
                        미션은 <span>{ManittoResult.data.mission}</span> 입니다.
                      </p>
                    </div>
                  )}
                  {ManittoResult.isError && (
                    <div>
                      <p>암호를 다시 한번 확인해주세요.</p>
                    </div>
                  )}
                  <Input
                    placeholder="ex) 요즘잘자쿨냥이"
                    onChange={(e) => setSign(e.target.value)}
                  />
                  <EventButton onClick={handleQuiz}>확인하기</EventButton>
                </div>
              )}
            </div>
          </div>
        ) : (
          <EventButton onClick={handleClick}>
            내 마니또 바로 뽑아보기
          </EventButton>
        )}
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

    span {
      font-size: var(--font-size-p);
      font-weight: var(--font-weight-bold);
    }
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

  :hover {
    background-color: var(--yellow700);
  }
`;

const AvatarWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 200px;
  height: 50px;
  border: 1px solid var(--grey200);
  border-radius: var(--btn-border-radius);
  padding: var(--padding-s-horizontal);
  margin-right: var(--padding-l-horizontal);
  :focus {
    outline: none !important;
  }
`;
