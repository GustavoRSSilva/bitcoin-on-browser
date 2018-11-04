/**
 *
 * Seed
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import TextArea from 'components/common/TextArea';
import Button from 'components/common/Button';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as actions from './actions';
import { selectSeedString, selectSaveSeedState } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Title, SeedFragment } from './styles';

/* eslint-disable react/prefer-stateless-function */
export class Seed extends React.Component {
  componentWillMount() {
    const { generateNewSeed } = this.props;
    //  TODO: fetch Seed
    const seed = null;
    //  If no seed generate a new one
    if (!seed) {
      generateNewSeed();
    }
  }

  componentDidUpdate() {
    const { saveSeedState, history } = this.props;
    //  Checks if the seed was successfuly save,
    //  If so redirect to the homepage
    if (saveSeedState.data === true) {
      history.push('/');
    }
  }

  render() {
    const { seed, generateNewSeed, saveSeed } = this.props;

    return (
      <div>
        <Title>
          <FormattedMessage {...messages.app_title} />
        </Title>
        <SeedFragment>
          <TextArea rows="4" readOnly value={seed} />
        </SeedFragment>

        <Button onClick={() => generateNewSeed()}>
          <FormattedMessage {...messages.generate_new_seed} />
        </Button>
        <Button onClick={() => saveSeed(seed)}>
          <FormattedMessage {...messages.save} />
        </Button>
      </div>
    );
  }
}

Seed.propTypes = {
  history: PropTypes.object.isRequired,
  seed: PropTypes.string,
  generateNewSeed: PropTypes.func.isRequired,
  saveSeed: PropTypes.func.isRequired,
  saveSeedState: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  seed: selectSeedString(),
  saveSeedState: selectSaveSeedState(),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'seed', reducer });
const withSaga = injectSaga({ key: 'seed', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Seed);
