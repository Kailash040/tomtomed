import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { loginUser } from '../app/auth/loginSlice';

const Protected = (props) => {
  const { Component } = props;
  // const userAuth = useSelector((state) => state.loginAuth.isAuthenticated === false);
  // console.log(userAuth)
  // const navigate = useNavigate();
  // useEffect(() => {
  //   let login = userAuth

  //   if (!login) {

  //     navigate('/login')
  //   }
  // })
  // 
  const navigate = useNavigate();
  // useEffect(()=>{
  //     let login = localStorage.getItem("accessToken");
  //     if(!login){
        
  //         navigate('/login')
  //     }
  // })
  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected