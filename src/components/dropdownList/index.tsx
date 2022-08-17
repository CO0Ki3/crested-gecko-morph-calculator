import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MultiSelect, SelectItem } from '@mantine/core';
import {
  RECESSIVE_MORPH_LIST,
  HETERO_RECESSIVE_MORPH_LIST,
  INCOMPLETE_DOMINANT_MORPH_LIST,
  SUPER_INCOMPLETE_DOMINANT_MORPH_LIST,
} from '../../utils/morph';

const morphList = [
  ...RECESSIVE_MORPH_LIST,
  ...HETERO_RECESSIVE_MORPH_LIST,
  ...INCOMPLETE_DOMINANT_MORPH_LIST,
  ...SUPER_INCOMPLETE_DOMINANT_MORPH_LIST,
];

function DropdownList({
  title,
  setGenes,
}: {
  title: string;
  setGenes: Dispatch<SetStateAction<string[]>>;
}) {
  const [selectedMorph, setSelectedMorph] = useState<string[]>([]);

  const filteredData = (value: string, selected: boolean, item: SelectItem) =>
    !selected &&
    !selectedMorph.some(
      (morphName) => item.value.toUpperCase() === morphName.toUpperCase(),
    ) &&
    typeof item.label === 'string' &&
    item.label.includes(value);

  useEffect(() => {
    setGenes(selectedMorph);
    console.log(selectedMorph);
  }, [selectedMorph, setGenes]);

  return (
    <MultiSelect
      label={title}
      data={morphList}
      searchable
      nothingFound='No options'
      clearable
      onChange={(value) => setSelectedMorph(value)}
      filter={filteredData}
    />
  );
}

export default DropdownList;
