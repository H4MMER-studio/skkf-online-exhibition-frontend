import React from 'react';
import styled, { css } from 'styled-components';
import { mixins, device } from '@/styles';

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
  height: ${(props) => `calc(100vh - ${props.headHeight + 25}px)`};
  padding-left: 30px;

  overflow-y: scroll;
  ${mixins.noScrollbar()}

  &:first-child {
    margin-top: 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    min-width: 0px;
    max-width: none;
    padding-left: 0px;
    overflow-y: auto;
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

const MainText = styled.div`
  white-space: pre-wrap;
  font-family: 'Pretendard';
  color: #fff;
  font-size: 16px;
  line-height: 174%;

  @media ${device.laptop} {
    font-size: 18px;
    line-height: 170%;
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

const Title = styled.div`
  white-space: pre-wrap;
  font-size: 18px;
  line-height: 30.6px;
  font-family: 'pp-mondwest', 'Pretendard';
  color: #fff;

  @media ${device.laptop} {
    font-size: 22px;
    line-height: 140%;
  }
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

const EndText = styled.div<{ isLast?: boolean }>`
  font-family: 'pp-mondwest';
  font-size: 16px;
  line-height: 174%;
  color: #fff;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid white;
  ${({ isLast }) =>
    isLast &&
    css`
      border: none;
      padding-bottom: 300px;
    `}

  @media ${device.laptop} {
    font-size: 18px;
    line-height: 170%;
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

const CelebrationContents: React.FC<IProps> = ({ scrollState, headHeight }) => {
  return (
    <STDCelebrationContainer>
      <ImageLayout>
        <MainImage src={'/image/archive/celebration_con.png'} />
        <MediaQueryMainLogoImage src={'/image/main_logo.png'} />
      </ImageLayout>
      <DescriptionLayout headHeight={headHeight}>
        <Title>
          <p className="eng_style">2022</p>{' '}
          <p className="kor_style">성균관대학교 예술대학</p>
          <br />
          <p className="kor_style">의상학과 졸업패션필름</p>
          <br />«<p className="kor_style">좌표원점</p>{' '}
          <p className="eng_style">: origin of coordinate</p>»
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
          앞으로 여러분은 지난 <span className="eng_style">4</span>년여간의
          배움을 토대로 다양한 분야에 도전하며 다채로운 경험을 쌓아가게 될
          것입니다. 그간의 값진 노력에 뜨거운 격려의 박수를 보내며 글로벌
          패션산업 및 문화를 선도하는 패션 전문가로 성장해 자랑스런 성균인이
          되어줄 것을 당부합니다.
          <br />
          이번 행사가 있기까지 헌신적으로 지도해주신 학과의 교수님들, 각별한
          사랑과 관심으로 지원을 아끼지 않으시는 학생의 가족 분들, 그리고 이번
          작품전에 관심을 쏟아 주신 모든 분들께 감사의 말씀을 전합니다. 졸업생
          여러분들의 앞날에 발전과 행복이 가득하기를 기원합니다.
        </MainText>
        <br />
        <EndText>
          <span className="eng_style">2020.06.10</span>
          <br />
          성균관대학교 총장
          <br />신 동 렬
        </EndText>
        <MainText>
          <span className="eng_style">21</span>세기 글로벌 패션 산업을 이끌어갈
          성균관대학교 예술대학 의상학과의 졸업작품전을 축하합니다.
          <br /> 코로나 <span className="eng_style">19</span>가 지속되는 어려운
          상황 속에서도 의상학과 교수님들과 학생들이 패션필름 발표를 통해
          의상학과 졸업작품 패션전의 역사를 이어가고 있습니다. 특히 이번
          졸업작품은 <span className="eng_style">31</span>명의 학생들이
          “좌표원점”이라는 대주제 아래 완성도 높은 작품을 선보이게 되었습니다.
          이러한 경험은 사회에 나아가서도 마음껏 꿈을 펼칠 수 있도록 해 줄
          원동력이 될 것입니다.
          <br />
          <br />
          예술대학 의상학과 학생 여러분들은 졸업작품을 준비하고 발표하기까지의
          긴 과정 속에서 수많은 난관에 부딪혔을 것입니다. 하지만 이러한 위기들을
          이겨내며, 그 노력의 결과물을 글로벌하게 공유할 수 있는 컨텐츠를
          제작함으로써 모두가 스스로의 성장에 한 발 더 다가섰을 것이라고
          기대합니다. 이처럼 학생들이 저마다 택하여 걸어온 배움의 결과로서
          발표하는 졸업작품을 감상하는 것은 항상 설레는 일이며, 쉽지 않았을
          시도를 성공적으로 마무리했다는 사실이 자랑스럽습니다.
          <br />
          <br /> 이번 졸업작품전을 위해 지도해주신 의상학과 교수님들뿐 아니라
          우리 학생들이 사회를 향해 ‘성균인’으로 성장할 수 있도록 키워주시고
          돌봐 주신 학부모님들께도 감사의 말씀을 드립니다. 성균관대학교 예술대학
          의상학과의 무궁한 발전을 기원하며 다시 한 번 진심으로 졸업작품전을
          축하합니다.
        </MainText>
        <br />
        <EndText>
          <span className="eng_style">2020.06.10</span>
          <br />
          성균관대학교 예술대학장
          <br />정 지 숙
        </EndText>
        <MainText>
          지속된 팬데믹 상황으로 인한 제한된 교육 환경에서도 우리 성균관대학교
          의상학과 학생들은 지난 일 년간 온•오프라인을 오가는 수업을 통해
          졸업작품전올 준비하였습니다. 패션에 열정을 품고 입학한 이래 오늘의
          행사에 이르기까지 긴 배움의 여정의 결과를 증명하는 한 작품 한 작품에
          박수를 보냅니다.
          <br />
          <br />
          그동안 열과 성의를 다해 이번 예비 졸업생들을 지도해주신 조경숙, 장성은
          교수님을 비롯한 학과 교수님들과 지금까지 우리 학생들을 물심양면으로
          지원해 주신학부모님들, 작품전을 위해 지원과 협조를 보내주신 모든
          관계자분들께 깊이 감사드립니다.
          <br />
          마지막으로 이번 작품전을 위해 어려운 시간 속에서도 밤낮으로 최선올
          다해 준비하며 졸업올 앞두게 된 여러분 모두에게 아름답고 멋진 미래가
          펼쳐지기를 진심으로 기원합니다.
        </MainText>
        <br />
        <EndText>
          <span className="eng_style">2020.06.10</span>
          <br />
          성균관대학교 의상학과장
          <br />서 승 희
        </EndText>
        <MainText>
          코로나 팬데믹으로 모든 이들에게 많은 변수와 혼란을 안겨 준지 어언
          <span className="eng_style">3</span>년째, 잃어버린 캠퍼스 라이프를
          되찾고 예전처럼 졸업 패션쇼를 꿈꾸었으나 올해에도 패션 필름으로
          마주하게 되었습니다. 어려운 상황 속에서 디자인 작업과 작품 실물 제작만
          해도 학생 개개인들에게 큰 도전이었지만, 작품을 영상으로 연출하고
          온라인 공간에서 기록하는 것 또한 많은 용기가 필요했습니다. 모두
          포기하지 않고 끝까지 프로젝트를 건강하고 무사히 마칠 수 있게 되어
          기쁩니다.
          <br />
          <br />
          우선 <span className="eng_style">31</span>명의 디자이너를{' '}
          <span className="eng_style">1</span>년동안 이끌어주신 조경숙, 장성은
          지도 교수님께 무한한 감사를 드리며, 저희를 믿고 묵묵히 응원과 보탬이
          되어주신 부모님들께도 감사드립니다. 그리고 항상 아낌없는 열정으로
          저희를 가르쳐 주시는 학과 교수님들, 의상학과 동문 선후배님을 비롯하여
          이번 졸업 패션 필름을 위해 도움 주신 분들께 진심으로 감사의 말씀을
          전합니다.
          <br />
          <br />
          마찬가지로 <span className="eng_style">31</span>명의 예비 졸업생 분들
          모두 수고 많았고 부족한 저를 따르고 믿어주셔서 감사했습니다. 모두의
          값진 노력과 경험은 결코 배신하지 않을 것이며, 앞으로의 패션 업계에서
          빛을 바랄 것이라 믿습니다. <span className="eng_style">22’</span>
          졸업작품전 디자이너 모두 화이팅/수고 많았습니다.
        </MainText>
        <br />
        <EndText isLast>
          <span className="eng_style">2020.06.10</span>
          <br />
          성균관대학교 준비위원장
          <br />최 희 재
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
