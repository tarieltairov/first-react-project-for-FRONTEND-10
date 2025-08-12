import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://api.github.com/users";

// TODO: вставить токен из настроек пользователя github
const githubToken = "";

export const fetchUser = createAsyncThunk(
  "github/fetchUser",
  async (userName, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/${userName}`, {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue({
          status: res.status,
          message: errorData.message || "Ошибка при запросе",
        });
      }

      return await res.json();
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
