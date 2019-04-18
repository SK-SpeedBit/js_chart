
# js_chart
Simple, light weight javascript chart for embedded systems

All you need to do is just js_chart.js

After using the html compressor (removing spaces, comments, etc.), 
the size of the js_chart.js file is approximately 50kb (!)

The js_chart class - short description
===========================================
  - any number of charts on the website - we create as much as needed by new js_chart (chart_container, ...);
  - automatic or manual Y axis scaling
  - the possibility of describing the X and Y axes and defining their appearance, color, font, etc.
  - possibility to automatically scale the Y axis for numbers smaller than one
  - possibility to predefine any number of chart styles (for line, area, bar chart) and their private parameters
  - the possibility of choosing styles from: 
      - line   chart (any quantity limited only by the readability of the chart)
<a href="https://user-images.githubusercontent.com/33321284/55556723-8547fe00-56e8-11e9-84b4-5f5816c59adf.png"><img src="https://user-images.githubusercontent.com/33321284/55556723-8547fe00-56e8-11e9-84b4-5f5816c59adf.png" align="center"  ></a>      
      - stairs chart (any quantity limited only by the readability of the chart)
<a href="https://user-images.githubusercontent.com/33321284/55556855-d22bd480-56e8-11e9-9053-244494867aee.png"><img src="https://user-images.githubusercontent.com/33321284/55556855-d22bd480-56e8-11e9-9053-244494867aee.png" align="center"  ></a>      
      - area   chart (any quantity limited only by the readability of the chart)
<a href="https://user-images.githubusercontent.com/33321284/55556565-3601cd80-56e8-11e9-9f2d-fcd1eda22396.png"><img src="https://user-images.githubusercontent.com/33321284/55556565-3601cd80-56e8-11e9-9f2d-fcd1eda22396.png" align="center"  ></a>      
      - bar    graph (any quantity limited only by the readability of the chart)
<a href="https://user-images.githubusercontent.com/33321284/55556799-ad376180-56e8-11e9-832e-5d7d38abb41e.png"><img src="https://user-images.githubusercontent.com/33321284/55556799-ad376180-56e8-11e9-832e-5d7d38abb41e.png" align="center"  ></a>      
  - big possibilities of styles configuration for each chart
  - the ability to plot Bezier curves instead of straight lines (smoothing the chart) - available configuration parameters
  - the possibility of own description of the X axis or work without this description - then the data is automatically numbered from 1
  - automatic detection of inserting a bar chart and adapting the chart to this style (X offset)
  - after inserting the bar chart, the marker field including all bars and other data is additionally displayed
  - practically unlimited amount of data to display only limited by the legibility of the chart
  - possibility to display the range of data from the table [from..do] or a specific number of them (zoom)
  - possibility of shift the chart to the left, right, home, end (if the data range is displayed) (auto repeat mode is provided)
  - possibility use of keys: left, right, home, end, for chart move
  - possibility to update data at any time
  - possibility to display data with missing data in them (null value - holes in the graph)
  - a large number of global configuration parameters
  - onClick mouse event handling (displays the value of the data clicked)
  - onMouseMove mouse event handling (displays all data values ??for a specific cursor location relative to the X axis)
  - a flexible hint configuration in events (start / stop options, colors, lines and other parameters)
  - small hint after pointing the mouse on the graph value
  - a flexible chart legend with a lot of propertis
  - visual zoom - a line that indicates the current location of the displayed data range with respect to the entire data set.
  - possibility to display the chart from min of Y data to max of Y data (y-axis extension) or from 0 to max of Y data.

  Additionally:
  - included function to generated random values for chart ??and a code in html to quickly determine if this code matches expectations
  - a small own contribution to running the graph
  - the ability to generate data in embedded systems (just define styles in html and enter data from the system as a sequence of numbers)
  - small and light code so it is possible to insert it into embedded servers
  - examples of style and data definitions attached
  - attached example of use on the website
  
  Handling the graph with the mouse and keyboard:
  - [small hint] clicking the left mouse button on the values of a particular chart - a small hint with parameters and data
  - [cross and big hint] pressing the CTRL key - a cross of coordinates and a large hint with the values of the graph for a given X coordinate
  - [cross and big hint] pressing both mouse buttons at the same time - switch on / off the coordinates cross and a large hint
  - [points on graph] pressing the right mouse button 3 times (default) - switch on / off points on the graph values
  - [zoom      ] while holding the SHIFT key pressed, pressing the left mouse button and dragging to the right (select) - zooming the graph (graph of the selected values)
  - [undo zoom ] while holding the SHIFT key pressed, pressing the left mouse button and dragging to the left (undo zoom) - a graph with all values
  - [scroll    ] when the graph is in the zoom mode, an area appears in the left and right of the graph in which the click causes the graph to shift to the left or to the right (scroll). After pressing by long time the left key of the mouse auto repeat mode will on. If the Ctrl key is pressed, the shifts are faster.
    [Keys: Left, Right, Home, End, Esc] 
                 If key is pressed and chart is in zoom mode, the chart will be shifted to left / right / home / end of data. Esc key makes undo zoom. 
                 ###Use of the keys requires the chart must be focused!


<a href="https://user-images.githubusercontent.com/33321284/55557824-01434580-56eb-11e9-8c70-fc3924b241fd.png"><img src="https://user-images.githubusercontent.com/33321284/55557824-01434580-56eb-11e9-8c70-fc3924b241fd.png" align="center"  ></a>      

###  Is compatible with FireFox, Opera, Chrome. Tested in Firefox on Android 6.0 too. Does not work with IE and Safari (also due to lack of class support) :-(
	
