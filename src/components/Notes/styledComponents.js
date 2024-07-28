// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 0px;
  }
`
export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
  }
`
export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 40px;
`
export const NotesCard = styled.div`
  box-shadow: 0px 4px 16px #475569;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 90%;
  }
`
export const InputElement = styled.input`
  background-color: transparent;
  border-width: 0px;
  width: 100%;
  outline: none;
  color: #475569;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`
export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  padding: 8px 15px 8px 15px;
  cursor: pointer;
  text-align: center;
  align-self: flex-end;
  border-width: 0px;
  border-radius: 5px;
  margin-top: 30px;
  outline: none;
`
export const NoNotesView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
export const NoNotesImage = styled.img`
  width: 250px;
  height: 250px;
`
export const NoNotesHeading = styled.h1`
  color: #475569;
  font-size: 35px;
  font-family: 'Roboto';
`
export const NoNotesDescription = styled.p`
  color: #475569;
  font-size: 25px;
  font-family: 'Roboto';
  margin-top: 2px;
`
export const NotesList = styled.ul`
  align-self: flex-start;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
`
