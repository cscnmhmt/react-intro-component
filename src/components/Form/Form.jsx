import React, { useState } from 'react';
import * as F from './form.module.css';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
  const [isLastNameEmty, setIsLastNameEmty] = useState(false);
  const [isEmailEmty, setIsEmailEmty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!firstName) {
      setIsFirstNameEmpty(true);
    }
    if (!lastName) {
      setIsLastNameEmty(true);
    }
    if (!password) {
      setIsPasswordEmpty(true);
    }
    // mail validation with regex
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setIsEmailEmty(true);
    }
  }

  function handleFirstName(e) {
    setFirstName(e.target.value);
    setIsFirstNameEmpty(false);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
    setIsLastNameEmty(false);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    setIsEmailEmty(false);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    setIsPasswordEmpty(false);
  }

  return (
    <div className={F.formContainer}>
      <button className={F.trialBtn}>
        <strong>Try it free 7 days</strong> then $20/mo. thereafter
      </button>
      <form className={F.form} onSubmit={(e) => handleSubmit(e)}>
        {/* first name input */}
        <div>
          <input
            className={`${F.input} ${isFirstNameEmpty ? F.invalid : ''}`}
            type='text'
            placeholder='First Name'
            name='firstName'
            onChange={(e) => handleFirstName(e)}
            value={firstName}
          />
          {/* first name warning */}
          {isFirstNameEmpty && (
            <div className={F.warning}>
              <img src='./icon-error.svg' alt='' />
              <span>First name can not be empty</span>
            </div>
          )}
        </div>
        {/* last name input */}
        <div>
          <input
            className={`${F.input} ${isLastNameEmty ? F.invalid : ''}`}
            type='text'
            placeholder='Last Name'
            name='lastName'
            onChange={(e) => handleLastName(e)}
            value={lastName}
          />
          {/* last name warning */}
          {isLastNameEmty && (
            <div className={F.warning}>
              <img src='./icon-error.svg' alt='' />
              <span>Last Name can not be empty</span>
            </div>
          )}
        </div>
        {/* email input */}
        <div>
          <input
            className={`${F.input} ${isEmailEmty ? F.invalid : ''}`}
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={(e) => handleEmail(e)}
            value={email}
          />
          {/* email warning */}
          {isEmailEmty && (
            <div className={F.warning}>
              <img src='./icon-error.svg' alt='' />
              <span>Looks like this is not an email</span>
            </div>
          )}
        </div>
        {/* password input */}
        <div>
          <input
            className={`${F.input} ${isPasswordEmpty ? F.invalid : ''}`}
            type='password'
            placeholder='Password'
            name='password'
            onChange={(e) => handlePassword(e)}
            value={password}
          />
          {/* password warning */}
          {isPasswordEmpty && (
            <div className={F.warning}>
              <img src='./icon-error.svg' alt='' />
              <span>Password can not be empty</span>
            </div>
          )}
        </div>
        {/* form button */}
        <button className={F.formButton} type='submit'>
          Claim your free trial
        </button>
        <p className={F.formDescription}>
          By clicking the button you are agreeing to our{' '}
          <a href='#'>Terms and Services</a>{' '}
        </p>
      </form>
    </div>
  );
};

export default Form;
