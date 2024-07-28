// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  border: 1px solid #aab8c8;
  background-color: transparent;
  padding: 12px 10px 12px 10px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 30%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
  }
`
export const ListTitle = styled.h1`
  color: #334155;
  font-size: 25px;
  font-family: 'Roboto';
`

export const ListDescription = styled.p`
  color: #334155;
  font-size: 15px;
  font-family: 'Roboto';
`
