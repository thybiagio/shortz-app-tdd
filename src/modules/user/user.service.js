export const register = async (data, UserModel) => {
   // recebe os dados do form
    const { username,email, password, confirmPassword, fullName } = data;

    //validação de senhas
    if (password !== confirmPassword) {
        throw new Error('As senhas não coincidem.');
    }

    //aqui vão outras validações

    return{ 
        message: 'Usuário criado com sucesso.',
    }
};