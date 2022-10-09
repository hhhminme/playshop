import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { tabState } from '../../recoil/Tab';

interface TabItemProps {
  id: number;
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
  onClick?: (args?: any) => void;
}

interface TabStyleProps {
  clickedId: number;
  tabId: number;
}

export function TabItem({
  id,
  children,
  title,
  subTitle,
  onClick,
}: TabItemProps) {
  const clickedId = useRecoilValue(tabState);
  return (
    <TabContainer tabId={id} clickedId={clickedId}>
      <li onClick={() => onClick?.()}>
        {title}
        <span> {subTitle}</span>
        {children}
      </li>
    </TabContainer>
  );
}

const TabContainer = styled.ul<TabStyleProps>`
  list-style-type: none;
  margin-right: 10rem;

  :last-child {
    margin-right: 0;
  }

  li {
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-bold);
    cursor: pointer;
    color: ${(p) =>
      p.tabId === p.clickedId ? 'var(--black)' : 'var(--grey400)'};
    border-bottom: ${(p) =>
      p.tabId === p.clickedId && '0.5rem solid var(--black)'};
  }

  span {
    font-size: var(--font-size-p);
  }
`;
