import React from "react";
import { Title, Row } from '../../../components/LayoutStyles/Styles';
import { UserForm } from "../../../components/Users/UserForm/UserForm";


const UserNew: React.FC<{}> = () => {
  return (
    <>
    <Row>
    <Title>Adicionar Usuário</Title>
    </Row>
    
    <UserForm/>
    </>
  )
};

export default UserNew;