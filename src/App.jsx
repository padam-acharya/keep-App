import { useState, useEffect } from "react"
import Header from "./components/Header"
import TextArea from "./components/TextArea"
import Note from "./components/Note"
import Footer from "./components/Footer"

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])
  const [edit, setEdit] = useState(null)
  const [editId, setEditId] = useState(null)

  function add(note) {
    if (editId) {

      const updatedNotes = notes.map(item => {
        if (note.id === item.id) {
          console.log(note.content, item.title)
          return { ...item, title: note.title, content: note.content }
        }
        return item
      })
      setNotes(updatedNotes)
      setEdit(null)
      setEditId(null)
    }
    else {
      setNotes((prevState) => {
        return [
          ...prevState,
          note
        ]
      })
    }
  }

  function deleteNote(id) {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
  }

  function editNote(id) {
    const editableNote = notes.find(note => note.id === id)

    setEdit(editableNote)
    setEditId(editableNote.id)
    console.log(editableNote.id)
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  return (
    <>
      <Header />
      <TextArea addNote={add} {...notes} edit={edit} />

      <div className="notes">
        {notes.map(note => {
          return <Note key={note.id} {...note} delete={deleteNote} edit={editNote} />
        })}
      </div>
      <Footer />
    </>
  )
}

export default App
