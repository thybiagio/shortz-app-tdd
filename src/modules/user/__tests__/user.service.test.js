import { describe, it, expect, beforeEach } from 'vitest';
import * as userService from '../user.service.js';

describe('User Service - Cadastro', () => { 
    
    let mockUserModel; 

    beforeEach(() => { 
        // mock do modelo sequelize para simular a criação de um usuário
        mockUserModel = { 
            findOne: vi.fn(),
            create: vi.fn()
        };
    });

    it('deve retornar erro se as senhas forem diferentes', async () => {
        // simula os dados do formulário se as senhas forem diferentes
        const data = { 
            username: 'jacksparrow@gmail.com',
            password: '12345678',
            confirmPassword: '87654321',
            fullName: 'Jack Sparrow'
        };  

        // tenta chamar a função 'register' e espera que ela lance um erro
        //devido às senhas diferentes
        await expect(userService.register(data, mockUserModel))
        .rejects
        .toThrow('As senhas não coincidem');



    });
});