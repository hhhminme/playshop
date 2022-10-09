import styled from 'styled-components';
import { TabItem } from './TabItem';

interface TabProps {
  children?: React.ReactNode;
}

export function TabMain({ children }: TabProps) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

export const Tab = Object.assign(TabMain, {
  Item: TabItem,
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10rem;
`;

const Inner = styled.div`
  justify-content: center;
  display: flex;
  padding: 0 var(--padding-container-base);
  width: 1440px;
`;
