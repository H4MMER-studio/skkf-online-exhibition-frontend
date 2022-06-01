import { device, mixins } from '@/styles';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface IProps {
  headerHeight: number | null;
  setVideoEle: (videoEle: HTMLVideoElement) => void;
}

const STDContentsLayout = styled.div<{ height: number }>`
  display: flex;
  height: 100%;
  padding: 0 16px;
  overflow-y: scroll;
  ${mixins.noScrollbar()}

  @media ${device.laptop} {
    height: ${(props) => `calc(100vh - ${props.height}px)`};
    padding: 0;
  }
`;

const STDContentWrapper = styled.div`
  flex: 1;
`;

const Video = styled.video`
  width: 100%;
  margin-bottom: 10px;
`;

const STDImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const ScriptLayout = styled.div`
  min-width: 367px;
  margin-left: 20px;
`;

const STDScriptExample = styled.div`
  background-color: white;
`;

const Contents: React.VFC<IProps> = ({ headerHeight, setVideoEle }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoEle = videoRef.current;

  useEffect(() => {
    if (videoEle) {
      setVideoEle(videoEle);
    }
  }, [videoEle]);

  return (
    <STDContentsLayout height={headerHeight + 195 + 24}>
      <STDContentWrapper>
        <Video ref={videoRef} autoPlay>
          <source
            src={
              'https://skkf-online-exhibition-files.s3.ap-northeast-2.amazonaws.com/test.mp4'
            }
            type={'video/mp4'}
          />
        </Video>
        <STDImage src="/image/documents/temp_image1.jpeg" />
        <STDImage src="/image/documents/temp_image2.jpeg" />
        <STDImage src="/image/documents/temp_image3.jpeg" />
        <STDImage src="/image/documents/temp_image4.jpeg" />
      </STDContentWrapper>
      <ScriptLayout>
        <STDScriptExample>스크립트 들어갈곳</STDScriptExample>
      </ScriptLayout>
    </STDContentsLayout>
  );
};

export default Contents;
