import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { mixins, device } from '@/styles';

const STDContainer = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const STDTitle = styled.div`
  margin-bottom: 4px;
  padding-left: 16px;
  font-family: 'pp-mondwest';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  color: #ffffff;

  @media ${device.laptop} {
    padding-left: 0;
    font-size: 28px;
    line-height: 110%;
  }
`;

const STDImageWrapper = styled.div`
  ${mixins.flexSet('flex-start')}
  ${mixins.noScrollbar()}
  width: 100%;
  padding-left: 16px;
  overflow-x: scroll;

  @media ${device.laptop} {
    padding-left: 0;
  }
`;

const STDImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-right: 8px;
  cursor: pointer;
`;

const BottomContentList: React.VFC = () => {
  const router = useRouter();
  const { designer } = router.query as { designer: string };

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const seletcedDesigner = document.getElementById(designer + '_Bottom');
    if (seletcedDesigner) {
      seletcedDesigner.scrollIntoView({ inline: 'start' });
    }
  }, [designer]);

  return (
    <STDContainer>
      <STDTitle>And others →</STDTitle>
      <STDImageWrapper>
        <STDImage
          id="Heyjune_Kim_Bottom"
          src="/image/documents/temp_image1.jpeg"
        />
        <STDImage src="/image/documents/temp_image2.jpeg" />
        <STDImage src="/image/documents/temp_image3.jpeg" />
        <STDImage src="/image/documents/temp_image4.jpeg" />
        <STDImage src="/image/documents/temp_image1.jpeg" />
        <STDImage src="/image/documents/temp_image2.jpeg" />
        <STDImage src="/image/documents/temp_image3.jpeg" />
        <STDImage src="/image/documents/temp_image4.jpeg" />
        <STDImage src="/image/documents/temp_image1.jpeg" />
        <STDImage src="/image/documents/temp_image2.jpeg" />
        <STDImage src="/image/documents/temp_image3.jpeg" />
        <STDImage
          id="Jeonggeun_Lee_Bottom"
          src="/image/documents/temp_image4.jpeg"
        />
        <STDImage src="/image/documents/temp_image1.jpeg" />
        <STDImage src="/image/documents/temp_image2.jpeg" />
        <STDImage src="/image/documents/temp_image3.jpeg" />
        <STDImage src="/image/documents/temp_image4.jpeg" />
      </STDImageWrapper>
    </STDContainer>
  );
};

export default BottomContentList;
