import { Box, Container } from '@mantine/core';
import DropdownList from '../components/dropdownList';

function Main() {
  return (
    <Container sx={{ width: '50%' }}>
      <Box sx={{ width: '100%' }}>
        <DropdownList title='수컷' />
        <DropdownList title='암컷' />
      </Box>
    </Container>
  );
}

export default Main;
