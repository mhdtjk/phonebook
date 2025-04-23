import { useState } from "react"

export default function CreateNewContact({ addToContacts }) {
    const [contact, setContact] = useState({name: '', phone: ''})

    const onChangeHandler = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={addToContacts(contact)} >
            <fieldset>
                <legend>create new contact:</legend>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={contact.name} onChange={onChangeHandler} />
                <label htmlFor="phone"> PhoneNumber: </label>
                <input type="text" id="phone" name="phone" value={contact.phone} onChange={onChangeHandler} />
                <button type="submit">Save</button>
            </fieldset>
        </form>
    )
}
