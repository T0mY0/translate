function TranslationDisplay({ translatedText }) {
    return (
      <div>
        <div className="shadow border rounded py-2 px-3 text-gray-700 leading-tight">
          {translatedText}
        </div>
      </div>
    );
  }
  
  export default TranslationDisplay;