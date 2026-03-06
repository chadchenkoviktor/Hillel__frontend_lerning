$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1230,
      values: [ 39, 1230 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

  const burger = document.querySelector('.img-burger');
  const menu = document.querySelector('.nav-for-burger');
  const cros = document.querySelector('.img-cros');
    
    burger.addEventListener('click', () => {
    burger.style.display = 'none';
    menu.style.display = "block";
  });

   cros.addEventListener('click', () => {
    menu.style.display = "none";
    burger.style.display = 'block';
  });
  