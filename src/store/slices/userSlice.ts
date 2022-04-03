import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../type";

export interface IUserInfo {
  userInfo: any;
}

const initialState: IUserInfo = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserInfo: (
      state: IUserInfo,
      action: PayloadAction<IUserInfo>
    ): IUserInfo => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
export const userInfoValue = (state: RootState): IUserInfo => state.userInfo;
