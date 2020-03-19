(this["webpackJsonpchallenge-chart-plot"]=this["webpackJsonpchallenge-chart-plot"]||[]).push([[0],{19:function(e,t,n){e.exports=n(46)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),s=n.n(r),i=(n(24),n(1)),c=n(2),u=n(4),l=n(3),p=n(5),m=(n(25),n(26),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"header"},o.a.createElement("div",null,"Joao's Challenge"))}}]),t}(o.a.Component)),h=(n(27),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"button_wrapper"},o.a.createElement("button",{onClick:this.props.onClick},"GENERATE CHART")))}}]),t}(o.a.Component)),d=n(17),f=n.n(d),v=(n(35),n(36),n(37),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onMouseDown=function(e){document.body.addEventListener("mousemove",n.onMouseMove),window.addEventListener("mouseup",n.onMouseUp),n.prevY=parseInt(n.editorRef.current.style.height);var t=n.prevY;console.log("down: ",t)},n.onMouseMove=function(e){var t=e.clientY,a=n.prevY+(t-n.prevY),o=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;console.log(o),a>o-500&&(a=o-500),n.editorRef.current.style.height=a+"px"},n.onMouseUp=function(){document.body.removeEventListener("mousemove",n.onMouseMove),window.removeEventListener("mouseup",n.onMouseUp),console.log("up")},n.onChange=function(e){n.props.getInput(e)},n.editorRef=o.a.createRef(),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.editorRef.current.style.height="235px",this.default=this.props.defaultValue}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"editor-wrapper",ref:this.editorRef},o.a.createElement(f.a,{className:"editor",mode:"javascript",theme:"monokai",placeholder:"Input your data here",width:"100%",height:"100%",onChange:this.onChange,value:this.props.value,defaultValue:this.props.defaultValue,showPrintMargin:!1,wrapEnabled:!0}),o.a.createElement("div",{className:"resizer",onMouseDown:this.onMouseDown}))}}]),t}(o.a.Component)),y=n(7),b=n.n(y),g=(n(39),{maintainAspectRatio:!1,legend:{display:!0,position:"right",reverse:!1,align:"start",labels:{fontSize:12,fontStyle:"bold",usePointStyle:!0,padding:18,fontFamily:"'Source Sans Pro', sans-serif"}},scales:{xAxes:[{type:"time",time:{unit:"minute",displayFormats:{minute:"HH:mm"}},gridLines:{display:!1,drawBorder:!1}}],yAxes:[{gridLines:{drawBorder:!1},ticks:{maxTicksLimit:5,stepSize:.1,display:!1,beginAtZero:!0}}]}}),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).chartRef=o.a.createRef(),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){b.a.NewLegend=b.a.Legend.extend({afterFit:function(){this.width=this.width+100}}),this.myChart=new b.a(this.chartRef.current,{type:"line",data:{datasets:this.props.datasets},options:g}),this.myChart.generateLegend()}},{key:"componentDidUpdate",value:function(){this.myChart.data.datasets=this.props.datasets,this.myChart.update()}},{key:"render",value:function(){return o.a.createElement("div",{className:"myChart"},o.a.createElement("canvas",{className:"myChartCanvas",ref:this.chartRef}))}}]),t}(o.a.Component),O="{type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}\n{type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000}\n{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}\n{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}\n{type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}\n{type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}\n{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}\n{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}\n{type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}\n{type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}\n{type: 'stop', timestamp: 1519862400000}",_=n(18),j=function(){function e(t,n){Object(i.a)(this,e),this.group=t.group,this.select=t.select,this.datasets=n}return Object(c.a)(e,[{key:"processSpan",value:function(e){return[e.begin,e.end]}},{key:"processData",value:function(e,t){var n=function(e,t,n){return t.reduce((function(t,n){return e.hasOwnProperty(n)?t+" "+e[n]:t}),"")}(e,this.group,this.select),a=!0,o=!1,r=void 0;try{for(var s,i=this.select[Symbol.iterator]();!(a=(s=i.next()).done);a=!0){var c=s.value;if(e.hasOwnProperty(c)){var u=n+" "+c,l=60*new Date(e.timestamp).getTimezoneOffset()*1e3,p={x:e.timestamp+l,y:e[c]};x(this.datasets,u,p)}}}catch(m){o=!0,r=m}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}}},{key:"processStop",value:function(){}}]),e}();function x(e,t,n){e.has(t)?e.get(t).data.push(n):e.set(t,function(e,t){var n=t,a=function(){var e=Math.floor(361*Math.random());return"hsl(".concat(e,",").concat(100,"%,").concat(50,"%)")}();return{label:n,data:[e],backgroundColor:a,borderColor:a,pointBorderColor:a,pointHoverBackgroundColor:a,fill:!1,lineTension:0,borderDashOffset:0,pointBorderWidth:6,pointHoverRadius:6,pointHoverBorderWidth:.1,pointRadius:3,pointHitRadius:3,borderWidth:2}}(n,t))}var k=function(){function e(t){Object(i.a)(this,e),this.eventsJson=t,this.datasets=new Map}return Object(c.a)(e,[{key:"processList",value:function(){var e=!1,t=!0,n=!1,a=void 0;try{for(var o,r=this.eventsJson[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){var s=o.value,i=s.type;if(e){if("start"!==i)continue;e=!1}switch(i){case"start":this.aux=new j(s,this.datasets);break;case"span":this.aux.processSpan(s);break;case"data":this.aux.processData(s);break;case"stop":e=!0;break;default:console.log("Type not exists")}}}catch(c){n=!0,a=c}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}}}]),e}(),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).generateChart=function(){var e="["+n.input.replace(/\n/g,",")+"]",t=Object(_.parse)(e);n.parser=new k(t),n.parser.processList(t);var a=Array.from(n.parser.datasets.values());n.setState({value:n.input,chartDatasets:a},(function(){console.log(n.state.value),console.log(n.state.chartDatasets)}))},n.getInput=function(e){n.input=e},n.state={defaultInput:O,value:O,chartDatasets:[]},n.input=O,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.generateChart()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement(v,{getInput:this.getInput,value:this.state.value,defaultValue:this.state.defaultInput}),o.a.createElement(w,{datasets:this.state.chartDatasets}),o.a.createElement(h,{onClick:this.generateChart}))}}]),t}(o.a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(C,null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6624477f.chunk.js.map