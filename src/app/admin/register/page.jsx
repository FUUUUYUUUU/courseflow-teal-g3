"use client";

import CourseFlowIcon from "@/assets/images/CourseFlowIcon.svg";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/context/authentication";
import { useRouter } from "next/navigation";

export default function adminRegisterPage() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailOK, setIsEmailOK] = useState(false);
  const [isPasswordOk, setIsPasswordOk] = useState(false);
  const [emailStatus, setEmailStatus] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("");
  const { adminRegister } = useAuth();
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    const data = { email, password };
    if (!email) {
      setIsEmailOK(false);
      setEmailStatus("Cannot be blanked");
    } else {
      setIsEmailOK(true);
      setEmailStatus("");
    }
    if (!password || password.length < 7) {
      setIsPasswordOk(false);
      setPasswordStatus(
        "Cannot be blanked and must contain at least 7 characters"
      );
    } else {
      setIsPasswordOk(true);
      setPasswordStatus("");
    }
    if (email && password && password.length >= 7) {
      adminRegister(data);
      router.push("/admin/login");
    }
  }

  return (
    <section className="bg-gradient-to-r from-[#2558DD] to-[#5697FF] h-dvh flex justify-center items-center">
      <form
        className="flex flex-col p-[60px] gap-[40px] bg-white rounded-[8px]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col items-center">
          <Image
            className="mb-[24px] w-[315px]"
            src={CourseFlowIcon}
            alt="course-flow-icon"
            priority
          />
          <p className="text-center text-[24px] text-[#646D89] font-bold leading-[30px]">
            Admin Register
          </p>
        </div>
        {/* <div className="flex gap-5">
          <div className="flex flex-col relative w-full">
            <label htmlFor="email">First Name</label>
            <input
              className="p-[12px] border border-solid border-[#D6D9E4] rounded-[8px] w-full"
              id="email"
              type="email"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter Email"
            />
            <p className="absolute top-[105%] text-red-600 text-[10px] text italic">
              Cannot be blanked
            </p>
          </div>
          <div className="flex flex-col relative w-full">
            <label htmlFor="email">Last Name</label>
            <input
              className="p-[12px] border border-solid border-[#D6D9E4] rounded-[8px] w-full"
              id="email"
              type="email"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Email"
            />
            <p className="absolute top-[105%] text-red-600 text-[10px] text italic">
              Cannot be blanked
            </p>
          </div>
        </div> */}
        <div className="flex flex-col relative">
          <label htmlFor="email">
            Email
            <input
              className="p-[12px] border border-solid border-[#D6D9E4] rounded-[8px]"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </label>
          {!isEmailOK ? (
            <p className="absolute top-[105%] text-red-600 text-[10px] text italic">
              {emailStatus}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col relative ">
          <label htmlFor="password">
            Password
            <input
              className="p-[12px] border border-solid border-[#D6D9E4] rounded-[8px]"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            {!isPasswordOk ? (
              <p className="absolute top-[105%] text-red-600 text-[10px] text italic">
                {passwordStatus}
              </p>
            ) : null}
          </label>
        </div>
        <button className="bg-[#2F5FAC] px-[32px] py-[18px] rounded-[12px] text-[#fff] text-base">
          Register
        </button>
      </form>
    </section>
  );
}
