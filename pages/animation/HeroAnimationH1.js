import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function HeroAnimationH1(props) {
  const text = props.text;
  return (
    <Wrapper className="font-Inter font-bold text-7xl text-center">{text}</Wrapper>
  );
}

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ('30deg');
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ('0deg');
    filter: blur(0px);
  }
`;

const Wrapper = styled.h1`
  display: inline-block;
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`;