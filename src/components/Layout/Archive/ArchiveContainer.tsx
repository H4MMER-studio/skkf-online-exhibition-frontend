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
import { useDebounce } from '@/hooks';

const STDContainer = styled.div`
  display: flex;
  height: calc(100vh - 125px);
  overflow: hidden;

  @media (max-width: 768px) {
    display: block;
    overflow-y: scroll;

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

  const debouncedScroll = useDebounce(prevScrollTop, 1500);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollEle = scrollRef.current;

  const renderContents = () => {
    switch (queryParams.menu) {
      case 'origin-of-coordinate':
        return <CoordinateContents />;

      case 'celebration':
        return <CelebrationContents scrollState={scrollState} />;

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

  const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
      if (timerId) return;
      timerId = setTimeout(() => {
        callback.call(this, e);
        timerId = null;
      }, waitTime);
    };
  };

  const handleScroll = useCallback(
    (e) => {
      const diff = e.target.scrollTop - prevScrollTop;
      // console.log('작동안해?', diff, e.target.scrollTop, prevScrollTop);

      if (diff > 0) {
        setScrollState('DOWN');
      } else if (diff < 0) {
        // console.log('올라가는 중 이라며');
        setScrollState('UP');
      }

      setPrevScrollTop(e.target.scrollTop);
    },
    [prevScrollTop]
  );

  // console.log(prevScrollTop, '제발');

  // const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    // console.log(scrollRef.current.scrollTop)
    // console.log('와우');
  }, [debouncedScroll]);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
      return () =>
        scrollRef.current.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <STDContainer ref={scrollRef}>
      <MenuBar selectedMenu={queryParams.menu} clickMenu={clickMenu} />
      {renderContents()}
    </STDContainer>
  );
};

export default ArchiveContainer;
