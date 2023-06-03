
import { FaTrash, FaEdit } from "react-icons/fa"

export default function Note({ id, title, content, delete: deleteNote, edit }) {

    return (
        <div className="note-container">
            <h3>{title}</h3>
            <p>{content}</p>

            <button className="delete-btn" title="Delete note" onClick={() => {
                deleteNote(id)
            }}><FaTrash /></button>
            <button className="edit-btn" title="Edit note" onClick={() => {
                edit(id)
            }}><FaEdit /></button>

        </div>
    )
}