import { useState} from 'react';
import style from "./style1.module.css";
export default function Poce({otur,setexp}){


    const array_pocemon=[ {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
     {id: 11, name: 'Metapod', type: 'bug', base_experience: 72}, 
     {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178}, 
     {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112}, 
     {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
       {id: 133, name: 'Eevee', type: 'normal', base_experience: 65} ];
       var index=0;
       for (let i = 0; i < 8; i++) {
        if(array_pocemon[i].id==otur){
             index=i; 
       }
       else{}
        
     }
   let img_id=array_pocemon[index].id;
    var img_id1=img_id.toString();
    if(img_id1.length==1){
        img_id1="0"+"0"+img_id1;
    }
    else if(img_id1.length==2){
       img_id1="0"+img_id1;
    }
    else{
      
    }
  
    setexp(array_pocemon[index].id);

return(
<><div className={style.groupOne} >
   <h1>{array_pocemon[index].id}</h1>
   <h2> {array_pocemon[index].name} </h2> 
   <img  className={style.img} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${img_id1}.png`}></img>
   <p>Type: {array_pocemon[index].type}</p>
   <p>bsx: {array_pocemon[index].base_experience} </p>
   
   </div>
</>
)

}
