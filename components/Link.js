import React from 'react'

const Link = ({ children, email }) => (
  <a href={`mailto:${email}`}>{children} ({email})</a>
);

export default Link
