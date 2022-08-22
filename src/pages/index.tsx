import { Box, Container, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import CalcButton from '../components/Button';
import DropdownList from '../components/dropdownList';
import { injectNoneGenes } from '../utils/inheritance';

export default function Main() {
  const [maleGenes, setMaleGenes] = useState<string[]>([]);
  const [femaleGenes, setFemaleGenes] = useState<string[]>([]);
  const [wholeMaleGenes, setWholeMaleGenes] = useState<string[]>([]);
  const [wholeFemaleGenes, setWholeFemaleGenes] = useState<string[]>([]);
  const [result, setResult] = useState<
    | string[]
    | {
        gene: string;
        value: number;
      }[]
  >([]);

  // useEffect(() => {
  //   setDifferenceGenes(injectNoneGenes(maleGenes, femaleGenes));
  // }, [maleGenes, femaleGenes]);

  useEffect(() => {
    setWholeMaleGenes(
      [
        ...maleGenes,
        ...injectNoneGenes(maleGenes, femaleGenes).noneMaleGenes,
      ].sort((prev, cur) => {
        const [upperPrev, upperCur] = [prev.toUpperCase(), cur.toUpperCase()];
        if (upperPrev > upperCur) return 1;
        if (upperPrev < upperCur) return -1;
        return 0;
      }),
    );
    setWholeFemaleGenes(
      [
        ...femaleGenes,
        ...injectNoneGenes(maleGenes, femaleGenes).noneFemaleGenes,
      ].sort((prev, cur) => {
        const [upperPrev, upperCur] = [prev.toUpperCase(), cur.toUpperCase()];
        if (upperPrev > upperCur) return 1;
        if (upperPrev < upperCur) return -1;
        return 0;
      }),
    );
  }, [maleGenes, femaleGenes]);

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <Container
      sx={{
        width: '65%',
        boxShadow: '0 0 2px 1px rgb(0 0 0 / 10%)',
        padding: '30px',
        borderRadius: '8px',
      }}
    >
      <Group position='apart' grow sx={{ marginBottom: '20px' }}>
        <Box sx={{ width: '100%' }}>
          <DropdownList title='수컷' setGenes={setMaleGenes} />
        </Box>
        <Box sx={{ width: '100%' }}>
          <DropdownList title='암컷' setGenes={setFemaleGenes} />
        </Box>
      </Group>
      <Box sx={{ width: '100%' }}>
        <CalcButton
          wholeMaleGenes={wholeMaleGenes}
          wholeFemaleGenes={wholeFemaleGenes}
          setResult={setResult}
        />
      </Box>
    </Container>
  );
}
