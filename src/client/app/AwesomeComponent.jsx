import React from 'react';

class InputSession extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: null,
    };
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleClick() {
    alert(this.state.inputValue);
  }
  render() {
    return(
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="input-group">
            <input type="text" className="form-control" ref="leltext" placeholder="Search for..." onChange={(e) => this.handleChange(e)} />
            <span className="input-group-btn">
              <button className="btn btn-default btn-success" type="button" onClick={() => this.handleClick()}>Enter session</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

class Front extends React.Component {
  render() {
    return (
      <div>
        <h1 className="slogan">Stick.<span className="highlight">It</span></h1>
        <InputSession />
      </div>
    )
  }
}

export default Front;
