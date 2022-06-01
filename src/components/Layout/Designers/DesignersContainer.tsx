import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useResize } from '@/hooks';
import DesignerList from './components/DesignerList';
import Contents from './components/Contents';
import BottomContentList from './components/BottomContentList';
import { useRouter } from 'next/router';

const STDContainer = styled.div`
  display: flex;
  margin-top: 24px;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const STDContentsWrapper = styled.div`
  position: relative;
  min-width: 0;
`;

const DesignersContainer: React.VFC = () => {
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const [videoEle, setVideEle] = useState<HTMLVideoElement>();
  const { width } = useResize();
  const router = useRouter();
  const query = router.query as { designer: string };

  useEffect(() => {
    const nav = document.getElementById('nav-bar');
    setHeaderHeight(nav.offsetHeight);
  }, [width]);

  useEffect(() => {
    if (query.designer && videoEle) {
      const currentTime = CONTENTS_DATA.find(
        (c) => c.id === query.designer
      ).startTime;
      console.log(currentTime, '현재 시간');
      clickMoveVideo(currentTime);
    }
  }, [query.designer]);

  const clickMoveVideo = (time: number) => {
    videoEle.currentTime = time;
    videoEle.autoplay = true;
  };

  return (
    <STDContainer>
      <DesignerList
        dataList={CONTENTS_DATA}
        headerHeight={headerHeight}
        clickMoveVideo={clickMoveVideo}
      />
      <STDContentsWrapper>
        <Contents headerHeight={headerHeight} setVideoEle={setVideEle} />
        <BottomContentList />
      </STDContentsWrapper>
    </STDContainer>
  );
};

export default DesignersContainer;

const CONTENTS_DATA: {
  id: string;
  image: string;
  coordinate?: string;
  row: string;
  column: string;
  koreanName: string;
  englishName: string;
  startTime: number;
}[] = [
  {
    id: 'Heyjune_Kim',
    image: '',
    coordinate: '(1,1)',
    row: '/image/f_1.svg',
    column: '/image/b_1.svg',
    koreanName: '김혜준',
    englishName: 'Heyjune Kim',
    startTime: 0,
  },
  {
    id: 'Myunghoon_Lee',
    image: '',
    coordinate: '(1,2)',
    row: '/image/f_1.svg',
    column: '/image/b_2.svg',
    koreanName: '이명훈',
    englishName: 'Myunghoon Lee',
    startTime: 300,
  },
  {
    id: 'Damhee_Yun',
    image: '',
    coordinate: '(1,3)',
    row: '/image/f_1.svg',
    column: '/image/b_3.svg',
    koreanName: '윤담희',
    englishName: 'Damhee Yun',
    startTime: 600,
  },
  {
    id: 'Yeonje_Park',
    image: '',
    coordinate: '(1,4)',
    row: '/image/f_1.svg',
    column: '/image/b_4.svg',
    koreanName: '박연제',
    englishName: 'Yeonje Park',
    startTime: 1000,
  },
  {
    id: 'Seojin_Park',
    image: '',
    coordinate: '(1,5)',
    row: '/image/f_1.svg',
    column: '/image/b_5.svg',
    koreanName: '박서진',
    englishName: 'Seojin Park',
    startTime: 1000,
  },
  {
    id: 'Wu_YU',
    image: '',
    coordinate: '(1,6)',
    row: '/image/f_1.svg',
    column: '/image/b_6.svg',
    koreanName: '오유',
    englishName: 'Wu YU',
    startTime: 1000,
  },
  {
    id: 'Sunyoung_Park',
    image: '',
    coordinate: '(1,7)',
    row: '/image/f_1.svg',
    column: '/image/b_7.svg',
    koreanName: '박선영',
    englishName: 'Sunyoung Park',
    startTime: 100,
  },
  {
    id: 'Gyubin_Choi',
    image: '',
    coordinate: '(2,1)',
    row: '/image/f_2.svg',
    column: '/image/b_1.svg',
    koreanName: '최규빈',
    englishName: 'Gyubin Choi',
    startTime: 10,
  },
  {
    id: 'Heewon_Choi',
    image: '',
    coordinate: '(2,2)',
    row: '/image/f_2.svg',
    column: '/image/b_2.svg',
    koreanName: '최희원',
    englishName: 'Heewon Choi',
    startTime: 1000,
  },
  {
    id: 'Yunchang_Lee',
    image: '',
    coordinate: '(2,3)',
    row: '/image/f_2.svg',
    column: '/image/b_3.svg',
    koreanName: '이윤창',
    englishName: 'Yunchang Lee',
    startTime: 1000,
  },
  {
    id: 'Geuntaek_oh',
    image: '',
    coordinate: '(2,4)',
    row: '/image/f_2.svg',
    column: '/image/b_4.svg',
    koreanName: '오근택',
    englishName: 'Geuntaek oh',
    startTime: 1000,
  },
  {
    id: 'Seonbin_Kim',
    image: '',
    coordinate: '(2,5)',
    row: '/image/f_2.svg',
    column: '/image/b_5.svg',
    koreanName: '김성빈',
    englishName: 'Seonbin Kim',
    startTime: 1000,
  },
  {
    id: 'Jeongun_Lee',
    image: '',
    coordinate: '(2,6)',
    row: '/image/f_2.svg',
    column: '/image/b_6.svg',
    koreanName: '이정은',
    englishName: 'Jeongun Lee',
    startTime: 1000,
  },
  {
    id: 'Nguyen_Thanh_Van_Do',
    image: '',
    coordinate: '(2,7)',
    row: '/image/f_2.svg',
    column: '/image/b_7.svg',
    koreanName: '도비안',
    englishName: 'Nguyen Thanh Van Do',
    startTime: 1000,
  },
  {
    id: 'Jeongin_Gong',
    image: '',
    coordinate: '(2,8)',
    row: '/image/f_2.svg',
    column: '/image/b_8.svg',
    koreanName: '공정인',
    englishName: 'Jeongin Gong',
    startTime: 1000,
  },
  {
    id: 'Hyemin_Byun',
    image: '',
    coordinate: '(2,9)',
    row: '/image/f_2.svg',
    column: '/image/b_9.svg',
    koreanName: '변혜민',
    englishName: 'Hyemin Byun',
    startTime: 1000,
  },

  {
    id: 'Jueun_Lee',
    image: '',
    coordinate: '(3,1)',
    row: '/image/f_3.svg',
    column: '/image/b_1.svg',
    koreanName: '이주은',
    englishName: 'Jueun Lee',
    startTime: 1000,
  },
  {
    id: 'Jiwan_Park',
    image: '',
    coordinate: '(3,2)',
    row: '/image/f_3.svg',
    column: '/image/b_2.svg',
    koreanName: '박지완',
    englishName: 'Jiwan Park',
    startTime: 1000,
  },
  {
    id: 'Jeonggeun_Lee',
    image: '',
    coordinate: '(3,3)',
    row: '/image/f_3.svg',
    column: '/image/b_3.svg',
    koreanName: '이정근',
    englishName: 'Jeonggeun Lee',
    startTime: 1000,
  },
  {
    id: 'Seohee_Jeong',
    image: '',
    coordinate: '(3,4)',
    row: '/image/f_3.svg',
    column: '/image/b_4.svg',
    koreanName: '정서희',
    englishName: 'Seohee Jeong',
    startTime: 1000,
  },
  {
    id: 'Minah_Kim',
    image: '',
    coordinate: '(3,5)',
    row: '/image/f_3.svg',
    column: '/image/b_5.svg',
    koreanName: '김민아',
    englishName: 'Minah Kim',
    startTime: 1000,
  },
  {
    id: 'Jiyun_Choi',
    image: '',
    coordinate: '(3,6)',
    row: '/image/f_3.svg',
    column: '/image/b_6.svg',
    koreanName: '최지현',
    englishName: 'Jiyun Choi',
    startTime: 1000,
  },
  {
    id: 'Ijun_Choi',
    image: '',
    coordinate: '(3,7)',
    row: '/image/f_3.svg',
    column: '/image/b_7.svg',
    koreanName: '최이준',
    englishName: 'Ijun Choi',
    startTime: 1000,
  },
  {
    id: 'Minkyung_Kim',
    image: '',
    coordinate: '(4,1)',
    row: '/image/f_4.svg',
    column: '/image/b_1.svg',
    koreanName: '김민경',
    englishName: 'Minkyung Kim',
    startTime: 1000,
  },
  {
    id: 'Heejae_Choi',
    image: '',
    coordinate: '(4,2)',
    row: '/image/f_4.svg',
    column: '/image/b_2.svg',
    koreanName: '최희재',
    englishName: 'Heejae Choi',
    startTime: 1000,
  },
  {
    id: 'Yesong_Jung',
    image: '',
    coordinate: '(4,3)',
    row: '/image/f_4.svg',
    column: '/image/b_3.svg',
    koreanName: '정예송',
    englishName: 'Yesong Jung',
    startTime: 1000,
  },
  {
    id: 'Soyoon_Koo',
    image: '',
    coordinate: '(4,4)',
    row: '/image/f_4.svg',
    column: '/image/b_4.svg',
    koreanName: '구소윤',
    englishName: 'Soyoon Koo',
    startTime: 1000,
  },
  {
    id: 'Yejin_Hong',
    image: '',
    coordinate: '(4,5)',
    row: '/image/f_4.svg',
    column: '/image/b_5.svg',
    koreanName: '홍예진',
    englishName: 'Yejin Hong',
    startTime: 1000,
  },
  {
    id: 'Heejo_Han',
    image: '',
    coordinate: '(4,6)',
    row: '/image/f_4.svg',
    column: '/image/b_6.svg',
    koreanName: '한희조',
    englishName: 'Heejo Han',
    startTime: 1000,
  },
  {
    id: 'HeeSung_Kim',
    image: '',
    coordinate: '(4,7)',
    row: '/image/f_4.svg',
    column: '/image/b_7.svg',
    koreanName: '김희성',
    englishName: 'HeeSung Kim',
    startTime: 1000,
  },
  {
    id: 'Leyi_ji',
    image: '',
    coordinate: '(4,8)',
    row: '/image/f_4.svg',
    column: '/image/b_8.svg',
    koreanName: '지레이',
    englishName: 'Leyi ji',
    startTime: 1000,
  },
];
