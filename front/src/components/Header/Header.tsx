import React from "react";
import decode from "jwt-decode";
import { NavLink } from "react-router-dom";
// @ts-ignore
import { useWindowScrollPosition } from "@withvoid/melting-pot";

import { useStoriesStore } from "./../../store/stories";
import { useAuthStore } from "./../../store/auth";
import { useAuthorsStore } from "./../../store/authors";

import AnimatedWrapper from "../common/UI/AnimatedWrapper/AnimatedWrapper";

import {
  HeaderContainer,
  HeaderLogo,
  HeaderItems,
  HeaderItem,
  HeaderuserLogin,
} from "./Header.styled";

import { colors } from "../../styles/colorsPalette";

interface ILocalStorage {
  fullName: string;
  login: string;
  _id: string;
  token: string;
  result: { login: string | any };
}

const Header = (): React.ReactElement => {
  const {
    getStories,
    getBestStories,
    setBestStoriesCliked,
    setStoriesCliked,
  }: {
    getStories: () => void;
    getBestStories: () => void;
    setBestStoriesCliked: () => void;
    setStoriesCliked: () => void;
  } = useStoriesStore();

  const {
    authData,
    logout,
    userLogin,
    setUserLogin,
  }: {
    authData: string[] | any;
    logout: () => void;
    userLogin: string;
    setUserLogin: (login: string) => void;
  } = useAuthStore();

  const {
    setAuthorStoriesClicked,
  }: { setAuthorStoriesClicked: (condition: boolean) => void } =
    useAuthorsStore();
  console.log(authData);

  const [user, setUser] = React.useState<ILocalStorage | null>(
    JSON.parse(localStorage.getItem("profile") || "{}")
  );

  React.useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken: { exp: number } = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
        setUser(null);
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile") || "{}"));
    setUserLogin(user?.result?.login);
  }, []);

  const { y } = useWindowScrollPosition();

  return (
    <AnimatedWrapper>
      <HeaderContainer position={y > 100}>
        <NavLink to="/main">
          <HeaderLogo
            onClick={() => {
              getBestStories();
              setBestStoriesCliked();
              setAuthorStoriesClicked(false);
            }}
          >
            TSS.
          </HeaderLogo>
        </NavLink>

        <HeaderItems>
          <HeaderItem
            onClick={() => {
              getStories();
              setStoriesCliked();
              setAuthorStoriesClicked(false);
            }}
          >
            <NavLink
              activeStyle={{ backgroundColor: `${colors.whiteOpacity01}` }}
              to="/main/stories"
            >
              Stories
            </NavLink>
          </HeaderItem>
          <HeaderItem
            onClick={() => {
              setAuthorStoriesClicked(true);
            }}
          >
            <NavLink
              activeStyle={{ backgroundColor: `${colors.whiteOpacity01}` }}
              to="/main/authors"
            >
              Authors
            </NavLink>
          </HeaderItem>

          {authData?.token === undefined && user?.token === undefined ? (
            <>
              <HeaderItem onClick={() => setAuthorStoriesClicked(false)}>
                <NavLink
                  activeStyle={{ backgroundColor: `${colors.whiteOpacity01}` }}
                  to="/main/login"
                >
                  Login
                </NavLink>
              </HeaderItem>
              <HeaderItem onClick={() => setAuthorStoriesClicked(false)}>
                <NavLink
                  activeStyle={{ backgroundColor: `${colors.whiteOpacity01}` }}
                  to="/main/registration"
                >
                  Registration
                </NavLink>
              </HeaderItem>
            </>
          ) : (
            <>
              <HeaderItem onClick={() => setAuthorStoriesClicked(false)}>
                <NavLink
                  activeStyle={{ backgroundColor: `${colors.whiteOpacity01}` }}
                  to="/main/write-story"
                >
                  Write Story
                </NavLink>
              </HeaderItem>
              <HeaderItem onClick={() => setAuthorStoriesClicked(false)}>
                <NavLink
                  onClick={() => {
                    logout();
                    setUser(null);
                  }}
                  to="/main"
                >
                  Logout
                  {authData?.token === undefined &&
                  user?.token === undefined ? null : (
                    <HeaderuserLogin>| {userLogin}</HeaderuserLogin>
                  )}
                </NavLink>
              </HeaderItem>
            </>
          )}
        </HeaderItems>
      </HeaderContainer>
    </AnimatedWrapper>
  );
};

export default Header;
