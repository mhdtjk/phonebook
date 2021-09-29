import React from 'react'

export default function CreateNewContact({ contact, setContact, createNewContact }) {
    return (
        <form onSubmit={createNewContact(contact)} >
            <fieldset>
                <legend>create new contact:</legend>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} />
                <label htmlFor="phone"> PhoneNumber: </label>
                <input type="text" id="phone" value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} />
                <button type="submit">Save</button>
            </fieldset>
        </form>
    )
}
