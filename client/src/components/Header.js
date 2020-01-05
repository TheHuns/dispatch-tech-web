import React from "react";
import { useAuth0 } from "../react-auth0-spa";

export default function Header() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    loading
  } = useAuth0();

  if (loading) return <div className="header">Fetching User...</div>;

  return (
    <div className="header">
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
        <div className="user-info">
          <p>{user.name}</p>
          <button onClick={() => logout()}>Log out</button>
        </div>
      )}
    </div>
  );
}
