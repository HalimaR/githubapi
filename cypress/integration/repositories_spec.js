describe("repo", ()=>{
    it("get all repo", () =>{
        cy.visit('http://localhost:3000/githubapi');

        //click on a repo
        cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardActions-root > a > .MuiButton-root').click();
        
        //click on search
        cy.findByRole('textbox', {  name: /search/i}).type('wel dubbel');

    })
})