import Form from "../../../components/form/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/user/user.slice";
import { initializeApp } from "firebase/app";
import app from "../../../firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const dispatch = useDispatch();

  

  const handleSignupAndLogin = (email: string, pass: string) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        dispatch(
          setUser({
              email: userCredential.user.email,
              token: userCredential.user.refreshToken,
              id: userCredential.user.uid,
          })
      );
        navigate("/");
      })
      .catch((error) => {
        return (
          error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
        );
      });
  };
  return (
    <Form
      title={"로그인"}
      getDataForm={handleSignupAndLogin}
      firebaseError={firebaseError}
    />
  );
};

export default SignUp;
