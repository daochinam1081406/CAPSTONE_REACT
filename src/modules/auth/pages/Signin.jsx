import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import { signin } from "../slices/authSlice";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onSubmit",
  });

  const [searchParams] = useSearchParams();

  const { currentUser, isLoading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSignin = async (values) => {
    try {
      await dispatch(signin(values)).unwrap();
      alert("Đăng nhập thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleError = (errors) => {
    console.log(errors);
  };

  if (currentUser) {
    // Nếu có thông tin đăng nhập của user => điều hướng về trang home
    const url = searchParams.get("from") || "/";
    return <Navigate to={url} replace />;
  }

  return (
    <div>
      <h1>Signin</h1>

      <form onSubmit={handleSubmit(handleSignin, handleError)}>
        <div>
          <label>Tài Khoản</label>
          <input
            {...register("taiKhoan", {
              required: {
                value: true,
                message: "Tài khoản không được để trống",
              },
            })}
          />
          {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
        </div>

        <div>
          <label>Mật Khẩu</label>
          <input
            {...register("matKhau", {
              required: {
                value: true,
                message: "Mật khẩu không được để trống",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message:
                  "Mật khẩu phải có ít nhất 8 kí tự, gồm 1 kí tự hoa, 1 kí tự thường và 1 kí tự số",
              },
            })}
          />
          {errors.matKhau && <span>{errors.matKhau.message}</span>}
        </div>

        {error && <p>{error}</p>}

        <button disabled={isLoading}>Đăng Nhập</button>
      </form>
    </div>
  );
}
