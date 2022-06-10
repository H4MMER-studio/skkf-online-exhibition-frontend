import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from 'react';
import styled from 'styled-components';
import ThanksToContents from './ThanksTo/ThanksToContents';
import MenuBar from './components/MenuBar';
import { useRouter } from 'next/router';
import CoordinateContents from './Coordinate/CoordinateContents';
import CelebrationContents from './Celebration/CelebrationContents';
import { useScrollDirection, useResize } from '@/hooks';

const STDContainer = styled.div`
  display: flex;

  @media (max-width: 1023px) {
    display: block;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ArchiveContainer: React.VFC = () => {
  const router = useRouter();
  const queryParams = router.query as {
    menu: 'origin-of-coordinate' | 'celebration' | 'thanks-to';
  };
  const { scrollDir } = useScrollDirection({
    initialDirection: 'up',
    thresholdPixels: 10,
    off: false,
  });
  const { width } = useResize();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const nav = document.getElementById('nav-bar');
    setHeaderHeight(nav.offsetHeight);
  }, [width]);

  const renderContents = () => {
    switch (queryParams.menu) {
      case 'origin-of-coordinate':
        return (
          <CoordinateContents
            scrollState={scrollDir}
            headHeight={headerHeight}
          />
        );

      case 'celebration':
        return (
          <CelebrationContents
            scrollState={scrollDir}
            headHeight={headerHeight}
          />
        );

      case 'thanks-to':
        return <ThanksToContents scrollState={scrollDir} />;
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
