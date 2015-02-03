$(document).ready(function(){

/* Part 1 --
Read through index.html and app.js and make sure you understand everything that's there.
When the delete icons for a song are clicked slide up that song over 0.5s. AFTER the song is finished sliding up, remove it from the list entirely.
Make the song notes hidden when the page initially loads. Then, when you double click a song, they should slide down over 0.3 second. (Hint: See the dblclick event type)
When the page loads, make the message fade in over 0.8s. Then, after 3s have passed, fade out the message over 0.8s.
Make the songs' delete icons have a default opacity of 0.3. When your mouse hovers over a song, animate its delete icon's opacity to 1 using CSS transitions. (Hint: The ":hover" CSS Selector may be helpful)
When a song is hovered, animate its background color to a lighter grey over 0.5s, using CSS selectors.
*/
  $(document).on('click', '.fa-trash', function(){
 
    $(this).parent().slideUp(500, function() {
      $(this).remove();  //call is on $(this) because the parent "LI" is the object passed to remove() already.
      });
  });
 
    $('ul li div').hide();
    $('li').dblclick(function(){
      $(this).find('div').slideDown(300);
    });


});
