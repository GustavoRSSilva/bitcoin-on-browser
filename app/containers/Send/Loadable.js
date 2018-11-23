/**
 *
 * Asynchronously loads the component for Send
 *
 */

import Loadable from 'react-loadable';
import Containerloading from 'components/common/Containerloading';

export default Loadable({
  loader: () => import('./index'),
  loading: Containerloading,
});
