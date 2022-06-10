import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { mixins } from '@/styles';

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
  cursor: pointer;
`;

const BottomContentList: React.VFC = () => {
  const router = useRouter();
  const { designer } = router.query as { designer: string };

  useEffect(() => {
    const seletcedDesigner = document.getElementById(designer + '_Bottom');
    if (seletcedDesigner) {
      seletcedDesigner.scrollIntoView();
    }
  }, [designer]);

  return (
    <STDContainer>
      <STDImageWrapper>
        <STDImage
          id="Heyjune_Kim_Bottom"
          src="/image/documents/temp_image1.jpeg"
        />
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
        <STDImage
          id="Jeonggeun_Lee_Bottom"
          src="/image/documents/temp_image4.jpeg"
        />
        <STDImage src="/image/documents/temp_image1.jpeg" />
        <STDImage src="/image/documents/temp_image2.jpeg" />
        <STDImage src="/image/documents/temp_image3.jpeg" />
        <STDImage src="/image/documents/temp_image4.jpeg" />
      </STDImageWrapper>
    </STDContainer>
  );
};

export default BottomContentList;
