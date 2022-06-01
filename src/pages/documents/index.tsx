import React from 'react';
import { NextPage } from 'next';
import { Documents } from '@/components';

const DocumentsPage: NextPage = () => {
  return (
    <>
      <Documents.MainContainer />
      <div>테스트</div>
    </>
  );
};

export default DocumentsPage;
