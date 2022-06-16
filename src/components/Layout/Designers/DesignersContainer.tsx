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
  const { designer } = router.query as { designer: string };

  useEffect(() => {
    const nav = document.getElementById('nav-bar');
    setHeaderHeight(nav.offsetHeight);
  }, [width]);

  useEffect(() => {
    if (videoEle) {
      const currentTime = CONTENTS_DATA.find(
        (c) => c.id === (designer ?? 'Heyjune_Kim')
      ).time;
      clickMoveVideo(currentTime);
    }
  }, [designer, videoEle]);

  const clickMoveVideo = ({
    firstStartTime,
    firstEndTime,
    secondStartTime,
    secondEndTime,
  }: {
    firstStartTime: number;
    firstEndTime: number;
    secondStartTime: number;
    secondEndTime: number;
  }) => {
    videoEle.currentTime = firstStartTime;
    videoEle.autoplay = true;
    videoEle.ontimeupdate = () => {
      if (Math.round(videoEle.currentTime) === firstEndTime) {
        videoEle.currentTime = secondStartTime;
      }
      if (Math.round(videoEle.currentTime) === secondEndTime) {
        videoEle.currentTime = firstStartTime;
      }
    };
  };

  return (
    <STDContainer>
      <DesignerList
        dataList={CONTENTS_DATA}
        headerHeight={headerHeight}
        clickMoveVideo={clickMoveVideo}
      />
      <STDContentsWrapper>
        <Contents
          contentsData={CONTENTS_DATA}
          headerHeight={headerHeight}
          setVideoEle={setVideEle}
        />
        <BottomContentList
          dataList={CONTENTS_DATA}
          clickMoveVideo={clickMoveVideo}
        />
      </STDContentsWrapper>
    </STDContainer>
  );
};

export default DesignersContainer;

export type ContentsData = {
  id: string;
  image: string;
  coordinate?: string;
  row: string;
  column: string;
  koreanName: string;
  englishName: string;
  email: string | null;
  time: {
    firstStartTime: number;
    firstEndTime: number;
    secondStartTime: number;
    secondEndTime: number;
  };
  contents: { url: string; type: 'row' | 'column'; order: string }[][];
  contentsText: { kor: string; eng: string };
  title: {
    kor: string;
    eng: string;
  };
}[];

const CONTENTS_DATA: ContentsData = [
  {
    id: 'Heyjune_Kim',
    image: '/image/thumbs/thumb_1_1.jpg',
    coordinate: '(1,1)',
    row: '/image/f_1.svg',
    column: '/image/b_1.svg',
    email: 'june_kim515@naver.com',
    koreanName: '김혜준',
    englishName: 'Hyejune Kim',
    time: {
      firstStartTime: 332,
      firstEndTime: 342,
      secondStartTime: 350,
      secondEndTime: 364,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_1_1_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_1_1_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_1_1_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `“비대칭 균형”은 비대칭적인 선의 아름다움을 컨셉으로 정형화된 기존 옷의 구성을 해체한 디자인이다. 트윌 조직의 울 혼방 소재로 직선적이고 깔끔한 실루엣을 표현하고, 그레이 컬러를 베이스로 차분하고 모던한 분위기를 연출했다. 로얄 블루 라인의 디테일 배색은 비대칭성을 강조해 단조로운 분위기를 전환해준다.`,
      eng: `"Asymmetrical Balance" is a design that dismantles the composition of existing clothing, which is shaped with the concept of asymmetrical line beauty. A straight and neat silhouette is expressed with twill woven wool blend material, and a calm and modern atmosphere is created based on gray color. The blue line's detail color emphasizes asymmetry and changes the monotonous atmosphere.`,
    },
    title: {
      kor: '비대칭 균형',
      eng: 'Asymmetrical balance',
    },
  },
  {
    id: 'Myunghoon_Lee',
    image: '/image/thumbs/thumb_1_2.jpg',
    coordinate: '(1,2)',
    row: '/image/f_1.svg',
    column: '/image/b_2.svg',
    email: 'myunghoon3@g.skku.edu',
    koreanName: '이명훈',
    englishName: 'Myunghoon Lee',
    time: {
      firstStartTime: 278,
      firstEndTime: 284,
      secondStartTime: 278,
      secondEndTime: 284,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_1_2_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_1_2_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_1_2_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `“소통”은 블라우스와 스커트, 팬츠로 구성되어 있다. 얇은 실크 블라우스는 햇빛이 들어오는 한옥의 ‘창살’을 재구성하여 옷과 착장자의 소통을 표현했다. 플리츠가 들어간 스커트와 팬츠는 길고 곧은 기운을 더하면서 블라우스와의 시너지를 의도하였다.`,
      eng: `"Smoking, not blocking" consists of a blouse, skirt, and pants. The thin silk blouse reconstructed the "window" of the Hanok where the sunlight came in to express the communication between the clothes and the dresser. The pleated skirt and pants were intended to create synergy with the blouse, adding long and straight energy.`,
    },
    title: {
      kor: '소통',
      eng: 'Smoking not blocking',
    },
  },
  {
    id: 'Damhee_Yun',
    image: '/image/thumbs/thumb_1_3.jpg',
    coordinate: '(1,3)',
    row: '/image/f_1.svg',
    column: '/image/b_3.svg',
    email: 'himykem@naver.com',
    koreanName: '윤담희',
    englishName: 'Damhee Yun',
    time: {
      firstStartTime: 310,
      firstEndTime: 325,
      secondStartTime: 310,
      secondEndTime: 325,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_1_3_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_1_3_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_1_3_3.jpg',
          type: 'column',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `하늘의 태양, 숲의 잎사귀, 강의 폭포수. 자연이 그려내는 수많은 선들은 조화롭게 공존하고, 동시에 교차하며 새로운 형태의 시작점이 된다. 그 시작과 조응하는 순간 터져 나오는 자연의 생동감과 활기, 그리고 풍성함을 레이어링 한 오간자와 부드럽게 흐르는 새틴으로 형상화했다.`,
      eng: `The sun in the sky, the leaves of the forest, the waterfalls of the river. The numerous lines drawn by nature coexist harmoniously, intersecting at the same time, and become the beginning of a new form. The liveliness, vitality, and richness of nature that burst at the moment we correspond with that beginning were embodied in layered organza and softly flowing satin.`,
    },
    title: {
      kor: '자연과의 조응',
      eng: 'The Correspondence with Nature',
    },
  },
  {
    id: 'Yeonje_Park',
    image: '/image/thumbs/thumb_1_4.jpg',
    coordinate: '(1,4)',
    row: '/image/f_1.svg',
    column: '/image/b_4.svg',
    email: 'yunje98@gmail.com',
    koreanName: '박연제',
    englishName: 'Yeonje Park',
    time: {
      firstStartTime: 326,
      firstEndTime: 331,
      secondStartTime: 342,
      secondEndTime: 349,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_1_4_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_1_4_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_1_4_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `십이시 중 어슴푸레한 새벽빛이 들어오는 묘시(卯時)의 창틀을 디자인으로 형상화했다. 구속받지 않는 편안한 실루엣 속에 오간자 셔츠의 시접과 팬츠의 핀턱이 반복된다. 선 외의 기타 디자인 요소의 절제를 통해 ‘선’을 강조하는 “묘시”는 창틀 너머로 새롭게 도래할 아침을 상상하게 한다.`,
      eng: `The design embodies the window frame of '묘시(卯時)', which is a dim dawn light among the traditional concept of time. In a comfortable silhouette without restraint, the seam allowance of the organza shirt and the pintuck of the pants are repeated. Emphasizing a line through moderation of other design elements other than the line, "Daybreak" makes us imagine a new morning beyond the window frame.`,
    },
    title: {
      kor: '묘시',
      eng: 'Daybreak',
    },
  },
  {
    id: 'Seojin_Park',
    image: '/image/thumbs/thumb_1_5.jpg',
    coordinate: '(1,5)',
    row: '/image/f_1.svg',
    column: '/image/b_5.svg',
    email: 'joj3566@naver.com',
    koreanName: '박서진',
    englishName: 'Seojin Park',
    time: {
      firstStartTime: 285,
      firstEndTime: 301,
      secondStartTime: 285,
      secondEndTime: 301,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_1_5_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_1_5_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_1_5_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `선의 전진은 그 방향에 따라 무한한 절개를 만든다. 새로운 절개를 통해 독립적 분리를 시도한 두 디자인은 해체를 넘어 의복의 구성에 대한 끝없는 가능성을 보여준다.`,
      eng: `The advance of the line makes an infinite section along its direction. The two designs that attempted independent separations through new incisions show endless possibilities for the composition of clothing beyond dismantling.`,
    },
    title: {
      kor: '새로운 분리',
      eng: 'New Separation',
    },
  },
  {
    id: 'Wu_YU',
    image: '/image/thumbs/thumb_1_6.jpg',
    coordinate: '(1,6)',
    row: '/image/f_1.svg',
    column: '/image/b_6.svg',
    email: 'muyouyu3_@naver.com',
    koreanName: '오유',
    englishName: 'Wu Yu',
    time: {
      firstStartTime: 272,
      firstEndTime: 278,
      secondStartTime: 272,
      secondEndTime: 278,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_1_6_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_1_6_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_1_6_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `서양 복식의 실루엣에 중국 전통복식 치파오를 표현하였다. 치파오 칼라와 테일러드 칼라, 상하 바디스에서의 대담한 절개선이 교차되면서 동서양의 의상이 부딪히는 접점을 증폭시켜 준다.`,
      eng: `The traditional Chinese costume qipao is expressed as a silhouette of Western costume. \nThe intersection of the qipao collar, the tailored collar, and the bold incisions of the design amplifies the contact point where East and West costumes collide`,
    },
    title: {
      kor: '날갯짓',
      eng: 'Flapping',
    },
  },
  {
    id: 'Sunyoung_Park',
    image: '/image/thumbs/thumb_1_7.jpg',
    coordinate: '(1,7)',
    row: '/image/f_1.svg',
    column: '/image/b_7.svg',
    email: 'parksunyoung0619@gmail.com',
    koreanName: '박선영',
    englishName: 'Sunyoung Park',
    time: {
      firstStartTime: 302,
      firstEndTime: 309,
      secondStartTime: 302,
      secondEndTime: 309,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_1_7_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_1_7_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_1_7_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `세련된 클래식 무드가 보여주는 절제된 아름다움을 표현하는 디자인이다. 기능과 실용성, 동시에 심미감을 창출하는 본질적인 디자인 요소로서 ‘선’에 접근하고 있다. 이탈리아에서 제작한 울 혼합 소재 위에 레더 트리밍을 더하여 섬세하고 우아한 분위기가 느껴지도록 했다. 과도한 장식을 덜어내고 유연함이 느껴지는 supple straight silhouette 으로 완성해 미니멀한 감성을 전달하고자 하였다.`,
      eng: `Portraying a sophisticated, classic mood, the design features subtle beauty. An artistic approach to the perception of ‘line’ as an intrinsic design element that fuses functionality, practicality, and aesthetic sensibility. The leather trimmings on the Italian wool blend adds delicate and refined touch. Relieving excessive ornament and bestowing fluidity, the design was perfected in a supple and straight silhouette to deliver minimalist sensitivity.`,
    },
    title: {
      kor: '절제된 우아함',
      eng: 'Refined, understated elegance',
    },
  },
  {
    id: 'Gyubin_Choi',
    image: '/image/thumbs/thumb_2_1.jpg',
    coordinate: '(2,1)',
    row: '/image/f_2.svg',
    column: '/image/b_1.svg',
    email: 'annatris2000@gmail.com',
    koreanName: '최규빈',
    englishName: 'Gyubin Choi',
    time: {
      firstStartTime: 225,
      firstEndTime: 232,
      secondStartTime: 225,
      secondEndTime: 232,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_2_1_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_2_1_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_2_1_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `"여심"은 무채색이 주는 강인함을 도출하여 여성의 여리함과 조화를 시도한 디자인이다. 블랙 에나멜 원단을 사용해 건조해 보일 수 있는 검정색을 활동적으로 보이도록 하였다. 자칫 흑백의 대비에서 느껴질 수 있는 단조로움을 퍼프와 카울의 볼륨으로 여성스러운 실루엣을 강렬하게 표현하고 있다.`,
      eng: `The work, “Women's affection" is an attempt to harmonize the intensity of achromatic hues with the delicate softness of women. By employing black enamel cloth, the color 'black' was made to appear vibrant and energetic, rather than dull. The monotony that can be felt in the contrast of black and white is intensely expressed with the volume of puff and cowl that highlights a feminine silhouette.`,
    },
    title: {
      kor: '여심',
      eng: 'Women’s affection',
    },
  },
  {
    id: 'Heewon_Choi',
    image: '/image/thumbs/thumb_2_2.jpg',
    coordinate: '(2,2)',
    row: '/image/f_2.svg',
    column: '/image/b_2.svg',
    email: 'gldjsldjs@naver.com',
    koreanName: '최희원',
    englishName: 'Heewon Choi',
    time: {
      firstStartTime: 238,
      firstEndTime: 246,
      secondStartTime: 238,
      secondEndTime: 246,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_2_2_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_2_2_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_2_2_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `대관식"은 비통한 시기는 떠나 보내고 자유롭고 활기찬 미래를 염원하는 디자이너의 마음을 표현하였다. 작품 전반의 동화적인 컨셉은 밝은 희망의 메세지를 더욱 돋보이게 한다. 특히 인디고와 화이트 컬러, 절제된 실루엣과 화려한 레이스 소재, 두 착장 사이의 영민한 대비는 코로나가 종식과 더불어 일상 회복이라는 희망과 통쾌함을 선사한다.`,
      eng: `The title "Corona-tion" embodies the designer's hope and desire to let go of the sorrowful times and welcome a bright free future. The art’s overall fairy-tale motif emphasizes the sense of optimism even more . The colors of indigo and white, the fabrics of restrained silhouette and magnificent laces, highlights the contrast between the two pieces which deliver the meaning of hope and pleasure brought by the end of the pandemic and recovery of daily routines.`,
    },
    title: {
      kor: '대관식',
      eng: 'Corona-tion',
    },
  },
  {
    id: 'Yunchang_Lee',
    image: '/image/thumbs/thumb_2_3.jpg',
    coordinate: '(2,3)',
    row: '/image/f_2.svg',
    column: '/image/b_3.svg',
    email: 'dbfj7132@naver.com',
    koreanName: '이윤창',
    englishName: 'Yunchang Lee',
    time: {
      firstStartTime: 210,
      firstEndTime: 224,
      secondStartTime: 210,
      secondEndTime: 224,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_2_3_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_2_3_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_2_3_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `감출수록 드러나는 것, 모호함에서 느끼는 매력, 어둠에 대한 경외를 이해하고 통제할 때 은닉은 아름다움을 형용하는 수단이 된다. 부풀려진 검정의 외피 속에 신체를 숨겼지만 안으로 접힌 주름은 숨겨진 것에 대한 일말의 관심을 환기한다.`,
      eng: `When one understands and controls what is revealed the more we hide it, the charm we feel from ambiguity, and the awe of the dark, concealment becomes a means of articulating beauty.
      The inflated black coat hides the body, but the pleats within draw attention to what is concealed. concealment becomes a means of articulating beauty. The inflated black coat hides the body, but the pleats within draw attention to what is concealed.`,
    },
    title: {
      kor: '은닉',
      eng: 'Concealment',
    },
  },
  {
    id: 'Geuntaek_oh',
    image: '/image/thumbs/thumb_2_4.jpg',
    coordinate: '(2,4)',
    row: '/image/f_2.svg',
    column: '/image/b_4.svg',
    email: 'xortm9277@naver.com',
    koreanName: '오근택',
    englishName: 'Geuntaek oh',
    time: {
      firstStartTime: 150,
      firstEndTime: 157,
      secondStartTime: 251,
      secondEndTime: 254,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_2_4_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_2_4_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_2_4_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `생명을 다 하여 그 존재가 희미해진 것들에도 아름다움이 있다. 메마른 꽃잎의 비정형적인 형태와 바래진 색감에 주목하여 크리즈(crease)가공 소재의 주름진 질감, 개더, 셔링, 탈색, 다색의  핸드다잉 기법을 통해 시들어가는 꽃의 아름다움을 형상화하고자 하였다.`,
      eng: `There is also beauty in the things that have lost their lives and faded their existence. The design focuses on the atypical shape and fading color of dry petals to shape the beauty of withering flowers through the wrinkled texture of crease-processed materials, gather, shirring, and multi-colored hand-dying techniques.`,
    },
    title: {
      kor: '퇴색',
      eng: 'Faded flowers',
    },
  },
  {
    id: 'Seonbin_Kim',
    image: '/image/thumbs/thumb_2_5.jpg',
    coordinate: '(2,5)',
    row: '/image/f_2.svg',
    column: '/image/b_5.svg',
    email: 'asrv5898@naver.com',
    koreanName: '김성빈',
    englishName: 'Seongbin Kim',
    time: {
      firstStartTime: 146,
      firstEndTime: 148,
      secondStartTime: 158,
      secondEndTime: 175,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_2_5_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_2_5_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_2_5_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `“痕”은 자연에게 풍화되고 부식되면서도 자연을 감인하고 지구해 낸 인간에게 남은 흔적을 표현한 디자인이다. 밀리터리 기반의 아웃도어룩의 형상 안에서, 인간 본연의 빛깔을 풀빛과 흙빛으로 규정하고 이 빛깔을 탈색과 염색 기법을 통해 재현하였다.`,
      eng: `“痕” is a design that expresses the nature traces  of weathering and corrosion in humans, as well as traces of endurance and withstanding. In the shape of military-based outdoor fashion, the natural color of human beings was expressed in the color of grass and earth through bleaching and dyeing.`,
    },
    title: {
      kor: '흔',
      eng: 'trace, 痕',
    },
  },
  {
    id: 'Jeongun_Lee',
    image: '/image/thumbs/thumb_2_6.jpg',
    coordinate: '(2,6)',
    row: '/image/f_2.svg',
    column: '/image/b_6.svg',
    email: 'iam5941@naver.com',
    koreanName: '이정은',
    englishName: 'Jeongeun Lee',
    time: {
      firstStartTime: 195,
      firstEndTime: 208,
      secondStartTime: 195,
      secondEndTime: 208,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_2_6_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_2_6_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_2_6_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `해질녘 노을과 선선한 가을 바람이 만들어내는 따뜻한 황금빛 물결을 표현하였다. 디자인에서 주색으로 사용된 골드 컬러와 강렬한 색상 대비를 이루는 스티치와 늘어뜨려진 실은 노을 빛을 받으며 흔들리는 들판 위 벼의 모습을 연상케 한다. 디자인의 불규칙한 형태와 구조는 외부 자극에 자유로이 흔들리며 자연이 연주하는 우연적이고 경쾌한 리듬의 표현이다.`,
      eng: `Design expresses the warm golden waves created by the sunset and the cool autumn wind. Stitch, which contrasts the gold color used as the main color in the design with the intense color, and the hanging thread isreminiscent of the reed swaying under the glow of the sunset. The irregular shape and structure of the design are expressions of accidental and cheerful rhythms played by nature, freely swayed by external stimuli.`,
    },
    title: {
      kor: '가을의 노을',
      eng: 'Autumn Sunset',
    },
  },
  {
    id: 'Nguyen_Thanh_Van_Do',
    image: '/image/thumbs/thumb_2_7.jpg',
    coordinate: '(2,7)',
    row: '/image/f_2.svg',
    column: '/image/b_7.svg',
    email: 'kloude@g.skku.edu',
    koreanName: '도비안',
    englishName: 'Nguyen Thanh Van Do',
    time: {
      firstStartTime: 233,
      firstEndTime: 238,
      secondStartTime: 233,
      secondEndTime: 238,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_2_7_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_2_7_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_2_7_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `여성의 자연스러운 몸매를 돋보이게 하는 클래식하고 우아한 웨딩 드레스에서 영감을 받은 “결백”은 순수함과 낭만적인 이미지의 여성을 연상시키는 디자인이다. 새로운 시작을 상징하는 하얀색을 사용해 고유의 미니멀한 분위기를 표현하고자 하였다. 심플한 실루엣에 디자이너의 창작적 노력과 정성이 담은 꽃 디테일이 포인트가 된다.`,
      eng: `Inspired by classic and elegant wedding gowns that accentuates a woman's natural body, "Innocence" is a design that evokes an innocent romantic woman in mind. The designs are expressing a unique minimalist atmosphere through the use of white, which represents a newbeginning.1. The point of the simple design is the flower details created with the designer's creative effort and sincerity. or 2. The flower details created with the designer's creative effort and sincerity are the focal point of this simple design.`,
    },
    title: {
      kor: '결백',
      eng: 'Innocence',
    },
  },
  {
    id: 'Jeongin_Gong',
    image: '/image/thumbs/thumb_2_8.jpg',
    coordinate: '(2,8)',
    row: '/image/f_2.svg',
    column: '/image/b_8.svg',
    email: 'jay.jeongin.g@gmail.com',
    koreanName: '공정인',
    englishName: 'Jeongin Gong',
    time: {
      firstStartTime: 117,
      firstEndTime: 145,
      secondStartTime: 117,
      secondEndTime: 145,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_2_8_1.jpg',
          type: 'row',
          order: '(1/4)',
        },
        {
          url: '/image/designers/designer_2_8_2.jpg',
          type: 'row',
          order: '(2/4)',
        },
      ],
      [
        {
          url: '/image/designers/designer_2_8_3.jpg',
          type: 'row',
          order: '(3/4)',
        },
        {
          url: '/image/designers/designer_2_8_4.jpg',
          type: 'row',
          order: '(4/4)',
        },
      ],
    ],
    contentsText: {
      kor: `하얀 거실 커튼을 몸에 휘감고 알록달록한 엄마의 스카프를 두르며 아름다운 드레스를 상상하곤 하였던 디자이너의 어린 시절로부터 출발한 디자인이다. 지금은 희미해졌지만 행복했던 기억을 몽환적인 분홍,  화이트,  오렌지의 컬러로 표현하였으며,  어깨와 힙 라인을 두르는 실키한 스카프 디테일을 특징으로 한다.`,
      eng: `The design originated from the designer's childhood when she dreamed about beautiful dresses as she was wrapped around with white living room curtains and wearing colorful mother's scarves. Although it has faded now, the designer expressed those lovely memories in dreamy pink, white, and orange colors. The designs featured silky scarf details surrounding shoulders and hip line.`,
    },
    title: {
      kor: '향수',
      eng: 'The Scent of Nostalgia',
    },
  },
  {
    id: 'Hyemin_Byun',
    image: '/image/thumbs/thumb_2_9.jpg',
    coordinate: '(2,9)',
    row: '/image/f_2.svg',
    column: '/image/b_9.svg',
    email: 'hyemin000807@naver.com',
    koreanName: '변혜민',
    englishName: 'Hyemin Byun',
    time: {
      firstStartTime: 176,
      firstEndTime: 194,
      secondStartTime: 176,
      secondEndTime: 194,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_2_9_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_2_9_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_2_9_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `“내면의 창”은 인간 내면을 시각적으로 표현해 보자는 생각에서 출발한 디자인으로, 슬림한 T 자형 실루엣의 파워숄더가 포인트인 여성용 정장이다. 아이보리색의 메인 원단과 푸른색 원단의 조화를 시도하였으며, 탈색 및 염색 기법으로 비정형적인 구조의 절개를 통해 개인의 무한한 내면의 사유를 재현하였다.`,
      eng: `“Window of the inner mind” is a design that started with the idea of visually expressing the ‘window’ inside the inner workings of humans. The major feature of this women’s suit is a strong shoulder with a slim T-shaped silhouette. It is aimed to balance the ivory main fabric with the blue fabric, and reproduced the infinite thoughts of individuals through incisions of amorphous structures with the use of bleaching and dyeing techniques.`,
    },
    title: {
      kor: '내면의 창',
      eng: 'Window of the mind',
    },
  },

  {
    id: 'Jueun_Lee',
    image: '/image/thumbs/thumb_3_1.jpg',
    coordinate: '(3,1)',
    row: '/image/f_3.svg',
    column: '/image/b_1.svg',
    email: 'suisei-@naver.com',
    koreanName: '이주은',
    englishName: 'Jueun Lee',
    time: {
      firstStartTime: 61,
      firstEndTime: 77,
      secondStartTime: 98,
      secondEndTime: 110,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_3_1_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_3_1_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_3_1_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `키보드를 손에 쥐고 서로를 공격하는 21 세기 성별 전쟁에서 영감을 받은 여성복이다. 강한 남성성의 상징인 트라이벌 타투를 형상화한 메인 아이템과 골반 패드, 쥬얼리, 인조 속눈썹 등 현대에서 터부시되는 ‘여성스러운’ 디테일들을 대립시켜 마초 문화와 탈코르셋 담론을 이중적으로 꼬집는다.`,
      eng: `The “Battlefield” is a womenswear which inspired by the attack of online gender violence that occurs during 21st century. By using the main item as a shape of a tribal tattoo that symbolizes the strong masculinity, while designing the details as the modern “feminine” symbol such as, pelvic pads, jewelry and artificial eyelashes, opposite symbols create the rebellion of macho culture and de-corset discourse.`,
    },
    title: {
      kor: '말대꾸',
      eng: 'Battlefield',
    },
  },
  {
    id: 'Jiwan_Park',
    image: '/image/thumbs/thumb_3_2.jpg',
    coordinate: '(3,2)',
    row: '/image/f_3.svg',
    column: '/image/b_2.svg',
    email: 'pinata1012@g.skku.edu',
    koreanName: '박지완',
    englishName: 'Jiwan Park',
    time: {
      firstStartTime: 19,
      firstEndTime: 20,
      secondStartTime: 29,
      secondEndTime: 38,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_3_2_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_3_2_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_3_2_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `“향수”라는 개념의 비논리성과 고향에 대한 감정의 진실성을 탐구하기 위하여 남성의 몸에 파편화된 구조들을 조합하고 소재를 개발하여 고향의 풍경을 재현하였다. 두 피스의 자켓은 디자이너의 고향에 대한 기억에서 등장하는 형태로서 원을 잘라 모듈화하고 재구성하여 완성되었다. 정형화된 형태에서 벗어난 팬츠의 실루엣은 드레이핑 기법을 통해 구체화 되었으며 고향에 대한 파편의 기억들은 많은 절개의 디테일로 “하원”의 구조에 삽입되었다.`,
      eng: `The scenery of the designer’s hometown was created by combining fragmented structures of men's bodies and developed textures to explore the illogic concept of "nostalgia" and the authenticity of the designer's feelings for his hometown.  The two-piece jacket form is a shape that appears in the memory of the designer's hometown, and was completed by cutting, modularizing, and reconstructing a circle. The silhouette of the pants designed different from the standard form, was embodied through the draping technique, and the fragments of the hometown memory are described with many incision details that are inserted into the structure of “hippo".`,
    },
    title: {
      kor: '하원',
      eng: 'Hippo',
    },
  },
  {
    id: 'Jeonggeun_Lee',
    image: '/image/thumbs/thumb_3_3.jpg',
    coordinate: '(3,3)',
    row: '/image/f_3.svg',
    column: '/image/b_3.svg',
    email: 'vyxii@naver.com',
    koreanName: '이정근',
    englishName: 'Jeonggeun Lee',
    time: {
      firstStartTime: 51,
      firstEndTime: 54,
      secondStartTime: 51,
      secondEndTime: 54,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_3_3_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_3_3_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_3_3_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `디지털 환경 속에서 모든 것이 빠르게 복제·전파되는 현상을 '유희'의 과정으로 바라보았다. 이러한 사이버스페이스 속의 새로운 삶의 표준을 패션으로 표현한 "가상"은 격자 패턴의 나일론 소재와 고무 피복 등의 디테일로 사이버 혹은 기계적인 분위기를 연출했다. 아트워크와 타이포그래피를 프린팅과 자수로 자유롭게 배치함으로써 사이버 스페이스 속의 창작 문화를 패션 아이디어로 제안하였다.`,
      eng: `IIn the 'cyberspace', everything is duplicated and spreaded like a flash and neo generation recognize this process as a 'play'. "Cyberspace" expresses the new standard of living in a virtual space and to create a cyber atmosphere, it designed by using the grid-pattered details of nylon fabric and the rubber sheath of electric wire. By randomly arranging the digital printing and embroider of artworks and typography were to state the creative culture of cyberspace.`,
    },
    title: {
      kor: '가상',
      eng: 'Cyberspace',
    },
  },
  {
    id: 'Seohee_Jeong',
    image: '/image/thumbs/thumb_3_4.jpg',
    coordinate: '(3,4)',
    row: '/image/f_3.svg',
    column: '/image/b_4.svg',
    email: 'shjeong0707@naver.com',
    koreanName: '정서희',
    englishName: 'Seohee Jeong',
    time: {
      firstStartTime: 22,
      firstEndTime: 28,
      secondStartTime: 39,
      secondEndTime: 47,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_3_4_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_3_4_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_3_4_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `현대사회를 피폐한 디스토피아로 인식하여 이 속에서 생존해 나가는 인간상을 표현하고 있다. 디자인 전반에 걸친 개더 디테일은 상처입고 불안정한 인류의 모습을, 신축성의 스판 원단은 인간의 연약한 본모습을, 그리고 하드한 느낌의 소재들은 끈질긴 생존력과 굳은 의지의 상징적 표현이다. 새로운 유토피아로 텔레포트하려는 자발적 발걸음을 담은 두 디자인은 현인류의 현실과 이상형을 동시에 표명하고 있다.`,
      eng: `It expresses a human being that recognizes the modern society as an impoverished dystopia. The general design of gather details symbolizes the pain and unstable humanity, the flexible span fabric symbolizes the weakness of real self, and the material with tough texture symbolizes the viability and fortitude of human being. It features the teleport to new utopia and simultaneously express the reality and ideal of modern human beings.`,
    },
    title: {
      kor: '탈피',
      eng: 'Utopia',
    },
  },
  {
    id: 'Minah_Kim',
    image: '/image/thumbs/thumb_3_5.jpg',
    coordinate: '(3,5)',
    row: '/image/f_3.svg',
    column: '/image/b_5.svg',
    email: 'kmina0116@naver.com',
    koreanName: '김민아',
    englishName: 'Minah Kim',
    time: {
      firstStartTime: 15,
      firstEndTime: 18,
      secondStartTime: 79,
      secondEndTime: 84,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_3_5_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_3_5_3.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_3_5_2.jpg',
          type: 'column',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `벨 에포크는 프랑스 황금시대의 풍요로움을 패션으로 담아낸 디자인이다. 퍼프 슬리브와 벌룬 스커트의 풍성한 실루엣으로 풍요를 패션으로 이미지화 하였으며, 칼라의 화려한 러플을 통해 찬란했던 시절의 아름다움을 담아냈다.`,
      eng: `“Belle Époque” is a design that captures the opulence of  France’s golden age. The silhouette of puff sleeves and balloon skirts portrayed affluence as fashion, and the collar’s gorgeous ruffles illustrates the beauty of the glorious days.`,
    },
    title: {
      kor: '벨 에포크',
      eng: 'Belle Époque',
    },
  },
  {
    id: 'Jiyun_Choi',
    image: '/image/thumbs/thumb_3_6.jpg',
    coordinate: '(3,6)',
    row: '/image/f_3.svg',
    column: '/image/b_6.svg',
    email: 'jessica0406@naver.com',
    koreanName: '최지현',
    englishName: 'Jihyun Choi',
    time: {
      firstStartTime: 11,
      firstEndTime: 14,
      secondStartTime: 90,
      secondEndTime: 97,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_3_6_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_3_6_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_3_6_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `Origin 으로의 이동은 가장 기본이 되는 곳, '기점'으로 돌아감을 의미한다. 가장 '나' 다울 수 있는 곳, 본연의 아름다움을 이끌어내는 곳으로의 순간 이동을 나타낸다. 자연을 상징하는 녹색 실크와 꽃자수가 새겨진 레이스를 활용하여 언발란스한 기장과 러플 디테일을 강조하였다.  유연한 소재들로 인해 느껴지는 발랄함이 숲 속의 요정을 연상하게 한다.`,
      eng: `Returning to Origin means going back to the the beginning, 'the starting point'. It represents the teleportation to a place that is most 'me', and to a place that brings out our innate beauty. The green silk, which symbolizes nature, and the laces etched with floral embroidery accentuate the asymmetrical length and ruffle details. The liveliness evoked by the flexible fabrics is reminiscent of a forest fairy.`,
    },
    title: {
      kor: 'Origin',
      eng: 'Starting Point',
    },
  },
  {
    id: 'Ijun_Choi',
    image: '/image/thumbs/thumb_3_7.jpg',
    coordinate: '(3,7)',
    row: '/image/f_3.svg',
    column: '/image/b_7.svg',
    email: null,
    koreanName: '최이준',
    englishName: 'Ijun Choe',
    time: {
      firstStartTime: 47,
      firstEndTime: 50,
      secondStartTime: 85,
      secondEndTime: 89,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_3_7_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_3_7_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_3_7_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `“지베르니 정원”은 클로드 모네의 지베르니 정원으로부터 영감을 받은 디자이너의 자연을 향한 애정을 패션화한 작품이다. 크로셰 모티브로 제작한 재킷과 베스트는 보라색을 악센트 컬러로 조합하여 모네의 정원을 담아내었다. 각기 다른 짜임의 크로셰 기법이 모네가 표현한 정원의 입체감 재현에 적용되었으며, 스커트의 플리츠 디테일을 통해 물의 정원을 표현하였다.`,
      eng: `Motivated by Claude Monet, I embodied my affection toward nature. The crochet jacket and vest are made with the accent color, purple, which captured the vibrant scenery of Monet’s 'The Garden of Flowers. Various types of crochet weaving techniques add a sense of depth and pleated details of the skirt portrayed the aesthetic harmony of 'The Garden of Flowers'.`,
    },
    title: {
      kor: '지베르니 정원',
      eng: 'Garden at Giverny',
    },
  },
  {
    id: 'Minkyung_Kim',
    image: '/image/thumbs/thumb_4_1.jpg',
    coordinate: '(4,1)',
    row: '/image/f_4.svg',
    column: '/image/b_1.svg',
    email: 'jinmingeng12@daum.net',
    koreanName: '김민경',
    englishName: 'Minkyung Kim',
    time: {
      firstStartTime: 434,
      firstEndTime: 437,
      secondStartTime: 442,
      secondEndTime: 446,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_4_1_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_4_1_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_4_1_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `어둡고 고요한 밤이 지난 후 별과 달이 빛나는 새벽의 시간을 포멀한 모던 컨셉의 자켓과 스커트로 형상화하였다. 다크 칼라의 매트한 소재는 새벽 하늘을, 밝은 크림 색상의 실키(silky)한 소재의 블라우스는 환하게 빛나는 달빛을, 그리 고 자켓 어깨 위에 더해진 실버톤의 큐빅은 무수하게 빛나는 별들의 표현이다.`,
      eng: `As silence of midnight passes, the image of stars and moon shining at dawn was embodied on the formal modern style of jacket and skirt. The dark matt fabric symbolizes the dawning sky, the bright cream-colored silky blouse represents the bright moonlight, and the silver-tone jewels which added on the jacket’s shoulder express the countless shining stars.`,
    },
    title: {
      kor: '새벽 하늘',
      eng: 'The dawning sky',
    },
  },
  {
    id: 'Heejae_Choi',
    image: '/image/thumbs/thumb_4_2.jpg',
    coordinate: '(4,2)',
    row: '/image/f_4.svg',
    column: '/image/b_2.svg',
    email: 'mchj421@hotmail.com',
    koreanName: '최희재',
    englishName: 'Heejae Choi',
    time: {
      firstStartTime: 415,
      firstEndTime: 418,
      secondStartTime: 447,
      secondEndTime: 453,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_4_2_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_4_2_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_4_2_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `에너지 넘치고 반항적이며 자기 표현에 거침없는 에티튜드를 지닌 당찬 여성을 패션으로 표현하고자 하였다. 본연의 여성스러움을 뷔스티에와 코르셋의 아이템으로 구성하였고, 전체적으로 여성의 곡선이 강조될 수 있도록 S-curve 실루엣으로 디자인하였다. 에코 레더와 망사 등 물성과 질감이 다른 이질감 있는 소재를 이용하여 “반항”을 표현하였다. 어지러운 체크 패턴 배치와 비정형적으로 레이어드된 망사는 에너지 넘치고 반항적인 무드를 표현하려 했다.`,
      eng: `It expresses an imposing woman who is energetic, rebellious and has outspoken behavior. Bustier and corset items are composed to express the inborn femininity, and to emphasize the curves of women, overall silhouette was designed as S-curve silhouette. Rebellious behavior was expressed by using heterogenous materials with different physical properties and textures such as vegan leather and mesh. Moreover, disordered check pattern arrangements and unstructured layered meshdelivers an energetic and rebellious mood.`,
    },
    title: {
      kor: '페미닌 펑크',
      eng: 'Feminine Punk',
    },
  },
  {
    id: 'Yesong_Jung',
    image: '/image/thumbs/thumb_4_3.jpg',
    coordinate: '(4,3)',
    row: '/image/f_4.svg',
    column: '/image/b_3.svg',
    email: 'ellenjys@naver.com',
    koreanName: '정예송',
    englishName: 'Yesong Jung',
    time: {
      firstStartTime: 385,
      firstEndTime: 392,
      secondStartTime: 385,
      secondEndTime: 392,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_4_3_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_4_3_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_4_3_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `겹겹이 중첩된 산맥과 능선을 적갈색의 레이온과 코튼으로 표현하였다. 따뜻한 적갈색의 메인 소재로 대지를 표현하고, 산맥의 강렬한 바람은 적갈색과 대비되는 흰색의 원단을 통해 드러냄으로써 자연의 역동성을 전달한다. 백색의 코튼 재킷은 풍성한 개더로 첩첩이 둘러싸인 능선 위의 구름의 표현이다.`,
      eng: `The overlapping mountains and ridges were expressed in reddish-brown rayon and cotton. The earth was expressed with main material, warm reddish-brown rayon, and the intense wind of the mountain range was exposed through white fabric that contrasts with reddish-brown color, conveying the dynamics of nature. The white cotton jacket with gathered sleeves was an expression of clouds on the layers of ridges.`,
    },
    title: {
      kor: '굴곡의 겹',
      eng: 'Layers of ridges',
    },
  },
  {
    id: 'Soyoon_Koo',
    image: '/image/thumbs/thumb_4_4.jpg',
    coordinate: '(4,4)',
    row: '/image/f_4.svg',
    column: '/image/b_4.svg',
    email: 'aalslthdbs17@naver.com',
    koreanName: '구소윤',
    englishName: 'Soyoon Koo',
    time: {
      firstStartTime: 404,
      firstEndTime: 414,
      secondStartTime: 404,
      secondEndTime: 414,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_4_4_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_4_4_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_4_4_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `"글루터리”는 풀, 염료 및 반짝이 풀의 혼합물을 통해 트위드의 입체적인 질감을 강조한다. 곡선과 직선을 넘나드는 디자인과 피스를 분리할 수 있는 직선의 탈착 끈은 자유로운 무드를 연출한다. 곡선의 여밈 선과 실루엣을 직선적인 디테일과 대비하여 상반된 조화를 의도한 “글루터리”는 전체적으로 트위드의 클래식한 분위기와 주요 소재인 펄 트위드 원단의 도트 무늬를 통해 독특하며 고풍스러운 분위기를 보여주고 있다.`,
      eng: `The “Gluettery” emphasizes the solid texture of tweed through mixture of dye, glue and glitters. Borderless of curves and straight lines, and the detachable strap builds an atmosphere of freedom. The contrast of curve closure and straight-line details were to create unique and classical mood to it design.`,
    },
    title: {
      kor: '글루터리',
      eng: 'Gluettery, GLITTERY+GLUE',
    },
  },
  {
    id: 'Yejin_Hong',
    image: '/image/thumbs/thumb_4_5.jpg',
    coordinate: '(4,5)',
    row: '/image/f_4.svg',
    column: '/image/b_5.svg',
    email: null,
    koreanName: '홍예진',
    englishName: 'Yejin Hong',
    time: {
      firstStartTime: 419,
      firstEndTime: 421,
      secondStartTime: 429,
      secondEndTime: 433,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_4_5_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_4_5_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_4_5_3.jpg',
          type: 'column',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `서로 다른 특성을 가진 데님과 퍼 소재를 혼합하여 선의 정교함과 풍성함을 나타내었다. 실크사 탑스티치로 디테일을 더하는 동시에 하의는 울소재를 바탕으로 교차하는 선의 실루엣을 살려 모던하고 트렌디한 여성복과 남성복의 스타일을 제안하였다. “완결”은 서로 다른 물성과 질감의 미완결된 소재를 믹스 매치함으로써 새로운 아름다움을 재창조하는 동시에 그 아름다움이 어느 한 성별의 전유물이 되지 않길 바라는 디자이너의 견해가 담긴 표현이다.`,
      eng: `Denim and fur fabric that have different texture were mixed to show the sophistication and richness of line. By adding silk top stitch and designing the pants with wool fabric, it emphasizes the crossing line of the silhouette and proposed the modern and trendy style to womenswear and menswear. “Completion” delivers the designer’s intention by creating new beauty with mixing incomplete and various textures in one and hoping not to be exclusive in any gender.`,
    },
    title: {
      kor: '완결',
      eng: 'Completion',
    },
  },
  {
    id: 'Heejo_Han',
    image: '/image/thumbs/thumb_4_6.jpg',
    coordinate: '(4,6)',
    row: '/image/f_4.svg',
    column: '/image/b_6.svg',
    email: 'heejo4343@nate.com',
    koreanName: '한희조',
    englishName: 'Heejo Han',
    time: {
      firstStartTime: 393,
      firstEndTime: 395,
      secondStartTime: 422,
      secondEndTime: 427,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_4_6_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_4_6_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_4_6_3.jpg',
          type: 'column',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `긴 시간 속을 여행해 온 한복은 비로소 재탄생의 준비를 마쳤다. 캐주얼의 상징인 데님과 고전적인 실크 및 오간자가 어우러져 소재들간의 독특한 균형을 시도하였다. 곡선의 실루엣을 따라 각각의 소재들이 만나는 접점에서 과거와 현대는 공존하며, 우리 고유의 전통으로 수렴한다.`,
      eng: `Hanbok that has traveled such long period, finally completed the preparation of rebirth. The combine of casual symbol, denim, and classical symbol, silk and organza, were attempted to create a unique balance between them. Along the curve silhouette, each material meets and interface the coexistence of past and present, converging our own tradition.`,
    },
    title: {
      kor: '시간 여행',
      eng: 'TimeTravel',
    },
  },
  {
    id: 'HeeSung_Kim',
    image: '/image/thumbs/thumb_4_7.jpg',
    coordinate: '(4,7)',
    row: '/image/f_4.svg',
    column: '/image/b_7.svg',
    email: 'heesungday@naver.com',
    koreanName: '김희성',
    englishName: 'HeeSung Kim',
    time: {
      firstStartTime: 396,
      firstEndTime: 403,
      secondStartTime: 438,
      secondEndTime: 441,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_4_7_2.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_4_7_3.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_4_7_1.jpg',
          type: 'column',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `"노스텔지어"는 파도를 매개로 하여 물결에 남겨진 빛의 잔상과 부서지며 홀연히 사라지는 거품의 모습을 전개한 디자인이다. 전체적으로 가볍고 유연한 소재를 사용하여 물이 흐르는 느낌을 주었다. 투톤 원단은 잔물결이 햇빛을 받을 때마다 여러가지 색깔로 반짝거리는 윤슬을 담아내고, 투명한 소재는 물 속이 비쳐 보이는 듯한 효과를 준다. 어린 시절 바다 앞에서 만들었던 모래성이 파도에 스러지던 아련함과 같은 그리운 기억에 대한 디자이너의 회상적 표현이다.`,
      eng: `“Nostalgia” was developed from the afterimage of light and bubbles left in the wave ripples. Overall light and flexible fabric were used to image the water flow. By using two tones of fabric captures the colors and glint of the ripples that is made by the sunlight, and the transparency of the fabric gives the clearness of water. It was a reminiscent expression of designer’s youth memory.`,
    },
    title: {
      kor: '노스탤지어',
      eng: 'Nostalgia',
    },
  },
  {
    id: 'Leyi_ji',
    image: '/image/thumbs/thumb_4_8.jpg',
    coordinate: '(4,8)',
    row: '/image/f_4.svg',
    column: '/image/b_8.svg',
    email: 'ley802@yeah.net',
    koreanName: '지레이',
    englishName: 'Leyi Ji',
    time: {
      firstStartTime: 378,
      firstEndTime: 384,
      secondStartTime: 378,
      secondEndTime: 384,
    },
    contents: [
      [
        {
          url: '/image/designers/designer_4_8_1.jpg',
          type: 'row',
          order: '(1/3)',
        },
        {
          url: '/image/designers/designer_4_8_2.jpg',
          type: 'row',
          order: '(2/3)',
        },
      ],
      [
        {
          url: '/image/designers/designer_4_8_3.jpg',
          type: 'row',
          order: '(3/3)',
        },
      ],
    ],
    contentsText: {
      kor: `영화 매트릭스(Matrix)’ 에서 두 여성 캐릭터 트리니티(Trinity) 와 페르세포네(Persephone) “를 뮤즈로 한 글리치(glitch)” 는 동일색 톤의 질감이 다른 가죽소재를 적용한 디자인이다. 매트와 광택의 결합이 강한 매트릭스 스타일을 드러내고 있으며, 바디라인의 아름다움이 특징이다.`,
      eng: `The “Glitch” was inspired by the movie “The Matrix” of two female characters as muse, and designed with same tone but different texture of leather fabric. By blending the matt and sheen texture symbolizes the strong matrix style and emphasizing the aesthetic body curves were the focal point.`,
    },
    title: {
      kor: '글리치',
      eng: 'Glitch',
    },
  },
];
