
// popup for the book flights page-- your flight was added to the chart - book button on flughts page//

    function openPopupSubmit(){
        //setting a delay timer- set to 300ms -- opens popup when someone books a flight
        setTimeout(() => {  
            document.getElementById("popup").style.display="block";
        
        }, 250);
    

    }
    // adding animations into my onclick popup----
    // it does move up the screen then doesnt want to reactivate

    // let id=null;
    // function moveAnimation(){
    //     let element= document.getElementById("popup");
    //     let pos=250;
    //     clearInterval(id);
    //     id= setInterval(frameFunction,5);
    //     function frameFunction(){
    //         if (pos ==-200){
    //             clearInterval(id);
    //         } else{
    //             pos--;
    //             element.style.top=pos+'px';
    //         }

        
    //     }
        
    // }



    function closePopupSubmit(){
        // this function closes the pop up window
        // moveAnimation();
        document.getElementById("popup").style.display="none";
    
        
    }


// END OF CODE FOR POPUP ON FLIGHTS PAGE 

// ///////////////view cart modal code- able to add and and remoe flights and view total 




//////////////////////////// making variables that will be used and stored on the contact page///////////

    let form = document.form["formContact"];

    //adding an event listener
    form.addEventListener("submitForm", getInputContact ); 

    //array for the contact form that wil store the form info
    let arrFormData = [];

    function getInputContact(event){
        event.preventDefault();

        let formData ={
            "name": this.name.value,
            "email": this.email.value,
            "subject": this.subject.value,
            "message": this.message.value,
        }

        //setting some output

        let out =`
        <P>Is this the correct information?</P>
        <p>Name: <span>${formData.name}</span></p>
        <p>Email: <span>${formData.email}</span></p>
        <p>Subject: <span>${formData.subject}</span></p>
        <p>Message: <span>${formData.message}</span></p>
        <button>Submit Form</button>
        <button>Go Back</button>
        `

        document.querySelector(".outputForm code").innerHTML = out;
        arrFormData.push(formData);
    // ask for help to be able to push this to the screen.
    }
// end of creating variables for the contact form

