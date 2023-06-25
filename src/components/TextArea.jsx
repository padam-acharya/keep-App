import { useState, useEffect } from "react"
export default function TextArea({ addNote, edit: editNote }) {
    const [note, setNote] = useState({
        id: null,
        title: "",
        content: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        if (editNote) {
            setNote(prevState => {
                return {
                    ...prevState,
                    [name]: value
                }
            })
            return
        }
        setNote((prevState) => {
            return {
                ...prevState,
                id: Math.floor(Math.random() * 100000),
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        addNote(note)
        setNote({
            id: null,
            title: "",
            content: ""
        })
    }

    useEffect(() => {
        if (editNote) {
            console.log(editNote)
            setNote(editNote)
        }
    }, [editNote])

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" name="title" value={note.title} placeholder="Title" onChange={handleChange} required />
            <textarea rows="5" name="content" cols="40" placeholder="Content" value={note.content} onChange={handleChange} required />
            <button className="btn">+</button>
        </form>
    )
}