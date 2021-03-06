import { device } from '@/styles';
import React from 'react';
import styled from 'styled-components';

const STDCreditContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Title = styled.div`
  background-color: #fff;
  padding: 4px;
  width: fit-content;
  margin-bottom: 16px;

  .korean {
    font-family: 'Pretendard';
    font-size: 20px;
    line-height: 110%;
    margin-right: 4px;

    @media (max-width: 1024px) {
      font-size: 16px;
      line-height: 174%;
    }
  }

  .english {
    font-family: 'pp-mondwest';
    font-size: 22px;
    line-height: 110%;

    @media (max-width: 1024px) {
      font-size: 18px;
      line-height: 110%;
    }
  }
`;

const Name = styled.div`
  color: #fff;
  margin-bottom: 16px;

  .korean {
    font-family: 'Pretendard';
    font-size: 18px;
    line-height: 170%;
    margin-right: 4px;

    @media (max-width: 1024px) {
      font-size: 16px;
      line-height: 174%;
    }
  }

  .english {
    font-family: 'pp-mondwest';
    font-size: 22px;
    line-height: 140%;

    @media (max-width: 1024px) {
      font-size: 18px;
      line-height: 145%;
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 12px;
  }
`;

const Layout = styled.div`
  width: 100%;
`;

const STDSubTitle = styled.p`
  margin-bottom: 8px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 110%;
  /* or 14px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #bebebe;
`;

const Credit: React.VFC = () => {
  return (
    <STDCreditContainer>
      <Layout>
        <Title>
          <span className="korean">디자이너</span>
          <span className="english">Designers</span>
        </Title>
        {DESIGNERS.map((d) => {
          return (
            <Name key={d.englishName}>
              <span className="korean">{d.koreanName}</span>
              <span className="english">{d.englishName}</span>
            </Name>
          );
        })}
      </Layout>
      <Layout>
        <div>
          <Title>
            <span className="korean">지도교수</span>
            <span className="english">Professor</span>
          </Title>
          <Name>
            <span className="korean">조경숙</span>
            <span className="english">Kyeongsook Cho</span>
          </Name>
          <Name>
            <span className="korean">장성은</span>
            <span className="english">Sunny Jang</span>
          </Name>
        </div>
        <div>
          <Title>
            <span className="korean">준비위원회</span>
            <span className="english">Preparatory committee</span>
          </Title>
          {Operation.map(({ id, list }) => (
            <React.Fragment key={id}>
              <STDSubTitle>{id}</STDSubTitle>
              {list.map((d) => {
                return (
                  <Name key={d.englishName}>
                    <span className="korean">{d.koreanName}</span>
                    <span className="english">{d.englishName}</span>
                  </Name>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </Layout>
      <Layout>
        <div>
          <Title>
            <span className="korean">웹 디자인</span>
            <span className="english">Web Design</span>
          </Title>
          <Name>
            <span className="korean">이승호</span>
            <span className="english">Seungho Lee</span>
          </Name>
        </div>
        <div>
          <Title>
            <span className="korean">웹 개발</span>
            <span className="english">Web Development</span>
          </Title>
          <Name>
            <span className="korean">김건우</span>
            <span className="english">Geonwoo Kim</span>
          </Name>
          <Name>
            <span className="korean">이태현</span>
            <span className="english">Taehyun Lee</span>
          </Name>
          <Name>
            <span className="korean">최예흠</span>
            <span className="english">Yeheum Choi</span>
          </Name>
        </div>
        <div>
          <Title>
            <span className="korean">필름, 사진 연출</span>
            <span className="english">Director</span>
          </Title>
          <Name>
            <span className="korean">황토</span>
            <span className="english">Hwangtoe Studios</span>
          </Name>
        </div>
        <div>
          <Title>
            <span className="korean">도움</span>
            <span className="english">Support</span>
          </Title>
          <Name>
            <span className="korean">고주은</span>
            <span className="english">Jooeun Ko</span>
          </Name>
          <Name>
            <span className="korean">김태욱</span>
            <span className="english">Taeuk Kim</span>
          </Name>
          <Name>
            <span className="korean">김태헌</span>
            <span className="english">Taeheon Kim</span>
          </Name>
          <Name>
            <span className="korean">이종혁</span>
            <span className="english">Jonghyeok Lee</span>
          </Name>
          <Name>
            <span className="korean">임민재</span>
            <span className="english">Minjae Lim</span>
          </Name>
        </div>
        <div>
          <Title>
            <span className="korean">후원</span>
            <span className="english">Support</span>
          </Title>
          <Name>
            <span className="korean">네이버그린스토어</span>
            <span className="english">anteok.com</span>
          </Name>
          <Name>
            <span className="korean">비쥬빌라</span>
            <span className="english">bijouvilla.com</span>
          </Name>
          <Name>
            <span className="korean">디아쎄르</span>
            <span className="english">instagram.com/de_hacer</span>
          </Name>
          <Name>
            <span className="korean">로우그로브</span>
            <span className="english">lowgrove.co.kr</span>
          </Name>
          <Name>
            <span className="korean">링키래버토리</span>
            <span className="english">linkylaboratory.com</span>
          </Name>
          <Name>
            <span className="korean">한글안경</span>
            <span className="english">hangle-eyewear.com</span>
          </Name>
          <Name>
            <span className="korean">한결기획</span>
            <span className="english">xn--p89am2ar37f68a.kr</span>
          </Name>
        </div>
      </Layout>
    </STDCreditContainer>
  );
};

export default Credit;

const DESIGNERS = [
  {
    koreanName: '김혜준',
    englishName: 'Hyejune Kim',
  },
  {
    koreanName: '이명훈',
    englishName: 'Myunghoon Lee',
  },
  {
    koreanName: '윤담희',
    englishName: 'Damhee Yun',
  },
  {
    koreanName: '박연제',
    englishName: 'Yeonje Park',
  },
  {
    koreanName: '박서진',
    englishName: 'Seojin Park',
  },
  {
    koreanName: '오유',
    englishName: 'Wu Yu',
  },
  {
    koreanName: '박선영',
    englishName: 'Sunyoung Park',
  },
  {
    koreanName: '최규빈',
    englishName: 'Gyubin Choi',
  },
  {
    koreanName: '최희원',
    englishName: 'Heewon Choi',
  },
  {
    koreanName: '이윤창',
    englishName: 'Yunchang Lee',
  },
  {
    koreanName: '오근택',
    englishName: 'Geuntaek oh',
  },
  {
    koreanName: '김성빈',
    englishName: 'Seongbin Kim',
  },
  {
    koreanName: '이정은',
    englishName: 'Jeongeun Lee',
  },
  {
    koreanName: '도비안',
    englishName: 'Nguyen Thanh Van Do',
  },
  {
    koreanName: '공정인',
    englishName: 'Jeongin Gong',
  },
  {
    koreanName: '변혜민',
    englishName: 'Hyemin Byun',
  },

  {
    koreanName: '이주은',
    englishName: 'Jueun Lee',
  },
  {
    koreanName: '박지완',
    englishName: 'Jiwan Park',
  },
  {
    koreanName: '이정근',
    englishName: 'Jeonggeun Lee',
  },
  {
    koreanName: '정서희',
    englishName: 'Seohee Jeong',
  },
  {
    koreanName: '김민아',
    englishName: 'Minah Kim',
  },
  {
    koreanName: '최지현',
    englishName: 'Jihyun Choi',
  },
  {
    koreanName: '최이준',
    englishName: 'Ijun Choe',
  },
  {
    koreanName: '김민경',
    englishName: 'Minkyung Kim',
  },
  {
    koreanName: '최희재',
    englishName: 'Heejae Choi',
  },
  {
    koreanName: '정예송',
    englishName: 'Yesong Jung',
  },
  {
    koreanName: '구소윤',
    englishName: 'Soyoon Koo',
  },
  {
    koreanName: '홍예진',
    englishName: 'Yejin Hong',
  },
  {
    koreanName: '한희조',
    englishName: 'Heejo Han',
  },
  {
    koreanName: '김희성',
    englishName: 'HeeSung Kim',
  },
  {
    koreanName: '지레이',
    englishName: 'Leyi Ji',
  },
];

const Operation = [
  {
    id: '준비위원장',
    list: [
      {
        koreanName: '최희재',
        englishName: 'Heejae Choi',
      },
    ],
  },
  {
    id: '기획팀',
    list: [
      {
        koreanName: '이윤창',
        englishName: 'Yunchang Lee',
      },
    ],
  },
  {
    id: '도록영상팀',
    list: [
      {
        koreanName: '이주은',
        englishName: 'Jueun Lee',
      },
      {
        koreanName: '박지완',
        englishName: 'Jiwan Park',
      },
      {
        koreanName: '박서진',
        englishName: 'Seojin Park',
      },
    ],
  },
  {
    id: '대외협력팀',
    list: [
      {
        koreanName: '정예송',
        englishName: 'Yesong Jung',
      },
      {
        koreanName: '구소윤',
        englishName: 'Soyoon Koo',
      },
      {
        koreanName: '김민경',
        englishName: 'Minkyung Kim',
      },
    ],
  },
  {
    id: '진행팀',
    list: [
      {
        koreanName: '김성빈',
        englishName: 'Seongbin Kim',
      },
      {
        koreanName: '오근택',
        englishName: 'Geuntaek Oh',
      },
      {
        koreanName: '정서희',
        englishName: 'Seohee Jeong',
      },
      {
        koreanName: '최규빈',
        englishName: 'Gyubin Choi',
      },
    ],
  },
  {
    id: '홍보팀',
    list: [
      {
        koreanName: '이정근',
        englishName: 'Jeonggeun Lee',
      },
      {
        koreanName: '김혜준',
        englishName: 'Hyejune Kim',
      },
      {
        koreanName: '공정인',
        englishName: 'Jeongin Gong',
      },
    ],
  },
  {
    id: '회계팀',
    list: [
      {
        koreanName: '최희원',
        englishName: 'Heewon Choi',
      },
    ],
  },
];
