import React from "react";
import "./Input.css";

const axios = require("axios");
const backend_url = process.env.backend_url || "http://localhost:8080";

export default function Input() {
  return (
    <div class="container">
      <form
        /*style={{
          paddingLeft: "30%",
          paddingRight: "30%",
          paddingTop: "30px",
        }}*/
        onSubmit={(event) => {
          event.preventDefault();

          const email = event.target[0].value;
          //call api to add email

          var config = {
            method: "post",
            url: `${backend_url}/api/user/${email}`,
            headers: {},
          };

          axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
              alert("email sent successfully");
            })
            .catch(function (error) {
              console.log(error);
              alert("email error");
            });
        }}
      >
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          style={{ marginLeft: "50%", marginRight: "50%" }}
        >
          Add Email
        </button>
      </form>
    </div>
  );
}
