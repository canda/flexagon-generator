import React from 'react';
const styles = {
  line: {
    stroke:'#f0f0f0',
    strokeWidth:1
  }
}

const lines = [
  // horizontals
  { x1:   0, y1:   0, x2: 800, y2: 0   },
  { x1:   0, y1: 100, x2: 800, y2: 100 },
  { x1:   0, y1: 200, x2: 800, y2: 200 },
  { x1:   0, y1: 300, x2: 800, y2: 300 },
  { x1:   0, y1: 400, x2: 800, y2: 400 },

  // verticals
  { x1:   0, y1:   0, x2:   0, y2: 400 },
  { x1: 100, y1:   0, x2: 100, y2: 400 },
  { x1: 200, y1:   0, x2: 200, y2: 400 },
  { x1: 300, y1:   0, x2: 300, y2: 400 },
  { x1: 400, y1:   0, x2: 400, y2: 400 },
  { x1: 500, y1:   0, x2: 500, y2: 400 },
  { x1: 600, y1:   0, x2: 600, y2: 400 },
  { x1: 700, y1:   0, x2: 700, y2: 400 },
  { x1: 800, y1:   0, x2: 800, y2: 400 },

  // up diagonals
  { x1:   0, y1:   0, x2: 800, y2: 400 },
  { x1: 200, y1:   0, x2: 800, y2: 300 },
  { x1: 400, y1:   0, x2: 800, y2: 200 },
  { x1: 600, y1:   0, x2: 800, y2: 100 },
  { x1:   0, y1: 100, x2: 600, y2: 400 },
  { x1:   0, y1: 200, x2: 400, y2: 400 },
  { x1:   0, y1: 300, x2: 200, y2: 400 },

  // down diagonals
  { x1:   0, y1: 100, x2: 200, y2: 0   },
  { x1:   0, y1: 200, x2: 400, y2: 0   },
  { x1:   0, y1: 300, x2: 600, y2: 0   },
  { x1:   0, y1: 400, x2: 800, y2: 0   },
  { x1: 200, y1: 400, x2: 800, y2: 100 },
  { x1: 400, y1: 400, x2: 800, y2: 200 },
  { x1: 600, y1: 400, x2: 800, y2: 300 },
]
const Flexagon = ({ rotation, x, y }) => (
  <svg width="800" height="400">
    <defs>
        <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox" patternTransform="rotate(15), translate(-80, -20)">
            <image height="1" width="1" preserveAspectRatio="none" xlinkHref="http://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Gl%C3%BChwendel_brennt_durch.jpg/399px-Gl%C3%BChwendel_brennt_durch.jpg" />
        </pattern>
        <pattern id="paa1" height="100%" width="100%" patternContentUnits="objectBoundingBox" patternTransform="rotate(15), translate(25, 25)">
            <image height="1" width="1" preserveAspectRatio="none" xlinkHref="https://yt3.ggpht.com/-6hHU9OPxWrE/AAAAAAAAAAI/AAAAAAAAAAA/o7JZ7waBSL8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" />
        </pattern>

        <pattern
          id="a"
          height="100%"
          width="100%"
          patternContentUnits="objectBoundingBox"
        >
          <image
            height="1"
            width="1"
            preserveAspectRatio="none"
            xlinkHref="https://forum.openframeworks.cc/uploads/default/5632/762414838098cb6e.gif"
          />
        </pattern>



        <pattern
          id="aleft"
          height="100%"
          width="100%"
          patternContentUnits="objectBoundingBox"
          patternTransform={`rotate(${rotation}, ${x}, ${y})`}
        >
          <image
            height="1"
            width="1"
            preserveAspectRatio="none"
            xlinkHref="https://forum.openframeworks.cc/uploads/default/5632/762414838098cb6e.gif"
          />
        </pattern>
        <pattern
          id="aright"
          height="100%"
          width="100%"
          patternContentUnits="objectBoundingBox"
        >
          <image
            height="1"
            width="1"
            preserveAspectRatio="none"
            xlinkHref="https://yt3.ggpht.com/-6hHU9OPxWrE/AAAAAAAAAAI/AAAAAAAAAAA/o7JZ7waBSL8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
          />
        </pattern>

        <clipPath id="a2">
          <polygon points="0 200,100 250,200 200,100 150"/>
        </clipPath>

        <clipPath id="a1">
          <polygon points="200 200,300 250,400 200,300 150"/>
        </clipPath>

        <clipPath id="a3">
          <polygon points="400 200,500 250,600 200,500 150"/>
        </clipPath>
    </defs>

    <g style={styles.line}>
      {
        lines.map(({ x1, y1, x2, y2 }, index) => (
          <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))
      }
    </g>

    <rect fill="url(#aleft)" height="200" width="200" x="0" y="150"  style={{clipPath: 'url(#a2)'}} / >
    <rect fill="url(#a)" height="200" width="200" x="200" y="150" style={{clipPath: 'url(#a1)'}} / >
    <rect fill="url(#aright)" height="200" width="200" x="400" y="150" style={{clipPath: 'url(#a3)'}} / >

  </svg>
);

export default Flexagon;
