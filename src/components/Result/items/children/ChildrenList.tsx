import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Button } from '@mantine/core';
import useGenesStore from '../../../../store/store';
import ChildrenItem from './ChildrenItem';

function ChildrenList() {
  const { result } = useGenesStore();
  const [isViewMore, setIsViewMore] = useState(false);
  Chart.register(ArcElement, Tooltip, Legend);

  const [labels, setLables] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);
  const [color, setColor] = useState<string[]>([]);
  Chart.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    setIsViewMore(false);
    if (typeof result === 'undefined') return;
    if (result.length === 0) {
      setLables(['노말']);
      setData([100]);
      setColor(['rgba(255, 99, 132']);
    } else {
      setLables(
        result
          .filter((trait) => Number.parseFloat(trait.value) > 3)
          .map((filteredTrait) => {
            return filteredTrait.gene.length === 0
              ? '노말'
              : filteredTrait.gene.join(' ');
          }),
      );
      setData(result.map((trait) => Number.parseFloat(trait.value)));
      setColor(
        result.map(
          () =>
            `rgba(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(
              Math.random() * (255 + 1),
            )}, ${Math.floor(Math.random() * (255 + 1))}`,
        ),
      );
    }
  }, [result]);

  return (
    <>
      <Doughnut
        style={{ marginTop: '18px' }}
        data={{
          labels,
          datasets: [
            {
              data,
              backgroundColor: color.map((bgColor) => `${bgColor}, 0.3)`),
              borderColor: color.map((borderColor) => `${borderColor}, 1)`),
              borderWidth: 1,
            },
          ],
        }}
      />
      <Button
        variant='outline'
        onClick={() => setIsViewMore((prev) => !prev)}
        sx={{
          width: '100%',
          marginTop: '30px',
          marginBottom: `${isViewMore ? 0 : '30px'}`,
        }}
      >
        {isViewMore ? '닫기' : '더보기'}
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
