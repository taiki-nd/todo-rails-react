import React from 'react'
import styled from 'styled-components'

export const EditTodo = () => {
  return (
    <>
      <h1>EditTodo</h1>
      <h2>CurrentTodo</h2>
      <EditInputAndBtn>
        <EditInput 
          type="text"/>
        <EditBtn>UpdateTodo</EditBtn>
      </EditInputAndBtn>
      <h2>CurrentStatus</h2>
      <div>
        Complete Incomplete
      </div>
      <h2>EditStatus</h2>
      <div>
        <CompleteBtn>完了</CompleteBtn>
        <IncompleteBtn>未完了</IncompleteBtn>
        <DeleteBtn>削除</DeleteBtn>
      </div>
    </>
  )
}

const EditInputAndBtn = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const EditInput = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 10px;
`

const EditBtn = styled.button`
  width: fit-content;
  height: 40px;
  background: #ccffcc;
  border: none;
  font-weight: 500;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`

const CompleteBtn = styled.button`
  width: fit-content;
  font-size: 20px;
  padding: 0 5px;
  margin: 0 5px;
  &:hover{
    background-color: #ccffcc;
  }
`

const IncompleteBtn = styled.button`
  width: fit-content;
  font-size: 20px;
  padding: 0 5px;
  margin: 0 5px;
  &:hover{
    background-color: #ccffcc;
  }
`

const DeleteBtn = styled.button`
  width: fit-content;
  font-size: 20px;
  padding: 0 5px;
  margin: 0 5px;
  &:hover{
    background-color: #cc3366;
  }
`
