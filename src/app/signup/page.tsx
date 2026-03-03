"use client";

import { useActionState, useEffect } from "react";
import { signupAction } from "./signupAction";

const Signup = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState(
    signupAction,
    {
      error: "",
      redirectTo: undefined,
    },
  );

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="new_login">Login:</label>
        <input type="text" required name="new_login" />
      </div>
      <div>
        <label htmlFor="new_password">Password:</label>
        <input type="password" required name="new_password" />
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <button disabled={isPending}>login</button>
    </form>
  );
};

export default Signup;
