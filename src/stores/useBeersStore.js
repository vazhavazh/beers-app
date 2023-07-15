import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { getBeers } from '../api/beers';

const useBeersStore = create(
  persist(
    devtools(set => ({
      data: [],
      isLoading: false,
      error: null,
      getBeers: async (page) => {
        try {
          set({ isLoading: true });
          const response = await getBeers(page);
          set({ isLoading: false, data: response.data });
        } catch (err) {
          set({ error: err.message, isLoading: false });
        }
      },
    })),
    {
      name: 'beers',
    }
  )
);

export default useBeersStore;
