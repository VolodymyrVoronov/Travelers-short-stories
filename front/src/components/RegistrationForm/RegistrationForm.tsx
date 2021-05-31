import React from "react";
import { useHistory } from "react-router-dom";
// @ts-ignore
import FileBase from "react-file-base64";

import { useStoriesStore } from "../../store/stories";
import { useAuthStore } from "./../../store/auth";

import AnimatedWrapper from "./../common/UI/AnimatedWrapper/AnimatedWrapper";

import {
  RegistrationFormContainer,
  RegistrationFormTitle,
  RegistrationFormBody,
  RegistrationFormFullName,
  RegistrationFormFullNameLabel,
  RegistrationFormFullNameInput,
  RegistrationFormAvatar,
  RegistrationFormAvatarLabel,
  RegistrationFormAvatarPreviewContainer,
  RegistrationFormAvatarPreview,
  RegistrationFormLogin,
  RegistrationFormLoginLabel,
  RegistrationFormLoginInput,
  RegistrationFormPassword,
  RegistrationFormPasswordLabel,
  RegistrationFormPasswordInput,
  RegistrationFormButtons,
  RegistrationFormButton,
  RegistrationFormRequired,
} from "./RegistrationForm.styled";

import avatarSample01 from "./../../assets/avatarSample01.svg";
import { IAuthStoreFormRefgistrationData } from "../../types/types";

interface IFormState {
  fullName: string;
  avatar: string;
  login: string;
  password: string;
  password2: string;
}

const RegistrationForm = (): React.ReactElement => {
  const history = useHistory();

  const { setBestStoriesCliked }: { setBestStoriesCliked: () => void } =
    useStoriesStore();

  const {
    registration,
  }: {
    registration: (
      formData: IAuthStoreFormRefgistrationData,
      history: string | any
    ) => void;
  } = useAuthStore();

  const initialLoginFormState = {
    fullName: ``,
    avatar: ``,
    login: ``,
    password: ``,
    password2: ``,
  };

  const [registrationForm, setRegistrationForm] = React.useState<IFormState>(
    initialLoginFormState
  );

  const clearForm = () => {
    setRegistrationForm({
      fullName: ``,
      avatar: ``,
      login: ``,
      password: ``,
      password2: ``,
    });
  };

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRegistrationForm({
      ...registrationForm,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    registration(registrationForm, history);
    setBestStoriesCliked();
    clearForm();
  };

  const onClearButtonClick = () => {
    clearForm();
  };

  const checkDisabled = () => {
    return registrationForm.fullName?.length === 0 ||
      registrationForm.avatar?.length === 0 ||
      registrationForm.login?.length === 0 ||
      registrationForm.password?.length === 0 ||
      registrationForm.password2?.length === 0
      ? true
      : false;
  };

  const arePasswordsEqual = () => {
    return registrationForm.password === registrationForm.password2
      ? true
      : false;
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
      <RegistrationFormContainer>
        <RegistrationFormTitle>
          Fill in the registration form
        </RegistrationFormTitle>
        <RegistrationFormBody onSubmit={onFormSubmit}>
          <RegistrationFormFullName>
            <RegistrationFormFullNameLabel>
              Full name: *
            </RegistrationFormFullNameLabel>
            <RegistrationFormFullNameInput
              type="text"
              name="fullName"
              value={registrationForm.fullName}
              onChange={onFormInputChange}
              placeholder="Example: Max M."
            />
          </RegistrationFormFullName>

          <RegistrationFormAvatar>
            <RegistrationFormAvatarLabel>
              Upload yout avatar: *
            </RegistrationFormAvatarLabel>
            <RegistrationFormAvatarPreviewContainer>
              <FileBase
                type="file"
                multiple={false}
                required
                onDone={({ base64 }: any) =>
                  setRegistrationForm({ ...registrationForm, avatar: base64 })
                }
              />
              <RegistrationFormAvatarPreview
                avatar={registrationForm.avatar || avatarSample01}
              />
            </RegistrationFormAvatarPreviewContainer>
          </RegistrationFormAvatar>

          <RegistrationFormLogin>
            <RegistrationFormLoginLabel>Login: *</RegistrationFormLoginLabel>
            <RegistrationFormLoginInput
              type="text"
              name="login"
              value={registrationForm.login}
              onChange={onFormInputChange}
              placeholder="Your login"
            />
          </RegistrationFormLogin>

          <RegistrationFormPassword>
            <RegistrationFormPasswordLabel>
              Password: *
            </RegistrationFormPasswordLabel>
            <RegistrationFormPasswordInput
              type="password"
              name="password"
              value={registrationForm.password}
              onChange={onFormInputChange}
              placeholder="Your password"
              arePasswordsEqual={arePasswordsEqual()}
            />
          </RegistrationFormPassword>

          <RegistrationFormPassword>
            <RegistrationFormPasswordLabel>
              Repeat password: *
            </RegistrationFormPasswordLabel>
            <RegistrationFormPasswordInput
              type="password"
              name="password2"
              value={registrationForm.password2}
              onChange={onFormInputChange}
              placeholder="Repeat password"
              arePasswordsEqual={arePasswordsEqual()}
            />
          </RegistrationFormPassword>

          <RegistrationFormRequired>
            * These fields are required.
          </RegistrationFormRequired>

          <RegistrationFormButtons>
            <RegistrationFormButton
              type="button"
              onClick={onClearButtonClick}
              disabled={checkDisabled()}
            >
              Clear
            </RegistrationFormButton>
            <RegistrationFormButton
              type="submit"
              disabled={checkDisabled() || !arePasswordsEqual()}
            >
              Registration
            </RegistrationFormButton>
          </RegistrationFormButtons>
        </RegistrationFormBody>
      </RegistrationFormContainer>
    </AnimatedWrapper>
  );
};

export default RegistrationForm;
