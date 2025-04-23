import React, {useState} from 'react'
import EditContact from './EditContct'

export default function ShowContact({data, editContactHandler, deleteContactHandler}) {
    const [showEdit, setShowEdit] = useState(false)

    const style = {
        border: "1px solid", 
        padding: '1rem', 
        margin: '.2rem'
    }

    return(
        <div style={style} >
            <p>Name: {data.name} </p>
            <p>Phone Number: {data.phone}</p>
            <button onClick={() => setShowEdit(prev => !prev)} >Edit</button>
            <button onClick={() => deleteContactHandler(data)} >Delete</button>
            {showEdit && <EditContact data={data} editContactHandler={editContactHandler} />}    
        </div>
    )
}


