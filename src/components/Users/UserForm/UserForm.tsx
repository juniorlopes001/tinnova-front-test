import { Formik, Field, FormikProps, Form } from "formik";
import React, { useState } from "react";
import { Input } from "../../Input/Input";
import { Button, Container } from "../../LayoutStyles/Styles";
import User from "../models/user.model";
import schema from "./schema";
import "./styles.scss";
import { api, sendData } from '../../../service/api';


export const UserForm: React.FC<{}> = () => {
  const initialValues: User = {
    name: "",
    email: "",
    cpf: "",
    phone: "",
  };

  function onSubmit(values: any, actions: any) {
    sendData("/users", values)
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnMount
        render={({ values, errors, isValid }) => (
          <Form>
            <Input label="Nome Completo" name="name" />

            <Input label="E-mail" name="email" />

            <Input label="CPF" name="cpf" />

            <Input label="Telefone" name="phone" />

            <Button
              type="submit"
              disabled={!isValid}
              className={!isValid ? "invalid" : ""}
            >
              Cadastrar
            </Button>
          </Form>
        )}
      />
    </Container>
  );
};
