import React, { useState } from "react";

import '../styles/Home.css';

const Home = () => {

  const [message, setMessage] = useState<any>('¿Quieres ser mi novia?');
  const [show, setShow] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    
    setMessage(e.target.value);
  }

  const goToDeclaration = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // console.log(location.search);

    setUrl(window.location.href + `declaration?declarationMessage=${ encodeURIComponent(message) }`);
    setShow(true);
    // navigate(`/declaration?declarationMessage=${ message }`);
  }

  const copyMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();

    navigator.clipboard.writeText(url);
    setIsCopied(true);
  }

  return (
    <div className="form-container">
      <form className="register-form">
        <input 
          id="declaration-message"
          className="form-field"
          type="text"
          placeholder="Write a message for your crush"
          name="declarationMessage"
          value={ message }
          onChange={ handleInputChange }
          autoComplete='off'
        />

        <button 
          className="form-field"
          type="submit"
          onClick={ goToDeclaration }
        >
          Create link
        </button>

        {
          show && 
            <div>
              <input 
                id="declaration-message"
                className="form-field"
                type="text"
                name="declarationMessage"
                value={ url }
                readOnly={true}
              />

              <button
                className="form-field"
                onClick={ copyMessage }
              >
                {
                  !isCopied ?
                    'Copy'
                    :
                    'Copied'
                }
              </button>

            </div>
        }
      </form>
    </div>
  );
}

export default Home;
