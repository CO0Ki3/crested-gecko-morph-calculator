import useGenesStore from '../../store/store';
import ChildrenList from './items/children/ChildrenList';
import ParentsList from './items/parents/ParentsList';

function Result() {
  const { result } = useGenesStore();
  return typeof result === 'undefined' ? null : (
    <>
      <ParentsList />
      <ChildrenList />
    </>
  );
}

export default Result;
