
function draw_sector(ctx,x,y,radius,start_a,end_a,radius_delta,value_color,vl) {

	

	//degree to rad
	start_a = 0.0174532925 * start_a;
	end_a = 0.0174532925 * end_a;
	
	ctx.beginPath();
	ctx.arc(x,y,radius,start_a,end_a,false);
	ctx.arc(x,y,radius-radius_delta,end_a,start_a,true);
	//ctx.fillStyle = 'green';
	//ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'black';
	ctx.stroke();	


}


function draw_sector_value(ctx,radius,sector,radius_delta,value_color,vl) {



	var centerX = vl.w_square / 2;
	var centerY = vl.h_square / 2;

	//degree to rad


	switch(sector) {
  case 0:	
  
  		start_a = 260;
  		end_a = 280;
  		
    break;
  
 case 1:	
  
  		start_a = 285;
  		end_a = 305;
  		
    break;
    
     case 2:	
  
  		start_a = 55;
  		end_a = 75;
  		
    break;
    
     case 3:	
  
  		start_a = 80;
  		end_a = 100;
  		
    break;
    
     case 4:	
  
  		start_a = 105;
  		end_a = 125;
  		
    break;
    
     case 5:	
  
  		start_a = 235;
  		end_a = 255;
  		
    break;  
  
}
	start_a = 0.0174532925 * start_a;
	end_a = 0.0174532925 * end_a;
	
	ctx.beginPath();
	ctx.arc(centerX,centerY,radius-1,start_a,end_a,false);
	ctx.arc(centerX,centerY,radius-radius_delta-1,end_a,start_a,true);
	//ctx.fillStyle = 'green';
	//ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'black';
	ctx.stroke();	


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
 
