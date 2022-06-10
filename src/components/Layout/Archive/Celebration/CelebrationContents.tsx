import { mixins } from '@/styles';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  scrollState: string;
  headHeight: number;
}

const STDCelebrationContainer = styled.div`
  position: relative;
  display: flex;
  padding: 24px 32px 0px 20px;
  width: 100%;

  @media (max-width: 1024px) {
    display: block;
    padding: 16px;
  }
`;

const ImageLayout = styled.div`
  position: relative;
  width: 100%;
`;

const MainImage = styled.img`
  /* height: 66.67%; */
  /* height: 100%; */
  width: 100%;

  @media (max-width: 1024px) {
    min-width: 281px;
    min-height: 172px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 30px;
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

  @media (max-width: 1024px) {
    display: none;
  }
`;

const DescriptionLayout = styled.div<{ headHeight: number }>`
  /* width: 100%; */
  min-width: 405px;
  max-width: 410px;
  padding-left: 30px;
  height: ${(props) => `calc(100vh - ${props.headHeight + 25}px)`};
  overflow-y: scroll;
  ${mixins.noScrollbar()}

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    min-width: 0px;
    max-width: none;
    padding-left: 0px;
    overflow-y: auto;
  }
`;

const MainText = styled.div`
  white-space: pre-wrap;
  font-size: 18px;
  line-height: 30.6px;
  font-family: 'Pretendard';
  color: #fff;
`;

const Title = styled.div`
  white-space: pre-wrap;
  font-size: 18px;
  line-height: 30.6px;
  font-family: 'Pretendard';
  color: #fff;
`;

const CoordinateImage = styled.img<{ scrollState: string }>`
  position: absolute;
  width: calc(100% - 32px);
  height: auto;
  bottom: 0px;
  padding-right: 32px;
  padding-bottom: 24px;
  pointer-events: none;

  @media (max-width: 1024px) {
    display: none;
    position: fixed;
    transform: ${({ scrollState }) =>
      `translateY(${scrollState === 'down' ? 100 : 0}%)`};
    left: 0px;
    display: block;
    width: 100%;
    padding: 0px 16px 10px;
    transition: all 0.8s ease-in-out;
  }
`;

const EndText = styled.div`
  font-family: 'pp-mondwest';
  line-height: 30.8px;
  font-size: 22px;
  color: #fff;
  padding-bottom: 300px;

  @media (max-width: 1024px) {
    padding-bottom: 125px;
  }
`;

const CelebrationContents: React.FC<IProps> = ({ scrollState, headHeight }) => {
  return (
    <STDCelebrationContainer>
      <ImageLayout>
        <MainImage src={'/image/archive/celebration_con.png'} />
        <MediaQueryMainLogoImage src={'/image/main_logo.png'} />
      </ImageLayout>
      <DescriptionLayout headHeight={headHeight}>
        <Title>
          2022 성균관대학교 예술대학
          <br />
          의상학과 졸업패션필름
          <br />
          «좌표원점 : origin of coordinate»
        </Title>
        <br />
        <MainText>
          안녕하십니까! 총장 신동렬 입니다.
          <br />
          <br />
          2020 졸업작품 패션필름 온라인 발표를 진심으로 축하합니다.
          <br />
          우리 대학 의상학과는 매년 수준 높은 졸업작품패션쇼를 개최하는
          자랑스러운 전통을 이어오고 있으며, 특히 이번에는 포스트 코로나 시대와
          4차 산업혁명에 대응하는 새로운 시도를 통한 창의적인 프로그램을
          선보이고 있습니다.
          <br />
          <br />
          졸업 패션필름을 통해 패션을 향한 열정을 보여줄 31명의 졸업을 앞둔
          여러분께 많은 기대와 응원을 표합니다.
          <br />
          앞으로 여러분은 지난 4년여간의 배움을 토대로 다양한 분야에 도전하며
          다채로운 경험을 쌓아가게 될 것입니다. 그간의 값진 노력에 뜨거운 격려의
          박수를 보내며 글로벌 패션산업 및 문화를 선도하는 패션 전문가로 성장해
          자랑스런 성균인이 되어줄 것을 당부합니다.
          <br />
          이번 행사가 있기까지 헌신적으로 지도해주신 학과의 교수님들, 각별한
          사랑과 관심으로 지원을 아끼지 않으시는 학생의 가족 분들, 그리고 이번
          작품전에 관심을 쏟아 주신 모든 분들께 감사의 말씀을 전합니다. 졸업생
          여러분들의 앞날에 발전과 행복이 가득하기를 기원합니다.
        </MainText>
        <br />
        <EndText>
          2020.06.10
          <br />
          성균관대학교 총장
          <br />신 동 렬
        </EndText>
      </DescriptionLayout>
      <CoordinateImage
        src={'/image/archive/celebration.png'}
        scrollState={scrollState}
      />
    </STDCelebrationContainer>
  );
};

export default CelebrationContents;
