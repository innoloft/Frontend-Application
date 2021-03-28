import { PMIStyle } from "./pmi.styles";

function PMI({ name, investmentEffort, type }) {
  return (
    <PMIStyle>
      <div className="title">
        <h1>{name}</h1>
        <span>({type.name})</span>
      </div>
      <h3>{investmentEffort}</h3>
    </PMIStyle>
  );
}

export default PMI;
