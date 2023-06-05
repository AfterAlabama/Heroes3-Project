import { ref, list, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebase';
import { useGetStateVariables } from './useGetStateVariables';
import { useEffect } from 'react';

export const useGetProfilePic = () => {
	const imgList = ref(storage, 'images');
	const { setProfilePic, dispatch } = useGetStateVariables();

	const promise = list(imgList).then((response) => {
		if (response.items.length > 0) {
			return getDownloadURL(response.items[0]).then((url) => url);
		}
		return null;
	});

	useEffect(() => {
		promise.then((res) => {
			if (res) {
				dispatch(setProfilePic(res));
			}
		});
	}, []);
};
