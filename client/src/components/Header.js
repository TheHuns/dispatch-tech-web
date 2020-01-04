import React from "react";
import { useAuth0 } from '../react-auth0-spa'

export default function Header() {

  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (<div>
      <p>{user.name}</p>
        <button onClick={() => logout()}>Log out</button>
      </div>)}
    </div>
  );
}
