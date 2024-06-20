import { create } from "zustand";

type State = {
  user: { id: string; name: string } | null;
};

type Action = {
  setSignIn: (user: { id: string; name: string }) => void;
};
const initialState: State = {
  user: null,
};
const useZustandStore = create<State & Action>()((set) => ({
  ...initialState,
  setSignIn: (user) => set({ user }),
}));

export default useZustandStore;
