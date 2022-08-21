import { Button } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { inheritance } from '../../utils/inheritance';

function CalcButton({
  wholeMaleGenes,
  wholeFemaleGenes,
  setResult,
}: {
  wholeMaleGenes: string[];
  wholeFemaleGenes: string[];
  setResult: Dispatch<
    SetStateAction<
      | string[]
      | {
          gene: string;
          value: number;
        }[]
    >
  >;
}) {
  return (
    <Button
      radius='md'
      sx={{ width: '100%' }}
      onClick={() => setResult(inheritance(wholeMaleGenes, wholeFemaleGenes))}
    >
      계산하기
    </Button>
  );
}

export default CalcButton;
