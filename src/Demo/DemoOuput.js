import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOuput = (props) => {

  console.log('DemoOutput');

  return <MyParagraph>{props.show ? 'This is show!' : ''}</MyParagraph>

};

export default React.memo(DemoOuput);
