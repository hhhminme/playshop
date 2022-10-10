import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface NavigationTitleProps {
  children?: React.ReactNode;
  logo?: boolean;
}

export function NavigationLogo({ logo, children }: NavigationTitleProps) {
  return (
    <Link href="/">
      <Container>
        {logo && (
          <Image
            src="/images/collabee_logo.jpg"
            width={40}
            height={40}
            alt="nav_logo"
          />
        )}
        <Title>{children}</Title>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  margin-left: var(--padding-t-horizontal);
  font-size: var(--font-size-h6);
`;
