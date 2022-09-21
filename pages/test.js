import React, { useEffect, useState } from "react";
import { testaa } from "../services/userService";
import { useAuth } from "../contexts/Auth";
import Link from "next/link";
const Test = () => {

  const {user, isAuthenticated} = useAuth()

 
  return (
    <div>

    <Link href="/">
    <button>home </button>
    </Link>
      <h2>{user && user.email}</h2>
    </div>
  );
};

export default Test;
