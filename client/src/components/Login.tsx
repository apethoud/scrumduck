import TextInput from "./common/TextInput";
import { Button, PatternBackground, PrimaryBox, SecondaryHeader } from "./styledComponents/common";
import { useFormik } from "formik";

export default function Login() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <PatternBackground>
        <PrimaryBox>
          <SecondaryHeader style={{ textAlign: "center" }}>
            Login
          </SecondaryHeader>
          <TextInput
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextInput
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button primary type="submit" style={{ marginTop: 16 }}>
            Login
          </Button>
        </PrimaryBox>
      </PatternBackground>
    </form>
  )
}