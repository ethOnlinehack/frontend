import React, { useEffect } from 'react';
import { useAuth } from '../../../../../contexts/Auth';
import Router  from "next/router";

const Nfts = () => {
    const { user, isAuthenticated } = useAuth();
    useEffect(() => {
      if (!isAuthenticated) Router.push("/login");
    }, []);
    return (
        <div>
            game nfts
        </div>
    );
};

export default Nfts;