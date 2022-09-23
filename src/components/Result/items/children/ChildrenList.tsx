import useGenesStore from '../../../../store/store';
import ChildrenItem from './ChildrenItem';

function ChildrenList() {
  const { result } = useGenesStore();
  return typeof result === 'undefined' ? null : (
    <ChildrenItem result={result} />
  );
}

export default ChildrenList;
