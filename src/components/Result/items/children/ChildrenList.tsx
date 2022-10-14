import { Button } from '@mantine/core';
import { useState } from 'react';
import useGenesStore from '../../../../store/store';
import ChildrenItem from './ChildrenItem';

function ChildrenList() {
  const { result } = useGenesStore();
  const [isViewMore, setIsViewMore] = useState(false);

  return (
    <>
      <Button
        variant='outline'
        onClick={() => setIsViewMore((prev) => !prev)}
        sx={{
          width: '100%',
          marginTop: '30px',
          marginBottom: `${isViewMore ? 0 : '30px'}`,
        }}
      >
        더보기
      </Button>
      {typeof result === 'undefined'
        ? null
        : isViewMore && (
            <ChildrenItem result={result} isViewMore={isViewMore} />
          )}
    </>
  );
}

export default ChildrenList;
