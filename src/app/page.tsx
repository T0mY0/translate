"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "./components/header";
import TranslationInput from "./components/translation-input";
import TranslationDisplay from "./components/translation-display";
import CodeExample from "./components/code-example";

export default function Home() {
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOnTranslate = async (text: string) => {
    setLoading(true);
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
    setLoading(false);
  }

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex md:gap-x-4 grid sm:grid-cols-2 py-4 overflow-auto">
          <TranslationInput onTranslate={handleOnTranslate} />
          <TranslationDisplay loading={loading} translatedText={translatedText} />
        </div>
        <div className="relative flex md:gap-x-4 grid sm:grid-cols-2 py-4">
          <CodeExample />
        </div>
      </main>
    </>
  );
}
