///https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep



function beep(scale) {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}



function draw_sector(ctx,x,y,radius,start_a,end_a,radius_delta,value_color,vl) {

	

	//degree to rad
	start_a = 0.0174532925 * start_a;
	end_a = 0.0174532925 * end_a;
	
	ctx.beginPath();
	ctx.arc(x,y,radius,start_a,end_a,false);
	ctx.arc(x,y,radius-radius_delta,end_a,start_a,true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'black';
	ctx.stroke();	


}


function draw_sector_value(ctx,sector,value_color,vl) {

///chrome://flags/#autoplay-policy para que funcione el beep.

var synth = new Tone.Synth().toMaster();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");

//beep(1);
console.log(value_color);
	var centerX = vl.w_square / 2;
	var centerY = vl.h_square / 2;
	
	//degree to rad


	switch(sector) {
  case 0:	
  
  		start_a = 250;
  		end_a = 290;
  		var delta_y = 0;
  		var radius = 390;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
  		
  		
    break;
  
 case 1:	
  
  		start_a = 320;
  		end_a = 350;
  		var delta_y = 100;
  		var radius = 310;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
    break;
    
     case 2:	
  
  		start_a = 190;
  		end_a = 220;
  		var delta_y = 100;
  		var radius = 310;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
    break;
    
     case 3:	
  
  		start_a = 10;
  		end_a = 40;
  		var delta_y = -130;
  		var radius = 310;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
  		
    break;
    
     case 4:	
  
   	start_a = 70;
  		end_a = 110;
  		var delta_y = -30;
  		var radius = 390;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
  		
    break;
    
     case 5:	
  
  		start_a = 140;
  		end_a = 170;
  		var delta_y = -130;
  		var radius = 310;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
  		
    break;  
  
}

//if (sector == 0) {
///console.log(value_color)
//console.log(valor)
//}
	start_a = 0.0174532925 * start_a;
	end_a = 0.0174532925 * end_a;
	
	ctx.beginPath();
	
	ctx.arc(centerX,centerY-delta_y,valor-2,start_a,end_a,false);
	ctx.arc(centerX,centerY-delta_y,radius-radius_delta+2,end_a,start_a,true);
	ctx.fillStyle = 'green';
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'green';
	ctx.stroke();
	
	ctx.closePath();
		
	ctx.beginPath();
	
	ctx.arc(centerX,centerY-delta_y,radius-2,start_a,end_a,false);
	ctx.arc(centerX,centerY-delta_y,valor+2,end_a,start_a,true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'white';
	ctx.stroke();
	ctx.closePath();
}


function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}	




function draw_car(id, vl){

		var ctx = id;
	
      var imageObj = new Image();

      imageObj.onload = function() {
      	
      	ctx.drawImage(imageObj,
        vl.w_square / 2 - vl.image_size_w / 2,
        vl.h_square / 2 - vl.image_size_h / 2,
        vl.image_size_w,vl.image_size_h
);

      };
      
      imageObj.src = 'car.png';
   
   var centerX = vl.w_square / 2;
	var centerY = vl.h_square / 2;
	
	
   
	
	draw_sector(id,centerX,centerY-100,310,320,350,100,0,vl);
	draw_sector(id,centerX,centerY,390,250,290,100,0,vl);
	draw_sector(id,centerX,centerY-100,310,190,220,100,0,vl);
	
	draw_sector(id,centerX,centerY+130,310,10,40,100,0,vl);
	draw_sector(id,centerX,centerY+30,390,70,110,100,0,vl);
	draw_sector(id,centerX,centerY+130,310,140,170,100,0,vl);
}
 
