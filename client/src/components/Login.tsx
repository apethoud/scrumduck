import TextInput from "./common/TextInput";
import { Button, PatternBackground, PrimaryBox, SecondaryHeader } from "./styledComponents/common";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function Login() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Must be a valid email address"),
      password: Yup.string()
        .required("Required")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "Password must contain lowercase, uppercase, number, and symbol")
    }),
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
            onBlur={formik.handleBlur}
            errors={formik.touched.email && formik.errors.email ? formik.errors.email : null}
          />
          <TextInput
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            errors={formik.touched.password && formik.errors.password ? formik.errors.password : null}
          />
          <Button primary type="submit" style={{ marginTop: 16 }}>
            Login
          </Button>
        </PrimaryBox>
      </PatternBackground>
    </form>
  )
}