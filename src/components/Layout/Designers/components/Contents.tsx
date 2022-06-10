import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { device, mixins } from '@/styles';
import { ContentsData } from '../DesignersContainer';

interface IProps {
  contentsData: ContentsData;
  headerHeight: number | null;
  setVideoEle: (videoEle: HTMLVideoElement) => void;
}

const STDVideoContainer = styled.div`
  margin-bottom: 24px;
`;

const STDContainer = styled.div<{ height: number }>`
  position: relative;
  height: 100%;
  padding: 0 16px;

  @media ${device.laptop} {
    height: ${(props) => `calc(100vh - ${props.height}px)`};
    padding: 0;
  }
`;

const STDContentsLayout = styled.div<{ height: number }>`
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow-y: scroll;
  ${mixins.noScrollbar()}

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const STDContentBottomSpace = styled.div`
  height: 20px;
  width: 100%;
`;

const STDGradient = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 36px;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 36.63%,
    rgba(0, 0, 0, 0.7) 71.01%,
    #000000 100%
  );

  @media ${device.laptop} {
    display: block;
  }
`;

const STDContentWrapper = styled.div`
  flex: 1;
`;

// const STDVideoWrapper = styled.div`
//   ${mixins.flexSet()}
//   flex-direction: column;

//   @media ${device.laptop} {
//     display: block;
//     flex-direction: row;
//   }
// `;

const STDVideo = styled.video`
  flex: 1;
  width: 100%;
  /* margin-right: 12px; */
`;

const STDImageWrapper = styled.div`
  ${mixins.flexSet('flex-start', 'center', 'column')}
  width: 100%;
  margin-bottom: 0;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.laptop} {
    flex-direction: row;
    margin-bottom: 24px;
  }
`;

const STDImageBox = styled.div`
  flex: 1;
  width: 100%;
  margin-right: 0px;
  margin-bottom: 24px;

  &:last-child {
    margin-right: 0;
  }

  img {
    width: 100%;
  }

  @media ${device.laptop} {
    flex-direction: row;
    margin-right: 12px;
    margin-bottom: 0px;
  }
`;

const STDImageTitle = styled.div`
  ${mixins.flexSet('space-between', 'flex-start')}
  margin-top: 12px;

  .kor {
    margin-bottom: 8px;
    font-family: 'Pretendard', 'pp-mondwest';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 110%;
    color: #ffffff;
  }

  .eng {
    font-family: 'pp-mondwest';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #ffffff;
  }
`;

const STDNumerBox = styled.div`
  margin-left: 8px;
`;

const STDEmptySpace = styled.div`
  flex: 1;
`;

const ScriptLayout = styled.div`
  margin-top: 46px;

  @media ${device.laptop} {
    min-width: 405px;
    max-width: 405px;
    margin-left: 30px;
    margin-top: 0px;
    margin-right: 32px;
  }
`;

const STDScriptExample = styled.div`
  background-color: white;
`;

const STDContentTitleWrapper = styled.div`
  display: none;
  margin-bottom: 36px;

  .kor {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 110%;
    color: #ffffff;
  }

  .eng {
    font-family: 'pp-mondwest';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 110%;
    color: #ffffff;
  }

  @media ${device.laptop} {
    display: block;
  }
`;

const STDContentTitle = styled.p`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const STDContentMainKor = styled.p`
  margin-bottom: 24px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  line-height: 174%;

  @media ${device.laptop} {
    margin-bottom: 36px;
    font-size: 18px;
    line-height: 170%;
  }
`;

const STDContentMainEng = styled.p`
  margin-bottom: 24px;
  font-family: 'pp-mondwest';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 145%;
  color: #ffffff;

  @media ${device.laptop} {
    margin-bottom: 36px;
  }
`;

const STDEmail = styled.a`
  font-family: 'pp-mondwest';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 145%;
  color: #ffffff;
  text-decoration: underline;
`;

const Contents: React.VFC<IProps> = ({
  contentsData,
  headerHeight,
  setVideoEle,
}) => {
  const router = useRouter();
  const { designer } = router.query as { designer: string };
  const contentElement = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoEle = videoRef.current;
  const currentData =
    contentsData.find(({ id }) => id === designer) ?? contentsData[0];

  useEffect(() => {
    if (window.innerWidth > 1023) {
      if (contentElement) {
        contentElement.current.scrollIntoView({ block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [designer]);

  useEffect(() => {
    if (videoEle) {
      setVideoEle(videoEle);
    }
  }, [videoEle]);

  return (
    <STDContainer height={headerHeight + 195 + 24}>
      <STDGradient />
      <STDContentsLayout height={headerHeight + 195 + 24}>
        <STDContentWrapper>
          <STDVideoContainer ref={contentElement}>
            <STDVideo ref={videoRef} autoPlay controls muted>
              <source src={`film_full_ver.mp4`} type={'video/mp4'} />
            </STDVideo>
            <STDImageTitle>
              <div>
                <p className="kor">{currentData.title.kor}</p>
                <p className="eng">{currentData.title.eng}</p>
              </div>
            </STDImageTitle>
          </STDVideoContainer>
          {currentData.contents.map((contents, index1) => (
            <STDImageWrapper key={currentData.id + index1}>
              {contents.map(({ url, type, order }) => (
                <>
                  <STDImageBox key={url}>
                    <img src={url} />
                    <STDImageTitle>
                      <div>
                        <p className="kor">{currentData.title.kor}</p>
                        <p className="eng">{currentData.title.eng}</p>
                      </div>
                      <STDNumerBox className="eng">{order}</STDNumerBox>
                    </STDImageTitle>
                  </STDImageBox>
                  {type === 'row' && contents.length === 1 ? (
                    <STDEmptySpace />
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </STDImageWrapper>
          ))}
          <STDContentBottomSpace />
        </STDContentWrapper>
        <ScriptLayout>
          <STDContentTitleWrapper>
            <STDContentTitle className="eng">
              {currentData.coordinate}
            </STDContentTitle>
            <STDContentTitle className="kor">
              {currentData.koreanName}
            </STDContentTitle>
            <STDContentTitle className="eng">
              {currentData.englishName}
            </STDContentTitle>
          </STDContentTitleWrapper>
          <STDContentMainKor>{currentData.contentsText.kor}</STDContentMainKor>
          <STDContentMainEng>{currentData.contentsText.eng}</STDContentMainEng>
          <STDEmail href={`mailto:${currentData.email}`}>
            {currentData.email}
          </STDEmail>
          <STDContentBottomSpace />
        </ScriptLayout>
      </STDContentsLayout>
    </STDContainer>
  );
};

export default Contents;
