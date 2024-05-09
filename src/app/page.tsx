"use client";
import { useState } from "react";
import Header from "./components/header";
import TranslationInput from "./components/translation-input";
import TranslationDisplay from "./components/translation-display";
import CodeExample from "./components/code-example";
import Container from "./components/container";
import LanguageSwitch from "./components/language-switch";

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
      <Container>
        <main className="flex min-h-screen flex-col items-center">
          <div className="w-full flex justify-between items-center mt-6">
            <LanguageSwitch language="English" setLanguage={() => { }} />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
            <LanguageSwitch language="Mongolian" setLanguage={() => { }} />
          </div>
          <div className="relative w-full md:gap-x-4 grid sm:grid-cols-2 py-4 md:mt-2 overflow-auto">
            <TranslationInput onTranslate={handleOnTranslate} />
            <TranslationDisplay loading={loading} translatedText={translatedText} />
          </div>
          <div className="relative md:gap-x-4 grid sm:grid-cols-2 py-4">
            <CodeExample />
          </div>
        </main>
      </Container>
    </>
  );
}
