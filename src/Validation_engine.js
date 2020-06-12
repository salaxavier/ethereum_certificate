import React, { Component } from "react";
import "./App.css";
import web3 from "./web3";
import certificate from "./certificate";

class Validation extends Component {

  state = {
    validate_hash: "",
    validate_issuer: "",
    revoked: ""
  };

  async componentDidMount() {

    var validate_hash = await certificate.methods.validate_hash("e2cd1a676796158c04a7e974624994478e81d7d3b958c20b939b43db89e8a8c9").call();
    if (validate_hash == true) {
      validate_hash = "Validated";
    } else {
      validate_hash = "Forged!";
    }
    this.setState({ validate_hash });

    var validate_issuer = await certificate.methods.validate_issuer("0x19b...").call();
    if (validate_issuer == true) {
      validate_issuer = "Validated";
    } else {
      validate_issuer = "Issuer does not match!";
    }
    this.setState({ validate_issuer });

    var revoked = await certificate.methods.revoked().call();
    console.log(revoked);
    if (revoked == true) {
      revoked = "Revoked";
    } else {
      revoked = "Not Revoked";
    }
    this.setState({ revoked });

  }

  render() {
    return (
      <div>
        <h1>Certificate Validation</h1>
        <hr />
        <p>
          <strong>Certificate data:</strong>{" "}
          {this.state.validate_hash}
        </p>
        <p>
          <strong>Issuer:</strong>{" "}
          {this.state.validate_issuer}
        </p>
        <p>
          <strong>Revocation status:</strong>{" "}
          {this.state.revoked}
        </p>
      </div>
    );
  }
}

export default Validation;
