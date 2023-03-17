import './App.css';
import OptionSelection from './components/OptionSelection';
import { Configuration, OpenAIApi } from 'openai';
import { ARRAY_ITEMS } from './AIOptions/options';
import AIResponse from './components/AIResponse';
import { useState } from 'react';

function App() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const selectOption = (optionAI) => {
    setOption(optionAI); 
  };

  const passInput = (e) => {
    setInput(e.target.value)
  }; 

  const reset = () => {
    setInput("");
    setResult("");
  }

    const response = async () => {
      let object = {...option, prompt: input};
      const reply = await openai.createCompletion(object);
      setResult(reply.data.choices[0].text);
    };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
      <OptionSelection arrayItems={ARRAY_ITEMS} selectOption={selectOption} /> 
      ) : (<AIResponse response={response} setInput={passInput} result={result} reset={reset} input={input}/>
      )};

      <footer>&copy; Joeonome 2023</footer>
    </div>
  );
};

export default App;
