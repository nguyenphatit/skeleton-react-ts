import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Login: FC = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  let auth = useAuth();

  let handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;
    let password = formData.get("password") as string;

    auth.signin({ username, password }, () => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div>
      <h2>{t('Welcome to React')}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>
        <label>
          Password: <input name="password" type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
