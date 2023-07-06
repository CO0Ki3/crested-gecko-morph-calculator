export const RECESSIVE_MORPH_LIST = [
  { value: 'aa', label: '아잔틱', group: '열성 모프' },
  { value: 'bb', label: '패턴리스', group: '열성 모프' },
  { value: 'cc', label: '팬텀', group: '열성 모프' },
  { value: 'dd', label: '슈퍼 스트라이프', group: '열성 모프' },
  { value: 'ee', label: '블루 아이', group: '열성 모프' },
  { value: 'jj', label: '초초', group: '열성 모프' },
];

export const HETERO_RECESSIVE_MORPH_LIST = [
  { value: 'Aa', label: '헷 아잔틱', group: '열성(헷) 모프' },
  { value: 'Bb', label: '헷 패턴리스', group: '열성(헷) 모프' },
  { value: 'Cc', label: '헷 팬텀', group: '열성(헷) 모프' },
  {
    value: 'Dd',
    label: '헷 슈퍼 스트라이프',
    group: '열성(헷) 모프',
  },
  { value: 'Ee', label: '헷 블루 아이', group: '열성(헷) 모프' },
  { value: 'Jj', label: '헷 초초', group: '열성(헷) 모프' },
];

export const INCOMPLETE_DOMINANT_MORPH_LIST = [
  { value: 'Ff', label: '릴리 화이트', group: '공우성 모프' },
  { value: 'Gg', label: '카푸치노', group: '공우성 모프' },
  { value: 'Hh', label: '소프트 스케일', group: '공우성 모프' },
  { value: 'Ii', label: '세이블', group: '공우성 모프' },
];

export const SUPER_INCOMPLETE_DOMINANT_MORPH_LIST = [
  {
    value: 'FF',
    label: '슈퍼 릴리 화이트',
    group: '공우성(슈퍼폼) 모프',
  },
  {
    value: 'GG',
    label: '슈퍼 카푸치노',
    group: '공우성(슈퍼폼) 모프',
  },
  {
    value: 'HH',
    label: '슈퍼 소프트 스케일',
    group: '공우성(슈퍼폼) 모프',
  },
  { value: 'II', label: '슈퍼 세이블', group: '공우성(슈퍼폼) 모프' },
];

export const VALUE_TO_LABEL = {
  aa: '아잔틱',
  bb: '패턴리스',
  cc: '팬텀',
  dd: '슈퍼 스트라이프',
  ee: '블루 아이',
  jj: '초초',
  Aa: '헷 아잔틱',
  Bb: '헷 패턴리스',
  Cc: '헷 팬텀',
  Dd: '헷 슈퍼 스트라이프',
  Ee: '헷 블루 아이',
  Jj: '헷 초초',
  Ff: '릴리 화이트',
  Gg: '카푸치노',
  Hh: '소프트 스케일',
  Ii: '세이블',
  FF: '슈퍼 릴리 화이트',
  GG: '슈퍼 카푸치노',
  HH: '슈퍼 소프트 스케일',
  II: '슈퍼 세이블',
};

export type LabelT = keyof typeof VALUE_TO_LABEL;
