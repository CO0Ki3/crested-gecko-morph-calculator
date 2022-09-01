function ParentItem({ genes }: { genes: string[] }) {
  return <>{genes.map((value) => value)}</>;
}

export default ParentItem;
