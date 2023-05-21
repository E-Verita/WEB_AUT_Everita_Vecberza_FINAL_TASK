class FormPage {

    static get nameField(){
        return cy.get("#firstName");
    }
    
    static get lastnameField(){
        return cy.get("#lastName");
    }

    static get emailField(){
        return  cy.get("#userEmail");
    }

    static get genderRadiobuttonWomen(){
        return cy.get('[for="gender-radio-2"]');
    }

    static get phoneField(){
        return cy.get("#userNumber"); 
    }
    
    static get dateField(){
        return cy.get("#dateOfBirthInput");
    }

    static get month(){
        return cy.get(".react-datepicker__month-select");
    }

    static get year(){
        return cy.get(".react-datepicker__year-select");
    }


    static get subjectField(){
        return cy.get("#subjectsContainer");
    }

    static get hobbiesCheckboxMusic(){
        return cy.get('[for="hobbies-checkbox-3"]');
    }

    static get selectPicture(){
        return cy.get('input[type=file]');
    }

    static get addressField(){
        return cy.get("#currentAddress");
    }

    static get stateField(){
        return cy.get('#state');
    }

    static get cityField(){
        return cy.get('#city');
    }
    static get submitButton(){
        return cy.get('#submit');
    }

}

export default FormPage;