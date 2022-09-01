import create from 'zustand';
import { koreanSortFilter, valueToLabel } from '../utils/inheritance';

const useGenesStore = create<{
  maleGene: string[];
  femaleGene: string[];
  setMaleGene: (arg0: string[]) => void;
  setFemaleGene: (arg0: string[]) => void;
}>((set) => ({
  maleGene: [],
  femaleGene: [],
  setMaleGene: (value) =>
    set((state) => ({
      ...state,
      maleGene: koreanSortFilter(valueToLabel(value)),
    })),
  setFemaleGene: (value) =>
    set((state) => ({
      ...state,
      femaleGene: koreanSortFilter(valueToLabel(value)),
    })),
}));

export default useGenesStore;
