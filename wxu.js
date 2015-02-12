$(document).ready(function(){

/* Part 1 --
Read through index.html and app.js and make sure you understand everything that's there.
When the delete icons for a song are clicked slide up that song over 0.5s. AFTER the song is finished sliding up, remove it from the list entirely.
Make the song notes hidden when the page initially loads. Then, when you double click a song, they should slide down over 0.3 second. (Hint: See the dblclick event type)
When the page loads, make the message fade in over 0.8s. Then, after 3s have passed, fade out the message over 0.8s.
Make the songs' delete icons have a default opacity of 0.3. When your mouse hovers over a song, animate its delete icon's opacity to 1 using CSS transitions. (Hint: The ":hover" CSS Selector may be helpful)
When a song is hovered, animate its background color to a lighter grey over 0.5s, using CSS selectors.  */
  $(document).on('click', '.fa-trash', function(){
 
    $(this).parent().slideUp(500, function() {
      $(this).remove();  //call is on $(this) because the parent "LI" is the object passed to remove() already.
    });
  });
 
  $('ul li div').hide();
  /* delegate in Part 3 -- 
  $('li').dblclick(function(){
    $(this).find('div').slideDown(300);
  });
  */

  $('#message').fadeIn(800, function(){
    setTimeout(function(){
      $('#message').fadeOut(800);
    }, 3000);
  });

/* Part 2 --
Add a script tag to load jQuery UI javascript on the page, using Google's CDN (google: "jQuery UI google CDN").
Make the Library and Playlist sortable.
Allow dragging and dropping songs between the Library and the Playlist. */

  $(function() {
    $( "#playlist-list, #library-list" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  });

/* ## Part 3
- When a song is played and then returned to the library, try double clicked it to show the notes. If you weren't careful, it won't work anymore! Use event delegation with the `on` method to fix this problem.
- Filter the library, so that it includes only songs that match whatever is typed in the "filter" box. (Hint: Look up the `:contains` selector or the `filter` jQuery method) */

  $('ul').on('dblclick', 'li', (function(){
    $(this).find('div').slideDown(300);
  }) );

/*
  $('#filter-library').on('keyup', function(event) {
    var search_str = $(this).val();
//    $('#library-list li').hide();
    console.log( search_str );

    $('li:contains(search_str)').hide();

  });
*/
  $('#filter-library').on('input', function() {
    var val = $(this).val();
    $('#library-list li span').filter(function () {
      return $(this).text().match(val);
    }).parent().show();
    $('#library-list li span').filter(function () {
      return !$(this).text().match(val);
    }).parent().hide();
  });
/* ## Part 4
- Make the "Play" button shake when it is clicked but there are no songs in the playlist. Use CSS keyframe animations.
- Make the JukeBox logo do a dance while the Jukebox is playing, and stop when it's finished, using CSS keyframe animations. (Hint: Use your imagination). */  
  



});
