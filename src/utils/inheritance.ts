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

export function probabilityMaper(maleGene: string, femaleGene: string) {
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

export function inheritance(maleGenes: TMorphList, femaleGenes: TMorphList) {
  if (maleGenes.length === 0 && femaleGenes.length === 0) {
    return ['wow'];
  }
  const wholeProbability = maleGenes.map((value, i) =>
    probabilityMaper(value, femaleGenes[i]),
  );

  return wholeProbability;
}

export function temp() {
  const p = [
    [
      { gene: 'Ff', value: 0.5 },
      { gene: 'ff', value: 0.5 },
    ],
    [
      { gene: 'GG', value: 0.25 },
      { gene: 'Gg', value: 0.5 },
      { gene: 'gg', value: 0.25 },
    ],
  ];

  const merge = (
    a: { gene: string; value: number }[],
    b: { gene: string; value: number }[],
  ) => {
    if (a.length === 0) return b;
    return a.reduce(
      (
        acc: { gene: string; value: number }[],
        aItem: { gene: string; value: number },
      ) => {
        b.forEach((bItem) =>
          acc.push({
            gene: aItem.gene + bItem.gene,
            value: aItem.value * bItem.value,
          }),
        );
        return acc;
      },
      [],
    );
  };

  const totalMerge = () => {
    let result: { gene: string; value: number }[] | never[] = [];
    p.forEach((group) => {
      result = merge(result, group);
    });
    return result;
  };

  console.log(totalMerge());
}
