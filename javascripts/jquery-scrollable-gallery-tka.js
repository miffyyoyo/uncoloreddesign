// JavaScript Document

// from tka
    $(function() {

        var origin_item=$(".scrollable .items img").clone();

        $(".scrollable .items").append(origin_item.clone());

        var scroller = $(".scrollable").

                scrollable().

                    autoscroll({ autoplay: true, interval:2000 }).

                        bind("onSeek", function(event, index){

                            var api  = $(".scrollable").data("scrollable");

                            $('#browsable .big-img').attr('src',  $(".scrollable .items img")[api.getIndex() ].src);

                            var api  = $(".scrollable").data("scrollable");

                            if( index > 0 && $(".scrollable .items img")[ index ].src == origin_item[ origin_item.length - 1].src){

                              $(".scrollable .items").append(origin_item.clone());

                            }

                        });





        $('#browsable .big-img').attr('src',  $(".scrollable .items img").attr("src"))



        $(".scrollable .items img").live('click', function(){

            var api  = $(".scrollable").data("scrollable");

            api.seekTo( $(".scrollable .items img").index( this ), 500);

        });

    });
