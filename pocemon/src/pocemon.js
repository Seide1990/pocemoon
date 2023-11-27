import { useState} from 'react';
import './style.css'
import Poce from './dovr_pocemon.js';
import style from "./style1.module.css";

export default function Pocemon(props){
  var  pocearray=[4,7,11,12,25,39,94,133]
  const [pocemon,usepocemon]=useState([25,7,12,39,4,133,25,94,7,4]);
 
var cem=0;
const [exp1,setexp1]=useState(0);
const [exp2,setexp2]=useState(0);
const [exp3,setexp3]=useState(0);
const [exp4,setexp4]=useState(0);
const [exp5,setexp5]=useState(0);
const [cem1,usecem1]=useState(0);
const [exp12,setexp12]=useState(0);
const [exp22,setexp22]=useState(0);
const [exp32,setexp32]=useState(0);
const [exp42,setexp42]=useState(0);
const [exp52,setexp52]=useState(0);
const [cem2,usecem2]=useState(0);
const random=()=>{
     let random_array=[];
     for (let i=0;i<10;i++){
      random_array.push(pocearray[ Math.floor(Math.random() * 8)]);
     
 
}
  //  console.log(random_array)  
     usepocemon(random_array)
     console.log(pocemon)
     console.log(exp1);
     console.log(exp2)
     usecem1(Number(exp1)+Number(exp2)+Number(exp3)+Number(exp4)+Number(exp5));
     usecem2(Number(exp12)+Number(exp22)+Number(exp32)+Number(exp42)+Number(exp52));
     }
    
   
   return(
    <>
  
<div className={style.main_box}>
  {cem1>cem2?
<h1 className={style.ween}> Winning Hand</h1>:<h1 className={style.lose}> Winning Hand</h1>}
    <p>Total experience: {cem1}</p>
    <button onClick={random}> oyna </button>  
<div className={style.first_group}>
{/* {pocemon.map((x) => (<>
  <Poce otur={x} setexp={setexp1}> </Poce>
  </>          
            ) )} */}
            <Poce otur={pocemon[0]} setexp={setexp1}> </Poce>
            <Poce otur={pocemon[1]} setexp={setexp2}> </Poce>
            <Poce otur={pocemon[2]} setexp={setexp3}> </Poce>
            <Poce otur={pocemon[3]} setexp={setexp4}> </Poce>
            <Poce otur={pocemon[4]} setexp={setexp5}> </Poce>
        

</div>
{cem2>cem1?
<h2 className={style.ween}> Winning Hand</h2>:<h2 className={style.lose}> Winning Hand</h2>}
    <p>Total experience:{cem2} </p>
<div className={style.first_group}>
<Poce otur={pocemon[5]} setexp={setexp12}> </Poce>
            <Poce otur={pocemon[6]} setexp={setexp22}> </Poce>
            <Poce otur={pocemon[7]} setexp={setexp32}> </Poce>
            <Poce otur={pocemon[8]} setexp={setexp42}> </Poce>
            <Poce otur={pocemon[9]} setexp={setexp52}> </Poce>

</div>
</div>

</>)

}
