var Greeting = React.createClass({
  render: () => {
    return (
      <p>Hello, Universe</p>
    )
  }
});

ReactDOM.render(
  <Greeting/>,
  document.getElementById('root-div')
);
