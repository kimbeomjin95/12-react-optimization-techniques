import React, { useCallback, useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOuput from './Demo/DemoOuput';

function App() {
  const [showParagraph,setShowParagraph] = useState(false);

  console.log('app running')

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph(prevshowParagraph => !prevshowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOuput show={false}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
