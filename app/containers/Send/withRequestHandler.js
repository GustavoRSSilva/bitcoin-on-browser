import React from 'react';
import PropTypes from 'prop-types';
import ScreenLoader from 'components/common/ScreenLoader';

const withRequestHandler = WrappedComponent => {
  class RequestHandler extends React.PureComponent {
    render() {
      const { btcToFiatFetchState, formSubmitState } = this.props;
      const isLoading =
        btcToFiatFetchState.requesting || formSubmitState.requesting;

      if (isLoading) {
        return (
          <ScreenLoader>
            <WrappedComponent {...this.props} />
          </ScreenLoader>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  RequestHandler.propTypes = {
    btcToFiatFetchState: PropTypes.object.isRequired,
    formSubmitState: PropTypes.object.isRequired,
  };
  return RequestHandler;
};

export default withRequestHandler;
