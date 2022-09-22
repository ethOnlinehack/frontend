import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import SignupForm from "../components/Form/index";
import LoginForm from "../components/loginForm";
import { useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import Link from "next/link";
import ButtonComponent from "../components/Button";
import FileUpload from "../components/Upload";
import { API } from "../services/routes";
import SimpleCard from "../components/SimpleCard";
export default function Home() {
  const { user, isAuthenticated } = useAuth();
  useEffect(() => {}, []);
  const handleChange =(info)=>{
   
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
  
      if (info.file.status === 'done') {
        console.log(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        console.error(`${info.file.name} file upload failed.`);
      }
    
  }
  return (
    <div className={styles.container}>
    <ButtonComponent>HIII</ButtonComponent>
   <FileUpload withCredentials={true} url={API.FILE_UPLOAD.URL} maxCount={1} onChange={handleChange}/>
        <ButtonComponent onClick={()=>console.log("hiiii")} loading={false}>zied </ButtonComponent>
        <Link href="/test">
        <button>test </button>
      </Link>
      {user && user.email}
      <LoginForm />
      <div style={{display: "flex",
    alignItems: "center",
    justifyContent: "center"}}>
      <SimpleCard>
        <SignupForm/>
      </SimpleCard>
      </div>
    </div>
  );
}
