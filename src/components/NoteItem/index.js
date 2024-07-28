// Write your code here
import {ListItem, ListDescription, ListTitle} from './styledComponents'

const NoteItem = props => {
  const {noteTitle, noteDescription} = props
  return (
    <ListItem>
      <ListTitle>{noteTitle}</ListTitle>
      <ListDescription>{noteDescription}</ListDescription>
    </ListItem>
  )
}
export default NoteItem
