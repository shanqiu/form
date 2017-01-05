import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ReplyBtns extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>More btns</div>
    )
  }
}

class SelectBox extends Component {
  constructor() {
    super();
    this.state = {
      showReply: false
    }
  }
  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }
  render() {
    return (
      <div>
        <label>Freight Method</label>
        <div classNam="boxGroup">
         <div className="selectBox"></div>
         <div className="selectBox" onClick={this.onClick.bind(this)} href='#'>Ocean Freight</div>
        </div>
        {this.state.showReply && <ReplyBtns />}
      </div>
    )
  }
}
        




class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">  
          <form id="quote" action="" method="post">
            <h3></h3>
            <h4>Overview</h4>
            <fieldset>
              <label>Give your shipment a name</label>
              <input placeholder="" type="text" tabindex="1" required autofocus />
            </fieldset>
            <SelectBox />,
            <fieldset>
              <input placeholder="Your Email Address" type="email" tabindex="2" required />
            </fieldset>
            <fieldset>
              <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
            </fieldset>
            <fieldset>
              <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
            </fieldset>
            <fieldset>
              <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
            </fieldset>
            <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
