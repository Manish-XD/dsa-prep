import React, {useState} from 'react';

const Ques = (props) => {
    const [now, setnow] = useState(0);
    const [BgColor, setBgColor] = useState("white");
    const checkBox = () =>{
      if(BgColor == "blue"){
        setnow(now-1);
        setBgColor("white");
      }else if(BgColor = "white"){
        setnow(now+1);
        setBgColor("blue");
      }
    }
  return (
    <div>
        <button style={{background: `${BgColor}`}} onClick={checkBox}></button>
        <p><a href={props.link}>{props.ques}</a></p>
    </div>
  )
}

export default Ques