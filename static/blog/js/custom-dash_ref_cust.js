    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("ab");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function() {
    $( ".dizzy-container" ).delay( 600 ).fadeOut();
    
    $( '.nav-bar' ).hide();
    
    $('#submitoro').click(function() {

        event.preventDefault(); //previene refresh
        window.location = "dash_call1_cust.html"; 
        
    });
    
});