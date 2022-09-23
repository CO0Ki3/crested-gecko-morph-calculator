import { Box, Container, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import CalcButton from '../components/Button';
import DropdownList from '../components/dropdownList';
import Result from '../components/Result';
import useGenesStore from '../store/store';
import { injectNoneGenes } from '../utils/inheritance';

export default function Main() {
  const [maleGenes, setMaleGenes] = useState<string[]>([]);
  const [femaleGenes, setFemaleGenes] = useState<string[]>([]);
  const [wholeMaleGenes, setWholeMaleGenes] = useState<string[]>([]);
  const [wholeFemaleGenes, setWholeFemaleGenes] = useState<string[]>([]);

  const { result, setMaleGene, setFemaleGene, setResult } = useGenesStore();

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

  return (
    <Container
      sx={{
        width: '68%',
        boxShadow: '0 0 2px 1px rgb(0 0 0 / 10%)',
        padding: result ? '30px 30px 0 30px' : '30px',
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
          onClick={() => {
            setMaleGene(maleGenes);
            setFemaleGene(femaleGenes);
          }}
          setResult={setResult}
        />
      </Box>
      <Result />
    </Container>
  );
}
