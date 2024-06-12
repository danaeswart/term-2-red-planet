
// popup for the book flights page-- your flight was added to the chart - book button on flughts page//

    function openPopupSubmit(){
        //setting a delay timer- set to 300ms -- opens popup when someone books a flight
        setTimeout(() => {  
            document.getElementById("popup").style.display="block";
        
        }, 250);
    

    }

    /// function for mars slider on home page


    let timer;
    let timerCounter=0;
    let sliderDivs=["assets/images/marsSliderClipped1.png","assets/images/marsSliderClipped2.png","assets/images/marsSliderClipped3.png","assets/images/marsSliderClipped14.png"];
    function startSlideTimer(){
        timer=setInterval(function(){
            let imgSrc=sliderDivs[timerCounter];
           
            let out=`
             <img src= ${imgSrc}> 
             `

             document.getElementById("slider").innerHTML=out;

             if(timerCounter==3){
                timerCounter=0
             }else{
                timerCounter++;
             }

        },3000);
    }

    startSlideTimer();

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


// search home ----------------starts here lol------------


function searchHome(){
    
    let input= document.getElementById("searchBarHome").value.toLowerCase();
   
    let items= document.getElementsByClassName("listItem");

   isEmptySearch();

   

    for(let i=0; i<items.length;i++){
        let itemText= items[i].textContent.toLowerCase();
        console.log(itemText);

        if(itemText.includes(input)){
            items[i].style.display="block";

        }else{
            items[i].style.display="none";
        }
    
    }
    isEmptySearch();


}

//search for flights--------------
function searchFlights(){
    
    let input= document.getElementById("searchBarFligts").value.toLowerCase();
   
    let items= document.getElementsByClassName("listItemf");



   

    for(let i=0; i<items.length;i++){
        let itemText= items[i].textContent.toLowerCase();
        console.log(itemText);

        if(itemText.includes(input)){
            items[i].style.display="block";

        }else{
            items[i].style.display="none";
        }
    
    }



}







function isEmptySearch(){
    if(document.getElementById("searchBarHome").value===""){
        document.getElementsByClassName("listItem").style.display="none";
        return;
    }

}

//////// --------- code for scrolling to that part of th html



// ///////////////view cart modal code- able to add and and remoe flights and view total 

//----------remove button -------  listens for event--
function addEventToRemoveBtn(){
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
}




//---------- update price with quantity change event listener
function addQuantiChangeEventListen(){
let quantityElement = document.getElementsByClassName("numTick");  //get arr of prices
for( let i =0; i<quantityElement.length;i++){                    //loop through them
    let input= quantityElement[i];                              //set as variable
    input.addEventListener('change', updateTotal);              //add event listerner to the change and update the total
}
}

//------------ update chart when book btn is clicked - added event list

let bookBtnListener = document.getElementsByClassName("tripBookBtn"); // arr of book btns - to add listenr
for(let i=0; i< bookBtnListener.length;i++){
    let buttonArr=  bookBtnListener[i];
  
    buttonArr.addEventListener('click',()=> addToCart((i)));  //add event listner to click on boook btn passing through a parimiter


}

//checking if there is anything in your chart

function checkInChart(){
    let itemsArr= document.getElementsByClassName("itemInCart");
    if(itemsArr.length==0){
        
       alert("There are no items in your cart");
   
 }else{
    closeViewCart();
 }
 
}
// checkInChart();




//----add to cart function------
function addToCart(pos){
    console.log(pos);   //--gets the position of the btn we are on.
    
    //get the name price and img of current button that we are on
    
    let bookName = document.getElementsByClassName("tripName")[pos].innerHTML;  //get arr of names of the trips
    
    let bookPrice= document.getElementsByClassName("tripCost")[pos].innerHTML;// get price of curent element
    
     let bookImgSrc= document.getElementsByClassName("imgSrc")[pos].src;
    
    //check if this booking is already in the list
     let itemsInCart= document.getElementsByClassName("bookedTripName");
     for(let i =0;i<itemsInCart.length;i++){
        if(bookName==itemsInCart[i].innerHTML){
            //get the input and add one if it exists in the list
            
           let intQuantity= parseInt(document.getElementsByClassName("numTick")[i].value);
           intQuantity++;
           document.getElementsByClassName("numTick")[i].setAttribute("value",intQuantity);

           
            updateTotal();
            return;  //leave function
        }
    }
        // else create new item to add to cart
          

            let newItemContent=`
             <div class="itemInCart">
                        <div class="itemImg">
                            <img src="${bookImgSrc}">
                            <P class="bookedTripName">${bookName}</P>
                        </div>
                        
                        <div class="itemPrice">
                            <p class="priceInRand">${bookPrice}</p>
                        </div>
                       
                        <div class="itemQuant">
                            <input class="numTick" value="1" type="number" min="1">
                        </div>
                    
                        <div class="itemRemove">
                             <button class="removeItembtn">remove</button>
                        </div>

                    </div>
            `
            document.getElementById("itemInCartContainer").innerHTML+= newItemContent;
    addEventToRemoveBtn();
    updateTotal();
    addQuantiChangeEventListen();
   
        }
///---- close the modal and open modal

 function openViewCart(){
    document.getElementById("viewCartId").style.display="block";
 }

 function closeViewCart(){
    document.getElementById("viewCartId").style.display="none";
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



//------------------------end of modal for cart------------------






//////////////////////////// making variables that will be used and stored on the contact page///////////

function thankYouMessage(){
    
    let name = document.getElementById("nameContact").value;
    console.log(name);
    let out= `
    <div class="contactPopup" >
                   <img src="../assets/images/rocket.png" alt="">
                   <h2>Thank you ${name}</h2>
                   <p>Your message was received!</p>
                   
                      
                       <button type="button" id="closePopupContact" onclick="closePopupCon()">OK</button>
                
               </div>
    `
 
    document.getElementById("contactPop").style.display="block";
    document.getElementById("contactPop").innerHTML= out;
   
}


function closePopupCon(){
    
    document.getElementById("contactPop").style.display="none";
}
    

// let form = document.form["formContact"];

//     //adding an event listener
//     form.addEventListener("submitForm", getInputContact ); 

//     //array for the contact form that wil store the form info
//     let arrFormData = [];

//     function getInputContact(event){
//         event.preventDefault();

//         let formData ={
//             "name": this.name.value,
//             "email": this.email.value,
//             "subject": this.subject.value,
//             "message": this.message.value,
//         }

//         console.log(name);
//         console.log(email);

//         //setting some output

//         let out =`
//         <div class="contactPopup" >
//                    <img src="../assets/images/rocket.png" alt="">
//                    <h2>Thank you ${name}</h2>
//                    <p>Your message was received!</p>

//                        <button type="button" id="closePopupContact" onclick="closePopupContact()">OK</button>
                
//                </div>
//         `
//         document.getElementById("contactPop").style.display="block";
//         document.getElementById("contactPop").innerHTML= out;
//         arrFormData.push(formData); 
//     // ask for help to be able to push this to the screen.
//     }
// // end of creating variables for the contact form

