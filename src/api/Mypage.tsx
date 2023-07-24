import { Axios } from '../libs/Axios';
// import { RegisterField } from 'types/';
import { API_ROUTE } from '../constants/api';

const authAPI = new Axios(true);
const unAuthAPI = new Axios();

//나의 정보 조회
export const myPageApi :any = async (userId) => {
    const response = await authAPI.get(API_ROUTE.AUTH.MYPAGE(userId));
    return response;
}

//나의 추천 별 조회
export const myStarApi :any = async (userId) => {
    const response = await authAPI.get(API_ROUTE.AUTH.MYSTAR(userId));
    return response;
}

//프로필 정보 조회
export const myProfile :any = async (userId) => {
    const response = await authAPI.get(API_ROUTE.AUTH.PROFILE(userId));
    return response;
}

