/***********************
* Actions de compositions pour Adobe Edge Animate
*
* Modifier ce fichier avec précaution, en veillant à conserver
* les signatures et les commentaires de fonction commençant par « Edge » pour maintenir la
* possibilité d’interagir avec ces actions depuis Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias pour les classes Edge couramment utilisées

   var controller = null;

   //Edge symbol: 'stage'
   (function(symbolName) {

   	Symbol.bindElementAction(compId, symbolName, "${Stage}", "click", function(sym, e) {
            
            if (controller.playHeadIsBeforeEndshotLabel())
            {
                platform.userCounter('Click_On_Intro');
            }
            else
            {
                platform.userCounter('Click_On_Endshot');
            }
            
            controller.freeze();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         /**
         * Biborg Standard template for Adobe Edge Animate
         * If you need any support, please contact our Technical Team:
         * dev@biborg.com
         */
         
         /* Configuration --> */
         
         /**
         * Change those css properties to style the stage.
         */
         sym.getSymbolElement().css({
         	'cursor': 'pointer'
         });
         
         /**
         * Change playTimes value to enable looping.
         * Default value: 1
         * In the timeline, the "loop_start" label specifies the start of the loop.
         * examples:
         * sym.playTimes = 1, play once -> 1 playback
         * sym.playTimes = 2, loop once -> 2 playbacks
         * sym.playTimes = 3, loop twice -> 3 playbacks
         */
         //config.playTimes = 1;
         
         /**
         * Freeze the ad after N ms
         * Default value: 28000
         * Use -1 to disable freeze timer	
         */
         //config.autoFreezeTime = 28000;
         
         /* <-- Configuration */
         
         controller = new StandardControllerClass(Edge.getComposition(compId));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {

            controller.start();

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {

            controller.update();

      });
      //Edge binding end

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //Edge symbol: 'Preloader'
   (function(symbolName) {
		var node = document.createElement('style');
		node.innerHTML =
			'@keyframes rot {' +
				'from { transform:rotate(0deg); }' +
				'to { transform:rotate(360deg); }' +
			'}' +
			'.rotating {' +
				'animation-name:rot;' +
				'animation-duration:1s;' +
				'animation-iteration-count: infinite;' +
			'}';
		document.body.appendChild(node);
		var wheel = document.getElementById('_wheel');
		if(wheel) wheel.className += " rotating";
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'logo_complete'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3220, function(sym, e) {
         // insérer le code ici
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3098, function(sym, e) {
         // insérer le code ici
      });
      //Edge binding end

   })("logo_complete");
   //Edge symbol end:'logo_complete'

   //=========================================================
   
   //Edge symbol: 'zoom_flower'
   (function(symbolName) {   
   
   })("zoom_flower");
   //Edge symbol end:'zoom_flower'

   //=========================================================
   
   //Edge symbol: 'bouton_Discover'
   (function(symbolName) {   
   
   })("bouton_Discover");
   //Edge symbol end:'bouton_Discover'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-89045760");