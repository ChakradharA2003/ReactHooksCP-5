// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  NotesContainer,
  NotesHeading,
  NotesCard,
  InputElement,
  AddButton,
  NoNotesView,
  NoNotesImage,
  NoNotesHeading,
  NoNotesDescription,
  NotesList,
} from './styledComponents'
import './index.css'

const Notes = () => {
  const [title, changeTitle] = useState('')
  const [notes, changeNotes] = useState('')
  const [notesList, updateNotesList] = useState([])
  const onSubmitForm = event => {
    event.preventDefault()
    const eachNotes = {
      id: uuidv4(),
      title,
      notes,
    }
    updateNotesList(prevState => [...prevState, eachNotes])
    changeTitle('')
    changeNotes('')
  }
  const onChangeTitle = event => changeTitle(event.target.value)
  const onChangeNotes = event => changeNotes(event.target.value)
  const noNotesView = () => (
    <NoNotesView>
      <NoNotesImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNotesHeading>No Notes Yet</NoNotesHeading>
      <NoNotesDescription>Notes you add will appear here</NoNotesDescription>
    </NoNotesView>
  )

  const displayNotesView = () => (
    <NotesList>
      {notesList.map(note => (
        <NoteItem
          key={note.id}
          noteTitle={note.title}
          noteDescription={note.notes}
        />
      ))}
    </NotesList>
  )

  const renderView = () => {
    const view = notesList.length === 0 ? 'NoNotes' : 'DisplayNotes'
    switch (view) {
      case 'NoNotes':
        return noNotesView()
      case 'DisplayNotes':
        return displayNotesView()
      default:
        return null
    }
  }
  return (
    <MainContainer>
      <NotesContainer>
        <NotesHeading>Notes</NotesHeading>
        <NotesCard as="form" onSubmit={onSubmitForm}>
          <InputElement
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <textarea
            type="textarea"
            rows="4"
            placeholder="Take a Note..."
            onChange={onChangeNotes}
          >
            {notes}
          </textarea>
          <AddButton type="submit">Add</AddButton>
        </NotesCard>
        {renderView()}
      </NotesContainer>
    </MainContainer>
  )
}
export default Notes
