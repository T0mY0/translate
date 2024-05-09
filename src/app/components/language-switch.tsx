import React from "react";
type LanguageSwitchProps = {
  language?: string
  setLanguage: any
}
export default function LanguageSwitch(props: LanguageSwitchProps) {
  const { language, setLanguage } = props;
  return (
    <div>
      <select className="shadow focus:outline-none focus:shadow-outline border-none bg-transparent text-center font-bold"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">{language}</option>
        {language !== "English" && <option disabled value="en">English</option>}
        <option disabled value="ko">Korean</option>
        <option disabled value="zh">Chinese</option>
        {language !== "Mongolian" && <option disabled value="mn">Mongolian</option>}
      </select>
    </div>
  )
}
