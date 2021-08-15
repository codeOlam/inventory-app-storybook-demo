import React from "react";
import styled from 'styled-components';

import './link.css';
import { icons } from '../shared/icons';


const Svg = styled.svg`
  display: ${(props: { block: boolean; }) => (props.block ? 'block' : 'inline-block')};
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
  fill: currentColor;
`;

interface IconProps{
    icon: string;
    block: boolean;
}

const Icon = ({icon, block, ...props}: IconProps) =>{
      return(
        <>
        <Svg viewBox="0 0 1024 1024" width="20px" height="20px" block={block} {...props}>
            <Path d={icons[icon]} />
        </Svg>
        </>
      )
};

interface LinkProps {
    primary?: boolean;
    hasIcon?: boolean;
    block?: boolean;
    href?: string;
    content?: string;
    addIcon?: string;
    children?: string;
    onClick?: () => void;
};  

  export const Link = ({
      primary = true,
      hasIcon = false,
      block = false,
      href,
      content,
      addIcon,
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
                <Icon icon={addIcon!} block={block} /> {content}
            </a>
        </div>
    )
};