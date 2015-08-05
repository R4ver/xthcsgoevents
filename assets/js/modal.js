function betterModal() {
    var modal = $(".modal");
    var modal_button = $(".modal-button");
    var modal_overlay = $(".modal-overlay");

    $.fn.extend({
        hasClasses: function (classes) {
            var self = this;
            for (var i in classes) {
            if ($(self).hasClass(classes[i])) 
            return true;
        }
            return false;
        }
    });
  
    var init = function() {
        var classes = ["modal-button-no", "modal-button-cancel", "modal-button-disagree",
        "modal-button-done"
        ];

        modal_button.click(function() {
            if( $(this).hasClasses(classes) ) {
                console.log("close");
                close();
            }
        });

        modal_overlay.click(function() {
            close(".modal-overlay");
        });
    };
  
    var close = function() {
        $(".modal-overlay").animate({
            opacity: 0,
            "z-index": -500
        }, 50);

        $(".modal-open").animate({
            opacity: 0,
            "z-index": -999
        }, 50);
    };
  
    var open = function(e) {
        $(e).addClass("modal-open");

        $(".modal-overlay").animate({
            opacity: 1,
            "z-index": 500
        }, 50);

        $(e).animate({
            opacity: 1,
            "z-index": 999
        }, 50)
    };

    return {
        init: function() {
            init();
        },

        open: function(e) {
            open(e);
        },

        close: function() {
            close();
        }
    }
}