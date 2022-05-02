const request = require('supertest');
const ApiUrl = "http://localhost:3030";

describe('ApiUrl', () => {
  // jest.setTimeout(30000)
  // Testando GET
  // test('Testando rota de catálogo', () => {
  //   return request(ApiUrl).get('/catalogo')
  //     .then((response) => {
  //       expect(response.statusCode).toBe(200)
  //     })
  // })

  // // Testando GET filtrando por ID
  // test('Testando rota de catálogo com ID específico', () => {
  //   return request(ApiUrl).get('/catalogo/:id')
  //     .then((response) => {
  //       expect(response.statusCode).toBe(200)
  //     })
  // })

  // // Testando POST
  // test('Testando a criação de novos registros', () => {
  //   return request(ApiUrl).post('/catalogo')
  //     .then((response) => {
  //       expect(response.statusCode).toBe(200)
  //     })
  // })

  // Testando atualiação de registros
  // test('Testando atualização de registros', () => {
  //   return request(ApiUrl).put('/catalogo/:id')
  //     .then((response) => {
  //       expect(response.statusCode).toBe(200)
  //     })
  // })

  // Testando delete de registros
  test('Testando delete de registros', () => {
   return request(ApiUrl).delete('/catalogo/:id')
      .then((response) => {
        expect(response.statusCode).toBe(200)
      })
  })
})