import { Button } from '@mantine/core';
import { inheritance } from '../../utils/inheritance';

function CalcButton({
  wholeMaleGenes,
  wholeFemaleGenes,
  onClick,
  setResult,
}: {
  wholeMaleGenes: string[];
  wholeFemaleGenes: string[];
  onClick: () => void;
  setResult: (
    arg0: {
      gene: string[];
      value: string;
    }[],
  ) => void;
}) {
  return (
    <Button
      radius='md'
      sx={{ width: '100%' }}
      onClick={() => {
        setResult(inheritance(wholeMaleGenes, wholeFemaleGenes) ?? []);
        onClick();
      }}
    >
      계산하기
    </Button>
  );
}

export default CalcButton;
