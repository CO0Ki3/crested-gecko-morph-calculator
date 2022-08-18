function dihybridCrossing(maleGenes: string[], femaleGenes: string[]) {
  const maleString = maleGenes.join('');
  const femaleString = femaleGenes.join('');

  const allelePair1 = maleString.charAt(0) + maleString.charAt(1);
  const allelePair2 = maleString.charAt(2) + maleString.charAt(3);
  const allelePair3 = femaleString.charAt(0) + femaleString.charAt(1);
  const allelePair4 = femaleString.charAt(2) + femaleString.charAt(3);

  
}
