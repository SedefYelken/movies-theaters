import { useEffect } from "react";
import "./style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../store/type";
import {
  setUserInfo,
  IUserInfo,
  userInfoValue,
} from "../../store/slices/userSlice";
import { useSelector } from "react-redux";
import './style.css'

const EditInformation = () => {
  const dispatch = useAppDispatch();
  const userInfoStoreValue: IUserInfo = useSelector(userInfoValue);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: userInfoStoreValue?.userInfo?.name
        ? userInfoStoreValue?.userInfo?.name
        : "",
      email: userInfoStoreValue?.userInfo?.email
        ? userInfoStoreValue?.userInfo?.email
        : "",
      phoneNumber: userInfoStoreValue?.userInfo?.phoneNumber
        ? userInfoStoreValue?.userInfo?.phoneNumber
        : "",
      address: userInfoStoreValue?.userInfo?.address
        ? userInfoStoreValue?.userInfo?.address
        : "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email("Invalid email format").required("Required"),
      phoneNumber: Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be exactly 11 digits"),
      address: Yup.string().required(),
    }),
    onSubmit: () => handleFormSubmit(),
  });

  const handleFormSubmit = () => {
    dispatch(
      setUserInfo({
        userInfo: {
          ...userInfoStoreValue,
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          address: values.address,
        },
      })
    );
  };

  return (
    <form className="form-header" onSubmit={handleSubmit}>
      <div>
      <label className="label-area">Name : </label>
        <input
          className="input-area-edit"
          name="name"
          onChange={handleChange}
          value={values.name}
        ></input>
        {errors.name ? <div className="error-style">*{errors.name}</div> : null}
      </div>
      <div className="mt3">
        <label className="label-area">Email Address : </label>
        <input
          type="email"
          className="input-area-edit"
          name="email"
          onChange={handleChange}
          value={values.email}
        ></input>
        {errors.email ? (
          <div className="error-style">*{errors.email}</div>
        ) : null}
      </div>
      <div className="mt3">
        <label className="label-area">Phone Number : </label>
        <input
          className="input-area-edit"
          name="phoneNumber"
          onChange={handleChange}
          value={values.phoneNumber}
          maxLength={11}
        ></input>
        {errors.phoneNumber ? (
          <div className="error-style">*{errors.phoneNumber}</div>
        ) : null}
      </div>
      <div className="mt3">
        <label className="label-area">Address : </label>
        <textarea
          className="textarea-style"
          name="address"
          onChange={handleChange}
          value={values.address}
        ></textarea>
        {errors.address ? (
          <div className="error-style">*{errors.address}</div>
        ) : null}
      </div>
      <div >
        <button type="submit" className="button-edit mt3" name="btnEdit">
          Edit Information
        </button>
      </div>
    </form>
  );
};

export default EditInformation;
