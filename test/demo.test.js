describe(' Test de <DemoComponent/>', () =>{

    test("Este test no debe fallar", () =>{
        //Arrange
        const message = 'new message'
    
        //Act
        const message2 = message.trim()  
    
        //Assert
        expect(message).toBe(message2)
    
    })

})


