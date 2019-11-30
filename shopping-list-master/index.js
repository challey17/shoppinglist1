


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


//function checkItem(check){
    // $(check).parent().parent().first().toggleClass("shopping-item__checked ");
   // let spanName = listItem.first();
//};

//checkItem();
function checkingOff (){
    

    //when any toggle button (check button)is clicked run this function
    $(".shopping-item-toggle").click(function(event){
        
        //only applies function to one button
        event.stopPropogation();

        //applies toggle effect 
        $(this).toggleClass(".shopping-item__checked");
    });
}
$(checkingOff);