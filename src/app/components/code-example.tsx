"use client";

import { useEffect } from "react";
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')

function CodeExample() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const code = `
const res = await fetch("https://api.translate.tomyo.io/predict", {
  method: "POST",
  body: JSON.stringify({
    text: "Hello my friends",
  }),
  headers: {"Content-Type": "application/json" }
});

console.log(await res.json());
`;

  const response = `
  {
    "Сайн байна уу найзуудаа",
  }
`;

  return (
    <>
      <div>
        <p className="mb-0">Request</p>
        <pre className="border rounded w-full py-4 pl-6 pr-8 text-gray-700 mb-3 min-h-[250px]">
          <code className="language-js">
            {code}
          </code>
        </pre>
      </div>
      <div>
        <p className="mb-0">Response</p>
        <pre className="border rounded w-full py-4 pl-6 pr-8 text-gray-700 mb-3 min-h-[250px]">
          <code className="language-json">
            {response}
          </code>
        </pre>
      </div>
    </>
  );
};

export default CodeExample;