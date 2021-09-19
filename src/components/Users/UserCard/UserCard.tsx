import './styles.scss';

import Avatar from 'react-avatar';

import User from '../models/user.model';

const UserCard: React.FC<User> = ({ name, cpf, phone, email }) => {

  return (
    <>
      <div className="user">
        <div className="user-name">
          <Avatar name={name} round={true} size="60" />
          <span>{name}</span>
        </div>
        <div className="user-attributes">
          <div className="attribute">Nome: <span>{name}</span></div>
          <div className="attribute">E-mail: <span>{email}</span></div>
          <div className="attribute">Telefone: <span>{phone}</span></div>
          <div className="attribute">CPF: <span>{cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</span></div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
