import React from 'react';
import styled from 'styled-components';
import { device, mixins } from '@/styles';

interface IProps {
  selectedMenu: string;
  onClickMenu(menu: string): void;
}

const STDContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #fff;
  background-color: black;

  .wrapper {
    flex-direction: column;
    padding: 0 24px;
    margin: 0 auto;

    @media ${device.laptop} {
      ${mixins.flexSet('space-between')}
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
    margin-right: 36px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const STDGnbButton = styled.button<{ isSelected?: boolean }>`
  ${({ isSelected }) => isSelected && 'padding: 3px 0 1px;'}
  font-family: ${({ isSelected }) =>
    isSelected ? "'pp-mondwest'" : "'Open Sans'"};
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: ${({ isSelected }) => (isSelected ? '20px' : '24px')};
  color: #fff;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.laptop} {
    margin-bottom: 2px;
    font-weight: 600;
    font-size: 18px;
  }
`;

const STDMenuWrapper = styled.div`
  flex: 1;
  ${mixins.flexSet('flex-start', 'flex-start')}
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

const STDEmptySpace = styled.div`
  height: 157px;
  width: 100%;

  @media ${device.laptop} {
    height: 115px;
  }
`;

const MainNav: React.FC<IProps> = ({ selectedMenu, onClickMenu }) => {
  return (
    <>
      <STDContainer>
        <div className="wrapper">
          <STDExhibitionInfoWrapperPhone>
            <p className="mondwest_style" onClick={() => onClickMenu('')}>
              2022
            </p>
            <p className="app_menu_style" onClick={() => onClickMenu('')}>
              성균관대학교 예술대학 의상학과 졸업패션필름 좌표원점
            </p>
          </STDExhibitionInfoWrapperPhone>
          <STDMenuWrapper>
            <div className="flex_column">
              <STDGnbButton
                isSelected={selectedMenu.includes('archive')}
                onClick={() => onClickMenu('archive')}
              >
                {selectedMenu.includes('archive') ? '(Archive)' : 'Archive'}
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
                isSelected={selectedMenu.includes('thanks')}
                onClick={() => onClickMenu('thanks')}
              >
                {selectedMenu.includes('thanks') ? '(Thanks to)' : 'Thanks to'}
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
              <STDGnbButton onClick={() => {}}>Instagram</STDGnbButton>
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
              좌표원점
            </p>
          </STDExhibitionInfoWrapperDesktop>
        </div>
      </STDContainer>
      <STDEmptySpace />
    </>
  );
};

export default MainNav;
