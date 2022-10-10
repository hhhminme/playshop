import React from 'react';
import styled from 'styled-components';
import { devices } from '../../constants/constant';
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

  max-width: 1100px;
  flex-direction: column;
`;
