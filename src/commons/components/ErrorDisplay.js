import React, { Children } from 'react';

const ErrorDisplay = ({ children }) => {
  return <div>{children}</div>;
};

export default React.memo(ErrorDisplay);
