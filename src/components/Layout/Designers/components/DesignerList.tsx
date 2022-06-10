import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import { device, mixins } from '@/styles';
import { ContentsData } from '../DesignersContainer';

interface IProps {
  dataList: ContentsData;
  headerHeight: number | null;
  clickMoveVideo: (time: {
    firstStartTime: number;
    firstEndTime: number;
    secondStartTime: number;
    secondEndTime: number;
  }) => void;
}

const STDContainer = styled.div<{ height: number }>`
  min-width: 256px;
  height: ${(props) => `calc(100vh - ${props.height}px)`};
  margin-right: 20px;
  border-right: 1px solid #fff;

  @media (max-width: 1023px) {
    height: auto;
    margin-right: 0px;
    border-right: none;
  }
`;

const ListLayout = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 24px;
  ${mixins.noScrollbar()}

  @media (max-width: 1023px) {
    ${mixins.flexSet('flex-start')}
    width: 100%;
    padding: 0 0 0 16px;
    overflow-x: scroll;
  }
`;

const ItemLayout = styled.div<{ isSelected?: boolean }>`
  ${mixins.flexSet('flex-start', 'flex-start', 'column')}
  margin-right: 24px;
  white-space: nowrap;
  cursor: pointer;

  @media ${device.laptop} {
    min-width: 125px;
    margin-bottom: 30px;
    margin-right: 0px;
    &:hover {
      div {
        color: #7e7e7e;
      }
    }
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      div {
        background-color: white;
        color: black;
      }
    `}
`;

const ItemT = styled.div<{ isModwestFont: boolean }>`
  color: #fff;
  padding: 4px;
  font-size: ${({ isModwestFont }) => (isModwestFont ? 18 : 16)}px;
  line-height: 110%;
  /* font-family: ${(props) =>
    props.isModwestFont ? "pp-mondwest'" : 'Open Sans'}; */

  @media ${device.laptop} {
    font-size: ${({ isModwestFont }) => (isModwestFont ? 22 : 20)}px;
    line-height: 110%;
  }
`;

const DesignerList: React.VFC<IProps> = ({
  dataList,
  headerHeight,
  clickMoveVideo,
}) => {
  const router = useRouter();
  const { designer } = router.query as { designer: string };

  useEffect(() => {
    setTimeout(() => {
      const seletcedDesigner = document.getElementById(designer);
      if (seletcedDesigner) {
        seletcedDesigner.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: window.innerWidth < 1024 ? 'center' : 'start',
        });
      }
    });
  }, [designer]);

  return (
    <STDContainer height={headerHeight + 24}>
      <ListLayout>
        {dataList.map((data) => {
          return (
            <ItemLayout
              id={data.id}
              key={data.id}
              isSelected={data.id === (designer ?? dataList[0].id)}
              onClick={() => {
                router.push(`/designers?designer=${data.id}`);
                clickMoveVideo(data.time);
              }}
            >
              <ItemT isModwestFont>{data.coordinate}</ItemT>
              <ItemT isModwestFont={false}>{data.koreanName}</ItemT>
              <ItemT isModwestFont={true}>{data.englishName}</ItemT>
            </ItemLayout>
          );
        })}
      </ListLayout>
    </STDContainer>
  );
};

export default DesignerList;
