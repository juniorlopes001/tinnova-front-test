import "./styles.scss";

import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { api, sendData } from "../../../service/api";
import { Input } from "../../Input/Input";
import {
  Button,
  ButtonRemove,
  Container,
  Row,
} from "../../LayoutStyles/Styles";
import User from "../models/user.model";
import schema from "./schema";
import { Spinner } from "../../SpinnerLoading/SpinnerLoading";
import { Link } from "react-router-dom";

export const UserForm: React.FC<{}> = () => {
  const [isLoading, setLoading] = useState(false);

  const { cpf } = useParams() as any;
  const isAddMode = !cpf;
  const history = useHistory();

  let initialValues: User = {
    name: "",
    email: "",
    cpf: "",
    phone: "",
  };

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
  });

  function onSubmit(values: any, actions: any) {
    setLoading(true);
    setTimeout(() => {
        sendData("/users", values);
      setLoading(false);
    }, 1000); //a requisição está instantanea, adicionado um timeout para rodar
    alert('Dados criados...')
    history.push("/");
  }

  function updateUser(values: any, actions: any) {
    removeItem();
    onSubmit(values, actions)
    alert('Dados atualizados...')
    history.push("/");
  }

  function filterByCPF(array: any[]) {
    return array.filter((user: any) => user.cpf === cpf);
  }

  useEffect(() => {
    if (window.location.href.includes("/edit-user")) {
      const users = JSON.parse(localStorage.users);
      if (users) {
        const currentUser = filterByCPF(users);
        setFormValues(currentUser[0]);
      } else {
        api.get(`/users?cpf=${cpf}`).then((res) => {
          const users = res.data as any;
          const currentUser = filterByCPF(users);
          setFormValues(currentUser[0]);
        });
      }
    }
  }, []);

  function removeItem() {
    let getLocalStorage = JSON.parse(localStorage.getItem("users") as any);
    const index = getLocalStorage.findIndex((user: User) => user.cpf === cpf);
    getLocalStorage.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(getLocalStorage));
    if(isAddMode){
      history.push("/");
    }
  }

  return (
    <Container>
      <Formik
        initialValues={formValues || initialValues}
        enableReinitialize
        validationSchema={schema}
        onSubmit={isAddMode ? onSubmit : updateUser}
        validateOnMount
        render={({ values, errors, isValid }) => (
          <Form>
            <Input label="Nome Completo" name="name" type="text" />

            <Input label="E-mail" name="email" type="email" />

            <Input label="CPF" name="cpf" type="text" max="10" />

            <Input label="Telefone" name="phone" type="phone" />
            <Row>
              
              <Button
                type="submit"
                disabled={!isValid}
                className={!isValid ? "invalid" : ""}
                
              >
                {isLoading ? <Spinner /> : !isAddMode ? "Editar" : "Cadastrar"}
              </Button>
              {window.location.href.includes("edit-user") ? (
                <ButtonRemove onClick={removeItem}>Deletar</ButtonRemove>
              ) : (
                ""
              )}
            </Row>
          </Form>
        )}
      />
    </Container>
  );
};
