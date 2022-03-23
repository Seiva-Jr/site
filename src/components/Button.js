import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`,
};

const Button = ({ children, className = '', size, to }) => {
  return (
    <AnchorLink
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        border-solid
        border-4
        border-primary
        hover:border-primary-darker
        rounded
        text-white
        hover:text-white
        font-bold
    `}
      to={to}
    >
      {children}
    </AnchorLink>
  );
};

export default Button;
