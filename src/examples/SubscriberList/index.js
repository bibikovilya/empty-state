import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const SubscriberList = ({ headers, rows }) => (
  <Table>
    <TableHead>
      <TableRow>
        {headers.map(column => <TableCell key={column}>{column}</TableCell>)}
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map(({id, name, subscribedAt, source, subscriptionState}) => (
        <TableRow key={id}>
          <TableCell component="th" scope="row">{name}</TableCell>
          <TableCell>{subscribedAt}</TableCell>
          <TableCell>{source}</TableCell>
          <TableCell>{subscriptionState}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

SubscriberList.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SubscriberList;
