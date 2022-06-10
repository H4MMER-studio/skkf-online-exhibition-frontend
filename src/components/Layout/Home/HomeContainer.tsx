import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useDebounce, useResize } from '@/hooks';
import { device } from '@/styles';

interface IProps {
  isUnmountHome: Boolean;
  onClickDesigner(name: string): void;
}

const HomeContainerLayout = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

const ThumbnailListLayout = styled.div`
  position: relative;
  /* max-width: 1920px; */
  padding: 24px;
  padding-bottom: 260px;
  /* margin: 0 auto; */
`;

const TeamLayout = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ThumbnailItem = styled.div<{ mobileHeight: number }>`
  position: relative;
  width: 208px;
  height: 117px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    img {
      opacity: 1;
    }
  }

  @media (max-width: 1023px) {
    width: 33.3%;
    height: ${(props) => props.mobileHeight}px;
    /* height: 185px; */
    /* max-height: 185px; */
  }

  @media (max-width: 768px) {
    width: 50%;
    height: ${(props) => props.mobileHeight}px;
  }
`;

const BottomLogoLayout = styled.div<{ startUnmountAnimation: boolean }>`
  position: fixed;
  bottom: ${(props) => (props.startUnmountAnimation ? '-100%' : '0px')};
  padding: 0 24px 20px;
  pointer-events: none;
  width: 100%;
  max-width: 1920px;
  left: 50%;
  transform: translateX(-50%);
  transition-duration: 3s;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const RowColumnLocationLayout = styled.div`
  position: absolute;
  display: flex;
  bottom: 0px;
  left: 21.5%;
  height: 50%;
`;

const LogoLayout = styled.div`
  position: relative;
`;

const RowNumberImage = styled.img`
  height: 100%;
`;

const ColumnNumberImage = styled.img`
  height: 100%;
`;

const CommaImage = styled.img<{ commaState: boolean }>`
  position: relative;
  transition-duration: 2s;
  bottom: ${(props) => (props.commaState ? '0' : '-100%')};
`;

const TestLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

type RowNumberContainerProps = {
  isChange: boolean;
  countedRow: number;
};

const RowNumberContainer = styled.div<RowNumberContainerProps>`
  position: relative;
  height: 100%;
  transition-duration: 2s;
  /* transition-duration: ${(props) => (props.isChange ? 4 : 0)}s; */
  /* bottom: ${(props) => (props.isChange ? '100%' : '0')}; */
  bottom: ${(props) => props.countedRow * 100}%;

  width: min-content;
  /* width: 50%; */
  /* width: 33.3%; */
`;

const ColumnNumberContainer = styled.div<{ countedColmn: number }>`
  position: relative;
  width: min-content;
  height: 100%;
  transition-duration: 2s;
  bottom: ${(props) => props.countedColmn * 100}%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.4); */

  padding: 6px 0px 0px 8px;
  /* background-color: #fff;
    opacity: 0.4; */
`;

const InfomationLayout = styled.div`
  width: min-content;
  height: 98px;
`;

const InfomationText = styled.div`
  height: 32px;
  padding: 4px;
  background-color: #fff;
  width: fit-content;

  /* @media (max-width: 768px) {
        height: auto;
    } */
`;

const ThumbNailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;

  &:active {
    opacity: 1;
  }

  @media ${device.laptop} {
    &:hover {
      opacity: 1;
    }
  }
`;

const OverlayAnimation = styled.div<{ startUnmountAnimation: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  right: ${(props) => (props.startUnmountAnimation ? '0' : '-100%')};
  opacity: ${(props) => (props.startUnmountAnimation ? 1 : 0)};
  background-color: black;
  z-index: 20;
  transition-duration: 2s;
`;

const HomeContainer: React.FC<IProps> = ({
  isUnmountHome,
  onClickDesigner,
}) => {
  const [row, setRow] = useState('');
  const [rowChange, setRowChange] = useState(false);
  const [column, setCoumn] = useState('');
  const [hoveredItem, setHoveredItem] = useState<{
    id: string;
    image: string;
    row: string;
    column: string;
    koreanName: string;
    englishName: string;
  }>();
  const [selectedRowImageList, setSelectedRowImageList] = useState([]);
  const [selectedColmnImageList, setSelectedColumnImageList] = useState([]);
  const [startUnmountAnimation, setStartUnmountAnimation] = useState(true);
  const [mobileItemHeight, setMobileItemHeight] = useState(192.6);
  const debouncedRow = useDebounce(row, 800);
  const debouncedColumn = useDebounce(column, 800);
  const { width } = useResize();

  const itemRef = useRef<HTMLDivElement | null>(null);
  const itemEle = itemRef.current;

  // const [rowLayout, ref] = useRef(null)

  useEffect(() => {
    if (debouncedRow) {
      const result = selectedRowImageList.concat(debouncedRow);
      setSelectedRowImageList(result);

      // const rowParentLayout = document.getElementById("row-layout");
      // const newNumber = document.createElement("img");
      // newNumber.id = "selected-new-row";
      // newNumber.src = debouncedRow;
      // newNumber.setAttribute("height", "100%");
      // const currentRow = document.getElementById("selected-row");
      // currentRow
      // currentRow.parentNode.insertBefore(newNumber, currentRow.nextSibling);

      // setRowChange(true);

      // setTimeout(() => {
      //     if (rowLayoutEle) {
      //         rowLayoutEle.removeChild(currentRow);

      //         // rowParentLayout.removeChild(currentRow);
      //         setRowChange(false);
      //         newNumber.id = "selected-row";

      //         console.log("테스트");
      //     }
      // }, 4000);
    }
  }, [debouncedRow]);

  useEffect(() => {
    if (debouncedColumn) {
      const result = selectedColmnImageList.concat(debouncedColumn);
      setSelectedColumnImageList(result);
    }
  }, [debouncedColumn]);

  useEffect(() => {
    if (isUnmountHome) {
      setStartUnmountAnimation(true);
    } else {
      setStartUnmountAnimation(false);
    }
  }, [isUnmountHome]);

  useEffect(() => {
    if (width < 1023 && itemEle) {
      const height = (117 * itemEle.offsetWidth) / 208;
      setMobileItemHeight(height);
    }
  }, [width]);

  const hoverOnThumbnail = (item: {
    id: string;
    image: string;
    row: string;
    column: string;
    koreanName: string;
    englishName: string;
  }) => {
    setHoveredItem(item);
    if (item.row !== row) {
      setRow(item.row);
    }

    if (item.column !== column) {
      setCoumn(item.column);
      console.log('');
    }
  };

  return (
    <HomeContainerLayout>
      <ThumbnailListLayout>
        {THUMBNAIL_DATA.map((t) => {
          return (
            <TeamLayout key={t.team}>
              {t.thumbnailList.map((item, i) => {
                return (
                  <ThumbnailItem
                    key={i}
                    ref={itemRef}
                    onClick={() => onClickDesigner(item.id)}
                    mobileHeight={mobileItemHeight}
                    onMouseOver={() => {
                      hoverOnThumbnail(item);
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <ThumbNailImage src={item.image} />
                    {item.id === hoveredItem?.id && (
                      <Overlay>
                        <InfomationText>{item.coordinate}</InfomationText>
                        <InfomationText>{item.koreanName}</InfomationText>
                        <InfomationText>{item.englishName}</InfomationText>
                      </Overlay>
                    )}
                  </ThumbnailItem>
                );
              })}
            </TeamLayout>
          );
        })}
        <OverlayAnimation startUnmountAnimation={startUnmountAnimation} />
      </ThumbnailListLayout>
      <BottomLogoLayout startUnmountAnimation={startUnmountAnimation}>
        <LogoLayout>
          <Logo src={'/image/main_logo.png'} />
          <RowColumnLocationLayout>
            <TestLayout>
              <RowNumberContainer
                isChange={rowChange}
                id="row-layout"
                countedRow={selectedRowImageList.length - 1}
              >
                {selectedRowImageList.map((rowImageSrc, i) => (
                  <RowNumberImage key={i} src={rowImageSrc} id="selected-row" />
                ))}
              </RowNumberContainer>
              <CommaImage
                src={'/image/comma.svg'}
                commaState={
                  selectedColmnImageList.length > 0 &&
                  selectedRowImageList.length > 0
                }
              />
              <ColumnNumberContainer
                countedColmn={selectedColmnImageList.length - 1}
              >
                {selectedColmnImageList.map((columnImageSrc, i) => (
                  <ColumnNumberImage src={columnImageSrc} key={i} />
                ))}
              </ColumnNumberContainer>
            </TestLayout>
          </RowColumnLocationLayout>
        </LogoLayout>
      </BottomLogoLayout>
    </HomeContainerLayout>
  );
};

export default HomeContainer;

const THUMBNAIL_DATA: {
  team: string;
  thumbnailList: {
    id: string;
    image: string;
    coordinate?: string;
    row: string;
    column: string;
    koreanName: string;
    englishName: string;
  }[];
}[] = [
  {
    team: 'Infinitas',
    thumbnailList: [
      {
        id: 'Heyjune_Kim',
        image: '/image/thumbs/thumb_1_1.jpg',
        coordinate: '(1,1)',
        row: '/image/f_1.svg',
        column: '/image/b_1.svg',
        koreanName: '김혜준',
        englishName: 'Hyejune Kim',
      },
      {
        id: 'Myunghoon_Lee',
        image: '/image/thumbs/thumb_1_2.jpg',
        coordinate: '(1,2)',
        row: '/image/f_1.svg',
        column: '/image/b_2.svg',
        koreanName: '이명훈',
        englishName: 'Myunghoon Lee',
      },
      {
        id: 'Damhee_Yun',
        image: '/image/thumbs/thumb_1_3.jpg',
        coordinate: '(1,3)',
        row: '/image/f_1.svg',
        column: '/image/b_3.svg',
        koreanName: '윤담희',
        englishName: 'Damhee Yun',
      },
      {
        id: 'Yeonje_Park',
        image: '/image/thumbs/thumb_1_4.jpg',
        coordinate: '(1,4)',
        row: '/image/f_1.svg',
        column: '/image/b_4.svg',
        koreanName: '박연제',
        englishName: 'Yeonje Park',
      },
      {
        id: 'Seojin_Park',
        image: '/image/thumbs/thumb_1_5.jpg',
        coordinate: '(1,5)',
        row: '/image/f_1.svg',
        column: '/image/b_5.svg',
        koreanName: '박서진',
        englishName: 'Seojin Park',
      },
      {
        id: 'Wu_YU',
        image: '/image/thumbs/thumb_1_6.jpg',
        coordinate: '(1,6)',
        row: '/image/f_1.svg',
        column: '/image/b_6.svg',
        koreanName: '오유',
        englishName: 'Wu Yu',
      },
      {
        id: 'Sunyoung_Park',
        image: '/image/thumbs/thumb_1_7.jpg',
        coordinate: '(1,7)',
        row: '/image/f_1.svg',
        column: '/image/b_7.svg',
        koreanName: '박선영',
        englishName: 'Sunyoung Park',
      },
    ],
  },
  {
    team: 'Spectrum',
    thumbnailList: [
      {
        id: 'Gyubin_Choi',
        image: '/image/thumbs/thumb_2_1.jpg',
        coordinate: '(2,1)',
        row: '/image/f_2.svg',
        column: '/image/b_1.svg',
        koreanName: '최규빈',
        englishName: 'Gyubin Choi',
      },
      {
        id: 'Heewon_Choi',
        image: '/image/thumbs/thumb_2_2.jpg',
        coordinate: '(2,2)',
        row: '/image/f_2.svg',
        column: '/image/b_2.svg',
        koreanName: '최희원',
        englishName: 'Heewon Choi',
      },
      {
        id: 'Yunchang_Lee',
        image: '/image/thumbs/thumb_2_3.jpg',
        coordinate: '(2,3)',
        row: '/image/f_2.svg',
        column: '/image/b_3.svg',
        koreanName: '이윤창',
        englishName: 'Yunchang Lee',
      },
      {
        id: 'Geuntaek_oh',
        image: '/image/thumbs/thumb_2_4.jpg',
        coordinate: '(2,4)',
        row: '/image/f_2.svg',
        column: '/image/b_4.svg',
        koreanName: '오근택',
        englishName: 'Geuntaek oh',
      },
      {
        id: 'Seonbin_Kim',
        coordinate: '(2,5)',
        image: '/image/thumbs/thumb_2_5.jpg',
        row: '/image/f_2.svg',
        column: '/image/b_5.svg',
        koreanName: '김성빈',
        englishName: 'Seonbin Kim',
      },
      {
        id: 'Jeongun_Lee',
        image: '/image/thumbs/thumb_2_6.jpg',
        coordinate: '(2,6)',
        row: '/image/f_2.svg',
        column: '/image/b_6.svg',
        koreanName: '이정은',
        englishName: 'Jeongun Lee',
      },
      {
        id: 'Nguyen_Thanh_Van_Do',
        image: '/image/thumbs/thumb_2_7.jpg',
        coordinate: '(2,7)',
        row: '/image/f_2.svg',
        column: '/image/b_7.svg',
        koreanName: '도비안',
        englishName: 'Nguyen Thanh Van Do',
      },
      {
        id: 'Jeongin_Gong',
        image: '/image/thumbs/thumb_2_8.jpg',
        coordinate: '(2,8)',
        row: '/image/f_2.svg',
        column: '/image/b_8.svg',
        koreanName: '공정인',
        englishName: 'Jeongin Gong',
      },
      {
        id: 'Hyemin_Byun',
        image: '/image/thumbs/thumb_2_9.jpg',
        coordinate: '(2,9)',
        row: '/image/f_2.svg',
        column: '/image/b_9.svg',
        koreanName: '변혜민',
        englishName: 'Hyemin Byun',
      },
    ],
  },
  {
    team: 'Teleport to',
    thumbnailList: [
      {
        id: 'Jueun_Lee',
        image: '/image/thumbs/thumb_3_1.jpg',
        coordinate: '(3,1)',
        row: '/image/f_3.svg',
        column: '/image/b_1.svg',
        koreanName: '이주은',
        englishName: 'Jueun Lee',
      },
      {
        id: 'Jiwan_Park',
        image: '/image/thumbs/thumb_3_2.jpg',
        coordinate: '(3,2)',
        row: '/image/f_3.svg',
        column: '/image/b_2.svg',
        koreanName: '박지완',
        englishName: 'Jiwan Park',
      },
      {
        id: 'Jeonggeun_Lee',
        image: '/image/thumbs/thumb_3_3.jpg',
        coordinate: '(3,3)',
        row: '/image/f_3.svg',
        column: '/image/b_3.svg',
        koreanName: '이정근',
        englishName: 'Jeonggeun Lee',
      },
      {
        id: 'Seohee_Jeong',
        image: '/image/thumbs/thumb_3_4.jpg',
        coordinate: '(3,4)',
        row: '/image/f_3.svg',
        column: '/image/b_4.svg',
        koreanName: '정서희',
        englishName: 'Seohee Jeong',
      },
      {
        id: 'Minah_Kim',
        image: '/image/thumbs/thumb_3_5.jpg',
        coordinate: '(3,5)',
        row: '/image/f_3.svg',
        column: '/image/b_5.svg',
        koreanName: '김민아',
        englishName: 'Minah Kim',
      },
      {
        id: 'Jiyun_Choi',
        image: '/image/thumbs/thumb_3_6.jpg',
        coordinate: '(3,6)',
        row: '/image/f_3.svg',
        column: '/image/b_6.svg',
        koreanName: '최지현',
        englishName: 'Jiyun Choi',
      },
      {
        id: 'Ijun_Choi',
        image: '/image/thumbs/thumb_3_7.jpg',
        coordinate: '(3,7)',
        row: '/image/f_3.svg',
        column: '/image/b_7.svg',
        koreanName: '최이준',
        englishName: 'Ijun Choi',
      },
    ],
  },
  {
    team: 'Textureacit',
    thumbnailList: [
      {
        id: 'Minkyung_Kim',
        image: '/image/thumbs/thumb_4_1.jpg',
        coordinate: '(4,1)',
        row: '/image/f_4.svg',
        column: '/image/b_1.svg',
        koreanName: '김민경',
        englishName: 'Minkyung Kim',
      },
      {
        id: 'Heejae_Choi',
        image: '/image/thumbs/thumb_4_2.jpg',
        coordinate: '(4,2)',
        row: '/image/f_4.svg',
        column: '/image/b_2.svg',
        koreanName: '최희재',
        englishName: 'Heejae Choi',
      },
      {
        id: 'Yesong_Jung',
        image: '/image/thumbs/thumb_4_3.jpg',
        coordinate: '(4,3)',
        row: '/image/f_4.svg',
        column: '/image/b_3.svg',
        koreanName: '정예송',
        englishName: 'Yesong Jung',
      },
      {
        id: 'Soyoon_Koo',
        image: '/image/thumbs/thumb_4_4.jpg',
        coordinate: '(4,4)',
        row: '/image/f_4.svg',
        column: '/image/b_4.svg',
        koreanName: '구소윤',
        englishName: 'Soyoon Koo',
      },
      {
        id: 'Yejin_Hong',
        image: '/image/thumbs/thumb_4_5.jpg',
        coordinate: '(4,5)',
        row: '/image/f_4.svg',
        column: '/image/b_5.svg',
        koreanName: '홍예진',
        englishName: 'Yejin Hong',
      },
      {
        id: 'Heejo_Han',
        image: '/image/thumbs/thumb_4_6.jpg',
        coordinate: '(4,6)',
        row: '/image/f_4.svg',
        column: '/image/b_6.svg',
        koreanName: '한희조',
        englishName: 'Heejo Han',
      },
      {
        id: 'HeeSung_Kim',
        image: '/image/thumbs/thumb_4_7.jpg',
        coordinate: '(4,7)',
        row: '/image/f_4.svg',
        column: '/image/b_7.svg',
        koreanName: '김희성',
        englishName: 'HeeSung Kim',
      },
      {
        id: 'Leyi_ji',
        image: '/image/thumbs/thumb_4_8.jpg',
        coordinate: '(4,8)',
        row: '/image/f_4.svg',
        column: '/image/b_8.svg',
        koreanName: '지레이',
        englishName: 'Leyi ji',
      },
    ],
  },
];
