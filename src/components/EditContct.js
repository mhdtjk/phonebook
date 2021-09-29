import React, { useState } from 'react'

export default function EditContct({ editContactHandler, data }) {
    const [contact, setContact] = useState({ ...data })
    return (
        <form onSubmit={editContactHandler(contact)} >
            <fieldset>
                <legend>Edit Contact: </legend>
                <label>Name: </label>
                <input type="text" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
                <label>PhoneNumber: </label>
                <input type="text" value={contact.phonenumber} onChange={(e) => setContact({ ...contact, phonenumber: e.target.value })} />
                <button type="submit">Save</button>
            </fieldset>
        </form>
    )
}
