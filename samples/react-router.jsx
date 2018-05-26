import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from 'react-router-dom';

let users = [
  { id: 1, name: 'Suzuki Ichiro' },
  { id: 2, name: 'Tanaka Jiro' },
  { id: 3, name: 'Sato Hanako' },
];

const Wrapper = ({ children }) => (
  <div className="wrapper">
    <header>
      <h1>React Router v4</h1>
    </header>
    <main>{children}</main>
  </div>
);

const Index = () => (
  <div id="contents">
    <h2>Index</h2>
    <div className="action">
      <Link to="/users/create">Create</Link>
    </div>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Create = () => (
  <div id="contents">
    <h2>Create</h2>
    <FormWithRouter />
  </div>
);

const Edit = ({ match }) => (
  <div id="contents">
    <h2>Edit</h2>
    <FormWithRouter
      user={users.filter(user => user.id == match.params.id)[0]}
    />
  </div>
);

class Form extends Component {
  constructor(props) {
    super(props);
    let { user } = this.props;
    this.state = { name: user ? user.name : '' };
  }
  handleKeyDown(e) {
    this.setState({ name: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { user, history } = this.props;
    const { name } = this.state;
    if (!user) {
      const id = Math.max(...users.map(user => user.id));
      users.push({ id: id + 1, name: name });
    } else {
      users = users.map(data => {
        if (data.id == user.id) {
          return { id: user.id, name: name };
        }
        return data;
      });
    }
    history.push('/');
  }
  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleKeyDown.bind(this)}
        />
      </form>
    );
  }
}
const FormWithRouter = withRouter(Form);

render(
  <Router>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/users/create" component={Create} />
        <Route path="/users/:id" component={Edit} />
      </Switch>
    </Wrapper>
  </Router>,
  document.getElementById('root')
);
