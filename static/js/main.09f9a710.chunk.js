(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"src":"/pics/cat01.png","state":"0","id":"0"},{"src":"/pics/cat02.png","state":"0","id":"1"},{"src":"/pics/cat03.png","state":"0","id":"2"},{"src":"/pics/cat04.png","state":"0","id":"3"},{"src":"/pics/cat05.png","state":"0","id":"4"},{"src":"/pics/cat06.png","state":"0","id":"5"},{"src":"/pics/cat07.png","state":"0","id":"6"},{"src":"/pics/cat08.png","state":"0","id":"7"},{"src":"/pics/cat09.png","state":"0","id":"8"},{"src":"/pics/cat10.png","state":"0","id":"9"},{"src":"/pics/cat11.png","state":"0","id":"10"},{"src":"/pics/cat12.png","state":"0","id":"11"}]')},,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(3),r=a.n(s),i=(a(15),a(4)),o=a(5),l=a(8),m=a(6),u=a(9),p=(a(16),a(7)),d=function(e){return n.a.createElement("div",Object(p.a)({className:"container-fluid"},"className","header"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("h1",null,n.a.createElement("strong",null,"Clicky Game"))),n.a.createElement("div",{className:"col-sm",id:"updates"},n.a.createElement("span",{className:"update"},e.message)),n.a.createElement("div",{className:"col-sm"},n.a.createElement("span",null,"Score: "),n.a.createElement("span",{className:"score"},e.score),n.a.createElement("span",null," | Top: "),n.a.createElement("span",{className:"topScore"},e.topScore))))},g=function(e){return n.a.createElement("div",{className:"instructions"},n.a.createElement("h1",null,"Clicky Game!"),n.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))},f=function(e){return n.a.createElement("img",{className:"cats",src:e.src,id:e.id,state:e.state,alt:"cat",onClick:function(){return e.clicky(e)}})},h=a(1),E=function(e){return n.a.createElement("div",{className:"before-footer"})},w=function(e){return n.a.createElement("footer",null,"Clicky Game! ",n.a.createElement("img",{src:"logo512.png",alt:"logo",height:"30px",width:"30px"}))},v=0,k=0,y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={List:h,score:0,topScore:0,message:"Click an Image to Begin!"},a.clicky=function(e){var t=a.state.List,c=t.filter(function(t){return t.id===e.id});if("1"===c[0].state){for(var n=0;n<t.length;n++)t[n].state="0";v=0,a.setState({List:t,score:0,message:"You guessed incorrectly!"})}else c[0].state="1",++v>k&&(k=v,a.setState({topScore:k})),a.setState({score:v,message:"You guessed correctly!"}),a.shuffle({List:t}),a.setState({List:t}),12===v&&(a.setState({message:"Meow Chicken Meow Meow!  You won!"}),alert("Meow Chicken Meow Meow!  You won!"))},a.shuffle=function(e){for(var t=(e=h).length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=e[t];e[t]=e[a],e[a]=c}return e},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(d,{score:this.state.score,topScore:this.state.topScore,message:this.state.message}),n.a.createElement(g,null),n.a.createElement("div",{className:"container"},this.state.List.map(function(t){return n.a.createElement(f,{src:t.src,id:t.id,state:t.state,clicky:e.clicky})})),n.a.createElement(E,null),n.a.createElement(w,null))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.09f9a710.chunk.js.map