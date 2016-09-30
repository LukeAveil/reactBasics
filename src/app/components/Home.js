import React from "react";

export class Home extends React.Component {
  render() {
    return(
      <div>
        <p>In a new Component</p>
        <p>Your name is {this.props.name}</p>
        <div>
          <ul>
            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object
};
