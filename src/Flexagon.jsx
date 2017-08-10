import React from 'react';
const styles = {
  line: {
    stroke:'#f0f0f0',
    strokeWidth:1
  },
  frame: {
    stroke:'#f0f0f0',
    strokeWidth:1,
    fill: 'none'
  },
  svg:{
    margin: '10px'
  }
}

const toRadians = angle => angle * (Math.PI / 180);

const imageWidth = 250;
const imageHeigth = imageWidth/4 + Math.sqrt(Math.pow(imageWidth,2) - Math.pow(imageWidth/2,2));
const sideLength = (Math.sqrt(5)/4)*imageWidth;
const width = 3.5 * imageWidth;
const height = imageWidth;

const a1 = {
  x: (3/7) * width,
  y: height/4
}

const a2 = {
  x: (1/7) * width,
  y: height/4
}

const a3 = {
  x: (5/7) * width,
  y: height/4
}


const lines = [
  // vertical
  { x1: (1/7) * width, y1:        0, x2: (1/7) * width, y2:   height },

  // up diagonals
  { x1: (1/7) * width, y1: height/2, x2: (3/7) * width, y2:        0 },
  { x1: (1/7) * width, y1:   height, x2: (5/7) * width, y2:        0 },
  { x1: (3/7) * width, y1:   height, x2:         width, y2:        0 },
  { x1: (5/7) * width, y1:   height, x2:         width, y2: height/2 },

  // down diagonals
  { x1: (1/7) * width, y1: height/2, x2: (3/7) * width, y2:   height },
  { x1: (1/7) * width, y1:        0, x2: (5/7) * width, y2:   height },
  { x1: (3/7) * width, y1:        0, x2:         width, y2:   height },
  { x1: (5/7) * width, y1:        0, x2:         width, y2: height/2 }
]

const Flexagon = ({ rotation, x, y }) => (
  <svg style={styles.svg} width={width*5} height={height*5}>

    <defs>
      <pattern id="a" height="100%" width="100%" patternContentUnits="objectBoundingBox">
        <image height="1" width="1" preserveAspectRatio="none" xlinkHref="https://yt3.ggpht.com/-6hHU9OPxWrE/AAAAAAAAAAI/AAAAAAAAAAA/o7JZ7waBSL8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
      </pattern>
      <clipPath id="a1">
        <polygon points={`0 ${imageWidth/4},
          ${imageWidth/2} ${imageWidth/2},
          ${imageWidth} ${imageWidth/4},
          ${imageWidth/2} 0`}/>
      </clipPath>
      <clipPath id="a2">
        <polygon points={`0 ${imageWidth/4},
          ${(Math.sin(toRadians(3.44))*sideLength)} ${(imageWidth/4) + (Math.cos(toRadians(3.44))*sideLength)},
          ${imageWidth/2} ${imageHeigth},
          ${(imageWidth/2) - (Math.sin(toRadians(3.44))*sideLength)} ${imageHeigth - (Math.cos(toRadians(3.44))*sideLength)}`}/>
      </clipPath>
      <clipPath id="a3">
        <polygon points={`${imageWidth} ${imageWidth/4},
          ${(imageWidth/2) + (Math.sin(toRadians(3.44))*sideLength)} ${imageHeigth - (Math.cos(toRadians(3.44))*sideLength)},
          ${imageWidth/2} ${imageHeigth},
          ${(imageWidth - Math.sin(toRadians(3.44))*sideLength)} ${(imageWidth/4) + (Math.cos(toRadians(3.44))*sideLength)}`}/>
      </clipPath>
    </defs>

    <g style={styles.line}>
      {
        lines.map(({ x1, y1, x2, y2 }, index) => (
          <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))
      }
    </g>
    <rect style={styles.frame} x="0" y="0" width={width} height={height}/>

    
    <g transform={`translate(${a1.x} ${a1.y}) rotate(0)`}>
      <rect fill="url(#a)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#a1)'}} />
    </g>
    <g transform={`translate(${a2.x + imageWidth} ${a2.y}) rotate(120 0 ${imageWidth/4})`}>
      <rect fill="url(#a)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#a2)'}} />
    </g>
    <g transform={`translate(${a3.x - imageWidth} ${a3.y}) rotate(-120 ${imageWidth} ${imageWidth/4})`}>
      <rect fill="url(#a)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#a3)'}} />
    </g>
  </svg>
);

export default Flexagon;
