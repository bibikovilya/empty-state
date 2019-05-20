import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/chatchamp-logo.png';
import './index.css';

const EmptyComponent = () => (
  <div className="card">
    <p>We don't have what to show you</p>
    <img className="card__logo" src={logo} alt="No data" />
  </div>
)

const EmptyState = ({ data, fallback, children }) => (
  data.length === 0
    ? fallback
    : children
)

EmptyState.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  fallback: PropTypes.node
}

EmptyState.defaultProps = {
  data: [],
  fallback: <EmptyComponent />
}

export default EmptyState;
