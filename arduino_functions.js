//arduino functions


module.exports = {

generate_random_values: function () {

var d = new Date();
var n = d.getTime();

var a = n/100000;
var c = Math.floor(a);

//console.log(angle)

var f = -1000*(c-a);
var g = f.toFixed(0);

var p = g%360;
valor = Math.abs(Math.sin(p*3.1416/180)*50);
sensor = Math.floor(Math.random() * 6)
console.log(valor)
if (sensor == 0) {

return JSON.stringify({sensor:sensor,valor:valor});
}else {
	valor = 0;
	return JSON.stringify({sensor:sensor,valor:valor});
	}

},

  generate_amplitude_function: function (datos) {
    
degree = JSON.parse(datos).inputAngle;
direccion = JSON.parse(datos).inputDirection;  
    
  var rad = degree*3.1416/180
  
  var value = 10*Math.sin(30*rad).toFixed(2)+10;
    
  return JSON.stringify({angle:degree,direccion:direccion,data:value});
    
  },




funcion_conversion_node_ardu: function(data)
{

data_object = JSON.parse(data);

//console.log("ssss")
//console.log(data_object.inputAngle)

var output;

if (data_object.mode == 'data') {

output = {inputAngle:data_object.inputAngle,inputDirection:data_object.inputDirection};
	
}

return JSON.stringify(output);

},





funcion_conversion_ardu_node: function(data,mode,param)
{

data_a = JSON.parse(data);

var output = {mode:mode,inputParam:param,outputParam:param,inputAngle:data_a.angle,inputDirection:data_a.direccion,outputValue:data_a.data};

var output_JSON = JSON.stringify(output);

return output_JSON;

}

};

