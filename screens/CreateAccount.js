import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
  const { register, handleSubmit, setValue } = useForm();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const onNext = nextOne => {
    nextOne?.current?.focus();
  };

  const onValid = data => {
    console.log(data);
  };

  useEffect(() => {
    register("firstName", { required: true });
    register("lastName", { required: true });
    register("username", { required: true });
    register("email", { required: true });
    register("password", { required: true });
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={text => setValue("firstName", text)}
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        autoCapitalize={"none"}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={text => setValue("lastName", text)}
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
      />
      <TextInput
        placeholder="Username"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={text => setValue("username", text)}
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        autoCapitalize={"none"}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={text => setValue("email", text)}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        autoCapitalize={"none"}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        onChangeText={text => setValue("password", text)}
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        onSubmitEditing={handleSubmit(onValid)}
        autoCapitalize={"none"}
      />
      <AuthButton
        text="Create Account"
        loading
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
