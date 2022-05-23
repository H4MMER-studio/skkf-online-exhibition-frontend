import React from 'react';
import styled from 'styled-components';
import { device, mixins } from '@/styles';

interface IProps {
  selectedMenu: string;
  onClickMenu(menu: string): void;
}

const STDContainer = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #fff;

  .wrapper {
    flex-direction: column;
    max-width: 1920px;
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

const STDMenuWrapper = styled.div`
  flex: 1;
  ${mixins.flexSet('flex-start', 'flex-start')}
`;

const STDExhibitionInfoWrapperPhone = styled.div`
  ${mixins.flexSet('flex-start', 'flex-end', 'column')}
  flex: 1;
  text-align: right;

  @media ${device.laptop} {
    display: none;
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

const MainNav: React.FC<IProps> = ({ selectedMenu, onClickMenu }) => {
  return (
    <STDContainer>
      <div className="wrapper">
        <STDExhibitionInfoWrapperPhone>
          <p className="menu_font_style" onClick={() => onClickMenu('')}>
            2022 성균관대학교 예술대학
          </p>
          <p className="menu_font_style" onClick={() => onClickMenu('')}>
            의상학과 졸업패션필름
          </p>
          <p className="menu_font_style" onClick={() => onClickMenu('')}>
            좌표원점
          </p>
        </STDExhibitionInfoWrapperPhone>
        <STDMenuWrapper>
          <div className="flex_column">
            <button
              className="menu_font_style"
              onClick={() => onClickMenu('archive')}
            >
              {selectedMenu.includes('archive') ? '(Archive)' : 'Archive'}
            </button>
            <button
              className="menu_font_style"
              onClick={() => onClickMenu('documents')}
            >
              {selectedMenu.includes('documents') ? '(Documents)' : 'Documents'}
            </button>
            <button
              className="menu_font_style"
              onClick={() => onClickMenu('thanks')}
            >
              {selectedMenu.includes('thanks') ? '(Thanks to)' : 'Thanks to'}
            </button>
          </div>
          <div className="flex_column">
            <button
              className="menu_font_style"
              onClick={() => onClickMenu('guests')}
            >
              {selectedMenu.includes('guests')
                ? "(Guest's book)"
                : "Guest's book"}
            </button>
            <button className="menu_font_style" onClick={() => {}}>
              Instagram
            </button>
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
  );
};

export default MainNav;
