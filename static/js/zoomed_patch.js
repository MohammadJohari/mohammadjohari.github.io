var zoom_container_size = $( '.zoom_container').height();
var zoom_area_size = 100;
var zoom_radius = zoom_area_size / 2;

$( '.thumbnail' ).mousemove(function(e) {
    // Show original picture    
    var $original = $( '#' + this.id + '_original');
    var $container = $original.parent();
    $container.removeClass( 'hidden' );
    // Thumbnail
    var offset = $( this ).offset();
    var tX = e.pageX - offset.left;
    var tY = e.pageY - offset.top;
    // We stay inside the limits of the zoomable area
    tX = Math.max( zoom_radius, Math.min( $( this ).width() - zoom_radius, tX ) );
    tY = Math.max( zoom_radius, Math.min( $( this ).height() - zoom_radius, tY ) );
    // Ratios
    var ratioX = ( $original.width() - zoom_container_size) / ( $( this ).width() - zoom_area_size );
    var ratioY = ( $original.height() - zoom_container_size) / ( $( this ).height() - zoom_area_size );
    // Margin to be set in the original    
    var moX = -Math.floor( ( tX - zoom_radius ) * ratioX );
    var moY = -Math.floor( ( tY - zoom_radius ) * ratioY );
    // Apply zoom efect
    $original.css( 'marginLeft', moX );
    $original.css( 'marginTop', moY );
    // Log values
    $('#ratios').html( 'Ratio X: <b>' + ratioX + '</b><br>Ratio Y: <b>' +  ratioY + '</b>' );
    $('#coordinates_thumbnail').html( 'tX: <b>' + tX + '</b><br>tY: <b>' +  tY + '</b>' );
    $('#coordinates_original' ).html( 'Margin left: <b>' + Math.round(moX) + '</b><br>Margin top: <b>' +  moY + '</b>' );
});

$( '.thumbnail' ).mouseout(function(e) {
    var $original = $( '#' + this.id + '_original');
    var $container = $original.parent();
    $container.addClass( 'hidden' );
});
