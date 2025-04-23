import React, { useState } from 'react'
import ShowContact from "./components/ShowContact"
import CreateNewContact from "./components/CreateNewContact"
import SearchContact from './components/SearchContact'

export default function App() {
    const [contacts, setContacts] = useState([])
    const [findContact, setFindContact] = useState("")

    const addToContacts = (contact) => (e) => {
        e.preventDefault()

        if (contact.name === "" || contact.phone === "") {
            alert("Please fill in all fields")
            return
        }
        if (contacts.some(i => i.name === contact.name)) {
            alert("Contact already exists")
            return
        }

        const newContact = {
            id: Date.now(),
            name: contact.name,
            phone: contact.phone
        }

        setContacts(prev => [...prev, newContact])
    }

    const editContact = (contact) => (e) => {
        e.preventDefault()
        if (contact.name === "" || contact.phone === "") {
            alert("Please fill in all fields")
            return
        }
        setContacts(contacts.map(i => i.id !== contact.id ? i : { ...i, name: contact.name, phone: contact.phone }))
    }

    const deleteContact = (contact) => {
        setContacts(contacts.filter(i => i.name !== contact.name))
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ maxWidth: '600px' }}>
                <SearchContact findContact={findContact} setFindContact={setFindContact} />
                <CreateNewContact addToContacts={addToContacts} />
                {findContact === "" ?
                    contacts.map(i => <ShowContact key={i.id} data={i} editContactHandler={editContact} deleteContactHandler={deleteContact} />) :
                    contacts.filter(i => i.name.includes(findContact)).map(i => <ShowContact key={i.id} data={i} editContactHandler={editContact} deleteContactHandler={deleteContact} />)
                }
            </div>
        </div>
    )
}
