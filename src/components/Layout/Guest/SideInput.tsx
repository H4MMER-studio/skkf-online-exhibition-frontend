import { API } from '@/utils';
import React, { useState } from 'react';
import styled from 'styled-components';

interface IProps {
  navHeight: number;
  pageRefresh(): void;
}

const STDContainer = styled.div<{ navHeight: number }>`
  min-width: 256px;
  height: ${(props) => `calc(100vh - ${props.navHeight}px)`};
  padding: 24px;
  padding-right: 0;

  @media (max-width: 1023px) {
    width: 100%;
    height: auto;
    padding: 0px 16px 0px;
    margin-top: 24px;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const STDSideInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-right: 1px solid #fff;

  @media (max-width: 1023px) {
    display: flex;
    border-right: none;
  }
`;

const STDReviewBox = styled.div`
  width: 340px;
  padding-right: 24px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

const STDReviewerName = styled.input`
  width: 100%;
  padding: 12px 20px 12px 16px;
  margin-bottom: 16px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 174%;
  color: white;
  /* identical to box height, or 31px */

  &::placeholder {
    color: #838383;
  }
`;

const STDReviewText = styled.textarea`
  width: 100%;
  height: 169px;
  padding: 12px 20px 12px 16px;
  margin-bottom: 16px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 174%;
  color: white;
  /* identical to box height, or 31px */

  &::placeholder {
    color: #838383;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 174%;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 174%;
  }
`;

const STDSubmitButton = styled.div`
  text-align: right;

  .button_style {
    padding: 8px 20px;
    border: 1px solid #ffffff;
    border-radius: 22px;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 174%;
    color: white;
  }
`;

const CopyRightLayout = styled.div`
  position: absolute;
  bottom: 0px;
  margin-right: 24px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const CopyRightText = styled.div`
  font-size: 13px;
  line-height: 22.62px;
  color: #fff;
`;

const SideInput: React.VFC<IProps> = ({ navHeight, pageRefresh }) => {
  const [guestName, setGuestName] = useState('');
  const [guestText, setGuestText] = useState('');

  const onClickSubmitButton = async () => {
    try {
      const ipInfo = await API.GET('https://api.ipify.org?format=json');
      await API.POST(`/guest?user-agent=${ipInfo}`, {
        bodyData: {
          guest_nickname: guestName,
          guest_content: guestText,
        },
      });
      pageRefresh();
      setGuestName('');
      setGuestText('');
      alert('방명록을 등록했습니다.');
    } catch (error) {
      console.error(error);
      alert('방명록 등록을 실패했습니다.');
    }
  };

  return (
    <STDContainer navHeight={navHeight}>
      <STDSideInputWrapper>
        <STDReviewBox>
          <STDReviewerName
            placeholder="작성자 닉네임"
            value={guestName}
            onChange={(e) => {
              if (!(e.target.value.length > 10)) {
                setGuestName(e.target.value);
              }
            }}
          />
          <STDReviewText
            placeholder="축하 메세지를 남겨보세요!"
            value={guestText}
            onChange={(e) => {
              if (!(e.target.value.length > 300)) {
                setGuestText(e.target.value);
              }
            }}
          />
          <STDSubmitButton>
            <button className="button_style" onClick={onClickSubmitButton}>
              등록
            </button>
          </STDSubmitButton>
        </STDReviewBox>
        <CopyRightLayout>
          <CopyRightText style={{ marginBottom: 12 }}>
            62802 서울특별시 종로구 성균관로 25-2 수선관별관 02 - 760 - 0515
          </CopyRightText>
          <CopyRightText className="pp-mondwest">
            © Copyright, 2022 Sungkyunkwan University, Dept of Fashion Design,
            All right
          </CopyRightText>
        </CopyRightLayout>
      </STDSideInputWrapper>
    </STDContainer>
  );
};

export default SideInput;
