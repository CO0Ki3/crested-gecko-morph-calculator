import { Box, Container, Group } from '@mantine/core';
import CalcButton from '../components/Button';
import DropdownList from '../components/dropdownList';

function Main() {
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
          <DropdownList title='수컷' />
        </Box>
        <Box sx={{ width: '100%' }}>
          <DropdownList title='암컷' />
        </Box>
      </Group>
      <Box sx={{ width: '100%' }}>
        <CalcButton />
      </Box>
    </Container>
  );
}

export default Main;
