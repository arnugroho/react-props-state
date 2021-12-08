import React, {useState} from "react";

function Count() {
    // Example Immutable
    // props.name = 'Immutable'
    const [hitung, setHitung] = useState(0)

    const add = () =>{
        setHitung(hitung + 1)
    }
    return (
        <div>
            <h1>Count : {hitung}</h1>
            <button onClick={()=>add()}>Tambah</button>
        </div>
    )
}

export default Count;