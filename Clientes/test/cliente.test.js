const request = require('supertest');
const ApiUrl = "http://localhost:3030";

describe('ApiUrl', () => {
  // jest.setTimeout(30000)
  // Testando GET
  test('Testando rota de cliente', () => {
    return request(ApiUrl).get('/cliente')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })

  // Testando GET filtrando por ID
  test('Testando rota de cliente com ID específico', () => {
    return request(ApiUrl).get('/cliente/:id')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })

  // Testando POST
  test('Testando a criação de novos registros', () => {
    return request(ApiUrl).post('/cliente')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })

  // Testando atualiação de registros
  test('Testando atualização de registros', () => {
    return request(ApiUrl).put('/cliente/:id')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })

  // Testando delete de registros
    // Digitar o registro que se deseja apagar
  test('Testando delete de registros', () => {
    return request(ApiUrl).delete('/cliente/:id')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })
})