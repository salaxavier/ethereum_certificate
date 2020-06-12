import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import web3 from "./web3";
import certificate from "./certificate";

class App extends Component {

  state = {
    issuer: "",
    message: ""
  };

  async componentDidMount() {
    const issuer = await certificate.methods.issuer().call();
    this.setState({ issuer });
  }

  onSubmit = async event => {
    event.preventDefault();
    //Transactions from this wallet
    web3.eth.defaultAccount = '0x19bb23...';
    var defaultAccount = web3.eth.defaultAccount;

    this.setState({ message: 'Signing the transaction on Ethereum network...' });
    //Send hash to smart contract
    await certificate.methods.set_hash("e2cd1a676796158c04a7e974624994478e81d7d3b958c20b939b43db89e8a8c9").send({
      from: defaultAccount
    });
    this.setState({ message: 'Transaction successfully registered.' });
  };

  render() {
    return (
      <div>
        <h2>Get your Academic Certificate</h2>
        <p>
          Your certificate will be issued by the University's address:{" "}
          {this.state.issuer}
        </p>
        <hr />
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Choose a certificate to be issued among your completed courses: </label>
            <select id="cert">
              <option value="Cybersecurity and Forensics">Cybersecurity and Forensics</option>
            </select>
          </div>
          <button>Issue</button>
        </form>
        <hr />
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
export default App;
