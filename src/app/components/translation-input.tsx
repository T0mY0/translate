"use client";
import { useState, FC } from 'react';

interface TranslationInputProps {
  onTranslate: (text: string) => void;
}

const TranslationInput: FC<TranslationInputProps> = ({ onTranslate }) => {
    const [text, setText] = useState('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onTranslate(text);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-4 pl-6 pr-8 text-gray-700 mb-3 min-h-[250px] leading-tight focus:outline-none focus:shadow-outline resize-none"
            rows={4}
            placeholder="Орчуулах үгсээ бичнэ үү"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Орчуулах
          </button>
        </form>
      </div>
    );
  }
  
  export default TranslationInput;