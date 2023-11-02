import  { useState } from 'react';
import './Matrix.css';

function Matrix() {
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickOrder, setClickOrder] = useState([]);

  function changeColor(item, duration) {
    setTimeout(function() {
        setColors((newColors)=> {
            const updateColor = [...newColors];
            updateColor[item] = 'orange';
            return updateColor;
        });
    }, duration);
  }

  const handleBoxClick = (index) => {
    const newColors = [...colors];
    newColors[index] = 'green';
    setColors(newColors);
    const updatedOrder = [...clickOrder, index]
    setClickOrder(updatedOrder);

    if (updatedOrder.length === 9) {
        updatedOrder.forEach((item, index)=>{
            changeColor(item, 1000 + (index*1000))
        })
    }
  };

  return (
    <div className='matrix-container'>
      <h2>3x3 Matrix</h2>
      <div className="matrix">
        {colors.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => handleBoxClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Matrix;
