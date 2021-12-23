import React, { useRef } from "react";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const onNext = nextOne => {
    nextOne?.current?.focus();
  };

  const onDone = () => {
    alert("done!");
  };

  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
      />
      <TextInput
        placeholder="Username"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        nSubmitEditing={onDone}
      />
      <AuthButton text="Create Account" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}
