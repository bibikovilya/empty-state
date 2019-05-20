import React from 'react';
import PropTypes from 'prop-types';

const EmptyState = ({ data, children }) => (
  data.length === 0
    ? <span>Empty</span>
    : children
)

EmptyState.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
}

export default EmptyState;
