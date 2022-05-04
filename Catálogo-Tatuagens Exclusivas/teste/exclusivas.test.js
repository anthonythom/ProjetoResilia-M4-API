const request = require('supertest');
const url = "http://localhost:3030";

describe('url', () => {
  
  test('Testando rota de catálogo', () => {
    return request(url).get('/catalogo-exclusivas')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })

  // Testando GET filtrando por ID
  test('Testando rota de catálogo com ID específico', () => {
    return request(url).get('/catalogo-exclusivas/:id')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })

  // Testando POST
  test('Testando a criação de novos registros', () => {
    return request(url).post('/catalogo-exclusivas')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })

  // Testando atualiação de registros
  test('Testando atualização de registros', () => {
    return request(url).put('/catalogo-exclusivas/:id')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })

  // Testando delete de registros
    // Digitar o registro que se deseja apagar
  test('Testando delete de registros', () => {
    return request(url).delete('/catalogo-exclusivas/20')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })
})