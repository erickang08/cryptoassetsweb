(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c09b9c8"],{7424:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleAddExchange}},[e._v("新建")]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}])}),n("el-table-column",{attrs:{label:"平台",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.exchange_name))])]}}])}),n("el-table-column",{attrs:{label:"个性名",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.nick_name))])]}}])}),n("el-table-column",{attrs:{label:"API Key"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.api_key)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),n("span",[e._v(e._s(t.row.create_at))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return e.handleDeleteKey(t)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{visible:e.dialogVisible,title:e.新建平台},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{attrs:{model:e.exchange,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"平台"}},[n("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.exchange.exchange_name,callback:function(t){e.$set(e.exchange,"exchange_name",t)},expression:"exchange.exchange_name"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"个性名"}},[n("el-input",{attrs:{placeholder:"我是大户"},model:{value:e.exchange.nick_name,callback:function(t){e.$set(e.exchange,"nick_name",t)},expression:"exchange.nick_name"}})],1),n("el-form-item",{attrs:{label:"API Key"}},[n("el-input",{attrs:{placeholder:"3911702320"},model:{value:e.exchange.api_key,callback:function(t){e.$set(e.exchange,"api_key",t)},expression:"exchange.api_key"}})],1),n("el-form-item",{attrs:{label:"Sec Key"}},[n("el-input",{attrs:{placeholder:"3911702320"},model:{value:e.exchange.sec_key,callback:function(t){e.$set(e.exchange,"sec_key",t)},expression:"exchange.sec_key"}})],1),n("el-form-item",{attrs:{label:"Pass Key"}},[n("el-input",{attrs:{placeholder:"3911702320"},model:{value:e.exchange.pass_key,callback:function(t){e.$set(e.exchange,"pass_key",t)},expression:"exchange.pass_key"}})],1)],1),n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.confirmAdding}},[e._v("确认")])],1)],1)],1)},i=[],l=(n("99af"),n("c975"),n("fb6a"),n("a434"),n("96cf"),n("1da1")),c=n("b775");function r(){return Object(c["a"])({url:"/setting",method:"get"})}function o(e){return Object(c["a"])({url:"/setting",method:"post",data:e})}function s(e){return Object(c["a"])({url:"/setting/".concat(e),method:"delete"})}function u(){return Object(c["a"])({url:"/support",method:"get"})}var d=n("ed08"),h={data:function(){return{dialogVisible:!1,list:[],listLoading:!0,exchange:{},options:[],value:""}},created:function(){this.fetchSupport(),this.fetchData()},methods:{fetchSupport:function(){var e=this;this.listLoading=!0,u().then((function(t){for(var n=t.data,a=0;a<n.length;a++)e.options.push({value:n[a],label:n[a]});e.listLoading=!1}))},fetchData:function(){var e=this;r().then((function(t){for(var n=0;n<t.data.length;n++){var a=t.data[n];e.list.push({id:a.ID,exchange_name:a.exchange_name,nick_name:a.nick_name,api_key:a.api_key,create_at:Object(d["b"])(a.CreatedAt)})}}))},handleAddExchange:function(){this.dialogVisible=!0},handleDeleteKey:function(e){var t=this,n=e.row;this.$confirm("确认要删除 ["+n.exchange_name+" - "+n.nick_name+" ] ?","Warning",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s(n.id);case 2:a=t.list.indexOf(n),t.list.splice(a,1),t.$message({type:"success",message:"删除成功!"});case 5:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},confirmAdding:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,a,i,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={exchange_name:e.exchange.exchange_name,nick_name:e.exchange.nick_name,api_key:e.exchange.api_key,sec_key:e.exchange.sec_key,pass_key:e.exchange.pass_key},t.next=3,o(n);case 3:a=t.sent,i=a.data,e.exchange.id=i.id,e.exchange.create_at=i.create_at,e.list.push(e.exchange),l=e.exchange.exchange_name,c=e.exchange.api_key.slice(0,8),e.dialogVisible=!1,e.$notify({title:"添加成功",dangerouslyUseHTMLString:!0,message:"\n            <div>平台: ".concat(l,"</div>\n   \t        <div>API Key: ").concat(c,"</div>\n       "),type:"success"});case 12:case"end":return t.stop()}}),t)})))()}}},f=h,g=n("2877"),p=Object(g["a"])(f,a,i,!1,null,null,null);t["default"]=p.exports},a434:function(e,t,n){"use strict";var a=n("23e7"),i=n("23cb"),l=n("a691"),c=n("50c4"),r=n("7b0b"),o=n("65f0"),s=n("8418"),u=n("1dde"),d=n("ae40"),h=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,p=Math.min,m=9007199254740991,b="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!h||!f},{splice:function(e,t){var n,a,u,d,h,f,_=r(this),x=c(_.length),v=i(e,x),y=arguments.length;if(0===y?n=a=0:1===y?(n=0,a=x-v):(n=y-2,a=p(g(l(t),0),x-v)),x+n-a>m)throw TypeError(b);for(u=o(_,a),d=0;d<a;d++)h=v+d,h in _&&s(u,d,_[h]);if(u.length=a,n<a){for(d=v;d<x-a;d++)h=d+a,f=d+n,h in _?_[f]=_[h]:delete _[f];for(d=x;d>x-a+n;d--)delete _[d-1]}else if(n>a)for(d=x-a;d>v;d--)h=d+a-1,f=d+n-1,h in _?_[f]=_[h]:delete _[f];for(d=0;d<n;d++)_[d+v]=arguments[d+2];return _.length=x-a+n,u}})},ed08:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n("4160"),n("a630"),n("c975"),n("a15b"),n("baa5"),n("d81d"),n("fb6a"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("6062"),n("3ca3"),n("466d"),n("4d90"),n("5319"),n("1276"),n("159b"),n("ddb0"),n("53ca");function a(e){var t=e.split("."),n=t[0].replace("T"," ");return n}function i(e,t,n){var a,i,l,c,r,o=function o(){var s=+new Date-c;s<t&&s>0?a=setTimeout(o,t-s):(a=null,n||(r=e.apply(l,i),a||(l=i=null)))};return function(){for(var i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];l=this,c=+new Date;var d=n&&!a;return a||(a=setTimeout(o,t)),d&&(r=e.apply(l,s),l=s=null),r}}}}]);