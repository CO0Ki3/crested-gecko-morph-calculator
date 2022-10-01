import { Badge, Card, Box } from '@mantine/core';

function ParentItem({ genes }: { genes: string[] }) {
  return (
    <Card
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
      sx={{ width: '48%', marginTop: '20px', padding: '20px 20px 0 20px' }}
    >
      <Card.Section>
        <Box
          sx={{
            height: '300px',
            width: '100%',
            backgroundColor: 'azure',
            marginBottom: '10px',
          }}
        >
          여긴 부모 사진
        </Box>
      </Card.Section>

      {genes.length === 0
        ? '노말'
        : genes.map((value) => (
            <Badge
              variant='gradient'
              gradient={{ from: 'teal', to: 'blue', deg: 60 }}
              sx={{
                marginTop: '10px',
                marginBottom: '-10px',
                marginRight: '5px',
              }}
              size='lg'
              key={`${value}`}
            >
              {value}
            </Badge>
          ))}
    </Card>
  );
}

export default ParentItem;
