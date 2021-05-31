import React from "react";
import { ToastContainer, toast } from "react-toast";

import { useAuthStore } from "./../../../../store/auth";

import { colors } from "./../../../../styles/colorsPalette";

const SnackBar = (): React.ReactElement => {
  const showSuccess = () =>
    toast.success("Success! 😃", {
      backgroundColor: `${colors.blackOpacity06}`,
      color: "#50c878",
    });
  const showError = () =>
    toast.error("Something went wrong. 😥 Try again!", {
      backgroundColor: `${colors.blackOpacity06}`,
      color: "#fe8484",
    });

  const {
    isAuthorizingSuccessed,
    isAuthorizingFailed,
  }: { isAuthorizingSuccessed: boolean; isAuthorizingFailed: boolean } =
    useAuthStore();

  React.useEffect(() => {
    if (isAuthorizingSuccessed) {
      showSuccess();
    }

    if (isAuthorizingFailed) {
      showError();
    }
  }, [isAuthorizingFailed, isAuthorizingSuccessed]);

  return (
    <>
      <ToastContainer position="bottom-right" delay={5000} />
    </>
  );
};

export default SnackBar;
