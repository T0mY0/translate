"use client";
import { useState } from 'react';

function TranslationInput({ onTranslate }) {
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onTranslate(text);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            rows={4}
            placeholder="Text to translate"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Translate
          </button>
        </form>
      </div>
    );
  }
  
  export default TranslationInput;