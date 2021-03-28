import { P } from "./description.styles";

function Description({ description }) {
  const desc = { __html: description };
  return <P dangerouslySetInnerHTML={desc} />;
}

export default Description;
