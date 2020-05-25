$(function(){
    // delegation check
    // $('ul').on('click','.shopping-item-toggle',function(event){
    //     let checkItem= $(this).closest('li').find('.shopping-item');
    //     checkItem.toggleClass('shopping-item__checked');
        
    // });
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        debugger;
      });
    // delegation delete
    $('.shopping-list').on('click','.shopping-item-delete',function(event){
        let deleteItem= $(this).closest('li');
        deleteItem.remove();
    });
    // add item
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        let addItem = $("#shopping-list-entry").val();
        let result = `<li><span class="shopping-item">${addItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`;
        $(".shopping-list").append(result);
        $("#shopping-list-entry").val('');
    });
});