/**
 *
 * Asynchronously loads the component for SignUp
 *
 */

import Loadable from 'react-loadable';
import Containerloading from 'components/common/Containerloading';

export default Loadable({
  loader: () => import('./index'),
  loading: Containerloading,
});
