import React from 'react'
import {  useParams } from 'react-router-dom';

const UserPost = () => {
    let { userId } = useParams();
console.log(userId)
  return (
    <div>UserPost</div>
  )
}

export default UserPost