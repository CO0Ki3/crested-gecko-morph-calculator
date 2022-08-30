import { Fragment } from 'react';

function Result({
  results,
  maleGenes,
  femaleGenes,
}: {
  results: {
    gene: string[];
    value: string;
  }[];
  maleGenes: string[];
  femaleGenes: string[];
}) {
  console.log(maleGenes, femaleGenes);
  return results.length === 0 ? (
    <>노말 100%</>
  ) : (
    <div>
      {results.map((value) => (
        <Fragment key={value.gene.join()}>
          {value.gene.map((gene, i) => (
            <span key={`${gene}-${i + 1}`}>{gene} </span>
          ))}
          <span>{value.value}</span>
          <br />
        </Fragment>
      ))}
    </div>
  );
}

export default Result;
