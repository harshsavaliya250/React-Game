import React, { useState } from 'react';
import "./Puzzle.css";
let temp = " ";
var a = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const Puzzle = () => {
  const [btnValue1, setbtnValue1] = useState(1);
  const [btnValue2, setbtnValue2] = useState(2);
  const [btnValue3, setbtnValue3] = useState(3);
  const [btnValue4, setbtnValue4] = useState(4);
  const [btnValue5, setbtnValue5] = useState(5);
  const [btnValue6, setbtnValue6] = useState(6);
  const [btnValue7, setbtnValue7] = useState(7);
  const [btnValue8, setbtnValue8] = useState(8);
  const [btnValue9, setbtnValue9] = useState(' ');
  // const [random, setrandom] = useState(a);

  for (let i = 0; i < 9; i++) {
    a[i] = Math.floor(Math.random() * (10-1) + 1);
    console.log(a[i]);
  }
  // setbtnValue1(a[0]);

  const btn1 = () => {
    if (btnValue2 == " ") {
      temp = btnValue1;
      setbtnValue1(btnValue2);
      setbtnValue2(temp);
    }
    else if (btnValue4 == " ") {
      temp = btnValue1;
      setbtnValue1(btnValue4);
      setbtnValue4(temp);
    }
  }
  const btn2 = () => {
    if (btnValue1 == " ") {
      temp = btnValue1;
      setbtnValue1(btnValue2);
      setbtnValue2(temp);
    }
    else if (btnValue3 == " ") {
      temp = btnValue3;
      setbtnValue3(btnValue2);
      setbtnValue2(temp);
    }
    else if (btnValue5 == " ") {
      temp = btnValue5;
      setbtnValue5(btnValue2);
      setbtnValue2(temp);
    }
  }
  const btn3 = () => {
    if (btnValue2 == " ") {
      temp = btnValue2;
      setbtnValue2(btnValue3);
      setbtnValue3(temp);
    }
    else if (btnValue6 == " ") {
      temp = btnValue6;
      setbtnValue6(btnValue3);
      setbtnValue3(temp);
    }
  }
  const btn4 = () => {
    if (btnValue1 == " ") {
      temp = btnValue1;
      setbtnValue1(btnValue4);
      setbtnValue4(temp);
    }
    else if (btnValue5 == " ") {
      temp = btnValue5;
      setbtnValue5(btnValue4);
      setbtnValue4(temp);
    }
    else if (btnValue7 == " ") {
      temp = btnValue7;
      setbtnValue7(btnValue4);
      setbtnValue4(temp);
    }
  }
  const btn5 = () => {
    if (btnValue2 == " ") {
      temp = btnValue2;
      setbtnValue2(btnValue5);
      setbtnValue5(temp);
    }
    else if (btnValue4 == " ") {
      temp = btnValue4;
      setbtnValue4(btnValue5);
      setbtnValue5(temp);
    }
    else if (btnValue6 == " ") {
      temp = btnValue6;
      setbtnValue6(btnValue5);
      setbtnValue5(temp);
    }
    else if (btnValue8 == " ") {
      temp = btnValue8;
      setbtnValue8(btnValue5);
      setbtnValue5(temp);
    }
  }

  const btn6 = () => {
    if (btnValue3 == " ") {
      temp = btnValue3;
      setbtnValue3(btnValue6);
      setbtnValue6(temp);
    }
    else if (btnValue5 == " ") {
      temp = btnValue5;
      setbtnValue5(btnValue6)
      setbtnValue6(temp);
    }
    else if (btnValue9 == " ") {
      temp = btnValue9;
      setbtnValue9(btnValue6);
      setbtnValue6(temp);
    }
  }
  const btn7 = () => {
    if (btnValue4 == " ") {
      temp = btnValue4;
      setbtnValue4(btnValue7);
      setbtnValue7(temp);
    }
    else if (btnValue8 == " ") {
      temp = btnValue8;
      setbtnValue8(btnValue7)
      setbtnValue7(temp);
    }
  }
  const btn8 = () => {
    if (btnValue5 == " ") {
      temp = btnValue5;
      setbtnValue5(btnValue8);
      setbtnValue8(temp);
    }
    else if (btnValue7 == " ") {
      temp = btnValue7;
      setbtnValue7(btnValue8)
      setbtnValue8(temp);
    }
    else if (btnValue9 == " ") {
      temp = btnValue9;
      setbtnValue9(btnValue8);
      setbtnValue8(temp);
    }
  }

  const btn9 = () => {
    if (btnValue6 == " ") {
      temp = btnValue6;
      setbtnValue6(btnValue9);
      setbtnValue9(temp);
    }
    else if (btnValue8 == " ") {
      temp = btnValue8;
      setbtnValue8(btnValue9)
      setbtnValue9(temp);
    }
  }

  if (
    btnValue1 == "1" &&
    btnValue2 == "2" &&
    btnValue3 == "3" &&
    btnValue4 == "4" &&
    btnValue5 == "5" &&
    btnValue6 == "6" &&
    btnValue7 == "7" &&
    btnValue8 == "8" &&
    btnValue9 == " ") {
      alert('win');
  }

  return (
    <>
      <div className='row '>
        <div className='col-12 mt-5 text-center'>
          <div>
            <input type='button' className='pzl-btn' onClick={() => btn1()} value={btnValue1} />
            <input type='button' className='pzl-btn' onClick={() => btn2()} value={btnValue2} />
            <input type='button' className='pzl-btn' onClick={() => btn3()} value={btnValue3} />
          </div>
          <div>
            <input type='button' className='pzl-btn' onClick={() => btn4()} value={btnValue4} />
            <input type='button' className='pzl-btn' onClick={() => btn5()} value={btnValue5} />
            <input type='button' className='pzl-btn' onClick={() => btn6()} value={btnValue6} />
          </div>
          <div>
            <input type='button' className='pzl-btn' onClick={() => btn7()} value={btnValue7} />
            <input type='button' className='pzl-btn' onClick={() => btn8()} value={btnValue8} />
            <input type='button' className='pzl-btn' onClick={() => btn9()} value={btnValue9} />
          </div>
          {/* <h1>{win}</h1> */}
        </div>
      </div>
    </>
  )
}

export default Puzzle
