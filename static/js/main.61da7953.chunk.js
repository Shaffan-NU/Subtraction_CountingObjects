(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=new URLSearchParams(window.location.search),s=o.get("limit"),i=o.get("dif"),c=0,l=[],u=function(){console.log(l[c]);var e=0;l[c].attemptedAnswer==l[c].corectAnswer&&(e=1);var t=o.get("limit"),n=o.get("cid"),a=o.get("crcid"),s=o.get("sid"),u=o.get("uid"),m=o.get("id"),d=o.get("type");r.a.ajax({url:"https://nano-softs.com/adaptive/api.php?prb="+l[c].problem+"&aa="+l[c].attemptedAnswer+"&ca="+l[c].corectAnswer+"&tt="+l[c].timeTaken+"&st="+e+"&tkn=f6083658c798db3c3c3227aa5a813c601da7c196fb0871feb0e23bc2528ca35a9253ef957e37d1d7a25e4360a12652ba5493963207def560cd9cab32db8fe0db6602bc278fcfc5be790fb520811d59236734c52e8e25b8dabdece79b16e1815a15bffd16ef0c5e1d46aa9571d6d687d304724f71aa1b06f929ca2b4da5d5add11efa614b69f83ad544bbf2b41c0afe4689c6457f99006d5943affd31ea6f49d3&limit="+t+"&cid="+n+"&crcid="+a+"&sid="+s+"&dif="+i+"&uid="+u+"&id="+m+"&type="+d+"&gt=s",type:"post",data:"",success:function(e){console.log(e),alert("hit")},error:function(e){}})};t.a={setData:function(e,t,n){l.push({index:c,problem:e,attemptedAnswer:t,corectAnswer:n,timeTaken:null})},setDataTime:function(e){l[c].timeTaken=e,u(),c+=1},sendData:u,limit:s,dif:i}},,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/_1.40d8e09c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_2.65a6b97d.mp3"},function(e,t,n){e.exports=n.p+"static/media/_3.6bd41911.mp3"},function(e,t,n){e.exports=n.p+"static/media/_4.ae5c58d7.mp3"},function(e,t,n){e.exports=n.p+"static/media/_5.fa32eb88.mp3"},function(e,t,n){e.exports=n.p+"static/media/_6.639f363f.mp3"},function(e,t,n){e.exports=n.p+"static/media/_7.7fc04555.mp3"},function(e,t,n){e.exports=n.p+"static/media/_8.9c9b9bcb.mp3"},function(e,t,n){e.exports=n.p+"static/media/_9.fc30493c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_10.594c0b0e.mp3"},function(e,t,n){e.exports=n.p+"static/media/removeItem.91412d06.mp3"},,,,,function(e,t,n){e.exports=n.p+"static/media/rooster.7890a5da.png"},,function(module,__webpack_exports__,__webpack_require__){"use strict";var _sessionData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),PRIMES_NUMBERS=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],getRandomSymbol=function(){var e=["+","-","/","*","+"],t=e.length-1;return e[Math.round(Math.random()*(+t-0)+0)]},evaluate=function(e,t){return function(){return getRandomNumber(5)}},getRandomNumber=function(e){var t,n=1;return null==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif||"b"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=5,n=1,t=(Math.random()*(e-n)+1).toFixed()):"i"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=20,n=10,t=(Math.random()*(e-n)+n).toFixed()):"m"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif&&(e=30,n=15,t=(Math.random()*(e-n)+n).toFixed()),t},generateProblem=function(e){var t=getRandomNumber(),n=t,a=getRandomSymbol(),r=evaluate(a,t)()||0;return{problem:n+=" ".concat(a," ").concat(r),firstNumber:t,secondNumber:r,symbol:a}},generateAdditionProblem=function(e){var t=getRandomNumber(),n=getRandomNumber(),a=t;return{problem:a+=" ".concat("+"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"+"}},generateSubtractionProblem=function(e){var t=getRandomNumber();console.log(t);var n=getRandomNumber();if(console.log(n),t<n){var a=t;t=n,n=a}var r=t;return{problem:r+=" ".concat("-"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"-"}},compare=function(e,t){return solve(e)===Number(t)},getRandomInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},solve=function solve(expression){var result=eval(expression);return result.toString().includes(".")?Number(result.toFixed(2)):result};__webpack_exports__.a={generateProblem:generateProblem,compare:compare,solve:solve,generateAdditionProblem:generateAdditionProblem,generateSubtractionProblem:generateSubtractionProblem,getRandomInt:getRandomInt}},,,,function(e,t,n){},,,,,,function(e,t,n){e.exports=n.p+"static/media/football10.c040d63c.png"},function(e,t,n){e.exports=n.p+"static/media/football1.c989b204.png"},function(e,t,n){e.exports=n.p+"static/media/bouncingFootball.fe892d45.wav"},function(e,t,n){e.exports=n.p+"static/media/roosterSound.1d582e32.wav"},,function(e,t,n){e.exports=n.p+"static/media/background.612faa13.gif"},function(e,t,n){e.exports=n(102)},,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/bowl.cabc22c6.png"},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(49),s=n.n(o),i=n(38),c=n(16),l=n(50),u={points:0,lifes:10,seconds:20,level:1,isFinished:!1,isStarted:!1},m=Object(c.c)(Object(c.a)(l.a))(c.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GAIN_POINTS":var n=e.points+t.payload;return Object.assign({},e,{points:n});case"SET_TIME":return Object.assign({},e,{seconds:t.payload});case"CORRECT_ANSWER":var a={points:e.points+t.payload.points,level:e.level+t.payload.level};return Object.assign({},e,a);case"REMOVE_LIVE":var r=e.lifes-t.payload.lives;return Object.assign({},e,{level:e.level-t.payload.level,lifes:r});case"FINISH_GAME":return Object.assign({},e,{isFinished:t.payload});case"RESTART_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:20,level:1,isFinished:!1});case"START_GAME":return Object.assign({},e,{isStarted:!0});case"EARN_LIFE":return Object.assign({},e,{lifes:e.lifes+1});case"REBOOT_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:20,level:1,isFinished:!1,isStarted:!1});default:return e}}),d=(n(67),n(3)),f=n(4),p=n(5),b=n(2),g=n(6),h=function(e){return function(t){t(e?{type:"FINISH_GAME",payload:!0}:{type:"RESTART_GAME",payload:!0})}};var v=function(e){var t=e.children,n=e.isClicked;return r.a.createElement("button",{className:"App-link",onClick:n},t)},E={set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},y={set:function(e,t){sessionStorage.setItem(e,t)},get:function(e){return sessionStorage.getItem(e)}},w=n(51),_=n.n(w),O=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={player:"player"},n.setNameOfPlayer=function(e){n.setState({player:e.target.value})},n.clicked=function(){y.set("onlinePlayer",n.state.player),n.props.startPressed()},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App-brandname"},r.a.createElement("i",{className:"fas fa-graduation-cap"}),r.a.createElement("br",null),r.a.createElement(_.a,{text:["Today we will be solving some fun Math Problems!!!"],cursorRenderer:function(e){return r.a.createElement("h1",null,e)},speed:70,eraseSpeed:70,eraseDelay:200,displayTextRenderer:function(e,t){return r.a.createElement("h3",null,e.split("").map(function(e,t){var n="".concat(t);return r.a.createElement("span",{key:n,style:t%2===0?{color:"magenta"}:{}},e)}))}})),r.a.createElement("p",null,"Press to start the game"),r.a.createElement(v,{isClicked:this.clicked},"Start"))}}]),t}(r.a.Component),S=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={msg:3},n.handleCount=function(e){return 1===e.msg?{msg:"GO"}:"GO"===e.msg?{msg:void 0}:{msg:e.msg-1}},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalRef=setInterval(function(){return e.setState(e.handleCount)},1e3)}},{key:"shouldComponentUpdate",value:function(e,t){return void 0!==t.msg||(clearInterval(this.intervalRef),this.props.isComplete(),!1)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalRef)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"GET READY..."),r.a.createElement("h1",null,this.state.msg))}}]),t}(r.a.Component),A=n(18),j={yellow:"#d8b600",lightBlue:"#61dafb",darkGray:"#999ea7",midGray:"#424855",lightGray:"#f5f5f5",darkBg:"#282c34",red:"#ff6572",green:"#31cd61"};function k(e){var t=e.text,n=e.type;return r.a.createElement("span",null,t&&"success"===n&&r.a.createElement("h4",{style:{color:j.green}},t),t&&"success"!==n&&r.a.createElement("h4",{style:{color:j.midGray}},"Answer: ",r.a.createElement("span",{style:{color:j.lightGray}},t)))}var N=function(e){var t=e.type,n=e.text,a="success"===t?{class:"correct-answer",el:r.a.createElement("i",{className:"fas fa-check"})}:{class:"wrong-answer",el:r.a.createElement("i",{className:"fas fa-times-circle"})};return r.a.createElement("section",null,r.a.createElement("div",{className:"answer  ".concat(a.class)},r.a.createElement("h2",null," ",a.el," ")),r.a.createElement(k,{type:t,text:n}))},R=n(43),C=(n(94),n(41)),M=n.n(C),P=(n(95),n(12)),x=n(22),I=n(9),D=n(14),T=n(25),G=n.n(T),L=n(53),B=n.n(L),W=n(54),F=n.n(W),U=(n(47),n(26)),K=n.n(U),V=n(27),Y=n.n(V),q=n(28),z=n.n(q),J=n(29),H=n.n(J),X=n(30),$=n.n(X),Q=n(31),Z=n.n(Q),ee=n(32),te=n.n(ee),ne=n(33),ae=n.n(ne),re=n(34),oe=n.n(re),se=n(35),ie=n.n(se),ce=n(36),le=n.n(ce),ue=n(37),me=n(55),de=n.n(me),fe=(n(48),function(e){var t=e.image,n=e.handleClick,a=G()(t.src),o=Object(I.a)(a,1)[0];return r.a.createElement(D.a,{image:o,x:t.x,y:t.y,width:100,height:90,offsetX:o?50:0,offsetY:o?45:0,onClick:n})}),pe=function(e){var t=r.a.useRef(),n=r.a.useRef(),a=r.a.useRef(),o=r.a.useState([]),s=Object(I.a)(o,2),i=s[0],c=s[1],l=Object(ue.a)(le.a),u=Object(I.a)(l,1)[0],m=r.a.useState([!1,!1]),d=Object(I.a)(m,2),f=d[0],p=d[1],b=r.a.useState(new Audio(de.a)),g=Object(I.a)(b,1)[0],h=r.a.useState([new Audio(K.a),new Audio(Y.a),new Audio(z.a),new Audio(H.a),new Audio($.a),new Audio(Z.a),new Audio(te.a),new Audio(ae.a),new Audio(oe.a),new Audio(ie.a)]),v=(Object(I.a)(h,1)[0],function(e,t){var n=f.slice();n[e]=t,p(n)}),E="animate__animated animate__bounce";return r.a.createElement("div",{className:"noselect parentDiv"},r.a.createElement("br",null),r.a.createElement("div",{style:{marginLeft:"10%",display:"flex",flexWrap:"wrap"}},r.a.createElement("img",{alt:"lion",name:"10",src:B.a,draggable:e.count<100?"true":"false",onDragStart:function(e){t.current=e.target.src,a.current=e.target.name},className:"noselect draggableImage "+(f[0]&&E),onMouseEnter:function(){g.play(),v(0,!0)},onMouseLeave:function(){g.pause(),g.currentTime=0,v(0,!1)}}),"\xa0 \xa0",r.a.createElement("img",{alt:"lion",src:F.a,name:"1",draggable:e.count<100?"true":"false",onDragStart:function(e){t.current=e.target.src,a.current=e.target.name},className:"noselect draggableImage "+(f[1]&&E),onMouseEnter:function(){g.play(),v(1,!0)},onMouseLeave:function(){g.pause(),g.currentTime=0,v(1,!1)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{onDrop:function(r){r.preventDefault(),n.current.setPointersPositions(r),c(i.concat([Object(x.a)({},n.current.getPointerPosition(),{src:t.current,name:a.current})])),"10"==a.current?e.incCount(10):e.incCount(1)},onDragOver:function(e){return e.preventDefault()},className:"dropBox"},r.a.createElement(D.c,{width:300,height:200,ref:n},r.a.createElement(D.b,null,i.map(function(t){return r.a.createElement(fe,{image:t,handleClick:function(){console.log(t),c(i.filter(function(e){return e!==t})),u(),"10"==t.name?e.decCount(10):e.decCount(1)}})})))))},be=n(56),ge=n.n(be),he=function(e){var t=e.image,n=e.handleClick,a=G()(t.src),o=Object(I.a)(a,1)[0];return r.a.createElement(D.a,{image:o,x:t.x,y:t.y,width:100,height:90,offsetX:o?50:0,offsetY:o?45:0,onClick:n})},ve=function(e){var t,n=r.a.useRef(),a=r.a.useRef(),o=r.a.useState([]),s=Object(I.a)(o,2),i=s[0],c=s[1],l=Object(ue.a)(le.a),u=Object(I.a)(l,1)[0],m=r.a.useState(!1),d=Object(I.a)(m,2),f=d[0],p=d[1],b=r.a.useState([new Audio(K.a),new Audio(Y.a),new Audio(z.a),new Audio(H.a),new Audio($.a),new Audio(Z.a),new Audio(te.a),new Audio(ae.a),new Audio(oe.a),new Audio(ie.a)]),g=Object(I.a)(b,1)[0],h=r.a.useState(new Audio(ge.a)),v=Object(I.a)(h,1)[0],E=function(e){p(e)};return t=f?"animate__animated animate__heartBeat":"",r.a.createElement("div",{className:"noselect parentDiv"},r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("img",{alt:"lion",src:e.img,draggable:e.count<10?"true":"false",onDragStart:function(e){n.current=e.target.src},className:"noselect draggableImage "+t,onMouseEnter:function(){10*Math.random()<5&&v.play(),E(!0)},onMouseLeave:function(){E(!1)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{onDrop:function(t){var r;t.preventDefault(),a.current.setPointersPositions(t),c(i.concat([Object(x.a)({},a.current.getPointerPosition(),{src:n.current})])),e.incCount(1),r=e.count,console.log("i am at "+r),r<g.length&&g[r].play()},onDragOver:function(e){return e.preventDefault()},className:"dropBox"},r.a.createElement(D.c,{width:300,height:200,ref:a},r.a.createElement(D.b,null,i.map(function(t){return r.a.createElement(he,{image:t,handleClick:function(){c(i.filter(function(e){return e!==t})),u(),e.decCount(1)}})})))))},Ee=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o))))._isMounted=!1,n.state={problem:"",firstNumber:0,secondNumber:0,symbol:"",answer:0,modal:"",modalShowing:!1,streaks:0,images:[M.a],randomImage:"",data:[]},n.earnLife=function(){n.props.onEarnLife(),n.showModal("success","STREAK!! You won a life \u2665"),n.setState({streaks:0})},n.correctAnswer=function(){n.state.streaks>2?n.earnLife():n.showModal("success"),n._isMounted&&n.props.onCorretAnswer(),n.setState(function(e){return{streaks:e.streaks+1}}),n.nextProblem()},n.wrongAnswer=function(){n._isMounted&&n.props.onWrongAnswer(),n.setState({streaks:0}),n.showModal("error",R.a.solve(n.state.problem).toString()),n.nextProblem()},n.nextProblem=function(){setTimeout(function(){n.getProblem(),n._isMounted&&n.setState({modalShowing:!1,answer:0}),n.props.lifes>0&&n.answerInput&&n.answerInput.focus()},2500)},n.evaluateProblem=function(){var e=R.a.solve(n.state.problem),t=n.state.answer;return P.a.setData(n.state.problem,t,e),R.a.compare(n.state.problem,n.state.answer)?n.correctAnswer():n.wrongAnswer()},n.keyingUp=function(e){"Enter"===e.key&&n.evaluateProblem();var t=e.target.value;n.setState({answer:Number(t.match(/((-?)\d+)/g))})},n.showModal=function(e,t){n.setState({modal:r.a.createElement(N,{type:e,text:t}),modalShowing:!0})},n.getProblem=function(){var e=R.a.generateSubtractionProblem(n.props.points),t=n.getImage();n._isMounted&&n.setState({problem:e.problem,firstNumber:e.firstNumber,secondNumber:e.secondNumber,symbol:e.symbol,randomImage:t})},n.getImage=function(){return n.state.images[R.a.getRandomInt(0,n.state.images.length-1)]},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.getProblem()}},{key:"shouldComponentUpdate",value:function(e){return this.props.lifes<1?(this.props.onEndGame(this.state.points),!1):e.lifes>-1}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"show-up",style:{width:"100%",height:"100vh"}},r.a.createElement("div",null,this.state.modalShowing?this.state.modal:r.a.createElement("div",null,"b"!=P.a.dif?r.a.createElement("div",null,r.a.createElement("h1",{style:{fontSize:"3.5em"}}," ",this.state.problem," "),r.a.createElement(pe,{incCount:function(t){e.setState({answer:e.state.answer+t})},decCount:function(t){e.setState({answer:e.state.answer-t})},count:this.state.answer,img:this.state.randomImage})):r.a.createElement("div",null,r.a.createElement("table",{align:"center"},r.a.createElement("tbody",null,r.a.createElement("tr",null,Object(A.a)(Array(parseInt(this.state.firstNumber))).map(function(t,n){return r.a.createElement("td",null,r.a.createElement("img",{key:n,src:e.state.randomImage,className:"questionImage ",draggable:"false"})," ")}),r.a.createElement("td",{className:"center"},r.a.createElement("h1",{style:{fontSize:"3.5em"}}," ",this.state.symbol," ")),Object(A.a)(Array(parseInt(this.state.secondNumber))).map(function(t,n){return r.a.createElement("td",null,r.a.createElement("img",{key:n,src:e.state.randomImage,className:"questionImage ",draggable:"false"}))})))),r.a.createElement(ve,{incCount:function(t){e.setState({answer:e.state.answer+t})},decCount:function(t){e.setState({answer:e.state.answer-t})},count:this.state.answer,img:this.state.randomImage})),r.a.createElement("button",{className:"btn fourth answerButton",onClick:this.evaluateProblem}," ",this.state.answer," "))))}}]),t}(r.a.Component),ye={fontSize:"1.5em",color:"black",fontFamily:"fantasy",cursor:"pointer"},we={height:0,border:"0.5px solid #61dafb"},_e={color:"#61dafb",fontWeight:"bold"},Oe=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=we,t=ye,n=_e;return r.a.createElement("div",null,r.a.createElement("h1",null,"GAME OVER"),r.a.createElement("hr",{style:e}),r.a.createElement("h3",null,"FINAL SCORE ",r.a.createElement("b",{style:n},this.props.points)),r.a.createElement("br",null),r.a.createElement("h3",{style:t,onClick:this.props.retryGame},"RETRY"),this.children)}}]),t}(r.a.Component),Se=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={seconds:n.props.seconds,level:n.props.level,limit:0,totalProblems:0},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({seconds:this.props.seconds,limit:P.a.limit}),this._secondsIntervalRef=setInterval(function(){return e.setState(function(e){return{seconds:--e.seconds}})},1e6)}},{key:"componentDidUpdate",value:function(){var e=this;this.props.level!==this.state.level&&(P.a.setDataTime(20-this.state.seconds),this.setState(function(t){return{level:e.props.level,totalProblems:e.state.totalProblems+1,seconds:20}}),this.props.setTimeChanged(this.state.seconds)),(this.state.seconds<0||this.state.totalProblems>this.state.limit)&&this.props.onEndGame()}},{key:"componentWillUnmount",value:function(){clearInterval(this._secondsIntervalRef)}},{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("b",null," ",this.state.totalProblems,"/",this.state.limit," "))}},{key:"timeTaken",value:function(){return 20-this.state.seconds}}]),t}(r.a.Component);Se.defaultProps={level:0};var Ae=Se;var je=function(e){var t=e.lifes,n=[];if(t<5)for(var a=0;a<t;a++)n.push(r.a.createElement("i",{key:a,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));else n.push(r.a.createElement("i",{key:t,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));return r.a.createElement("span",{style:{color:j.red}},t>4&&r.a.createElement("b",null,"".concat(t,"x")),n)};function ke(e){var t=e.points;return r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-star",style:{color:j.yellow}})," ",t)}n(100);var Ne=n(57),Re={container:{display:"flex",justifyContent:"space-around"},el:{flex:1},title:{margin:"0.6em auto"},divider:{border:"0.5px solid ".concat(j.midGray)},timeCol:{flex:1,padding:"0.3em 0em",fontSize:"0.6em",color:j.darkGray},sectionContainer:{textAlign:"left",padding:"0.15em 0em"}};function Ce(e){var t=e.player;return r.a.createElement("div",{style:Re.sectionContainer},r.a.createElement("h5",{style:Re.title},t.name),r.a.createElement("div",{style:Re.container},r.a.createElement("small",{style:Re.timeCol},r.a.createElement("i",{className:"fas fa-clock"})," "+Ne(new Date(t.time)).fromNow()),r.a.createElement("small",{style:Re.el},r.a.createElement("i",{className:"fas fa-star",style:{color:j.yellow}})," ",t.points)),r.a.createElement("hr",{style:Re.divider}))}function Me(e){var t=e.points,n=y.get("onlinePlayer"),a=JSON.parse(E.get("scoreTable"))||[];return a.push({name:n,points:t,time:Date.now()}),a=a.sort(function(e,t){return t.points-e.points}).slice(0,4),E.set("scoreTable",JSON.stringify(a)),r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement(Ce,{player:e,key:t})}))}var Pe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={isBeginningDone:!1,lastPoints:0},n.retryGame=function(){n.setState({isBeginningDone:!1}),n.props.onRetryGame()},n.completeBeginning=function(){n.setState({isBeginningDone:!0})},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.props.isFinished?r.a.createElement(Oe,Object.assign({},this.props,{retryGame:this.retryGame}),r.a.createElement(Me,this.props)):r.a.createElement("div",null,this.state.isBeginningDone?r.a.createElement("div",{className:"noselect "},r.a.createElement("div",{className:"App-header-bar"},r.a.createElement(Ae,this.props),r.a.createElement(je,this.props),r.a.createElement(ke,this.props)),r.a.createElement("div",null,r.a.createElement(Ee,this.props))):r.a.createElement(S,{isComplete:this.completeBeginning}))}}]),t}(r.a.Component),xe=(n(101),n(58)),Ie=n.n(xe);var De=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).gameStart=function(){n.props.onStartGame()},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"handleURL",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:Ie.a,id:"bg",alt:""}),this.props.isStarted?r.a.createElement(Pe,Object.assign({},this.props,{gameStart:this.gameStart})):r.a.createElement(O,{startPressed:this.gameStart})))}}]),t}(a.Component),Te=Object(i.b)(function(e){return{points:e.points,lifes:e.lifes,seconds:e.seconds,level:e.level,isFinished:e.isFinished,isStarted:e.isStarted}},function(e){return{onCorretAnswer:function(t){return e(function(e){e({type:"CORRECT_ANSWER",payload:{points:100,level:1}})})},onWrongAnswer:function(){return e(function(e){e({type:"REMOVE_LIVE",payload:{level:1,lives:1}})})},setTimeChanged:function(t){return e((n=t,function(e){e({type:"SET_TIME",payload:n})}));var n},onEndGame:function(){return e(h(!0))},onRetryGame:function(){return e(h(!1))},onReStartGame:function(){return e(function(e){e({type:"REBOOT_GAME"})})},onStartGame:function(){return e(function(e){e({type:"START_GAME"})})},onEarnLife:function(){return e(function(e){e({type:"EARN_LIFE"})})}}})(De),Ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Le(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(i.a,{store:m},r.a.createElement(Te,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Subtraction_CountingObjects",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Subtraction_CountingObjects","/service-worker.js");Ge?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Le(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Le(t,e)})}}()}],[[59,1,2]]]);
//# sourceMappingURL=main.61da7953.chunk.js.map