//Menu
var toogle=false;
var toogleS=false;
$("#toogle").click(function(e){
	//console.log("toogle");
    if(!toogle){
		e.stopPropagation();
		$('#access').show();
		$('#toogle').attr("class", "close");
        toogle=true;
		//Load images
		$('#menu-accueil').attr('class','menu-bg-accueil');
		$('#menu-livres').attr('class','menu-bg-livres');
		$('#menu-series').attr('class','menu-bg-series');
		$('#menu-carnets').attr('class','menu-bg-carnets');
        //alert("true");
    }else{
		$('#access').hide();
		$('#access-search').hide();
		$('#toogle').attr("class", "open");
        toogle=false;
        toogleS=false;
        //alert("false");
    }
});

//Search
$("#toogle-search").click(function(e){
    if(!toogleS){
		e.stopPropagation();
		$('#access-search').show();
		$('#toogle').attr("class", "close");
        toogleS=true;
        toogle=true;
    }else{
		$('#access').hide();
		$('#access-search').hide();
		$('#toogle').attr("class", "open");
        toogle=false;
        toogleS=false;
	}
});

/* Ajax functions */
$(document).ready(function($) {
    var that = $('#loadMore');
    //LoadMore exists
    if (that.length){

        //Force first load after timeout
        var firstLoad=true;

        var scrollFunction = function(){
            //console.log("scrollFunction");

            $(window).unbind("scroll");

            //totalPageHeight
            var totalPageHeight=$(document).height();

            //Position du scroll
            var scrollPoint = $(window).scrollTop() + $(window).height();
        
            // check if we are near the bottom of the page
            //if(scrollflag && scrollPoint >= totalPageHeight-500) {
            if(scrollPoint >= totalPageHeight-500 || firstLoad) {

                firstLoad=false;
                //clearTimeout(firstLoadID); 

                var page = that.data('page');
                var query = that.data('query');
                var ajaxurl = that.data('url');
                var posts_str=that.data('posts');
                var posts = posts_str.split(' ');
                if(posts_str.length!=0 && page>=posts.length) page=0;
                var newPage = page + 1;
                var postid="";
                if(posts_str.length>0){
                    postid=posts[page];
                }

                //ajax call
                $.ajax({
                    url: ajaxurl,
                    type: 'post',
                    data: {
                        page: page,
                        query: query,
                        post_id: postid,
                        action: 'ajax_script_load_more'
                    },
                    error: function(response) {
                        console.log(response);
                    },
                    success: function(response) {
                        //check
                        if (response == 0) {
                            $('#loadMore').hide();
                        } else {
                            $('#loadMore').data('page', newPage);
                            if(postid==""){
                                $('#infinite').append(response);
                            }else{
                                $('#content').append(response);
                            }

                            setTimeout(scrollFunction, 1000);
                        }
                    }
                });

            }else{
                $(window).scroll(scrollFunction);
            }

        }

        setTimeout(scrollFunction, 1000);
//        $(window).scroll(scrollFunction);

    }
});