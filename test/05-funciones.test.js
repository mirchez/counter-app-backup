import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Prueba en 05-funcines', () => {

    test('getUser deberia retornar un objetos', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect( testUser).toEqual(user)

    })
    

    test(' getUsuarioActivo debe retornar un objeto con username Miguel', () => {
        
        const name = 'Miguel'

        const testUser2 = {
            uid: 'ABC567',
            username: `${name}`
        }

        const activeUser  = getUsuarioActivo(name)

        expect(activeUser).toEqual(testUser2)
    })
    

})
