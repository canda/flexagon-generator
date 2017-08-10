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

const imageWidth = 250;
const sideLength = (Math.sqrt(5)/4)*imageWidth;
const ratio = 1.059;
const width = 3.5 * imageWidth;
const height = imageWidth;

const a = {
  x: (3/7) * width,
  y: height/4
}

const b = {
  x: (1/7) * width,
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
        <image height="1" width="1" preserveAspectRatio="none" xlinkHref="https://forum.openframeworks.cc/uploads/default/5632/762414838098cb6e.gif"/>
      </pattern>
      <clipPath id="a1">
        <polygon points={`${a.x} ${a.y + imageWidth/4},${a.x + imageWidth/2} ${a.y + imageWidth/2},${a.x + imageWidth} ${a.y + imageWidth/4},${a.x + imageWidth/2} ${a.y}`}/>
      </clipPath>
      <clipPath id="b1">
        <polygon points={`0 ${imageWidth/4},0 ${imageWidth/4 + sideLength},${imageWidth/2} ${imageWidth/2 + sideLength},${imageWidth/2} ${imageWidth/2}`}/>
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

    <rect fill="url(#a)" height={ratio * imageWidth} width={imageWidth} x={a.x} y={a.y} style={{clipPath: 'url(#a1)'}} />
    <g transform={`translate(0 0) rotate(127 ${imageWidth/2} ${imageWidth/2})`}>
      <rect fill="url(#a)" height={ratio * imageWidth} width={imageWidth} style={{clipPath: 'url(#b1)'}} />
    </g>
  </svg>
);

export default Flexagon;
