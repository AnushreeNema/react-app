import React from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button>Login</button>
          <button>SignUp</button>
        </div>
      </div>
    </div>
  );
}
