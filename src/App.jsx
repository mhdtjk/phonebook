import React, { useState, useEffect } from 'react'
import { getAll, createNew, edit } from './services'
import ShowContact from "./components/ShowContact"
import CreateNewContact from "./components/CreateNewContact"
import SearchContact from './components/SearchContact'

export default function App() {
    const [contacts, setContacts] = useState([])
    const [contact, setContact] = useState({ name: "", phone: "" })
    const [findContact, setFindContact] = useState("")

    useEffect(() => {
        getAll().then(res => setContacts(res))
    }, [])

    const createNewContact = (contact) => (e) => {
        e.preventDefault()
        const newContact = {
            name: contact.name,
            phonenumber: contact.phone
        }
        createNew(newContact).then(res => setContacts(contacts.concat(res)))
        setContact({ name: "", phone: "" })
    }

    const editContactHandler = (contact) => (e) => {
        e.preventDefault()
        edit(contact).then(res => setContacts(contacts.map(i => i.id !== contact.id ? i : res)) )
    }

    return (
        <div>
            <SearchContact findContact={findContact} setFindContact={setFindContact} />
            <CreateNewContact contact={contact} setContact={setContact} createNewContact={createNewContact} />
            {findContact === "" ?
                contacts.map(i => <ShowContact key={i.id} data={i} editContactHandler={editContactHandler} />) :
                contacts.filter(i => i.name.includes(findContact)).map(i => <ShowContact key={i.id} data={i} editContactHandler={editContactHandler} />)
            }
        </div>
    )
}
