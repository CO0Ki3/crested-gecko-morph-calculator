import create from 'zustand';
import { koreanSortFilter, valueToLabel } from '../utils/inheritance';

const useGenesStore = create<{
  maleGene: string[];
  femaleGene: string[];
  result:
    | {
        gene: string[];
        value: string;
      }[]
    | undefined;
  setMaleGene: (arg0: string[]) => void;
  setFemaleGene: (arg0: string[]) => void;
  setResult: (
    arg0:
      | {
          gene: string[];
          value: string;
        }[]
      | undefined,
  ) => void;
}>((set) => ({
  maleGene: [],
  femaleGene: [],
  result: undefined,
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
  setResult: (result) =>
    set((state) => ({
      ...state,
      result,
    })),
}));

export default useGenesStore;
