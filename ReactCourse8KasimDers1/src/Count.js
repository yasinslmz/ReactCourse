import React, { useState } from "react";

function Count(){


    const [sayac,setSayac]=useState(0);

    const Artir =()=>{
        
        if (sayac != 10) {
            setSayac(sayac+1);
          }
    }
    const Azalt =()=>{

        if (sayac != 0) {
            setSayac(sayac - 1);
          }

        
    }


    return(
        <div>
            <h2>Count:{sayac}</h2>
        <button className="btn btn-info me-2" onClick={Artir} >Artır</button>
        <button className="btn btn-danger" onClick={Azalt}>Azalt</button>
        </div>

    );


}




export default Count;