(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"11f5":function(t,e,a){"use strict";var s=a("a485"),i=a.n(s);e["default"]=i.a},8543:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,filter:t.filter,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:"Supplier"!==t.$q.localStorage.getItem("staff_type")&&"Customer"!==t.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Supplier' &&\n                        $q.localStorage.getItem('staff_type') !== 'Customer'\n                       "}],attrs:{label:t.$t("refresh"),icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             "+t._s(t.$t("refreshtip"))+"\n           ")])],1)],1),a("q-space"),a("q-input",{staticClass:"cordova-search",attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:t.$t("search")},on:{blur:function(e){return t.getSearchList()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getSearchList()}},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"},on:{click:function(e){return t.getSearchList()}}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"asn_code",attrs:{props:e}},[t._v("\n           "+t._s(e.row.asn_code)+"\n         ")]),a("q-td",{key:"asn_status",attrs:{props:e}},[t._v("\n           "+t._s(e.row.asn_status)+"\n         ")]),a("q-td",{key:"total_weight",attrs:{props:e}},[t._v("\n           "+t._s(e.row.total_weight)+"\n         ")]),a("q-td",{key:"total_volume",attrs:{props:e}},[t._v("\n           "+t._s(e.row.total_volume)+"\n         ")]),a("q-td",{key:"supplier",attrs:{props:e}},[t._v("\n           "+t._s(e.row.supplier)+"\n         ")]),a("q-td",{key:"creater",attrs:{props:e}},[t._v("\n           "+t._s(e.row.creater)+"\n         ")]),a("q-td",{key:"create_time",attrs:{props:e}},[t._v("\n           "+t._s(e.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:e}},[t._v("\n           "+t._s(e.row.update_time)+"\n         ")]),a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:e}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:"Supplier"!==t.$q.localStorage.getItem("staff_type")&&"Customer"!==t.$q.localStorage.getItem("staff_type")&&"Outbound"!==t.$q.localStorage.getItem("staff_type")&&"StockControl"!==t.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Supplier' &&\n                          $q.localStorage.getItem('staff_type') !== 'Customer' &&\n                          $q.localStorage.getItem('staff_type') !== 'Outbound' &&\n                          $q.localStorage.getItem('staff_type') !== 'StockControl'\n                         "}],attrs:{round:"",flat:"",push:"",color:"info",icon:"visibility"},on:{click:function(a){return t.viewData(e.row)}}})],1)],1)]}}])})],1),[a("div",{staticClass:"q-pa-md flex flex-center cordova-footer"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("previous"),icon:"navigate_before"},on:{click:function(e){return t.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("next"),"icon-right":"navigate_next"},on:{click:function(e){return t.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.pathname_previous&&!t.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)],a("q-dialog",{model:{value:t.viewForm,callback:function(e){t.viewForm=e},expression:"viewForm"}},[a("q-card",{attrs:{id:"printMe"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v(t._s(t.viewAsn))]),a("q-space")],1),a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Sender: "+t._s(t.supplier_detail.supplier_name))]),a("div",{staticClass:"text-subtitle2"},[t._v("Address: "+t._s(t.supplier_detail.supplier_city)+t._s(t.supplier_detail.supplier_address))]),a("div",{staticClass:"text-subtitle2"},[t._v("Tel: "+t._s(t.supplier_detail.supplier_contact))]),a("div",{staticClass:"text-h6"},[t._v("Receiver: "+t._s(t.warehouse_detail.warehouse_name))]),a("div",{staticClass:"text-subtitle2"},[t._v("Address: "+t._s(t.warehouse_detail.warehouse_city)+t._s(t.warehouse_detail.warehouse_address))]),a("div",{staticClass:"text-subtitle2"},[t._v("Tel: "+t._s(t.warehouse_detail.warehouse_contact))])]),a("q-markup-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Goods Code")]),a("th",{staticClass:"text-right"},[t._v("Goods QTY")]),a("th",{staticClass:"text-right"},[t._v("Goods Weight(Unit: KG)")]),a("th",{staticClass:"text-right"},[t._v("Goods Volume(Unit: Cubic Metres)")]),a("th",{staticClass:"text-right"},[t._v("Receive QTY")]),a("th",{staticClass:"text-right"},[t._v("Comments")])])]),a("tbody",t._l(t.viewprint_table,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-left"},[t._v(t._s(e.goods_code))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.goods_qty))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.goods_weight))]),a("td",{staticClass:"text-right"},[t._v(t._s(e.goods_volume))]),a("td",{staticClass:"text-right"}),a("td",{staticClass:"text-right"})])})),0)])],1)],1)],2)},i=[],n=(a("5319"),a("3004")),o=a("a639"),r=a("18d6"),l={name:"Pageasnlist_scan",data(){return{openid:"",login_name:"",authin:"0",pathname:"asn/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],viewprint_table:[],warehouse_detail:{},supplier_list:[],supplier_detail:{},columns:[{name:"asn_code",required:!0,label:this.$t("inbound.view_asn.asn_code"),align:"left",field:"asn_code"},{name:"asn_status",label:this.$t("inbound.view_asn.asn_status"),field:"asn_status",align:"center"},{name:"total_weight",label:this.$t("inbound.view_asn.total_weight"),field:"total_weight",align:"center"},{name:"total_volume",label:this.$t("inbound.view_asn.total_volume"),field:"total_volume",align:"center"},{name:"supplier",label:this.$t("baseinfo.view_supplier.supplier_name"),field:"supplier",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},viewForm:!1,viewAsn:"",viewid:0}},methods:{getList(){var t=this;r["a"].has("auth")&&Object(n["d"])(t.pathname+"list/",{}).then((e=>{if(t.table_list=e.results,t.supplier_list=e.supplier_list,e.previous){var a=e.previous.split(":")[0],s=e.previous.replace(a,window.location.href.split(":")[0]);t.pathname_previous=s}else t.pathname_previous=e.previous;if(e.next){var i=e.next.split(":")[0],n=e.next.replace(i,window.location.href.split(":")[0]);t.pathname_next=n}else t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getSearchList(){var t=this;r["a"].has("auth")&&Object(n["d"])(t.pathname+"list/?asn_code__icontains="+t.filter,{}).then((e=>{if(t.table_list=e.results,t.supplier_list=e.supplier_list,e.previous){var a=e.previous.split(":")[0],s=e.previous.replace(a,window.location.href.split(":")[0]);t.pathname_previous=s}else t.pathname_previous=e.previous;if(e.next){var i=e.next.split(":")[0],n=e.next.replace(i,window.location.href.split(":")[0]);t.pathname_next=n}else t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;r["a"].has("auth")&&Object(n["d"])(t.pathname_previous,{}).then((e=>{if(t.table_list=e.results,t.supplier_list=e.supplier_list,e.previous){var a=e.previous.split(":")[0],s=e.previous.replace(a,window.location.href.split(":")[0]);t.pathname_previous=s}else t.pathname_previous=e.previous;if(e.next){var i=e.next.split(":")[0],n=e.next.replace(i,window.location.href.split(":")[0]);t.pathname_next=n}else t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;r["a"].has("auth")&&Object(n["d"])(t.pathname_next,{}).then((e=>{if(t.table_list=e.results,t.supplier_list=e.supplier_list,e.previous){var a=e.previous.split(":")[0],s=e.previous.replace(a,window.location.href.split(":")[0]);t.pathname_previous=s}else t.pathname_previous=e.previous;if(e.next){var i=e.next.split(":")[0],n=e.next.replace(i,window.location.href.split(":")[0]);t.pathname_next=n}else t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.getList()},viewData(t){var e=this;Object(n["a"])(e.pathname+"viewprint/"+t.id+"/").then((a=>{e.viewprint_table=a.asn_detail,e.warehouse_detail=a.warehouse_detail,e.supplier_detail=a.supplier_detail,e.viewAsn=t.asn_code,e.viewForm=!0}))}},created(){var t=this;r["a"].has("openid")?t.openid=r["a"].getItem("openid"):(t.openid="",r["a"].set("openid","")),r["a"].has("login_name")?t.login_name=r["a"].getItem("login_name"):(t.login_name="",r["a"].set("login_name","")),r["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0",o["a"].has("goods_code")||o["a"].set("goods_code",[])},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-170)+"px":t.height=t.$q.screen.height-170+"px"},updated(){},destroyed(){}},p=l,c=a("2877"),u=a("11f5"),_=a("eaac"),d=a("e7a9"),h=a("9c40"),v=a("05c0"),m=a("2c91"),f=a("27f9"),g=a("0016"),w=a("bd08"),b=a("db86"),x=a("24e8"),y=a("f09f"),q=a("d847"),$=a("a370"),k=a("2bb1"),C=a("eebe"),S=a.n(C),I=Object(c["a"])(p,s,i,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(I);e["default"]=I.exports;S()(I,"components",{QTable:_["a"],QBtnGroup:d["a"],QBtn:h["a"],QTooltip:v["a"],QSpace:m["a"],QInput:f["a"],QIcon:g["a"],QTr:w["a"],QTd:b["a"],QDialog:x["a"],QCard:y["a"],QBar:q["a"],QCardSection:$["a"],QMarkupTable:k["a"]})},a485:function(t,e){}}]);