import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';

interface IProps {
  selectedMenu: string;
  onClickMenu(menu: string): void;
}

const STDContainer = styled.div`
  ${mixins.flexSet('space-between')}
  padding: 16px 24px;
  border-bottom: 1px solid #fff;

  .menu_font_style {
    margin-bottom: 2px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #fff;

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
  ${mixins.flexSet('flex-start', 'flex-start')}
`;

const STDExhibitionInfoWrapper = styled.div`
  text-align: right;
  cursor: pointer;
`;

const MainNav: React.FC<IProps> = ({ selectedMenu, onClickMenu }) => {
  return (
    <STDContainer>
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
      <STDExhibitionInfoWrapper onClick={() => onClickMenu('')}>
        <p className="menu_font_style">2022 성균관대학교 예술대학</p>
        <p className="menu_font_style">의상학과 졸업패션필름</p>
        <p className="menu_font_style">좌표원점</p>
      </STDExhibitionInfoWrapper>
    </STDContainer>
  );
};

export default MainNav;
