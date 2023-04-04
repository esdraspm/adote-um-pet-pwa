import './signup.css'
import Logo from '../../assets/AdoteUmPet.svg'

const hello = () => {
  
//  history.push('/home');
};

export function Signup() {
  return (
    <div className='container'>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="form">
        <input type="text" placeholder='name'/>
      </div>
      <div className="form">
        <button className='signup'>cadastre-se</button>
        <button onClick={hello}>Nome</button>
      </div>
    </div>
  )
}