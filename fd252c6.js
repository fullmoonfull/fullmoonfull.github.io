(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{294:function(t,e,o){var r=o(0),c=o(295),n=o(148);r({target:"Array",proto:!0},{fill:c}),n("fill")},295:function(t,e,o){"use strict";var r=o(29),c=o(81),n=o(36);t.exports=function(t){for(var e=r(this),o=n(e),d=arguments.length,l=c(d>1?arguments[1]:void 0,o),h=d>2?arguments[2]:void 0,k=void 0===h?o:c(h,o);k>l;)e[l++]=t;return e}},297:function(t,e,o){"use strict";o.r(e);o(290);var r=o(13),c=o(116),n=o(146),d=o(147),l=o(292),h=o(293),k=o(289),f=o(30),v=(o(54),o(65),o(22),o(66),o(43),o(294),o(291));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=Object(k.a)(t);if(e){var c=Object(k.a)(this).constructor;o=Reflect.construct(r,arguments,c)}else o=r.apply(this,arguments);return Object(h.a)(this,o)}}var x=function(t,e,o,desc){var r,c=arguments.length,n=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(n=(c<3?r(n):c>3?r(e,o,n):r(e,o))||n);return c>3&&n&&Object.defineProperty(e,o,n),n},m=function(t){Object(l.a)(v,t);var e,o,h,k,f=y(v);function v(){var t;return Object(n.a)(this,v),(t=f.apply(this,arguments)).blocks={0:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],1:[[0,0,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],2:[[0,0,0,0],[0,2,2,0],[0,0,0,0],[0,0,0,0]],3:[[0,0,0,0],[0,3,3,0],[0,0,0,0],[0,0,0,0]],4:[[0,0,0,0],[0,4,4,0],[0,0,0,0],[0,0,0,0]],5:[[0,0,0,0],[0,5,5,0],[0,0,0,0],[0,0,0,0]],6:[[0,0,0,0],[0,6,6,0],[0,0,0,0],[0,0,0,0]],7:[[0,0,0,0],[0,7,7,0],[0,0,0,0],[0,0,0,0]],8:[[0,0,0,0],[0,0,Math.floor(7*Math.random())+1,0],[0,0,Math.floor(7*Math.random())+1,0],[0,0,0,0]],1001:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]},t.data={board:{data:[],x:7,y:18},block:{type:0,data:[],x:0,y:0},next:0,stock:{type:0,data:[],stocked:!1},started:!1,gameover:!1,intervalId:void 0,score:0,level:1,description:!1},t.watch={score:function(t){this.level>=10||t>=100*Math.pow(this.level+1,3)&&(this.level+=1,this.resetTimer())}},t.FH=t.data.board.y,t.FW=t.data.board.x,t.m=0,t}return Object(d.a)(v,[{key:"blockClass",value:function(t){switch(t){case 1:return"block-i";case 2:return"block-o";case 3:return"block-t";case 4:return"block-j";case 5:return"block-l";case 6:return"block-s";case 7:return"block-z";default:return""}}},{key:"display",value:function(){var t=JSON.parse(JSON.stringify(this.data.board.data));if(0===this.data.block.data.length)return t;for(var e=0;e<this.data.block.data.length;e++)for(var o=0;o<this.data.block.data[e].length;o++){var r=this.data.block.y+e,c=this.data.block.x+o;r<0||c<0||r>this.data.board.y-1||c>this.data.board.x-1||0!==this.data.block.data[e][o]&&(t[e+this.data.block.y][o+this.data.block.x]=this.data.block.data[e][o])}return t}},{key:"display2",value:function(){var t=JSON.parse(JSON.stringify(this.data.board.data));if(0===this.data.block.data.length)return t;var e=[],o=[],r=[],c=[],n=0,d=0,l=0,h=0;e[0]=[this.data.block.data[0][0],0,0,0],e[1]=[this.data.block.data[1][0],0,0,0],e[2]=[this.data.block.data[2][0],0,0,0],e[3]=[this.data.block.data[3][0],0,0,0],o[0]=[0,this.data.block.data[0][1],0,0],o[1]=[0,this.data.block.data[1][1],0,0],o[2]=[0,this.data.block.data[2][1],0,0],o[3]=[0,this.data.block.data[3][1],0,0],r[0]=[0,0,this.data.block.data[0][2],0],r[1]=[0,0,this.data.block.data[1][2],0],r[2]=[0,0,this.data.block.data[2][2],0],r[3]=[0,0,this.data.block.data[3][2],0],c[0]=[0,0,0,this.data.block.data[0][3]],c[1]=[0,0,0,this.data.block.data[1][3]],c[2]=[0,0,0,this.data.block.data[2][3]],c[3]=[0,0,0,this.data.block.data[3][3]];for(var i=0;i<15;){if(!this.canMove(e,this.data.block.x,this.data.block.y+1+n)){console.log(n);break}n+=1,i++}for(i=0;i<15;){if(!this.canMove(o,this.data.block.x,this.data.block.y+1+d)){console.log(d);break}d+=1,i++}for(i=0;i<15;){if(!this.canMove(r,this.data.block.x,this.data.block.y+1+l)){console.log(l);break}l+=1,i++}for(i=0;i<15;){if(!this.canMove(c,this.data.block.x,this.data.block.y+1+h)){console.log(h);break}h+=1,i++}for(var k=0;k<e.length;k++)for(var f=0;f<e[k].length;f++){var v=this.data.block.y+k,y=this.data.block.x+f;v<0||y<0||v>this.data.board.y-1||y>this.data.board.x-1||0!==e[k][f]&&(t[k+this.data.block.y+n][f+this.data.block.x]=e[k][f])}for(var x=0;x<o.length;x++)for(var m=0;m<o[x].length;m++){var w=this.data.block.y+x,_=this.data.block.x+m;w<0||_<0||w>this.data.board.y-1||_>this.data.board.x-1||0!==o[x][m]&&(t[x+this.data.block.y+d][m+this.data.block.x]=o[x][m])}for(var F=0;F<r.length;F++)for(var O=0;O<r[F].length;O++){var C=this.data.block.y+F,M=this.data.block.x+O;C<0||M<0||C>this.data.board.y-1||M>this.data.board.x-1||0!==r[F][O]&&(t[F+this.data.block.y+l][O+this.data.block.x]=r[F][O])}for(var j=0;j<c.length;j++)for(var R=0;R<c[j].length;R++){var S=this.data.block.y+j,B=this.data.block.x+R;S<0||B<0||S>this.data.board.y-1||B>this.data.board.x-1||0!==c[j][R]&&(t[j+this.data.block.y+h][R+this.data.block.x]=c[j][R])}return t}},{key:"nextBlock",value:function(){return this.blocks[this.data.next]}},{key:"stockBlock",value:function(){return this.blocks[this.data.stock.type]}},{key:"created",value:function(){this.clear()}},{key:"mounted",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"beforeDestroy",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"start",value:function(){this.clear(),this.setNext(),this.setBlock(),this.data.started=!0,this.startTimer()}},{key:"end",value:function(){this.data.started=!1,this.data.gameover=!0,this.stopTimer()}},{key:"startTimer",value:function(){this.data.intervalId=setInterval(this.down,1e3-100*(this.data.level-1))}},{key:"stopTimer",value:function(){clearInterval(this.data.intervalId)}},{key:"resetTimer",value:function(){this.stopTimer(),this.startTimer()}},{key:"clear",value:function(){var t=this;this.data.board.data=Object(c.a)(Array(this.data.board.y)).map((function(){return Array(t.data.board.x).fill(0)})),this.data.gameover=!1,this.data.score=0,this.data.level=1,this.data.stock={type:0,stocked:!1}}},{key:"setBlock",value:function(){this.setNext(),this.initBlock()}},{key:"initBlock",value:function(){for(this.data.block.x=2,this.data.block.y=1===this.data.block.type?0:-1,this.data.block.data=this.data.block.data,console.log("initBlock()"),console.log(this.data);this.isOverlap();)this.data.block.y-=1}},{key:"isOverlap",value:function(){for(var t=0;t<this.data.block.data.length;t++){var e=this.data.block.y+t;if(!(e<0))for(var o=0;o<this.data.block.data[t].length;o++){var r=this.data.block.x+o;if(this.data.block.data[t][o]>0&&this.data.board.data[e][r]>0)return!0}}return!1}},{key:"setNext",value:function(){this.data.block.data=this.blocks[this.data.next],this.data.block.type=this.data.next,this.data.next=8,console.log("this.data.next"),console.log(this.data.next),this.blocks[8]=[[0,0,0,0],[0,0,Math.floor(4*Math.random())+1,0],[0,0,Math.floor(4*Math.random())+1,0],[0,0,0,0]]}},{key:"setStock",value:function(){if(!this.data.stock.stocked){if(0===this.data.stock.type)this.data.stock.type=1001,this.blocks[1001]=this.data.block.data,console.log(this.blocks),this.setBlock();else{var t=this.blocks[this.data.stock.type];this.blocks[1001]=this.data.block.data,this.data.block.data=t,this.data.stock.stocked=!0}this.resetTimer()}}},{key:"handleKeydown",value:(k=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),39!==e.keyCode){t.next=5;break}this.right(),t.next=15;break;case 5:if(37!==e.keyCode){t.next=9;break}this.left(),t.next=15;break;case 9:if(38!==e.keyCode){t.next=14;break}return t.next=12,this.downBottom();case 12:t.next=15;break;case 14:40===e.keyCode?this.down():16===e.keyCode?this.setStock():32===e.keyCode&&this.rotate();case 15:case"end":return t.stop()}}),t,this)}))),function(t){return k.apply(this,arguments)})},{key:"right",value:function(){this.canMove(this.data.block.data,this.data.block.x+1,this.data.block.y)&&(this.data.block.x+=1)}},{key:"left",value:function(){this.canMove(this.data.block.data,this.data.block.x-1,this.data.block.y)&&(this.data.block.x-=1)}},{key:"rotate",value:function(){for(var t=JSON.parse(JSON.stringify(this.data.block.data)),e=0;e<t.length;e++)for(var o=0;o<t[e].length;o++)t[t.length-o-1][e]=this.data.block.data[e][o];this.canMove(t,this.data.block.x,this.data.block.y)&&(this.data.block.data=t)}},{key:"down",value:(h=Object(r.a)(regeneratorRuntime.mark((function t(){var g,e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.canMove(this.data.block.data,this.data.block.x,this.data.block.y+1)){t.next=4;break}return this.data.block.y+=1,this.resetTimer(),t.abrupt("return",!0);case 4:if(this.data.board.data=this.display2(),g=1===this.data.block.type?0:-1,!(this.data.block.y<g)){t.next=9;break}return this.end(),t.abrupt("return");case 9:this.data.stock.stocked=!1,this.setBlock(),e=!0;case 12:if(!e){t.next=22;break}return this.DeletePuyo(),o=void 0,t.next=17,this.FallPuyoAuto().then((function(t){console.log("value"),console.log(t),o=t}));case 17:0===o&&(e=!1),console.log("test"),console.log(e),t.next=12;break;case 22:return t.abrupt("return",!1);case 23:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)})},{key:"downBottom",value:(o=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.down();case 2:if(!t.sent){t.next=5;break}t.next=0;break;case 5:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"canMove",value:function(t,e,o){for(var r=0;r<t.length;r++)for(var c=0;c<t[r].length;c++){if(e+c<0&&t[r][c]>0)return!1;if(e+c>this.data.board.x-1&&t[r][c]>0)return!1;if(o+r>this.data.board.y-1&&t[r][c]>0)return!1;if(o+r<0&&t[r][c]>0)return!1;if(!(e+c<0||e+c>this.data.board.x-1||o+r>this.data.board.y-1||o+r<0)&&(this.data.board.data[o+r][e+c]>0&&t[r][c]>0))return!1}return!0}},{key:"deleteLine",value:function(){for(var t=[],e=0;e<this.data.board.y;e++){for(var o=1,r=0;r<this.data.board.x;r++)o*=this.data.board.data[e][r];o>0&&t.push(e)}for(var i=0;i<t.length;i++){for(var c=t[i],n=0;n<this.data.board.x;n++)this.data.board.data[c][n]=0;for(var d=c;d>1;d--)this.data.board.data[d]=this.data.board.data[d-1]}this.setScore(t.length)}},{key:"CopyField",value:function(t){return t}},{key:"DeletePuyo",value:function(){var t,e,o,r=0;for(this.Field=JSON.parse(JSON.stringify(this.data.board.data)),console.log(this.Field),o=this.CopyField(this.Field),e=0;e<this.FH;e++)for(t=0;t<this.FW;t++){0!=this.Field[e][t]&&(this.m=0,this.Count(e,t),this.m>=4&&(this.Vanish(o,e,t),r+=this.m))}return this.setScore(r),this.Field=this.CopyField(o),r}},{key:"Vanish",value:function(t,e,o){var r=t[e][o];t[e][o]=0,e+1<this.FH&&t[e+1][o]==r&&this.Vanish(t,e+1,o),o+1<this.FW&&t[e][o+1]==r&&this.Vanish(t,e,o+1),o-1>=0&&t[e][o-1]==r&&this.Vanish(t,e,o-1),e-1>=0&&t[e-1][o]==r&&this.Vanish(t,e-1,o),this.data.board.data=t}},{key:"Count",value:function(t,e){var o=this.Field[t][e];this.Field[t][e]=0,this.m++,t+1<this.FH&&this.Field[t+1][e]==o&&this.Count(t+1,e),e+1<this.FW&&this.Field[t][e+1]==o&&this.Count(t,e+1),e-1>=0&&this.Field[t][e-1]==o&&this.Count(t,e-1),t-1>=0&&this.Field[t-1][e]==o&&this.Count(t-1,e),this.Field[t][e]=o}},{key:"FallPuyo",value:function(){var t,e,o,r=0;for(this.Field=JSON.parse(JSON.stringify(this.data.board.data)),t=0;t<this.FW;t++)for(e=this.FH-1;e>=0;e--)if(0==this.Field[e][t]){for(o=e-1;o>=0&&0==this.Field[o][t];o--);if(o<0)break;for(r++,o=e;o>=0;o--)this.Field[o][t]=o-1>=0?this.Field[o-1][t]:0;break}return this.data.board.data=this.Field,r}},{key:"FallPuyoAuto",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0;case 1:if(!this.FallPuyo()){t.next=7;break}return t.next=4,new Promise((function(t){return setTimeout(t,100)}));case 4:e+=100,t.next=1;break;case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"setScore",value:function(t){this.data.score+=10*Math.pow(t,3)}}]),v}(v.Vue),w=m=x([Object(v.Component)({})],m),_=(o(315),o(53)),component=Object(_.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"board"},[o("table",[o("tbody",t._l(t.display(),(function(b,i){return o("tr",{key:i},t._l(b,(function(e,r){return o("td",{key:r,staticClass:"block",class:t.blockClass(e)})})),0)})),0)]),t._v(" "),t.data.gameover?o("div",{staticClass:"gameover"},[o("span",[t._v("GAME OVER")])]):t._e()]),t._v(" "),o("div",[o("div",{staticClass:"block-disp"},[o("h2",[t._v("Next")]),t._v(" "),o("table",[o("tbody",t._l(t.nextBlock(),(function(b,i){return o("tr",{key:i},t._l(b,(function(e,r){return o("td",{key:r,staticClass:"block",class:t.blockClass(e)})})),0)})),0)])]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"block-disp"},[o("h2",[t._v("Stock")]),t._v(" "),o("table",[o("tbody",t._l(t.stockBlock(),(function(b,i){return o("tr",{key:i},t._l(b,(function(e,r){return o("td",{key:r,staticClass:"block",class:t.blockClass(e)})})),0)})),0)])]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"num-disp"},[o("h2",[t._v("Score")]),t._v(" "),o("p",[t._v(t._s(t.data.score))])]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"num-disp"},[o("h2",[t._v("Level")]),t._v(" "),o("p",[t._v(t._s(t.data.level))])]),t._v(" "),o("br"),t._v(" "),o("button",{staticClass:"start",attrs:{disabled:t.data.started},on:{click:t.start}},[t._v("Start")]),t._v(" "),o("br")])])}),[],!1,null,"7045729c",null);e.default=component.exports},305:function(t,e,o){var content=o(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(114).default)("c3f185fe",content,!0,{sourceMap:!1})},315:function(t,e,o){"use strict";o(305)},316:function(t,e,o){var r=o(113)(!1);r.push([t.i,"#app[data-v-7045729c]{display:flex;position:relative}#app[data-v-7045729c]>:first-child{margin-right:20px}.board[data-v-7045729c]{padding:30px;background:#1c1c1c;position:relative}.block[data-v-7045729c]{width:30px;height:30px;background:#252525;border:.1px solid rgba(0,0,0,.2)}.block-i[data-v-7045729c]{background:#3498db}.block-o[data-v-7045729c]{background:#f1c40f}.block-t[data-v-7045729c]{background:#9b59b6}.block-j[data-v-7045729c]{background:#1e3799}.block-l[data-v-7045729c]{background:#e67e22}.block-s[data-v-7045729c]{background:#2ecc71}.block-z[data-v-7045729c]{background:#e74c3c}.block-disp[data-v-7045729c]{padding:15px;background:#1c1c1c}.block-disp>h2[data-v-7045729c]{color:#bdc3c7;font-size:12px}.block-disp .block[data-v-7045729c]{width:20px;height:20px}.gameover[data-v-7045729c]{display:block;position:absolute;top:calc(50% - 50px);left:0;width:100%;text-align:center;font-size:24px;font-weight:700;padding:20px 0;color:#f39c12;background:#222;opacity:.9}.num-disp[data-v-7045729c]{padding:10px;background:#1c1c1c}.num-disp>h2[data-v-7045729c]{color:#bdc3c7;font-size:12px}.num-disp>p[data-v-7045729c]{background:#252525;padding:7px;color:#fff}.start[data-v-7045729c]{display:block;width:100%;padding:20px;border:none;outline:none;background:#16a085;color:#fff;font-size:20px;border-radius:10px;cursor:pointer}.start[data-v-7045729c]:disabled{opacity:.4;cursor:default}body[data-v-7045729c]{background:#333}.description[data-v-7045729c]{color:#fff;position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.9);z-index:100;padding:50px}.description>h2[data-v-7045729c]{font-size:32px;margin-bottom:30px}.description>h3[data-v-7045729c]{font-size:24px;margin-bottom:20px}.description>ul[data-v-7045729c]{margin-left:30px;margin-bottom:40px}.description>ul>li[data-v-7045729c]{line-height:30px}a[data-v-7045729c]{cursor:pointer;color:#16a085;font-size:16px;text-decoration:underline}.description-enter-active[data-v-7045729c],.description-leave-active[data-v-7045729c]{transition:all .6s}.description-enter[data-v-7045729c],.description-leave-to[data-v-7045729c]{opacity:0}",""]),t.exports=r}}]);