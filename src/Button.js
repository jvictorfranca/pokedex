import React from "react";


class Button extends React.Component {
  render(){
    console.log(this.props.length)
    return(
      <button onClick={this.props.action} disabled={this.props.length <= 1}>{this.props.type}</button>
    )
    
  }
}

export default Button;