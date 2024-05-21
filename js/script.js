
// popup for the book flights page-- your flight was added to the chart//

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
