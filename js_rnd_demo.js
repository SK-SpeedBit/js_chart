/*
    -------------   js_chart demo random data routines  ----------------
      (c) 2019 SpeedBit, reg. Czestochowa, Poland 
    --------------------------------------------------------------------
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/


// ------------------------- demo data start -------------------------

//////////////////////////////////////////////////////////////////////
//
// auxiliary functions only for generating random data for chart testing
//
//////////////////////////////////////////////////////////////////////

var debugstr = "";
function debug(s) {
	debugstr += s + " | ";
  var dt = document.getElementById("debug"); if (dt) dt.textContent=debugstr;
}


function debug1(s) {
  var dt = document.getElementById("debug1"); if (dt) dt.textContent=s;
}


function debug2(s) {
  var dt = document.getElementById("debug2"); if (dt) dt.textContent=s;
}


var data_1 = [];
var data_2 = [];
var data_3 = [];
var data_4 = [];
var data_5 = [];

var demostyle= [];
var demodata = [];
var demodesc = [];

let demolength = 30;      // -1 for random data length

function set_random_data_array(array) {
  const maxdatalength   = 30;      // maximum legth of demo data array if random length
  let differentsize     = true;   // each data array has different size (datalength)
  const maxdatavalue    = -0.0000000000661; // maximum value of demo data
  const mindatavalue    = -0.0000001; // minimum value of demo data
  const offsetedatavalue= -0.0000000048; // offset value of demo data
  const randomdeletedata= true;   // delete random data
  let numberofdelete    =  3;      // the amount of deletion of data
  const insertnulldata  = true;   // enter null for random data
  let numberofinserts   =  3;      // number of null entries
  

  array.splice(0, array.length);
  // demo data length
  if ((demolength==-1)	|| (differentsize) ) demolength = Math.round(Math.random() * maxdatalength); 
  // random data values
  for (let i = 0; i < demolength; i++) {
    let r=Math.random() * maxdatavalue;
    if (Math.random() > 0.5) r= Math.random() * mindatavalue;
    r += offsetedatavalue;
    array.push(r);
  }
  // insert null data - for test
  if (insertnulldata) {
    if (numberofinserts > demolength) numberofinserts = demolength;
    for (let i = 0; i < numberofinserts; i++) {
      let ind = Math.round(Math.random() * (demolength - 1));
      array[ind] = null;
    }
  }
  // random delete data - for test
  if (randomdeletedata) {
    if (numberofdelete > demolength) numberofdelete = demolength;
    for (let i = 0; i < numberofdelete; i++) {
      let ind = Math.round(Math.random() * (demolength - 1));
      delete array[ind];
    }
  }
}


function getRndRGBColor(alpha) {
  if (typeof alpha != "undefined") 
    return ("rgba(" + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," + alpha + ")");
  else   
    return ("rgb("  + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + ")");
}


function changeRGBAalpha(rgba, alpha) {
  if (typeof rgba == "undefined") return rgba;
  if ( !rgba.includes("rgba") ) return rgba;
  let str = rgba.split(",");
  str[3] = alpha + ")";
  return str[0] + "," + str[1] + "," + str[2] + "," + str[3];
}



function generate_random_data() {

  set_random_data_array(data_1);
  set_random_data_array(data_2);
  set_random_data_array(data_3);
  set_random_data_array(data_4);
  set_random_data_array(data_5);

  
  c1a  = getRndRGBColor(1); c1b  = changeRGBAalpha(c1a, 0.7);   c1c  = changeRGBAalpha(c1a , 0.5); Math.random();
  c2a  = getRndRGBColor(1); c2b  = changeRGBAalpha(c2a, 0.7);   c2c  = changeRGBAalpha(c2a , 0.5); Math.random();
  c3a  = getRndRGBColor(1); c3b  = changeRGBAalpha(c3a, 0.7);   c3c  = changeRGBAalpha(c3a , 0.5); Math.random();
  c4a  = getRndRGBColor(1); c4b  = changeRGBAalpha(c4a, 0.7);   c4c  = changeRGBAalpha(c4a , 0.5); Math.random();
  c5a  = getRndRGBColor(1); c5b  = changeRGBAalpha(c5a, 0.7);   c5c  = changeRGBAalpha(c5a , 0.5); Math.random();
  c6a  = getRndRGBColor(1); c6b  = changeRGBAalpha(c6a, 0.7);   c6c  = changeRGBAalpha(c6a , 0.5); Math.random();
  c7a  = getRndRGBColor(1); c7b  = changeRGBAalpha(c7a, 0.7);   c7c  = changeRGBAalpha(c7a , 0.5); Math.random();
  c8a  = getRndRGBColor(1); c8b  = changeRGBAalpha(c8a, 0.7);   c8c  = changeRGBAalpha(c8a , 0.5); Math.random();
  c9a  = getRndRGBColor(1); c9b  = changeRGBAalpha(c9a, 0.7);   c9c  = changeRGBAalpha(c9a , 0.5); Math.random();
  c10a = getRndRGBColor(1); c10b = changeRGBAalpha(c10a, 0.7);  c10c = changeRGBAalpha(c10a, 0.5); Math.random();
  c11a = getRndRGBColor(1); c11b = changeRGBAalpha(c11a, 0.7);  c11c = changeRGBAalpha(c11a, 0.5); Math.random();
  c12a = getRndRGBColor(1); c12b = changeRGBAalpha(c12a, 0.7);  c12c = changeRGBAalpha(c12a, 0.5); Math.random();
  
  bar_st_1 =["type=bar" , "linecolor=" + c1a, "fillcolor=" + c1b, "linewidth=1", "points=false", "pointsize=5", "pointcolor=" + c1c ];
  bar_st_2 =["type=bar" , "linecolor=" + c2a, "fillcolor=" + c2b, "linewidth=1", "points=false", "pointsize=5", "pointcolor=" + c2c ];
  bar_st_3 =["type=bar" , "linecolor=" + c3a, "fillcolor=" + c3b, "linewidth=1", "points=false", "pointsize=5", "pointcolor=" + c3c ];
  bar_st_4 =["type=bar" , "linecolor=" + c4a, "fillcolor=" + c4b, "linewidth=1", "points=true" , "pointsize=5", "pointcolor=" + c4c ];

  area_st_1=["type=area", "linecolor=" + c5a, "fillcolor=" + c5b, "linewidth=1", "points=false", "pointsize=5", "pointcolor=" + c5c, "beziercurve=true" ];
  area_st_2=["type=area", "linecolor=" + c6a, "fillcolor=" + c6b, "linewidth=2", "points=false", "pointsize=5", "pointcolor=" + c6c, "beziercurve=true" ];
  area_st_3=["type=area", "linecolor=" + c7a, "fillcolor=" + c7b, "linewidth=1", "points=false", "pointsize=5", "pointcolor=" + c7c, "beziercurve=true" ];
  area_st_4=["type=area", "linecolor=" + c8a, "fillcolor=" + c8b, "linewidth=2", "points=true", "pointsize=5", "pointcolor=" + c8c, "beziercurve=true" ];
 
  line_st_1=["type=line", "linecolor=" + c9a , "linewidth=2", "points=false",  "pointsize=5", "pointcolor=" + c9c , "beziercurve=true"];
  line_st_2=["type=line", "linecolor=" + c10a, "linewidth=2", "points=false",  "pointsize=5", "pointcolor=" + c10c, "beziercurve=true"];
  line_st_3=["type=line", "linecolor=" + c11a, "linewidth=2", "points=false",  "pointsize=5", "pointcolor=" + c11c, "beziercurve=true"];
  line_st_4=["type=line", "linecolor=" + c12a, "linewidth=2", "points=true" ,  "pointsize=5", "pointcolor=" + c12c, "beziercurve=true"];
  

  line_style=["type="        + "line", 
              "linecolor="   + "rgba(255, 250, 0, 1.0)", 
              "linewidth="   + "1" ,
              "points="      + "false",  
              "pointsize="   + "5", 
              "pointcolor="  + "rgba(255, 250, 0, 0.6)",
              "beziercurve=" + "true", 
              "beziercnst="  + "3" ];

  bar_style = ["type="       + "bar", 
               "linecolor="  + "rgba(0, 255, 250, 1.0)", 
               "fillcolor="  + "rgba(0, 255, 250, 0.6)", 
               "linewidth="  + "1",
               "points="     + "false",  
               "pointsize="  + "5", 
               "pointcolor=" + "rgba(0, 255, 250, 0.3)"];
             
  area_style=["type="        + "area", 
              "linecolor="   + "rgba(250, 0, 250, 1.0)",
              "fillcolor="   + "rgba(250, 0, 250, 0.6)",
              "linewidth="   + "1", 
              "points="      + "false", 
              "pointsize="   + "5", 
              "pointcolor="  + "rgba(250, 0, 250, 0.3)",
              "beziercurve=" + "true",
              "beziercnst="  + "3" ];

  //style = [bar_st_1, area_st_2, area_st_3, area_st_4, line_st_1, line_st_2];
  //data  = [data_1  , data_2   , data_3   , data_4   , data_5   , data_6   ];
  
  allStyle = [bar_st_1, area_st_1, line_st_1, bar_st_2, area_st_2, line_st_2, bar_st_3, area_st_3, line_st_3, bar_st_4, area_st_4, line_st_4];
  //allStyle = [bar_st_1, bar_st_2, bar_st_3, bar_st_4, bar_st_1, bar_st_2, bar_st_3, bar_st_4, bar_st_1, bar_st_2, bar_st_3, bar_st_4];

  function rndStyle() { return allStyle[Math.round(Math.random() * (allStyle.length-1))].slice(); }
  demostyle = [rndStyle(), rndStyle(), rndStyle(), rndStyle(), rndStyle(), rndStyle()];

  //demostyle = [bar_st_1, bar_st_2, bar_st_3];
  demodata  = [data_1, data_2, data_3, data_4, data_5];
  //demodata  = [data_1];
  let tl = Math.round(Math.random() * (demodata.length) ) + 1; // if +x then the demodata will accidentally contain a x non-existent data series - for test ;-)
  //if (tl == 0) tl = 1; // if we want to always have at least one data series
  demodata.length = tl;

  demodesc.length= 0;
  // time demo description of X-axis (the value may be incorrect - it's only for demo & test)
  for (let i = 0; i < demolength; i++) {
    m = (i * 15 % 60).toString();
    if (m == "0") m = "00"; 
    h = (Math.floor(i / 4) % 60).toString();
    demodesc.push("0" + h + ":" + m);
  }


}

// ------------------------- end of demo data -------------------------


