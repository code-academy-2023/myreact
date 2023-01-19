import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
function MyHook(props) {
  const [fname, setFname] = useState(props.fname);

    return (
        <div className='container'>
            <h2>MyHook</h2>
            <input  onChange={e=>setFname(e.target.value)}/>
            <p>Hello {fname}</p>
            <Button  onClick={()=>setFname("No name")}>Set to NoName</Button>
        </div>
    );
}

export default MyHook;