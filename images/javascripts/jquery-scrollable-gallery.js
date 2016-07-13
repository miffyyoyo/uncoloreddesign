// JavaScript Document

$(".scrollable").scrollable();

$(".items img").click(function() {

	// see if same thumb is being clicked
	if ($(this).hasClass("active")) { return; }

	// calclulate large image's URL based on the thumbnail URL (flickr specific)
	var url = $(this).attr("src").replace("_t", "");

	// get handle to element that wraps the image and make it semi-transparent
	var wrap = $("#image_wrap").fadeTo("medium", 0.5);

	// the large image from www.flickr.com
	var img = new Image();


	// call this function after it's loaded
	img.onload = function() {

		// make wrapper fully visible
		wrap.fadeTo("fast", 1);

		// change the image
		wrap.find("img").attr("src", url);

	};

	// begin loading the image from www.flickr.com
	img.src = url;

	// activate item
	$(".items img").removeClass("active");
	$(this).addClass("active");

// when page loads simulate a "click" on the first image
}).filter(":first").click();



// from tka
    $(function() {

        var origin_item=$(".scrollable .items img").clone();

        $(".scrollable .items").append(origin_item.clone());

        var scroller = $(".scrollable").

                scrollable().

                    autoscroll({ autoplay: true, interval:1000 }).

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
