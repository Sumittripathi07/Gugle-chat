import "./App.css";
import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [output, setOutput] = useState("");
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    organization: "org-b5MOjIvvLEoN6tMBSNSGaOq3",
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const callApi = async (quest) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: quest,
      max_tokens: 1000,
      temperature: 0.5,
    });
    let ans = response.data.choices[0].text;
    setAnswer(ans);
  };

  const handleSubmit = async (e) => {
    setOutput(message);
    e.preventDefault();
    callApi(message);
    e.target.reset();
  };

  const runFunc = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="App">
      <h1>Gugle-Chat</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input rows="1" onChange={runFunc} placeholder="Question?" />
          <p>Question: {output}</p>
          <div>Answer: {answer}</div>
        </form>
      </div>
    </div>
  );
}

export default App;
