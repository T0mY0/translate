"use client";
import { useState } from "react";
import Image from "next/image";
import TranslationInput from "./components/translation-input";
import TranslationDisplay from "./components/translation-display";

export default function Home() {
  const [translatedText, setTranslatedText] = useState('');

  const handleOnTranslate = async (text: string) => {
    // submit text to translate API
    console.warn('source text: ', text);
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    console.warn('translated text: ', data);
    setTranslatedText(data.message);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>

      <div className="relative flex md:gap-x-4">
        <TranslationInput onTranslate={handleOnTranslate} />
        <TranslationDisplay translatedText={translatedText} />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      </div>
    </main>
  );
}
