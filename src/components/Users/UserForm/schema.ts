import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().min(2, "No minímo 2 digitos").required('Insira o nome'),
    email: Yup.string().email('O email deve ser válido').required('Insira o e-mail'),
    phone: Yup.string().max(14, 'No máximo 14 digitos').required('Insira o Telefone'),
    cpf: Yup.string().min(14, "Insira os 11 números do CPF com números e pontos").max(14).required('Insira os 11 números do CPF com números e pontos'),
})

