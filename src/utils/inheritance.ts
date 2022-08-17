const morphToDihybrid = {
  axanthic: 'aa',
  pattern_less: 'bb',
  phantom: 'cc',
  super_stripe: 'dd',
  blue_eyes: 'ee',
  het_axanthic: 'Aa',
  het_pattern_less: 'Bb',
  het_phantom: 'Cc',
  het_super_stripe: 'Dd',
  het_blue_eyes: 'Ee',
  lilly_white: 'Ff',
  cappuccino: 'Gg',
  soft_scale: 'Hh',
  sable: 'Ii',
  super_lilly_white: 'FF',
  super_cappuccino: 'GG',
  super_soft_scale: 'HH',
  super_sable: 'II',
};

type TDihybrid = keyof typeof morphToDihybrid;
type TMorphList = string[] | never[];

function filterBlankMorph({
  pairedMaleGene,
  pairedFemaleGene,
}: {
  pairedMaleGene: TMorphList;
  pairedFemaleGene: TMorphList;
}) {
  const upperMaleGenes = pairedMaleGene.map((maleValue) =>
    maleValue.toUpperCase(),
  );
  const upperFemaleGenes = pairedFemaleGene.map((femaleValue) =>
    femaleValue.toUpperCase(),
  );
  const wholeGenesSet = new Set([...upperMaleGenes, ...upperFemaleGenes]);
  const filteredMaleGenes = Array.from(wholeGenesSet).filter((wholevalue) =>
    upperMaleGenes.includes(wholevalue),
  );
  const filteredFemaleGenes = Array.from(wholeGenesSet).filter((wholevalue) =>
    upperFemaleGenes.includes(wholevalue),
  );
  const normalizationNoneMaleGenes = filteredFemaleGenes.map((value) => {
    return value[0].toUpperCase() < 'F'
      ? value.toUpperCase()
      : value.toLowerCase();
  });
  const normalizationNonefemaleGenes = filteredMaleGenes.map((value) => {
    return value[0].toUpperCase() < 'F'
      ? value.toUpperCase()
      : value.toLowerCase();
  });

  return {
    normalizationNoneMaleGenes,
    normalizationNonefemaleGenes,
  };
}

function inputNoneGenes(
  maleGenes: TMorphList,
  femaleGenes: TMorphList,
  normalizationNoneMaleGenes: TMorphList,
  normalizationNonefemaleGenes: TMorphList,
) {
  const filteredExistMaleGenes = normalizationNoneMaleGenes.filter(
    (existMaleGenes) =>
      maleGenes
        .map((value) => value.toUpperCase())
        .includes(existMaleGenes.toUpperCase()),
  );

  const filteredExistFemaleGenes = normalizationNonefemaleGenes.filter(
    (existFemaleGenes) =>
      femaleGenes
        .map((value) => value.toUpperCase())
        .includes(existFemaleGenes.toUpperCase()),
  );
  console.log(filteredExistMaleGenes);
  console.log(filteredExistFemaleGenes);
  const wholeMaleGenes = [...maleGenes, ...filteredExistMaleGenes]
    .sort()
    .sort((prev, cur) => {
      const [upperPrev, upperCur] = [prev.toUpperCase(), cur.toUpperCase()];
      if (upperPrev > upperCur) return 1;
      if (upperPrev < upperCur) return -1;
      return 0;
    });

  const wholeFemaleGenes = [...femaleGenes, ...filteredExistFemaleGenes]
    .sort()
    .sort((prev, cur) => {
      const [upperPrev, upperCur] = [prev.toUpperCase(), cur.toUpperCase()];
      if (upperPrev > upperCur) return 1;
      if (upperPrev < upperCur) return -1;
      return 0;
    });

  return {
    wholeMaleGenes,
    wholeFemaleGenes,
  };
}

export function changeDihybrid(maleGenes: TMorphList, femaleGenes: TMorphList) {
  let pairedMaleGene: TMorphList = [];
  let pairedFemaleGene: TMorphList = [];

  if (maleGenes.length !== 0) {
    pairedMaleGene = [
      ...maleGenes.map((value) => morphToDihybrid[value as TDihybrid]),
    ];
  }

  if (femaleGenes.length !== 0) {
    pairedFemaleGene = [
      ...femaleGenes.map((value) => morphToDihybrid[value as TDihybrid]),
    ];
  }

  const { normalizationNoneMaleGenes, normalizationNonefemaleGenes } =
    filterBlankMorph({ pairedMaleGene, pairedFemaleGene });

  const wholeGenes = inputNoneGenes(
    pairedMaleGene,
    pairedFemaleGene,
    normalizationNoneMaleGenes,
    normalizationNonefemaleGenes,
  );

  return wholeGenes;
}
