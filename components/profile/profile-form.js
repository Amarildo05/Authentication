import { useRef } from 'react';
import classes from './profile-form.module.css';

function ProfileForm(props) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();           // handling form submission and getting the entered data

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPasswod = newPasswordRef.current.value;

    // here we add validation

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPasswod
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' required ref={newPasswordRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;