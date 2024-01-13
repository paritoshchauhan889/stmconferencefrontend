import React, { useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { URL } from "../../api/Api";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/auth/forgot-password`, {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
      <div className="container" style={{justifyContent:'center'}}>
        <form onSubmit={handleSubmit}>
          <div className="w-50">
          <h4 className="title">RESET PASSWORD</h4>

<div className="mb-3">
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="form-control"
    id="exampleInputEmail1"
    placeholder="Enter Your Email "
    required
  />
</div>
<div className="mb-3">
  <input
    type="text"
    value={answer}
    onChange={(e) => setAnswer(e.target.value)}
    className="form-control"
    id="exampleInputEmail1"
    placeholder="Enter Your favorite Sport Name "
    required
  />
</div>
<div className="mb-3">
  <input
    type="password"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    className="form-control"
    id="exampleInputPassword1"
    placeholder="Enter Your New Password"
    required
  />
</div>

<button type="submit" className="btn btn-primary">
  RESET
</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPasssword;