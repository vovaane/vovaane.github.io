
(function(compId){var _=null,y=true,n=false,x1='6.0.0',e12='${PlayStopControl}',x2='5.0.0',x4='rgba(0,0,0,0)',g='image',b='block',x30='SonOn',e17='${ReplayControl}',x23='StopControl',e19='${Banner_300600_Frame1}',m='rect',x20='0px',e14='${Banner_300600_Frame3}',i='none',x8='rgba(192,192,192,1)',x3='6.0.0.400',o='opacity',e15='${Banner_300600_Frame2}',e13='${SonControl}',e27='${PlayControl}',x21='23px',x34='150',x22='auto',x33='290',x25='PlayControl',d='display',x28='SonOff',e32='${SonOn}',xc='rgba(0,0,0,1)',x11='rgba(0,0,0,1.00)',e16='${SkipControl}',e18='${video-centerer}';var g24='StopControl.png',g29='SonOff.png',g5='Banner_300%D1%85600_Frame1.jpg',g10='ReplayControl.png',g6='Banner_300%D1%85600_Frame2.jpg',g9='SkipControl.png',g31='SonOn.png',g26='PlayControl.png',g7='Banner_300%D1%85600_Frame3.jpg';var im='http://vovaane.github.io/boss_scent/images/',aud='http://vovaane.github.io/boss_scent/media/',vid='http://vovaane.github.io/boss_scent/media/',js='http://vovaane.github.io/boss_scent/js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Banner_300600_Frame1',t:g,r:['0px','0px','300px','600px','auto','auto'],o:'0',f:[x4,im+g5,'0px','0px']},{id:'Banner_300600_Frame2',v:i,t:g,r:['0px','0px','300px','600px','auto','auto'],o:'0',f:[x4,im+g6,'0px','0px']},{id:'Banner_300600_Frame3',v:i,t:g,r:['0px','0px','300px','600px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px']},{id:'ClickTag',t:m,r:['0px','0px','300px','600px','auto','auto'],cu:'pointer',o:'0',f:[x8],s:[0,xc,i]},{id:'video-centerer',symbolName:'video-centerer',v:i,t:m,r:['-90px','119px','480px','270px','auto','auto'],cu:'pointer'},{id:'SkipControl',v:i,t:g,r:['200px','374px','100px','30px','auto','auto'],cu:'pointer',f:[x4,im+g9,'0px','0px']},{id:'SonControl',symbolName:'SonControl',v:i,t:m,r:['7','377','23','23','auto','auto'],cu:'pointer'},{id:'PlayStopControl',symbolName:'PlayStopControl',v:i,t:m,r:['37','377','23','23','auto','auto'],cu:'pointer'},{id:'ReplayControl',v:i,t:g,r:['5px','5px','23px','23px','auto','auto'],cu:'pointer',f:[x4,im+g10,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','300px','600px','auto','auto'],overflow:'hidden',f:[x11]}}},tt:{d:21500,a:y,l:{"videoStart":5500,"Finvideo":20540},data:[["eid18",d,5500,0,"linear",e12,i,b],["eid20",d,20540,0,"linear",e12,b,i],["eid19",d,5500,0,"linear",e13,i,b],["eid21",d,20540,0,"linear",e13,b,i],["eid13",o,20540,960,"linear",e14,'0','1'],["eid4",d,4500,0,"linear",e15,i,b],["eid10",d,5500,0,"linear",e16,i,b],["eid14",d,20540,0,"linear",e16,b,i],["eid15",d,21500,0,"linear",e17,i,b],["eid11",d,20540,0,"linear",e14,i,b],["eid22",d,5500,0,"linear",e18,i,b],["eid23",d,20540,0,"linear",e18,b,i],["eid2",o,0,1000,"linear",e19,'0','1'],["eid3",o,3500,1000,"linear",e19,'1','0'],["eid6",o,4500,1000,"linear",e15,'0','1'],["eid24","tr",5500,function(e,d){this.eSA(e,d);},['play','${video-centerer}',[]]]]}},"PlayStopControl":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x20,x20,x21,x21,x22,x22],id:x23,t:g,f:[x4,im+g24,x20,x20]},{t:g,v:i,r:[x20,x20,x21,x21,x22,x22],id:x25,f:[x4,im+g26,x20,x20]}],style:{'${symbolSelector}':{r:[_,_,x21,x21]}}},tt:{d:0,a:y,data:[["eid16",d,0,0,"linear",e27,i,i]]}},"SonControl":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{t:g,id:x28,r:[x20,x20,x21,x21,x22,x22],f:[x4,im+g29,x20,x20]},{r:[x20,x20,x21,x21,x22,x22],id:x30,t:g,v:i,f:[x4,im+g31,x20,x20]}],style:{'${symbolSelector}':{r:[_,_,x21,x21]}}},tt:{d:0,a:y,data:[["eid17",d,0,0,"linear",e32,i,i]]}},"video-centerer":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:y,cn:{dom:[],style:{'${symbolSelector}':{r:[_,_,x33,x34]}}},tt:{d:250,a:n,l:{"start":250},data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-7558201");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.getSymbol("SonControl").$("SonOff").hide();sym.getSymbol("SonControl").$("SonOff").show();var videoCenterer=sym.getSymbol("video-centerer");videoCenterer.stop(0);videoCenterer.play("start");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5750,function(sym,e){sym.$("video")[0].muted=true;sym.$("video")[0].currentTime=0;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${SkipControl}","click",function(sym,e){sym.$("video")[0].pause();sym.play("Finvideo");sym.$("video").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${ReplayControl}","click",function(sym,e){sym.lastframe=false;sym.getSymbol("SonControl").$("SonOn").hide();sym.getSymbol("SonControl").$("SonOff").show();sym.getSymbol("PlayStopControl").$("StopControl").show();sym.getSymbol("PlayStopControl").$("PlayControl").hide();sym.$("video").show();sym.$("video")[0].currentTime=0;if(sym.$("video")[0].paused){sym.$("video")[0].play();}
sym.$("video")[0].muted=true;sym.play("videoStart");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${video-centerer}","click",function(sym,e){if(sym.$("video")[0].paused){sym.$("video")[0].play();sym.getSymbol("PlayStopControl").$("StopControl").show();sym.getSymbol("PlayStopControl").$("PlayControl").hide();sym.play();}else{sym.$("video")[0].pause();sym.getSymbol("PlayStopControl").$("PlayControl").show();sym.getSymbol("PlayStopControl").$("StopControl").hide();sym.stop();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${ClickTag}","click",function(sym,e){sym.play("Finvideo");var rnd=Math.floor(Math.random() * (900000000)) + 100000000; window.open("http://ad.adriver.ru/cgi-bin/click.cgi?sid=1&bt=21&ad=602448&pid=2442923&bid=4693678&bn=4693678&rnd="+rnd,"_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${ClickTag_Video}","click",function(sym,e){try{sym.$("video")[0].pause();sym.$("video").hide();}
catch(error){};sym.play("Finvideo");var rnd=Math.floor(Math.random() * (900000000)) + 100000000; window.open("http://ad.adriver.ru/cgi-bin/click.cgi?sid=1&bt=21&ad=602448&pid=2442923&bid=4693678&bn=4693678&rnd="+rnd,"_blank");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'PlayStopControl'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${PlayControl}","click",function(sym,e){sym.$("PlayControl").hide();sym.$("StopControl").show();sym.getComposition().getStage().$("video")[0].play();sym.getComposition().getStage().play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${StopControl}","click",function(sym,e){sym.$("StopControl").hide();sym.$("PlayControl").show();sym.getComposition().getStage().$("video")[0].pause();sym.getComposition().getStage().stop();});
//Edge binding end
})("PlayStopControl");
//Edge symbol end:'PlayStopControl'

//=========================================================

//Edge symbol: 'SonControl'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${SonOff}","click",function(sym,e){sym.$("SonOff").hide();sym.$("SonOn").show();sym.$("video")[0].muted=true;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${SonOn}","click",function(sym,e){sym.$("SonOff").show();sym.$("SonOn").hide();sym.$("video")[0].muted=true;});
//Edge binding end
})("SonControl");
//Edge symbol end:'SonControl'

//=========================================================

//=========================================================

//Edge symbol: 'video-centerer'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){Enabler.loadModule(studio.module.ModuleId.RAD_VIDEO,function(){var VIDEO_COMPONENT='videoComp';var stage=sym.getComposition().getStage();var videoComp=stage.getVariable(VIDEO_COMPONENT);if(!videoComp){videoComp=new studio.sdk.rad.Video({id:'Edge Video',autoplay:false,controls:false,sources:['http://vovaane.github.io/boss_scent/media/Hugo_Boss_Scent_Her_15s_300x270.mp4']});videoComp.setElement(sym.getSymbolElementNode());stage.setVariable(VIDEO_COMPONENT,videoComp);}else{videoComp.getVideoElement().play();}});});
//Edge binding end
})("video-centerer");
//Edge symbol end:'video-centerer'
})})(AdobeEdge.$,AdobeEdge,"EDGE-7558201");