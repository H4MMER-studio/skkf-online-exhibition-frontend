import React from 'react';
import styled from 'styled-components';
import ThanksToContents from './ThanksTo/ThanksToContents';
import MenuBar from './components/MenuBar';
import { useRouter } from 'next/router';
import CoordinateContents from './Coordinate/CoordinateContents';

const STDContainer = styled.div`
  display: flex;
  height: calc(100vh - 125px);
  overflow: hidden;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ArchiveContainer: React.VFC = () => {
  const router = useRouter();
  const queryParams = router.query as {
    menu: 'origin-of-coordinate' | 'celebration' | 'thanks-to';
  };

  const renderContents = () => {
    switch (queryParams.menu) {
      case 'origin-of-coordinate':
        return <CoordinateContents />;

      case 'thanks-to':
        return <ThanksToContents />;
      default:
        break;
    }
  };

  const clickMenu = (
    menu: 'origin-of-coordinate' | 'celebration' | 'thanks-to'
  ) => {
    router.push(`/archive/${menu}`);
  };

  return (
    <STDContainer>
      <MenuBar selectedMenu={queryParams.menu} clickMenu={clickMenu} />
      {renderContents()}
    </STDContainer>
  );
};

export default ArchiveContainer;
