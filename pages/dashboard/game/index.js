import React, { useEffect } from 'react';
import { useAuth } from '../../../contexts/Auth';
import Router  from "next/router";

const Games = () => {
  const { user, isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) Router.push("/login");
  }, []);
    return (
        <div>
            HElooo
        </div>
    );
};

export default Games;