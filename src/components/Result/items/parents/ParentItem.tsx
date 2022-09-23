import { Badge, Box } from '@mantine/core';

function ParentItem({ genes }: { genes: string[] }) {
  return (
    <Box
      sx={{
        width: '48%',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        padding: '15px 15px 0 15px',
        marginTop: '20px',
      }}
    >
      <Box sx={{ height: '300px', width: '100%', backgroundColor: 'azure' }}>
        여긴 부모 사진
      </Box>
      <Badge
        variant='gradient'
        gradient={{ from: 'teal', to: 'blue', deg: 60 }}
        sx={{ marginTop: '10px', marginBottom: '5px', wordBreak: 'keep-all' }}
        size='lg'
      >
        {genes.length === 0 ? '노말' : genes.map((value) => `${value} `)}
      </Badge>
    </Box>
  );
}

export default ParentItem;
