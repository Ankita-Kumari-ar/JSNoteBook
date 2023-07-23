import { log } from 'console';
import './resizable.css';
import { useEffect, useState } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}
// Infinity just means take up as much horizontal space as possible
const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  const [width, setWidth] = useState(window.innerWidth * 0.75);

  // const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  // const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerWindowDimension, setInnerWindowDimension] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  let resizableProps: ResizableBoxProps;

  useEffect(() => {
    let timer: any;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        // setInnerHeight(window.innerHeight);
        // setInnerWidth(window.innerWidth);
        setInnerWindowDimension({
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
        if (window.innerWidth * 0.75 < width) {
          setWidth(window.innerWidth * 0.75);
        }
      }, 100);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [width]);

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      minConstraints: [innerWindowDimension.innerWidth * 0.2, Infinity],
      maxConstraints: [innerWindowDimension.innerWidth * 0.75, Infinity],
      height: Infinity,
      width: width,
      resizeHandles: ['e'],
      onResizeStop: (event, data) => {
        // console.log(data);
        setWidth(data.size.width);
      },
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 24],
      maxConstraints: [Infinity, innerWindowDimension.innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;

// maxConstraints={[horizontal, vertical]}
//  horizontal = Infinity
// vertical=90% of browser's height

// minConstraints={[Infinity, 24]} here height minimum 24px
