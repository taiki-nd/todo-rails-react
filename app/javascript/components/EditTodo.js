import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const EditTodo = (props) => {

  const initialTodoStatus = {
    id: null,
    name: "",
    is_completed: false
  };

  const [currentTodo, setCurrentTodo] = useState(initialTodoStatus)

  const getTodo = id => {
    axios.get(`/api/v1/todos/${id}`)
    .then(resp => {
      setCurrentTodo(resp.data);
    })
    .catch(e => {
      console.log(e);
    })
  }

  useEffect(() => {
    getTodo(props.match.params.id)
    //console.log(props.match.params.id)
  }, [props.match.params.id]);

  const onChangeEditTodo = (e) => {
    const { name, value } = e.target;
    setCurrentTodo({...currentTodo, [name]: value});
  }

  return (
    <>
      <h1>EditTodo</h1>
      <h2>CurrentTodo</h2>
      <EditInputAndBtn>
        <EditInput 
          type="text"
          id="name"
          name="name"
          value={currentTodo.name}
          onChange={onChangeEditTodo} />
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
