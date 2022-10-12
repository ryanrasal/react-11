import React from 'react';

function SignupForm() {
  const [value, setValue] = React.useState();
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );

  const display = (e) => {
    e.preventDefault();
    console.log('name & email here');
  };
}
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
    <button type="submit" onClick={() => display()}>
      Submit
    </button>
  </form>
);

export default SignupForm;
