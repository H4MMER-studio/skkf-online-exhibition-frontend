import React from 'react';
import styled from 'styled-components';

const STDContentsLayout = styled.div`
  position: relative;
`;

const STDContentsInnerLayout = styled.div`
  padding: 24px 32px 250px 20px;
  height: calc(100% - 125px);
  overflow-y: scroll;
`;

const ItemLayout = styled.div``;

const FlexLayout = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 118px;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
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
`;

const TypoImage = styled.img`
  position: absolute;
  width: 100%;
  bottom: 32px;
  pointer-events: none;
`;

const ThanksToContents: React.VFC = () => {
  return (
    <STDContentsLayout>
      <STDContentsInnerLayout>
        <FlexLayout>
          <ItemLayout style={{ marginRight: 16 }}>
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
              <ProfileTitle>Team Leader</ProfileTitle>
              <ProfileDescription>
                이정근 / 이윤창 / 김성빈 / 정예송 / 최희원 / 최희재 / 이주은
              </ProfileDescription>
            </ProfileDescriptionLayout>
          </ItemLayout>
        </FlexLayout>
        <FlexLayout>
          <ItemLayout style={{ marginRight: 16 }}>
            <ProfileImg src={'/image/archive/infinitas.png'} />
            <ProfileDescriptionLayout>
              <ProfileTitle>Team Leader</ProfileTitle>
              <ProfileDescription>
                이정근 / 이윤창 / 김성빈 / 정예송 / 최희원 / 최희재 / 이주은
              </ProfileDescription>
            </ProfileDescriptionLayout>
          </ItemLayout>
          <ItemLayout>
            <ProfileImg src={'/image/archive/spectrum.png'} />
            <ProfileDescriptionLayout>
              <ProfileTitle>Team Leader</ProfileTitle>
              <ProfileDescription>
                이정근 / 이윤창 / 김성빈 / 정예송 / 최희원 / 최희재 / 이주은
              </ProfileDescription>
            </ProfileDescriptionLayout>
          </ItemLayout>
        </FlexLayout>
      </STDContentsInnerLayout>
      <TypoImage src="/image/archive/thanks_to_typo.png" />
    </STDContentsLayout>
  );
};

export default ThanksToContents;
