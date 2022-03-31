<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package garydavis
 */

?>

<div id="footer-row" class="secondary">
  <div id="footer-area1">
    <?php
if(is_active_sidebar('footer-area-1')){
dynamic_sidebar('footer-area-1');
}
?>
  </div>
  <div id="footer-area2">
    <?php
if(is_active_sidebar('footer-area-2')){
dynamic_sidebar('footer-area-2');
}
?>
  </div>
  <div id="footer-area3">
    <?php
if(is_active_sidebar('footer-area-3')){
dynamic_sidebar('footer-area-3');
}
?>
  </div>
    <div id="footer-area4">
    <?php
if(is_active_sidebar('footer-area-4')){
dynamic_sidebar('footer-area-4');
}
?>
  </div>
</div>

<?php wp_footer(); ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script>
    

    $(document).ready(function(){
      $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $(".overlay").toggleClass("open");
        $(".overlay a").toggleClass("open");
      $(".overlay p").toggleClass("open");
      });
      
      // Scroll Reveal
      // ScrollReveal().reveal('.services .grid .card');
      
      $('.square.blue').on('inview', function(event, isInView) {
        if (isInView) {
          // element is now visible in the viewport
          $(this).addClass("in-view");
        } else {
          // element has gone out of viewport
          $(this).removeClass("in-view");
        }
      });
    });
     
  </script>
  

</body>
</html>
