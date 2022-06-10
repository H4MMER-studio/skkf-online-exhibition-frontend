import React from 'react';
import { Home } from '@/components';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { IAppProps } from '@/interfaces';

const HomePage: NextPage<IAppProps> = ({ isUnmountHome, onClickDesigner }) => {
  return (
    <Home.Container
      isUnmountHome={isUnmountHome}
      onClickDesigner={onClickDesigner}
    />
  );
};

export default HomePage;
