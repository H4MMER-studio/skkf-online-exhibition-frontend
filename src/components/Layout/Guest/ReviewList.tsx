import React, { useRef } from 'react';
import styled from 'styled-components';
import { mixins, device } from '@/styles';
import { useIntersect } from '@/hooks';
import { IReviewData } from '@/interfaces';
import { getDateObj, toTwinNum } from '@/utils';

interface IProps {
  reviewList: IReviewData[];
  headerHeight: number | null;
  nextPageHandler(): void;
}

const STDContainer = styled.section<{ height: number }>`
  position: relative;
  width: 100%;
  flex: 1;
  height: 100%;
  padding: 24px 16px 0 16px;

  @media ${device.laptop} {
    height: ${({ height }) => `calc(100vh - ${height}px)`};
    padding: 24px 32px 0 24px;
  }
`;

const STDContentsLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  ${mixins.noScrollbar()}
`;

const STDReviewBox = styled.div`
  width: 100%;
  margin-bottom: 24px;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 13px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  color: white;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

const STDReviewerWrapper = styled.div`
  ${mixins.flexSet('space-between')}
  margin-bottom: 24px;

  .name_style {
    font-size: 18px;
    line-height: 170%;
    font-weight: 600;

    @media (max-width: 1024px) {
      font-size: 16px;
      line-height: 174%;
    }
  }

  .date_style {
    font-weight: 400;
    font-size: 18px;
    line-height: 145%;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;

const STDReviewText = styled.p`
  white-space: pre-line;
  font-weight: 300;

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 174%;
  }
`;

const ReviewList: React.VFC<IProps> = ({
  reviewList,
  headerHeight,
  nextPageHandler,
}) => {
  const { current: root } = useRef(null);
  const [setNode] = useIntersect({ root }, nextPageHandler);

  return (
    <STDContainer height={headerHeight}>
      <STDContentsLayout>
        {reviewList?.map(
          ({ _id, guest_nickname, guest_content, created_at }, index) => {
            const { year, month, date } = getDateObj(created_at);

            return (
              <STDReviewBox
                key={_id}
                ref={reviewList.length === index + 1 ? setNode : undefined}
              >
                <STDReviewerWrapper>
                  <p className="name_style">{guest_nickname}</p>
                  <p className="date_style">
                    {year.toString().slice(2)}.{toTwinNum(month)}.
                    {toTwinNum(date)}
                  </p>
                </STDReviewerWrapper>
                <STDReviewText>{guest_content}</STDReviewText>
              </STDReviewBox>
            );
          }
        )}
      </STDContentsLayout>
    </STDContainer>
  );
};

export default ReviewList;
