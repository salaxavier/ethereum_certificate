import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import web3 from "./web3";
import certificate from "./certificate";


export default function QueryParamsExample() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
  let query = useQuery();

  return (
    <div>
      <div>
        <h1>Certificate Validation</h1>
        <hr />
        <p><strong>Name:</strong> {query.get("name")} </p>
        <p><strong>Course:</strong> {query.get("title")} </p>
        <p><strong>Qualification Level:</strong> {query.get("type")} </p>
        <p><strong>University:</strong> {query.get("university")} </p>
        <p><strong>Year of Graduation:</strong> {query.get("graduation")} </p>
        <p><strong>Certificate Issuer:</strong> {query.get("issuer")} </p>
        <p><strong>Transaction ID:</strong> {query.get("transaction")} </p>
        <button>Validate</button>
      </div>
    </div>
  );
}
