import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const TodoList = () => {

  const [todos, setTodos] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios.get('/api/v1/todos.json')
    .then(resp => {
      //console.log(resp.data)
      setTodos(resp.data);
    })
    // .catch(e => {
    //   console.log(e);
    // })
  }, [])

  const onClickDeleteAll = () => {
    const alert = window.confirm('Do you really want to delete all TodoLists?')
    if(alert){
      axios.delete('/api/v1/todos/destroy_all')
      .then(resp => {
        setTodos([])
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  const onClickComplete = (index, val) => {
    const val2 = {
      id: val.id,
      name : val.name,
      is_completed: !val.is_completed
    }
    axios.patch(`/api/v1/todos/${val.id}`, val2)
    .then(resp => {
      const newTodos = [...todos]
      newTodos[index].is_completed = resp.data.is_completed
      setTodos(newTodos)
    })
  }

  return (
    <>
      <h1>ToDo Lists</h1>
      <InputAndRemoveAll>
        <Input type="text" placeholder="SearchTodo..." onChange={e =>{setSearchName(e.target.value)}} />
        <RemoveAllBtn onClick={onClickDeleteAll}>RemoveAll</RemoveAllBtn>
      </InputAndRemoveAll>
      <div>
        {todos.filter((val) => {
          if (searchName === ""){
            return val
          }else if(val.name.toLowerCase().includes(searchName.toLowerCase())){
            return val
          }
        }).map((val, key) =>{
          return(
            <TodoContent key={key}>
              <TodoName is_completed={val.is_completed}>{val.name}</TodoName>
              <Btns>
                {val.is_completed ? (
                  <CompleteBtn onClick={() => onClickComplete(key,val)}>未完了</CompleteBtn>
                ):(
                  <CompleteBtn onClick={() => onClickComplete(key,val)}>完了</CompleteBtn>
                )}
                <EditBtn>編集</EditBtn>
              </Btns>
            </TodoContent>
          )
        })}
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
const TodoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding 10px;
  border: solid 1px #000;
  border-radius: 8px;
  box-shadow: 2px 2px 2px #ccffcc;
`

const TodoName = styled.span`
  font-size: 24px;
  ${({ is_completed }) => is_completed && `
    opacity: 0.4;
  `}
`

const Btns = styled.div`
justify-content: space-around;
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

const EditBtn = styled.button`
  width: fit-content;
  font-size: 20px;
  padding: 0 5px;
  margin: 0 5px;
  &:hover{
    background-color: #ccffcc;
  }
`