class ValidationPage {


    static get studentNameField(){
        return cy.get('table.table-dark').find('td:contains("Student Name") + td');
    }
    
    static get studentEmailField(){
        return cy.get('table.table-dark').find('td:contains("Student Email") + td');
    }

    static get genderField(){
        return  cy.get('table.table-dark').find('td:contains("Gender") + td');
    }

    static get mobileField(){
        return cy.get('table.table-dark').find('td:contains("Mobile") + td');
    }

    static get dobField(){
        return cy.get('table.table-dark').find('td:contains("Date of Birth") + td');
    }

    static get subjectsField(){
        return cy.get('table.table-dark').find('td:contains("Subjects") + td');
    }

    static get hobbiesField(){
        return cy.get('table.table-dark').find('td:contains("Hobbies") + td');
    }

    static get pictureField(){
        return cy.get('table.table-dark').find('td:contains("Picture") + td');
    }

    static get addressField(){
        return cy.get('table.table-dark').find('td:contains("Address") + td');
    }

    static get stateAndCityField(){
        return cy.get('table.table-dark').find('td:contains("State and City") + td');
    }


}

export default ValidationPage;