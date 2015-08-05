function caira() {

    var html = function(target, tag, attribute, content) {
        var render = "<" + tag + " ";

        for ( attr in attribute) {
            var attr_value = attribute[attr];

            render += " " + attr + "=\"" + attr_value + "\"";  
        }

        render += ">" + content + "</" + tag + ">";
        $(target).append(render);
    };

    var css = function(target, styles) {
        for (style in styles) {
            style_value = styles[style];

            $(target).css(style, style_value);
        }
    };

    return {
        html: function(target, tag, attribute, content) {
            return html(target, tag, attribute, content);
        },

        css: function(target, styles) {
            return css(target, styles);
        }
    }

}