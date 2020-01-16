import React, { useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";

export default function Header() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    loading
  } = useAuth0();

  useEffect(
    user => {
      console.log(user);
    },
    [user]
  );

  if (loading) return <div className="header">Fetching User...</div>;

  return (
    <div className="header">
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
        <div className="user-info">
          <img src={user.picture} alt="User Avatar" />
          <p>{user.name}</p>
          <button onClick={() => logout()}>Log out</button>
        </div>
      )}
    </div>
  );
}
