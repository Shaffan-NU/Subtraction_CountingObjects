(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){"use strict";var a=n(12),r=n.n(a),o=new URLSearchParams(window.location.search),s=o.get("limit"),i=o.get("dif"),c=0,l=[],u=function(){console.log(l[c]);var e=0;l[c].attemptedAnswer==l[c].corectAnswer&&(e=1);var t=o.get("limit"),n=o.get("cid"),a=o.get("crcid"),s=o.get("sid"),u=o.get("uid"),m=o.get("id"),d=o.get("type");r.a.ajax({url:"https://nano-softs.com/adaptive/api.php?prb="+l[c].problem+"&aa="+l[c].attemptedAnswer+"&ca="+l[c].corectAnswer+"&tt="+l[c].timeTaken+"&st="+e+"&tkn=f6083658c798db3c3c3227aa5a813c601da7c196fb0871feb0e23bc2528ca35a9253ef957e37d1d7a25e4360a12652ba5493963207def560cd9cab32db8fe0db6602bc278fcfc5be790fb520811d59236734c52e8e25b8dabdece79b16e1815a15bffd16ef0c5e1d46aa9571d6d687d304724f71aa1b06f929ca2b4da5d5add11efa614b69f83ad544bbf2b41c0afe4689c6457f99006d5943affd31ea6f49d3&limit="+t+"&cid="+n+"&crcid="+a+"&sid="+s+"&dif="+i+"&uid="+u+"&id="+m+"&type="+d+"&gt=a",type:"post",data:"",success:function(e){console.log(e),alert("hit")},error:function(e){}})};t.a={setData:function(e,t,n){l.push({index:c,problem:e,attemptedAnswer:t,corectAnswer:n,timeTaken:null})},setDataTime:function(e){l[c].timeTaken=e,u(),c+=1},sendData:u,limit:s,dif:i}},,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/_1.40d8e09c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_2.65a6b97d.mp3"},function(e,t,n){e.exports=n.p+"static/media/_3.6bd41911.mp3"},function(e,t,n){e.exports=n.p+"static/media/_4.ae5c58d7.mp3"},function(e,t,n){e.exports=n.p+"static/media/_5.fa32eb88.mp3"},function(e,t,n){e.exports=n.p+"static/media/_6.639f363f.mp3"},function(e,t,n){e.exports=n.p+"static/media/_7.7fc04555.mp3"},function(e,t,n){e.exports=n.p+"static/media/_8.9c9b9bcb.mp3"},function(e,t,n){e.exports=n.p+"static/media/_9.fc30493c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_10.594c0b0e.mp3"},function(e,t,n){e.exports=n.p+"static/media/removeItem.91412d06.mp3"},,function(e,t,n){e.exports=n.p+"static/media/drop.2fd9ac22.wav"},,,,function(e,t,n){e.exports=n.p+"static/media/rooster.7890a5da.png"},,,function(e,t,n){e.exports=n.p+"static/media/sound.7360a269.png"},function(module,__webpack_exports__,__webpack_require__){"use strict";var _sessionData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),PRIMES_NUMBERS=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],getRandomSymbol=function(){var e=["+","-","/","*","+"],t=e.length-1;return e[Math.round(Math.random()*(+t-0)+0)]},evaluate=function(e,t){return function(){return getRandomNumber(5)}},getRandomNumber=function(e){var t,n=1;return null==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif||"b"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=5,n=1,t=(Math.random()*(e-n)+1).toFixed()):"i"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=20,n=10,t=(Math.random()*(e-n)+n).toFixed()):"m"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif&&(e=30,n=15,t=(Math.random()*(e-n)+n).toFixed()),t},generateProblem=function(e){var t=getRandomNumber(),n=t,a=getRandomSymbol(),r=evaluate(a,t)()||0;return{problem:n+=" ".concat(a," ").concat(r),firstNumber:t,secondNumber:r,symbol:a}},generateAdditionProblem=function(e){var t=getRandomNumber(),n=getRandomNumber(),a=t;return{problem:a+=" ".concat("-"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"-"}},generateSubtractionProblem=function(e){var t=getRandomNumber();console.log(t),0==t&&(t=1);var n=getRandomNumber();if(console.log(n),0==n&&(n=1),t<n){var a=t;t=n,n=a}var r=t;return{problem:r+=" ".concat("-"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"-"}},compare=function(e,t){return solve(e)===Number(t)},getRandomInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},solve=function solve(expression){var result=eval(expression);return result.toString().includes(".")?Number(result.toFixed(2)):result};__webpack_exports__.a={generateProblem:generateProblem,compare:compare,solve:solve,generateAdditionProblem:generateAdditionProblem,generateSubtractionProblem:generateSubtractionProblem,getRandomInt:getRandomInt}},,,,function(e,t,n){},,,function(e,t,n){e.exports=n.p+"static/media/tostartpressbutton.424d1898.mp3"},function(e,t,n){e.exports=n.p+"static/media/321go.8efff185.mp3"},function(e,t,n){e.exports=n.p+"static/media/rightAnswer.09b0b7bb.mp3"},function(e,t,n){e.exports=n.p+"static/media/wrongAnswer.ddcbc59b.mp3"},function(e,t,n){e.exports=n.p+"static/media/bowl.cabc22c6.png"},,,function(e,t,n){e.exports=n.p+"static/media/football10.c040d63c.png"},function(e,t,n){e.exports=n.p+"static/media/football1.c989b204.png"},function(e,t,n){e.exports=n.p+"static/media/bouncingFootball.fe892d45.wav"},,,function(e,t,n){e.exports=n.p+"static/media/background.612faa13.gif"},function(e,t,n){e.exports=n.p+"static/media/background2.d6687daa.gif"},function(e,t,n){e.exports=n.p+"static/media/grocerySound.a0d6b138.mp3"},function(e,t,n){e.exports=n.p+"static/media/mute.f02ac89a.png"},function(e,t,n){e.exports=n(113)},,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),s=n.n(o),i=n(39),c=n(16),l=n(52),u={points:0,lifes:10,seconds:300,level:1,isFinished:!1,isStarted:!1},m=Object(c.c)(Object(c.a)(l.a))(c.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GAIN_POINTS":var n=e.points+t.payload;return Object.assign({},e,{points:n});case"SET_TIME":return Object.assign({},e,{seconds:t.payload});case"CORRECT_ANSWER":var a={points:e.points+t.payload.points,level:e.level+t.payload.level};return Object.assign({},e,a);case"REMOVE_LIVE":var r=e.lifes-t.payload.lives;return Object.assign({},e,{level:e.level-t.payload.level,lifes:r});case"FINISH_GAME":return Object.assign({},e,{isFinished:t.payload});case"RESTART_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:300,level:1,isFinished:!1});case"START_GAME":return Object.assign({},e,{isStarted:!0});case"EARN_LIFE":return Object.assign({},e,{lifes:e.lifes+1});case"REBOOT_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:300,level:1,isFinished:!1,isStarted:!1});default:return e}}),d=(n(77),n(3)),f=n(4),p=n(5),b=n(2),g=n(6),h=function(e){return function(t){t(e?{type:"FINISH_GAME",payload:!0}:{type:"RESTART_GAME",payload:!0})}};var v=function(e){var t=e.children,n=e.isClicked;return r.a.createElement("button",{className:"App-link",onClick:n},t)},E={set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},y={set:function(e,t){sessionStorage.setItem(e,t)},get:function(e){return sessionStorage.getItem(e)}},w=(n(78),n(53)),O=n.n(w),_=n(54),S=n.n(_),A=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={player:"player",startGameSound:new Audio(O.a),countDownSound:new Audio(S.a)},n.setNameOfPlayer=function(e){n.setState({player:e.target.value})},n.clicked=function(){y.set("onlinePlayer",n.state.player),n.state.countDownSound.play(),n.props.startPressed()},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.state.startGameSound.play(),r.a.createElement("div",null,r.a.createElement("div",{className:"App-brandname"},r.a.createElement("i",{className:"fas fa-graduation-cap"}),r.a.createElement("br",null)),r.a.createElement("p",null,"Press to start the game"),r.a.createElement(v,{isClicked:this.clicked},"Start"))}}]),t}(r.a.Component),j=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={msg:3},n.handleCount=function(e){return 1===e.msg?{msg:"GO"}:"GO"===e.msg?{msg:void 0}:{msg:e.msg-1}},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalRef=setInterval(function(){return e.setState(e.handleCount)},1e3)}},{key:"shouldComponentUpdate",value:function(e,t){return void 0!==t.msg||(clearInterval(this.intervalRef),this.props.isComplete(),!1)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalRef)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," GET READY..."),r.a.createElement("h1",null,this.state.msg))}}]),t}(r.a.Component),k=n(18),N={yellow:"#d8b600",lightBlue:"#61dafb",darkGray:"#999ea7",midGray:"#424855",lightGray:"#f5f5f5",darkBg:"#282c34",red:"#ff6572",green:"#31cd61"},x=n(55),R=n.n(x),C=n(56),P=n.n(C);function M(e){var t=e.text,n=e.type,a=new Audio(R.a),o=new Audio(P.a);return"success"===n?a.play():o.play(),r.a.createElement("span",null,t&&"success"===n&&r.a.createElement("h4",{style:{color:N.green}},t),t&&"success"!==n&&r.a.createElement("h4",{style:{color:N.midGray}},"Answer:  ",r.a.createElement("span",{style:{color:N.lightGray}},t)))}var I=function(e){var t=e.type,n=e.text,a="success"===t?{class:"correct-answer",el:r.a.createElement("i",{className:"fas fa-check"})}:{class:"wrong-answer",el:r.a.createElement("i",{className:"fas fa-times-circle"})};return r.a.createElement("section",null,r.a.createElement("div",{className:"answer  ".concat(a.class)},r.a.createElement("h2",null," ",a.el," ")),r.a.createElement(M,{type:t,text:n}))},D=n(46),T=n(57),G=n.n(T),L=n(42),W=n.n(L),B=(n(105),n(10)),U=n(9),F=n(14),H=n(25),z=n.n(H),K=(n(50),n(26)),V=n.n(K),Y=n(27),q=n.n(Y),J=n(28),X=n.n(J),$=n(29),Q=n.n($),Z=n(30),ee=n.n(Z),te=n(31),ne=n.n(te),ae=n(32),re=n.n(ae),oe=n(33),se=n.n(oe),ie=n(34),ce=n.n(ie),le=n(35),ue=n.n(le),me=n(36),de=n.n(me),fe=n(37),pe=n(38),be=n.n(pe),ge=n(44),he=function(e){var t=e.image,n=e.handleClick,a=z()(t.src),o=Object(U.a)(a,1)[0];return r.a.createElement(F.a,{image:o,x:t.x,y:t.y,width:90,height:90,offsetX:o?45:0,offsetY:o?45:0,onClick:n,onTouchStart:n})},ve=function(e){r.a.useRef();var t,n=r.a.useRef(),o=(r.a.useRef(),r.a.useState([])),s=Object(U.a)(o,2),i=s[0],c=s[1],l=Object(fe.a)(de.a),u=Object(U.a)(l,1)[0],m=r.a.useState(!1),d=Object(U.a)(m,2),f=d[0],p=d[1],b=r.a.useState(300),g=Object(U.a)(b,2),h=g[0],v=g[1],E=r.a.useState(200),y=Object(U.a)(E,2),w=y[0],O=y[1],_=r.a.useState(new Audio(be.a)),S=(Object(U.a)(_,1)[0],r.a.useRef()),A=r.a.useState([new Audio(V.a),new Audio(q.a),new Audio(X.a),new Audio(Q.a),new Audio(ee.a),new Audio(ne.a),new Audio(re.a),new Audio(se.a),new Audio(ce.a),new Audio(ue.a)]),j=Object(U.a)(A,1)[0],k=function(e){p(e)};t=f?"animate__animated animate__heartBeat":"";var N=function(){var e=S.current.offsetWidth,t=S.current.offsetHeight;v(e),O(t)};return Object(a.useEffect)(function(){return N(),window.addEventListener("resize",N),function(){window.removeEventListener("resize",N)}},[]),r.a.createElement("div",{className:"noselect parentDiv"},r.a.createElement("div",{className:"dropBox",ref:S},r.a.createElement(ge.DropTarget,{targetKey:"me",onHit:function(){var t;console.log(i),c(i.concat([{x:Math.random()*(h-90)+50,y:Math.random()*(w-70)+30,src:e.img}])),(t=e.count)<j.length&&j[t].play(),e.incCount(1)}},r.a.createElement(F.c,{width:h,height:w,ref:n},r.a.createElement(F.b,null,i.map(function(t){return r.a.createElement(he,{image:t,handleClick:function(){console.log("adf"),c(i.filter(function(e){return e!==t})),u(),e.decCount(1)}})}))))),r.a.createElement(ge.DragDropContainer,{targetKey:"me",onDrop:function(e){console.log(e.dropData.name)}},r.a.createElement("img",{alt:"lion",src:e.img,className:"noselect draggableImage "+t,onMouseEnter:function(){k(!0)},onMouseLeave:function(){k(!1)}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))},Ee=n(59),ye=n(60),we=n.n(ye),Oe=n(61),_e=n.n(Oe),Se=n(62),Ae=n.n(Se),je=(n(51),function(e){var t=e.image,n=e.handleClick,a=z()(t.src),o=Object(U.a)(a,1)[0];return r.a.createElement(F.a,{image:o,x:t.x,y:t.y,width:100,height:90,offsetX:o?50:0,offsetY:o?45:0,onClick:n})}),ke=function(e){var t=r.a.useRef(),n=r.a.useRef(),o=r.a.useRef(),s=r.a.useState([]),i=Object(U.a)(s,2),c=i[0],l=i[1],u=Object(fe.a)(de.a),m=Object(U.a)(u,1)[0],d=r.a.useState([!1,!1]),f=Object(U.a)(d,2),p=f[0],b=f[1],g=r.a.useState(new Audio(Ae.a)),h=Object(U.a)(g,1)[0],v=r.a.useState(new Audio(be.a)),E=Object(U.a)(v,1)[0],y=r.a.useState(300),w=Object(U.a)(y,2),O=w[0],_=w[1],S=r.a.useState(200),A=Object(U.a)(S,2),j=A[0],k=A[1],N=r.a.useRef(),x=r.a.useState([new Audio(V.a),new Audio(q.a),new Audio(X.a),new Audio(Q.a),new Audio(ee.a),new Audio(ne.a),new Audio(re.a),new Audio(se.a),new Audio(ce.a),new Audio(ue.a)]),R=(Object(U.a)(x,1)[0],function(e,t){var n=p.slice();n[e]=t,b(n)}),C="animate__animated animate__bounce",P=function(){var e=N.current.offsetWidth,t=N.current.offsetHeight;console.log(N.current),_(e),k(t)};return Object(a.useEffect)(function(){return P(),window.addEventListener("resize",P),function(){window.removeEventListener("resize",P)}},[]),r.a.createElement("div",{className:"noselect parentDiv"},r.a.createElement("div",{onDrop:function(a){a.preventDefault(),n.current.setPointersPositions(a),E.play(),l(c.concat([Object(Ee.a)({},n.current.getPointerPosition(),{src:t.current,name:o.current})])),"10"==o.current?e.incCount(10):e.incCount(1)},onDragOver:function(e){return e.preventDefault()},ref:N,className:"dropBox"},r.a.createElement(F.c,{width:O,height:j,ref:n},r.a.createElement(F.b,null,c.map(function(t){return r.a.createElement(je,{image:t,handleClick:function(){console.log(t),l(c.filter(function(e){return e!==t})),m(),"10"==t.name?e.decCount(10):e.decCount(1)}})})))),r.a.createElement("div",{style:{paddingLeft:"65px",display:"flex",flexWrap:"wrap"}},r.a.createElement("img",{alt:"lion",name:"10",src:we.a,draggable:e.count<100?"true":"false",onDragStart:function(e){t.current=e.target.src,o.current=e.target.name},className:"noselect draggableImage "+(p[0]&&C),onMouseEnter:function(){h.play(),R(0,!0)},onMouseLeave:function(){h.pause(),h.currentTime=0,R(0,!1)}}),"\xa0 \xa0",r.a.createElement("img",{alt:"lion",src:_e.a,name:"1",draggable:e.count<100?"true":"false",onDragStart:function(e){t.current=e.target.src,o.current=e.target.name},className:"noselect draggableImage "+(p[1]&&C),onMouseEnter:function(){h.play(),R(1,!0)},onMouseLeave:function(){h.pause(),h.currentTime=0,R(1,!1)}})),r.a.createElement("br",null),r.a.createElement("br",null))},Ne=(n(110),n(63)),xe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).wrapperRef=r.a.createRef(),n.state={problemHint:[{problem:"2+3",Hint:"\u0639\u0644\u06cc \u0646\u06d2 \u0622\u067e \u06a9\u0648 3 \u0631\u0648\u067e\u06d2 \u0627\u0648\u0631 \u0627\u0633\u0627\u0645\u06c1 \u0646\u06d2 \u0622\u067e \u06a9\u0648 2 \u0631\u0648\u067e\u06d2 \u062f\u06cc\u06d2\u06d4 \u062a\u0648 \u0622\u067e \u06a9\u06d2 \u067e\u0627\u0633 \u06a9\u0644 \u06a9\u062a\u0646\u06d2 \u0631\u0648\u067e\u06d2 \u06c1\u06cc\u06ba\u061f"}],showHint:!1,currentProblem:null},n.handleClickOutside=function(){n.setState({showHint:!1})},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props.currentProblem==e.currentProblem&&this.state.currentProblem||this.setState({currentProblem:this.props.currentProblem})}},{key:"toggleHint",value:function(e){this.setState({showHint:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){e.toggleHint(!0)}},"Show Hint")),r.a.createElement("div",null,this.state.showHint&&r.a.createElement("div",{class:"thought ",style:{color:"black",margin:"auto",width:"50%"},ref:this.wrapperRef},this.state.problemHint[0].Hint)))}}]),t}(r.a.Component),Re=(Object(Ne.a)(xe),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o))))._isMounted=!1,n.state={problem:"",firstNumber:0,secondNumber:0,symbol:"",answer:0,modal:"",modalShowing:!1,streaks:0,images:[G.a,W.a],randomImage:"",data:[],totalProblems:1},n.earnLife=function(){n.props.onEarnLife(),n.showModal("success","STREAK!! You won a life \u2665"),n.setState({streaks:0})},n.correctAnswer=function(){n.state.streaks>2?n.earnLife():n.showModal("success"),n._isMounted&&n.props.onCorretAnswer(),n.setState(function(e){return{streaks:e.streaks+1}}),n.nextProblem()},n.wrongAnswer=function(){n._isMounted&&n.props.onWrongAnswer(),n.setState({streaks:0}),n.showModal("error",D.a.solve(n.state.problem).toString()),n.nextProblem()},n.nextProblem=function(){setTimeout(function(){n.getProblem(),n._isMounted&&n.setState({modalShowing:!1,answer:0,totalProblems:n.state.totalProblems+1}),n.props.lifes>0&&n.answerInput&&n.answerInput.focus()},2500)},n.evaluateProblem=function(){var e=D.a.solve(n.state.problem),t=n.state.answer,a=n.state.firstNumber+"!"+n.state.secondNumber;return B.a.setData(a,t,e),D.a.compare(n.state.problem,n.state.answer)?n.correctAnswer():n.wrongAnswer()},n.keyingUp=function(e){"Enter"===e.key&&n.evaluateProblem();var t=e.target.value;n.setState({answer:Number(t.match(/((-?)\d+)/g))})},n.showModal=function(e,t){n.setState({modal:r.a.createElement(I,{type:e,text:t}),modalShowing:!0})},n.getProblem=function(){var e=D.a.generateSubtractionProblem(n.props.points),t=n.getImage();n._isMounted&&n.setState({problem:e.problem,firstNumber:e.firstNumber,secondNumber:e.secondNumber,symbol:e.symbol,randomImage:t})},n.populateHover=function(){for(var e=[],t=0;t<n.state.firstNumber;t++)e.push(!1);n.setState({hover:e})},n.getImage=function(){return n.state.images[D.a.getRandomInt(0,n.state.images.length-1)]},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(){this.state.totalProblems>B.a.limit&&this.props.onEndGame()}},{key:"componentDidMount",value:function(){this._isMounted=!0,this.getProblem(),this.populateHover()}},{key:"shouldComponentUpdate",value:function(e){return this.props.lifes<1?(this.props.onEndGame(this.state.points),!1):e.lifes>-1}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"show-up",style:{width:"100%",height:"100vh"}},r.a.createElement("div",null,this.state.modalShowing?this.state.modal:r.a.createElement("div",null,"b"!=B.a.dif?r.a.createElement("div",null,r.a.createElement("h1",{style:{fontSize:"3.5em"}}," ",this.state.problem," "),r.a.createElement(ke,{incCount:function(t){e.setState({answer:e.state.answer+t})},decCount:function(t){e.setState({answer:e.state.answer-t})},count:this.state.answer,img:this.state.randomImage})):r.a.createElement("div",null,r.a.createElement("div",{className:"objectRow",style:{width:"100%"}},r.a.createElement("div",{className:"objectLeft"},Object(k.a)(Array(parseInt(this.state.firstNumber))).map(function(t,n){return r.a.createElement("img",{key:n,src:e.state.randomImage,className:"questionImage ",draggable:"false"})})),r.a.createElement("span",{className:"operator",style:{fontSize:"3.5em",textShadow:"1px 1px 1px #ff0000",float:"left",display:"inline"}}," ",this.state.symbol," "),r.a.createElement("div",{className:"objectRight"},Object(k.a)(Array(parseInt(this.state.secondNumber))).map(function(t,n){return r.a.createElement("img",{key:n,src:e.state.randomImage,className:"questionImage ",draggable:"false"})}))),r.a.createElement(ve,{incCount:function(t){e.setState({answer:e.state.answer+t})},decCount:function(t){e.setState({answer:e.state.answer-t})},count:this.state.answer,img:this.state.randomImage})),r.a.createElement("button",{className:"btn fourth answerButton",onClick:this.evaluateProblem}," ",this.state.answer," "))))}}]),t}(r.a.Component)),Ce={fontSize:"1.5em",color:"black",fontFamily:"fantasy",cursor:"pointer"},Pe={height:0,border:"0.5px solid #61dafb"},Me={color:"black",fontWeight:"bold"},Ie=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=Pe,t=Ce,n=Me;return r.a.createElement("div",null,r.a.createElement("h1",null,"GAME OVER"),r.a.createElement("hr",{style:e}),r.a.createElement("h3",null,"FINAL SCORE ",r.a.createElement("b",{style:n},this.props.points)),r.a.createElement("br",null),r.a.createElement("h3",{style:t,onClick:this.props.retryGame},"RETRY"),this.children)}}]),t}(r.a.Component),De=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={seconds:n.props.seconds,level:n.props.level,limit:0,totalProblems:1},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({seconds:this.props.seconds,limit:B.a.limit}),this._secondsIntervalRef=setInterval(function(){return e.setState(function(e){return{seconds:--e.seconds}})},1e3)}},{key:"componentDidUpdate",value:function(){var e=this;this.props.level!==this.state.level&&(B.a.setDataTime(300-this.state.seconds),this.setState(function(t){return{level:e.props.level,totalProblems:e.state.totalProblems+1,seconds:300}}),this.props.setTimeChanged(this.state.seconds))}},{key:"componentWillUnmount",value:function(){clearInterval(this._secondsIntervalRef)}},{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("b",null," ",this.state.totalProblems,"/",this.state.limit," "))}},{key:"timeTaken",value:function(){return 20-this.state.seconds}}]),t}(r.a.Component);De.defaultProps={level:0};var Te=De;var Ge=function(e){var t=e.lifes,n=[];if(t<5)for(var a=0;a<t;a++)n.push(r.a.createElement("i",{key:a,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));else n.push(r.a.createElement("i",{key:t,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));return r.a.createElement("span",{style:{color:N.red}},t>4&&r.a.createElement("b",null,"".concat(t,"x")),n)};function Le(e){var t=e.points;return r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-star",style:{color:N.yellow}})," ",t)}n(111);var We=n(64),Be={container:{display:"flex",justifyContent:"space-around"},el:{flex:1},title:{margin:"0.6em auto"},divider:{border:"0.5px solid ".concat(N.midGray)},timeCol:{flex:1,padding:"0.3em 0em",fontSize:"0.6em",color:N.darkGray},sectionContainer:{textAlign:"left",padding:"0.15em 0em"}};function Ue(e){var t=e.player;return r.a.createElement("div",{style:Be.sectionContainer},r.a.createElement("h5",{style:Be.title},t.name),r.a.createElement("div",{style:Be.container},r.a.createElement("small",{style:Be.timeCol},r.a.createElement("i",{className:"fas fa-clock"})," "+We(new Date(t.time)).fromNow()),r.a.createElement("small",{style:Be.el},r.a.createElement("i",{className:"fas fa-star",style:{color:N.yellow}})," ",t.points)),r.a.createElement("hr",{style:Be.divider}))}function Fe(e){var t=e.points,n=y.get("onlinePlayer"),a=JSON.parse(E.get("scoreTable"))||[];return a.push({name:n,points:t,time:Date.now()}),a=a.sort(function(e,t){return t.points-e.points}).slice(0,4),E.set("scoreTable",JSON.stringify(a)),r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement(Ue,{player:e,key:t})}))}var He=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={isBeginningDone:!1,lastPoints:0},n.retryGame=function(){n.setState({isBeginningDone:!1}),n.props.onRetryGame()},n.completeBeginning=function(){n.setState({isBeginningDone:!0})},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.props.isFinished?r.a.createElement(Ie,Object.assign({},this.props,{retryGame:this.retryGame}),r.a.createElement(Fe,this.props)):r.a.createElement("div",null,this.state.isBeginningDone?r.a.createElement("div",{className:"noselect "},r.a.createElement("div",{className:"App-header-bar"},r.a.createElement(Te,this.props),r.a.createElement(Ge,this.props),r.a.createElement(Le,this.props)),r.a.createElement("div",null,r.a.createElement(Re,this.props))):r.a.createElement(j,{isComplete:this.completeBeginning}))}}]),t}(r.a.Component),ze=(n(112),n(65)),Ke=n.n(ze),Ve=n(66),Ye=n.n(Ve);var qe=n(67),Je=n.n(qe),Xe=n(45),$e=n.n(Xe),Qe=n(68),Ze=n.n(Qe),et=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={img:$e.a,sound:new Audio(Je.a)},n.gameStart=function(){n.props.onStartGame()},n.handleSoundClick=function(){n.state.sound.paused?n.state.sound.paused&&(n.state.sound.play(),n.setState({img:$e.a})):(n.state.sound.pause(),n.setState({img:Ze.a}))},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"handleURL",value:function(){}},{key:"componentDidMount",value:function(){this.state.sound.play()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"b"==B.a.dif?r.a.createElement("img",{src:Ke.a,id:"bg",alt:""}):r.a.createElement("img",{src:Ye.a,id:"bg",alt:""}),r.a.createElement("div",null,r.a.createElement("img",{alt:"mute",src:this.state.img,style:{position:"fixed",top:"20px",left:"20px",maxWidth:"40px",width:"100%",zIndex:4},onClick:this.handleSoundClick})),this.props.isStarted?r.a.createElement(He,Object.assign({},this.props,{gameStart:this.gameStart})):r.a.createElement(A,{startPressed:this.gameStart})))}}]),t}(a.Component),tt=Object(i.b)(function(e){return{points:e.points,lifes:e.lifes,seconds:e.seconds,level:e.level,isFinished:e.isFinished,isStarted:e.isStarted}},function(e){return{onCorretAnswer:function(t){return e(function(e){e({type:"CORRECT_ANSWER",payload:{points:100,level:1}})})},onWrongAnswer:function(){return e(function(e){e({type:"REMOVE_LIVE",payload:{level:1,lives:1}})})},setTimeChanged:function(t){return e((n=t,function(e){e({type:"SET_TIME",payload:n})}));var n},onEndGame:function(){return e(h(!0))},onRetryGame:function(){return e(h(!1))},onReStartGame:function(){return e(function(e){e({type:"REBOOT_GAME"})})},onStartGame:function(){return e(function(e){e({type:"START_GAME"})})},onEarnLife:function(){return e(function(e){e({type:"EARN_LIFE"})})}}})(et),nt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function at(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(i.a,{store:m},r.a.createElement(tt,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Subtraction_CountingObjects",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Subtraction_CountingObjects","/service-worker.js");nt?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):at(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):at(t,e)})}}()}],[[69,1,2]]]);
//# sourceMappingURL=main.2b606b82.chunk.js.map