"use client";
import React from 'react';

interface TranslationDisplayProps {
  translatedText: string;
}

function TranslationDisplay({ translatedText }: TranslationDisplayProps) {
    return (
      <div>
        <div className="shadow border rounded py-2 px-3 text-gray-700 leading-tight">
          {translatedText}
        </div>
      </div>
    );
  }
  
  export default TranslationDisplay;