export const selectUser = state => state.auth.user;
export const selectError = state => state.auth.error;
export const selectLoading = state => state.auth.isLoading;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
