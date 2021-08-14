import React from "react";
import styled from "@emotion/styled-base";
import PropTypes from 'prop-types';

import { linkStyles, applyStyle, LinkA } from "./LinkStyles";

export function Link({LinkWrapper, children, ...rest}: any){
    const StyledLinkWrapper = applyStyle(LinkWrapper)

    let SelectedLink = LinkA;
    if(LinkWrapper){
        SelectedLink = StyledLinkWrapper
    }

    return <SelectedLink{...rest}/>
}

Link.propTypes ={
    LinkWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    children: PropTypes.node,
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
}

Link.defaultProps = {
    children: null,
    LinkWrapper: undefined,
    secondary: false,
    tertiary: false,
  };