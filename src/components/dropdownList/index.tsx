import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MultiSelect, SelectItem } from '@mantine/core';
import useMorphList from '../../hooks/useMorphList';

function DropdownList({
  title,
  setGenes,
}: {
  title: string;
  setGenes: Dispatch<SetStateAction<string[]>>;
}) {
  const [selectedMorph, setSelectedMorph] = useState<string[]>([]);
  const morphList = useMorphList();

  const filteredData = (value: string, selected: boolean, item: SelectItem) =>
    !selected &&
    !selectedMorph.some(
      (morphName) => item.value.toUpperCase() === morphName.toUpperCase(),
    ) &&
    typeof item.label === 'string' &&
    item.label.includes(value);

  useEffect(() => {
    setGenes(selectedMorph);
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
