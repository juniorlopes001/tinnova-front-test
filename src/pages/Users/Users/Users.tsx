import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  BodyHalfBackgroundGray,
  BodyHalfBackgroundPurple,
  ButtonAdd,
  Container,
  Row,
  WrapperBackground,
} from '../../../components/LayoutStyles/Styles';
import User from '../../../components/Users/models/user.model';
import UserCard from '../../../components/Users/UserCard/UserCard';
import { getData } from '../../../service/api';
import { UserList } from './Styles';

const Users: React.FC<{}> = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users") as any);
    console.log(localUsers);
    
    setUser(localUsers);
  }, []);

  return (
      <WrapperBackground>
        <BodyHalfBackgroundPurple />
        <BodyHalfBackgroundGray />
        <Container>
        <Row
          style={{
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <h1 style={{color: '#fff'}}>Usuários</h1>
          <Link to="/new-user">
            <ButtonAdd>Adicionar Usuário</ButtonAdd>
          </Link>
        </Row>
        <UserList>
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
      </WrapperBackground>
  );
};

export default Users;
