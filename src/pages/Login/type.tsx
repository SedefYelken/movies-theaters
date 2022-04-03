import { useEffect } from "react";
import "./style.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAppDispatch } from "../../store/type";
import {
  setUserInfo,
  IUserInfo,
  userInfoValue,
} from "../../store/slices/userSlice";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfoStoreValue: IUserInfo = useSelector(userInfoValue);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      password: Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, "Must be exactly 6 digits")
        .max(6, "Must be exactly 6 digits"),
    }),
    onSubmit: () => handleFormSubmit(),
  });

  const handleFormSubmit = () => {
    navigate("/movies");
  };

  useEffect(() => {
    dispatch(
      setUserInfo({
        userInfo: {
          ...userInfoStoreValue,
          name: values.name,
        },
      })
    );
  }, [values.name]);

  return (
    <form className="App App-header" onSubmit={handleSubmit}>
      <img className="img mb2" src={require("../../img/profil.png")} />
      <div>
        <input
          className="input-area"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          value={values.name}
        ></input>
        {errors.name ? <div className="error-style">*{errors.name}</div> : null}
      </div>
      <div>
        <input
          type="password"
          className="input-area"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          value={values.password}
          maxLength={6}
        ></input>
        {errors.password ? (
          <div className="error-style">*{errors.password}</div>
        ) : null}
      </div>
      <div>
        <button type="submit" className="button mt3" name="btnLogin">
          Giriş Yap
        </button>
      </div>
    </form>
  );
};

export default Login;
