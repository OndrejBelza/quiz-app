import { FC, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
const Login: FC<{
  loginHandler: (username: string) => void;
}> = ({ loginHandler }) => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <div className="p-grid p-dir-col p-align-center">
        <div className="p-col-4">
          <h4>Login</h4>
        </div>
        <div className="p-col-4">
          <div className="p-fluid p-align-start p-justify-start">
            <div className="p-field">
              <label htmlFor="username">Username</label>
              <InputText
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <Button
              label="Login"
              disabled={!username.length}
              onClick={() => loginHandler(username)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
