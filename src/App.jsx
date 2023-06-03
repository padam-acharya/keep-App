import { useState, useEffect } from "react"
import Header from "./components/Header"
import TextArea from "./components/TextArea"
import Note from "./components/Note"
import Footer from "./components/Footer"

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])
  const [edit, setEdit] = useState(null)

  function add(note) {
    setNotes((prevState) => {
      return [
        ...prevState,
        note
      ]
    })
  }

  function deleteNote(id) {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
  }

  function editNote(id) {
    const editableNote = notes.find(note => note.id === id)

    setEdit(editableNote)
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
