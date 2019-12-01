
$(function() {
    $("#js-shopping-list-form").submit(function(event) {
       event.preventDefault();
       const newItem =  $(event.currentTarget).find(
        'input[name="shopping-list-entry"]').val();


        let newListItem = `<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`;
        $("#shopping-list").append(newListItem);
       $('[name="shopping-list-entry"]').val('');
    });

    
});


function checkingOff (){
    

    //when any toggle button (check button)is clicked run this function
    // used ul for event delegation
    $("ul").on("click", ".shopping-item-toggle", function(event){
        
        //only applies function to one button, the button that was clicked
        event.stopPropagation();

        
        $(this).closest("li").find(".shopping-item").toggleClass( "shopping-item__checked" );
        
    });
}
$(checkingOff);

function deleteGroceryItem(){

   $("ul").on("click", ".shopping-item-delete", function(event){
        
        $(this).parent().parent().remove();
   });

}
$(deleteGroceryItem);