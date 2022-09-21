import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/loginForm' 
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    console.log("eee")
  },[])
  return (
    <div className={styles.container}>
   <LoginForm/>
    </div>
  )
}
