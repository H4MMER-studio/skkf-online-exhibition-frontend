import React from 'react';
import { Home } from '@/components';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { IAppProps } from '@/interfaces';

const HomePage: NextPage<IAppProps> = ({ isUnmountHome }) => {
  return <Home.Container isUnmountHome={isUnmountHome} />;
};

export default HomePage;
