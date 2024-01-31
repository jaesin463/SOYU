import styled from 'styled-components';
import BottomNav from '../molecules/BottomNav';
import BookmarkTab from '../molecules/BookmarkTab';
import Goods from '../molecules/Goods';
import useManageTab from '../../hooks/useManageTab';
import Station from '../molecules/Station';

function Bookmark() {
  const [state, handler] = useManageTab();

  return (
    <>
      <div>HEAD</div>
      <BookmarkTab state={state} handler={handler} />
      <SMainWrap>
        {state === 'heart' ? (
          <ul>
            <Goods />
            <Goods />
            <Goods />
            <Goods />
            <Goods />
            <Goods />
          </ul>
        ) : (
          <Station />
        )}
      </SMainWrap>
      <BottomNav />
    </>
  );
}

export default Bookmark;

const SMainWrap = styled.main`
  padding: 0 16px;
`;
