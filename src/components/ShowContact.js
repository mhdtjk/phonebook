import React, {useState} from 'react'
import EditContact from './EditContct'

export default function ShowContact({editContactHandler, data}) {
    const [showEdit, setShowEdit] = useState(false)

    const style = {
        border: "1px solid", 
        padding: '1rem', 
        margin: '.2rem'
    }

    return(
        <div style={style} >
            <p>Name: {data.name} </p>
            <p>Phone Number: {data.phonenumber}</p>
            <button onClick={() => setShowEdit(!showEdit) } >Edit</button>
            {showEdit? <EditContact data={data} editContactHandler={editContactHandler} />: null}    
        </div>
    )
}


