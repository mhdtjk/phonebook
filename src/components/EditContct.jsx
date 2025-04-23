import React, { useState } from 'react'

export default function EditContct({ editContactHandler, data }) {
    const [contact, setContact] = useState({ ...data })
    
    const onChangeHandler = (e) => setContact({ ...contact, [e.target.name]: e.target.value }) 
    
    return (
        <form onSubmit={editContactHandler(contact)} >
            <fieldset>
                <legend>Edit Contact: </legend>
                <label>Name: </label>
                <input type="text" name='name' value={contact.name} onChange={onChangeHandler} />
                <label>PhoneNumber: </label>
                <input type="text" name='phone' value={contact.phone} onChange={onChangeHandler} />
                <button type="submit">Save</button>
            </fieldset>
        </form>
    )
}
