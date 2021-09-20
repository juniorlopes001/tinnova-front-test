import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { ReactSVG } from 'react-svg';

import arrowBackIcon from '../../../assets/icons/arrow-back.svg';
import { primaryColor } from '../../../components/LayoutStyles/colors';
import { Container, Row } from '../../../components/LayoutStyles/Styles';
import { UserForm } from '../../../components/Users/UserForm/UserForm';

const UserNew: React.FC<{}> = () => {
  const history = useHistory();
  function back() {
    history.push("/");
  }


  return (
    <>
      <Container>
      <ReactSVG src={arrowBackIcon} style={{ width: "50px", color: `${primaryColor}`, cursor: "pointer"}} onClick={back}/>
        <Row>
          <h1 style={{color: `${primaryColor}`}}>{window.location.href.includes('edit-user') ? 'Editar usuário' : 'Adicionar Usuário'}</h1>
        </Row>
        <Row>
        <UserForm />
        </Row>

      </Container>
    </>
  );
};

export default UserNew;
