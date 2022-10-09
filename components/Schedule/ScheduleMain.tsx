import React from 'react';
import styled from 'styled-components';
import { ScheduleCard } from './ScheduleCard';

interface ScheduleProps {
  children?: React.ReactNode;
}

export function ScheduleMain({ children }: ScheduleProps) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

export const Schedule = Object.assign(ScheduleMain, {
  card: ScheduleCard,
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10rem;
`;

const Inner = styled.div`
  display: flex;
  padding: 0 var(--padding-container-base);
  width: 1100px;
  flex-direction: column;
`;
