
const AUTH = Object.freeze({
    LOG_IN: '/luck/auth/login',
    MAIN_PAGE: `/luck/main.do`,
    MYPAGE: (userId: string) => `/luck/myPage.do?userId=${userId}`,
    MYSTAR: (userId: string) => `/luck/recommandPage.do?userId=${userId}`,
    PROFILE: (userId: string) => `/luck/profile.do?userId=${userId}`,
    CATEGORY: '/luck/cateDetailList.do',
});

export const API_ROUTE = Object.freeze({
    AUTH,
});