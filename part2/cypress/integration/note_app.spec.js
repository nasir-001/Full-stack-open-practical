describe('Note app', function() {
  beforeEach(function() {
    // cy.request('POST', 'http://localhost:3001/api/testing/reset')
    // const user = {
    //   name: 'Matti Luukkainen',
    //   username: 'root',
    //   password: 'sekret'
    // }
    // cy.request('POST', 'http://localhost:3001/api/users', user)
    cy.visit('http://localhost:3000')

  })

  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2020')
  })

  it('user can log in', function() {
    cy.contains('Log in').click()
    cy.get('#username').type('root')
    cy.get('#password').type('sekret')
    cy.get('#login-button').click()

    cy.contains('root logged-in')
  })

  it('login fails with wrong credentials', function() {
    cy.contains('Log in').click()
    cy.get('#username').type('roots')
    cy.get('#password').type('sekret')
    cy.get('#login-button').click()

    cy.get('.error')
      .should('contain', 'Wrong credentials')
      .and('have.css', 'font-size', '20px')
      .and('have.css', 'border-style', 'solid')
      cy.get('html').should('not.contain', 'root logged-in')
  })

  describe('when loggen in', function() {
    beforeEach(function() {
      cy.request('POST', 'http:localhost:3001/api/login', {
        username: 'root', password: 'sekret'
      }).then(response => {
        localStorage.setItem('loggedNoteappUser', JSON.stringify(response.body))
        cy.visit('http://locahost:3000')
      })
    })

    it('a new note can be created', function() {
      cy.contains('new note').click()
      cy.get('input').type('a new note created by cypress')
      cy.contains('save').click()
      cy.contains('a new note created by cypress')
    })
  })

})