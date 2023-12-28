import React, { useContext, useState } from "react";
import Button from "../components/ui/Button";
import { Field, Form, FormikProvider, useFormik } from "formik";
import Input from "./ui/Input";
import * as Yup from "yup";
import { changeUserPseudo } from "../api/user";
import { AuthContext } from "../store/AuthContext";
import { showToastMessage } from "../utils/common";

const ChangePseudo = ({ userPseudo }) => {
  const { currentUser } = useContext(AuthContext);
  const [currentPseudo, setCurrentPseudo] = useState(userPseudo);
  const validationSchema = Yup.object().shape({
    pseudo: Yup.string()
      .required(`Le pseudo est requis`)
      .min(3, `Min 3 caractères`),
  });

  const initialValues = {
    email: currentUser.email,
    pseudo: currentPseudo,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      changeUserPseudo(currentUser.email, values.pseudo).then((res) => {
        showToastMessage(res.message, res.type);
        res.type === "success" && setCurrentPseudo(values.pseudo);
      });
    },
  });

  return (
    <div className="mt-4 max-w-[500px]">
      <FormikProvider value={formik}>
        <Form>
          <Field
            type="email"
            id="email"
            as={Input}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            label="Email"
            error={{
              name: formik.errors.email,
              touched: formik.touched.email,
            }}
            readOnly={true}
          />
          <Field
            type="text"
            id="pseudo"
            as={Input}
            name="pseudo"
            onChange={formik.handleChange}
            value={formik.values.pseudo}
            label="Pseudo"
            error={{
              name: formik.errors.pseudo,
              touched: formik.touched.pseudo,
            }}
          />
          <div className="flex justify-end">
            <div className="m-w-[250px]">
              <Button
                type="submit"
                disabled={formik.values.pseudo === currentPseudo && true}
              >
                Modifier
              </Button>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default ChangePseudo;
