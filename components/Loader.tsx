import React from 'react';

const Loader = () => {
  return (
    <div className="sk-three-bounce">
      <style>
        {css}
      </style>
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;

const css = `
  /* loader */

.sk-three-bounce {
  height: 18px;
}

.sk-three-bounce > div {
  width: 18px;
  height: 18px;
  background-color: #e84300;
  border-radius: 100%;
  display: inline-block;

  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out;
  animation: sk-bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.sk-three-bounce > div:first-child {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.sk-three-bounce > div:nth-child(2) {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
  -webkit-transform: scale(0);
}
  40% {
  -webkit-transform: scale(1);
}
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  -webkit-transform: scale(0);
}
  40% {
    transform: scale(1);
  -webkit-transform: scale(1);
}
}

@keyframes moveDown {
  from {
    transform: translateY(-5rem);
    opacity: 0.5;
  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}
`;
