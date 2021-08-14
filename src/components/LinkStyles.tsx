import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { color } from '../shared/styles';

interface inStyle{
    secondary: boolean,
    tertiary: boolean,
};

export const linkStyles = css<inStyle>`
  display: inline-block;
  transition: transform 150ms ease-out, color 150ms ease-out;
  text-decoration: none;

  color: ${color.secondary};

  &:hover,
  &:focus {
    cursor: pointer;
    transform: translateY(-1px);
    color: ${darken(0.07, color.secondary)};
  }
  &:active {
    transform: translateY(0);
    color: ${darken(0.1, color.secondary)};
  }

  svg {
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: text-top;
    position: relative;
    bottom: -0.125em;
    margin-right: 0.4em;
  }

  ${props =>
    props.secondary &&
    css`
      color: ${color.mediumdark};

      &:hover {
        color: ${color.dark};
      }

      &:active {
        color: ${color.darker};
      }
    `};

  ${props =>
    props.tertiary &&
    css`
      color: ${color.dark};

      &:hover {
        color: ${color.darkest};
      }

      &:active {
        color: ${color.mediumdark};
      }
    `};
`;



export const LinkA = styled.a`
  ${linkStyles};
`;

export const applyStyle = (LinkWrapper: any) => {
  return (
    LinkWrapper &&
    styled(({ secondary, tertiary, ...linkWrapperRest }) => (
      <LinkWrapper {...linkWrapperRest} />
    ))`
      ${linkStyles};
    `
  );
};