import "./styles.scss";

import Avatar from "react-avatar";

import User from "../models/user.model";
import { Link } from "react-router-dom";
import editIcon from "../../../assets/icons/create-sharp.svg";
import { ReactSVG } from "react-svg";
import { Row } from "../../LayoutStyles/Styles";

const UserCard: React.FC<User> = ({ name, cpf, phone, email }) => {
  return (
    <>
      <div className="user">
        <div className="user-name">
          <Avatar name={name} round={true} size="60" />
          <span>{name}</span>
        </div>
        <div className="user-attributes">
          <div className="attribute">
            Nome: <span>{name}</span>
          </div>
          <div className="attribute">
            E-mail: <span>{email}</span>
          </div>
          <div className="attribute">
            Telefone: <span>{phone}</span>
          </div>
          <div className="attribute">
            CPF:
            <span>
              {cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
            </span>
          </div>
        </div>
        <Link to={`/edit-user/${cpf}`}>
          <Row style={{ justifyContent: "end" }}>
            <ReactSVG src={editIcon} style={{ width: "20px" }} />
            Editar Usuário
          </Row>
        </Link>
      </div>
    </>
  );
};

export default UserCard;
