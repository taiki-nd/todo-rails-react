import React from 'react'
import styled from 'styled-components'

export const TodoList = () => {
  return (
    <>
      <h1>ToDo Lists</h1>
      <InputAndRemoveAll>
        <Input />
        <RemoveAllBtn>RemoveAll</RemoveAllBtn>
      </InputAndRemoveAll>
      <div>
        
      </div>
    </>
  )
}

const InputAndRemoveAll = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Input = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 10px;
`

const RemoveAllBtn = styled.button`
  width: fit-content;
  height: 40px;
  background: #cc3366;
  border: none;
  font-weight: 500;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
`
