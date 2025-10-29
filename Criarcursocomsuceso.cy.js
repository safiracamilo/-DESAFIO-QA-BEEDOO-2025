describe('TS001 - Investigação sem formulário tradicional', () => {

    it.only('Debug da estrutura da página sem form', () => {
        
        cy.visit('/')

     
        cy.contains('Cadastrar curso').click()

        // Confirmar que estamos na página correta
        cy.url().should('include', '/new-course')
        cy.log('✅ Navegou para /new-course')

        // Preencher os campos conhecidos
        cy.get('input[aria-label="Nome do curso"]')
            .type('Curso de Teste Automatizado')

        cy.get('textarea.q-field__native[rows="6"]')
            .first()
            .type('Descrição do curso de teste')

      cy.wait(1000) 

       cy.get('button.bg-orange')
            .click()

               cy.wait(1000) 
        
    })
})
