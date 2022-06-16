import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface IProps {
  navHeight: number;
}

const STDContainer = styled.div<{ navHeight: number }>`
  min-width: 256px;
  height: ${(props) => `calc(100vh - ${props.navHeight}px)`};
  padding: 24px;
  padding-right: 0;

  @media (max-width: 1023px) {
    width: 100%;
    height: auto;
    padding: 0px 16px 0px;
    margin-top: 24px;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const STDSideInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-right: 1px solid #fff;

  @media (max-width: 1023px) {
    display: flex;
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
  margin-right: 24px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const CopyRightText = styled.div`
  font-size: 13px;
  line-height: 22.62px;
  color: #fff;
`;

const SideBar: React.VFC<IProps> = ({ navHeight }) => {
  const router = useRouter();
  const { tab } = router.query as { tab: string };

  return (
    <STDContainer navHeight={navHeight}>
      <STDSideInputWrapper>
        <MenuItemLayout
          selected={!tab || tab === 'film'}
          onClick={() => router.replace('/film?tab=film')}
        >
          <Text className="pp-mondwest">❥❦❧☙❡</Text>
          <Text>필름</Text>
          <Text className="pp-mondwest">Film</Text>
        </MenuItemLayout>
        <MenuItemLayout
          selected={tab === 'Making'}
          onClick={() => router.replace('/film?tab=Making')}
        >
          <Text className="pp-mondwest">❥❦❧☙❡</Text>
          <Text>메이킹</Text>
          <Text className="pp-mondwest">Making</Text>
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
      </STDSideInputWrapper>
    </STDContainer>
  );
};

export default SideBar;
