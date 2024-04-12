import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const exampleDemoThunk = createAsyncThunk(
  'demo_async_thunk',
  async (payload, { rejectWithValue }) => {
    try {
      // Example: const { data } = await APICall(payload);
      return {};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const Demo = createSlice({
  name: 'demo_mock_reducer',
  initialState: {
    //assign initial state here
    demoMockData: {},
    demo_async_thunk_status: 'idle',
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(exampleDemoThunk.pending, (state, action) => {
        state.demo_async_thunk_status = 'pending';
      })
      .addCase(exampleDemoThunk.fulfilled, (state: any, { payload }) => {
        state.demo_async_thunk_status = 'succeed';
        state.demoMockData = payload;
      })
      .addCase(exampleDemoThunk.rejected, (state, action) => {
        state.demo_async_thunk_status = 'failed';
      });
  },
});

export default Demo;
