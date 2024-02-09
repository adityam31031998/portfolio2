import { Delete } from '@material-ui/icons'
import React from 'react'

const Note = ({title,content,handleDelete,id}) => {
  return (
    <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={()=>handleDelete(id)}><Delete  /></button>
    </div>
  )
}

export default Note

























// form.create-note input,
// form.create-note textarea {
//     width: 100%;
//     background-color: yellowgreen;
//     border: none;
//     padding: 4px;
//     outline: none;
//     font-size: 1.1em;
//     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
//     resize: none;
// }

// form.create-note button {
//     position: absolute;
//     right: 18px;
//     bottom: -18px;
//     background-color: #f5ba13;
//     color: #eee;
//     border: none;
//     border-radius: 15px;
//     width: 36px;
//     height: 36px;
//     box-shadow: 0 0 3px 2px black;
//     cursor: pointer;
//     outline: none;
// }