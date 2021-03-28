import { LoaderOverlay, LoaderContainer } from "./loader.styles.jsx";

const Loader = ({ isComponent }) => (
  <LoaderOverlay compo={isComponent}>
    <LoaderContainer compo={isComponent} />
  </LoaderOverlay>
);

export default Loader;
