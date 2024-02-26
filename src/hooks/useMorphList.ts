import { useTranslation } from 'react-i18next';
import {
  HETERO_RECESSIVE_MORPH_LIST,
  INCOMPLETE_DOMINANT_MORPH_LIST,
  RECESSIVE_MORPH_LIST,
  SUPER_INCOMPLETE_DOMINANT_MORPH_LIST,
} from '../utils/morph';

const morphList = [
  ...RECESSIVE_MORPH_LIST,
  ...HETERO_RECESSIVE_MORPH_LIST,
  ...INCOMPLETE_DOMINANT_MORPH_LIST,
  ...SUPER_INCOMPLETE_DOMINANT_MORPH_LIST,
];

function useMorphList() {
  const { t } = useTranslation();
  return morphList.map((dataGroup) => {
    return {
      ...dataGroup,
      label: t(dataGroup.value),
      group: t(dataGroup.group),
    };
  });
}

export default useMorphList;
