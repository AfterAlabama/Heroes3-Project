import gsap from 'gsap';
import { MutableRefObject } from 'react';


export const FilterButtonMouseLeaveHandler = (
	isArtifactsFilterOpen: boolean,
	...refs: MutableRefObject<HTMLDivElement>[]
) => {
	const [arrowRef, filtersRef] = refs;
	if (!isArtifactsFilterOpen) {
		gsap.to(arrowRef.current, {
			duration: 0.5,
			rotate: 0,
		});

		gsap.to(filtersRef.current, {
			duration: 0.5,
			height: '0px',
		});
	}
};
