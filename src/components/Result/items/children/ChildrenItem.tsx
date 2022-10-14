import { Text, Transition } from '@mantine/core';
import { useLayoutEffect, useState } from 'react';

function ChildrenItem({
  result,
  isViewMore,
}: {
  result: {
    gene: string[];
    value: string;
  }[];
  isViewMore: boolean;
}) {
  const [isMount, setIsMount] = useState(false);

  useLayoutEffect(() => {
    setIsMount(true);
  }, [isViewMore]);

  return result.length === 0 ? (
    <Text sx={{ padding: '30px 0' }}>노말 100%</Text>
  ) : (
    <>
      {result.map((value, i) => (
        <Transition
          key={value.gene.join('')}
          transition='fade'
          mounted={isMount}
          duration={1000}
        >
          {(style) => (
            <Text
              sx={i === 0 ? { padding: '30px 0' } : { paddingBottom: '30px' }}
              style={style}
              key={`${value.value}-${i + 1}`}
            >
              {value.gene.length === 0
                ? '노말 '
                : value.gene.map((gene) => `${gene} `)}
              {value.value}
            </Text>
          )}
        </Transition>
      ))}
    </>
  );
}

export default ChildrenItem;
