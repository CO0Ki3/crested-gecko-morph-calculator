import { Box, Container, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import CalcButton from '../components/Button';
import DropdownList from '../components/dropdownList';
import { injectNoneGenes, sortGenes } from '../utils/test';

export default function Main() {
  const [maleGenes, setMaleGenes] = useState<string[]>([]);
  const [femaleGenes, setFemaleGenes] = useState<string[]>([]);

  useEffect(() => {
    console.log(sortGenes(maleGenes));
  }, [maleGenes]);

  useEffect(() => {
    console.log(femaleGenes);
  }, [femaleGenes]);

  useEffect(() => {
    console.log(injectNoneGenes(maleGenes, femaleGenes));
  }, [maleGenes, femaleGenes]);

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
        <CalcButton />
      </Box>
    </Container>
  );
}
