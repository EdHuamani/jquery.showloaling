/*!
 * jquery.showLoading
 *
 * @version 1.0
 *
 * @Author una solutions sac - Edgar Huamaní <ragdexd.rgd@gmail.com>
 * @license MIT
 */
(function($) {
    $.fn.showLoading = function(setting) {
        $this = $(this);
        var option = {
            text: "Loading.. ."
        }
        var options = $.extend(option, setting);
        var methods = {
            init: function(option) {
                $(document).on({
                    ajaxStart: function() {
                        helpers.start();
                    },
                    ajaxStop: function() {
                        helpers.stop();
                    }
                });
                return this;
            }
        }
        var helpers = {
            start: function() {
                if ($('#ajax-loading').length == 0) {
                    /*
                    <li class="text-warning" id="icon_loading">
                        <label class="checkbox-inline">
                            <i class="icon icon-spinner icon-spin"></i>
                            <i> Loading.. .</i>
                        </label>
                    </li>
                     */
                    var loading = $("<div>").attr("id", "ajax-loading");
                    var wrapper = loading.addClass("nav message");
                    var inner = $("<div>").addClass("text-warning").appendTo(wrapper);
                    var label = $("<span>").addClass("checkbox-inline").appendTo(inner);
                    $("<span>").addClass("icon icon-spinner icon-spin").appendTo(label);
                    $("<span>").text(options.text).appendTo(label);
                    $(loading).appendTo($this);
                }
            },
            stop: function() {
                if ($('#ajax-loading').length != 0) {
                    $('#ajax-loading').remove();
                }
            }
        }
        return methods.init.apply(this, arguments);
    }
})(jQuery);