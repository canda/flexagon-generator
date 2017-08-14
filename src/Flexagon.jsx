import React from 'react';
const styles = {
  line: {
    stroke:'#000000',
    strokeWidth:3
  },
  frame: {
    stroke:'#000000',
    strokeWidth:3,
    fill: 'none'
  },
  svg:{
    margin: '40px'
  }
}

const toRadians = angle => angle * (Math.PI / 180);

const imageWidth = 300;
const equilateralTriangleHeight = Math.sqrt(Math.pow(imageWidth,2) - Math.pow(imageWidth/2,2));
const imageHeigth = imageWidth/4 + equilateralTriangleHeight;
const sideLength = (Math.sqrt(5)/4)*imageWidth;
const width = 4 * imageWidth;
const height = imageWidth;

const a1 = {
  x: (4/8) * width,
  y: height/4
}

const a2 = {
  x: (2/8) * width,
  y: height/4
}

const a3 = {
  x: (6/8) * width,
  y: height/4
}

const b1a = {
  x: (7/8) * width,
  y: height/4
}

const b1b = {
  x: (2/8) * width,
  y: height/4
}

const b2 = {
  x: (4/8) * width,
  y: height/4
}

const b3 = {
  x: (4/8) * width,
  y: height/4
}

const c1a = {
  x: (7/8) * width,
  y: 3*height/4
}

const c1b = {
  x: (2/8) * width,
  y: 3*height/4
}

const c2 = {
  x: (4/8) * width,
  y: 3*height/4
}

const c3 = {
  x: (4/8) * width,
  y: 3*height/4
}

const d1a = {
  x: (4/8) * width,
  y: -height/4
}

const d2a = {
  x: (2/8) * width,
  y: -height/4
}

const d3a = {
  x: (6/8) * width,
  y: -height/4
}

const d1b = {
  x: (4/8) * width,
  y: 3*height/4
}

const d2b = {
  x: (2/8) * width,
  y: 3*height/4
}

const d3b = {
  x: (6/8) * width,
  y: 3*height/4
}

const innerLines = [
  // vertical
  { x1: (0/8) * width, y1: 0,                  x2: (0/8) * width, y2: 2 * height         },
  { x1: (1/8) * width, y1: 0,                  x2: (1/8) * width, y2: 2 * height         },
  { x1: (2/8) * width, y1: 0,                  x2: (2/8) * width, y2: 2 * height         },
  { x1: (3/8) * width, y1: 0,                  x2: (3/8) * width, y2: 2 * height         },
  { x1: (4/8) * width, y1: 0,                  x2: (4/8) * width, y2: 2 * height         },
  { x1: (5/8) * width, y1: 0,                  x2: (5/8) * width, y2: 2 * height         },
  { x1: (6/8) * width, y1: 0,                  x2: (6/8) * width, y2: 2 * height         },
  { x1: (7/8) * width, y1: 0,                  x2: (7/8) * width, y2: 2 * height         },
  { x1: (8/8) * width, y1: 0,                  x2: (8/8) * width, y2: 2 * height         },

  // horizontal
  { x1: 0,             y1: (0/4) * 2 * height, x2: 2 * width,     y2: (0/4) * 2 * height },
  { x1: 0,             y1: (1/4) * 2 * height, x2: 2 * width,     y2: (1/4) * 2 * height },
  { x1: 0,             y1: (2/4) * 2 * height, x2: 2 * width,     y2: (2/4) * 2 * height },
  { x1: 0,             y1: (3/4) * 2 * height, x2: 2 * width,     y2: (3/4) * 2 * height },
  { x1: 0,             y1: (4/4) * 2 * height, x2: 2 * width,     y2: (4/4) * 2 * height },

  // up diagonals
  { x1: (0/8) * width, y1: (1/4) * 2 * height, x2: (2/8) * width, y2: 0                  },
  { x1: (0/8) * width, y1: (2/4) * 2 * height, x2: (4/8) * width, y2: 0                  },
  { x1: (0/8) * width, y1: (3/4) * 2 * height, x2: (6/8) * width, y2: 0                  },
  { x1: (0/8) * width, y1: (4/4) * 2 * height, x2: (8/8) * width, y2: 0                  },
  { x1: (2/8) * width, y1: (4/4) * 2 * height, x2: (8/8) * width, y2: (1/4) * 2 * height },
  { x1: (4/8) * width, y1: (4/4) * 2 * height, x2: (8/8) * width, y2: (2/4) * 2 * height },
  { x1: (6/8) * width, y1: (4/4) * 2 * height, x2: (8/8) * width, y2: (3/4) * 2 * height },

  // down diagonals
  { x1: (0/8) * width, y1: (3/4) * 2 * height, x2: (2/8) * width, y2: (4/4) * 2 * height },
  { x1: (0/8) * width, y1: (2/4) * 2 * height, x2: (4/8) * width, y2: (4/4) * 2 * height },
  { x1: (0/8) * width, y1: (1/4) * 2 * height, x2: (6/8) * width, y2: (4/4) * 2 * height },
  { x1: (0/8) * width, y1: (0/4) * 2 * height, x2: (8/8) * width, y2: (4/4) * 2 * height },
  { x1: (2/8) * width, y1: (0/4) * 2 * height, x2: (8/8) * width, y2: (3/4) * 2 * height },
  { x1: (4/8) * width, y1: (0/4) * 2 * height, x2: (8/8) * width, y2: (2/4) * 2 * height },
  { x1: (6/8) * width, y1: (0/4) * 2 * height, x2: (8/8) * width, y2: (1/4) * 2 * height },

]

const FlexagonUI = ({ rotation, x, y, selectImage, selectedImage }) => (
  <div>
    <input type="file" onChange={selectImage} />
  <svg style={styles.svg} width={width} height={2 * height}>

    <defs>
      <pattern id="a" height="100%" width="100%" patternContentUnits="objectBoundingBox">
        <image height="1" width="1" preserveAspectRatio="none" xlinkHref={selectedImage || 'https://yt3.ggpht.com/-6hHU9OPxWrE/AAAAAAAAAAI/AAAAAAAAAAA/o7JZ7waBSL8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}/>
      </pattern>
      <pattern id="b" height="100%" width="100%" patternContentUnits="objectBoundingBox">
        <image height="1" width="1" preserveAspectRatio="none" xlinkHref="https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg"/>
      </pattern>
      <pattern id="c" height="100%" width="100%" patternContentUnits="objectBoundingBox">
        <image height="1" width="1" preserveAspectRatio="none" xlinkHref="https://8sph.azureedge.net/media/Default/_Profiles/8f14fafe/ae24358d/reactjs.png"/>
      </pattern>
      <pattern id="d" height="100%" width="100%" patternContentUnits="objectBoundingBox">
        <image height="1" width="1" preserveAspectRatio="none" xlinkHref="https://octodex.github.com/images/octobiwan.jpg"/>
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

      <clipPath id="b1a">
        <polygon points={`${imageWidth/2} ${imageHeigth - imageWidth/2},
          ${imageWidth} ${imageHeigth - imageWidth/4},
          ${imageWidth/2} ${imageHeigth}`}/>
      </clipPath>
      <clipPath id="b1b">
        <polygon points={`${imageWidth/2} ${imageHeigth - imageWidth/2},
          0 ${imageHeigth - imageWidth/4},
          ${imageWidth/2} ${imageHeigth}`}/>
      </clipPath>
      <clipPath id="b2">
        <polygon points={`0 ${imageHeigth - imageWidth/4},
        ${(imageWidth/2) - (Math.sin(toRadians(3.44))*sideLength)} ${Math.cos(toRadians(3.44))*sideLength},
        ${imageWidth/2} 0,
        ${Math.sin(toRadians(3.44))*sideLength} ${imageHeigth - imageWidth/4 - Math.cos(toRadians(3.44))*sideLength}`}/>
      </clipPath>
      <clipPath id="b3">
        <polygon points={`${imageWidth/2} 0,
        ${(imageWidth/2) + (Math.sin(toRadians(3.44))*sideLength)} ${Math.cos(toRadians(3.44))*sideLength},
        ${imageWidth} ${imageHeigth - imageWidth/4},
        ${(imageWidth) - (Math.sin(toRadians(3.44))*sideLength)} ${imageHeigth - imageWidth/4 - Math.cos(toRadians(3.44))*sideLength}`}/>
      </clipPath>

      <clipPath id="d1a">
        <polygon points={`0 ${imageWidth/4},
          ${imageWidth/2} ${imageWidth/2},
          ${imageWidth} ${imageWidth/4}`}/>
      </clipPath>
      <clipPath id="d2a">
        <polygon points={`0 ${imageWidth/4},
          ${imageWidth/2} ${imageHeigth},
          ${(imageWidth/2) - (Math.sin(toRadians(3.44))*sideLength)} ${imageHeigth - (Math.cos(toRadians(3.44))*sideLength)}`}/>
      </clipPath>
      <clipPath id="d3a">
        <polygon points={`${imageWidth} ${imageWidth/4},
          ${(imageWidth/2) + (Math.sin(toRadians(3.44))*sideLength)} ${imageHeigth - (Math.cos(toRadians(3.44))*sideLength)},
          ${imageWidth/2} ${imageHeigth}`}/>
      </clipPath>

      <clipPath id="d1b">
        <polygon points={`0 ${imageWidth/4},
          ${imageWidth} ${imageWidth/4},
          ${imageWidth/2} 0`}/>
      </clipPath>
      <clipPath id="d2b">
        <polygon points={`0 ${imageWidth/4},
          ${(Math.sin(toRadians(3.44))*sideLength)} ${(imageWidth/4) + (Math.cos(toRadians(3.44))*sideLength)},
          ${imageWidth/2} ${imageHeigth}`}/>
      </clipPath>
      <clipPath id="d3b">
        <polygon points={`${imageWidth} ${imageWidth/4},
          ${imageWidth/2} ${imageHeigth},
          ${(imageWidth - Math.sin(toRadians(3.44))*sideLength)} ${(imageWidth/4) + (Math.cos(toRadians(3.44))*sideLength)}`}/>
      </clipPath>
    </defs>

    <g style={styles.line}>
      {
        innerLines.map(({ x1, y1, x2, y2 }, index) => (
          <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))
      }
    </g>

    <g transform={`translate(0 ${height / 2})`}>

      <g transform={`translate(${a1.x} ${a1.y}) rotate(0)`}>
        <rect fill="url(#a)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#a1)'}} />
      </g>
      <g transform={`translate(${a2.x + imageWidth} ${a2.y}) rotate(120 0 ${imageWidth/4})`}>
        <rect fill="url(#a)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#a2)'}} />
      </g>
      <g transform={`translate(${a3.x - imageWidth} ${a3.y}) rotate(-120 ${imageWidth} ${imageWidth/4})`}>
        <rect fill="url(#a)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#a3)'}} />
      </g>

      <g transform={`translate(${b1a.x - imageWidth} ${b1a.y - equilateralTriangleHeight}) rotate(180 ${imageWidth} ${imageHeigth - imageWidth/4})`}>
        <rect fill="url(#b)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#b1a)'}} />
      </g>
      <g transform={`translate(${b1b.x + imageWidth/2} ${b1b.y - equilateralTriangleHeight}) rotate(180 0 ${imageHeigth - imageWidth/4})`}>
        <rect fill="url(#b)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#b1b)'}} />
      </g>
      <g transform={`translate(${b2.x} ${b2.y}) rotate(60 ${imageWidth/2} 0)`}>
        <rect fill="url(#b)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#b2)'}} />
      </g>
      <g transform={`translate(${b3.x} ${b3.y}) rotate(-60 ${imageWidth/2} 0)`}>
        <rect fill="url(#b)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#b3)'}} />
      </g>

      <g transform={`translate(${c1a.x - imageWidth} ${c1a.y - equilateralTriangleHeight}) rotate(180 ${imageWidth} ${imageHeigth - imageWidth/4})`}>
        <rect fill="url(#c)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#b1a)'}} />
      </g>
      <g transform={`translate(${c1b.x + imageWidth/2} ${c1b.y - equilateralTriangleHeight}) rotate(180 0 ${imageHeigth - imageWidth/4})`}>
        <rect fill="url(#c)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#b1b)'}} />
      </g>
      <g transform={`translate(${c2.x} ${c2.y}) rotate(60 ${imageWidth/2} 0)`}>
        <rect fill="url(#c)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#b2)'}} />
      </g>
      <g transform={`translate(${c3.x} ${c3.y}) rotate(-60 ${imageWidth/2} 0)`}>
        <rect fill="url(#c)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#b3)'}} />
      </g>

      <g transform={`translate(${d1a.x} ${d1a.y}) rotate(0)`}>
        <rect fill="url(#d)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#d1a)'}} />
      </g>
      <g transform={`translate(${d2a.x + imageWidth} ${d2a.y}) rotate(120 0 ${imageWidth/4})`}>
        <rect fill="url(#d)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#d2a)'}} />
      </g>
      <g transform={`translate(${d3a.x - imageWidth} ${d3a.y}) rotate(-120 ${imageWidth} ${imageWidth/4})`}>
        <rect fill="url(#d)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#d3a)'}} />
      </g>
      <g transform={`translate(${d1b.x} ${d1b.y}) rotate(0)`}>
        <rect fill="url(#d)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#d1b)'}} />
      </g>
      <g transform={`translate(${d2b.x + imageWidth} ${d2b.y}) rotate(120 0 ${imageWidth/4})`}>
        <rect fill="url(#d)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#d2b)'}} />
      </g>
      <g transform={`translate(${d3b.x - imageWidth} ${d3b.y}) rotate(-120 ${imageWidth} ${imageWidth/4})`}>
        <rect fill="url(#d)" height={imageHeigth} width={imageWidth} style={{clipPath: 'url(#d3b)'}} />
      </g>
    </g>
  </svg>
  </div>
);

class Flexagon extends React.Component {
  constructor(props) {
    super(props);
    this.selectImage = this.selectImage.bind(this);
    this.state = {};
  }

  selectImage(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        selectedImage: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  
  render() {
    return (
      <div className="App">
        <FlexagonUI
          rotation={this.props.rotation}
          x={this.props.x}
          y={this.props.y}
          selectImage={this.selectImage}
          selectedImage={this.state.selectedImage}
        />
      </div>
    );
  }
}

export default Flexagon;
