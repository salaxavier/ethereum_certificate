import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import web3 from "./web3";
import certificate from "./certificate";
import Validation from "./Validation_engine";
var sha256 = require('js-sha256');

export default function QueryParamsRout() {
  return (
    <Router>
      <QueryParams />
    </Router>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParams() {
  let query = useQuery();

  var hash_data = query.get("name") + query.get("title") + query.get("type") + query.get("university") + query.get("graduation");
  var hash = sha256.create();
  hash.update(hash_data);
  hash.hex();

  return (
    <div>
      <div>
        <h1>Certificate Data</h1>
        <hr />
        <p><strong>Name:</strong> {query.get("name")} </p>
        <p><strong>Course:</strong> {query.get("title")} </p>
        <p><strong>Qualification Level:</strong> {query.get("type")} </p>
        <p><strong>University:</strong> {query.get("university")} </p>
        <p><strong>Year of Graduation:</strong> {query.get("graduation")} </p>
        <p><strong>Certificate Issuer:</strong> {query.get("issuer")} </p>
        <p><strong>Transaction ID:</strong> {query.get("transaction")} </p>
        <p><strong>Recomputed hash:</strong> {hash.hex()} </p>
        <hr />
        <p id="root">
        </p>
      </div>
      ReactDOM.render(<Validation />, document.getElementById('root'));
    </div>
  );
}
