import React, {useState} from 'react';

 function SignupForm() {
 const [name, email] = useState("");
 console.log(`name : ${name.state}, email : ${email.state}`)
  return (
    <form>
      <label htmlFor="name">
        Name :
        <input type="text" name="name" id="name" placeholder="Mary" />
      </label>
      <br />
      <label htmlFor="email">
        Email :
        <input
          type="email"
          name="email"
          id="email"
          placeholder="mary.poppins@disney.fr"
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={() => SignupForm()}>
        Submit
      </button>
    </form>
  );
}


export default SignupForm;
