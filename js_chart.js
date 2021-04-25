/* jshint esversion: 6 */



/*
    -----------------------   js_chart ver. 1.6  -----------------------
      (c) 2019/2021 SpeedBit, reg. Czestochowa, Poland
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
    // cursors
    this.moveCursor    = "pointer";    // cursor in move mode
    this.pointerCursor = "crosshair";  // cursor in zoom mode
    this.autoCursor    = "auto";       // cursor in normal mode
    // download
    this.downloadChartEnable = true; // download chart enable
    this.download_png_fname  = "chart.png"; // default filename for download chart png file  (altKey + right mouse key)
    this.download_csv_fname  = "data.csv";  // default filename for download chart data file (altKey + ctrlkey + right mouse key)
    this.download_csv_listsep= ';';         // list separator
    // axis
    this.axisXtxt    =  "x";   // axis X description
    this.axisYtxt    =  "y";   // axis Y description
    this.Ymax        =    0;   // Xmin or 0 for auto
    this.Ymin        =    0;   // Ymin or 0 for auto
    this.axisdecimalX=    0;   // decimal point X-axis - Max 3
    this.axisdecimalY=    2;   // decimal point Y-axis - Max 3
    // margins
    this.margv       =    5;   // vertical margin
    this.margh       =    5;   // horizontal margin
    // canvas background
    this.canvasbkcol = "rgba(250, 250, 170, 0.4)"; // canvas background color
    this.canvasfrw   =    2;                       // canvas frame width
    this.canvasfrcol = "rgba(0, 0, 255, 1)";       // canvas frame color
    // markers
    this.marsize     =    8;  // size of marker
    this.marw        =    2;  // width of marker
    this.drawaxis    = true;  // draw axis ?
    this.drawarrow   = true;  // draw axis arrows ?
    // axes & arrows & description
    this.al          =   18;  // arrow length
    this.aw          =    9;  // arrow width
    this.axcol       = "rgba(0,0,0,1)"; // axis color
    this.axw         =    2;  // axis width
    this.axisXdesc   = true;  // draw description of axis X
    this.axisYdesc   = true;  // draw description of axis Y
    this.axdesccol   = "rgba(0,100,200,1)"; // axis description color
    this.drawXdesc   = true;  // draw X values
    this.drawYdesc   = true;  // draw Y values
    this.dgroup      = true;  // use group digits
    this.drawmark    = true;  // draw markers ?
    this.descol      = "rgba(0,0,255,1)"; // description / markers color
    this.descfpx     = 15;                // font size for description
    this.descfontmod = " italic ";        // font modifier
    this.descfont    = "px Courier New";  // description font
    this.rotdescX    = true;  // rotate the x-axis description 90 degrees
    this.drw0x       = true;  // draw zero value X-axis
    this.drw0y       = true;  // draw zero value Y-axis
    this.hmarshift   = false; // move X markers by 1/2 size (for bars it's better)
    // Yzoom
    this.Yzoom       = false; // Y zoom: chart from Ymin to Ymax or from 0 to Ymax
    this.YonlyVisiblescale = true; // if Y zoom then auto scale Y only for visible charts
    // mouse repetition
    this.repeatMouseMode= true; // mouse repetition on / off
    this.repeatPerDelay =  500; // delay to mouse repeat
    this.repeatPerSlow  =  200; // mouse slow repetition time
    this.repeatPerSpeed =   50; // mouse high speed repetition time (with CTRL key)
    // mesh
    this.drawmesh    = true;  // draw mesh
    this.meshframe   = true;  // draw mesh frame
    this.mshcol      = "rgb(200,200,200, 0.7)";  // mesh color
    this.meshlw      =  1;    // mesh line width
    // chart zone (for test)
    this.chartzone   = false;                    // draw the graph zone
    this.chartzonecol= "rgba(120, 120, 120, 1)"; // chart zone frame color
    // draw zone (for test)
    this.drawzone    = false;  // draw zone ?
    this.drawzfrm    = true;   // draw zone frame ?
    this.drwfracol   = "rgba(150,  0,  0, 0.5)"; // draw zone frame color
    this.drwfilcol   = "rgba(250,250,250, 0.3)"; // draw zone fill color
    // cross & hint	style
    this.crXYline    = true;  // cross
    this.crXYlineOnButton = true; // if cross = false then draw cross when left mouse key is pressed
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
    this.smallhint   = true;                          // small hint
    this.hintwithctrl= true;                          // hint only when ctrl key is pressed
    this.hintfillcol = "rgba(150, 200, 150, 0.7)";    // hint rectangle fill color
    this.hintfillhitcol= "rgba(200, 200, 200, 1)";    // hint rectangle fill color when point is hit
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
    this.hintpointcolfromdraw = true;               // hint point fill color from draw
    this.hintpointlwdth  = 1;                       // hint point line width
    this.hintcolfrwdth   = 0.5;                     // hint color square frame line width
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

    // Bold on mouse over legend square and string -> "bold" parameters
    this.boldonover          = true; // make chart "bold" when mouse is over chart legend
    this.lineBoldAlpha       = 1;    // alpha for "bold" line chart
    this.lineBoldWidth       = 3;    // width for "bold" line chart
    this.barBoldLineWidth    = 3;    // line width for "bold" bar chart
    this.barBoldAlpha        = 0.8;  // alpha for "bold" bar chart
    this.areaBoldLineWidth   = 3;    // line width for "bold" area chart
    this.areaBoldLineAlpha   = 1;    // line alpha for "bold" area chart
    this.areaBoldAreaAlpha   = 0.6;  // area alpha width for "bold" area chart
    this.stairsBoldLineWidth = 3;    // line width for "bold" stairs chart
    this.stairsBoldLineAlpha = 1;    // line alpha for "bold" stairs chart
    // hide / show chart when legend square or string is clicked
    this.hideonclick         = true; // enable hide/show chart on legend label click
    this.inactivechartboxcol = "rgb(100, 100, 100)"; // inactive legend color

    // what number is big?
    this.bigmax      = 10000; // above this number, all data will be converted to the decimal power
    // for a partial chart (from the scope of data)
    this.allmaxmin   = true; // false = auto from scope, true = auto from all data (if Ymax or Ymin  != 0 => these values will be constans)
    // mouse multi click - on/off points for all draws (mouse rigth key)
    this.multimsdown    = true; // on/off points for all draws
    this.multimsdowncnt = 3;    // number cliks for points switch
    this.multimstout    = 1000; // timeout for points switch
    this.multimsdowncol = "rgba(0, 0, 0, 0.15)"; // color for points switch
    // shadow when select zoom
    this.hintselectshadow = true;                // on/off select shadow
    this.hintselectcol  = "rgba(0, 0, 0, 0.3)";  // select shadow color
    // shift chart left/rigth by moouse left click (if zoomed)
    this.mouseclickLR   = true; // on/off shift arrows
    this.LRsize         = 1/6;  // click area (left and right) - fraction of the entire chart area 1/5 = 20%
    this.hintzoomcol    = "rgba(0, 250, 0, 0.15)"; // color of the shift click area
    this.undozoompx     = 20;   // the number of pixels by which the mouse must be moved to the left to undo the magnification
    this.movezoombymouse= true; // enable moving chart by mouse in zoom mode
    this.revarrowkeysinzoom = false;  // reverse arrow keys in zoom (scrolling)
    this.revmousemoveinzoom = false;  // reverse mouse move in zoom (scrolling
    // visual zoom - line with scrollbar in zoom mode
    this.vsOn           = true; // visual zoom on / off
    this.vzonXaxis      = !this.drawaxis; // visual zoom on X axsis
    this.vzcolor        = this.axdesccol; // visual zoom line color
    this.vzalpha        = 0.8;       // visual zoom line alpha
    this.vzwdtsm        = this.axw; // visual zoom small width
    this.vzwdtlg        = this.aw;  // visual zoom large width
    // legend
    this.legframew   =    1;   // legend rectangle line width
    this.legframecol = "rgba(250, 250, 250, 0.7)"; // color of the legend frame
    this.legfillcol  = "rgba(150, 150, 150, 0.5)"; // color of the legend bacground
    this.legpx       =  12;                        // legend font size
    this.legfontmod  = " italic ";                 // legend font modifier
    this.legfont     = "px Courier New";           // legend font name
    this.legtxtcol   = "rgba(  0, 250, 250, 1)";   // legend text color
    // Live value on axis
    this.XaxisLiveValue = false; // live value on X aaxis
    this.YaxisLiveValue = false; // live value on Y aaxis
    this.liveValueback  = "rgba(200, 200, 200, 0.8)"; // background color for live values on axis
    this.liveValueColor = "rgba(0, 0, 0, 1)"; // foreground color for live values on axis
    // all values
    this.showAllValues  = false; // default value if in style no exist "showvalues=..."
    // text values under cursor
    this.textvalue      = true; // text value on cursor
    this.textvalueoffset= 1;    // offset text value ( *this.descfpx )
    this.formattxtvalues= true; // format values with decimal point

    this.livevalfpx     = 12;                // font size for description
    this.livevalfontmod = " italic ";        // font modifier
    this.livevalfont    = "px Courier New";  // description font
    this.valuedecimal   =  2;                // values decimal point - Max 5

//--- internal ------------------------------------------------------------

    this.zcorr       =    1;   // calculated correction for Yzoom
    this.repeatMousePer=  0;   // current repeat period
   // place for the legend
    this.islegend    = false;  // show legend?
    this.legmarg     =    5;   // margin of legend to chart
    this.legpos      =    0;   // where is the legend ?
    this.legstr      =   [];   // place for legend strings
    this.legtop      =    0;   // place for the legend on the top
    this.legleft     =    0;   // place for the legend on the left
    this.legbottom   =    0;   // place for the legend on the bottom
    this.legright    =    0;   // place for the legend on the right

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
    this.ctx    = null; // main context
    this.ctxl2  = null; // cross & hint context
    this.canvas = null; // main canvas
    this.layer2 = null; // cross & hint canvas
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
    this.lvlv   = this.margh + this.marsize * 2 * this.drawmark + this.legleft * this.islegend; // level vertical axis

    this.dcorr  = 1; // data corrector
    this.zoffs  = 0; // data offset
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

    this.marpx = 0;
    this.marmx = 0;
    this.marax = 0;

    this.marpl = 0;
    this.marmi = 0;
    this.marall= 0;

    this.oldMouseEv=null;  // last mouse move event

    this.marxdata   = { cnt:0, div:1};              // markers data X

    this.internal_mose_flag = false;

  } // constructor


  // ------------------------- start of legend -------------------------

  legend(pos, leg) {
    var marg =  0;
    var txt  = "";
    var txtw =  0;

    function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
      if (typeof stroke == 'undefined') stroke = true;
      if (typeof radius == 'undefined') radius = 5;
      if (typeof radius == 'number')
        radius = {tl: radius, tr: radius, br: radius, bl: radius};
      else {
        var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
        for (var side in defaultRadius) radius[side] = radius[side] || defaultRadius[side];
      }
      ctx.beginPath();
      ctx.moveTo(x + radius.tl, y);
      ctx.lineTo(x + width - radius.tr, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);

      ctx.lineTo(x + width, y + height - radius.br);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
      ctx.lineTo(x + radius.bl, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
      ctx.lineTo(x, y + radius.tl);
      ctx.quadraticCurveTo(x, y, x + radius.tl, y);
      ctx.closePath();
      if (fill  ) ctx.fill()  ;
      if (stroke) ctx.stroke();
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

    function colRect(t, i, x, y) {
      if (typeof t.style[i] == "undefined") return;
      t.ctx.save();
      t.ctx.beginPath();
      t.ctx.strokeStyle = "rgba(0,0,0,1)";
      t.ctx.fillStyle   = getStyle(t.style[i], "linecolor", getStyle(t.style[i], "fillcolor", t.areafill) );
      t.ctx.lineWidth   = t.hintcolfrwdth;
      if (getStyle(t.style[i], "visible", "") == "NO") t.ctx.fillStyle=t.inactivechartboxcol;
      if (getStyle(t.style[i], "boldover", "---") == "YES") {
        t.ctx.lineWidth   = t.hintcolfrwdth + 4;
        t.ctx.strokeStyle = changeRGBAalpha(t.ctx.fillStyle, 1);
        t.ctx.fillStyle   = changeRGBAalpha(t.ctx.fillStyle, 1);
      }
      t.ctx.globalAlpha = 1;
      t.ctx.fillRect(x, y - t.legpx, t.legpx, t.legpx);
      t.ctx.rect    (x, y - t.legpx, t.legpx, t.legpx);
      t.ctx.closePath();
      t.ctx.stroke();
      t.ctx.restore();
    }

    if (typeof this.data == "undefined") return;
    if ( (typeof pos == "undefined") && (typeof leg == "undefined") && (this.islegend == false) ) return;
    var lw   = 0;
    if ( (typeof pos != "undefined") && (typeof leg != "undefined") ) {
      this.islegend = true;
      this.legstr = leg;
      this.legpos = pos;
      if (pos == "top"   )	this.legpos = 0;
      if (pos == "right" )	this.legpos = 1;
      if (pos == "bottom")	this.legpos = 2;
      if (pos == "left"  )	this.legpos = 3;
      this.legtop    = 0;
      this.legright  = 0;
      this.legbottom = 0;
      this.legleft   = 0;

      this.ctx.save();
      this.ctx.font  = this.legfontmod + this.legpx + this.legfont;
      lw   = 0;
      txtw = 0;
      if ((this.legpos == 1) || (this.legpos == 3) ) {
        for (let i=0; i < this.legstr.length; i++ ) {
          if (typeof this.data[i] == "undefined") continue;
          lw = this.ctx.measureText(this.legstr[i]).width;
          if (lw > txtw ) txtw = lw;
        }
      }
      this.ctx.restore();

      if (this.legpos == 0) this.legtop    = this.legpx * 2 + this.legframew * 2 + this.legmarg;
      if (this.legpos == 1) this.legright  = txtw + this.legpx * 2.2 + this.legframew * 2 + this.legmarg;
      if (this.legpos == 2) this.legbottom = this.legpx * 2 + this.legframew * 2 + this.legmarg;
      if (this.legpos == 3) this.legleft   = txtw + this.legpx * 2.2 + this.legframew * 2 + this.legmarg;

      for (let i=0; i < this.legstr.length; i++ ) {
        if ( (typeof this.legstr[i] == "undefined") || (this.legstr[i] == null) || (this.legstr[i] == "") ) this.legstr[i] = (i+1).toString();
      }

      return;
    }

    this.ctx.save();
    this.ctx.beginPath();
    marg = this.legpx / 2;
    this.ctx.lineWidth   = this.legframew  ;
    this.ctx.strokeStyle = this.legframecol;
    this.ctx.fillStyle   = this.legfillcol ;
    this.ctx.font        = this.legfontmod + this.legpx + this.legfont;

    // the legend on top or bottom
    var cl = 0;
    var wd = 0;
    var lf = 0;
    var frmy = 0;
    var recy = 0;
    if ( ( this.legpos == 0 ) || ( this.legpos == 2 ) ) {
      cl = 0;
      for (let i=0; i < this.legstr.length; i++ ) {
        if (typeof this.data[i] == "undefined") continue;
        cl++;
        txt += this.legstr[i]; // all txt together for measurement
      }
      txtw = this.ctx.measureText(txt).width + cl * this.legpx * 2.2 - this.legpx;
      wd   =  txtw + marg * 2;
      lf   = (this.ctx.canvas.width - wd) / 2;

      var txty = 0;
      recy = 0;
      frmy = 0;
      if (this.legpos==0) frmy = this.top - this.legpx * 2 - this.legframew - this.legmarg;
      else                frmy = this.bot + this.legframew * 2 + this.legmarg;
      recy = frmy + this.legpx / 0.7;
      txty = frmy + this.legpx / 0.8;
      let txtx = lf + marg;
      // frame of legend
      roundRect(this.ctx, lf, frmy, wd, this.legpx * 1.8, 8, true, true);
      // text of legend propertis
      this.ctx.font      = this.legfontmod + this.legpx + this.legfont;
      this.ctx.fillStyle = this.legtxtcol;
      for (let i=0; i < this.data.length; i++ ) {
        if ( (this.data[i] == null) || (typeof this.data[i] == "undefined") || (typeof this.legstr[i] == "undefined") ) continue;
        // color rectangle
        colRect(this, i, txtx, recy);
        txtx += this.legpx * 1.2;
        // text of legend
        if (getStyle(this.style[i], "boldover", "---") == "YES") {
          this.ctx.font        = "Bold " + this.legfontmod + this.legpx + this.legfont;
          this.ctx.fillStyle   = getStyle(this.style[i], "linecolor", getStyle(this.style[i], "fillcolor", this.areafill) );
        }
        else {
          this.ctx.font        = this.legfontmod + this.legpx + this.legfont;
          this.ctx.fillStyle = this.legtxtcol;
        }
        this.ctx.fillText(this.legstr[i], txtx, txty);
        txtx += (this.ctx.measureText(this.legstr[i]).width + this.legpx * 1);
      }
    }

    // the legend on right or left
    if ( ( this.legpos == 1 ) || ( this.legpos == 3 ) ) {
      txtw = 0;
      lw = 0;
      cl = 0;
      for (let i=0; i < this.legstr.length; i++ ) {
        lw = this.ctx.measureText(this.legstr[i]).width ;
        if (typeof this.data[i] == "undefined") continue;
        cl++;
        if (lw > txtw ) txtw = lw;
      }
      wd =  txtw + this.legpx * 2.2;
      lf = 0;
      if (this.legpos == 1) lf   = this.rgt   + this.legframew + this.legmarg;
      else                  lf   = this.margh + this.legframew;

      frmy = (this.ctx.canvas.height - this.legpx * (this.legstr.length + 1) ) / 2;
      let txtx = lf + marg;
      // frame of legend
      roundRect(this.ctx, lf, frmy, wd, this.legpx * (cl + 1), 8, true, true);
      recy = frmy + this.legpx * 1.5;
      this.ctx.font      = this.legfontmod + this.legpx + this.legfont;
      this.ctx.fillStyle = this.legtxtcol;
      for (let i=0; i < this.data.length; i++ ) {
        if ( (this.data[i] == null) || (typeof this.data[i] == "undefined") || (typeof this.legstr[i] == "undefined") ) continue;
          // color rectangle
        colRect(this, i, txtx, recy);
        // text of legend
        if (getStyle(this.style[i], "boldover", "---") == "YES") {
          this.ctx.font      = "Bold " + this.legfontmod + this.legpx + this.legfont;
          this.ctx.fillStyle = getStyle(this.style[i], "linecolor", getStyle(this.style[i], "fillcolor", this.areafill) );
        }
        else {
          this.ctx.font      = this.legfontmod + this.legpx + this.legfont;
          this.ctx.fillStyle = this.legtxtcol;
        }
        this.ctx.fillText(this.legstr[i], txtx + this.legpx * 1.2, recy - this.legpx / 5);
        recy += this.legpx;
      }
    }
    this.ctx.closePath();
    this.ctx.restore();
  }

  // ------------------------- end of legend -------------------------


  update(Ydata, Ystyle, Xdesc, XaxisTxt, YaxisTxt) {
    if ((typeof Ydata    != "undefined") && (Ydata    != null)) this.data     = Ydata   ; // new data
    if ((typeof Ystyle   != "undefined") && (Ystyle   != null)) this.style    = Ystyle  ; // new style
    if ((typeof Xdesc    != "undefined") && (Xdesc    != null)) this.desc     = Xdesc   ; // new desc
    if ((typeof XaxisTxt != "undefined") && (XaxisTxt != null)) this.axisXtxt = XaxisTxt; // new X axis text
    if ((typeof YaxisTxt != "undefined") && (YaxisTxt != null)) this.axisYtxt = YaxisTxt; // new Y axis text
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
    this.allpoints = false; // new draw..
    this.draw();
  }


  home() {
    if (!this.zoom) return;     // no zoom
    let size  = this.to - this.from;
    this.from = 0;
    this.to   = size;
    this.draw();
  }



  end() {
    if (!this.zoom) return;     // no zoom
    let size  = this.to - this.from;
    this.from = this.alldatalength - size;
    this.to   = this.alldatalength;
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
    this.ctxl2.canvas.style.cursor = this.pointerCursor;
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
    this.ctxl2.canvas.style.cursor = this.pointerCursor;
    this.draw();
  }

  undozoom() {
    this.from = 0;
    this.to   = this.alldatalength;
    this.datalength = this.alldatalength;
    this.zoom = false;
    this.ctxl2.canvas.style.cursor = this.autoCursor;
    this.draw();
  }


  clear() {
    // main canvas & layer2 clear
    this.ctx.clearRect  (0, 0, this.ctx.canvas.width  , this.ctx.canvas.height  );
    this.ctxl2.clearRect(0, 0, this.ctxl2.canvas.width, this.ctxl2.canvas.height);
  }


  redraw() { this.draw(); }


  draw() {
    // set canvas position and dimmensions the same as parent dimmensions
    let cv = document.getElementById(this.container);

    this.canvas.style.left = 0;
    this.canvas.style.top  = 0;
    this.canvas.width      = cv.offsetWidth ;
    this.canvas.height     = cv.offsetHeight;

    this.layer2.style.left = 0;
    this.layer2.style.top  = 0;
    this.layer2.width      = cv.offsetWidth ;
    this.layer2.height     = cv.offsetHeight;

    this.zlvl  = 0;
    this.lvlv  = this.margh + this.marsize * 2 * this.drawmark + this.legleft * this.islegend; // level vertical axis
    this.zlvl  = this.drb   - this.zerox; // level zero horizontal axis

    this.lft   = this.margh + this.legleft * this.islegend;     // left margin
    this.top   = this.margv + this.legtop  * this.islegend;     // top margin
    this.rgt   = this.ctx.canvas.clientWidth  - this.margh - this.legright  * this.islegend;  // right margin
    this.bot   = this.ctx.canvas.clientHeight - this.margv - this.legbottom * this.islegend;  // bottom margin

    this.zerox = 0;              // level zero
    //this.drt   = this.top + this.al * 1.5 * this.drawaxis + !this.drawaxis * this.al * 0.3; // draw top
    //this.drt   = this.top + (this.drawaxis ? this.al * 1.5 : this.descfpx / 2);  // draw top
    this.drt   = this.top + (this.drawaxis ? this.al * 1.5 : 0);  // draw top

    this.drb   = this.bot - this.marsize * this.drawmark;  // draw bottom
    this.drl   = this.lvlv;                // draw left
    //this.drr   = this.rgt - (this.drawaxis ? this.al * 1.5 : this.descfpx / 2); // draw right
    this.drr   = this.rgt - (this.drawaxis ? this.al * 1.5 : 0); // draw right
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
    let rangev     = { minv:0, maxv:0};            // range of data - min & max
    let marpldata  = { cnt:0, factor:1, weight:1}; // markers data plus
    let marmidata  = { cnt:0, factor:1, weight:1}; // markers data minus
    //let marxdata   = { cnt:0, div:1};              // markers data X

    let maxhm = 0;
    let marh  = 0;

    let vmp = 0;
    let vmm = 0;

    function getMinMax(arr) {
      if (typeof arr == "undefined") return { "min":0, "max":0 };
      let min   = Infinity;
      let max   = -Infinity;
      let start = 0;
      let stop  = arr.length;
      if ( self.zoom && !self.allmaxmin )
      {
        start = self.from;
        stop  = self.to;
      }
      for (let i = start; i < stop; i++) {
        if ( (typeof arr[i] == "undefined") || (arr[i] == null) ) continue;
        min = arr[i] < min ? arr[i] : min;
        max = arr[i] > max ? arr[i] : max;
      }
      return { "min":min, "max":max };
    }


    function getMaxMarkerValue(maxvalue, marcntmax) {
      if ((marcntmax == 0) || (maxvalue==0)) return { "cnt":1, "factor":0, "weight": 0, "value": 0};
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
      return { "cnt":marcntact, "factor":factor, "weight": weight, "value": (factor * weight) };
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
      return { "cnt": marcnt, "div": div * weight };
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
      if (getStyle(style, "boldover", "---") == "YES") { loclinewidth = self.lineBoldWidth; loclinecolor = changeRGBAalpha(loclinecolor, self.lineBoldAlpha); }
      let localshowAllValues = getStyle(style, "showallvalues"  , self.showAllValues).toString() == "true";
      let loctxtvaluescolor  = getStyle(style, "txtvaluescolor" , loclinecolor );
      // https://github.com/outoftrun - thanks Nick :-)
      let locdashlinestr = getStyle(style, "dash" , "[]" );
      locdashlinestr = locdashlinestr.trimLeft();
      locdashlinestr = locdashlinestr.trimRight();
      locdashlinestr = locdashlinestr.slice(1,-1);
      let locdashline = [];
      if (locdashlinestr != "") {
          let params = locdashlinestr.split(",");
          self.ctx.setLineDash (params);
      }
      else
        self.ctx.setLineDash ([]);

      // too much points for marker for bezier curve mode - the chart looks unserious :-)
      if ( (self.bezierlvloff >= 0) && (( self.datalength / maxhm ) > self.bezierlvloff) ) locbeziercurve = false;

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
        if (x0def) y = self.zlvl - ( (data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);
        else       y = self.zlvl;
        // first data
        if (x0def && !lastdef) {
          self.ctx.beginPath();
          if (x1def) {
            self.ctx.moveTo(x, y);
            self.ctx.lineTo(x, y);
          }
          else {
            self.ctx.save();
            self.ctx.strokeStyle = changeRGBAalpha(locpointcolor, 1);
            self.ctx.fillStyle   = locpointcolor;
            self.ctx.beginPath();
            self.ctx.arc(self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2), self.zlvl - (data[i + self.from * self.zoom] +self.zoffs) * self.wght * self.dcorr * self.zcorr, locpointsize, 0, 2 * Math.PI);
            self.ctx.stroke();
            self.ctx.fill();
            self.ctx.restore();
          }
        }
        // middle data
        if (x0def && x1def) {
          if (locbeziercurve) { //bezier curve
            x1 = self.lvlv + ( ( (i + 1) * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
            y1 = self.zlvl - ( (data[i + 1 + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);
            self.ctx.bezierCurveTo(x + self.marhpx / locbezierconst, y, x1 - self.marhpx / locbezierconst, y1, x1, y1);
          }
          else
            self.ctx.lineTo(x, y);
        }

        // last data
        if (x0def && !x1def) {
          self.ctx.lineTo(x, y);
          self.ctx.stroke();
          self.ctx.closePath();
          self.ctx.beginPath();
        }
        // true last data
        if (x0def && !lastdef && !x1def ) {
          if (i+1 < self.datalength) {
            self.ctx.lineTo(x + self.marhpx , y);
          }
          else {
            self.ctx.save();
            self.ctx.strokeStyle = changeRGBAalpha(locpointcolor, 1);
            self.ctx.fillStyle   = locpointcolor;
            self.ctx.beginPath();
            self.ctx.arc(self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2),
                         self.zlvl - (data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr,
                         locpointsize, 0, 2 * Math.PI);
            self.ctx.stroke();
            self.ctx.fill();
            self.ctx.restore();
          }
        }

        lastdef = x0def;
      }

      self.ctx.setLineDash ([]);

      // data big points
      if (loclinepoints || self.allpoints) {
        self.ctx.beginPath();
        if ( (typeof data[0 + self.from * self.zoom] != "undefined") && (data[0 + self.from * self.zoom] != null) ) {
          self.ctx.arc(self.lvlv + self.hmarshift * (self.marhpx / 2), self.zlvl - (data[0 + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr, locpointsize, 0, 2 * Math.PI);
          self.ctx.stroke();
          self.ctx.fill();
        }
        for (let i = 1; i < self.datalength; i++) {
          if ( (typeof data[i + self.from * self.zoom] == "undefined") || (data[i + self.from * self.zoom] == null) ) continue;
          self.ctx.beginPath();
          self.ctx.arc(self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2), self.zlvl - (data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr, locpointsize, 0, 2 * Math.PI);
          self.ctx.stroke();
          self.ctx.fill();
        }
        self.ctx.closePath();
      }

      if (localshowAllValues) {
        self.ctx.font = ( (getStyle(style, "boldover", "---") == "YES") ? "Bold" : "" ) + self.descfontmod + self.descfpx + self.descfont;
        self.ctx.strokeStyle  = loctxtvaluescolor;
        self.ctx.fillStyle    = loctxtvaluescolor;
        self.ctx.textAlign    = "center";
        self.ctx.textBaseline = "middle";
        self.ctx.beginPath();
        for (let i = 0; i < self.datalength; i++) {
          if ( (typeof data[i + self.from * self.zoom] == "undefined") || (data[i + self.from * self.zoom] == null) ) continue;
          let val = data[i + self.from * self.zoom];
          let valstr = val;
          if (self.formattxtvalues)
            valstr = val.toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.valuedecimal, maximumFractionDigits: self.valuedecimal});
          let w = self.ctx.measureText(valstr).width;
          if ((w + self.descfpx) > self.marhpx) break; // auto off
          let locy = - (data[i + self.from * self.zoom] > 0 ? 1 : -1) * self.descfpx * self.textvalueoffset + // offset up/down
                     self.zlvl - (data[i + self.from * self.zoom] + self.zoffs ) * self.wght * self.dcorr * self.zcorr;
          if ((locy < self.drt) || (locy > self.drb)) locy += 2*(data[i + self.from * self.zoom] > 0 ? 1 : -1) * self.descfpx * self.textvalueoffset;
          //self.ctx.fillText( valstr,
          //                   self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2),
          //                   locy);
          let locx = self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2);
          if ((locx - w/2 - self.descfpx/2) < self.lvlv) locx = locx + w/2 + self.descfpx/2;
          if ((locx + w/2 + self.descfpx/2) > self.drr ) locx = locx - w/2 - self.descfpx/2;
          self.ctx.fillText( valstr, locx, locy);
          self.ctx.stroke();
          self.ctx.fill();
        }
        self.ctx.closePath();
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
      if (getStyle(style, "boldover", "---") == "YES") { self.ctx.lineWidth =self.barBoldLineWidth; self.ctx.fillStyle = changeRGBAalpha(self.ctx.fillStyle, self.barBoldAlpha); }
      let localshowAllValues = getStyle(style, "showallvalues" , self.showAllValues).toString() == "true";
      let loctxtvaluescolor  = getStyle(style, "txtvaluescolor", self.ctx.strokeStyle);

      self.ctx.beginPath();
      let xdef = false;             // is data?
      let wdh  = self.marhpx * self.barperc; // place for all bars
      let wob  = wdh / self.barcnt; // width of one bar

      // too much bars...
      if (self.marxdata.div > 1) { wob = wob / (self.marxdata.div * 1); }

      let x = 0;
      let y = 0;
      for (let i = 0; i < self.datalength; i++) {
        xdef = (typeof data[i + self.from * self.zoom] != "undefined") && (data[i + self.from * self.zoom] != null);
        if (xdef) {
          //x = self.lvlv + ((i * self.marhpx) / self.xdiv) + (wob * self.barnr) + self.hmarshift * ((self.marhpx / 2) - (wdh / 2));
          y = self.zlvl - ((data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);
          x = self.lvlv + self.hmarshift * (self.marhpx / 2) - wob/2*self.barcnt + ((i * self.marhpx) / self.xdiv) + (wob * self.barnr);
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
        self.ctx.strokeStyle = changeRGBAalpha(locpointcolor, 1);
        self.ctx.fillStyle   = locpointcolor;
        self.ctx.stroke();
        self.ctx.fill();
        for (let i = 0; i < self.datalength; i++) {
          if ( (typeof data[i + self.from * self.zoom] == "undefined") || (data[i + self.from * self.zoom] == null) ) continue;
          self.ctx.beginPath();
          x = self.lvlv + ((i * self.marhpx) / self.xdiv) + (wob * self.barnr) + self.hmarshift * ((self.marhpx / 2) - (wdh / 2) - wob/2);
          y = self.zlvl - ((data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);
          self.ctx.arc(x, y, locpointsize, 0, 2 * Math.PI);
          self.ctx.stroke();
          self.ctx.fill();
        }
      }

      if (localshowAllValues) {
        self.ctx.font = ( (getStyle(style, "boldover", "---") == "YES") ? "Bold" : "" ) + self.descfontmod + self.descfpx + self.descfont;
        self.ctx.strokeStyle  = loctxtvaluescolor;
        self.ctx.fillStyle    = loctxtvaluescolor;
        self.ctx.textAlign    = "center";
        self.ctx.textBaseline = "middle";
        self.ctx.beginPath();
        for (let i = 0; i < self.datalength; i++) {
          if ( (typeof data[i + self.from * self.zoom] == "undefined") || (data[i + self.from * self.zoom] == null) ) continue;
          let val = data[i + self.from * self.zoom];
          let valstr = val;
          if (self.formattxtvalues)
            valstr = val.toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.valuedecimal, maximumFractionDigits: self.valuedecimal});
          let w = self.ctx.measureText(valstr).width;
          if ((w + self.descfpx) > self.marhpx) break; // auto off
          let locx = self.lvlv + ((i * self.marhpx) / self.xdiv) + (wob * self.barnr) + self.hmarshift * ((self.marhpx / 2) - (wdh / 2) - wob/2);
          let locy = - (data[i + self.from * self.zoom] > 0 ? 1 : -1) * self.descfpx * self.textvalueoffset + // offset up/down
                     self.zlvl - (data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr;
          if ((locy < self.drt) || (locy > self.drb)) locy += 2*(data[i + self.from * self.zoom] > 0 ? 1 : -1) * self.descfpx * self.textvalueoffset;
          //self.ctx.fillText( valstr, x, locy);
          //let locx = self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2);
          if ((locx - w/2 - self.descfpx/2) < self.lvlv) locx = locx + w/2 + self.descfpx/2;
          if ((locx + w/2 + self.descfpx/2) > self.drr ) locx = locx - w/2 - self.descfpx/2;
          self.ctx.fillText( valstr, locx, locy);
          self.ctx.stroke();
          self.ctx.fill();
        }
        self.ctx.closePath();
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
      if (getStyle(style, "pointcolor" , null) == null) locpointcolor = changeRGBAalpha(locfillcolor, 0.3);
      if (getStyle(style, "boldover", "---") == "YES") { loclinewidth = self.areaBoldLineWidth; loclinecolor = changeRGBAalpha(loclinecolor, self.areaBoldLineWidth); locfillcolor = changeRGBAalpha(locfillcolor, self.areaBoldAreaAlpha); }
      let localshowAllValues = getStyle(style, "showallvalues" , self.showAllValues).toString() == "true";
      let loctxtvaluescolor  = getStyle(style, "txtvaluescolor", loclinecolor);

      self.ctx.strokeStyle = loclinecolor;
      self.ctx.fillStyle   = locfillcolor;
      self.ctx.lineWidth   = loclinewidth;

      // too much points for marker for bezier curve mode - the chart looks unserious :-)
      if ( (self.bezierlvloff >= 0) && (( self.datalength / maxhm ) > self.bezierlvloff) ) locbeziercurve = false;

      let lastdef = false;
      let x = 0; let x1 = 0;
      let y = 0; let y1 = 0;

      for (let i = 0; i < self.datalength; i++) {
        let x0def = (typeof data[i + 0 + self.from * self.zoom] != "undefined") && (data[i + 0 + self.from * self.zoom] != null);
        let x1def = (typeof data[i + 1 + self.from * self.zoom] != "undefined") && (data[i + 1 + self.from * self.zoom] != null);
        if (i == self.datalength - 1) x1def = false;

        x = self.lvlv + ((i * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
        y = 0;
        if (x0def) y = self.zlvl - ( (data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);
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
            y1 = self.zlvl - ( (data[i + 1 + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);
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
        self.ctx.strokeStyle = changeRGBAalpha(locpointcolor, 1);
        self.ctx.fillStyle   = locpointcolor;
        if ( (typeof data[0 + self.from * self.zoom] != "undefined") && (data[0 + self.from * self.zoom] != null) ) {
          self.ctx.arc(self.lvlv + self.hmarshift * (self.marhpx / 2), self.zlvl - (data[0 + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr, locpointsize, 0, 2 * Math.PI);
          self.ctx.stroke();
          self.ctx.fill();
        }
        for (let i = 1; i < self.datalength; i++) {
          if ( (typeof data[i + self.from * self.zoom] == "undefined") || (data[i + self.from * self.zoom] == null) ) continue;
          self.ctx.beginPath();
          self.ctx.arc(self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2), self.zlvl - (data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr, locpointsize, 0, 2 * Math.PI);
          self.ctx.stroke();
          self.ctx.fill();
        }
      }
      if (localshowAllValues) {
        self.ctx.font = ( (getStyle(style, "boldover", "---") == "YES") ? "Bold" : "" ) + self.descfontmod + self.descfpx + self.descfont;
        self.ctx.strokeStyle  = loctxtvaluescolor;
        self.ctx.fillStyle    = loctxtvaluescolor;
        self.ctx.textAlign    = "center";
        self.ctx.textBaseline = "middle";
        self.ctx.beginPath();
        for (let i = 0; i < self.datalength; i++) {
          if ( (typeof data[i + self.from * self.zoom] == "undefined") || (data[i + self.from * self.zoom] == null) ) continue;
          let val = data[i + self.from * self.zoom];
          let valstr = val;
          if (self.formattxtvalues)
            valstr = val.toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.valuedecimal, maximumFractionDigits: self.valuedecimal});
          let w = self.ctx.measureText(valstr).width;
          if ((w + self.descfpx) > self.marhpx) break; // auto off
          let locy = - (data[i + self.from * self.zoom] > 0 ? 1 : -1) * self.descfpx * self.textvalueoffset + // offset up/down
                     self.zlvl - (data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr;
          if ((locy < self.drt) || (locy > self.drb)) locy += 2*(data[i + self.from * self.zoom] > 0 ? 1 : -1) * self.descfpx * self.textvalueoffset;
          let locx = self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2);
          if ((locx - w/2 - self.descfpx/2) < self.lvlv) locx = locx + w/2 + self.descfpx/2;
          if ((locx + w/2 + self.descfpx/2) > self.drr ) locx = locx - w/2 - self.descfpx/2;
          self.ctx.fillText( valstr, locx, locy);
          self.ctx.stroke();
          self.ctx.fill();
        }
        self.ctx.closePath();
      }

    }


    // stairs graph
    function do_stairs_graph(data, style) {
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
      if (getStyle(style, "pointcolor" , null) == null) locpointcolor  = changeRGBAalpha(loclinecolor, 0.3);
      if (getStyle(style, "boldover", "---") == "YES") { loclinewidth = self.stairsBoldLineWidth; loclinecolor = changeRGBAalpha(loclinecolor, self.stairsBoldLineAlpha); }
      let localshowAllValues = getStyle(style, "showallvalues" , self.showAllValues).toString() == "true";
      let loctxtvaluescolor  = getStyle(style, "txtvaluescolor", loclinecolor);

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
        if (x0def) y  = self.zlvl - ((data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);
        else       y  = self.zlvl;
        if (x1def) y1 = self.zlvl - ((data[i + 1 + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);
        else       y1 = y;
        // first data
        if (x0def && !lastdef && x1def) {
          self.ctx.beginPath();
          self.ctx.moveTo(x, y);
          self.ctx.lineTo(x + self.marhpx / self.xdiv , y);
        }
        // middle data
        if (x0def && x1def) {
          self.ctx.lineTo(x + self.marhpx / self.xdiv , y);
          self.ctx.lineTo(x + self.marhpx / self.xdiv , y1);
        }
        // last data
        if (x0def && !x1def  ) {
          if (i+1 < self.datalength) {
            self.ctx.moveTo(x, y1);
            self.ctx.lineTo(x + self.marhpx / self.xdiv , y1);
          }
          self.ctx.stroke();
          //self.ctx.fill();
          self.ctx.closePath();
          self.ctx.beginPath();
        }
        // true last data
        if (x0def && !lastdef && !x1def ) {
          if (i+1 < self.datalength) {
            self.ctx.lineTo(x + self.marhpx / self.xdiv , y);
          }
          else {
            self.ctx.save();
            self.ctx.strokeStyle = changeRGBAalpha(locpointcolor, 1);
            self.ctx.fillStyle   = locpointcolor;
            self.ctx.beginPath();
            self.ctx.arc(self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2), self.zlvl - (data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr, locpointsize, 0, 2 * Math.PI);
            self.ctx.stroke();
            self.ctx.fill();
            self.ctx.restore();
          }
        }
        lastdef = x0def;
      }

      // data big points
      if (loclinepoints || self.allpoints) {
        self.ctx.beginPath();
        self.ctx.strokeStyle = changeRGBAalpha(locpointcolor, 1);
        self.ctx.fillStyle   = locpointcolor;
        if ( (typeof data[0 + self.from * self.zoom] != "undefined") && (data[0 + self.from * self.zoom] != null) ) {
          self.ctx.arc(self.lvlv + self.hmarshift * (self.marhpx / 2), self.zlvl - (data[0 + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr, locpointsize, 0, 2 * Math.PI);
          self.ctx.stroke();
          self.ctx.fill();
        }
        for (let i = 1; i < self.datalength; i++) {
          if ( (typeof data[i + self.from * self.zoom] == "undefined") || (data[i + self.from * self.zoom] == null) ) continue;
          self.ctx.beginPath();
          self.ctx.arc(self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2), self.zlvl - (data[i + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr, locpointsize, 0, 2 * Math.PI);
          self.ctx.stroke();
          self.ctx.fill();
        }
      }
      if (localshowAllValues) {
        self.ctx.font = ( (getStyle(style, "boldover", "---") == "YES") ? "Bold" : "" ) + self.descfontmod + self.descfpx + self.descfont;
        self.ctx.strokeStyle  = loctxtvaluescolor;
        self.ctx.fillStyle    = loctxtvaluescolor;
        self.ctx.textAlign    = "center";
        self.ctx.textBaseline = "middle";
        self.ctx.beginPath();
        for (let i = 0; i < self.datalength; i++) {
          if ( (typeof data[i + self.from * self.zoom] == "undefined") || (data[i + self.from * self.zoom] == null) ) continue;
          let val = data[i + self.from * self.zoom];
          let valstr = val;
          if (self.formattxtvalues)
            valstr = val.toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.valuedecimal, maximumFractionDigits: self.valuedecimal});
          let w = self.ctx.measureText(valstr).width;
          if ((w + self.descfpx) > self.marhpx) break; // auto off
          let locy = - ( val > 0 ? 1 : -1) * self.descfpx * self.textvalueoffset + // offset up/down
                     self.zlvl - ( val + self.zoffs) * self.wght * self.dcorr * self.zcorr;
          if ((locy < self.drt) || (locy > self.drb)) locy += 2*(data[i + self.from * self.zoom] > 0 ? 1 : -1) * self.descfpx * self.textvalueoffset;
          //self.ctx.fillText( valstr,
          //                   self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2),
          //                   locy);
          let locx = self.lvlv + (i * self.marhpx) / self.xdiv + self.hmarshift * (self.marhpx / 2);
          if ((locx - w/2 - self.descfpx/2) < self.lvlv) locx = locx + w/2 + self.descfpx/2;
          if ((locx + w/2 + self.descfpx/2) > self.drr ) locx = locx - w/2 - self.descfpx/2;
          self.ctx.fillText( valstr, locx, locy);

          self.ctx.stroke();
          self.ctx.fill();
        }
        self.ctx.closePath();
      }
    }



    // make all charts ...
    function do_graph() {
      if (typeof self.style == "undefined") return;
      for (let i = 0; i < self.data.length; i++) {
        if (typeof self.style[i] == "undefined") continue;
        if (getStyle(self.style[i], "visible", "") == "NO") {
          if (isBar(i)) { self.barnr++; }
          continue; // hide this chart
        }
        if (getStyle(self.style[i], "type", "") == "line"  ) do_line_graph  (self.data[i], self.style[i]); else
        if (getStyle(self.style[i], "type", "") == "area"  ) do_area_graph  (self.data[i], self.style[i]); else
        if (getStyle(self.style[i], "type", "") == "bar"   ) do_bar_graph   (self.data[i], self.style[i]); else
        if (getStyle(self.style[i], "type", "") == "stairs") do_stairs_graph(self.data[i], self.style[i]); else
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
    var noclick= false;
    var xmove =0;
    var oldind = -1;

    // mouse events
    function on_mouseMove(ev) {
      // for refresh
      if (ev==null) ev = self.oldMouseEv;
      else self.oldMouseEv = ev;
      if (ev==null) return;

      // bold on legend mouseover
      if (self.internal_mose_flag) return;
      if (self.boldonover) {
        var ind = isinrect(ev.offsetX, ev.offsetY);

        if ((ind >= 0) && (ind != oldind)) {
          if (ind != oldind) setstyleparam(ind, "boldover", true);
        }
        else {
          for (let ind=0; ind < self.style.length; ind++) setstyleparam(ind, "boldover", false);
        }

        if (ind != oldind) {
          self.internal_mose_flag = true;
          self.draw();
        }
        oldind = ind;
      }
      self.internal_mose_flag = false;

      // move chart by right mouse key
      if (self.zoom && self.movezoombymouse)
      {
        if (ev.buttons==2) {
          self.ctxl2.canvas.style.cursor = self.moveCursor;
          xmove += ev.movementX;
          if (Math.abs(xmove) >= (self.marhpx) ) {
            if (xmove < 0) { if (self.revmousemoveinzoom) self.left();  else self.right(); }
            else           { if (self.revmousemoveinzoom) self.right(); else self.left();  }
            xmove=0;
          }
          return;
        }
        self.ctxl2.canvas.style.cursor = self.pointerCursor;
      }

      let lastXshadow = lastX;

      if ((ev.type != "keydown") && (ev.offsetX!=0) && (ev.offsetY!=0) ) {
        lastX = ev.offsetX;
        lastY = ev.offsetY;
      }
      if ((ev.type == "mousemove") && (ev.offsetX!=0) && (ev.offsetY!=0) ) {
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
      if ((y >= self.drt - self.hintpointw * 2) && (y <= self.drb + self.hintpointw * 2) &&
          (x >= self.drl - self.hintpointw * 2) && (x <= self.drr + self.hintpointw * 2)) {
        xnbr = Math.round( (x - self.lvlv - self.hmarshift * (self.marhpx / 2) ) / (self.marhpx / self.xdiv) );
        if ( isNaN(xnbr) || (xnbr < 0 ) || (xnbr >= self.datalength) ) return;
        let xJump = self.lvlv + ((xnbr * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);

        let LRmarg = self.LRsize * self.drv;
        if (self.zoom && self.mouseclickLR && !ev.shiftKey) {
          // left shift area
          if ( (x > self.drl) && (x < self.drl + LRmarg) && (self.from > 0) ) {
              self.ctxl2.lineWidth = 5;
              self.ctxl2.strokeStyle = changeRGBAalpha(self.hintzoomcol, 1);
              self.ctxl2.fillStyle   = self.hintzoomcol;
              self.ctxl2.beginPath();
              self.ctxl2.fillRect(self.drl, self.drt, LRmarg, self.drv);
              self.ctxl2.stroke();
              self.ctxl2.fill();
              //triangle
              self.ctxl2.beginPath();
              self.ctxl2.moveTo( self.drl + LRmarg * 0.8, self.drt + self.drv / 2 - self.drv * 0.1);
              self.ctxl2.lineTo( self.drl + LRmarg * 0.2, self.drt + (self.drb - self.drt) / 2);
              self.ctxl2.lineTo( self.drl + LRmarg * 0.8, self.drt + self.drv / 2 + self.drv * 0.1);
              //self.ctxl2.lineTo( self.drl + LRmarg * 0.9, self.drt + self.drv / 2 - self.drv * 0.1);
              self.ctxl2.stroke();
              //self.ctxl2.fill();
              self.ctxl2.closePath();
          }
          // right shift area
          if ( (x > self.drr - LRmarg) && (x < self.drr) && (self.to < self.alldatalength) ) {
              self.ctxl2.lineWidth = 5;
              self.ctxl2.strokeStyle = changeRGBAalpha(self.hintzoomcol, 1);
              self.ctxl2.fillStyle = self.hintzoomcol;
              self.ctxl2.beginPath();
              self.ctxl2.fillRect(self.drr - LRmarg, self.drt, LRmarg, self.drv);
              self.ctxl2.stroke();
              self.ctxl2.fill();
              //triangle
              self.ctxl2.beginPath();
              self.ctxl2.moveTo( self.drr - LRmarg * 0.8, self.drt + self.drv / 2 - self.drv * 0.1);
              self.ctxl2.lineTo( self.drr - LRmarg * 0.2, self.drt + (self.drb - self.drt) / 2);
              self.ctxl2.lineTo( self.drr - LRmarg * 0.8, self.drt + self.drv / 2 + self.drv * 0.1);
              //self.ctxl2.lineTo( self.drr - LRmarg * 0.9, self.drt + self.drv / 2 - self.drv * 0.1);
              self.ctxl2.stroke();
              //self.ctxl2.fill();
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


        // change back color on hit point or small hint
        let wassmallhint = false;
        let hitpoint = false;
        let xa = 0;
        let ya = 0;
        let locbarnr=0;
        let sens = self.hintpointw * 2;
        let wdh = self.marhpx * self.barperc; // room for all bars
        let wob = wdh / self.barcnt;          // width of one bar

        let difx = (self.marhpx * self.barperc) / 2 ;//- wob / 2; // start of left border bars

        let xzero = self.lvlv + ((xnbr * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
        for ( let i = 0; i < self.data.length; i++) {
        //  if (getStyle(self.style[i], "visible", "---") == "NO") continue;
          if (typeof self.data[i] == "undefined") continue;
          ya = self.zlvl - ((self.data[i][xnbr + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);
          xa = xzero;
          // if bar then make shift on x
          if ( isBar(i) ) {
            locbarnr++;
            xa = xa - difx + wob * (locbarnr - 1);
          }
          // check...
          if ( (Math.abs(xa - lastX) < sens) && (Math.abs(ya - lastY ) < sens) )
             { hitpoint = true; break; }
          else hitpoint = false;
        }

        // mini hint over point?
        if (hitpoint && self.smallhint) { noclick = true; on_canvas_click(ev); noclick = false; wassmallhint = true;}

        // hint only with ctrl ?
        if (self.hintwithctrl && !ev.ctrlKey) return;
        self.ctxl2.lineWidth   = self.crlinewidth;
        self.ctxl2.setLineDash (self.crYlinedash);
        self.ctxl2.strokeStyle = self.crlinecol;

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
        if (   ( (self.crXYline && (x >= self.drl) && (x <= self.drr) ) ) ||
               ( (self.crXYlineOnButton) && (ev.buttons==1) )
           )
        {
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
            ynbr = Math.round( (y - self.zlvl) / self.marpx );
            y1 = self.zlvl + (ynbr * self.marpx);
            y  = y1;
          }
          let ydef=false;
          if ( self.crYjumpP ) {
            let sens    = self.marax;
            let oldydif =  sens;
            for (let i = 0; i < self.data.length; i++) {
              // jump on Y data
              ydef = (typeof self.data[i] != "undefined") && (typeof self.data[i][xnbr + self.from * self.zoom] != "undefined") && (self.data[i][xnbr + self.from * self.zoom] != null);
              if (ydef) {
                y2 = self.zlvl - ( (self.data[i][xnbr + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);
                // check ...
                let ydif = Math.abs( y2 - y );
                if ( (!self.crYjumpM) && (ydif < sens) && (ydif <= oldydif) ) {
                  oldydif = ydif;
                  y = y2;
                }
              }
              else continue;
              // jump on markers & data
              if (self.crYjumpM && self.crYjumpP) if ( Math.abs( y2 - y1 ) < sens ) {
                if (getStyle(self.style[i], "visible", "") != "NO")
                  y = y2;
                }
            }
          }
        }


        if (   ( (self.crXYline && (y >= self.drt) && (y <= self.drb) ) ) ||
               ( (self.crXYlineOnButton) && (ev.buttons==1) )
            )
        {
            // line horizontal
            self.ctxl2.beginPath();
            self.ctxl2.moveTo(self.drl , y);
            self.ctxl2.lineTo(self.drr , y);
            self.ctxl2.stroke();
            self.ctxl2.closePath();
        }


        // big point around data point for every data table
        if (self.crpointhint || self.crlinetomouse || self.textvalue) {
          let ydef;
          let y2;
          let bnr  = 0;
          let difx = 0;
          self.ctxl2.setLineDash([]);

          for (let i = 0; i < self.data.length; i++ ) {
            ydef = (typeof self.data[i] != "undefined") && (typeof self.data[i][xnbr + self.from * self.zoom] != "undefined") && (self.data[i][xnbr + self.from * self.zoom] != null) ;
            if (ydef)
              y2 = self.zlvl - ( (self.data[i][xnbr + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr) ;
            else
              continue;
            difx = 0;
            if (self.crpointhint) {
              // big point on data
              self.ctxl2.lineWidth   = self.hintpointlwdth;
              self.ctxl2.strokeStyle = self.hintlinecol   ;
              if ( isLine(i) ) {
                if (self.hintpointcolfromdraw) {
                  self.ctxl2.fillStyle   = getStyle(self.style[i], "linecolor", self.hintpointfill);
                  self.ctxl2.strokeStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
                }
                else {
                  self.ctxl2.fillStyle   = self.hintpointfill;
                  self.ctxl2.strokeStyle = self.hintlinecol  ;
                }
              }
              else {
                if (self.hintpointcolfromdraw) {
                  self.ctxl2.fillStyle   = getStyle(self.style[i], "fillcolor", self.hintpointfill);
                  self.ctxl2.strokeStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
                }
                else {
                  self.ctxl2.fillStyle   = self.hintpointfill;
                  self.ctxl2.strokeStyle = self.hintlinecol  ;
                }
              }
              if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
              if ( isBar(i) ) {
                let wdh = self.marhpx * self.barperc; // room for all bars
                let wob = wdh / self.barcnt;          // width of one bar
                // too many bars...
                if (self.marxdata.div > 1) { wob = wob / (self.marxdata.div * 1); }

                difx =  - (wob/1 * (bnr)) +  (self.barcnt-1)*wob/2;
                bnr++;
              }
              if (getStyle(self.style[i], "visible", "---") == "NO") continue;
              self.ctxl2.beginPath();
              self.ctxl2.arc(xJump - difx, y2, self.hintpointw, 0, 2 * Math.PI);
              self.ctxl2.stroke();
              if (self.crpointfill) self.ctxl2.fill();
            }
            // value text
            //if (self.textvalue && (self.marxdata.div == 1)) {
            if (self.textvalue ) {
              if (getStyle(self.style[i], "visible", "---") == "NO") continue;
              // text value color = color from style or color from line
              self.ctxl2.fillStyle   = getStyle(self.style[i], "txtvaluescolor", getStyle(self.style[i], "linecolor", self.hintpointfill));
              self.ctxl2.font        = self.livevalfontmod + self.livevalfpx + self.livevalfont;
              self.ctxl2.beginPath();
              self.ctxl2.textAlign    = "center";
              self.ctxl2.textBaseline = "middle";
              let val =  self.data[i][xnbr + self.from * self.zoom];
              if (self.formattxtvalues)
                val = val.toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.valuedecimal, maximumFractionDigits: self.valuedecimal});
              let locy = y2 - (self.data[i][xnbr + self.from * self.zoom] > 0 ? 1 : -1) * self.descfpx * self.textvalueoffset;
              if ((locy < self.drt) || (locy > self.drb)) locy = y2 + (self.data[i][xnbr + self.from * self.zoom] > 0 ? 1 : -1) * self.descfpx * self.textvalueoffset;
              let locx =  xJump - difx;
              let w = self.ctx.measureText(val).width;
              if ((locx - w/2 - self.descfpx/2) < self.lvlv) locx = locx + w/2 + self.descfpx/2;
              if ((locx + w/2 + self.descfpx/2) > self.drr ) locx = locx - w/2 - self.descfpx/2;
              self.ctxl2.fillText( val, locx, locy);
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
        if (self.crHint && ! wassmallhint) {
          self.ctxl2.setLineDash([]);
          self.ctxl2.font = self.hintfontmod + self.hintfpx + self.hintfont;
          let s = [];
          let txtw = 0;
          let txtwt= 0;
          let txt = "";
          if (typeof (self.desc[xnbr + self.from * self.zoom]) == 'number')
            txt  = self.axisXtxt + " = " + (self.desc[xnbr + self.from * self.zoom].toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.axisdecimalX, maximumFractionDigits: self.axisdecimalX}) ) ;
          else
            txt  = self.axisXtxt + " = " + (self.desc[xnbr + self.from * self.zoom] ) ;

          let txt2 = "";
          txtw = self.ctxl2.measureText(txt).width;
          for (let i = 0; i < self.data.length; i++) {
            if (getStyle(self.style[i], "visible", "---") == "NO") continue;
            if ((typeof self.data[i] != "undefined") && (typeof self.data[i][xnbr + self.from * self.zoom] != "undefined") && (self.data[i][xnbr + self.from * self.zoom] != null))
            s.push( (self.data[i][xnbr + self.from * self.zoom] * self.dcorr ).toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.valuedecimal, maximumFractionDigits: self.valuedecimal}) + " " + self.aYtxt);
            else s.push("no data");
            txtwt = self.ctxl2.measureText(s[i]).width + (self.hintfpx * 3);
            if (txtwt > txtw) txtw = txtwt;
          }
          while (self.ctxl2.measureText(txt2).width < txtw) { txt2 += String.fromCharCode(0x2500); if (txt2.length > 20) break; }

          self.ctxl2.beginPath();
          if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
          if (hitpoint)
            self.ctxl2.fillStyle    = self.hintfillhitcol;
          else
            self.ctxl2.fillStyle    = self.hintfillcol;
          self.ctxl2.textBaseline = "top";
          self.ctxl2.textAlign    = "start";
          let mx;
          let my;

          // level value chart on "0" position
          //lastY = self.zlvl - ((self.data[0][xnbr + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);

          // out of X+
          if ((lastX + txtw + self.hintfpx *3 ) > self.drr) mx = lastX - self.hintfpx * 3 - txtw;
          else                                              mx = lastX + self.hintfpx * 2;
          // out of Y-
          if ((lastY + self.hintfpx * (s.length + 4 + 1) ) > self.drb) my = lastY - self.hintfpx * (s.length + 4 + 1) ;
          else                                                         my = lastY + self.hintfpx * 2;

          self.ctxl2.lineWidth   = self.hintframewidth;
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
          var v = 0;
          for (let i = 0; i < self.data.length; i++) {
            if (getStyle(self.style[i], "visible", "---") == "NO") { v++; continue; }
            self.ctxl2.beginPath();
            if (isLine(i) )
              self.ctxl2.fillStyle   = getStyle(self.style[i], "linecolor", self.hintpointfill);
            else
              self.ctxl2.fillStyle   = getStyle(self.style[i], "fillcolor", self.hintpointfill);
            if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
            //ctxl2.fillRect(mx + hintfpx / 2, my + hintfpx * 0.5 + (hintfpx * (i + 2)), hintfpx, hintfpx - 2);
            self.ctxl2.strokeStyle = "rgba(0,0,0,1)";
            self.ctxl2.lineWidth   = self.hintcolfrwdth;
            self.ctxl2.rect(mx + self.hintfpx / 2, my + self.hintfpx * 0.5 + (self.hintfpx * (i - v + 2)), self.hintfpx, self.hintfpx);
            self.ctxl2.stroke();
            self.ctxl2.beginPath();
            self.ctxl2.fillRect(mx + self.hintfpx / 2, my + self.hintfpx * 0.5 + (self.hintfpx * (i - v + 2)), self.hintfpx, self.hintfpx);
            self.ctxl2.stroke();
            // text
            self.ctxl2.fillStyle = self.hinttxtcol;
            self.ctxl2.textAlign = "start";
            self.ctxl2.fillText(" ", mx + self.hintfpx * 2 , my + self.hintfpx * 0.5 + (self.hintfpx * (i - v + 2)) );
            self.ctxl2.textAlign = "end";
            self.ctxl2.fillText(s[i-v], mx + self.hintfpx / 2 + txtw, my + self.hintfpx * 0.5 + (self.hintfpx * (i - v + 2)) );
          }
        }
        // live value on axis
        if (self.XaxisLiveValue || self.YaxisLiveValue) {
          self.ctxl2.font         = self.descfontmod + self.descfpx + self.descfont;
          let mar  = 2;
          let maxw = 0;
          let w    = 0;
          let axtxt = "";

          // Y
          if (self.YaxisLiveValue) {
            axtxt = ( (self.zlvl - y) / (self.wght * self.dcorr * self.zcorr) - self.zoffs).toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.axisdecimalY, maximumFractionDigits: self.axisdecimalY}) ;
            w = self.ctxl2.measureText(axtxt).width;
            // max length of y txt
            w    = self.ctxl2.measureText( minv.toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.axisdecimalY, maximumFractionDigits: self.axisdecimalY}) ).width;
            maxw = self.ctxl2.measureText( maxv.toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.axisdecimalY, maximumFractionDigits: self.axisdecimalY}) ).width;
            if (maxw > w) w = maxw;
            // Y frame desc
            self.ctxl2.beginPath();
            self.ctxl2.textAlign    = "end";
            self.ctxl2.textBaseline = "middle";
            self.ctxl2.fillStyle = self.liveValueback;
            self.ctxl2.fillRect(self.lvlv - self.aw - w - mar , y - self.descfpx/2 - mar, 1 + w + mar * 2, self.descfpx + mar * 2);
            self.ctxl2.fillStyle = self.liveValueColor;
            self.ctxl2.fillText(axtxt, self.lvlv - self.aw, y );
            self.ctxl2.stroke();
            self.ctxl2.fill();
            self.ctxl2.closePath();
          }

          // X
          if (self.XaxisLiveValue) {
            let hor  = x;
            let rhor = 1;
            self.ctxl2.font         = self.descfontmod + self.descfpx + self.descfont;
            // max length of desc
            w=maxw;
            if (self.zoom) {
              w    = self.ctxl2.measureText(self.desc[self.from]).width;
              maxw = self.ctxl2.measureText(self.desc[self.to-1]).width;
            }
            else {
              w    = self.ctxl2.measureText(self.desc[0]).width;
              maxw = self.ctxl2.measureText(self.desc[self.desc.length-1  ]).width;
            }
            if (maxw > w) w = maxw;

            axtxt = self.desc[xnbr + self.from * self.zoom];
            // X frame desc
            self.ctxl2.beginPath();
            self.ctxl2.save();
            // always rotate 90 grad
            self.ctxl2.translate(self.drl, self.drb);
            self.ctxl2.rotate( -0.5 * Math.PI );
            rhor = (x) - self.lvlv;
            self.ctxl2.fillStyle = self.liveValueback;
            self.ctxl2.fillRect(self.drb - self.zlvl - self.marsize + mar ,
                                rhor - self.descfpx / 2 - mar + self.descfpx / 2 * (xnbr == 0) * !self.hmarshift,
                                -(1 + w + mar * 2),
                                self.descfpx + mar * 2
                              );
            self.ctxl2.restore();
            // X desc text
            self.ctxl2.fillStyle = self.liveValueColor;
            self.ctxl2.textAlign    = "end";
            self.ctxl2.textBaseline = "middle";
            // always rotate 90 grad
            self.ctxl2.save();
            self.ctxl2.textBaseline = "middle";
            self.ctxl2.textAlign = "end";
            self.ctxl2.translate(self.drl, self.drb);
            self.ctxl2.rotate( -0.5 * Math.PI );
            if (typeof axtxt != "undefined")
              self.ctxl2.fillText( axtxt.toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.axisdecimalX, maximumFractionDigits: self.axisdecimalX}),
                                   self.drb - self.zlvl - self.marsize,
                                   rhor + self.descfpx / 2 * (xnbr == 0) * !self.hmarshift);
            self.ctxl2.restore();

            self.ctxl2.stroke();
            self.ctxl2.fill();
            self.ctxl2.closePath();
          }
        }

      }
      self.ctxl2.setLineDash([]);
    }


    function isinrect(x, y) {
      var ind = -1;
      var tstx = false;
      var tsty = false;
      var marg =  0;
      var txt  = "";
      var txtw =  0;
      var txty = 0;
      var frmy = 0;
      var cl = 0;
      var wd = 0;
      var lf = 0;

      if (!self.islegend) return -1;
      // the legend on top or bottom
      if ( ( self.legpos == 0 ) || ( self.legpos == 2 ) ) {
        cl = 0;
        for (let i=0; i < self.legstr.length; i++ ) {
          if (typeof self.data[i] == "undefined") continue;
          cl++;
          txt += self.legstr[i]; // all txt together for measurement
        }
        self.ctx.font      = self.legfontmod + self.legpx + self.legfont;
        self.ctx.fillStyle = self.legtxtcol;
        txtw = self.ctx.measureText(txt).width + cl * self.legpx * 2.2 - self.legpx;
        wd   =  txtw + marg * 2;
        lf   = (self.ctx.canvas.width - wd) / 2;

        txty = 0;
        frmy = 0;
        if (self.legpos==0) frmy = self.top - self.legpx * 2 - self.legframew - self.legmarg;
        else                frmy = self.bot + self.legframew * 2 + self.legmarg;
        txty = frmy + self.legpx / 0.8;
        let txtx = lf + marg;

        for (let i=0; i < self.data.length; i++ ) {
          // is X in rectangle ?
          tstx = (x >= txtx ) && (x <= (txtx + (self.legpx * 1.2) + self.ctx.measureText(self.legstr[i]).width) + 1);
          tsty = (y >= txty - self.legpx +1 ) && (y <= (txty + 1) );
          if (tstx && tsty) ind = i;
          if ( ind >= 0 ) return ind;
          txtx += self.legpx * 1.2;
          txtx += (self.ctx.measureText(self.legstr[i]).width + self.legpx * 1);
        }
      }

      // the legend on right or left
      if ( ( self.legpos == 1 ) || ( self.legpos == 3 ) ) {
        txtw = 0;
        var lw = 0;
        cl = 0;
        for (let i=0; i < self.legstr.length; i++ ) {
          lw = self.ctx.measureText(self.legstr[i]).width ;
          if (typeof self.data[i] == "undefined") continue;
          cl++;
          if (lw > txtw ) txtw = lw;
        }
        wd =  txtw + self.legpx * 2.2;
        lf = 0;
        if (self.legpos == 1) lf   = self.rgt   + self.legframew + self.legmarg;
        else                  lf   = self.margh + self.legframew;

        frmy = (self.ctx.canvas.height - self.legpx * (self.legstr.length + 1) ) / 2;
        let txtx = lf + marg;
        var recy = frmy + self.legpx * 1.5;
        self.ctx.font      = self.legfontmod + self.legpx + self.legfont;
        self.ctx.fillStyle = self.legtxtcol;
        for (let i=0; i < self.data.length; i++ ) {
          self.ctx.fillStyle = self.legtxtcol;
          tstx = (x >= txtx + self.legpx / 2) && ( x <= txtx + self.legpx / 2 + txtw + self.legpx * 1.2);
          tsty = (y > (recy - self.legpx)) && (y < recy );
          if (tstx && tsty) ind = i;
          if ( ind >= 0 ) return ind;
          recy += self.legpx;
        }
      }
      return ind;
    }

    function drawstr(s) {
      var h = self.ctx.canvas.height;
      self.ctx.beginPath();
      self.ctx.fillStyle   = "rgba(0, 0, 0, 1)";
      self.ctx.fillRect(0, h-30, 300, 25);
      self.ctx.lineWidth   = self.marw  ;
      self.ctx.strokeStyle = self.descol;
      self.ctx.fillStyle   = "rgb(255,255,0)";
      self.ctx.fillText( s , 100, h-15 );
      self.ctx.stroke();
      self.ctx.fill();
      self.ctx.closePath();
    }

    function setstyleparam(ind, par, state) {
      if ( (self.style      == null) || (typeof self.style      == "undefined") ) return;
      if (ind > self.style.length) return;
      if ( (self.style[ind] == null) || (typeof self.style[ind] == "undefined") ) return;
      if (getStyle(self.style[ind], par, "---") == "---") {
        self.style[ind].push( par + "=" + (state ? "YES" : "NO") );
        return;
      }
      for (let i=0; i < self.style[ind].length; i++) {
        if (self.style[ind][i].indexOf(par) >= 0) {
          self.style[ind][i] = par + "=" + (state ? "YES" : "NO");
          break;
        }
      }
    }

    // Onclick
    function on_canvas_click(ev) {
      if (self.data.length <= 0) return;
      if (self.hideonclick) {
        // hide chart
        var ind = isinrect(ev.offsetX, ev.offsetY);
        if (ind >= 0) {
          var s = getStyle(self.style[ind], "visible", "---");
          switch (s) {
            case "---" : { setstyleparam(ind, "visible", false); break; }
            case "NO"  : { setstyleparam(ind, "visible", true ); if (self.boldonover) setstyleparam(ind, "boldover", true); break; }
            case "YES" : { setstyleparam(ind, "visible", false); break; }
          }
          self.redraw();
          return ;
        }
      }

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

      if ((y >= self.drt - self.hintpointw * 2) && (y <= self.drb + self.hintpointw * 2) &&
          (x >= self.drl - self.hintpointw * 2) && (x <= self.drr + self.hintpointw * 2)) {
        xnbr = Math.round( (x - self.lvlv - self.hmarshift * (self.marhpx / 2) ) / (self.marhpx / self.xdiv) );
        if ( isNaN(xnbr) || (xnbr <0 ) || (xnbr > self.datalength) ) return;

        let sens = self.hintpointw * 2;
        let xzero = self.lvlv + ((xnbr * self.marhpx) / self.xdiv) + self.hmarshift * (self.marhpx / 2);
        let wdh = self.marhpx * self.barperc; // room for all bars
        let wob = wdh / self.barcnt;          // width of one bar
        let difx = (self.marhpx * self.barperc) / 2 - wob / 2; // start of left border bars
        let locbarnr = 0;
        let xa = 0;
        let ya = 0;
        for ( let i = 0; i < self.data.length; i++) {
          if (typeof self.data[i] == "undefined") continue;

          ya = self.zlvl - ( (self.data[i][xnbr + self.from * self.zoom] + self.zoffs) * self.wght * self.dcorr * self.zcorr);
          xa = xzero;
          // if bar then make shift on x
          if ( isBar(i) ) {
            locbarnr++;
            xa = xa - difx + wob * (locbarnr - 1);
          }
          // check...
          if ( (Math.abs(xa - x) < sens) && (Math.abs(ya - y ) < sens) ) {
            if (getStyle(self.style[i], "visible", "---") == "NO") continue;
            if (!noclick) self.pointclicked  = true;
            let txt  = self.axisXtxt +" [" + (self.desc[xnbr + self.from * self.zoom].toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.axisdecimalX, maximumFractionDigits: self.axisdecimalX}) ) +
                                    "] = " + (self.data[i][xnbr + self.from * self.zoom] * self.dcorr).toLocaleString(undefined, {useGrouping: self.dgroup, minimumFractionDigits: self.valuedecimal, maximumFractionDigits: self.valuedecimal}) + " " + self.aYtxt;
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
            if ((ev.offsetX + txtw + self.hintfpx * 2.5 ) > self.drr) { mx = ev.offsetX - self.hintfpx * 3 - txtw; xflipped = true; }
            else                                                                        mx = ev.offsetX + self.hintfpx * 2;
            // out of Y-
            if ((ev.offsetY + self.hintfpx * 3 + self.hintframewidth ) > self.drb) { my = ev.offsetY - (self.hintfpx * 3); yflipped = true; }
            else                                                                     my = ev.offsetY + (self.hintfpx * 2);
            self.ctxl2.lineWidth   = self.hintframewidth;
            self.ctxl2.strokeStyle = self.hintrectcol;
            self.ctxl2.rect    (mx, my, txtw + self.hintfpx * 0.5, self.hintfpx * 2 );
            self.ctxl2.stroke();
            if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
            self.ctxl2.fillRect(mx, my, txtw + self.hintfpx * 0.5, self.hintfpx * 2 );
            self.ctxl2.fillStyle = self.hinttxtcol;
            // color rectangle
            self.ctxl2.beginPath();
            if (isLine(i) )
              self.ctxl2.fillStyle = getStyle(self.style[i], "linecolor", self.hintpointfill);
            else
              self.ctxl2.fillStyle = getStyle(self.style[i], "fillcolor", self.hintpointfill);
            if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
            self.ctxl2.strokeStyle = "rgba(0,0,0,1)";
            self.ctxl2.lineWidth   = self.hintcolfrwdth;
            self.ctxl2.rect(mx + self.hintfpx / 2, my + self.hintfpx / 2, self.hintfpx, self.hintfpx);
            self.ctxl2.stroke();
            self.ctxl2.beginPath();
            self.ctxl2.fillRect(mx + self.hintfpx / 2, my + self.hintfpx / 2, self.hintfpx, self.hintfpx);
            self.ctxl2.stroke();

            self.ctxl2.strokeStyle = self.hinttxtcol;
            self.ctxl2.fillStyle = self.hinttxtcol;
            if (self.hintmaxalpha) self.ctxl2.fillStyle = changeRGBAalpha(self.ctxl2.fillStyle, 1);
            self.ctxl2.textAlign = "end";
            self.ctxl2.fillText(txt , mx + self.hintfpx * 0 + txtw, my + self.hintfpx * 0.5 );

            self.ctxl2.lineWidth   = self.hintlinetoMwidth;
            self.ctxl2.strokeStyle = self.hintlinetoMcol;
            self.ctxl2.beginPath();
            self.ctxl2.arc(xa, ya, self.hintpointw, 0, 2 * Math.PI);
            // line to hint
            if (self.crlinetosmallhint)
              self.ctxl2.moveTo(mx + (txtw + self.hintfpx * 0.5) * xflipped, my + (self.hintfpx * 2) * yflipped);
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
      self.oldMouseEv   = null;
      lastX = 0;
      lastY = 0;
      mouseisdown  = false;
      mousebuttons = 0;
      oldind = -1;
      noclick= false;
    }


    let lastrepev    =  null;
    let intervalId   =  null;
    let CtrlKeyDown  = false;
    let ShiftKeyDown = false;
    let inRepeat     = false;
    // auto scroll
    function repeatMouse(ev) {
      let x = lastX;
      let y = lastY;
      if ((y >= self.drt) && (y <= self.drb) && (x >= self.drl) && (x <= self.drr) && (mousebuttons == 1) ) {
        if (CtrlKeyDown) self.repeatMousePer = self.repeatPerSpeed;
        else             self.repeatMousePer = self.repeatPerSlow ;
        intervalId = setTimeout(repeatMouse, self.repeatMousePer);  // autoscroll on

        let LRmarg = self.LRsize * self.drv;
        if ((x - self.drl) < LRmarg) self.left();
        if ((self.drr - x) < LRmarg) self.right();
        on_mouseMove(lastrepev); // call the event that would redrawing of hints
        inRepeat = true;
      }
      return false;
    }


    var oldticks = 0;
    var mdcnt    = 0;
    // if shift key pressed when mouse left key pressed then it's zoom mode
    function on_mouseDown(ev) {
      if (ev.buttons == 3) self.hintwithctrl = !self.hintwithctrl; // turn on/off cross

      if ((self.multimsdown) && (ev.buttons == 2)  && ev.shiftKey && !ev.ctrlKey && !ev.altKey) {
        console.log("ev.buttons="+ev.buttons);
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
          let ya = 0;
          for ( let i = 0; i < self.data.length; i++) {
            if (typeof self.data[i] == "undefined") continue;
            ya = self.zlvl - (self.data[i][xnbr + self.from * self.zoom] * self.wght * self.dcorr * self.zcorr);
            xa = xzero;
            // if bar then make shift on x
            if ( isBar(i) ) {
              locbarnr++;
              xa = xa - difx + wob * (locbarnr - 1);
            }
            // check...
            if ( (Math.abs(xa - x) < sens) && (Math.abs(ya - y ) < sens) ) return; // point is reached !
          }
          // scroll
          let LRmarg = self.LRsize * self.drv;
          if ((x - self.drl) < LRmarg) self.left();
          if ((self.drr - x) < LRmarg) self.right();

          // auto scroll mouse repeat
          if (self.repeatMouseMode) {
            if ( ((x - self.drl) < LRmarg) || ((self.drr - x) < LRmarg) ) {
              if ((ev.offsetX != 0) && (ev.offsetY != 0) ) lastrepev = ev;
              intervalId = setTimeout(repeatMouse, self.repeatPerDelay);  // autoscroll on
            }
          }

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
      clearInterval(intervalId); // autoscroll off
      inRepeat    = false;
      lastrepev   =  null;

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
      //if ( (!ev.ctrlKey) || (!ev.shiftKey) ) return;
      CtrlKeyDown  = ev.ctrlKey ;
      ShiftKeyDown = ev.shiftKey;
      switch (event.key) {
        // Left key pressed
        case "ArrowLeft" : { if (self.revarrowkeysinzoom) self.right(); else self.left();     if (ev.preventDefault) ev.preventDefault(); break; }
        // Right key pressed
        case "ArrowRight": { if (self.revarrowkeysinzoom) self.left();  else self.right();    if (ev.preventDefault) ev.preventDefault(); break; }
        // Up key pressed
        case "ArrowUp"   : { self.home();     if (ev.preventDefault) ev.preventDefault(); break; }
        // Down key pressed
        case "ArrowDown" : { self.end();      if (ev.preventDefault) ev.preventDefault(); break; }
        case "Home"      : { self.home();     if (ev.preventDefault) ev.preventDefault(); break; }
        case "End"       : { self.end();      if (ev.preventDefault) ev.preventDefault(); break; }
        case "Escape"    : { self.undozoom(); if (ev.preventDefault) ev.preventDefault(); break; }
      }
      on_mouseMove(ev);
      return false;
    }



    // on key up
    function on_keyUp(ev) {
      CtrlKeyDown  = ev.ctrlKey ;
      ShiftKeyDown = ev.shiftKey;
      if (!CtrlKeyDown && self.hintwithctrl && !inRepeat) // clear lvl2 canvas
        self.ctxl2.clearRect(0, 0, self.ctxl2.canvas.width, self.ctxl2.canvas.height);
      if (!ev.shiftKey) { // clear zoom variables
        Zfrom = 0;
        Zto   = 0;
      }
      return false;
    }


    function downloadChart(fname) {
      var image = self.ctx.canvas.toDataURL("image/png", 1).replace("image/png", "image/octet-stream");
      var anchor = document.createElement('a');
      anchor.setAttribute('download', fname);
      anchor.setAttribute('href', image);
      anchor.click();
      anchor.remove();
    }

    function DecimalSeparator() {
        var n = 1.1;
        n = n.toLocaleString().substring(1, 2);
        return n;
    }


    function savecsvfile(fname){
      var sep = self.download_csv_listsep;
      var csv = self.axisXtxt;
      for (let i=0; i < self.data.length; i++ ) {
        if (typeof self.legstr[i] == "undefined") { csv += sep + "series_" + (i + 1).toString(); continue; }
        else csv += sep + self.legstr[i];
      }
      csv += "\n";
      for (let x = 0; x < self.desc.length; x++) {
        csv += self.desc[x];
        for (let i = 0; i < self.data.length; i++) {
          if ( (self.data[i]    != null) && (typeof self.data[i]    != "undefined") &&
               (self.data[i][x] != null) && (typeof self.data[i][x] != "undefined") )
            csv += sep + self.data[i][x].toLocaleString();
          else
            csv += sep;
        }
        csv += "\n";
      }
      //console.log(csv);
      var anchor = document.createElement("a");
      anchor.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURI(csv) );
      anchor.setAttribute('download', fname);
      anchor.click();
      anchor.remove();
    }


    // context menu off
    function onContextMenu(ev) {
      ev = ev || window.ev;
      if (ev.stopPropagation) ev.stopPropagation();
      if (ev.preventDefault ) ev.preventDefault ();
      ev.cancelBubble = true;
      ev.returnValue = false;
      if (ev.altKey && !ev.ctrlKey && self.downloadChartEnable) downloadChart(self.download_png_fname);
      if (ev.altKey && ev.ctrlKey) savecsvfile(self.download_csv_fname);
      return;
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
      if ( this.oncontext   ) this.ctxl2.canvas.addEventListener('contextmenu', onContextMenu  , false);

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

    minv =  Infinity;
    maxv = -Infinity;
    // let start calculate ...
    if ( Array.isArray(this.data) ) {
     for (let i=0; i < this.data.length; i++ ) {
       if (typeof this.data[i] == "undefined") continue; // if no data then no min & max
        // for bars it's better
        if ( isBar(i) ) { self.barcnt++; self.hmarshift = true; }
        if ((this.Yzoom & this.YonlyVisiblescale) & (getStyle(this.style[i], "visible", "---") == "NO")) continue; // if invisible then no min & max
        // get max & min of data array
        rangev = getMinMax(this.data[i]);    // get min & max of data
        if (rangev.min < minv) minv = rangev.min; // max of data
        if (rangev.max > maxv) maxv = rangev.max; // min of data
       }
    }

    if (minv ==  Infinity) minv = 0; // min not found
    if (maxv == -Infinity) maxv = 0; // max not found

    // turn off YZoom if not necessary
    if (this.Yzoom && (this.Ymax==0) && (this.Ymin!=0) ) this.Yzoom=false;
    if (this.Yzoom && (this.Ymax!=0) && (this.Ymin==0) ) this.Yzoom=false;

    if ((maxv>0) && (minv>0) && !this.Yzoom) minv = 0;
    if ((maxv<0) && (minv<0) && !this.Yzoom) maxv = 0;

    // check parameters
    if (this.Ymax <= this.Ymin) { this.Ymax = 0; this.Ymin = 0; }
    let checkok = true;
    if ( (this.from < 0) || (this.from > this.alldatalength) ) checkok = false;
    if ( (this.to   < 0) || (this.to   > this.alldatalength) ) checkok = false;
    if ( (this.to - this.from) < 2 ) checkok = false; // minimum 2 points
    if (!checkok) {
      this.from  = 0;
      this.to    = this.alldatalength;
      this.datalength = this.alldatalength;
      this.zoom  = false;
    }

    if (this.Ymax != 0) maxv = this.Ymax; // max Y constant value
    if (this.Ymin != 0) minv = this.Ymin; // min Y constant value

    this.zoffs = 0;
    this.zcorr = 1;
    // calculate Y zoom offset and correction
    if (this.Yzoom && (maxv > 0) && (minv>0) ) { // Y+
      this.zoffs = -minv;
      this.zcorr = maxv/(maxv-minv);
    }
    if (this.Yzoom &&  (maxv < 0) && (minv < 0) ) { // Y-
      this.zoffs = -maxv;
      this.zcorr = Math.abs(minv) / (Math.abs(minv)-Math.abs(maxv));
    }

    // decimal points 0 .. 5
    if ((this.axisdecimalX < 0 ) || (this.axisdecimalX > 3 )) this.axisdecimalX = 1;
    if ((this.axisdecimalY < 0 ) || (this.axisdecimalY > 3 )) this.axisdecimalY = 1;
    if ((this.valuedecimal < 0 ) || (this.valuedecimal > 5 )) this.valuedecimal = 0;
    // initialize description X-axis table if not exists
    if ((typeof this.desc == "undefined") || (this.desc == null) || (this.desc == 0) || (this.desc.length == 0) ) {
      this.desc  = [];
      for (let i = 0; i < this.datalength; i++) this.desc.push( (i + 1) );
    }
    // desc items control
    for (let i = 0; i < this.desc.length; i++) {
      if ((typeof this.desc[i] == "undefined") || (this.desc[i] == null) ) this.desc[i] = "";
    }

    // main canvas clear
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    // canvas fill color & width
    this.ctx.fillStyle = this.canvasbkcol;
    this.ctx.lineWidth = this.canvasfrw;
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.stroke();
    this.ctx.closePath();

    this.legend();

    this.ctx.strokeStyle = this.canvasfrcol;
    if (this.drawzfrm) {
      this.ctx.beginPath();
      this.ctx.rect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx.stroke();
      this.ctx.closePath();
    }


    // canvas start parameters
    this.ctx.lineWidth   = 1;
    this.ctx.font        = this.descfontmod + this.descfpx + this.descfont;
    this.ctx.lineCap     = "round";
    this.ctx.lineJoin    = "miter";
    this.ctx.miterLimit  = 1;

    this.ctxl2.lineWidth   = 1;
    this.ctxl2.font        = this.descfontmod + this.descfpx + this.descfont;
    this.ctxl2.lineCap     = "round";
    this.ctxl2.lineJoin    = "miter";
    this.ctxl2.miterLimit  = 1;

    this.aYtxt = self.axisYtxt.toString();
    // if the data plus is very small, calculate the multiplier and show it on the Y axis.
    let tm = Math.abs( Math.max( Math.abs(maxv), Math.abs(minv) ) );
    if ( ( tm * Math.pow(10, this.valuedecimal ) ) < 1) {
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
      if (this.valuedecimal == 0) this.valuedecimal = 2; //ti;
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
      this.valuedecimal = 0;
    }

    // for zoom
    if (!this.zoom) this.datalength = this.alldatalength;
    else this.datalength = this.to - this.from;

    // level zero shift (from min, max) only if Y+ & Y- data exists, else 0 or (drb-drt)
    if ( (maxv >= 0) && (minv == 0) ) this.zerox = 0;         // only Y+
    if ( (minv <  0) && (maxv == 0) ) this.zerox = this.drb - this.drt; // only Y-
    if ( (maxv >  0) && (minv <  0) ) this.zerox = Math.abs( ( minv/(maxv - minv) ) * this.drv ); // Y+ & Y-

    this.zlvl = this.drb - this.zerox; // level zero horizontal axis

    if (this.datalength==0) this.zlvl = this.drb; // if no data then zero level
    // check if the description of the x-axis is on the canvas
    let marwxdesc = 0;
    let maxw      = 0;
    // find max width of X-axis description
    for (let i = this.from * this.zoom; i < this.desc.length; i++) {
      maxw = this.ctx.measureText( this.desc[i].toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.axisdecimalX, maximumFractionDigits:this.axisdecimalX}) ).width;
      if (maxw > marwxdesc) marwxdesc = maxw;
    }

    // if X description is not needed then max width of desciption string will be zero
    if (!this.drawXdesc) marwxdesc=0;

    // if descritions X-axis heigth > room we have to change the drawing area and move X-axis up
    if ((this.drb - this.zlvl) < marwxdesc) {
      //this.top = this.margv + marwxdesc - this.zerox; // new bottom margin
      //this.bot   = this.ctx.canvas.clientHeight - this.margv - marwxdesc;    // new bottom coordinate
      this.drb   = this.bot - this.marsize / 2 - marwxdesc - this.descfpx / 2;    // new bottom draw coordinate
      this.drv   = this.drb - this.drt;     // new draw height
      // new level zero shift
      if ((maxv > 0) && (minv < 0)) this.zerox = Math.abs( ( minv/(maxv - minv) ) * this.drv ); // Y+ & Y-
      else if (maxv >= 0) this.zerox = 0;   // only Y+
      else if (minv <  0) this.zerox = this.drb - this.drt;  // only Y-
      this.zlvl  = this.drb - this.zerox;                    // new level zero horizontal axis
    }

    // count max markers (from font pixels)
    this.marpl = Math.round( Math.abs( (this.zlvl - this.drt) / this.descfpx ) );  // max markers plus max counter
    this.marmi = Math.round( Math.abs( (this.drb - this.zlvl) / this.descfpx ) );  // max markers minus max counter
    this.marall= this.marpl + this.marmi;                                                    // max all markers counter
    // get marker plus count and weigth
    marpldata = getMaxMarkerValue(maxv - (minv > 0 ? minv * this.Yzoom : 0), this.marpl);
    this.marpl= marpldata.cnt;
    vmp       = marpldata.value;
    // get marker minus count and weigth
    marmidata = getMaxMarkerValue(minv - (maxv < 0 ? maxv * this.Yzoom : 0), this.marmi);
    this.marmi= marmidata.cnt;
    vmm       = marmidata.value;

    // calculate pixels for one marker
    this.marpx = (Math.abs(( this.zlvl - this.drt ) / this.marpl));  // pixels plus for one marker
    this.marmx = (Math.abs(( this.drb - this.zlvl ) / this.marmi));  // pixels minus for one marker
    this.marax = Math.max(this.marpx, this.marmx);                   // max pixels all for one marker
    this.marpx = this.marax;
    this.marmx = this.marax;

    // get max value of markers weight
    if ( vmp > vmm ) vmm = vmp;
    if ( vmm > vmp ) vmp = vmm;

    // calculate new markers
    this.marpl  = Math.floor(Math.abs( (this.zlvl - this.drt) / this.marax) );  // new markers plus max counter
    this.marmi  = Math.floor(Math.abs( (this.drb - this.zlvl) / this.marax) );  // new markers minus max counter
    this.marall = this.marpl + this.marmi;                                           // new all markers max counter

    // level vertical shift (from description text width) only if no room for descrition
    let wp = this.ctx.measureText( (maxv).toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.axisdecimalY, maximumFractionDigits: this.axisdecimalY}) ).width + this.descfpx;  // width max Y text plus
    let wm = this.ctx.measureText( (minv).toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.axisdecimalY, maximumFractionDigits: this.axisdecimalY}) ).width + this.descfpx;  // width min Y text plus
    //let lvlt =  this.lft + this.marsize / 2 + this.legleft + Math.max(wp, wm); // level vertical axis

    // if Y description is not needed then max width of desciption string will be zero
    if (!this.drawYdesc) { wp = 0; wm = 0; }

    let lvlt = this.lft + this.marsize * this.drawmark / 2 + Math.max(wp, wm); // level vertical axis

    if (lvlt > this.lvlv) {
      this.lvlv = lvlt;
      this.drl  = this.lvlv;
    }
    // if the number of markers minus == 0 then level X-axis must be calculated becouse the description
    // of this axis is below drawing area. we have to move the axis up by the height of the axis description
    if (this.rotdescX)
      maxhm    = Math.round( Math.abs( (this.lvlv - this.drr) / this.descfpx ) ) + 1;  // max markers counter
    else
      maxhm    = Math.round( Math.abs( (this.lvlv - this.drr) / marwxdesc ) ) + 1;  // max markers counter

    this.marxdata = getXmarkersDiv(this.datalength - 0, maxhm);
    maxhm    = this.marxdata.cnt;
    this.xdiv= this.marxdata.div;
    marh     = Math.min(this.datalength - 1, maxhm) + 1 * this.hmarshift; // +1 if shift
    this.marhpx = ( this.drr - this.lvlv ) / marh;  // pixels for one marker X

    // let start draw ...
    // chart zone control (for test)
    if (this.chartzone) {
      this.ctx.strokeStyle = this.chartzonecol;
      this.ctx.rect(this.lft, this.top, this.rgt - this.lft, this.bot - this.top);
      this.ctx.stroke();
    }
    // draw zone control (for test)
    if (this.drawzone) {
      this.ctx.strokeStyle = this.drwfracol;
      this.ctx.fillStyle   = this.drwfilcol;
      this.ctx.beginPath();
      if (this.drawzfrm)
        this.ctx.rect(this.drl, this.drt, this.drr - this.drl, this.drb - this.drt);
      this.ctx.fillRect(this.drl, this.drt, this.drr - this.drl, this.drb - this.drt);
      this.ctx.stroke();
    }
    // draw mesh Y
    if (this.drawmesh) {
      let zm = false;
      this.ctx.lineWidth=this.meshlw;
      // mesh Y+
      this.ctx.strokeStyle = this.mshcol;
      this.ctx.fillStyle   = this.mshcol;

      if (this.meshframe) {
        this.ctx.rect(this.drl, this.drt, this.drr - this.drl, this.drb - this.drt);
        this.ctx.stroke();
      }

      let i = 0;
      let lvl = (this.zlvl - i * this.marpx );
      while (lvl >= this.drt) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.lvlv, this.zlvl - i * this.marpx);
        this.ctx.lineTo(this.drr , this.zlvl - i * this.marpx);
        this.ctx.stroke();
        i++;
        lvl = (this.zlvl - i * this.marpx);
      }
      // mesh Y-
      i = 1;
      lvl = (this.zlvl + i * this.marmx);
      while (lvl <= this.drb) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.lvlv, this.zlvl + i * this.marmx);
        this.ctx.lineTo(this.drr , this.zlvl + i * this.marmx);
        i++;
        lvl = (this.zlvl + i * this.marmx);
        this.ctx.stroke();
      }
    }
    // draw mesh X
    if (this.drawmesh) {
      // mesh X
      this.ctx.strokeStyle = this.mshcol;
      this.ctx.fillStyle   = this.mshcol;
      let i=0;
      i = 1 * this.hmarshift;
      if (this.meshframe) i=1;

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
    // visual zoom
    if (this.vsOn && this.zoom) {
      let zoomlvl = this.top + this.al;
      if (this.vzonXaxis)  zoomlvl = this.zlvl;
      let c = this.ctx;
      c.lineCap     = "round";
      c.lineJoin    = "miter";
      c.miterLimit  = 1;
      c.strokeStyle = changeRGBAalpha(this.vzcolor, this.vzalpha);
      c.fillStyle   = this.vzcolor;
      c.lineWidth   = this.vzwdtsm;
      c.beginPath();
      c.moveTo( this.drl, zoomlvl );
      c.lineTo( this.drr, zoomlvl );
      c.stroke();
      let all = (this.drr - this.drl) / this.alldatalength;
      c.lineWidth = this.vzwdtlg;
      c.beginPath();
      c.moveTo( this.drl + this.from * all, zoomlvl );
      c.lineTo( this.drl + this.to   * all, zoomlvl );
      c.stroke();
      c.closePath();
    }
    // draw markers and descriptions Y
    if (this.drawmark || this.drawYdesc) {
      this.ctx.lineWidth   = this.marw  ;
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
        lvl = (this.zlvl - i * this.marpx );
        while (lvl >= this.drt ) {
          this.ctx.beginPath();
          if (this.drawmark) {
            this.ctx.moveTo(this.lvlv - this.marsize / 2, lvl);
            this.ctx.lineTo(this.lvlv + this.marsize / 2, lvl);
          }
          if (this.drawYdesc) {
            //if (i == 0)
            //  this.ctx.fillText( "0" , this.lvlv - this.marsize, lvl);
            //else
              let ofs = ( ((minv > 0) && this.Yzoom) ? minv : 0);
              this.ctx.fillText( (ofs +  i * vmp ).toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.axisdecimalY, maximumFractionDigits: this.axisdecimalY}) , this.lvlv - this.marsize, lvl );
          }
          i++;
          lvl = (this.zlvl - i * this.marpx);
          this.ctx.stroke();
        }
      }
      // markers minus & axis Y- description
      if (minv<0) {
        if (!zerodwd)	i = 1 * !this.drw0y;
        else          i = 1;
        lvl = (this.zlvl + i * this.marmx);
        while (lvl <= this.drb) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.lvlv - this.marsize / 2, lvl);
          this.ctx.lineTo(this.lvlv + this.marsize / 2, lvl);
          if (this.drawYdesc) {
            //if (i == 0)
            //  this.ctx.fillText( "0" , this.lvlv - this.marsize, lvl);
            //else
              let ofs = ( ((maxv < 0) && this.Yzoom) ? maxv : 0);
              this.ctx.fillText( (ofs -i * vmm ).toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.axisdecimalY, maximumFractionDigits: this.axisdecimalY}) , this.lvlv - this.marsize, lvl );
          }
          i++;
          lvl = (this.zlvl + i * this.marmx);
          this.ctx.stroke();
        }
      }
    }
    // draw markers and descriptions X
    if (this.drawmark || this.drawXdesc) {
      this.ctx.lineWidth   = this.marw  ;
      this.ctx.strokeStyle = this.descol;
      this.ctx.fillStyle   = this.descol;
      this.ctx.textBaseline = "top";
      this.ctx.textAlign = "center";
      let i = 1;
      // markers & axis X description
      if (maxhm > 0) {
        i = i + 1 * !this.drw0x - this.hmarshift;
        let hor = (this.lvlv + i * this.marhpx) + this.hmarshift * (this.marhpx / 2);
        while (hor <= this.drr) {
          if (i > marh) break;
          this.ctx.beginPath();
          if (this.drawmark) {
            this.ctx.moveTo(hor, this.zlvl - this.marsize / 2);
            this.ctx.lineTo(hor, this.zlvl + this.marsize / 2);
          }
          if (this.drawXdesc) {
            if (!this.rotdescX) {
              if (typeof this.desc[i * this.xdiv ] != "undefined")
                this.ctx.fillText( this.desc[i * this.xdiv + this.from * this.zoom], hor - ( (i == 0) * this.descfpx / 2), this.zlvl + this.marsize );
            }
            else {
              this.ctx.save();
              this.ctx.textBaseline = "middle";
              this.ctx.textAlign = "end";
              this.ctx.translate(this.drl, this.drb);
              this.ctx.rotate( -0.5 * Math.PI );
              let rhor = (i * this.marhpx) + this.hmarshift * (this.marhpx / 2);
              if (typeof this.desc[i * this.xdiv + this.from * this.zoom] != "undefined")
                this.ctx.fillText( this.desc[i * this.xdiv + this.from * this.zoom].toLocaleString(undefined, {useGrouping: this.dgroup, minimumFractionDigits: this.axisdecimalX, maximumFractionDigits: this.axisdecimalX}), this.drb - this.zlvl - this.marsize, rhor + this.descfpx / 2 * (i == 0) * !this.hmarshift);
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
      this.ctx.font        = this.descfontmod + this.descfpx + this.descfont;

     // axis X
      this.ctx.beginPath();
      //this.ctx.moveTo(this.lft + (this.lvlv - this.lft ) / 2, this.zlvl);
      this.ctx.moveTo(this.lvlv, this.zlvl);
      this.ctx.lineTo(this.rgt - (this.axw * 3 * this.drawarrow), this.zlvl);
      // axis y
      this.ctx.moveTo(this.lvlv, this.bot - (this.bot - this.drb) / 2);
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
      if (this.axisXdesc) {
        // text X
        this.ctx.fillStyle = this.axdesccol;
        let txw = this.ctx.measureText(self.axisXtxt).width;
        if ( txw + this.drr + this.descfpx / 2 > this.rgt) {
          this.ctx.textBaseline = "top";
          this.ctx.textAlign = "end";
          let wa = 0;
          if (txw + this.descfpx > (this.drb - this.zlvl) ) { this.ctx.textAlign = "start"; wa = this.descfpx * 2; }
          this.ctx.save();
          this.ctx.translate(this.drr, this.zlvl);
          this.ctx.rotate( -0.5 * Math.PI );
          this.ctx.fillText(self.axisXtxt, - this.descfpx + wa, this.descfpx * 0.5);
          this.ctx.restore();
        }
        else {
          this.ctx.textAlign = "start";
          this.ctx.textBaseline = "top";
          this.ctx.fillText(self.axisXtxt, this.drr + this.descfpx / 2, this.zlvl + this.descfpx / 2);
        }
      }
      if (this.axisYdesc) {
        // text Y
        this.ctx.textAlign = "start";
        this.ctx.textBaseline  = "middle";
        this.ctx.fillStyle = this.axdesccol;
        this.ctx.fillText(this.aYtxt, this.lvlv + this.aw / 1, this.top + this.al / 2);
      }

    }

    // do draw lines, areas, bars as defined ...
    do_graph();
    on_mouseMove(null);
  }

}

//  --------------------------   /js_chart   ----------------------------
