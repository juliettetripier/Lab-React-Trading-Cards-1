'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <h1>Welcome to Balloonicorn's Trading Card site!</h1>
      <a href ="/cards"> This is the cards page!</a>
      <img src = "/static/img/balloonicorn.jpg" />
    </React.Fragment>);

}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
