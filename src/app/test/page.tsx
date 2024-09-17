'use client'
import React, { Component } from "react";

type Props = {};

type State = {};

export default class page extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        {/* <p className="relative">hello</p>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gradient-to-b from-pink-400 to-pink-700 border border-pink-500 xl:border-8 xl:bg-gradient-to-br">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full bg-black xl:border-8 "></div>
        </div> */}
        {/* <div className="bg-gradient-to-r from-purple-700 to-black">
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-purple-700 rounded-full"></div>
</div> */}
      {/* <div className="w-96 h-96 border-2 border-black rounded-full bg-gradient-to-br from-black to-pink-600">

      <div className="w-96 h-96 border-2 border-black rounded-br-full bg-black absolute left-20 top-20"></div>

      </div> */}
<svg className="relative" width="200" height="200">
  <defs>
    <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF69B4" />
      <stop offset="100%" stop-color="#FFC0CB" />
    </linearGradient>
  </defs>
  <path d="M50,100 A 50,50 0 0 1 150,100" fill="url(#pinkGradient)" stroke="none" />
</svg>
<svg className="absolute top-5" width="200" height="200">
  <defs>
    <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fff" />
      <stop offset="100%" stop-color="#fff" />
    </linearGradient>
  </defs>
  <path d="M50,100 A 50,50 0 0 1 150,100" fill="url(#pinkGradient)" stroke="none" />
</svg>

<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff0080" stop-opacity="1" /> {/* Use stop-color and stop-opacity */}
      <stop offset="100%" stop-color="#800080" stop-opacity="1" />
    </linearGradient>
  </defs>
  <path fill="url(#grad1)" d="M200,50 A150,150 0 0,1 350,200 L280,200 A80,80 0 0,0 200,120 Z" />
</svg>

<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="100%" y1="100%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff0080" stop-opacity="1" /> {/* Use stop-color and stop-opacity */}
      <stop offset="100%" stop-color="#800080" stop-opacity="1" />
    </linearGradient>
  </defs>
  <path fill="url(#grad1)" d="M200,50 A150,150 0 0,1 350,200 L280,200 A80,80 0 0,0 200,120 Z" />
</svg>

{/* <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ff0080;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#800080;stop-opacity:1" />
    </linearGradient>
  </defs>
  <path fill="url(#gradTopLeft)" d="M200,50 A150,150 0 0,0 50,200 L120,200 A80,80 0 0,1 200,120 Z" />
</svg> */}

<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradBottomLeft" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff0080" stop-opacity="1" />
      <stop offset="100%" stop-color="#800080" stop-opacity="1" />
    </linearGradient>
  </defs>
  <path fill="url(#gradBottomLeft)" d="M200,350 A150,150 0 0,0 50,200 L120,200 A80,80 0 0,1 200,280 Z" />
</svg>

<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradBottomLeft" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff0080" stop-opacity="1" />
      <stop offset="100%" stop-color="#800080" stop-opacity="1" />
    </linearGradient>
  </defs>
  <path fill="url(#gradBottomLeft)" d="M200,350 A150,150 0 0,0 50,200 L120,200 A80,80 0 0,1 200,280 Z" />
</svg>
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff0080" stop-opacity="1" />
      <stop offset="100%" stop-color="#800080" stop-opacity="1" />
    </linearGradient>
  </defs>
  <g transform="rotate(180, 200, 200)">
    <path fill="url(#grad1)" d="M200,50 A150,150 0 0,1 350,200 L280,200 A80,80 0 0,0 200,120 Z" />
  </g>
</svg>

      </div>
    );
  }
}
