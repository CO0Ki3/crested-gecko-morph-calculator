import { Text } from '@mantine/core';

function ChildrenItem({
  result,
}: {
  result: {
    gene: string[];
    value: string;
  }[];
}) {
  return result.length === 0 ? (
    <Text sx={{ padding: '30px 0' }}>노말 100%</Text>
  ) : (
    <>
      {result.map((value, i) => (
        <Text
          sx={i === 0 ? { padding: '30px 0' } : { paddingBottom: '30px' }}
          key={`${value.value}-${i + 1}`}
        >
          {value.gene.length === 0
            ? '노말 '
            : value.gene.map((gene) => `${gene} `)}
          {value.value}
        </Text>
      ))}
    </>
  );
}

export default ChildrenItem;
