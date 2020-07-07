import React from 'react';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import CreateTodo from './components/create-todo.component.js';
import EditTodo from './components/edit-todo.component';
import TodoList from './components/todos-list.component';
import logo from "./logo.svg";

function App() {
  return (
    <Router>
    <div className="container">

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://codingthesmartway.com" target = "_blank" rel="noopener noreferrer" >
        <img src={logo} width ="30" height = "30" alt="Codingthesmartway.com" />
      </a> 

      <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>

      <div className="collpase nav-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Todos
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Create Todos
            </Link>
          </li>
        </ul>
      </div>

    </nav>

      <h2>MERN-Stack Todo App</h2>
      <Route path="/" exact component={TodoList} />
      <Route path="/edit/:id" exact component={EditTodo} />
      <Route path="/create" exact component={CreateTodo} />
    </div>

    </Router>
  );
}

export default App;
