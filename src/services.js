import axios from "axios"
const baseUrl = "http://localhost:3001/contacts"

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(res => res.data)
        .catch(err => console.log(err))
}

const createNew = (newContact) => {
    return axios
        .post(baseUrl, newContact)
        .then(res => res.data)
        .catch(err => console.log(err))
}

const edit = (contact) => {
    return axios
        .put(`${baseUrl}/${contact.id}`, contact)
        .then(res => res.data)
        .catch(err => console.log(err))
}

export {
    getAll,
    createNew,
    edit
}