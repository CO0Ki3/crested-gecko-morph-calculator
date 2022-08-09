import { MultiSelect, SelectItem } from '@mantine/core';
import { useEffect, useState } from 'react';

const RECESSIVE_MORPH_LIST = [
  { value: 'axanthic', label: '아잔틱', group: '열성 모프' },
  { value: 'pattern_less', label: '패턴리스', group: '열성 모프' },
  { value: 'phantom', label: '팬텀', group: '열성 모프' },
  { value: 'super_stripe', label: '슈퍼 스트라이프', group: '열성 모프' },
  { value: 'blue_eyes', label: '블루 아이', group: '열성 모프' },
];

const HETERO_RECESSIVE_MORPH_LIST = [
  { value: 'het_axanthic', label: '헷 아잔틱', group: '열성(헷) 모프' },
  { value: 'het_pattern_less', label: '헷 패턴리스', group: '열성(헷) 모프' },
  { value: 'het_phantom', label: '헷 팬텀', group: '열성(헷) 모프' },
  {
    value: 'het_super_stripe',
    label: '헷 슈퍼 스트라이프',
    group: '열성(헷) 모프',
  },
  { value: 'het_blue_eyes', label: '헷 블루 아이', group: '열성(헷) 모프' },
];

const INCOMPLETE_DOMINANT_MORPH_LIST = [
  { value: 'lilly_white', label: '릴리 화이트', group: '공우성 모프' },
  { value: 'cappuccino', label: '카푸치노', group: '공우성 모프' },
  { value: 'soft_scale', label: '소프트 스케일', group: '공우성 모프' },
  { value: 'tangerline', label: '탠저린', group: '공우성 모프' },
  { value: 'sable', label: '세이블', group: '공우성 모프' },
];

const SUPER_INCOMPLETE_DOMINANT_MORPH_LIST = [
  {
    value: 'super_lilly_white',
    label: '슈퍼 릴리 화이트',
    group: '공우성(슈퍼폼) 모프',
  },
  {
    value: 'super_cappuccino',
    label: '슈퍼 카푸치노',
    group: '공우성(슈퍼폼) 모프',
  },
  {
    value: 'super_soft_scale',
    label: '슈퍼 소프트 스케일',
    group: '공우성(슈퍼폼) 모프',
  },
  {
    value: 'super_tangerline',
    label: '슈퍼 탠저린',
    group: '공우성(슈퍼폼) 모프',
  },
  { value: 'super_sable', label: '슈퍼 세이블', group: '공우성(슈퍼폼) 모프' },
];

function DropdownList({ title }: { title: string }) {
  const morphList = [
    ...RECESSIVE_MORPH_LIST,
    ...HETERO_RECESSIVE_MORPH_LIST,
    ...INCOMPLETE_DOMINANT_MORPH_LIST,
    ...SUPER_INCOMPLETE_DOMINANT_MORPH_LIST,
  ];

  const [selectedMorph, setSelectedMorph] = useState<string[]>([]);

  const filteredData = (value: string, selected: boolean, item: SelectItem) => {
    return (
      !selected &&
      !selectedMorph.some((value) =>
        item.value.includes(value.includes('_') ? value.split('_')[1] : value),
      ) &&
      item.label!.includes(value)
    );
  };

  return (
    <MultiSelect
      label={title}
      data={morphList}
      searchable
      nothingFound='No options'
      clearable
      onChange={(value) => setSelectedMorph(value)}
      filter={(value, selected, item) => filteredData(value, selected, item)}
    />
  );
}

export default DropdownList;
