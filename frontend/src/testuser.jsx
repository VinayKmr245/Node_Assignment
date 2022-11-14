import React from 'react';
import axios from 'axios'

function testuser() {
    function sendreq(){
        const tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZhc2FpQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYXV0aG9yaXphdGlvbiIsImlhdCI6MTY2Njk1NzM2MCwiZXhwIjoxNjY2OTU3NjYwfQ.ddmEHsADvlXGTfE341eDkby6kVbNRSa4-gTud_mTRAQ'
        axios.get("http://localhost:5000/get",{
            headers:{
                'authorization':`Bearer ${tokenStr}`,
            }
        }).then((data)=>{
            console.log(data.data);
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <button onClick={sendreq} >send data</button>
    </div>
  )
}

export default testuser