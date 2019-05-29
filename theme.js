/**
 * jQuery Themes
 *
 * Used to create CSS variables starting from the parent element
 * to be accessed within your stylesheets.
 *
 * Example Usage
 *
 * $(document.body).theme({
 *   'font-size': '16px',
 *   'primary': '#10c15c',
 *   'secondary': '#4b5555'
 * });
 *
 * Properties are now accessible in CSS
 *
 * P {
 *   font-size: var(--font-size);
 *   color: var(--primary);
 * }
 *
 * When switching between multiple themes, include the same named properties
 * with different values.
 */

(function($) {
  $.fn.theme = function(theme) {
    var themeRoot = $(this);
    $(themeRoot).addClass('theme-root');
    Object.keys(theme).forEach(k => $(themeRoot).css(`--${k}`, `${theme[k]}`));
  };
})(jQuery);
