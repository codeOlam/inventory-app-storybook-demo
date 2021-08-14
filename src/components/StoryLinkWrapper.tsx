import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';

const onClickAction = action('onLinkClick');

export function StoryLinkWrapper({ children, className, href, onClick, to, ...rest }: any) {
    const modifiedOnClick = (event: any) => {
      event.preventDefault();
      onClick();
      onClickAction(href || to);
    };

    return (
        <a className={className} href={href || to} onClick={modifiedOnClick} {...rest}>
          {children}
        </a>
      );
};

StoryLinkWrapper.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    to: PropTypes.string,
};
  
StoryLinkWrapper.defaultProps = {
    className: '',
    href: null,
    onClick: () => {},
    to: null,
};