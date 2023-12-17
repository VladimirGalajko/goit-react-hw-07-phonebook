export const setPendStatus = state => {
    state.isLoading = true;
    state.error = null;
  };
  
  export const setRejStatus = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  };
  
  export const setFulStatus = state => {
    state.isLoading = false;
    state.error = null;
  };

  export const setItems = (state, { payload }) => {
    state.items.push(payload);
  };
  export const getItems = (state, { payload }) => {
    state.items = payload;
  };
  export const delOneItem = (state, { payload }) => {
    state.items = state.items.filter(({ id }) => id !== payload);
  };