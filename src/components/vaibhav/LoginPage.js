import React from 'react'
import { lightBlue } from 'tailwindcss/colors';
import image from '../../images/Edukith_login_img.svg';
import Google from '../../images/flat_color_icons_google.svg';
import Colors from '../../utils/Colors';
import LoginString from '../../utils/Strings/LoginString';



const LoginPage = () => {
  return (
    <>
      <div className='flex flex-row  '>
        <div className='img  sm:ml-9 flex justify-center items-center w-1/2 h-1/2 sm:flex-col'>
          <img className='bg-cover bg-center h-1/2 w-1/2' src={image} alt="image" />
        </div>
        <div className='form'>
          <h2 className='font-bold'>Login</h2>
          <div className='btn p-1 '>
            <button className='w-32 h-12 mr-3 rounded-lg text-white font-bold text-base font-primayfont ' style={{background:'linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)'}}>MENTEE</button>
            <button className='w-32 h-12 mr-3  rounded-lg' style={{ borderWidth: 1 }} >MENTOR</button>
          </div>
          <label className='inline-block pt-6'>Email</label> <br />
          <input className='w-96  rounded-lg h-10 px-1 ' style={{ borderWidth: 1 }} type="email" placeholder='email@example.com'></input><br />
          <label className='inline-block pt-6'>Password</label> <br />
          <input className='w-96  rounded-lg h-10 px-1' style={{ borderWidth: 1 }} type="password" placeholder=' Your Password here'></input>

         <div className='flex flex-col justify-between'>
        <div>
          <p>LOGIN</p>
        </div>
        <div className='w-96 rounded-lg h-10 text-white font-bold flex justify-center items-center ' style={{background:Colors.buttonBlue}}>
          <img className='mr-4' src={Google} />
          <p >{LoginString.login_google}</p>
        </div>
        <p className='font-bold text-center pt-6'>Forgot Your Username/Password? <span className='text-primary'><a href=''>Click Here</a></span></p>
         </div>
        </div>
      </div>

    </>
  )
}

export default LoginPage