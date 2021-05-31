import React from "react";
import { useHistory } from "react-router-dom";

import { useStoriesStore } from "./../../store/stories";
import { useAuthStore } from "./../../store/auth";

import { IAuthStoreFormLoginData } from "../../types/types";

import AnimatedWrapper from "../common/UI/AnimatedWrapper/AnimatedWrapper";

import {
  LoginFormContainer,
  LoginFormTitle,
  LoginFormBody,
  LoginFormLogin,
  LoginFormLoginLabel,
  LoginFormLLoginInput,
  LoginFormPassword,
  LoginFormPasswordLabel,
  LoginFormLPasswordInput,
  LoginFormButtons,
  LoginFormButton,
} from "./LoginForm.styled";

interface IFormState {
  login: string;
  password: string;
}

const LoginForm = (): React.ReactElement => {
  const history = useHistory();

  const { setBestStoriesCliked }: { setBestStoriesCliked: () => void } =
    useStoriesStore();
  const {
    login,
  }: {
    login: (formData: IAuthStoreFormLoginData, history: string | any) => void;
  } = useAuthStore();

  const initialLoginFormState = {
    login: ``,
    password: ``,
  };

  const [loginForm, setLoginForm] = React.useState<IFormState>(
    initialLoginFormState
  );

  const clearForm = () => {
    setLoginForm({ login: ``, password: `` });
  };

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    login(loginForm, history);
    setBestStoriesCliked();
    clearForm();
  };

  const onClearButtonClick = () => {
    clearForm();
  };

  const checkDisabled = () => {
    if (loginForm.login?.length === 0 || loginForm.password?.length === 0)
      return true;
    return false;
  };

  const onEscKeyPress = React.useCallback((e) => {
    if (e.keyCode === 27) {
      clearForm();
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", onEscKeyPress, false);

    return () => {
      document.removeEventListener("keydown", onEscKeyPress, false);
    };
  }, []);

  return (
    <AnimatedWrapper>
      <LoginFormContainer>
        <LoginFormTitle>Enter your data</LoginFormTitle>
        <LoginFormBody onSubmit={onFormSubmit}>
          <LoginFormLogin>
            <LoginFormLoginLabel>Login:</LoginFormLoginLabel>
            <LoginFormLLoginInput
              type="text"
              name="login"
              value={loginForm.login}
              onChange={onFormInputChange}
              placeholder="Your login"
            />
          </LoginFormLogin>

          <LoginFormPassword>
            <LoginFormPasswordLabel>Password:</LoginFormPasswordLabel>
            <LoginFormLPasswordInput
              type="password"
              name="password"
              value={loginForm.password}
              onChange={onFormInputChange}
              placeholder="Your password"
            />
          </LoginFormPassword>

          <LoginFormButtons>
            <LoginFormButton
              type="button"
              onClick={onClearButtonClick}
              disabled={checkDisabled()}
            >
              Clear
            </LoginFormButton>
            <LoginFormButton type="submit" disabled={checkDisabled()}>
              Login
            </LoginFormButton>
          </LoginFormButtons>
        </LoginFormBody>
      </LoginFormContainer>
    </AnimatedWrapper>
  );
};

export default LoginForm;
