import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { MainNav } from '@/components';
import { useResize } from '@/hooks';
interface IContainerProps {
  height: number;
}

const STDContainer = styled.div<IContainerProps>`
  min-height: ${(props) => props.height}px;
  background-color: #000;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const selectedMenu = router.pathname;
  const { height } = useResize();
  const [isUnmountHome, setIsUnmountHome] = useState(false);

  const onClickMenu = (menu: string) => {
    // router.push(`/${menu}`);
    if (router.pathname === `/${menu}`) {
      return;
    }

    if (router.pathname === '/') {
      setIsUnmountHome(true);
      setTimeout(() => {
        router.push(`/${menu}`);
        setIsUnmountHome(false);
      }, 2500);
    } else {
      router.push(`/${menu}`);
    }
  };

  const onClickDesigner = (name: string) => {
    // setIsUnmountHome(true);
    // setTimeout(() => {
    router.push(`/designers?designer=${name}`);
    // setIsUnmountHome(false);
    // }, 2500);
  };

  return (
    <>
      <Head>
        <meta
          content="성균관대학교 예술대학 의상학과 졸업패션필름"
          name="description"
          key="description"
        />
        <meta
          content="성균관대학교 예술대학 의상학과 졸업패션필름"
          property="og:description"
          key="og:description"
        />
        <meta
          content="성균관대학교 예술대학 의상학과 졸업패션필름"
          name="twitter:description"
          key="twitter:description"
        />
        <meta
          content="성균관대학교, 좌표원점, 졸업전시회, 졸전, 온라인 전시회, 졸업 전시, 디자이너, 패션, origin of coordinate"
          name="keywords"
        />
        <link rel="shortcut icon" href="/image/favi.png" />
        <meta property="og:image" content="/image/meta-img.png" />
        <meta property="og:url" content="https://2022skkfdoc.com" />

        <title>Origin of Coordinate</title>
        <meta
          content="origin of coordinate"
          property="og:title"
          key="og:title"
        />
        <meta
          content="origin of coordinate"
          name="twitter:title"
          key="twitter:title"
        />
        <meta content="origin of coordinate" name="author" key="author" />
        <meta
          content="origin of coordinate"
          property="og:site_name"
          key="og:site_name"
        />
        <meta property="og:image" content="/image/meta-img.png" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/fonts/PPMondwestFontKit.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,300"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <STDContainer height={height}>
        <MainNav selectedMenu={selectedMenu} onClickMenu={onClickMenu} />
        <Component
          {...pageProps}
          isUnmountHome={isUnmountHome}
          onClickDesigner={onClickDesigner}
        />
      </STDContainer>
    </>
  );
}

export default MyApp;
