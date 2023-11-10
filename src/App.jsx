import { useState } from 'react';
import './App.css';
import Forminput from './components/FormInputs';


const App = () => {
  const [values,setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Nazwa użytkownika powinna zawierać conajmniej 1 dużą literę, i cyfrę!",
      label: "Nazwa użytkownika",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder: "Email",
      errorMessage: "To nie jest poprawny adres e-mail!",
      label:"Email" 
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder: "birthday",
      label:"Data urodzenia",
      required: true
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder: "Password",
      errorMessage: "Hasło powinno mieć długość 8-20 znaków zawierać dużą literę, cyfrę i znak specjalny!",
      label:"Hasło",
      required: true
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder: "confirmPassword",
      errorMessage: "Hasła do siebie nie pasują!",
      label:"Potwierdź hasło",
      pattern: values.password,
      required: true
    }
    
  ]

  const handleSubmit = (e) =>{
    e.preventDefault();
  };

  const onChange = (e) =>{
    setValues({...values,[e.target.name]: e.target.value})
  }


  return (
  <div className='App'>  
    <form onSubmit={handleSubmit}>
      <h1>Zarejestruj się! </h1>
      {inputs.map((input)=>(
        <Forminput key={input.id} {...input} value = {values[input.name]} onChange = {onChange}/>
      ))}
      <button>Prześlij</button>
    </form>
  </div>
  );
}


export default App;
