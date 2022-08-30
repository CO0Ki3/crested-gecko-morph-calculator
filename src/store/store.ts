import create from 'zustand';

const useGenesStore = create((set) => ({
  maleGene: [],
  femaleGene: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useGenesStore;
