import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn mr-3 btn-circle btn-outline">
          G
        </button>
        <button className="btn mr-3 btn-circle btn-outline">F</button>
        <button className="btn btn-circle btn-outline">I</button>
      </div>
    </div>
  );
};

export default SocialLogin;
