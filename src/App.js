import React from 'react'
import './App.css';
import Button from './components/Button.js';

const App = () => {

  const [popupVisible, setPopupVisible] = setState(false)

  const onSettingButtonClicked = () => {
    setPopupVisible(!popupVisible)
  }

  return (
    <div>
      <Button text="main"/>
      <Button text="setting" buttonClick={onSettingButtonClicked}/>
      <Button text="new game" />
      <PopUp isVisible={popupVisible}/>
    </div>
  )
}

export default App;
