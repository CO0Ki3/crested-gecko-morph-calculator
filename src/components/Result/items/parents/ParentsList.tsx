import { Box } from '@mantine/core';
import useGenesStore from '../../../../store/store';
import ParentItem from './ParentItem';

function ParentsList() {
  const { maleGene, femaleGene } = useGenesStore();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <ParentItem genes={maleGene} />
      <ParentItem genes={femaleGene} />
    </Box>
  );
}

export default ParentsList;
