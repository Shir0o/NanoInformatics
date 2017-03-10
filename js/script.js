(function ($) {
    "use strict";

    // $('#uploadFile').click(function () {
    //     $('#myFile').click();
    // });

    var articleAnnotator = $('  p').annotator({readOnly: false});

    $('#myFile').change(function () {

    });

    var optionstags = {
        tag:
            "imagery:red,parallelism:blue,sound:green,anaphora:orange"
    };
    $(function ($) {
        articleAnnotator.annotator('addPlugin','HighlightTags',optionstags);
    });

    /*
     $('h2').click(function () {
     $(this).trigger("dblclick");
     });

     $("#article").hover(function() {
     $(this).css("background-color","red")
     });
     */
})
