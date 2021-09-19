import React, { useEffect, useState } from "react";

import User from "../../../components/Users/models/user.model";
import UserCard from "../../../components/Users/UserCard/UserCard";
import { getData } from "../../../service/api";
import { Container, Title, Row } from "../../../components/LayoutStyles/Styles";
import { ReactSVG } from 'react-svg'
import { UserList } from "./Styles";
import addIcon from '../../../assets/icons/add-circle.svg'
import { Link } from "react-router-dom";

const Users: React.FC<{}> = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getData("/users", setUser);
  }, []);

  return (
    <Container>
      <Row>
        <Title>Usuários</Title>
      </Row>
      
      <UserList>
        <Link to="/new-user">
        <div style={{alignItems: 'center', display: 'flex', width: '270px', justifyContent: 'center'}} >
          <div  style={{display: 'block', width: '100%', textAlign: 'center'}}>
          <ReactSVG src={addIcon} style={{width: '80px', margin: '0 auto'}}/>
          Adicionar Usuário
          </div>
         
        </div>
        </Link>

        {users.map((user: User) => (
          <UserCard
            key={user.cpf}
            name={user.name}
            phone={user.name}
            cpf={user.cpf}
            email={user.email}
          />
        ))}
      </UserList>
    </Container>
  );
};

export default Users;
