import { createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions(
  {
    startup: null
  },
  {
    prefix: 'App/'
  }
);

export const StartupTypes = Types;
export default Creators;
