import createStore from "../Redux";

function useStore() {
  const store = createStore();
  return store;
}
export default useStore;