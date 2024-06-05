
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

//----------remove button -------  listens for event--
let removeItem= document.getElementsByClassName("removeItembtn");  //stores the buttons as an array
//console.log(removeItem);

for(let i =0; i<removeItem.length;i++){  //loop through all your remove buttons
    var buttonInArr= removeItem[i];     //the button we are currently on

    buttonInArr.addEventListener('click',function(event){ //listens for click event- when the btn is clicked-finds the button you clicked
        let btnClicked = event.target;                     // get the btn that was clciked
        btnClicked.parentElement.parentElement.remove();  //delete the whole row
        updateTotal();// update the removed item
    })


}

//---------- update price with quantity change event listener

let quantityElement = document.getElementsByClassName("numTick");  //get arr of prices
for( let i =0; i<quantityElement.length;i++){                    //loop through them
    let input= quantityElement[i];                              //set as variable
    input.addEventListener('change', updateTotal);              //add event listerner to the change and update the total
}

//------------ update chart when book btn is clicked - added event list

let bookBtnListener = document.getElementsByClassName("tripBookBtn"); // arr of book btns - to add listenr
for(let i=0; i< bookBtnListener.length;i++){
    let buttonArr=  bookBtnListener[i];
  
    buttonArr.addEventListener('click',()=> addToCart((i)));  //add event listner to click on boook btn

}



//----add to cart function------
function addToCart(pos){
    

    let bookName = document.getElementsByClassName("tripName")[pos].innerHTML;  //get arr of names of the trips
    
    let bookPrice= document.getElementsByClassName("tripCost")[pos].innerHTML;// get price of curent element

    //get img src
   // let imgSrc= document.getElementsByClassName("tripImg")[pos].


   //create output from values
   let out =`

   `
   //create array and push item to arr.
   // then loop through arr to display.

}



//----------function for updating total
function updateTotal(){

    let total=0;

    let arrOfCartItemPrice = document.getElementsByClassName("priceInRand");// create arr for all the price <P>price</P>

    //loop through all the prices
    for(let i =0; i<arrOfCartItemPrice.length;i++){
        let stringPrice= arrOfCartItemPrice[i].innerHTML; //grab the value for the <p></p>
       
        let noR= stringPrice.replace("R ",'');  //remove R
        let tempPrice=noR.replace(',','');  //remove ,
  

         let itemPrice= parseFloat(tempPrice); // turn string to int.
         let numTickets = document.getElementsByClassName("numTick")[i].value;// grab the value of the element where you are at
         

         total+=(itemPrice*numTickets);  //total = price *
         
    }

    let totalString= "R "+total;
    document.getElementById("totalAmount").innerHTML= totalString;// display total 

    

}



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

