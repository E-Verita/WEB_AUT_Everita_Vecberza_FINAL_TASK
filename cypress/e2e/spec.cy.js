import FormPage from "../pageObjects/form.page";
import ValidationPage from "../pageObjects/validation.page";
describe("Elements", () => {
  context("Practiice Form Scenarios", () => {
      beforeEach(() => {
          cy.visit("https://demoqa.com/automation-practice-form");
      });

      it("Positive", () => {

        // Input all the necessary information in the text fields, 
        // buttons, etc, where it is not stated otherwise.
        FormPage.nameField.type("Everita");
        FormPage.lastnameField.type("Vecberza");
        FormPage.emailField.type("everita.vecberza@gmail.com");
        FormPage.genderRadiobuttonWomen.click();
        FormPage.phoneField.type("0123456789");

        // Set the - Date of Birth - with Calendar widget to - 
        //28th of February, 1930.
        FormPage.dateField.click();
        FormPage.month.select("February");   
        FormPage.year.select("1930");  
        cy.get('[aria-label="Choose Friday, February 28th, 1930"]').click();   

        //d. Set Subjects to Economics.
        FormPage.subjectField.type("Economics{enter}");

        //e. Set Hobbies to Music.
        FormPage.hobbiesCheckboxMusic.click();

        //Upload an image of your choice
        FormPage.selectPicture.selectFile('cypress/e2e/files/picture.png', {force: true
        }); 

        FormPage.addressField.type("Test Street 11");

        //Set State to NCR.
        FormPage.stateField.type('NCR{enter}');
        
        //h. Set City to Delhi.
        FormPage.cityField.type('Delhi{enter}'); 

        FormPage.submitButton.click();

        //Validation
        ValidationPage.studentNameField.should('contain', 'Everita Vecberza');
        ValidationPage.studentEmailField.should('contain', 'everita.vecberza@gmail.com');
        ValidationPage.genderField.should('contain', 'Female');
        ValidationPage.mobileField.should('contain', '0123456789');
        ValidationPage.dobField.should('contain', '28 February,1930');
        ValidationPage.subjectsField.should('contain', 'Economics');
        ValidationPage.hobbiesField.should('contain', 'Music');
        ValidationPage.pictureField.should('contain', 'picture.png');
        ValidationPage.addressField.should('contain', 'Test Street 11');
        ValidationPage.stateAndCityField.should('contain', 'NCR Delhi');
      });
    });

        












    });


   

