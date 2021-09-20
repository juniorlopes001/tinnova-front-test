import styled from "styled-components";
import { danger, disableBackground, primaryColor, purpleAlternative } from "./colors";

export const WrapperBackground = styled.div`
  display: flex;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
`;

export const BodyHalfBackgroundPurple = styled.div`
  background-color: ${purpleAlternative};
  height: 100vh;
  width: 40%;
  z-index: 1;
`;

export const BodyHalfBackgroundGray = styled.div`
  background-color: ${disableBackground};
  height: 100vh;
  width: 100%;
  z-index: 1;
`;

export const Button = styled.button`
 
    background-color: ${primaryColor};
    border-radius: 50px;
    paddi
    width: 100%;
    color: #fff;
    border: none;
    font-size: 34px;
    padding: 12px 20px;
    text-align: center;
    margin-top: 34px;
    &:hover {
      opacity: 70%;
    }
    cursor: pointer;
  

  @media (max-width: 768px) {
      max-width: 100%;
      width: 100%;
  }
`;

export const ButtonRemove = styled.button`
 
    background-color: ${danger};
    border-radius: 50px;
    baxkg
    width: 100%;
    color: #fff;
    border: none;
    font-size: 34px;
    padding: 12px 20px;
    text-align: center;
    margin-top: 34px;
    &:hover {
      opacity: 70%;
    }
    cursor: pointer;
  

  @media (max-width: 768px) {
      max-width: 100%;
      width: 100%;
  }
`;

export const ButtonAdd = styled.button`
  background: ${purpleAlternative};
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.48);
  border-radius: 6px;
  border: none;
  color: #fff;
  font-weight: bold;
  border: 2px solid #553eb5;
  height: 46px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: block;
  margin: 0px 30px;
  z-index: 9999;
  position: absolute;
`;
export const Label = styled.label`
top: -13px;

  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 12px;
  color: #999;
  pointer-events: none;
  position: absolute;
  transform: translate(0, 26px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  position: relative;

}
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 14px 0px 0px 10px;
  outline: 0;
  border: none;
  border-bottom: 1px solid #ddd;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding-left: 0px !important;
  margin-left: 0px !important;
`;

export const Row = styled.div`
  display: flex;
`;

export const Cancel = styled.div`
  color: ${primaryColor};
`;
