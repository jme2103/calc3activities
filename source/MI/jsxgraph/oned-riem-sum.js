var brd1 = JXG.JSXGraph.initBoard('box1', {axis:true, boundingbox: [-8, 4, 8, -4]});
var s = brd1.create('slider',[[1,3],[5,3],[1,10,50]],{name:'n',snapWidth:1});
var a = brd1.create('slider',[[1,2],[5,2],[-10,-3,0]],{name:'start'});
var b = brd1.create('slider',[[1,1],[5,1],[0,2*Math.PI,10]],{name:'end'});
var f = function(x){ return Math.sin(x); };
var plot = brd1.create('functiongraph',[f,function(){return a.Value();}, function(){return b.Value();}]);

var os = brd1.create('riemannsum',[f,
    function(){ return s.Value();}, function(){ return "left";},
    function(){return a.Value();},
    function(){return b.Value();}
    ],
    {fillColor:'#ffff00', fillOpacity:0.3});

brd1.create('text',[-6,-3,function(){ return 'Sum='+(JXG.Math.Numerics.riemannsum(f,s.Value(),'left',a.Value(),b.Value())).toFixed(4); }]);