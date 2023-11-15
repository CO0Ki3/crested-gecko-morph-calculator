import { Badge, Card, Box, Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import Normal from '../../../../static/노말.jpg';
import flags from './flags';
import { BADGE_BACKGROUND_COLORS } from '../../../../utils/badgeBackgroundColors';

function ParentItem({ genes }: { genes: string[] }) {
  const [imageName, setImageName] = useState<string>('');
  useEffect(() => {
    if (genes.length === 0) return;
    setImageName(
      genes
        .filter((gene) => !gene.includes('헷'))
        .sort()
        .join('')
        .split(' ')
        .join(''),
    );
  }, [genes]);
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
        >
          <Box sx={{ width: '100%', maxHeight: '300px' }}>
            <Image
              src={genes.length === 0 ? Normal : flags[imageName]}
              sx={{ width: '101%' }}
            />
          </Box>
        </Box>
      </Card.Section>
      {genes.length === 0 ? (
        <Badge
          variant='gradient'
          gradient={BADGE_BACKGROUND_COLORS['노말']}
          sx={{
            marginTop: '10px',
            marginBottom: '-10px',
            marginRight: '5px',
          }}
          size='lg'
          key='노말'
        >
          노말
        </Badge>
      ) : (
        genes.map((value) => (
          <Badge
            variant='gradient'
            gradient={BADGE_BACKGROUND_COLORS[value]}
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
        ))
      )}
    </Card>
  );
}

export default ParentItem;
