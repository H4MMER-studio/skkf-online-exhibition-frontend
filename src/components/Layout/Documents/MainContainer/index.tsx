import React, { useState } from 'react';
import styled from 'styled-components';
import { useDebounce, useScrollDirection } from '@/hooks';
import { mixins, device } from '@/styles';

const STDContainer = styled.section`
  padding: 24px 24px 30px;
  margin: 0 auto;
  color: #fff;
`;

const STDContentContainer = styled.main`
  ${mixins.flexSet('center', 'flex-start')}
  flex-wrap: wrap;

  @media ${device.laptop} {
    flex-wrap: nowrap;
  }
`;

const STDContentWrapper = styled.article`
  min-width: 100%;
  flex: 1;
  position: relative;

  .h3_style {
    margin-bottom: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
  }

  .text_style {
    overflow: auto;
    ${mixins.noScrollbar()}
    white-space: pre-line;
    font-family: 'Open Sans', 'pp-mondwest';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    letter-spacing: -0.02em;

    @media ${device.tablet} {
      max-height: 600px;
    }

    @media ${device.laptop} {
      max-height: 450px;
    }

    @media ${device.laptopL} {
      max-height: 300px;
    }
  }

  @media ${device.tablet} {
    min-width: unset;
    margin-right: 36px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const STDGradientBox = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 63px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 78.12%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const STDImageContainer = styled.div<{ isDownScroll: boolean }>`
  position: fixed;
  bottom: 0;
  z-index: 10000;
  width: calc(100% - 48px);

  @media (max-width: 768px) {
    transform: ${({ isDownScroll }) =>
      `translateY(${isDownScroll ? 100 : 0}%)`};
    transition: transform 0.8s ease-in-out;
  }
`;

const STDImageWrapper = styled.div`
  position: relative;
  width: 100%;

  .image_style {
    width: 100%;
  }
`;

const STDVideoWrapper = styled.div`
  position: absolute;
  left: 23.7%;
  bottom: 0px;
  height: 50%;

  img {
    height: 100%;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const DocumentsMainContainer: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState('temp_image1.jpeg');
  const DATA = [
    {
      id: 'Infinitas',
      video: 'temp_image1.jpeg',
      description: `“Infinitas(∞)”는 옷을 형상화하는 골조로 ‘선’에 접근한 스테이지이다. 평면에 그려지는 선과 선이 교차하며 형성된 공간은 개인의 개성을 드러내는 이미지로 형상화된다. 원단 위에 그려지는 무한한 선의 상상을 통해 새로운 이미지를 사유하면서 사유의 접점에서 패션의 가능성을 발견하고자 하였다. \n\n "Infinitas(∞)" is a stage that approaches the 'line' with a frame that embodies clothes. The space formed by crossing the line drawn on the plane is shaped as an image that reveals an individual's personality. Through the imagination of infinite lines drawn on the fabric, we tried to discover the possibility of fashion at the interface of thought while thinking about a new image.`,
    },
    {
      id: 'Spectrum',
      video: 'temp_image2.jpeg',
      description: `고유의 파장을 지닌 채 중첩되어 있던 디자이너들의 사유는 각기 다른 좌표를 추구하며 팔방으로 내닫았다. 원점에서 뻗어 나간 사유는 자신들의 준위에 따라 산재하고 비로소 타자에게 모습을 보인다. 펼쳐진 상상들이 관측되는 순간에 그들은 측정되고, 의미를 부여받고, 존재가 인정된다. “좌표원점”으로 모였던 디자이너들은 각자의방향으로 빛을 쏘았다. 빛들은 저마다의 색으로 흔적을 남겼고, 지금 그 색깔을 공유하고자 한다.\n\nThe thoughts of the designers, which were overlapping with their own wavelengths, went to all directions in pursuit of different coordinates. Thoughts extending from the origin are scattered according to their level, and only then appear to others. The moment unfolded imaginations are observed, they are measured, given meaning, and their existence recognized. The designers who gathered at the “coordinate origin” shot light in their respective directions. The lights left their traces with their own colors, and now we want to share those colors.`,
    },
    {
      id: 'Teleport to',
      video: 'temp_image3.jpeg',
      description: `전체를 결정짓는 작은 디테일에 주목한 "Teleport to [  ]"는 디자이너 각자의 세계관을 상징하는 이미지들을 디테일한 터치로 시각화했다. 상상력을 자극하는 입체적인 이미지를 패션이라는 매체에 구현함으로써, 디자이너가 의도한 세계로 순간 이동하는 체험을 제공하고자 한다.\n\nThe stage "Teleport to [  ]" focused on the details which controls the whole. Each designer visualized their outlook on the world in symbolic and imaginative images with detailed touches. By representing these images in fashion, this stage intends to provide an experience to 'teleport to' the world which designers want to be.`,
    },
    {
      id: 'Textureacity',
      video: 'temp_image4.jpeg',
      description: `“Textureacity”는 소재의 가능성을 보여줌과 동시에 다양한 존재들의 낯설지만 아름다운 조화를 탐구한 스테이지이다. 소재를 바탕으로 8명의 디자이너가 도달하고자 하는 지향점은 다르지만, 서로의 차이를 인정하고 이를 표현하는 과정에서 모든 디자이너들의 개성은 하나의 새로운 아름다움으로 수렴되었다. 각자 다른 소재의 결합으로부터 오는 조화와 대비는 패션의 실루엣부터 분위기까지 변화시키면서 의상에서의 무한한 잠재력을 보여주고 있다.\n\n“Textureacity” is a stage that shows the potential of fabrics and explores the unfamiliar but beautiful harmony of various beings. The eight designers' goals are different based on each fabric. In the process of acknowledging and expressing their differences, however, all designers' personalities converged into one new beauty. Harmony and contrast from the combination of different fabrics change from the silhouette to the mood of style, showing the infinite potential in fashion.`,
    },
  ];
  const debounceImage = useDebounce(selectedItem, 400);
  const { scrollDir } = useScrollDirection({
    initialDirection: 'up',
    off: false,
  });

  return (
    <STDContainer>
      <STDContentContainer>
        {DATA.map(({ id, video, description }) => (
          <STDContentWrapper
            key={id}
            onMouseEnter={() => setSelectedItem(video)}
          >
            <STDGradientBox />
            <h3 className="h3_style">{id}</h3>
            <p className="text_style">
              {description}
              <br />
              <br />
              <br />
            </p>
          </STDContentWrapper>
        ))}
      </STDContentContainer>
      <STDImageContainer isDownScroll={scrollDir === 'down'}>
        <STDImageWrapper>
          <img className="image_style" src="/image/main_logo.png" />
          <STDVideoWrapper>
            <img src={`image/documents/${debounceImage}`} />
          </STDVideoWrapper>
        </STDImageWrapper>
      </STDImageContainer>
    </STDContainer>
  );
};

export default DocumentsMainContainer;
