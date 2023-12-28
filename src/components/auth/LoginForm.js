import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Field, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FaCheck } from "react-icons/fa6";
import { showToastMessage } from "../../utils/common";

const LoginForm = () => {
  const auth = getAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(`Email invalide`).required(`Email requis`),
    password: Yup.string()
      .min(8, `Min 8 caractères`)
      // .matches(/[0-9]/, `${t("validation.require-number", { ns: "common" })}`)
      // .matches(/[a-z]/, `${t("require-lowercaseLetter", { ns: "common" })}`)
      // .matches(
      //   /[A-Z]/,
      //   `${t("validation.require-uppercaseLetter", { ns: "common" })}`
      // )
      // .matches(/[^\w]/, `${t("require-symbol", { ns: "common" })}`)
      .required(`Mot de passe requis`),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const email = values.email;
      const password = values.password;
      try {
        await signInWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            // const user = userCredential.user;
            showToastMessage("Connexion réussie", "success");
          }
        );
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <Field
          type="email"
          id="email"
          as={Input}
          name="email"
          icon="IoMdMail"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="johndoe@domain.com"
          label="Email"
          error={{
            name: formik.errors.email,
            touched: formik.touched.email,
          }}
        />
        <Field
          type="password"
          id="password"
          as={Input}
          name="password"
          icon="IoMdLock"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="••••••••••••"
          label="Mot de passe"
          error={{
            name: formik.errors.password,
            touched: formik.touched.password,
          }}
        />
        <div className="flex justify-end mt-4">
          <Button type="submit">
            <FaCheck className="mx-2" /> Se connecter
          </Button>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
