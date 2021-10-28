import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { TodoList } from './TodoList'

export const AddTodo = () => {

  const initialTodoStatus = {
    id: null,
    name: "",
    is_completed: false
  }

  const [todo, setTodo] = useState(initialTodoStatus)

  const InputNewTodo = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo,[name]: value });
  }

  return (
    <>
      <h1>NewTodo</h1>
      <InputAndNew>
        <Input 
          type="text" 
          placeholder="NewTodo..." 
          required
          value={todo.name}
          onChange={InputNewTodo}
          name="name" />
        <NewBtn >AddNewTodo</NewBtn>
      </InputAndNew>
    </>
  )
}

const InputAndNew = styled.div`
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

const NewBtn = styled.button`
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