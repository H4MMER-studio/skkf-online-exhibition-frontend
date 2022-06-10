import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { mixins, device } from '@/styles';
import { ContentsData } from '../DesignersContainer';

interface IProps {
  dataList: ContentsData;
  clickMoveVideo: (time: {
    firstStartTime: number;
    firstEndTime: number;
    secondStartTime: number;
    secondEndTime: number;
  }) => void;
}

const STDContainer = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const STDTitle = styled.div`
  margin-bottom: 4px;
  padding-left: 16px;
  font-family: 'pp-mondwest';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  color: #ffffff;

  @media ${device.laptop} {
    padding-left: 0;
    font-size: 28px;
    line-height: 110%;
  }
`;

const STDImageWrapper = styled.div`
  ${mixins.flexSet('flex-start')}
  ${mixins.noScrollbar()}
  width: 100%;
  padding-left: 16px;
  overflow-x: scroll;

  @media ${device.laptop} {
    padding-left: 0;
  }
`;

const STDImage = styled.img<{ isSelected: boolean }>`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 8px;
  cursor: pointer;
  opacity: ${({ isSelected }) => (isSelected ? 0.7 : 1)};

  &:active {
    opacity: 0.7;
  }

  @media ${device.laptop} {
    &:hover {
      opacity: 0.7;
    }
  }
`;

const BottomContentList: React.VFC<IProps> = ({ dataList, clickMoveVideo }) => {
  const router = useRouter();
  const { designer } = router.query as { designer: string };

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const seletcedDesigner = document.getElementById(designer + '_Bottom');
    if (seletcedDesigner) {
      seletcedDesigner.scrollIntoView({ inline: 'start' });
    }
  }, [designer]);

  return (
    <STDContainer>
      <STDTitle>And others →</STDTitle>
      <STDImageWrapper>
        {dataList.map((data) => (
          <STDImage
            key={data.id}
            id={`${data.id}_Bottom`}
            src={data.image}
            isSelected={data.id === designer}
            onClick={() => {
              router.push(`/designers?designer=${data.id}`);
              clickMoveVideo(data.time);
            }}
          />
        ))}
      </STDImageWrapper>
    </STDContainer>
  );
};

export default BottomContentList;
