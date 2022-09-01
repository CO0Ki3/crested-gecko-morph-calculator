import useGenesStore from '../../../../store/store';
import ParentItem from './ParentItem';

function ParentsList() {
  const { maleGene, femaleGene } = useGenesStore();

  return (
    <>
      <ParentItem genes={maleGene} />
      <ParentItem genes={femaleGene} />
    </>
  );
}

export default ParentsList;
