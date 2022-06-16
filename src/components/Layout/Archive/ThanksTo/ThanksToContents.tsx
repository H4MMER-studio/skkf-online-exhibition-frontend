import React from 'react';
import styled from 'styled-components';
import { useResize } from '@/hooks';
import Credit from './Credit';
import { mixins } from '@/styles';

interface IProps {
  scrollState: string;
}

const STDContentsLayout = styled.div`
  position: relative;
`;

const STDContentsInnerLayout = styled.div`
  padding: 24px 32px 250px 20px;
  /* height: calc(100% - 125px); */
  height: 77vh;
  overflow-y: scroll;
  ${mixins.noScrollbar()}

  @media (max-width: 1024px) {
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 110px;
    height: 100%;
  }

  .last {
    margin-bottom: 100px;

    @media (max-width: 1024px) {
      margin-bottom: 48px;
    }
  }
`;

const ItemLayout = styled.div`
  @media (max-width: 1024px) {
    margin-bottom: 24px;
  }
`;

const FlexLayout = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 36px;

  @media (max-width: 1024px) {
    display: block;
    margin-bottom: 0px;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ProfileDescriptionLayout = styled.div`
  margin-top: 8px;
`;

const ProfileTitle = styled.div`
  color: #fff;
  font-family: 'pp-mondwest';
  font-size: 22px;
  margin-bottom: 6px;
`;

const ProfileDescription = styled.div`
  font-size: 15px;
  line-height: 22.5px;
  color: #c3c3c3;

  @media (max-width: 1024px) {
    font-size: 13px;
  }
`;

const TypoImage = styled.img<{ scrollState: string }>`
  position: absolute;
  padding: 0 32px 0 20px;
  width: calc(100%);
  bottom: 32px;
  pointer-events: none;

  @media (max-width: 1024px) {
    position: fixed;
    bottom: 0px;
    padding: 0 16px 10px;
    transform: ${({ scrollState }) =>
      `translateY(${scrollState === 'down' ? 100 : 0}%)`};
    transition: all 0.8s ease-in-out;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #fff;
  margin-bottom: 48px;
`;

const ThanksToContents: React.VFC<IProps> = ({ scrollState }) => {
  const { width } = useResize();

  return (
    <STDContentsLayout>
      <STDContentsInnerLayout>
        <FlexLayout>
          <ItemLayout style={{ marginRight: width < 1024 ? 0 : 16 }}>
            <ProfileImg src={'/image/archive/teamLeader.png'} />
            <ProfileDescriptionLayout>
              <ProfileTitle>Team Leader</ProfileTitle>
              <ProfileDescription>
                이정근 / 이윤창 / 김성빈 / 정예송 / 최희원 / 최희재 / 이주은
              </ProfileDescription>
            </ProfileDescriptionLayout>
          </ItemLayout>
          <ItemLayout>
            <ProfileImg src={'/image/archive/arrangement_commitee.png'} />
            <ProfileDescriptionLayout>
              <ProfileTitle>Preparatory Committee</ProfileTitle>
              <ProfileDescription>
                공정인 / 정서희 / 정예송 / 구소윤 / 김민경 / 김성빈 / 오근택 /
                이정근 / 이주은 /박서진 / 최희원 / 김헤준 / 최규빈 / 최희재 /
                박지완 / 이윤창
              </ProfileDescription>
            </ProfileDescriptionLayout>
          </ItemLayout>
        </FlexLayout>
        <FlexLayout>
          <ItemLayout style={{ marginRight: width < 1024 ? 0 : 16 }}>
            <ProfileImg src={'/image/archive/infinitas.png'} />
            <ProfileDescriptionLayout>
              <ProfileTitle>Infinitas</ProfileTitle>
              <ProfileDescription>
                박연제 / 박서진 / 윤담희 / 이명훈 / 김혜준 / 박선영 / 오유
              </ProfileDescription>
            </ProfileDescriptionLayout>
          </ItemLayout>
          <ItemLayout>
            <ProfileImg
              src={'/image/archive/spectrum.png'}
              style={{ marginRight: width < 1024 ? 0 : 16 }}
            />
            <ProfileDescriptionLayout>
              <ProfileTitle>Spectrum</ProfileTitle>
              <ProfileDescription>
                오근택 / 최희원 / 최규빈 / 김성빈 / 변혜민 / 공정인 / 이윤창 /
                도비안 / 이정은
              </ProfileDescription>
            </ProfileDescriptionLayout>
          </ItemLayout>
        </FlexLayout>
        <FlexLayout className='last'>
          <ItemLayout style={{ marginRight: width < 1024 ? 0 : 16 }}>
            <ProfileImg src={'/image/archive/teleportto.png'} />
            <ProfileDescriptionLayout>
              <ProfileTitle>Teleport to [ ]</ProfileTitle>
              <ProfileDescription>
                김민아 / 박지완 / 최이준 / 최지현 / 정서희 / 이주은 / 이정근
              </ProfileDescription>
            </ProfileDescriptionLayout>
          </ItemLayout>
          <ItemLayout>
            <ProfileImg
              src={'/image/archive/textureacity.png'}
              style={{ marginRight: width < 1024 ? 0 : 16 }}
            />
            <ProfileDescriptionLayout>
              <ProfileTitle>Textureacity</ProfileTitle>
              <ProfileDescription>
                정예송 / 김민경 / 김희성 / 한희조 / 최희재 / 지레이 / 홍예진 /
                구소윤
              </ProfileDescription>
            </ProfileDescriptionLayout>
          </ItemLayout>
        </FlexLayout>
        <Line />
        <Credit />
      </STDContentsInnerLayout>
      <TypoImage
        scrollState={scrollState}
        src='/image/archive/thanks_to_typo.png'
      />
    </STDContentsLayout>
  );
};

export default ThanksToContents;
