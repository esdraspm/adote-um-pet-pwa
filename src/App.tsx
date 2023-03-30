import { FaGoogle,  FaFacebook, FaApple} from 'react-icons/fa';
import './App.css'
import Logo from './assets/AdoteUmPet.svg'


export default function App() {
  return (
    <div className='container'>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="form">
        <input type="text" placeholder='email'/>
        <input type="password" placeholder='senha' />
        <button>Acessar</button>
      </div>
      <div className='alternative'>
        <div className='divider'></div>
        <span>ou acesse com</span>
        <div className='divider rotate180deg'></div>
      </div>
      <div className='socials'>
        <div className='social-button'>
<FaGoogle className='google'/>
        </div>
        <div className='social-button'>
<FaFacebook className='facebook'/>
        </div>
        <div className='social-button'>
<FaApple className='apple'/>
        </div>
         
      </div>
      
    </div>
  )
}