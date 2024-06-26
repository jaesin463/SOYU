import styled from 'styled-components';

/**  헤더  */
function LocalHeader({ children }) {
  return <Header>{children}</Header>;
}

export const Header = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.bgColor};
  z-index: 10;
  ${({ theme }) => theme.font.Title};
  padding: 0px 10px;
  height: 44px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  border-bottom: 1px solid ${({ theme }) => theme.color.grayScale200};
  @media screen and (min-width: 769px) {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

export default LocalHeader;
