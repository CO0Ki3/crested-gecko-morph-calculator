import { TMorphList } from './test';

function geneTypeChecker(gene: string) {
  if (gene === gene.toUpperCase()) {
    return 0b00;
  }
  if (gene === gene.toLowerCase()) {
    return 0b11;
  }
  return 0b01;
}

function probabilityMaper(maleGene: string, femaleGene: string) {
  const maleBits = geneTypeChecker(maleGene); // 1
  const femaleBits = geneTypeChecker(femaleGene); // 1
  const primaryType = maleGene[0];
  if ((maleBits & femaleBits) === 0b00) {
    if ((maleBits | femaleBits) === 0b00) {
      return [
        { [`${primaryType.toUpperCase()}${primaryType.toUpperCase()}`]: 1 },
      ];
    }
    if ((maleBits | femaleBits) === 0b01) {
      return [
        { [`${primaryType.toUpperCase()}${primaryType.toUpperCase()}`]: 0.5 },
        { [`${primaryType.toUpperCase()}${primaryType.toLowerCase()}`]: 0.5 },
      ];
    }
  }
  if ((maleBits & femaleBits) === 0b01) {
    if ((maleBits | femaleBits) === 0b01) {
      return [
        { [`${primaryType.toUpperCase()}${primaryType.toUpperCase()}`]: 0.25 },
        { [`${primaryType.toUpperCase()}${primaryType.toLowerCase()}`]: 0.5 },
        { [`${primaryType.toLowerCase()}${primaryType.toLowerCase()}`]: 0.25 },
      ];
    }
    return [
      { [`${primaryType.toUpperCase()}${primaryType.toLowerCase()}`]: 0.5 },
      { [`${primaryType.toLowerCase()}${primaryType.toLowerCase()}`]: 0.5 },
    ];
  }
  return [{ [`${primaryType.toLowerCase()}${primaryType.toLowerCase()}`]: 1 }];
}

function inheritance(maleGenes: TMorphList, femaleGenes: TMorphList) {
  if (maleGenes.length === 0 && femaleGenes.length === 0) {
    return ['wow'];
  }
  const wholeProbability = maleGenes.map((value, i) =>
    probabilityMaper(value, femaleGenes[i]),
  );
 for (let i)
}
