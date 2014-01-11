$(document).ready(function(){
var jes = document.getElementById("jes");

//reset 
function resetImage() {
    document.getElementById("GameFrame").style.padding = "0px";
    document.getElementById("GameFrame").style.backgroundColor = "gray";
	$("#aboutme").attr("src", "http://i.imgur.com/GuSFziM.png");
	$("#projects").attr("src", "http://i.imgur.com/4aJ1G3f.png");
	$("#blog").attr("src", "http://i.imgur.com/Q7pIFr9.png");
	$("#art").attr("src", "http://i.imgur.com/d8M4HyN.png");
}

$("#playslowlife").click(function(){
    resetImage();
    $("#jes").attr("src", "http://i.imgur.com/ji9JPFS.png");
if (document.getElementById("GameFrame") != "noise.html") {
        $("#GameFrame").fadeTo("slow" , 0.9, function(){
            $("#GameFrame").attr("src", "noise.html");
            $("#GameFrame").fadeTo("slow" , 0.9, function(){
            $("#GameFrame").attr("src", "https://dl.dropboxusercontent.com/u/169794876/Slow%20Life/index.html");
        });
        });
    } else {
        $("#GameFrame").fadeTo("slow" , 0.9, function(){
            $("#GameFrame").attr("src", "https://dl.dropboxusercontent.com/u/169794876/Slow%20Life/index.html");
        });
    }
    $("#GameFrame").attr("scrolling", "no");
    document.getElementById("GameFrame").style.backgroundColor = "#C0C0C0";
    document.getElementById("GameFrame").style.padding = "6px";
});
$("#aboutme").click(function(){
		resetImage();
        $("#jes").attr("src", "http://i.imgur.com/PEgz8tQ.png");
        $("#aboutme").attr("src", null);
if (document.getElementById("GameFrame") != "noise.html") {
        $("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "noise.html");
        	$("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "aboutme.html");
        });
        });
        
    } else {
    	$("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "aboutme.html");
        });
    }
    $("#GameFrame").attr("scrolling", "no");

});
$("#projects").click(function(){
	resetImage();
        $("#jes").attr("src", "http://i.imgur.com/CrIFoPY.png");
        $("#projects").attr("src", null);
        if (document.getElementById("GameFrame") != "noise.html") {
        $("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "noise.html");
        	$("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "projects.html");
        });
        });
        
    } else {
    	$("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "projects.html");
        });
    }
    $("#GameFrame").attr("scrolling", "yes");
});
$("#blog").click(function(){
	resetImage();
        $("#jes").attr("src", "http://i.imgur.com/9GHq1B3.png");
        $("#blog").attr("src", null);
        if (document.getElementById("GameFrame") != "noise.html") {
        $("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "noise.html");
        	$("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "blog.html");
        });
        });
        
    } else {
    	$("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "comingsoon.html");
        });
    }
    $("#GameFrame").attr("scrolling", "yes");
});
$("#art").click(function(){
	resetImage();
        $("#jes").attr("src", "http://i.imgur.com/L6gjzb4.png");
        $("#art").attr("src", null);
        if (document.getElementById("GameFrame") != "noise.html") {
        $("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "art.html");
        	$("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "art.html");
        });
        });
        
    } else {
    	$("#GameFrame").fadeTo("slow" , 0.9, function(){
        	$("#GameFrame").attr("src", "art.html");
        });
    }
    $("#GameFrame").attr("scrolling", "yes");
});

});