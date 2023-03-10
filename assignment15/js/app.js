// data

 let obj={
        "videoUrl" : "https://ia800200.us.archive.org/7/items/Sintel/sintel-2048-stereo.mp4",
        "title" : "Sintel",
        "description" : "“Sintel” is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film. This 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. ",
        "comments" : [
            {
                "name" : "Micheal Scott",
                "image": "images/reviewers/micheal.png",
                "comment" : "How often do people make a film where the main character kills the thing they were trying to rescue because they didn’t recognize it? Not that often. This brought tears to my eyes."
            },
            {
                "name" : "Dwight K Schrute (Asst. to the Regional Manager)",
                "image": "images/reviewers/dwight.png",
                "comment" : "Breathtaking, I’ve only just begun my blender journey. Making something every day until I get to the point I can create something on this scale. Pretty amazing short story as well. Props all around to all involved in this great piece of work!"
            },
            {
                "name" : "Jim Halpert",
                "image" : "images/reviewers/jim.png",
                "comment" : "Only the best stories can make you cry, and while I’ve lost count how many times I’ve watched this remarkable piece of art  over the years showing it to people I know, Sintel brings a tear to my eye every time. This film is inspiring not only for the beautiful story but for the magical quality animation."
            },
            {
                "name" : "Pam Beesly Halpert",
                "image" : "images/reviewers/pam.png",
                "comment" : "This short film was riveting. The musical overlay was astounding and so were the animations. I was bawling like a little kid at the end of this video and not many videos are able to do this to me."
            },
            {
                "name" : "Angela Martin",
                "image" : "images/reviewers/angela.png",
                "comment" : "I saw this movie a long time ago as a child and it still scars me to this day. This is the kind of stuff that should AT THE VERY LEAST be played before a movie the way they showed bao before The Incredibles 2. These are little masterpieces."
            },
            {
                "name" : "Kevin Malone",
                "image" : "images/reviewers/kevin.png",
                "comment" : "Wow, at first I thought that it wasn’t that good, nice animation and all but not excellent story. Then I saw the end. The feels are real. You win Blender Foundation, you win."
            },
            {
                "name" : "Andy Bernard",
                "image": "images/reviewers/andy.png",
                "comment": "Honestly seeing a story with a sad ending is refreshing, I can tell you the ending of 99% of all movies ever made. “Its a happy ending”. Its why I like game of thrones and its why I loved this."
            }
        ]
    }
    




// left container

let mainContainer=document.querySelector(".main-container");

leftContainer=document.createElement("div");
leftContainer.setAttribute("class","left-container");
mainContainer.append(leftContainer);

// video container
video=document.createElement("video");
video.setAttribute("class","video-container");
leftContainer.appendChild(video);

video.controls=true;
video.poster="https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg"


source=document.createElement("source");
source.src=obj.videoUrl;
source.type="video/mp4";
video.append(source);

// description part
desc=document.createElement("div");
desc.setAttribute("class","desc");
leftContainer.append(desc);

descTitle=document.createElement("h3");
desc.append(descTitle);
document.querySelector(".desc h3").innerHTML=obj.title;

descContent=document.createElement("div");
desc.append(descContent);
document.querySelector(".desc div").innerHTML=obj.description;

lineBreak=document.createElement("hr");
leftContainer.append(lineBreak);

// comments part
comments=document.createElement("div");
comments.setAttribute("class","comments");
leftContainer.append(comments);

commentTitle=document.createElement("h3");
comments.append(commentTitle);
document.querySelector(".comments h3").innerHTML="Comments";


for(i in obj.comments)
{
    commentContainer=document.createElement("div");
    commentContainer.setAttribute("class","comment-container");
    comments.append(commentContainer);

    image_div=document.createElement("div");
    image_div.setAttribute("class","comment-image");
    commentContainer.append(image_div);

    image=document.createElement("img");
    image_div.append(image);
    image.src=obj.comments[i].image;

    image_content=document.createElement("div");
    commentContainer.append(image_content);

    commenter_name=document.createElement("div");
    commenter_name.setAttribute("class","commenter-name");
    image_content.append(commenter_name);
    commenter_name.innerHTML=obj.comments[i].name;


    commenter_comment=document.createElement("div");
    commenter_comment.setAttribute("class","commenter-comment");
    image_content.append(commenter_comment);
    commenter_comment.innerHTML=obj.comments[i].comment;

}


// right container

posters=[
    {
        "imageUrl" : "https://ddz4ak4pa3d19.cloudfront.net/cache/56/62/5662bc2079ee7ffd491b65c29a360ac9.jpg",
        "title" : "Sprite Fright"
    },
    {
        "imageUrl" : "https://cdna.artstation.com/p/assets/covers/images/019/392/064/large/andy-goralczyk-agent-poster-street-small.jpg?1563288236",
        "title" : "Agent 327"
    },
    {
        "imageUrl" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Spring2019AlphaPosterBlender.jpg/1200px-Spring2019AlphaPosterBlender.jpg",
        "title" : "Spring"
    }
]

rightContainer=document.createElement("div");
rightContainer.setAttribute("class","right-container");
mainContainer.append(rightContainer);


imageTitle=document.createElement("div");
rightContainer.append(imageTitle);
document.querySelector(".right-container div").innerHTML="Upcoming Projects";


for(i in posters){

pictureContainer=document.createElement("div");
rightContainer.append(pictureContainer);

picture=document.createElement("img");
pictureContainer.append(picture);
picture.src=posters[i].imageUrl;

}















    