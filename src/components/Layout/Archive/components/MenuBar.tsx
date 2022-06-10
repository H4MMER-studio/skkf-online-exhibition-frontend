import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useResize } from '@/hooks';

interface IProps {
  selectedMenu: 'origin-of-coordinate' | 'celebration' | 'thanks-to';
  clickMenu: (
    menu: 'origin-of-coordinate' | 'celebration' | 'thanks-to'
  ) => void;
}

const STDMenuBarLayout = styled.div<{ navHeight: number }>`
  min-width: 256px;
  height: ${(props) => `calc(100vh - ${props.navHeight}px)`};
  padding: 24px 0px 24px 24px;

  @media (max-width: 1023px) {
    width: 100%;
    height: 80px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 0px 18px 0px 18px;
    margin-top: 16px;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const STDMenuBarInnerLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-right: 1px solid #fff;

  @media (max-width: 1023px) {
    display: flex;
    width: 361px;
    border-right: none;
  }
`;

const MenuItemLayout = styled.div<{ selected: boolean }>`
  margin-bottom: 30px;
  cursor: pointer;

  div {
    background-color: ${(props) => (props.selected ? '#fff' : 'none')};
    color: ${(props) => (props.selected ? '#000' : '#fff')};
  }

  &:hover {
    /* div {
      background-color: #fff;
      color: #000;
    } */
  }

  @media (max-width: 1023px) {
    margin-right: 24px;
    margin-bottom: 0px;
  }
`;

const Text = styled.div`
  padding: 4px;
  color: #fff;
  font-size: 20px;
  line-height: 110%;
  width: fit-content;
  white-space: nowrap;

  @media (max-width: 1023px) {
    font-size: 16px;
  }

  &.pp-mondwest {
    font-size: 22px;
    line-height: 110%;

    @media (max-width: 1023px) {
      font-size: 18px;
    }
  }
`;

const CopyRightLayout = styled.div`
  position: absolute;
  bottom: 0px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const CopyRightText = styled.div`
  font-size: 13px;
  line-height: 22.62px;
  color: #fff;
`;

const MenuBar: React.VFC<IProps> = ({ selectedMenu, clickMenu }) => {
  const [navHeight, setNavHeight] = useState(157);
  const { width } = useResize();

  useEffect(() => {
    const nav = document.getElementById('nav-bar');
    setNavHeight(nav.offsetHeight);
  }, [width]);

  return (
    <STDMenuBarLayout navHeight={navHeight}>
      <STDMenuBarInnerLayout>
        <MenuItemLayout
          selected={selectedMenu === 'origin-of-coordinate'}
          onClick={() => clickMenu('origin-of-coordinate')}
        >
          <Text className="pp-mondwest">1</Text>
          <Text>좌표원점</Text>
          <Text className="pp-mondwest">origin of Coordinate</Text>
        </MenuItemLayout>
        <MenuItemLayout
          selected={selectedMenu === 'celebration'}
          onClick={() => clickMenu('celebration')}
        >
          <Text className="pp-mondwest">2</Text>
          <Text>축사</Text>
          <Text className="pp-mondwest">Celebration</Text>
        </MenuItemLayout>
        <MenuItemLayout
          selected={selectedMenu === 'thanks-to'}
          onClick={() => clickMenu('thanks-to')}
        >
          <Text className="pp-mondwest">3</Text>
          <Text>감사</Text>
          <Text className="pp-mondwest">Thanks to</Text>
        </MenuItemLayout>
        <CopyRightLayout>
          <CopyRightText style={{ marginBottom: 12 }}>
            62802 서울특별시 종로구 성균관로 25-2 수선관별관 02 - 760 - 0515
          </CopyRightText>
          <CopyRightText className="pp-mondwest">
            © Copyright, 2022 Sungkyunkwan University, Dept of Fashion Design,
            All right
          </CopyRightText>
        </CopyRightLayout>
      </STDMenuBarInnerLayout>
    </STDMenuBarLayout>
  );
};

export default MenuBar;
