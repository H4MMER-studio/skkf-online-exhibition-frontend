import { device, mixins } from '@/styles';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  scrollState: string;
  headHeight: number;
}

const STDCoordinateContentsLayout = styled.div`
  position: relative;
  display: flex;
  padding: 24px 32px 0px 20px;
  width: 100%;

  @media (max-width: 1024px) {
    display: block;
    padding: 16px;
  }
`;

const MainImage = styled.img`
  /* height: 66.67%; */
  /* height: 100%; */
  width: 100%;
  max-height: 720px;
  object-fit: contain;

  @media (max-width: 1024px) {
    min-width: 281px;
    min-height: 172px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;

const DescriptionLayout = styled.div<{ headHeight: number }>`
  /* width: 100%; */
  min-width: 405px;
  max-width: 410px;
  padding-left: 30px;
  height: ${(props) => `calc(100vh - ${props.headHeight + 25}px)`};
  overflow-y: scroll;
  padding-bottom: 290px;
  ${mixins.noScrollbar()}

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    max-width: none;
    height: 100%;
    padding-left: 0px;
    min-width: 0px;
    padding-bottom: 110px;
  }

  .kor_style {
    display: inline-block;
    font-size: 16px;
    line-height: 174%;

    @media ${device.laptop} {
      font-size: 18px;
      line-height: 170%;
    }
  }

  .eng_style {
    display: inline-block;
    font-family: 'pp-mondwest';
    font-size: 18px;
    line-height: 145%;

    @media ${device.laptop} {
      font-size: 22px;
      line-height: 140%;
    }
  }
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

  .kor_style {
    font-size: 16px;
    line-height: 174%;

    @media ${device.laptop} {
      font-size: 18px;
      line-height: 170%;
    }
  }

  .eng_style {
    font-family: 'pp-mondwest';
    font-size: 18px;
    line-height: 145%;

    @media ${device.laptop} {
      font-size: 22px;
      line-height: 140%;
    }
  }
`;

const ImageLayout = styled.div`
  position: relative;
  width: 100%;
`;

const CoordinateImage = styled.img<{ scrollState: string }>`
  position: absolute;
  width: calc(100% - 20px);
  height: auto;
  bottom: 0px;
  padding-right: 32px;
  pointer-events: none;

  @media (max-width: 1024px) {
    position: fixed;
    display: block;
    width: calc(100% - 32px);
    padding-right: 0px;
    padding-bottom: 10px;
    transform: ${({ scrollState }) =>
      `translateY(${scrollState === 'down' ? 100 : 0}%)`};
    transition: transform 0.8s ease-in-out;
  }
`;

const MediaQueryMainLogoImage = styled.img`
  display: none;
  width: 100%;

  @media (max-width: 1024px) {
    display: none;
    position: absolute;
    top: 131px;
  }
`;

const CoordinateContents: React.VFC<IProps> = ({ scrollState, headHeight }) => {
  return (
    <STDCoordinateContentsLayout>
      <ImageLayout>
        <MainImage src={'/image/archive/coordinateMain.png'} />
        <MediaQueryMainLogoImage src={'/image/main_logo.png'} />
      </ImageLayout>
      <DescriptionLayout headHeight={headHeight}>
        <Title>
          <p className='eng_style'>2022</p>{' '}
          <p className='kor_style'>성균관대학교 예술대학</p>
          <br />
          <p className='kor_style'>의상학과 졸업패션필름</p>
          <br />«<p className='kor_style'>원점</p>{' '}
          <p className='eng_style'>: Origin of Coordinate</p>»
        </Title>
        <br />
        <br />
        <MainText>
          <p className='kor_style'>
            모든 개인의 삶 속에 존재하는 독창적인 영감의 순간들, 그 곳에서
            시작한 사유들이 모이고 또 흩어지는 과정을 통해 작품은 완성됩니다.
          </p>
          <br />
          <p className='kor_style'>
            마치 무수히 다양한 좌표 위의 점들이 모두 원점으로 향하는 모양과
            같이, 성균관대학교 예술대학 의상학과 학생들의 영감과 사유가 졸업작품
            프로젝트 {'<원점>'}을 향해 모였습니다.
          </p>
          <br />
          <p className='kor_style'>
            네 가지 스테이지 - 31가지의 독창적인 디자인이 담긴 감각적인 패션
            필름을 통해, 저희가 바라는 새로운 세상과 아름다움이 존재하는 곳의
            좌표를 발견할 수 있기를 바랍니다.
          </p>
          <br />
          <p className='eng_style'>
            A work is completed through the process of gathering and scattering
            the thoughts that started from the moments of original inspiration
            that exist in every individual's life.
          </p>
          <br />
          <p className='eng_style'>
            Just as the points on conuntless coordinates all head for the origin
            the inspiraion and thoughts of students in the Deparment of Fashion
            design, SungKyunKwan University College of Art have gathered to
            wards the graduation project {'<Origin of Coordinate>'}
          </p>
          <br />
          <p className='eng_style'>
            Through a senational fashion film with 31 original designs in 4
            stages, we hope that you will discover the coordinates of th new
            world and beauty we desire.
          </p>
        </MainText>
      </DescriptionLayout>
      <CoordinateImage scrollState={scrollState} src={'/image/main_logo.png'} />
    </STDCoordinateContentsLayout>
  );
};

export default CoordinateContents;
