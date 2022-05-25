import { mixins } from '@/styles';
import React from 'react';
import styled from 'styled-components';

const STDContainer = styled.div`
  ${mixins.flexSet('flex-start')}
  width: 100%;
  padding-top: 50px;
`;

const STDImageWrapper = styled.div`
  ${mixins.flexSet('flex-start')}
  ${mixins.noScrollbar()}
  width: 100%;

  overflow-x: scroll;
`;

const STDImage = styled.img`
  width: 145px;
  height: 145px;
  object-fit: contain;
  margin-right: 8px;
`;

const BottomContentList: React.VFC = () => {
  return (
    <STDContainer>
      <STDImageWrapper>
        <STDImage src="/image/documents/temp_image1.jpeg" />
        <STDImage src="/image/documents/temp_image2.jpeg" />
        <STDImage src="/image/documents/temp_image3.jpeg" />
        <STDImage src="/image/documents/temp_image4.jpeg" />
        <STDImage src="/image/documents/temp_image1.jpeg" />
        <STDImage src="/image/documents/temp_image2.jpeg" />
        <STDImage src="/image/documents/temp_image3.jpeg" />
        <STDImage src="/image/documents/temp_image4.jpeg" />
        <STDImage src="/image/documents/temp_image1.jpeg" />
        <STDImage src="/image/documents/temp_image2.jpeg" />
        <STDImage src="/image/documents/temp_image3.jpeg" />
        <STDImage src="/image/documents/temp_image4.jpeg" />
        <STDImage src="/image/documents/temp_image1.jpeg" />
        <STDImage src="/image/documents/temp_image2.jpeg" />
        <STDImage src="/image/documents/temp_image3.jpeg" />
        <STDImage src="/image/documents/temp_image4.jpeg" />
      </STDImageWrapper>
    </STDContainer>
  );
};

export default BottomContentList;
