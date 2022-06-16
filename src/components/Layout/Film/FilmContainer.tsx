import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import SideBar from './SideBar';
import { useResize } from '@/hooks';
import { device } from '@/styles';

const STDContainer = styled.div`
  display: flex;

  @media (max-width: 1023px) {
    display: block;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const STDContentWrapper = styled.section<{ height: number }>`
  width: 100%;
  flex: 1;
  height: 100%;
  padding: 24px 16px 0 16px;

  @media ${device.laptop} {
    height: ${({ height }) => `calc(100vh - ${height}px)`};
    padding: 24px 32px 0 24px;
  }
`;

const STDVideoWrapper = styled.div`
  position: relative;
`;

const STDBackgroundImage = styled.img`
  width: 100%;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
`;

const STDImage = styled.img`
  position: absolute;
  width: 100%;
  z-index: 10;
  pointer-events: none;
`;

const STDVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  width: 73%;
  transform: translate(-50%, -50%);
`;

const FilmContainer: React.FC = () => {
  const [navHeight, setNavHeight] = useState(157);
  const { width } = useResize();
  const router = useRouter();
  const { tab } = router.query as { tab: string };
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoEle = videoRef.current;

  useEffect(() => {
    const nav = document.getElementById('nav-bar');
    setNavHeight(nav.offsetHeight);
  }, [width]);

  useEffect(() => {
    if (videoEle) {
      videoEle.load();
      videoEle.play();
    }
  }, [videoEle, tab]);

  return (
    <STDContainer>
      <SideBar navHeight={navHeight} />
      <STDContentWrapper height={navHeight}>
        <STDVideoWrapper>
          <STDVideo ref={videoRef} autoPlay controls muted playsInline loop>
            <source
              src={`${!tab || tab === 'film' ? 'film_full_ver' : 'making'}.mp4`}
              type={'video/mp4'}
            />
          </STDVideo>
          <STDImage src="/image/film/filmBack.png" />
          <STDBackgroundImage src="/image/film/filmBack.png" />
        </STDVideoWrapper>
      </STDContentWrapper>
    </STDContainer>
  );
};

export default FilmContainer;
