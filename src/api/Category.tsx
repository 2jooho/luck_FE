import { Axios } from '../libs/Axios';
// import { RegisterField } from 'types/';
import { API_ROUTE } from '../constants/api';
import AsyncStorage from '@react-native-community/async-storage';

const authAPI = new Axios(true);
const unAuthAPI = new Axios();

export const category = async (data) => {
    const response = await authAPI.post(API_ROUTE.AUTH.CATEGORY, data);
    return response;
}

export const mainPage = async () => {
    const data= {
        userId: await AsyncStorage.getItem('userId'),  
    };
    const response = await authAPI.post(API_ROUTE.AUTH.MAIN_PAGE, data);
    return response;
}
