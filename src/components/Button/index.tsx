import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <Button
      radius='md'
      sx={{ width: '100%' }}
      onClick={() => {
        setResult(inheritance(wholeMaleGenes, wholeFemaleGenes) ?? []);
        onClick();
      }}
    >
      {t('calculating')}
    </Button>
  );
}

export default CalcButton;
