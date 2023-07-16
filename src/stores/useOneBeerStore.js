import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { getOneBeer } from '../api/beers';

const useOneBeerStore = create(
  persist(
    devtools(set => ({
      data: {},
      isLoading: false,
      error: null,
      getOneBeer: async id => {
        try {
          set({ isLoading: true });
          const response = await getOneBeer(id);
          set({ isLoading: false, data: response.data[0] });
        } catch (err) {
          set({ error: err.message, isLoading: false });
        }
      },
    })),
    {
      name: 'oneBeer',
    }
  )
);

export default useOneBeerStore;
