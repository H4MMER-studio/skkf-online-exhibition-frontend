import React from 'react';
import styled from 'styled-components';

const HomeContainerLayout = styled.div``;

const ThumbnailListLayout = styled.div``;

const TeamLayout = styled.div`
  display: flex;
  align-items: center;
`;

const ThumbnailItem = styled.div`
  width: 208px;
  height: 117px;
  border: 1px solid #fff;
`;

const HomeContainer: React.FC = () => {
  return (
    <HomeContainerLayout>
      <ThumbnailListLayout>
        {THUMBNAIL_DATA.map((t) => {
          return (
            <TeamLayout>
              {t.thumbnailList.map((item) => {
                return <ThumbnailItem></ThumbnailItem>;
              })}
            </TeamLayout>
          );
        })}
        {/* {THUMBNAIL_DATA.map((t) => {
          return;
        })} */}
      </ThumbnailListLayout>
    </HomeContainerLayout>
  );
};

export default HomeContainer;

const THUMBNAIL_DATA: {
  team: string;
  thumbnailList: {
    image: string;
    row: number;
    column: number;
    koreanName: string;
    englishName: string;
  }[];
}[] = [
  {
    team: 'Infinitas',
    thumbnailList: [
      {
        image: '',
        row: 1,
        column: 1,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 1,
        column: 2,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 1,
        column: 3,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 1,
        column: 4,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 1,
        column: 5,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 1,
        column: 6,
        koreanName: '',
        englishName: '',
      },
    ],
  },
  {
    team: 'Spectrum',
    thumbnailList: [
      {
        image: '',
        row: 2,
        column: 1,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 2,
        column: 2,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 2,
        column: 3,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 2,
        column: 4,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 2,
        column: 5,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 2,
        column: 6,
        koreanName: '',
        englishName: '',
      },
    ],
  },
  {
    team: 'Teleport to',
    thumbnailList: [
      {
        image: '',
        row: 3,
        column: 1,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 3,
        column: 2,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 3,
        column: 3,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 3,
        column: 4,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 3,
        column: 5,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 3,
        column: 6,
        koreanName: '',
        englishName: '',
      },
    ],
  },
  {
    team: 'Textureacit',
    thumbnailList: [
      {
        image: '',
        row: 1,
        column: 1,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 1,
        column: 1,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 1,
        column: 1,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 1,
        column: 1,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 1,
        column: 1,
        koreanName: '',
        englishName: '',
      },
      {
        image: '',
        row: 1,
        column: 1,
        koreanName: '',
        englishName: '',
      },
    ],
  },
];
