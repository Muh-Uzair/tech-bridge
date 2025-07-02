import { create } from "zustand";

type UserIdentity = "developer" | "client" | "idle";

interface State {
  isAuthenticated: boolean;
  userIdentity: UserIdentity;
  setUserIdentity: (receivedUserIdentity: UserIdentity) => void;
}

export const useCheckUserAuthStore = create<State>((set) => ({
  isAuthenticated: false,
  userIdentity: "idle",
  setUserIdentity: (receivedUserIdentity: UserIdentity) =>
    set({
      isAuthenticated: true,
      userIdentity: receivedUserIdentity,
    }),
}));
