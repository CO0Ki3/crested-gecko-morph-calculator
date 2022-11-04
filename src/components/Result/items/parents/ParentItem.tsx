import { Badge, Card, Box, MantineGradient, Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import Normal from '../../../../static/노말.jpg';
import flags from './flags';

const BADGE_BACKGROUND_COLORS: { [key: string]: MantineGradient } = {
  '아잔틱': {
    from: '#4B3B33',
    to: '#B9A290',
    deg: 60,
  },
  '패턴리스': {
    from: '#D7D2DC',
    to: '#F8E0C4',
    deg: 60,
  },
  '팬텀': {
    from: '#C1AFAB',
    to: '#51362E',
    deg: 60,
  },
  '슈퍼 스트라이프': {
    from: '#1B1B23',
    to: '#F0DCC5',
    deg: 60,
  },
  '블루 아이': {
    from: 'blue',
    to: '#A77C2D',
    deg: 60,
  },
  '헷 아잔틱': {
    from: '#4B3B33',
    to: '#B9A290',
    deg: 60,
  },
  '헷 패턴리스': {
    from: '#D7D2DC',
    to: '#F8E0C4',
    deg: 60,
  },
  '햇 팬텀': {
    from: '#C1AFAB',
    to: '#51362E',
    deg: 60,
  },
  '햇 블루 아이': {
    from: 'blue',
    to: '#A77C2D',
    deg: 60,
  },
  '헷 슈퍼 스트라이프': {
    from: '#1B1B23',
    to: '#F0DCC5',
    deg: 60,
  },
  '릴리 화이트': {
    from: '#D0CFD0',
    to: '#DED8BA',
    deg: 60,
  },
  '카푸치노': {
    from: '#563D36',
    to: '#FEBE75',
    deg: 60,
  },
  '소프트 스케일': {
    from: '#474642',
    to: '#B9A798',
    deg: 60,
  },
  '세이블': {
    from: '#150F17',
    to: '#EEF7EE',
    deg: 60,
  },
  '슈퍼 릴리 화이트': {
    from: '#C19897',
    to: '#C7AD96',
    deg: 60,
  },
  '슈퍼 카푸치노': {
    from: '#302A2A',
    to: '#443B38',
    deg: 60,
  },
  '슈퍼 소프트 스케일': {
    from: '#474642',
    to: '#B9A798',
    deg: 60,
  },
  '슈퍼 세이블': {
    from: '#1C171A',
    to: '#CACFD7',
    deg: 60,
  },
  '노말': {
    from: 'teal',
    to: 'blue',
    deg: 60,
  },
};

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
