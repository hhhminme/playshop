import type { NextPage } from 'next';
import { Navigation } from '../components/Navigation';
import { Banner } from '../components/Banner';
import styled from 'styled-components';
import { Tab } from '../components/Tab';
import { useRecoilState } from 'recoil';
import { tabState } from '../recoil/Tab';
import { useCallback } from 'react';
import { Schedule } from '../components/Schedule';
import { ScheduleDayList, TabList } from '../constants/constant';
import { Event } from '../components/Event';
import Head from 'next/head';
const Home: NextPage = () => {
  const [clickedTab, setClickedTab] = useRecoilState(tabState);

  const handleClickTab = useCallback(
    (index: number) => {
      setClickedTab(index);
    },
    [setClickedTab]
  );
  return (
    <Container>
      <Head>
        <title>콜라비 플레이샵</title>
      </Head>
      <Navigation>
        <Navigation.Logo logo>2022 Collabee Playshop</Navigation.Logo>
      </Navigation>
      <Banner />
      <Tab>
        {TabList.length > 0 &&
          TabList.map(({ title, subTitle }, idx) => (
            <Tab.Item
              key={idx}
              id={idx}
              title={title}
              subTitle={subTitle}
              onClick={() => handleClickTab(idx)}
            />
          ))}
      </Tab>
      {clickedTab === 0 ? (
        <Schedule>
          {ScheduleDayList[0].length > 0 &&
            ScheduleDayList[0].map(({ src, title, subTitle, time }) => (
              <Schedule.card
                key={title}
                src={src}
                title={title}
                subTitle={subTitle}
                time={time}
              />
            ))}
        </Schedule>
      ) : (
        <Schedule>
          {ScheduleDayList[1].length > 0 &&
            ScheduleDayList[1].map(({ src, title, subTitle, time }) => (
              <Schedule.card
                key={title}
                src={src}
                title={title}
                subTitle={subTitle}
                time={time}
              />
            ))}
        </Schedule>
      )}
      <Event />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
