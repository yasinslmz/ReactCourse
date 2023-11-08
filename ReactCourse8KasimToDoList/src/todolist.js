import React, { useState } from "react";

function Todolist(){


    const [gorev,setGorev]=useState([]);
    const [yeniGorev, setYeniGorev] = useState('');

    const gorevEkle =()=>{
        
        if(yeniGorev){
            setGorev([...gorev,yeniGorev]);
            setYeniGorev('');
           
        }

    }
    


    return(
        <div className="mt-2 col-2 mt-5 " >
            <input type="text" className="me-2" id="gorevisim" value={yeniGorev} onChange={(e) => setYeniGorev(e.target.value)}
            placeholder="Yeni görev girin"/>
            <button className="btn btn-success" onClick={gorevEkle}>Ekle</button>
            <h2 className="mt-3">Görevler</h2>
            <div >
            <ul className="list-group">
                {gorev.map((gorevitem,index)=>(
                   
                   <li className="list-group-item" key={index}>{gorevitem}</li>
                ))}
            </ul>
            </div>
            

        </div>
        

    );


}




export default Todolist;