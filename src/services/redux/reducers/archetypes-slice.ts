import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '@Data/services';
import { fetchArchetypes } from '@Services/archetypes';

export const getArchetypes = createAsyncThunk(
  'get_archetypes',
  async (payload: any, { rejectWithValue }) => {
    try {
      const url = `${API_URL}/archetypes/${payload?.params || ''}`;
      const response = await fetchArchetypes(url);

      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const Archetype = createSlice({
  name: 'archetype_slice',
  initialState: {
    fetchArchStatus: 'idle',
    pagination: {},
    archetypes: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getArchetypes.pending, (state, action) => {
        state.fetchArchStatus = 'pending';
      })
      .addCase(getArchetypes.fulfilled, (state, action: any) => {
        state.fetchArchStatus = 'succeed';
        state.pagination = action.payload?.pagination;
        state.archetypes = action.payload?.data;
      })
      .addCase(getArchetypes.rejected, (state, action) => {
        state.fetchArchStatus = 'failed';
      });
  },
});

export const getFetchStatus = (state) => state.archetype_store?.fetchArchStatus;

export const getArchetypeState = (state) => state.archetype_store?.archetypes;
