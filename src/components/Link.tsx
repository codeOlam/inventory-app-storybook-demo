import React from "react";
import './link.css';

interface LinkProps {
    primary?: boolean;
    hasIcon?: boolean;
    href?: string;
    content?: string;
    children?: string;
    onClick?: () => void;
  };

  export const Link = ({
      primary = true,
      hasIcon = false,
      href,
      content,
      ...props
  }: LinkProps) =>{
      const appearance = primary ? 'link--primary':'link--secondary'; 
      const withIcon = hasIcon? 'link--with-icon': null
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                className={['link', appearance, withIcon].join(' ')}
                href={href}
                {...props}
            >
            {content}
            </a>
        </div>
    )
};