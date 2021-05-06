import React from "react";
import { message } from "antd";

const axios = require("axios");
const backend_url = process.env.REACT_APP_backend_url || "http://localhost:8080";

export default function EmailForm() {
  const handleSubmit = (event) => {
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
        if (response.data.success) {
          message.success("email sent successfully");
        } else {
          console.log(response.data.message);
          message.error(response.data.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        message.error("email error");
      });
  };
  return (
    <div
      class="h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#edf2f7" }}
    >
      <div class="shadow rounded to w-full md:w-1/4 border-solid border-t-4 border-purple p-6 my-2">
        <div class="flex justify-between items-center">
          <h4 class="uppercase text-grey text-xs text-wide tracking-wide  ">
            Subscribe
          </h4>
        </div>
        <h3 class="text-grey-dark text-sm font-medium font-sans leading-normal">
          Subscribe to EmailerList
        </h3>
        <p class="my-3 text-grey font-light tracking-wide font-sans leading-normal text-sm">
          By Subscribing you will stay up to date with all the latest tests that
          HackerEarth is conducting!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            class="border-solid border w-full rounded px-3 py-2"
            placeholder="Email"
          />

          <button class="bg-purple text-white px-3 py-2 rounded w-full mt-4">
            Subscribe now!
          </button>
        </form>
      </div>
    </div>
  );
}
