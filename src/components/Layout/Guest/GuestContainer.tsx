import React, { useEffect, useState, useRef } from 'react';
import { useResize } from '@/hooks';
import styled from 'styled-components';
import ReviewList from './ReviewList';
import SideInput from './SideInput';
import { API, GUEST_API } from '@/utils';
import { IReviewData } from '@/interfaces';

const STDContainer = styled.div`
  display: flex;

  @media (max-width: 1023px) {
    display: block;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const GuestContainer: React.VFC = () => {
  const [navHeight, setNavHeight] = useState(157);
  const [reviewList, setReviewList] = useState<IReviewData[]>([]);
  const { width } = useResize();
  const [page, setPage] = useState(1);
  const isLast = useRef(false);

  const getReviewList = async (page: number) => {
    try {
      const list = await API.GET(
        `${GUEST_API}?skip=${page * 20 - 20 + 1}&limit=${page * 20}`
      );
      if (page === 1) {
        setReviewList(list.data);
      } else {
        setReviewList([...reviewList, ...list.data]);
      }
    } catch (error) {
      console.error(error);
      isLast.current = true;
    }
  };

  useEffect(() => {
    const nav = document.getElementById('nav-bar');
    setNavHeight(nav.offsetHeight);
  }, [width]);

  useEffect(() => {
    if (isLast.current) {
      if (page === 1) {
        isLast.current = false;
        getReviewList(page);
      } else {
        return;
      }
    }
    getReviewList(page);
  }, [page]);

  const nextPageHandler = () => {
    setPage((page) => page + 1);
  };

  return (
    <STDContainer>
      <SideInput
        navHeight={navHeight}
        pageRefresh={() => (page === 1 ? getReviewList(page) : setPage(1))}
      />
      <ReviewList
        headerHeight={navHeight}
        reviewList={reviewList}
        nextPageHandler={nextPageHandler}
      />
    </STDContainer>
  );
};

export default GuestContainer;
