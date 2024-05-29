import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('06-deses-obj test', () => {

    test('should return an object', () => {

        const objectWithData = {
            clave : 1234,
            edad : 45
        }

        const objectToCompare ={
            nombreClave: objectWithData.clave,
            anios: objectWithData.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        expect( usContext(objectWithData) ).toEqual( objectToCompare ) 

    })
    


});





