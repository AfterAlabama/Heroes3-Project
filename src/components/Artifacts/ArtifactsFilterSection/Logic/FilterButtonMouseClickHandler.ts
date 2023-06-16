import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import gsap from 'gsap';
import { MutableRefObject } from 'react';


export const FilterButtonMouseClickHandler = (
	isArtifactsFilterOpen: boolean,
  setArtifactsFilter: (st: boolean) => AnyAction,
  dispatch: Dispatch,
	...refs: MutableRefObject<HTMLDivElement>[]
) => {
  const [arrowRef, filtersRef] = refs;
  if (!isArtifactsFilterOpen) {
    gsap.to(arrowRef.current, {
      duration: 0.5,
      rotate: 90,
      ease: 'back.out(1)',
    });

    gsap.to(filtersRef.current, {
      duration: 0.7,
      height: '200px',
    });

    dispatch(setArtifactsFilter(true));
  } else {
    gsap.to(arrowRef.current, {
      duration: 0.5,
      rotate: -90,
      ease: 'back.out(1)',
    });

    gsap.to(filtersRef.current, {
      duration: 0.7,
      height: '0px',
      ease: 'power2',
    });

    dispatch(setArtifactsFilter(false));
  }
};
