import React from 'react'

export default function SearchContact({findContact, setFindContact}) {
    return (
        <fieldset>
            <legend>Find:</legend>
            <input type="text" value={findContact} onChange={(e) => setFindContact(e.target.value)} />
        </fieldset>
    )
}
