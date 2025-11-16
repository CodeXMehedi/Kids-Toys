 import { useLocation } from "react-router";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const location = useLocation();
  const auth = getAuth();

  const defaultEmail = location.state?.email || "";
  const [email, setEmail] = useState(defaultEmail);

  const handleReset = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast(error);
      });
  };

  return (
    <div className="flex bg-amber-100 justify-center min-h-screen items-center">
      <form onSubmit={handleReset} className="w-4/12 flex flex-col items-center card p-6 shadow-xl bg-white">
        <h2 className="text-2xl font-semibold mb-3">Reset Password</h2>

        <label>Email</label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="btn btn-neutral mt-4">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
