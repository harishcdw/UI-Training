$(document).ready(function () {  
    jQuery.ajax({
        url: "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0",
        type: 'GET',
        success: function (obj) {
            dataready(obj);
            getPostersData();
        }
    });


    function dataready(obj) {
    //    left-container
       let $leftContainer = $("<div>");
        $leftContainer.attr("class", "left-container");
    // video container
        let $video = $("<video>");
        $video.attr("class", "video-container");
        $leftContainer.append($video);
        $video.attr("controls",true);
        $video.attr("poster","https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg");

        let $source = $("<source>");
        $source.attr("src" , obj.videoUrl);
        $source.src = obj.videoUrl;
    
        $video.append($source);

        let $desc = $("<div>");
        $desc.attr("class", "desc");

        $descTitle = $("<h3>");
        $desc.append($descTitle);
     
    // video description
        $descContent = $("<div>");
        $descContent.attr("class", "description");
       
        $desc.append($descContent);
        $leftContainer.append($desc);

        $lineBreak = $("<hr>");
        $leftContainer.append($lineBreak);

        // comments section
        $comments = $("<div>");
        $comments.attr("class", "comments");
        $leftContainer.append($comments);

        $commentTitle = $("<h3>");
        $comments.append($commentTitle);
        //    comments
        for (i in obj.comments) {
            $comments.append(
           ` <div class="comment-container">
                <div class="comment-image">
                    <img src="${obj.comments[i].image}"/> 
                </div>
                <div >
                    <div class="commenter-name">${obj.comments[i].name}</div>
                    <div class="commenter-comment">${obj.comments[i].comment}</div>
                </div>
            </div> `
            );
        }

        $(".main-container").append($leftContainer);
        $(".desc h3").html(obj.title);
        $(".description").html(obj.description);
        $(".comments h3").html("Comments");

    }

    function getPostersData() {
        jQuery.ajax({
            url: "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346",
            type: 'GET',
            success: function (obj) {
                dataready1(obj);
            }
        });
    }


    function dataready1(posters) {
        // left-container
        rightContainer = document.createElement("div");
        rightContainer.setAttribute("class", "right-container");
        $(".main-container").append(rightContainer);

        
        imageTitle = document.createElement("div");
        rightContainer.append(imageTitle);
        $(".right-container div").html("Upcoming Projects");


        for (i in posters) {

            pictureContainer = document.createElement("div");
            rightContainer.append(pictureContainer);

            picture = document.createElement("img");
            pictureContainer.append(picture);
            picture.src = posters[i].imageUrl;

        }

    }
});