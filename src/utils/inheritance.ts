import { LabelT, VALUE_TO_LABEL } from './morph';

export type TMorphList = string[] | never[];

export function injectNoneGenes(
  maleGenes: TMorphList,
  femaleGenes: TMorphList,
) {
  const upperMaleGenes = maleGenes.map((value) => value.toUpperCase());
  const upperFemaleGenes = femaleGenes.map((value) => value.toUpperCase());
  const noneMaleGenes = femaleGenes
    .filter((value) => !upperMaleGenes.includes(value.toUpperCase()))
    .map((value) => {
      return value[0].toUpperCase() < 'G'
        ? value.toUpperCase()
        : value.toLowerCase();
    });
  const noneFemaleGenes = maleGenes
    .filter((value) => !upperFemaleGenes.includes(value.toUpperCase()))
    .map((value) => {
      return value[0].toUpperCase() < 'G'
        ? value.toUpperCase()
        : value.toLowerCase();
    });

  return {
    noneMaleGenes,
    noneFemaleGenes,
  };
}

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
  const maleBits = geneTypeChecker(maleGene);
  const femaleBits = geneTypeChecker(femaleGene);
  const primaryType = maleGene[0];
  if ((maleBits & femaleBits) === 0b00) {
    if ((maleBits | femaleBits) === 0b00) {
      return [
        {
          gene: `${primaryType.toUpperCase()}${primaryType.toUpperCase()}`,
          value: 1,
        },
      ];
    }
    if ((maleBits | femaleBits) === 0b01) {
      return [
        {
          gene: `${primaryType.toUpperCase()}${primaryType.toUpperCase()}`,
          value: 0.5,
        },
        {
          gene: `${primaryType.toUpperCase()}${primaryType.toLowerCase()}`,
          value: 0.5,
        },
      ];
    }
    if ((maleBits | femaleBits) === 0b11) {
      return [
        {
          gene: `${primaryType.toUpperCase()}${primaryType.toLowerCase()}`,
          value: 1,
        },
      ];
    }
  }
  if ((maleBits & femaleBits) === 0b01) {
    if ((maleBits | femaleBits) === 0b01) {
      return [
        {
          gene: `${primaryType.toUpperCase()}${primaryType.toUpperCase()}`,
          value: 0.25,
        },
        {
          gene: `${primaryType.toUpperCase()}${primaryType.toLowerCase()}`,
          value: 0.5,
        },
        {
          gene: `${primaryType.toLowerCase()}${primaryType.toLowerCase()}`,
          value: 0.25,
        },
      ];
    }
    return [
      {
        gene: `${primaryType.toUpperCase()}${primaryType.toLowerCase()}`,
        value: 0.5,
      },
      {
        gene: `${primaryType.toLowerCase()}${primaryType.toLowerCase()}`,
        value: 0.5,
      },
    ];
  }
  return [
    {
      gene: `${primaryType.toLowerCase()}${primaryType.toLowerCase()}`,
      value: 1,
    },
  ];
}

export function wholeProbabilityFilter(
  maleGenes: TMorphList,
  femaleGenes: TMorphList,
) {
  const wholeProbability = maleGenes.map((value, i) =>
    probabilityMaper(value, femaleGenes[i]),
  );

  return wholeProbability;
}

export function koreanSortFilter(genes: string[]) {
  return genes
    .filter((dominants) => dominants.includes('슈퍼'))
    .concat(genes.filter((otherItem) => !otherItem.includes('슈퍼')))
    .filter((hetero) => !hetero.includes('헷'))
    .concat(genes.filter((x) => x.includes('헷')))
    .filter((wholeGene) => wholeGene !== '');
}

export function valueToLabel(rawGenes: string[]) {
  return rawGenes.map((raw) => VALUE_TO_LABEL[raw as LabelT]);
}

export function inheritance(maleGenes: TMorphList, femaleGenes: TMorphList) {
  if (maleGenes.length === 0 && femaleGenes.length === 0) {
    return [];
  }

  const p = wholeProbabilityFilter(maleGenes, femaleGenes);

  const merge = (
    a: { gene: string[]; value: number }[],
    b: { gene: string; value: number }[],
  ) => {
    if (a.length === 0) {
      return b.map((value) => ({
        gene: [VALUE_TO_LABEL[value.gene as LabelT] ?? ''],
        value: value.value,
      }));
    }
    return a.reduce(
      (
        acc: { gene: string[]; value: number }[],
        aItem: { gene: string[]; value: number },
      ) => {
        b.forEach((bItem) =>
          acc.push({
            gene: [...aItem.gene, VALUE_TO_LABEL[bItem.gene as LabelT] ?? ''],
            value: aItem.value * bItem.value,
          }),
        );
        return acc;
      },
      [],
    );
  };

  const totalMerge = () => {
    let result: { gene: string[]; value: number }[] | never[] = [];
    p.forEach((group) => {
      result = merge(result, group);
    });
    return result;
  };

  const sortedTotalMerge = totalMerge().map((genes) => ({
    gene: koreanSortFilter(genes.gene),
    value: `${genes.value * 100}%`,
  }));

  return sortedTotalMerge;
}
