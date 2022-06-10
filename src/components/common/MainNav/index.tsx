import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { device, mixins } from '@/styles';
import { useResize, useScrollDirection } from '@/hooks';

interface IProps {
  selectedMenu: string;
  onClickMenu(menu: string): void;
}

const STDContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 12px 0 0;
  border-bottom: 1px solid #fff;
  background-color: black;

  @media ${device.laptop} {
    padding: 16px 0;
  }

  .wrapper {
    flex-direction: column;
    padding: 0 16px;
    margin: 0 auto;
    overflow: hidden;

    @media ${device.laptop} {
      ${mixins.flexSet('space-between')}
      padding: 0 24px;
    }
  }

  .menu_font_style {
    margin-bottom: 2px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #fff;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .flex_column {
    ${mixins.flexSet('center', 'flex-start', 'column')}
    width: 100px;
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }

    @media ${device.laptop} {
      width: 120px;
      margin-right: 8px;
    }
  }
`;

const STDGnbButton = styled.button<{ isSelected?: boolean }>`
  ${({ isSelected }) => isSelected && 'padding: 3px 0 1px;'}
  font-family: ${({ isSelected }) =>
    isSelected ? "'pp-mondwest'" : "'Open Sans'"};
  font-style: normal;
  font-weight: 400;
  font-size: ${({ isSelected }) => (isSelected ? 17 : 15)}px;
  line-height: ${({ isSelected }) => (isSelected ? '20px' : '24px')};
  color: #fff;
  text-align: left;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.laptop} {
    margin-bottom: 2px;
    font-weight: 600;
    font-size: ${({ isSelected }) => (isSelected ? 20 : 18)}px;
  }
`;

type MenuWrapperProps = {
  isDownScroll?: boolean;
  gnbHeight: number;
};

const STDMenuWrapper = styled.div<MenuWrapperProps>`
  ${mixins.flexSet('flex-start', 'flex-start')}
  flex: 1;
  max-height: ${({ isDownScroll, gnbHeight }) =>
    isDownScroll ? 0 : gnbHeight}px;
  margin-bottom: ${({ isDownScroll }) => (isDownScroll ? 0 : 12)}px;
  transition: all 0.4s ease-in-out;

  @media ${device.laptop} {
    padding-top: 0;
    max-height: unset;
    margin-bottom: 0;
  }
`;

const STDExhibitionInfoWrapperPhone = styled.div`
  ${mixins.flexSet('flex-start', 'flex-start', 'column')}
  flex: 1;
  margin-bottom: 16px;

  @media ${device.laptop} {
    display: none;
  }

  .app_menu_style {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: #979797;
    cursor: pointer;
  }

  .mondwest_style {
    font-family: 'pp-mondwest';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #979797;
    cursor: pointer;
  }
`;

const STDExhibitionInfoWrapperDesktop = styled.div`
  display: none;

  @media ${device.laptop} {
    ${mixins.flexSet('flex-start', 'flex-end', 'column')}
    flex: 1;
    text-align: right;
  }
`;

const STDEmptySpace = styled.div<{ headerHeight?: number }>`
  height: ${({ headerHeight }) => headerHeight}px;
  width: 100%;
`;

const MainNav: React.FC<IProps> = ({ selectedMenu, onClickMenu }) => {
  const [headerHeight, setHeaderHeight] = useState(157);
  const [gnbHeight, setGnbHeight] = useState(72);
  const { scrollDir } = useScrollDirection({
    initialDirection: 'up',
    thresholdPixels: 40,
    off: false,
  });
  const { width } = useResize();
  const gnbElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nav = document.getElementById('nav-bar');
    setHeaderHeight(nav.offsetHeight);
  }, [width]);

  useEffect(() => {
    if (gnbElement?.current) {
      const height = gnbElement?.current?.scrollHeight;
      setGnbHeight(height);
    }
  }, [width]);

  return (
    <>
      <STDContainer id="nav-bar">
        <div className="wrapper">
          <STDExhibitionInfoWrapperPhone>
            <p className="mondwest_style" onClick={() => onClickMenu('')}>
              2022
            </p>
            <p className="app_menu_style" onClick={() => onClickMenu('')}>
              성균관대학교 예술대학 의상학과 졸업패션필름 좌표원점
            </p>
            <p className="app_menu_style" onClick={() => onClickMenu('')}>
              «좌표원점 : origin of Coordinate»
            </p>
          </STDExhibitionInfoWrapperPhone>
          <STDMenuWrapper
            ref={gnbElement}
            isDownScroll={scrollDir === 'down'}
            gnbHeight={gnbHeight}
          >
            <div className="flex_column">
              <STDGnbButton
                isSelected={selectedMenu.includes('designers')}
                onClick={() => onClickMenu('designers')}
              >
                {selectedMenu.includes('designers')
                  ? '(Designers)'
                  : 'Designers'}
              </STDGnbButton>
              <STDGnbButton
                isSelected={selectedMenu.includes('documents')}
                onClick={() => onClickMenu('documents')}
              >
                {selectedMenu.includes('documents')
                  ? '(Documents)'
                  : 'Documents'}
              </STDGnbButton>
              <STDGnbButton
                isSelected={selectedMenu.includes('archive')}
                onClick={() => onClickMenu('archive')}
              >
                {selectedMenu.includes('archive') ? '(Archive)' : 'Archive'}
              </STDGnbButton>
            </div>
            <div className="flex_column">
              <STDGnbButton
                isSelected={selectedMenu.includes('guests')}
                onClick={() => onClickMenu('guests')}
              >
                {selectedMenu.includes('guests')
                  ? "(Guest's book)"
                  : "Guest's book"}
              </STDGnbButton>
              <STDGnbButton
                onClick={() =>
                  window.open('https://www.instagram.com/skku_ff_2022/?hl=ko')
                }
              >
                Instagram
              </STDGnbButton>
            </div>
          </STDMenuWrapper>
          <STDExhibitionInfoWrapperDesktop>
            <p className="menu_font_style" onClick={() => onClickMenu('')}>
              2022 성균관대학교 예술대학
            </p>
            <p className="menu_font_style" onClick={() => onClickMenu('')}>
              의상학과 졸업패션필름
            </p>
            <p className="menu_font_style" onClick={() => onClickMenu('')}>
              «좌표원점 : origin of Coordinate»
            </p>
          </STDExhibitionInfoWrapperDesktop>
        </div>
      </STDContainer>
      <STDEmptySpace headerHeight={headerHeight} />
    </>
  );
};

export default MainNav;
