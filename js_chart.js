/*
    -----------------------   js_chart ver. 1.0  -----------------------
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



//  --------------------------   js_chart   ----------------------------
class js_chart {
   
  constructor(container, Ydata, Ystyle, Xdesc, XaxisTxt, YaxisTxt) {
    // chart defaults parameters
    this.onmouseclick= true;   // mouse click event on/off
    this.onmousemove = true;   // mose move event on/off
    this.ontouchmove = true;   // touch move event on/off
    this.onmousedown = true;   // mouse down event on/off
    this.onmouseup   = true;   // mouse up event on/off
    this.onkeydown   = true;   // key down event on/off
    this.onkeyup     = true;   // key up event on/off
    this.oncontext   = true;   // block context menu event on/off (turn off context memu)
    
    this.axisXtxt    = "x";    // axis X description
    this.axisYtxt    = "y";    // axis Y description
    this.Ymax        =   0;    // Xmin or 0 for auto
    this.Ymin        =   0;    // Ymin or 0 for auto
    this.decimalX    =   0;    // decimal point X-axis
    this.decimalY    =   0;    // decimal point Y-axis
    // margins
    this.margv       = 15;     // vertical margin
    this.margh       = 35;     // horizontal margin
    // canvas background
    this.canvasbkcol = "rgba(250, 250, 170, 0.4)"; // canvas background color 
    this.canvasfrw   = 2;                          // canvas frame width
    this.canvasfrcol = "rgba(0, 0, 255, 1)";       // canvas frame color 
    // markers
    this.marw        =    8;  // width of marker
    this.drawaxis    = true;  // draw axis ?
    this.drawarrow   = true;  // draw axis arrows ?
    // axes & arrows & description
    this.al          = 18;    // arrow length
    this.aw          =  9;    // arrow width
    this.axcol       = "rgba(0,0,0,1)"; // axis color 
    this.axw         =  2;    // axis width
    this.axisdesc    = true;  // draw description of axis ?
    this.axdesccol   = "rgba(0,100,200,1)"; // axis description color 
    this.drawdesc    = true;  // draw values ?
    this.dgroup      = true;  // use group digits 
    this.drawmark    = true;  // draw markers ?
    this.descol      = "rgba(0,0,255,1)"; // description / markers color    
    this.descfpx     = 15;                // font size for description
    this.descfontmod = " italic ";        // font modifier
    this.descfont    = "px Courier New";  // description font
    this.rotdescX    = true;  // rotate the x-axis description 90 degrees
    this.drw0x       = true;  // draw zero value X-axis
    this.drw0y       = false; // draw zero value Y-axis
    this.hmarshift   = false; // move X markers by 1/2 size (for bars it's better)
    this.addmaxmarg  = 0.05;  // additional margin from max value to border. 0 = none, 0,01 = 1% of max value;
    // mesh
    this.drawmesh    = true;  // draw mesh ?
    this.mshcol      = "rgb(200,200,200, 0.7)"; // mesh color 
    // draw zone (for test)
    this.drawzone    = true;  // draw zone ?
    this.drawzfrm    = true;  // draw zone frame ?
    this.drwfracol   = "rgba(150,0,0,0.5)";      // draw zone frame color 
    this.drwfilcol   = "rgba(250,250,250, 0.3)"; // draw zone fill color 
    // cross & hint	style
    this.crXYline    = true;  // cross 
    this.crXjump     = true;  // jump on X markers
    this.crYjumpM    = false; // jump on Y markers
    this.crYjumpP    = true;  // jump on Y values
    this.crHint      = true;  // show hint
    this.crpointhint = true;  // show arc hint
    this.crpointfill = true;  // show arc hint
    this.crlinetomouse= false;// draw line to mouse cursor
    this.crlinetosmallhint= true; // draw line to small rectangle hint (onclick)
    // cross lines
    this.crlinecol   = "rgb(0,0,255)"; // color of cross lines
    this.crlinewidth = 1;              // width of cross lines
    this.crXlinedash = [7, 7];         // dash of cross lines X
    this.crYlinedash = [7, 7];         // dash of cross line Y
    // hint text
    this.hintwithctrl= true;                          // hint only when ctrl key is pressed
    this.hintfillcol = "rgba(150, 200, 150, 0.7)";    // hint rectangle fill color
    this.hintframewidth= 3;                           // hint rectangle line width
    this.hintrectcol = "rgba(50, 50, 50, 0.7)";       // hint rectangle line color
    this.hintfpx     = 11;
    this.hintfontmod = " italic ";  // hint font modifier
    this.hintfont    = "px Courier New"; // hint font
    this.hinttxtcol  = "rgb(0, 0, 50)";  // hint text color
    // hint data point
    this.hintpointw      = 5;                       // hint point width
    this.hintlinecol     = "rgba(50, 50, 50, 1)";   // hint frame color
    this.hintpointfill   = "rgba(50, 50, 150, 0.5)";// hint frame fill color
    this.hintpointlwdth  = 1;                       // hint point line width
    this.hintlinetoMcol  = "rgba(250, 0, 0, 1)";    // hint line to mouse color
    this.hintlinetoMwidth= 0.5;                     // hint line to mouse width
    this.hintmaxalpha    = false;                   // all hints fill with parameter alpha = 1
    // hint shadow
    this.hintdatashadow  = true;                       // hint data shadow ? (only if any bar chart exists)
    this.hintshadowcol   = "rgba(150, 150, 150, 0.2)"; // hint data shadow color
    // default line graph
    this.linecol      = "rgba(250, 0, 0, 0.6)"; // chart line color
    this.linewidth    = 2;                      // char line width
    this.linepoints   = false;                  // points on chart line ?
    this.linepointsize= 4;                      // points size	
    this.linepointcol = "rgba(250, 0, 0, 0.7)"; // points color	
    // default area graph
    this.arealine     = "rgb(250, 0, 250)";	     // area chart line color
    this.areafill     = "rgba(250, 0, 250, 0.3)";// area chart fill color
    this.areawidth    = 2;                       // area line width
    this.areapoints   = false;                   // points on area line ?
    this.areapointsize= 5;                       // area point size
    this.areapointcol = "rgb(250, 0, 250)";      // area point color
    // default bezier curve for line and area graph
    this.beziercurve  = true; // bezier curve or normal line ?
    this.beziercnst   = 3;    // bezier coefficient
    this.bezierlvloff = 3;    // global level auto off bezier curve. if data points number for one X markers > bezierlvloff 
                              // then bezier curve will be off. Value -1 block this feature. Optimal value is 3
    // default bar graph
    this.barline     = "rgb(0, 250, 250)";       // bar line color
    this.barfill     = "rgba(0, 250, 250, 0.3)"; // bar fill color
    this.barlw       = 1;                        // bar line width
    this.barpoints   = false;                    // points on bars ?
    this.barpointsize= 5;                        // bar point size
    this.barpointcol = "rgba(0, 250, 250, 0.3)"; // bar point color
    this.barperc     =  0.75; // percent filling bar markers
    this.bigmax      = 10000; // above this number, all data will be converted to the decimal power
    // for a partial chart (from the scope of data)
    this.allmaxmin = true; // false = auto from scope, true = auto from all data (if Ymax or Ymin  != 0 => these values will be constans)
    // mouse multi click - on/off points for all draws (mouse rigth key)
    this.multimsdown    = true; // on/off points for all draws
    this.multimsdowncnt = 3;    // number cliks for points switch
    this.multimstout    = 1000; // timeout for points switch
    this.multimsdowncol = "rgba(0, 0, 0, 0.15)"; // color for points switch
    // shedow when select zoom
    this.hintselectshadow  = true;               // on/off select shadow
    this.hintselectcol  = "rgba(0, 0, 0, 0.3)";  // select shadow color
    // shift chart left/rigth by moouse left click (if zoomed)
    this.mouseclickLR   = true; // on/off shift
    this.LRsize         = 1/5;  // click area (left and right) - fraction of the entire chart area 1/5 = 20%
    this.hintzoomcol    = "rgba(0, 250, 0, 0.15)"; // color of the shift click area 
    this.undozoompx     = 20;   // the number of pixels by which the mouse must be moved to the left to undo the magnification
    
//--- internal ------------------------------------------------------------
    
    // this must be for start
    if (typeof container == "undefined") return -1; // no container
    if (typeof Ydata     == "undefined") return -2; // no data
    if (typeof Ystyle    == "undefined") return -3; // no style
    // get data reference
    this.data  = Ydata;
    this.style = Ystyle;
    this.desc  = Xdesc;
    // axis text
    if (typeof XaxisTxt != "undefined") this.axisXtxt = XaxisTxt;
    if (typeof YaxisTxt != "undefined") this.axisYtxt = YaxisTxt;
    // varables and calculations
    this.container = container; // main container 
    this.ctx   ; // main context
    this.ctxl2 ; // cross & hint context
    this.canvas; // main canvas
    this.layer2; // cross & hint canvas
    this.canvas = document.createElement("canvas"); this.canvas.id = "canvas";
    this.layer2 = document.createElement("canvas"); this.layer2.id = "layer2";
    this.canvas.style.zindex= 1;
    this.layer2.style.zindex= 2;
    this.canvas.style.order = "1";
    this.layer2.style.order = "2";
    this.layer2.style.position = "absolute";
    this.canvas.style.position = "absolute";
    document.getElementById(container).appendChild(this.canvas);
    document.getElementById(container).appendChild(this.layer2);
    this.ctx   = this.canvas.getContext("2d");
    this.ctxl2 = this.layer2.getContext("2d");

    this.alldatalength = 0;

    // zoom data
    this.datalength = 0;
    this.from = 0;
    this.zoom = false;

    // find the data length and maximum values
    if ( Array.isArray(this.data) ) {
      for (let i=0; i < this.data.length; i++ ) 
        if ( (typeof this.data[i] != "undefined") && 
             (this.alldatalength < this.data[i].length)) this.alldatalength = this.data[i].length;
    }
    this.datalength = this.alldatalength;
    // zoom data 
    this.to         = this.alldatalength;
    
    this.eventsactivated = false; // events invoked only once!
    this.pointclicked    = false; // mouse point clicked 
    // chart data
    this.xdiv   = 0;
    this.wght   = 0; // calculated weight of Y data	
    this.barcnt = 0; // count bar charts 
    this.barnr  = 0; // bar number for draw
    this.marhpx = 0;
    this.zlvl   = 0;
    this.lvlv   = this.margh + this.marw * 2; // level vertical axis

    this.dcorr  = 1; // data corrector
    this.aYtxt  = "Y";
    // axis data
    this.lft    = 0; // left margin
    this.top    = 0; // top margin
    this.rgt    = 0; // right margin
    this.bot    = 0; // bottom margin
    this.zerox  = 0; // level zero
    this.drt    = 0; // draw top
    this.drb    = 0; // draw bottom
    this.drl    = 0; // draw left
    this.drr    = 0; // draw right
    this.drv    = 0; // draw height
    
    this.allpoints = false; //
    
  } // constructor
  

  update(Ydata, Ystyle, Xdesc, XaxisTxt, YaxisTxt) {
    if (typeof Ydata    != "undefined") this.data     = Ydata   ; // new data
    if (typeof Ystyle   != "undefined") this.style    = Ystyle  ; // new style
    if (typeof Xdesc    != "undefined") this.desc     = Xdesc   ; // new desc
    if (typeof XaxisTxt != "undefined") this.axisXtxt = XaxisTxt; // new X axis text
    if (typeof YaxisTxt != "undefined") this.axisYtxt = YaxisTxt; // new Y axis text 
    this.alldatalength = 0;
    // find the length and maximum values of new data 
    if ( Array.isArray(this.data) ) {
      for (let i = 0; i < this.data.length; i++ ) 
        if ( (typeof this.data[i] != "undefined") && 
             (this.alldatalength < this.data[i].length)) this.alldatalength = this.data[i].length;
    }	
    if (this.datalength > this.alldatalength) { // new data is shorter
      this.from = 0;
      this.to   = this.alldatalength;
      this.zoom = false;
    }
    self.allpoints = false; // new draw..
    this.draw();
  }



  left() {
    if (!this.zoom) return;     // no zoom
    if (this.from == 0) return; // not possible
    this.from--;
    this.to--;
    this.draw();
  }

  
  
  right() {
    if (!this.zoom) return; // no zoom
    if (this.to >= this.alldatalength) return; // not possible
    this.from++;
    this.to++;
    this.draw();
  }

  
  
  draw_FromTo(from, to) {
    if (( from <  0) || (from >= this.alldatalength) ) return -1;
    if (( to   <  0) || (to   >  this.alldatalength) ) return -1;
    if (( from > to) || (from == to ) ) return -1;
    this.from = from;
    this.to   = to;
    this.zoom = true;
    if ((this.from == 0) && (this.to == this.alldatalength)) this.zoom = false;
    this.draw();
  }
  
  draw_FromCount(from, cnt) {
    if (( from <  0) || (from > this.alldatalength - 2 ) ) return -1; // params error
    if (  cnt  <= 1) return -1;
    if ( ( from + cnt ) > this.alldatalength ) cnt = this.alldatalength - from;
    this.from = from;
    this.to   = from + cnt;
    this.zoom = true;
    if ((this.from == 0) && (this.to == this.alldatalength)) this.zoom = false;
    this.draw();
  }
  
  undozoom() {
    this.from = 0;
    this.to   = this.alldatalength;
    this.datalength = this.alldatalength;
    this.zoom = false;
    this.draw();
  }
  
   
  clear() {
    // main canvas & layer2 clear
    this.ctx.clearRect  (0, 0, this.ctx.canvas.width  , this.ctx.canvas.height );
    this.ctxl2.clearRect(0, 0, this.ctxl2.canvas.width, this.ctxl2.canvas.height);
  }
  
  
  redraw() { this.draw(); }
  
  
  draw() {
    // set canvas position and dimmensions the same as parent dimmensions 
    let cv = document.getElementById(this.container);
    
    this.canvas.style.left = 0 ;
    this.canvas.style.top  = 0   ;
    this.canvas.width      = cv.offsetWidth ;
    this.canvas.height     = cv.offsetHeight;
    
    this.layer2.style.left = 0 ;
    this.layer2.style.top  = 0   ;
    this.layer2.width      = cv.offsetWidth ;
    this.layer2.height     = cv.offsetHeight;

    this.lft   = this.margh;     // left margin
    this.top   = this.margv;     // top margin
    this.rgt   = this.ctx.canvas.clientWidth  - this.margh;  // right margin
    this.bot   = this.ctx.canvas.clientHeight - this.margv;  // bottom margin
    this.zerox = 0;              // level zero
    this.drt   = this.top + this.al * 1.5; // draw top
    this.drb   = this.bot - this.marw;     // draw bottom
    this.drl   = this.lvlv;                // draw left
    this.drr   = this.rgt - this.al * 1.5; // draw right
    this.drv   = this.drb - this.drt;      // draw height
 
    this.make_chart();
  }



  // internal, main function of the chart engine
  make_chart() {
    let self = this;
    //---------------------------------------------
    let minv       = 0; // min of Y data
    let maxv       = 0; // max of Y data
    //---------------------------------------------
    let rangev     = { minv:0, maxv:0};           // range of data - min & max
    let marpldata  = { cnt:0, factor:1, weight:1} // markers data plus
    let marmidata  = { cnt:0, factor:1, weight:1} // markers data minus 
    let marxdata   = { cnt:0, div:1}              // markers data X 

    let maxhm = 0;
    let marh  = 0;
    
    function getMinMax(arr) {
      if (typeof arr == "undefined") return { "min":0, "max":0 };
      let min   = 0;
      let max   = 0;
      let start = 0;
      let stop  = arr.length;
      if ( self.zoom && !self.allmaxmin )
      {
        start = self.from;
        stop  = self.to;
      }
      for (let i = start; i < stop; i++) {
        min = arr[i] < min ? arr[i] : min;
        max = arr[i] > max ? arr[i] : max;
      }
      return { "min":min, "max":max };
    }


    function getMaxMarkerValue(maxvalue, marcntmax) {
      if ((marcntmax == 0) || (maxvalue==0)) return { "cnt":1, "factor":0, "weight": 0, "value": 0}
      maxvalue   = Math.abs(maxvalue);
      marcntmax  = Math.abs(marcntmax);
      let weight = 1;
      let factor = 0;
      let marcntact = 0;
      if (maxvalue > 1) {
        do {
          factor = 0.1 ; marcntact = Math.abs( maxvalue / (factor * weight) ); if (marcntact <= marcntmax) break;
          factor = 0.2 ; marcntact = Math.abs( maxvalue / (factor * weight) ); if (marcntact <= marcntmax) break;
          factor = 0.25; marcntact = Math.abs( maxvalue / (factor * weight) ); if (marcntact <= marcntmax) break;
          factor = 0.5 ; marcntact = Math.abs( maxvalue / (factor * weight) ); if (marcntact <= marcntmax) break;
          factor = 1.0 ; marcntact = Math.abs( maxvalue / (factor * weight) ); if (marcntact <= marcntmax) break;
          factor = 2.0 ; marcntact = Math.abs( maxvalue / (factor * weight) ); if (marcntact <= marcntmax) break;
          factor = 2.5 ; marcntact = Math.abs( maxvalue / (factor * weight) ); if (marcntact <= marcntmax) break;
          factor = 5.0 ; marcntact = Math.abs( maxvalue / (factor * weight) ); if (marcntact <= marcntmax) break;
          //factor = 7.5; marcntact = ( maxvalue / (factor * weight) );	if (marcntact <= marcntmax) break;
          weight = weight * 10;
        } while (marcntact > marcntmax);
      }
      else { // maxvalue < 1
        do {
          factor = 8.0; marcntact = Math.abs( (maxvalue * weight) / factor );	if (marcntact >= marcntmax) break;
          factor = 7.5; marcntact = Math.abs( (maxvalue * weight) / factor );	if (marcntact >= marcntmax) break;
          factor = 6.0; marcntact = Math.abs( (maxvalue * weight) / factor );	if (marcntact >= marcntmax) break;
          factor = 5.0; marcntact = Math.abs( (maxvalue * weight) / factor );	if (marcntact >= marcntmax) break;
          factor = 2.5; marcntact = Math.abs( (maxvalue * weight) / factor );	if (marcntact >= marcntmax) break;
          factor = 2.0; marcntact = Math.abs( (maxvalue * weight) / factor );	if (marcntact >= marcntmax) break;
          factor = 1.0; marcntact = Math.abs( (maxvalue * weight) / factor );	if (marcntact >= marcntmax) break;
          weight = weight * 10;
        } while (marcntact < marcntmax);
        // previous values are good
        if (Math.abs( (maxvalue * weight) / factor ) > marcntmax) {
          if (factor == 8.0) { factor = 1.0; weight = weight / 10; }
          if (factor == 7.5) { factor = 8.0; }
          if (factor == 7.0) { factor = 7.5; }
          if (factor == 5.0) { factor = 7.0; }
          if (factor == 2.5) { factor = 5.0; }
          if (factor == 2.0) { factor = 2.5; }
          if (factor == 1.0) { factor = 2.0; }
          marcntact = Math.abs( (maxvalue * weight) / factor );
        }
        weight = 1 / weight;
      }
      return { "cnt":marcntact, "factor":factor, "weight": weight, "value": (factor * weight) }
    }
    
    
    function getXmarkersDiv(data_cnt, maxhm) {
      let marcnt = data_cnt;
      let div    = 1;
      let weight = 1;
      do {
        div = 1; marcnt = Math.abs( data_cnt / (div * weight) ); if (marcnt <= maxhm) break;
        div = 2; marcnt = Math.abs( data_cnt / (div * weight) ); if (marcnt <= maxhm) break;
        div = 5; marcnt = Math.abs( data_cnt / (div * weight) ); if (marcnt <= maxhm) break;
        weight = weight * 10;
      } while (marcnt > maxhm);
      return { "cnt": marcnt, "div": div * weight }
    }
    
    
    function getStyle(style, name, defvalue) {
      let s;
      if (typeof style == "undefined") return defvalue;
      for (let i = 0; i < style.length; i++ ) {
        if (typeof style[i] == "undefined") continue;
        s = style[i].split("=");
        if (s[0] == name) return s[1];
      }
      return defvalue;
    }


    function changeRGBAalpha(rgba, alpha) {
      if (typeof rgba == "undefined") return rgba;
      if ( !rgba.includes("rgba") ) return rgba;
      let str = rgba.split(",");
      str[3] = alpha + ")";
      return str[0] + "," + str[1] + "," + str[2] + "," + str[3];
    }


    //--- GRAPHS ---------------------------------------------------------------------------------

    // line graph
    function do_line_graph(data, style) {
      if (typeof data == "undefined") return; // if no data then exit
      let w1 = 0;
      let w2 = 0;
      if (maxv != 0) { w1 = Math.abs( (self.zlvl - self.drt ) / maxv ); } else w1 = 0;
      if (minv != 0) { w2 = Math.abs( (self.drb  - self.zlvl) / minv ); } else w2 = 0;
      self.wght = Math.max(w1, w2);
      let loclinecolor   = getStyle(style, "linecolor"  , self.linecol      );
      let loclinewidth   = getStyle(style, "linewidth"  , self.linewidth    );
      let loclinepoints  = getStyle(style, "points"     , self.linepoints   ).toString() == "true";
      let locpointsize   = getStyle(style, "pointsize"  , self.linepointsize);
      let locpointcolor  = getStyle(style, "pointcolor" , self.linepointcol );
      let locbeziercurve = getStyle(style, "beziercurve", self.beziercurve  ).toString() == "true";
      let locbezierconst = getStyle(style, "beziercnst" , self.beziercnst   );

      if (getStyle(style, "pointcolor" , null) == null) locpointcolor  = changeRGBAalpha(loclinecolor, 0.3);

      // Chart line
      self.ctx.strokeStyle = loclinecolor;
      self.ctx.fillStyle   = loclinecolor;
      self.ctx.lineWidth   = loclinewidth;
      let lastdef = false;
      let x = 0; let x1 = 0;
      let y = 0; let y1 = 0;
      for (let i = 0; i < self.datalength; i++) {
        let x0def = (typeof data[i + 0 + self.from * self.zoom] != "undefined") && (data[i + 0 + self.from * self.zoom] != null);
        let x1def = (typeof data[i + 1 + self.from * self.zoom] != "undefined") && (data[i + 1 + self.from * self.zoom] != null);
        if (i == self.datalength - 1) x1def = false;
        x = self.lvlv + ((i * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
        if (x0def) y = self.zlvl - (data[i + self.from * self.zoom] * self.wght * self.dcorr);
        else       y = self.zlvl;
        // first data
        if (x0def && !lastdef) {
          self.ctx.beginPath();
          self.ctx.moveTo(x, y);
          self.ctx.lineTo(x, y);
        }	
        // middle data
        if (x0def && x1def) {
          if (locbeziercurve) { //bezier curve
            x1 = self.lvlv + ( ( (i + 1) * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
            y1 = self.zlvl - (data[i + 1 + self.from * self.zoom] * self.wght * self.dcorr);
            self.ctx.bezierCurveTo(x + self.marhpx / locbezierconst, y, x1 - self.marhpx / locbezierconst, y1, x1, y1);	
          }
          else
            self.ctx.lineTo(x, y);
        }
        // last data
        if (x0def && !x1def) {
          self.ctx.lineTo(x, y);
          //self.ctx.lineTo(x, self.zlvl);
          self.ctx.stroke();
          //self.ctx.fill();
          self.ctx.closePath();
          self.ctx.beginPath();
        }
        lastdef = x0def;
      }	
      // data big points
      if (loclinepoints || self.allpoints) { 
        self.ctx.beginPath();
        self.ctx.strokeStyle = locpointcolor;	
        self.ctx.fillStyle   = locpointcolor;
        self.ctx.arc(self.lvlv + self.hmarshift * (self.marhpx / 2), self.zlvl - data[0 + self.from * self.zoom] * self.wght * self.dcorr , locpointsize, 0, 2 * Math.PI);
        self.ctx.stroke();
        self.ctx.fill();
        for (let i = 1; i < self.datalength; i++) {
          self.ctx.beginPath();
          self.ctx.arc(self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2), self.zlvl - data[i + self.from * self.zoom] * self.wght * self.dcorr, locpointsize, 0, 2 * Math.PI);
          self.ctx.stroke();
          self.ctx.fill();
        }
      }
    }
    


    // bar graph
    function do_bar_graph(data, style) {
      if (typeof data == "undefined") return; // if no data then exit
      let w1 = 0;
      let w2 = 0;
      if (maxv != 0) { w1 = Math.abs( (self.zlvl - self.drt ) / maxv ); } else w1 = 0;
      if (minv != 0) { w2 = Math.abs( (self.drb  - self.zlvl) / minv ); } else w2 = 0;
      self.wght = Math.max(w1, w2);
      // Chart bar
      self.ctx.strokeStyle = getStyle(style, "linecolor", self.barline);
      self.ctx.fillStyle   = getStyle(style, "fillcolor", self.barfill);
      self.ctx.lineWidth   = getStyle(style, "linewidth", self.barlw  );
      let locpoints    = getStyle(style, "points"     , self.barpoints   ).toString() == "true";
      let locpointsize = getStyle(style, "pointsize"  , self.barpointsize);
      let locpointcolor= getStyle(style, "pointcolor" , self.barpointcol );
      
      if (getStyle(style, "pointcolor" , null) == null) locpointcolor  = changeRGBAalpha(self.ctx.fillStyle, 0.3);
      
      self.ctx.beginPath();
      let xdef = false;        // is data?
      let wdh  = self.marhpx * self.barperc; // place for all bars
      let wob  = wdh / self.barcnt; // width of one bar
      let x = 0;
      let y = 0;
      for (let i = 0; i < self.datalength; i++) {
        xdef = (typeof data[i + self.from * self.zoom] != "undefined") && (data[i + self.from * self.zoom] != null);
        if (xdef) {
          x = self.lvlv + ((i * self.marhpx) / self.xdiv) + (wob * self.barnr) + self.hmarshift * ((self.marhpx / 2) - (wdh / 2));
          y = self.zlvl - (data[i + self.from * self.zoom] * self.wght * self.dcorr);
          // draw rectangle
          self.ctx.rect(x , y, wob, self.zlvl - y);
        }
      }
      self.ctx.stroke(); 
      self.ctx.fill();
      self.ctx.closePath();
      self.barnr++; // bar counter ++
      // data big points
      if (locpoints || self.allpoints) { 
        self.ctx.beginPath();
        self.ctx.strokeStyle = locpointcolor;	
        self.ctx.fillStyle   = locpointcolor;
        //self.ctx.arc(self.lvlv + self.hmarshift * (self.marhpx / 2), self.zlvl - data[0 + self.from * self.zoom] * self.wght  * self.dcorr, locpointsize, 0, 2 * Math.PI);
        self.ctx.stroke();
        self.ctx.fill();
        for (let i = 0; i < self.datalength; i++) {
          self.ctx.beginPath();
          x = self.lvlv + ((i * self.marhpx) / self.xdiv) + (wob * self.barnr) + self.hmarshift * ((self.marhpx / 2) - (wdh / 2) - wob/2);
          y = self.zlvl - (data[i + self.from * self.zoom] * self.wght * self.dcorr);
          self.ctx.arc(x, y, locpointsize, 0, 2 * Math.PI);
          self.ctx.stroke();
          self.ctx.fill();
        }
      }
    }



    // area graph
    function do_area_graph(data, style) { 
      if (typeof data == "undefined") return; // if no data then exit
      let w1 = 0;
      let w2 = 0;
      if (maxv!=0) { w1 = Math.abs( (self.zlvl - self.drt ) / maxv ); } else w1 = 0;
      if (minv!=0) { w2 = Math.abs( (self.drb  - self.zlvl) / minv ); } else w2 = 0;
      self.wght = Math.max(w1, w2);
      let loclinecolor   = getStyle(style, "linecolor"  , self.arealine     );
      let loclinewidth   = getStyle(style, "linewidth"  , self.areawidth    );
      let locfillcolor   = getStyle(style, "fillcolor"  , self.areafill     );
      let locpoints      = getStyle(style, "points"     , self.areapoints   ).toString() == "true";
      
      let locpointsize   = getStyle(style, "pointsize"  , self.areapointsize);
      let locpointcolor  = getStyle(style, "pointcolor" , self.areapointcol );
      let locbeziercurve = getStyle(style, "beziercurve", self.beziercurve  ).toString() == "true";
      let locbezierconst = getStyle(style, "beziercnst" , self.beziercnst   );

      self.ctx.strokeStyle = loclinecolor;	
      self.ctx.fillStyle   = locfillcolor;
      self.ctx.lineWidth   = loclinewidth;
      
      if (getStyle(style, "pointcolor" , null) == null) locpointcolor = changeRGBAalpha(locfillcolor, 0.3);
      
      let lastdef = false;
      let x = 0; let x1 = 0;
      let y = 0; let y1 = 0;
      
      for (let i = 0; i < self.datalength; i++) {
        let x0def = (typeof data[i + 0 + self.from * self.zoom] != "undefined") && (data[i + 0 + self.from * self.zoom] != null);
        let x1def = (typeof data[i + 1 + self.from * self.zoom] != "undefined") && (data[i + 1 + self.from * self.zoom] != null);
        if (i == self.datalength - 1) x1def = false;
        
        x = self.lvlv + ((i * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
        y = 0;;
        if (x0def) y = self.zlvl - (data[i + self.from * self.zoom] * self.wght * self.dcorr);
        else       y = self.zlvl;
        // first data
        if (x0def && !lastdef) {
          self.ctx.beginPath();
          self.ctx.moveTo(x, self.zlvl);
          self.ctx.lineTo(x, y);
        }	
        // middle data
        if (x0def && x1def) {
          if (locbeziercurve) { //bezier curve
            x1 = self.lvlv + ( ( (i + 1) * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
            y1 = self.zlvl - (data[i + 1 + self.from * self.zoom] * self.wght * self.dcorr);
            self.ctx.bezierCurveTo(x + self.marhpx / locbezierconst, y, x1 - self.marhpx / locbezierconst, y1, x1, y1);	
          }
          else
            self.ctx.lineTo(x, y);
        }
        // last data
        if (x0def && !x1def) {
          self.ctx.lineTo(x, y);
          self.ctx.lineTo(x, self.zlvl);
          self.ctx.stroke();
          self.ctx.fill();
          self.ctx.closePath();
          self.ctx.beginPath();
        }
        lastdef = x0def;
      }
      // data big points
      if (locpoints || self.allpoints) { 
        self.ctx.beginPath();
        self.ctx.strokeStyle = locpointcolor;	
        self.ctx.fillStyle   = locpointcolor;
        self.ctx.arc(self.lvlv + self.hmarshift * (self.marhpx / 2), self.zlvl - data[0 + self.from * self.zoom] * self.wght * self.dcorr , locpointsize, 0, 2 * Math.PI);
        self.ctx.stroke();
        self.ctx.fill();
        for (let i = 1; i < self.datalength; i++) {
          self.ctx.beginPath();
          self.ctx.arc(self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2), self.zlvl - data[i + self.from * self.zoom] * self.wght * self.dcorr, locpointsize, 0, 2 * Math.PI);
          self.ctx.stroke();
          self.ctx.fill();
        }
      }
    }



    // make all charts ...
    function do_graph() {
      if (typeof self.style == "undefined") return;
      for (let i = 0; i < self.data.length; i++) {
        if (typeof self.style[i] == "undefined") continue;
      }
      for (let i = 0; i < self.data.length; i++) {
        if (typeof self.style[i] == "undefined") continue;
        if (getStyle(self.style[i], "type", "") == "line" ) do_line_graph(self.data[i], self.style[i]); else
        if (getStyle(self.style[i], "type", "") == "area" ) do_area_graph(self.data[i], self.style[i]); else
        if (getStyle(self.style[i], "type", "") == "bar"  ) do_bar_graph (self.data[i], self.style[i]); else
        ;
      }
    }	


    function isBar (i) {	return getStyle(self.style[i], "type", "") == "bar" ; }
    function isArea(i) {	return getStyle(self.style[i], "type", "") == "area"; }
    function isLine(i) {	return getStyle(self.style[i], "type", "") == "line"; }
    
    
    // ------------------------- start of events -------------------------

    
    var lastX = 0;
    var lastY = 0;   
    var Zfrom = 0;
    var ZRfrom= 0;
    var Zto   = 0;
    var mouseisdown  = false;
    var mousebuttons = 0;
    var lastRX = 0;
    // mouse events
    function on_mouseMove(ev) {
      let lastXshadow = lastX;
      
      if (ev.type != "keydown") {
        lastX = ev.offsetX;
        lastY = ev.offsetY;
      }
      
      if (self.data.length <= 0) return;
      if (self.pointclicked) return; // then mouse hint stay on screen
      let xnbr = 0;
      let ynbr = 0;
      let x = ev.offsetX;
      let y = ev.offsetY;  
      
      if (ev.type != "mousemove") {
        x = lastX;
        y = lastY;  
      }

      // clear layer2 canvas 
      self.ctxl2.clearRect(0, 0, self.layer2.width, self.layer2.height);
      if ((y >= self.drt) && (y <= self.drb) &&
          (x >= self.drl) && (x <= self.drr)) {
        self.ctxl2.lineWidth   = self.crlinewidth;
        self.ctxl2.setLineDash (self.crYlinedash);
        self.ctxl2.strokeStyle = self.crlinecol;

        xnbr = Math.round( (x - self.lvlv - self.hmarshift * (self.marhpx / 2) ) / (self.marhpx / self.xdiv) );
        if ( isNaN(xnbr) || (xnbr < 0 ) || (xnbr >= self.datalength) ) return;
        let xJump = self.lvlv + ((xnbr * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
        
        let LRmarg = self.LRsize * self.drv;
        if (self.zoom && self.mouseclickLR && !ev.shiftKey) {
          // left shift area
          if ( (x > self.drl) && (x < self.drl + LRmarg) ) {
              self.ctxl2.fillStyle = self.hintzoomcol;
              self.ctxl2.beginPath();
              self.ctxl2.fillRect(self.drl, self.drt, LRmarg, self.drv);
              self.ctxl2.stroke(); 
              self.ctxl2.fill(); 
              self.ctxl2.closePath();
          }
          // right shift area
          if ( (x > self.drr - LRmarg) && (x < self.drr) ) {
              self.ctxl2.fillStyle = self.hintzoomcol;
              self.ctxl2.beginPath();
              self.ctxl2.fillRect(self.drr - LRmarg, self.drt, LRmarg, self.drv);
              self.ctxl2.stroke(); 
              self.ctxl2.fill(); 
              self.ctxl2.closePath();
          }
        }
        // draw shadow when zoom is selected?
        if ( self.hintselectshadow ) { 
          if ( (ev.shiftKey) && mouseisdown && (mousebuttons == 1) ) { // 1 = mouse left key 
            Zto = xnbr + self.from;
            let xFrom = self.lvlv + (((Zfrom - self.from) * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
            let selx = xJump - xFrom; 
            if (selx < 1) selx = self.marhpx;
            self.ctxl2.fillStyle = self.hintselectcol;
            let difx = self.marhpx / 2;
            self.ctxl2.beginPath();
            // check if the rectangle is outside the boundary
            if ((xFrom + selx) > self.drr) selx = self.drr - xFrom;
            if (Zfrom>Zto) selx = 0;
            // it's not maximum zoom? - draw rectangle
            if (Math.abs(self.from - self.to) > 2) // two markers on the screen plus one because the upper limit is exclusive
              self.ctxl2.fillRect(xFrom, self.drt, selx, self.drb - self.drt);
            self.ctxl2.stroke(); 
            self.ctxl2.fill(); 
            self.ctxl2.closePath();
            // undo zoom
            if ((x-lastXshadow) < (-self.undozoompx)) { 
              Zfrom = 0;
              Zto   = 0;
              mouseisdown = false;
              self.undozoom();
             }
            return; // nothing else to do in this time
          }
        }
        
        // hint only with ctrl ?  
        if (self.hintwithctrl && !ev.ctrlKey) return;
                      
        // data shadow (only if any bar chart exists)
        if (self.hintdatashadow) {
          if ( self.barcnt > 0 ) {
            self.ctxl2.fillStyle = self.hintshadowcol;
            let difx = self.marhpx / 2;
            self.ctxl2.beginPath();
            self.ctxl2.fillRect(xJump - difx, self.drt, difx * 2, self.drb - self.drt);
            self.ctxl2.stroke(); 
            self.ctxl2.fill(); 
            self.ctxl2.closePath();
          }
        }

        // jump on markers & data
        if (self.crXjump) x = xJump;

        // line vertical
        if (self.crXYline) {
          self.ctxl2.beginPath();
          self.ctxl2.moveTo(x, self.drb);
          self.ctxl2.lineTo(x, self.drt);
          self.ctxl2.stroke(); 
          self.ctxl2.closePath();
        }
        self.ctxl2.setLineDash(self.crXlinedash);
        // Y jumping...
        if (self.crYjumpM || self.crYjumpP) {
          let y1 = 0;
          let y2 = 0;
          // jump on Y markers
          if ( self.crYjumpM ) {
            ynbr = Math.round( (y - self.zlvl) / marpx );
            y1 = self.zlvl + (ynbr * marpx);
            y  = y1;
          }
          let ydef=false;
          if ( self.crYjumpP ) {
            let sens    = marax;
            let oldydif =  sens;
            for (let i = 0; i < self.data.length; i++) {
              // jump on Y data
              ydef = (typeof self.data[i] != "undefined") && (typeof self.data[i][xnbr + self.from * self.zoom] != "undefined") && (self.data[i][xnbr + self.from * self.zoom] != null);
              if (ydef) {
                y2 = self.zlvl - (self.data[i][xnbr + self.from * self.zoom] * self.wght * self.dcorr);
                // check ...
                let ydif = Math.abs( y2 - y );
                if ( (!self.crYjumpM) && (ydif < sens) && (ydif <= oldydif) ) {
                  oldydif = ydif; 
                  y = y2;
                }
              }
              else continue;
              // jump on markers & data
              if (self.crYjumpM && self.crYjumpP) if ( Math.abs( y2 - y1 ) < sens ) { y = y2;  break; }
            }
          }
        }
        
        if (self.crXYline) {
          // line horizontal
          self.ctxl2.beginPath();
          self.ctxl2.moveTo(self.drl , y);
          self.ctxl2.lineTo(self.drr , y);
          self.ctxl2.stroke(); 
          self.ctxl2.closePath();
        }

        // big point around data point for every data table
        if (self.crpointhint || self.crlinetomouse) {
          let ydef;
          let y2;
          let bnr  = 0;
          let difx = 0;
          self.ctxl2.setLineDash([]);
          for (let i = 0; i < self.data.length; i++ ) {
            ydef = (typeof self.data[i] != "undefined") && (typeof self.data[i][xnbr + self.from * self.zoom] != "undefined") && (self.data[i][xnbr + self.from * self.zoom] != null) ;
            if (ydef)
              y2 = self.zlvl - (self.data[i][xnbr + self.from * self.zoom] * self.wght * self.dcorr);
            else
              continue;
            difx = 0;
            if (self.crpointhint) {
              // big point on data
              self.ctxl2.lineWidth   = self.hintpointlwdth;
              self.ctxl2.strokeStyle = self.hintlinecol   ;
              if ( isLine(i) )
                self.ctxl2.fillStyle   = getStyle(self.style[i], "linecolor", self.hintpointfill);
              else
                self.ctxl2.fillStyle   = getStyle(self.style[i], "fillcolor", self.hintpointfill);
              if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
              if ( isBar(i) ) {
                let wdh = self.marhpx * self.barperc; // room for all bars
                let wob = wdh / self.barcnt;          // width of one bar
                difx = (wdh / 2) - (wob * (bnr)) - (wob / 2); 
                bnr++;
              }
              self.ctxl2.beginPath();
              self.ctxl2.arc(xJump - difx, y2, self.hintpointw, 0, 2 * Math.PI);
              self.ctxl2.stroke();
              if (self.crpointfill) self.ctxl2.fill();
            }
            // line to mouse
            if (self.crlinetomouse) {
              self.ctxl2.lineWidth   = self.hintlinetoMwidth;
              self.ctxl2.strokeStyle = self.hintlinetoMcol  ;
              self.ctxl2.beginPath();
              self.ctxl2.moveTo(xJump - difx, y2);
              self.ctxl2.lineTo(lastX, lastY);
              self.ctxl2.stroke();
            }
          }
        }
        // hint...
        if (self.crHint) {
          self.ctxl2.setLineDash([]);
          self.ctxl2.font = self.hintfontmod + self.hintfpx + self.hintfont;
          let s = [];
          let txtw = 0;
          let txtwt= 0;
          let txt  = self.axisXtxt + " = " + (self.desc[xnbr + self.from * self.zoom].toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.decimalX, maximumFractionDigits: self.decimalX}) ) ;
          let txt2 = "";
          txtw = self.ctxl2.measureText(txt).width;
          for (let i = 0; i < self.data.length; i++) {
            if ((typeof self.data[i] != "undefined") && (typeof self.data[i][xnbr + self.from * self.zoom] != "undefined") && (self.data[i][xnbr + self.from * self.zoom] != null)) 
            s.push( (self.data[i][xnbr + self.from * self.zoom] * self.dcorr).toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.decimalY, maximumFractionDigits: self.decimalY}) + " " + self.aYtxt);
            else s.push("no data");
            txtwt = self.ctxl2.measureText(s[i]).width + (self.hintfpx * 3);
            if (txtwt > txtw) txtw = txtwt;
          }
          while (self.ctxl2.measureText(txt2).width < txtw) txt2 += "-";
                  
          self.ctxl2.beginPath();	
          if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
          self.ctxl2.fillStyle    = self.hintfillcol;
          self.ctxl2.textBaseline = "top";
          self.ctxl2.textAlign    = "start";
          let mx;
          let my;
          // out of X+
          if ((lastX + txtw + self.hintfpx ) > self.drr) mx = lastX - self.hintfpx * 3 - txtw;
          else                                      mx = lastX + self.hintfpx * 2;
          // out of Y-
          if ((lastY + self.hintfpx * (s.length + 2 + 1) ) > self.drb) my = lastY - self.hintfpx * (s.length + 4 + 1) ;
          else                                                    my = lastY + self.hintfpx * 2;
          self.ctxl2.strokeStyle = self.hintrectcol;
          if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
          self.ctxl2.rect    (mx, my, txtw + self.hintfpx, self.hintfpx * (s.length + 2 + 1) );
          self.ctxl2.stroke();
          self.ctxl2.fillRect(mx, my, txtw + self.hintfpx, self.hintfpx * (s.length + 2 + 1) );
          self.ctxl2.fillStyle = self.hinttxtcol;
          self.ctxl2.textAlign = "end";
          self.ctxl2.fillText(txt , mx + self.hintfpx / 2 + txtw, my + self.hintfpx * 0.5 + self.hintfpx * 0); // X-axis descriptions
          self.ctxl2.fillText(txt2, mx + self.hintfpx / 2 + txtw, my + self.hintfpx * 0.5 + self.hintfpx * 1); // separator
          // data values
          for (let i = 0; i < self.data.length; i++) {
            self.ctxl2.beginPath();
            if (isLine(i) )
              self.ctxl2.fillStyle   = getStyle(self.style[i], "linecolor", self.hintpointfill);
            else
              self.ctxl2.fillStyle   = getStyle(self.style[i], "fillcolor", self.hintpointfill);
            if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
            //ctxl2.fillRect(mx + hintfpx / 2, my + hintfpx * 0.5 + (hintfpx * (i + 2)), hintfpx, hintfpx - 2); 
            self.ctxl2.strokeStyle = "rgba(0,0,0,1)";
            self.ctxl2.lineWidth   = 1;
            self.ctxl2.rect(mx + self.hintfpx / 2, my + self.hintfpx * 0.5 + (self.hintfpx * (i + 2)), self.hintfpx, self.hintfpx); 
            self.ctxl2.stroke();
            self.ctxl2.beginPath();
            self.ctxl2.fillRect(mx + self.hintfpx / 2, my + self.hintfpx * 0.5 + (self.hintfpx * (i + 2)), self.hintfpx, self.hintfpx); 
            self.ctxl2.stroke();
            // text
            self.ctxl2.fillStyle = self.hinttxtcol;
            self.ctxl2.textAlign = "start";
            self.ctxl2.fillText("-", mx + self.hintfpx * 2 , my + self.hintfpx * 0.5 + (self.hintfpx * (i + 2)) ); 
            self.ctxl2.textAlign = "end";
            self.ctxl2.fillText(s[i], mx + self.hintfpx / 2 + txtw, my + self.hintfpx * 0.5 + (self.hintfpx * (i + 2)) ); 
          }
        }
        
      }
      self.ctxl2.setLineDash([]);
    }

    // Onclick
    function on_canvas_click(ev) {
      if (self.data.length <= 0) return;
      if (self.pointclicked == true) {
        self.pointclicked = false; // turn off mouse click
        // clear layer2 canvas 
        self.ctxl2.clearRect(0, 0, self.layer2.width, self.layer2.height); // must be when onmousemove & ontouchmove are disabled
        if (self.onmousemove || self.ontouchmove) { 
          on_mouseMove(ev);        // release mouse click and call the event that would redrawing of hints
        }
      }
      
      if (self.zoom && ev.shiftKey) return; // if is zoom and shift key is pressed then it's scrolling left/right mode
      let x = ev.offsetX; 
      let y = ev.offsetY;
      let xnbr = 0;
      let ynbr = 0;

      if ((y >= self.drt) && (y <= self.drb) &&
          (x >= self.drl) && (x <= self.drr)) {
        xnbr = Math.round( (x - self.lvlv - self.hmarshift * (self.marhpx / 2) ) / (self.marhpx / self.xdiv) );
        if ( isNaN(xnbr) || (xnbr <0 ) || (xnbr > self.datalength) ) return;		

        let sens = self.hintpointw;
        let xzero = self.lvlv + ((xnbr * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
        let wdh = self.marhpx * self.barperc; // room for all bars
        let wob = wdh / self.barcnt;          // width of one bar
        let difx = (self.marhpx * self.barperc) / 2 - wob / 2; // start of left border bars
        let locbarnr = 0;
        let xa = 0;
        let ya = 0;;
        for ( let i = 0; i < self.data.length; i++) {
          if (typeof self.data[i] == "undefined") continue
          ya = self.zlvl - (self.data[i][xnbr + self.from * self.zoom] * self.wght * self.dcorr);
          xa = xzero;
          // if bar then make shift on x
          if ( isBar(i) ) {
            locbarnr++;	
            xa = xa - difx + wob * (locbarnr - 1); ;
          }
          // check...
          if ( (Math.abs(xa - x) < sens) && (Math.abs(ya - y ) < sens) ) {
            self.pointclicked  = true;
            let txt  = self.axisXtxt +" [ " + (self.desc[xnbr + self.from * self.zoom].toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.decimalX, maximumFractionDigits: self.decimalX}) ) +
                                      " ] = " + (self.data[i][xnbr + self.from * self.zoom] * self.dcorr).toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.decimalY, maximumFractionDigits: self.decimalY}) + " " + self.aYtxt;
            self.ctxl2.font = self.hintfontmod + self.hintfpx + self.hintfont;
            let txtw = self.ctxl2.measureText(txt).width;
            // small hint
            txtw = txtw + self.hintfpx * 2; // for color rectangle
            // clear layer2 canvas 
            self.ctxl2.clearRect(0, 0, self.layer2.width, self.layer2.height);
            self.ctxl2.setLineDash([]);
            self.ctxl2.beginPath();	
            self.ctxl2.fillStyle    = self.hintfillcol;
            self.ctxl2.textBaseline = "top";
            self.ctxl2.textAlign    = "start";
            let xflipped = false;
            let yflipped = false;	
            // out of X+
            let mx = 0;
            let my = 0;
            if ((ev.offsetX + txtw + self.hintfpx ) > self.drr) { mx = ev.offsetX - self.hintfpx * 3 - txtw; xflipped = true; }
            else                                                  mx = ev.offsetX + self.hintfpx * 2;
            // out of Y-
            if ((ev.offsetY + self.hintfpx * 3 ) > self.drb) { my = ev.offsetY - (self.hintfpx * 3); yflipped = true; }
            else                                               my = ev.offsetY + (self.hintfpx * 2);
            self.ctxl2.lineWidth   = self.hintframewidth;
            self.ctxl2.strokeStyle = self.hintrectcol;
            self.ctxl2.rect    (mx, my, txtw + self.hintfpx * 2, self.hintfpx * 2 );
            self.ctxl2.stroke();
            if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
            self.ctxl2.fillRect(mx, my, txtw + self.hintfpx * 2, self.hintfpx * 2 );
            self.ctxl2.fillStyle = self.hinttxtcol;
            // color rectangle
            self.ctxl2.beginPath();
            if (isLine(i) )
              self.ctxl2.fillStyle = getStyle(self.style[i], "linecolor", self.hintpointfill);
            else
              self.ctxl2.fillStyle = getStyle(self.style[i], "fillcolor", self.hintpointfill);
            if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
            self.ctxl2.strokeStyle = "rgba(0,0,0,1)";
            self.ctxl2.lineWidth   = 1;
            self.ctxl2.rect(mx + self.hintfpx / 2, my + self.hintfpx / 2, self.hintfpx, self.hintfpx); 
            self.ctxl2.stroke();
            self.ctxl2.beginPath();
            self.ctxl2.fillRect(mx + self.hintfpx / 2, my + self.hintfpx / 2, self.hintfpx, self.hintfpx); 
            self.ctxl2.stroke();

            self.ctxl2.strokeStyle = self.hinttxtcol;
            self.ctxl2.fillStyle = self.hinttxtcol;
            if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
            self.ctxl2.textAlign = "end";
            self.ctxl2.fillText(txt , mx + self.hintfpx / 1 + txtw, my + self.hintfpx * 0.5 ); 

            self.ctxl2.lineWidth   = self.hintlinetoMwidth;
            self.ctxl2.strokeStyle = self.hintlinetoMcol;
            self.ctxl2.beginPath();
            self.ctxl2.arc(xa, ya, self.hintpointw, 0, 2 * Math.PI);
            // line to hint
            if (self.crlinetosmallhint) 
              self.ctxl2.moveTo(mx + (txtw + self.hintfpx * 2) * xflipped, my + (self.hintfpx * 2) * yflipped);
            self.ctxl2.lineTo(xa, ya);
            self.ctxl2.stroke();
            
            break; // found it.
          }
        }
      }
    }



    // On mouse out 
    function on_mouseout() {
      self.ctxl2.clearRect(0, 0, self.ctxl2.canvas.width, self.ctxl2.canvas.height);
      self.pointclicked = false; 
    }



    var oldticks = 0;
    var mdcnt    = 0;
    // if shift key pressed when mouse left key pressed then it's zoom mode
    function on_mouseDown(ev) {

      if (ev.buttons == 3) self.hintwithctrl = !self.hintwithctrl; // turn on/off cross
      
      if ((self.multimsdown) && (ev.buttons == 2) ) {
        var now = new Date();
        var ticks = now.getTime();
        if ( (ticks - oldticks) > self.multimstout) {mdcnt = 0; oldticks=ticks;} 
        mdcnt++;
        if (mdcnt >= self.multimsdowncnt) {
          mdcnt = 0;
          oldticks = 0;
          self.allpoints = !self.allpoints;
          self.draw();
        }
      }

      mouseisdown  = true;
      mousebuttons = ev.buttons;
      let x = ev.offsetX; 
      let y = ev.offsetY;
      let xnbr = 0;
      if ((y >= self.drt) && (y <= self.drb) && (x >= self.drl) && (x <= self.drr) && (mousebuttons == 1) ) {
        xnbr = Math.round( (x - self.lvlv - self.hmarshift * (self.marhpx / 2) ) / (self.marhpx / self.xdiv) );
        if ( isNaN(xnbr) || (xnbr < 0 ) || (xnbr >= self.datalength) ) return false;

        if (self.mouseclickLR && !ev.shiftKey) {
          // if point is reached then do not make scroll
          let sens = self.hintpointw;
          let xzero= self.lvlv + ((xnbr * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
          let wdh  = self.marhpx * self.barperc; // room for all bars
          let wob  = wdh / self.barcnt;          // width of one bar
          let difx = (self.marhpx * self.barperc) / 2 - wob / 2; // start of left border bars
          let locbarnr = 0;
          let xa = 0;
          let ya = 0;;
          for ( let i = 0; i < self.data.length; i++) {
            if (typeof self.data[i] == "undefined") continue;
            ya = self.zlvl - (self.data[i][xnbr + self.from * self.zoom] * self.wght * self.dcorr);
            xa = xzero;
            // if bar then make shift on x
            if ( isBar(i) ) {
              locbarnr++;	
              xa = xa - difx + wob * (locbarnr - 1); ;
            }
            // check...
            if ( (Math.abs(xa - x) < sens) && (Math.abs(ya - y ) < sens) ) return; // point is reached !
          }
          // scroll
          let LRmarg = self.LRsize * self.drv;
          if ((x - self.drl) < LRmarg) self.left();
          if ((self.drr - x) < LRmarg) self.right();
        }
        
        if ( ev.shiftKey) {
          let xJump = self.lvlv + ((xnbr * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
          Zfrom = xnbr + self.from;
          Zto   = Zfrom;
        }
      }
      on_mouseMove(ev); // call the event that would redrawing of hints
      return false;
    }




    // if shift key pressed when mouse left key is up then it's zoom - to
    function on_mouseUp(ev) {
      mouseisdown = false;
      if ( (mousebuttons == 1) && (ev.shiftKey) ) {
        if ((Zfrom == Zto) || (Zto + 1 <= Zfrom))
          ;
        else {
          self.from = Zfrom;
          self.to   = Zto+1;
          self.zoom = true;
          self.draw();
        }
      }
      mousebuttons = ev.buttons;
      on_mouseMove(ev); // call the event that would redrawing of hints
      return false;
    }

    

    // on key down
    function on_keyDown(ev) {
      on_mouseMove(ev);       
    }



    // on key up
    function on_keyUp(ev) {
      if (!ev.ctrlKey) // clear lvl2 canvas
        self.ctxl2.clearRect(0, 0, self.ctxl2.canvas.width, self.ctxl2.canvas.height);
      if (!ev.shiftKey) { // clear zoom variables
        Zfrom = 0;
        Zto   = 0;
      }
    }


    // context menu off
    function onContextMenu(ev) {
      ev = ev || window.ev;
      if (ev.stopPropagation) ev.stopPropagation();
      if (ev.preventDefault ) ev.preventDefault ();
      ev.cancelBubble = true;
      ev.returnValue = false;
      return false;
    }

     

      // first start mouse events...
    if ( this.eventsactivated == false ) {
      if ( this.onmouseclick) this.ctxl2.canvas.addEventListener('click'      , on_canvas_click, true);	
      if ( this.onmousemove ) this.ctxl2.canvas.addEventListener('mousemove'  , on_mouseMove   , true);	
      if ( this.ontouchmove ) this.ctxl2.canvas.addEventListener('touchmove'  , on_mouseMove   , true); 
      
      if ( this.onmousedown ) this.ctxl2.canvas.addEventListener('mousedown'  , on_mouseDown   , true);	
      if ( this.onmouseup   ) this.ctxl2.canvas.addEventListener('mouseup'    , on_mouseUp     , true);	
      if ( this.onkeydown   ) this.ctxl2.canvas.addEventListener('keydown'    , on_keyDown     , true);

      if ( this.onkeyup     ) this.ctxl2.canvas.addEventListener('keyup'      , on_keyUp       , true);
      if ( this.oncontext   ) this.ctxl2.canvas.addEventListener('contextmenu', onContextMenu  , true);	

      this.ctxl2.canvas.setAttribute("tabindex", 0);
      this.ctxl2.canvas.focus();
        
      if ( this.onmouseclick || this.onmousemove || this.ontouchmove ) this.ctxl2.canvas.addEventListener('mouseout' , on_mouseout, true); 
      this.eventsactivated = true;
    }

    // ------------------------- end of events -------------------------


    // the beginning of the main procedure

    this.datalength = this.alldatalength;
    this.wght   = 0; // calculated weight of Y data	
    this.barcnt = 0; // count bar charts 
    this.barnr  = 0; // bar number for draw
    this.marhpx = 0; // number px for X marker

  
   // let start calculate ...
    if ( Array.isArray(this.data) ) {
      for (let i=0; i < this.data.length; i++ ) {
        // for bars it's better
        if ( isBar(i) ) { self.barcnt++; self.hmarshift = true; }
        // get max & min of data array 
        rangev = getMinMax(this.data[i]);    // get min & max of data
        if (rangev.min < minv) minv = rangev.min; // max of data
        if (rangev.max > maxv) maxv = rangev.max; // min of data		
      }
    }

    // additional margin
    maxv += maxv * this.addmaxmarg;
    minv += minv * this.addmaxmarg;

    if (this.Ymax > 0) maxv = this.Ymax; // max Y constant value
    if (this.Ymin < 0) minv = this.Ymin; // min Y constant value
    
    // decimal points 0 .. 5
    if ((this.decimalX < 0 ) || (this.decimalX > 5 )) this.decimalX = 0;
    if ((this.decimalY < 0 ) || (this.decimalY > 5 )) this.decimalY = 0;
    // initialize description X-axis table if not exists
    if ((typeof this.desc == "undefined") || (this.desc == null) || (this.desc == 0) || (this.desc.length == 0) ) {
      this.desc  = [];
      for (let i = 0; i < this.datalength; i++) this.desc.push( (i + 1) ); 
    }
    // main canvas clear
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    // canvas fill color & width
    this.ctx.fillStyle = this.canvasbkcol;
    this.ctx.lineWidth = this.canvasfrw;
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    
    this.ctx.strokeStyle = this.canvasfrcol;
    if (this.drawzfrm) this.ctx.rect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.stroke();
    // canvas start parameters
    this.ctx.lineWidth   = 1;
    this.ctx.font        = this.descfontmod + this.descfpx + this.descfont;
    this.ctx.lineCap     = "round"; 
    this.ctx.lineJoin    = "miter"; 
    this.ctx.miterLimit  = 1;

    this.dcorr = 1;
    this.aYtxt = self.axisYtxt.toString();
    // if the data plus is very small, calculate the multiplier and show it on the Y axis.
    let tm = Math.abs( Math.max( Math.abs(maxv), Math.abs(minv) ) );
    if ( ( tm * Math.pow(10, this.decimalY ) ) < 1) {
      let tw = 1;
      let ti = 0;
      if (tm > 0)
        while (tm * tw < 10) { 
          tw *= 10;  ti++; 
          if (ti > 10) break; // STOP: 10 it is very much! (10^10)
        } 
      if (ti > 0) {
        this.aYtxt = ("*(10^-" + ti + ")") + self.axisYtxt.toString();
        minv *= tw; 
        maxv *= tw; 
        this.dcorr = tw;
      }
      if (this.decimalY == 0) this.decimalY = 2; //ti;
    }

    // if the data plus is very big, calculate the divider and show it on the Y axis.
    tm = Math.abs( Math.max( Math.abs(maxv), Math.abs(minv) ) );
    if ( tm > this.bigmax) {
      let tw = 1;
      let ti = 0;
      while ( (tm / tw) > this.bigmax) { 
        tw = tw * 10;  ti++; 
        if (ti > 10) break; // STOP: 10 it is very much! (10^10)
      } 
      if (ti > 0) {
        this.aYtxt = ("*(10^" + ti + ")") + self.axisYtxt.toString();
        minv = minv / tw; 
        maxv = maxv / tw; 
        this.dcorr = 1 / tw;
      }
      this.decimalY = 0;
    }
    
    // for zoom
    if (!this.zoom) this.datalength = this.alldatalength;
    else this.datalength = this.to - this.from;
    
    // level zero shift (from min, max) only if Y+ & Y- data exists, else 0 or (drb-drt)
    if ( (maxv >= 0) && (minv == 0) ) this.zerox = 0;         // only Y+
    if ( (minv <  0) && (maxv == 0) ) this.zerox = this.drb - this.drt; // only Y-
    if ( (maxv >  0) && (minv <  0) ) this.zerox = Math.abs( ( minv/(maxv - minv) ) * this.drv ) // Y+ & Y-
    
    this.zlvl = this.drb - this.zerox; // level zero horizontal axis

    if (this.datalength==0) this.zlvl = this.drb; // if no data then zero level
    // check if the description of the x-axis is on the canvas
    let marwxdesc = 0;
    let maxw      = 0;
    // find max width of X-axis description
    for (let i = this.from * this.zoom; i < this.desc.length; i++) {
      maxw = this.ctx.measureText( this.desc[i].toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.decimalX, maximumFractionDigits:this.decimalX}) ).width;  
      if (maxw > marwxdesc) marwxdesc = maxw;
    }
    // if descritions X-axis heigth > room we have to change the drawing area and move X-axis up
    if ((this.drb - this.zlvl) < marwxdesc) {
      //this.top = this.margv + marwxdesc - this.zerox; // new bottom margin
      this.bot   = this.ctx.canvas.clientHeight - this.margv - + marwxdesc;    // new bottom coordinate
      this.drb   = this.bot - this.marw;    // new bottom draw coordinate
      this.drv   = this.drb - this.drt;     // new draw height
      // new level zero shift 
      if ((maxv > 0) && (minv < 0)) this.zerox = Math.abs( ( minv/(maxv - minv) ) * this.drv ) // Y+ & Y-
      else if (maxv >= 0) this.zerox = 0;   // only Y+
      else if (minv <  0) this.zerox = this.drb - this.drt;  // only Y-
      this.zlvl  = this.drb - this.zerox;                    // new level zero horizontal axis
    }

    // count max markers (from font pixels)
    let marpl = Math.round( Math.abs( (this.zlvl - this.drt) / this.descfpx ) );  // max markers plus max counter
    let marmi = Math.round( Math.abs( (this.drb - this.zlvl) / this.descfpx ) );  // max markers minus max counter
    let marall= marpl + marmi;                                                    // max all markers counter
    // get marker plus count and weigth
    marpldata = getMaxMarkerValue(maxv, marpl);
    marpl     = marpldata.cnt;
    let vmp   = marpldata.value;
    // get marker minus count and weigth
    marmidata = getMaxMarkerValue(minv, marmi);
    marmi     = marmidata.cnt;;
    let vmm   = marmidata.value;

    // calculate pixels for one marker
    let marpx = (Math.abs(( this.zlvl - this.drt ) / marpl));  // pixels plus for one marker
    let marmx = (Math.abs(( this.drb - this.zlvl ) / marmi));  // pixels minus for one marker
    let marax = Math.max(marpx, marmx);                        // max pixels all for one marker
    marpx = marax;
    marmx = marax;
    
    // get max value of markers weight
    if ( vmp > vmm ) vmm = vmp; 
    if ( vmm > vmp ) vmp = vmm; 
    
    // calculate new markers
    marpl  = Math.floor(Math.abs( (this.zlvl - this.drt) / marax) );  // new markers plus max counter
    marmi  = Math.floor(Math.abs( (this.drb - this.zlvl) / marax) );  // new markers minus max counter
    marall = marpl + marmi;                                 // new all markers max counter	

    // level vertical shift (from description text width) only if no room for descrition
    let wp = this.ctx.measureText( (maxv).toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.decimalY, maximumFractionDigits: this.decimalY}) ).width + this.descfpx;  // width max Y text plus
    let wm = this.ctx.measureText( (minv).toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.decimalY, maximumFractionDigits: this.decimalY}) ).width + this.descfpx;  // width min Y text plus
    let lvlt = (this.margh / 2) + Math.max(wp, wm) + this.marw;
    if (lvlt > this.lvlv) {
      this.lvlv = lvlt;
      this.drl  = this.lvlv;
    }
    // if the number of markers minus == 0 then level X-axis must be calculated becouse the description 
    // of this axis is below drawing area. we have to move the axis up by the height of the axis description
    maxhm    = Math.round( Math.abs( (this.lvlv - this.drr) / this.descfpx ) ) + 1;  // max markers counter
    marxdata = getXmarkersDiv(this.datalength - 1, maxhm);
    maxhm    = marxdata.cnt;
    this.xdiv     = marxdata.div;
    marh     = Math.min(this.datalength, maxhm) + 1 * this.hmarshift; // +1 if shift
    this.marhpx   = ( this.drr - this.lvlv ) / marh;  // pixels for one marker X
    
    // too much points for marker for bezier curve mode - the chart looks unserious :-)
    if ( (this.bezierlvloff >= 0) && (( this.datalength / maxhm ) > this.bezierlvloff) ) this.beziercurve = false;
    
    // let start draw ...
    // draw zone control (for test?)
    if (this.drawzone) {
      this.ctx.strokeStyle = this.drwfracol;
      this.ctx.fillStyle   = this.drwfilcol;
      this.ctx.beginPath();
      if (this.drawzfrm) this.ctx.rect(this.drl, this.drt, this.drr - this.drl, this.drb - this.drt);
      this.ctx.fillRect(this.drl, this.drt, this.drr - this.drl, this.drb - this.drt);
      this.ctx.stroke();
    }
    // draw mesh Y
    if (this.drawmesh) {
      // mesh Y+
      this.ctx.strokeStyle = this.mshcol;	
      this.ctx.fillStyle   = this.mshcol;
      let i = 1;
      let lvl = (this.zlvl - i * marpx );
      while (lvl >= this.drt) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.lvlv, this.zlvl - i * marpx);
        this.ctx.lineTo(this.drr , this.zlvl - i * marpx);
        this.ctx.stroke(); 
        i++;
        lvl = (this.zlvl - i * marpx);
      }
      // mesh Y-
      i = 1;
      lvl = (this.zlvl + i * marmx);
      while (lvl <= this.drb) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.lvlv, this.zlvl + i * marmx);
        this.ctx.lineTo(this.drr , this.zlvl + i * marmx);
        i++;
        lvl = (this.zlvl + i * marmx);
        this.ctx.stroke(); 
      }
    }
    // draw mesh X
    if (this.drawmesh) {
      // mesh X
      this.ctx.strokeStyle = this.mshcol;	
      this.ctx.fillStyle   = this.mshcol;
      let i = 1;
      let hor = 0;
      hor = (this.lvlv + i * this.marhpx) - this.hmarshift * (this.marhpx / 2);
      while (hor <= this.drr) {
        if (i > marh) break;
        this.ctx.beginPath();
        this.ctx.moveTo(hor, this.drt);
        this.ctx.lineTo(hor, this.drb);
        this.ctx.stroke(); 
        i++;
        hor = (this.lvlv + i * this.marhpx) - this.hmarshift * (this.marhpx / 2);
      }
    }
    // draw markers and descriptions Y
    if (this.drawmark) {
      this.ctx.strokeStyle = this.descol;
      this.ctx.fillStyle   = this.descol;
      this.ctx.textBaseline= "middle";
      this.ctx.textAlign   = "end";
      let i = 0;
      let lvl = 0;
      let zerodwd = false;
      // markers plus & axis Y+ description
      if (maxv>0) {
        i = 1 * !this.drw0y;
        zerodwd = true;
        lvl = (this.zlvl - i * marpx );
        while (lvl >= this.drt) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.lvlv - this.marw / 2, lvl);
          this.ctx.lineTo(this.lvlv + this.marw / 2, lvl);
          if (this.drawdesc) {
            if (i == 0)
              this.ctx.fillText( "0" , this.lvlv - this.marw, lvl + this.descfpx );
            else
              this.ctx.fillText( ( i * vmp ).toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.decimalY, maximumFractionDigits: this.decimalY}) , this.lvlv - this.marw, lvl );
          }
          i++;
          lvl = (this.zlvl - i * marpx);
          this.ctx.stroke(); 
        }
      }
      // markers plus & axis Y- description
      if (minv<0) {
        if (!zerodwd)	i = 1 * !this.drw0y;
        else          i = 1;
        lvl = (this.zlvl + i * marmx);
        while (lvl <= this.drb) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.lvlv - this.marw / 2, lvl);
          this.ctx.lineTo(this.lvlv + this.marw / 2, lvl);
          if (this.drawdesc) {
            if (i == 0)
              this.ctx.fillText( "0" , this.lvlv - this.marw, lvl - descfpx );
            else
              this.ctx.fillText( (-i * vmm ).toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.decimalY, maximumFractionDigits: this.decimalY}) , this.lvlv - this.marw, lvl );
          }
          i++;
          lvl = (this.zlvl + i * marmx);
          this.ctx.stroke(); 
        }
      }
    }
    // draw markers and descriptions X
    if (this.drawmark) {
      this.ctx.strokeStyle = this.descol;
      this.ctx.fillStyle   = this.descol;
      this.ctx.textBaseline = "top";
      this.ctx.textAlign = "center";
      let i = 0;
      // markers & axis X description
      if (maxhm > 0) {
        i = 1 * !this.drw0x;
        let hor = (this.lvlv + i * this.marhpx) + this.hmarshift * (this.marhpx / 2);
        while (hor <= this.drr) {
          if (i > marh) break;
          this.ctx.beginPath();
          this.ctx.moveTo(hor, this.zlvl - this.marw / 2);
          this.ctx.lineTo(hor, this.zlvl + this.marw / 2);
          if (this.drawdesc) {
            if (!this.rotdescX) {
              if (typeof this.desc[i * this.xdiv ] != "undefined")
                this.ctx.fillText( this.desc[i * this.xdiv + this.from * this.zoom], hor - ( (i == 0) * this.descfpx / 2), this.zlvl + this.marw );
            }
            else {
              this.ctx.save();
              this.ctx.textBaseline = "middle";
              this.ctx.textAlign = "end";
              this.ctx.translate(this.drl, this.drb);
              this.ctx.rotate( -0.5 * Math.PI );
              let rhor = (i * this.marhpx) + this.hmarshift * (this.marhpx / 2);
              if (typeof this.desc[i * this.xdiv + this.from * this.zoom] != "undefined")
                this.ctx.fillText( this.desc[i * this.xdiv + this.from * this.zoom].toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.decimalX, maximumFractionDigits: this.decimalX}), this.drb - this.zlvl - this.marw, rhor + this.descfpx / 2 * (i == 0) * !this.hmarshift);
              this.ctx.restore();
            }
          }
          i++;
          hor = (this.lvlv + i * this.marhpx) + this.hmarshift * (this.marhpx / 2);
          this.ctx.stroke(); 
        }
      }
    }
    // draw axis
    if (this.drawaxis) {
      this.ctx.strokeStyle = this.axcol;
      this.ctx.fillStyle   = this.axcol;
      this.ctx.lineWidth   = this.axw;
      // axis X
      this.ctx.beginPath();
      this.ctx.moveTo(this.lft, this.zlvl);
      this.ctx.lineTo(this.rgt - (this.axw * 3 * this.drawarrow), this.zlvl);
      // axis y
      this.ctx.moveTo(this.lvlv, this.bot);
      this.ctx.lineTo(this.lvlv, this.top + (this.axw * 3 * this.drawarrow) );
      // draw axis
      this.ctx.stroke();
      if (this.drawarrow) {
        // arrow X
        this.ctx.beginPath();
        this.ctx.lineTo(this.rgt, this.zlvl);
        this.ctx.lineTo(this.rgt - this.al, this.zlvl - this.aw / 2);
        this.ctx.lineTo(this.rgt - this.al, this.zlvl + this.aw / 2);
        this.ctx.lineTo(this.rgt, this.zlvl);
        this.ctx.fillStyle = this.axcol;
        // arrow Y
        this.ctx.moveTo(this.lvlv, this.top );
        this.ctx.lineTo(this.lvlv - this.aw / 2, this.top + this.al);
        this.ctx.lineTo(this.lvlv + this.aw / 2, this.top + this.al);
        this.ctx.lineTo(this.lvlv, this.top );
        this.ctx.fillStyle = this.axcol;
        // draw arrows
        this.ctx.fill();
      }
      this.ctx.beginPath();
      if (this.axisdesc) {
        // text X
        this.ctx.fillStyle = this.axdesccol;
        if (this.ctx.measureText(self.axisXtxt).width + this.drr > this.rgt + this.margh) {
          this.ctx.textBaseline = "top";
          this.ctx.textAlign = "end";
          let wa = 0;
          if (this.ctx.measureText(self.axisXtxt).width + this.descfpx > (this.drb - this.zlvl) ) { this.ctx.textAlign = "start"; wa = this.descfpx * 2; }
          this.ctx.save();
          this.ctx.translate(this.drr, this.zlvl);
          this.ctx.rotate( -0.5 * Math.PI );
          this.ctx.fillText(self.axisXtxt, - this.descfpx + wa, this.descfpx);
          this.ctx.restore();
        }
        else {
          this.ctx.textAlign = "start";
          this.ctx.textBaseline = "top";
          this.ctx.fillText(self.axisXtxt, this.drr + this.descfpx / 2, this.zlvl + this.descfpx / 2);
        }
        // text Y
        this.ctx.textAlign = "start";
        this.ctx.textBaseline  = "middle";
        this.ctx.fillStyle = this.axdesccol;
        this.ctx.fillText(this.aYtxt, this.lvlv + this.aw / 1, this.top + this.al / 2);
      }
      
    }
    
    // do draw lines, areas, bars as defined ...
    do_graph();
    
  }

}

//  --------------------------   /js_chart   ----------------------------
