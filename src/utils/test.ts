import { TMorphList } from './inheritance';

export function sortGenes(genes: TMorphList) {
  if (genes.length === 0) {
    return genes;
  }
  return genes.sort((prev, cur) => {
    const [upperPrev, upperCur] = [prev.toUpperCase(), cur.toUpperCase()];
    if (upperPrev > upperCur) return 1;
    if (upperPrev < upperCur) return -1;
    return 0;
  });
}

export function injectNoneGenes(
  maleGenes: TMorphList,
  femaleGenes: TMorphList,
) {
  const upperMaleGenes = maleGenes.map((value) => value.toUpperCase());
  const upperFemaleGenes = femaleGenes.map((value) => value.toUpperCase());
  const noneMaleGenes = femaleGenes
    .filter((value) => !upperMaleGenes.includes(value.toUpperCase()))
    .map((value) => {
      return value[0].toUpperCase() < 'F'
        ? value.toUpperCase()
        : value.toLowerCase();
    });
  const noneFemaleGenes = maleGenes
    .filter((value) => !upperFemaleGenes.includes(value.toUpperCase()))
    .map((value) => {
      return value[0].toUpperCase() < 'F'
        ? value.toUpperCase()
        : value.toLowerCase();
    });

  return {
    noneMaleGenes,
    noneFemaleGenes,
  };
}
