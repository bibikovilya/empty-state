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

const EmptyState = ({ data, children }) => (
  data.length === 0
    ? <EmptyComponent />
    : children
)

EmptyState.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
}

export default EmptyState;
