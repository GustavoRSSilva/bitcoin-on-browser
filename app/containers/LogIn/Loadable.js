/**
 *
 * Asynchronously loads the component for LogIn
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
