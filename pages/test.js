import React, { useEffect, useState } from "react";
import { testaa } from "../services/userService";
import { useAuth } from "../contexts/Auth";
import Link from "next/link";
import Router from "next/router";
const Test = () => {
  const { user, isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) Router.push("/login");
  }, []);
  return (
    <div>
      <Link href="/">
        <button>home </button>
      </Link>
      {console.log(user)}
      <h2>{user && user.email}</h2>
    </div>
  );
};

export default Test;
