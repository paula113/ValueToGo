import React from 'react';
import './Badge.scss';
import { Box } from '@material-ui/core/';

// eslint-disable-next-line react/prop-types
function Badge({ name }) {
  const classNameBadge = name ? `badge--${name}` : '';

  return <Box className={`badge ${classNameBadge}`}>{name}</Box>;
}

export default Badge;
