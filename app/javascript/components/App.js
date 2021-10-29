import React from 'react'
import styled from 'styled-components'
import { AddTodo } from './AddTodo'
import { EditTodo } from './EditTodo'
import { TodoList } from './TodoList'
import { Switch, Route, Link } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Navbar>
        <Logo>ToDoList</Logo>
        <Actions>
          <Link to="/todos">
            <Action>ToDoLists</Action>
          </Link>
          <Link to="/todos/new">
            <Action>NewTodo</Action>
          </Link>
        </Actions>
      </Navbar>
      <Wrapper>
        <Switch>
          <Route exact path="/todos" component={TodoList} />
          <Route exact path="/todos/new" component={AddTodo} />
          <Route path="/todos/:id/edit" component={EditTodo} />
        </Switch>
      </Wrapper>
    </>
  )
}

const Navbar = styled.nav`
  background-color: #ccffcc;
  min-height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 3px;
`

const Actions = styled.ul`
  display: flex;
  width: 400px;
  max-width: 40%;
  justify-content: space-around;
  list-style: none;
`

const Action = styled.li`
font-weight: bold;
font-size: 20px;
opacity: 0.7;
&:hover {
  opacity: 1;
}
`

const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`