const request = require('supertest');
const ApiUrl = "http://localhost:3000";

describe('ApiUrl', () => {
    // Teste do GET (Read) sem filtro
    test('Testing livros route - GET', () => {
        return request (ApiUrl).get('/livro')
        .then((response)=> {
            expect(response.statusCode).toBe(200)
        })
    })

    // Teste do GET (Read) com filtro de ID
    test('Testing livros route - GET + id', () => {
        return request (ApiUrl).get('/livro/:id')
        .then ((response) => {
            expect (response.statusCode).toBe(200)
        })
    })

    // Teste do POST (Create)
    test('Testing livros route - POST', () => {
        return request (ApiUrl).post('/livro')
        .then((response)=> {
            expect(response.statusCode).toBe(200)
        })
    })

    // TESTE do PUT (Update)
    test('Testing livros route - PUT', () => {
        return request (ApiUrl).put('/livro/:id')
        .then((response)=> {
            expect(response.statusCode).toBe(200)
        })
    })
    
    // Teste do DELETE (Delete)
    test('Testing livros route - DELETE', () => {
        return request (ApiUrl).delete('/livro/:id')
        .then((response)=> {
            expect(response.statusCode).toBe(200)
        })
    })
})