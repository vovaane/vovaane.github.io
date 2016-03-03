/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${a102002_H264_8Mbit_1920x1080}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play a video track 
         sym.$("a102002_H264_8Mbit_1920x1080")[0].play();
         
         // Play a video track 
         sym.$("a102002_H264_8Mbit_1920x1080")[0].play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a102002_H264_8Mbit_1920x1080}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // Play a video track 
         sym.$("a102002_H264_8Mbit_1920x1080")[0].play();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-309737808");