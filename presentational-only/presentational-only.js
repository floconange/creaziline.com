$(document).ready(function()
{
  $('#load-more-content').click(function()
  {
    
    $('#more-content').toggleClass('shown');

    $('#load-more-content').hide();

    if( $('#more-content').hasClass('shown') )
    {
      $('#load-more-content').text('Hide content');
      $('#more-content').fadeIn('slow', function()
      {
        $('#load-more-content').fadeIn('slow');
      });
    }
    else
    {
      $('#load-more-content').text('Load some content');
      $('#more-content').fadeOut('slow', function()
      {
        $('#load-more-content').fadeIn('slow');
      });
    }
  });
	
	$('#load-content-tablet').click(function()
  {
    
    $('#content-tablet').toggleClass('shown');

    $('#load-content-tablet').hide();

    if( $('#content-tablet').hasClass('shown') )
    {
      $('#load-content-tablet').text('Hide content');
      $('#content-tablet').fadeIn('slow', function()
      {
        $('#load-content-tablet').fadeIn('slow');
      });
    }
    else
    {
      $('#load-content-tablet').text('Load some content');
      $('#content-tablet').fadeOut('slow', function()
      {
        $('#load-content-tablet').fadeIn('slow');
      });
    }
  });
});