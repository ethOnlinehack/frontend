import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SignupForm from "../components/Form/index";
import LoginForm from "../components/loginForm";
import { useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import Link from "next/link";
import SimpleCard from "../components/SimpleCard/index"


export default function Home() {
  const { user, isAuthenticated } = useAuth();
  useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      <Link href="/test">
        <button>test </button>
      </Link>
      {user && user.email}
      <LoginForm />
      <SimpleCard>
        <SignupForm/>
      </SimpleCard>
    </div>
  );
}
