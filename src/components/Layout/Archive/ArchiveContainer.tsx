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
import { useDebounce, useScrollDirection } from '@/hooks';

const STDContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: block;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ArchiveContainer: React.VFC = () => {
  const [prevScrollTop, setPrevScrollTop] = useState(0);
  const [scrollState, setScrollState] = useState<'DOWN' | 'UP' | null>(null);
  const router = useRouter();
  const queryParams = router.query as {
    menu: 'origin-of-coordinate' | 'celebration' | 'thanks-to';
  };
  const { scrollDir } = useScrollDirection({
    initialDirection: 'up',
    thresholdPixels: 10,
    off: false,
  });

  const renderContents = () => {
    switch (queryParams.menu) {
      case 'origin-of-coordinate':
        return <CoordinateContents scrollState={scrollDir} />;

      case 'celebration':
        return <CelebrationContents scrollState={scrollDir} />;

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
