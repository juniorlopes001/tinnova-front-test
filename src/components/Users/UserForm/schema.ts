import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().min(2, "No minímo 2 digitos").required('Insira o nome, Campo Obrigatório'),
    email: Yup.string().email('O email deve ser válido').required('Insira o e-mail, Campo Obrigatório'),
    phone: Yup.string().max(14, 'No máximo 14 digitos').required('Insira o Telefone, Campo Obrigatório'),
    cpf: Yup.string().min(11).max(12).required()
})

