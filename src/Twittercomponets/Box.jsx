import React from 'react'
import './Box.css'
import Button from './Button';

const Box = () => {

  const authButtons = [
    {
      id: 1,
      img: 'google.png',
      text: 'Sign in with Google'
    },
    {
      id: 2,
      img: 'apple-logo.png',
      text: 'Sign in with Apple'
    }
  ];

  const text = [
    { id: 1, inputtext: "Next" },
    { id: 2, inputtext: "Forgot Password" }
  ];

  return (
    <div className="box">
      {authButtons.map(item => (
        <div className="googlebox" key={item.id}>
          <img src={item.img} alt="auth img" />
          <p>{item.text}</p>
        </div>
      ))}

      <div className="input">
        <input type="text" placeholder="Email or phone" />
      </div>

      <div>
        {text.map(item => (
          <Button
            key={item.id}
            givetext={item.inputtext}
            variant={item.inputtext === "Forgot Password" ? "forgot" : "next"}
          />
        ))}
      </div>
      <p className='footer'>Dont't have an accouting up</p>
    </div>
  )
}

export default Box;
