import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useDebounce } from '@/hooks';
import { useRouter } from 'next/router';
import Router from 'next/router';

interface IProps {
  isUnmountHome: Boolean;
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

const ThumbnailItem = styled.div`
  position: relative;
  width: 208px;
  height: 117px;
  border: 1px solid #fff;
  cursor: pointer;

  &:hover {
    img {
      opacity: 0.4;
    }
  }

  @media (max-width: 1023px) {
    width: 33.3%;
    height: 185px;
    /* max-height: 185px; */
  }

  @media (max-width: 720px) {
    width: 50%;
    height: 192.6px;
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

const CommaImage = styled.img``;

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
  transition-duration: 4s;
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
  transition-duration: 4s;
  bottom: ${(props) => props.countedColmn * 100}%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);

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
`;

const ThumbNailImage = styled.img`
  width: 100%;
  height: 100%;
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

const HomeContainer: React.FC<IProps> = ({ isUnmountHome }) => {
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
  const debouncedRow = useDebounce(row, 1000);
  const debouncedColumn = useDebounce(column, 1000);
  const router = useRouter();

  // const [rowLayout, ref] = useRef(null)

  const rowLayoutRef = useRef<HTMLDivElement | null>(null);
  const rowLayoutEle = rowLayoutRef.current;

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

  // useEffect(() => {
  //     Router.events.on("routeChangeStart", (url) => {
  //         test(url);
  //     });
  // }, []);

  // const test = (url: string) => {
  //     console.log(url);
  //     if (location.pathname === "/" && !isUnmount) {
  //         console.log(location);

  //         setTimeout(() => {
  //             router.push(`${url}`);
  //             setIsUnmount(true);
  //             console.log(isUnmount, "이즈 언마운트");
  //         }, 3000);
  //         console.log("여기서 만 가능");
  //     }
  // };

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
                    onMouseOver={() => {
                      hoverOnThumbnail(item);
                    }}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <ThumbNailImage src={'/image/comma.svg'} />

                    {item.id === hoveredItem?.id && (
                      <Overlay>
                        <InfomationText></InfomationText>
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
                ref={rowLayoutRef}
                countedRow={selectedRowImageList.length - 1}
              >
                {selectedRowImageList.map((rowImageSrc, i) => (
                  <RowNumberImage key={i} src={rowImageSrc} id="selected-row" />
                ))}
              </RowNumberContainer>
              <CommaImage src={'/image/comma.svg'} />
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
        id: 'Infinitas-1',
        image: '',
        coordinate: '(1,1)',
        row: '/image/f_1.svg',
        column: '/image/b_1.svg',
        koreanName: '김혜준',
        englishName: 'Heyjune Kim',
      },
      {
        id: 'Infinitas-2',
        image: '',
        coordinate: '(1,2)',
        row: '/image/f_1.svg',
        column: '/image/b_2.svg',
        koreanName: '이명훈',
        englishName: 'Myunghoon Lee',
      },
      {
        id: 'Infinitas-3',
        image: '',
        coordinate: '(1,3)',
        row: '/image/f_1.svg',
        column: '/image/b_3.svg',
        koreanName: '윤담희',
        englishName: 'Damhee Yun',
      },
      {
        id: 'Infinitas-4',
        image: '',
        coordinate: '(1,4)',
        row: '/image/f_1.svg',
        column: '/image/b_4.svg',
        koreanName: '박연제',
        englishName: 'Yeonje Park',
      },
      {
        id: 'Infinitas-5',
        image: '',
        coordinate: '(1,5)',
        row: '/image/f_1.svg',
        column: '/image/b_5.svg',
        koreanName: '박서진',
        englishName: 'Seojin Park',
      },
      {
        id: 'Infinitas-6',
        image: '',
        coordinate: '(1,6)',
        row: '/image/f_1.svg',
        column: '/image/b_6.svg',
        koreanName: '오유',
        englishName: 'Wu YU',
      },
      {
        id: 'Infinitas-7',
        image: '',
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
        id: 'Spectrum-1',
        image: '',
        coordinate: '(2,1)',
        row: '/image/f_2.svg',
        column: '/image/b_1.svg',
        koreanName: '최규빈',
        englishName: 'Gyubin Choi',
      },
      {
        id: 'Spectrum-2',
        image: '',

        row: '/image/f_2.svg',
        column: '/image/b_2.svg',
        koreanName: '최희원',
        englishName: 'Heewon Choi',
      },
      {
        id: 'Spectrum-3',
        image: '',
        row: '/image/f_2.svg',
        column: '/image/b_3.svg',
        koreanName: '이윤창',
        englishName: 'Yunchang Lee',
      },
      {
        id: 'Spectrum-4',
        image: '',
        row: '/image/f_2.svg',
        column: '/image/b_4.svg',
        koreanName: '오근택',
        englishName: 'Geuntaek oh',
      },
      {
        id: 'Spectrum-5',
        image: '',
        row: '/image/f_2.svg',
        column: '/image/b_5.svg',
        koreanName: '김성빈',
        englishName: 'Seonbin Kim',
      },
      {
        id: 'Spectrum-6',
        image: '',
        row: '/image/f_2.svg',
        column: '/image/b_6.svg',
        koreanName: '이정은',
        englishName: 'Jeongun Lee',
      },
      {
        id: 'Spectrum-7',
        image: '',
        row: '/image/f_2.svg',
        column: '/image/b_7.svg',
        koreanName: '도비안',
        englishName: 'Nguyen Thanh Van Do',
      },
      {
        id: 'Spectrum-8',
        image: '',
        row: '/image/f_2.svg',
        column: '/image/b_8.svg',
        koreanName: '공정인',
        englishName: 'Jeongin Gong',
      },
      {
        id: 'Spectrum-9',
        image: '',
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
        id: 'TeleportTo-1',
        image: '',
        row: '/image/f_3.svg',
        column: '/image/b_1.svg',
        koreanName: '이주은',
        englishName: 'Jueun Lee',
      },
      {
        id: 'TeleportTo-2',
        image: '',
        row: '/image/f_3.svg',
        column: '/image/b_2.svg',
        koreanName: '박지완',
        englishName: 'Jiwan Park',
      },
      {
        id: 'TeleportTo-3',
        image: '',
        row: '/image/f_3.svg',
        column: '/image/b_3.svg',
        koreanName: '이정근',
        englishName: 'Jeonggeun Lee',
      },
      {
        id: 'TeleportTo-4',
        image: '',
        row: '/image/f_3.svg',
        column: '/image/b_4.svg',
        koreanName: '정서희',
        englishName: 'Seohee Jeong',
      },
      {
        id: 'TeleportTo-5',
        image: '',
        row: '/image/f_3.svg',
        column: '/image/b_5.svg',
        koreanName: '김민아',
        englishName: 'Minah Kim',
      },
      {
        id: 'TeleportTo-6',
        image: '',
        row: '/image/f_3.svg',
        column: '/image/b_6.svg',
        koreanName: '최지현',
        englishName: 'Jiyun Choi',
      },
      {
        id: 'TeleportTo-7',
        image: '',
        row: '/image/f_3.svg',
        column: '/image/b_7.svg',
        koreanName: '최이준',
        englishName: 'Ijun Choi',
      },
      {
        id: 'TeleportTo-8',
        image: '',
        row: '/image/f_3.svg',
        column: '/image/b_8.svg',
        koreanName: '',
        englishName: '',
      },
    ],
  },
  {
    team: 'Textureacit',
    thumbnailList: [
      {
        id: 'Textureacit-1',
        image: '',
        row: '/image/f_4.svg',
        column: '/image/b_1.svg',
        koreanName: '김민경',
        englishName: 'Minkyung Kim',
      },
      {
        id: 'Textureacit-2',
        image: '',
        row: '/image/f_4.svg',
        column: '/image/b_2.svg',
        koreanName: '최희재',
        englishName: 'Heejae Choi',
      },
      {
        id: 'Textureacit-3',
        image: '',
        row: '/image/f_4.svg',
        column: '/image/b_3.svg',
        koreanName: '정예송',
        englishName: 'Yesong Jung',
      },
      {
        id: 'Textureacit-4',
        image: '',
        row: '/image/f_4.svg',
        column: '/image/b_4.svg',
        koreanName: '구소윤',
        englishName: 'Soyoon Koo',
      },
      {
        id: 'Textureacit-5',
        image: '',
        row: '/image/f_4.svg',
        column: '/image/b_5.svg',
        koreanName: '홍예진',
        englishName: 'Yejin Hong',
      },
      {
        id: 'Textureacit-6',
        image: '',
        row: '/image/f_4.svg',
        column: '/image/b_6.svg',
        koreanName: '한희조',
        englishName: 'Heejo Han',
      },
    ],
  },
];
