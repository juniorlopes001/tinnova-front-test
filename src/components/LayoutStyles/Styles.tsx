import styled from "styled-components";
import { primaryColor } from "./colors";

export const Button = styled.button`
  background-color: ${primaryColor};
  border-radius: 50px;
  max-width: 370px;
  width: 100%;
  color: #fff;
  border: none;
  font-size: 38px;
  padding: 20px 0px;
  text-align: center;
  cursor: pointer;
  &:hover{
    opacity: 70%;
  }
`;

export const Container = styled.div`
  display: block;
  margin: 0px 30px;
`;
export const Label = styled.label`
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

export const CustomInput = styled.input `
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

export const Title = styled.h1`
  color: ${primaryColor};
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
`;
