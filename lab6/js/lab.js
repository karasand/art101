    /**
    *Author: Kayla Sanders <karasand@ucsc.edu>
    *Created: 10.20.2021
    *
    * Public Domain
    **/

    //Define Variables
    var myTransport = ["driving", "bussing", "walking"];
    var myMainRide = {};
    myMainRide.name = "car";
    myMainRide.color = "yellow";
    myMainRide.size = "medium";
    myMainRide.model = "rio";
    myMainRide.make = "kia";

    //output
    document.writeln("Getting around:" + myTransport + "<br>");
    documentt.writeln("My Main Ride: <pre>",
        JSON.stringify(myMainRide, null, '\t'), "</pre>"");
