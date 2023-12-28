import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Field, Form, FormikProvider, useFormik } from "formik";
import Input from "../ui/Input";
import * as Yup from "yup";
import Button from "../ui/Button";
import { generateAndRegisterUserPseudo } from "../../utils/game";
import { FaCheck } from "react-icons/fa6";
import { showToastMessage } from "../../utils/common";

const SignUpForm = () => {
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
    passwordConfirm: Yup.string().when("password", (password, field) =>
      password
        ? field.required(`Le champ est requis`).oneOf(
            [Yup.ref("password")],
            `
            Le mot de passe et la confirmation ne correspondent pas`
          )
        : field
    ),
  });

  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const email = values.email;
      const password = values.password;
      try {
        createUserWithEmailAndPassword(auth, email, password).then(() => {
          generateAndRegisterUserPseudo(email);
          showToastMessage("Inscription réussie", "success");
        });
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
          label="Mot de passe"
          placeholder="••••••••••••"
          error={{
            name: formik.errors.password,
            touched: formik.touched.password,
          }}
        />
        <Field
          type="password"
          id="passwordConfirm"
          as={Input}
          name="passwordConfirm"
          icon="IoMdLock"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirm}
          label="Confirmez mot de passe"
          placeholder="••••••••••••"
          error={{
            name: formik.errors.passwordConfirm,
            touched: formik.touched.passwordConfirm,
          }}
        />
        <div className="flex justify-end mt-4">
          <Button type="submit">
            <FaCheck className="mx-2" /> S'inscrire
          </Button>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default SignUpForm;
