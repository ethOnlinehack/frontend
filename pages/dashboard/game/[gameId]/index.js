import React, { useEffect } from 'react';
import { useAuth } from '../../../../contexts/Auth';
import Router  from "next/router";

const Game = () => {
    const { user, isAuthenticated } = useAuth();
    useEffect(() => {
      if (!isAuthenticated) Router.push("/login");
    }, []);
    return (
        <div>
            Game page
        </div>
    );
};

export default Game;