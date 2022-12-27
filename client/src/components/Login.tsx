import { useState } from "react";
import TextInput from "./common/TextInput";
import { PatternBackground, PrimaryBox, SecondaryHeader, Text } from "./styledComponents/common";

export default function Login() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  return (
    <PatternBackground>
      <PrimaryBox>
        <SecondaryHeader style={{ textAlign: "center" }}>Login</SecondaryHeader>
        <TextInput
          name="Email"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          name="Password"
          value={password}
          setValue={setPassword}
          inputType="password"
        />
      </PrimaryBox>
    </PatternBackground>
  )
}