
<link rel='stylesheet' type='text/css' href='/photo_gallery.css' media='screen, projection' />
<script src="/galleriffic.js" type="text/javascript"></script>
<script type="text/javascript" src="/webvanta/js/jquery/1.4/plugins/galleriffic-2.0/js/jquery.opacityrollover.js"></script>
<script>
jQuery(document).ready(function(jQuery){

   // Initially set opacity on thumbs and add
   // additional styling for hover effect on thumbs
   var onMouseOutOpacity = 0.67;
   $('#thumbs ul.thumbs li').opacityrollover({
     mouseOutOpacity:   onMouseOutOpacity,
     mouseOverOpacity:  1.0,
     fadeSpeed:         'fast',
     exemptionSelector: '.selected'
   });

  var imgArray = jQuery.makeArray(jQuery("#thumbs .thumb"));
  if (imgArray.length <= 1){ jQuery("#controls").hide(); }      // hide controls if only one photo

  // Initialize Minimal Galleriffic Gallery
  if (imgArray.length){
    var gallery = $('#thumbs').galleriffic({
      autoStart:              true,                    // set to false if you don't want slideshow to start automatically
      delay:                  4000,                    // time for each image in a slideshow, in milliseconds
      numThumbs:              10,                      // number of thumbnails shown at one time (i.e., size of page when paginated)
      preloadAhead:           10,
      enableTopPager:         false,                   // show thumbnail pagination controls at bottom
      enableBottomPager:      true,
      maxPagesToShow:         7,
      imageContainerSel:      '#slideshow',            // set ids for the various containers
      controlsContainerSel:   '#controls',
      captionContainerSel:    '#caption',
      loadingContainerSel:    '#loading',
      renderSSControls:       true,
      renderNavControls:      true,
      playLinkText:           'Play',                  // set the text for all the controls
      pauseLinkText:          'Pause',
      prevLinkText:           'Prev',                // if you use css to supply a background image
      nextLinkText:           'Next',                //   insert a '&nbsp' for the image to show up
      nextPageLinkText:       'Next &raquo;',
      prevPageLinkText:       '&laquo; Prev',
      syncTransitions:         true,
      defaultTransitionDuration: 900,
      onSlideChange:             function(prevIndex, nextIndex) {   // fade effects on thumbnails
        this.find('ul.thumbs').children()
          .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
          .eq(nextIndex).fadeTo('fast', 1.0);
      },
      onPageTransitionOut:       function(callback) {               // fade effects for main image
        this.fadeTo('fast', 0.0, callback);
      },
      onPageTransitionIn:        function() {
        this.fadeTo('fast', 1.0);
      }
    });
  }
  else {
     jQuery('#empty_gallery').show();                   // if there are no images, show "empty gallery" text
  }
});
</script>

