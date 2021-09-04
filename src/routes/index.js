const ROUTE_PARAMS = {
  id: ':id',
};

const API_ROUTES = {
  ROOT: '/',
  LOGIN: '/login',
  GET_USER: '/user',
  CREATE_USER: '/user',
  USER_ID: `/user/${ROUTE_PARAMS.id}`,

  GET_BIODATA: '/user-biodata',
  CREATE_BIODATA: '/user-biodata',
  BIODATA_ID: `/user-biodata/${ROUTE_PARAMS.id}`,

  GET_HISTORY: '/user-history',
  HISTORY_ID: `/user-history/${ROUTE_PARAMS.id}`,
};

const VIEW_ROUTES = {
  ROOT: '/',
  GAME: '/game',
  CREATE_USER: '/create',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  VIEW_USER: '/dashboard/user',
  VIEW_BIODATA: '/dashboard/user-biodata',
};

export { API_ROUTES, VIEW_ROUTES };
