ace.define("ace/theme/intelie",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-intelie";
exports.cssText = "\
.ace-intelie .ace_gutter {\
background: #60656e;\
color: rgb(144,145,148)\
}\
.ace-intelie .ace_print-margin {\
width: 1px;\
background: #44475a\
}\
.ace-intelie {\
background-color: #2e3440;\
color: #e0e0e0\
}\
.ace-intelie .ace_cursor {\
color: #f8f8f0\
}\
.ace-intelie .ace_marker-layer .ace_selection {\
background: #44475a\
}\
.ace-intelie.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #282a36;\
border-radius: 2px\
}\
.ace-intelie .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174)\
}\
.ace-intelie .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #a29709\
}\
.ace-intelie .ace_marker-layer .ace_active-line {\
background: #44475a\
}\
.ace-intelie .ace_gutter-active-line {\
background-color: #44475a\
}\
.ace-intelie .ace_marker-layer .ace_selected-word {\
box-shadow: 0px 0px 0px 1px #a29709;\
border-radius: 3px;\
}\
.ace-intelie .ace_fold {\
background-color: #50fa7b;\
border-color: #f8f8f2\
}\
.ace-intelie .ace_keyword {\
color: #ff79c6\
}\
.ace-intelie .ace_constant.ace_language {\
color: #795e9b\
}\
.ace-intelie .ace_constant.ace_numeric {\
color: #795e9b\
}\
.ace-intelie .ace_constant.ace_character {\
color: #795e9b\
}\
.ace-intelie .ace_constant.ace_character.ace_escape {\
color: #ff79c6\
}\
.ace-intelie .ace_constant.ace_other {\
color: #795e9b\
}\
.ace-intelie .ace_support.ace_function {\
color: #8be9fd\
}\
.ace-intelie .ace_support.ace_constant {\
color: #6be5fd\
}\
.ace-intelie .ace_support.ace_class {\
font-style: italic;\
color: #66d9ef\
}\
.ace-intelie .ace_support.ace_type {\
font-style: italic;\
color: #66d9ef\
}\
.ace-intelie .ace_storage {\
color: #ff79c6\
}\
.ace-intelie .ace_storage.ace_type {\
font-style: italic;\
color: #8be9fd\
}\
.ace-intelie .ace_invalid {\
color: #F8F8F0;\
background-color: #ff79c6\
}\
.ace-intelie .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #bd93f9\
}\
.ace-intelie .ace_string {\
color: #0bd5e6\
}\
.ace-intelie .ace_comment {\
color: #6272a4\
}\
.ace-intelie .ace_variable {\
color: #50fa7b\
}\
.ace-intelie .ace_variable.ace_parameter {\
font-style: italic;\
color: #ffb86c\
}\
.ace-intelie .ace_entity.ace_other.ace_attribute-name {\
color: #50fa7b\
}\
.ace-intelie .ace_entity.ace_name.ace_function {\
color: #50fa7b\
}\
.ace-intelie .ace_entity.ace_name.ace_tag {\
color: #ff79c6\
}\
.ace-intelie .ace_invisible {\
color: #626680;\
}\
.ace-intelie .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\
}";
exports.$selectionColorConflict = true;

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    ace.require(["ace/theme/intelie"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            