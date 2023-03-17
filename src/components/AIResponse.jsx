import React from 'react';


function AIResponse({ response, setInput, result, reset, input }) {
    return (
        <div className='response'>
    
            <textarea 
            className='text-area' 
            cols="50" 
            rows="10" 
            value={input}
            onChange={setInput}
            ></textarea>
            <button className='buttonClass' onClick={response}>Generate content</button>
            <button className='buttonClass reset' onClick={reset} >Reset</button>
            <h3 className="result">{result.length > 0 ? result: ""}</h3>
        </div>
    );
}

export default AIResponse;