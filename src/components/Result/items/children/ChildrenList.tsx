import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import useGenesStore from '../../../../store/store';
import ChildrenItem from './ChildrenItem';

function ChildrenList() {
  const { result } = useGenesStore();
  const [isViewMore, setIsViewMore] = useState(false);
  Chart.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    setIsViewMore(false);
  }, [result]);

  return (
    <>
      <Doughnut
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
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
