import React from 'react';
import styled from 'styled-components';

const STDCoordinateContentsLayout = styled.div`
  position: relative;
  display: flex;
  padding: 24px 32px 0px 20px;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
    padding: 16px;
  }
`;

const MainImage = styled.img`
  /* height: 66.67%; */
  /* height: 100%; */
  width: 100%;

  @media (max-width: 1024px) {
    min-width: 281px;
    min-height: 172px;
  }
`;

const DescriptionLayout = styled.div`
  /* width: 100%; */
  min-width: 405px;
  padding-left: 30px;
`;

const Title = styled.div`
  white-space: pre-wrap;
  font-size: 18px;
  line-height: 30.6px;
  font-family: 'Pretendard';
  color: #fff;
`;

const MainText = styled.div`
  white-space: pre-wrap;
  font-size: 18px;
  line-height: 30.6px;
  font-family: 'Pretendard';
  color: #fff;
`;

const ImageLayout = styled.div`
  position: relative;
  width: 100%;
`;

const CoordinateImage = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0px;
  padding-right: 32px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MediaQueryMainLogoImage = styled.img`
  display: none;
  width: 100%;

  @media (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 131px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CoordinateContents: React.VFC = () => {
  return (
    <STDCoordinateContentsLayout>
      <ImageLayout>
        <MainImage src={'/image/archive/coordinateMain.png'} />
        <MediaQueryMainLogoImage src={'/image/main_logo.png'} />
      </ImageLayout>
      <DescriptionLayout>
        <Title>
          2022 성균관대학교 예술대학
          <br />
          의상학과 졸업패션필름
          <br />
          «좌표원점 : origin of coordinate»
        </Title>
        <MainText></MainText>
      </DescriptionLayout>
      <CoordinateImage src={'/image/main_logo.png'} />
    </STDCoordinateContentsLayout>
  );
};

export default CoordinateContents;
