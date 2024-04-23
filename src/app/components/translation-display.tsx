"use client";
import React from 'react';

interface TranslationDisplayProps {
  translatedText: string;
}

function TranslationDisplay({ translatedText }: TranslationDisplayProps) {
    return (
      <div>
        <label htmlFor="textarea2" className="sr-only">
          Translated text
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-4 pl-6 pr-8 text-gray-700 mb-3 min-h-[250px] leading-tight focus:outline-none focus:shadow-outline resize-none"
          style={{ background: '#f3f3f3', border: '1px solid #ccc' }}
          rows={4}
          value={translatedText}
          readOnly
        ></textarea>
      </div>
    );
  }
  
  export default TranslationDisplay;