import styled from 'styled-components';
import { NavigationLogo } from './NavigationLogo';

interface NavigationMainProps {
  children?: React.ReactNode;
}

function NavigationMain({ children }: NavigationMainProps) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

export const Navigation = Object.assign(NavigationMain, {
  Logo: NavigationLogo,
});

const Container = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--nav-index);
  height: var(--navbar-height);
  width: 100%;
  height: var(--navbar-height);
  background-color: var(--white);
  font-weight: var(--font-weight-bold);
  border-bottom: 0.125rem solid var(--greyOpacity200);
`;

const Inner = styled.div`
  flex: 1;
  justify-content: center;
  max-width: 1440px;
  padding: 0 var(--padding-container-base);
`;
