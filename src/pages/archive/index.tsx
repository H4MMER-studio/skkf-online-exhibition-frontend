import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ArchivePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/archive/origin-of-coordinate');
  }, []);

  return <div></div>;
};

export default ArchivePage;
