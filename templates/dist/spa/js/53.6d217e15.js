(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{1151:function(o,e,t){"use strict";var s=t("71d3"),i=t.n(s);e["default"]=i.a},"71d3":function(o,e){},f57a:function(o,e,t){"use strict";t.r(e);var s=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[t("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[t("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:o.table_list,"row-key":"id",separator:o.separator,loading:o.loading,filter:o.filter,columns:o.columns,"hide-bottom":"",pagination:o.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:o.height},flat:"",bordered:""},on:{"update:pagination":function(e){o.pagination=e}},scopedSlots:o._u([{key:"top",fn:function(){return[t("q-btn-group",{attrs:{push:""}},[t("q-btn",{attrs:{label:o.$t("refresh")},on:{click:function(e){return o.reFresh()}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[o._v(o._s(o.$t("refreshtip")))])],1)],1),t("q-space"),t("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:o.$t("search")},on:{blur:function(e){return o.getSearchList()},keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.getSearchList()}},model:{value:o.filter,callback:function(e){o.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(e){return[t("q-tr",{attrs:{props:e}},[e.row.id===o.editid?[t("q-td",{key:"goods_code",attrs:{props:e}},[t("q-input",{attrs:{dense:"",outlined:"",square:"",label:o.$t("goods.view_goodslist.goods_code"),autofocus:"",rules:[function(e){return e&&e.length>0||o.error1}]},model:{value:o.editFormData.goods_code,callback:function(e){o.$set(o.editFormData,"goods_code",e)},expression:"editFormData.goods_code"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_code",attrs:{props:e}},[o._v(o._s(e.row.goods_code))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_desc",attrs:{props:e}},[t("q-input",{attrs:{dense:"",outlined:"",square:"",label:o.$t("goods.view_goodslist.goods_desc"),rules:[function(e){return e&&e.length>0||o.error2}]},model:{value:o.editFormData.goods_desc,callback:function(e){o.$set(o.editFormData,"goods_desc",e)},expression:"editFormData.goods_desc"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_desc",attrs:{props:e}},[o._v(o._s(e.row.goods_desc))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_supplier",attrs:{props:e}},[t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.supplier_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_supplier"),rules:[function(e){return e&&e.length>0||o.error3}]},model:{value:o.editFormData.goods_supplier,callback:function(e){o.$set(o.editFormData,"goods_supplier",e)},expression:"editFormData.goods_supplier"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_supplier",attrs:{props:e}},[o._v(o._s(e.row.goods_supplier))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_weight",attrs:{props:e}},[t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_weight"),rules:[function(e){return e&&e>0||o.error4}]},model:{value:o.editFormData.goods_weight,callback:function(e){o.$set(o.editFormData,"goods_weight",o._n(e))},expression:"editFormData.goods_weight"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_weight",attrs:{props:e}},[o._v(o._s(e.row.goods_weight))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_w",attrs:{props:e}},[t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_w"),rules:[function(e){return e&&e>0||o.error5}]},model:{value:o.editFormData.goods_w,callback:function(e){o.$set(o.editFormData,"goods_w",o._n(e))},expression:"editFormData.goods_w"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_w",attrs:{props:e}},[o._v(o._s(e.row.goods_w))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_d",attrs:{props:e}},[t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_d"),rules:[function(e){return e&&e>0||o.error6}]},model:{value:o.editFormData.goods_d,callback:function(e){o.$set(o.editFormData,"goods_d",o._n(e))},expression:"editFormData.goods_d"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_d",attrs:{props:e}},[o._v(o._s(e.row.goods_d))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_h",attrs:{props:e}},[t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_h"),rules:[function(e){return e&&e>0||o.error7}]},model:{value:o.editFormData.goods_h,callback:function(e){o.$set(o.editFormData,"goods_h",o._n(e))},expression:"editFormData.goods_h"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_h",attrs:{props:e}},[o._v(o._s(e.row.goods_h))])]:o._e(),t("q-td",{key:"unit_volume",attrs:{props:e}},[o._v(o._s(e.row.unit_volume))]),e.row.id===o.editid?[t("q-td",{key:"goods_unit",attrs:{props:e}},[t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_unit_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_unit"),rules:[function(e){return e&&e.length>0||o.error8}]},model:{value:o.editFormData.goods_unit,callback:function(e){o.$set(o.editFormData,"goods_unit",e)},expression:"editFormData.goods_unit"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_unit",attrs:{props:e}},[o._v(o._s(e.row.goods_unit))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_class",attrs:{props:e}},[t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_class_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_class"),rules:[function(e){return e&&e.length>0||o.error9}]},model:{value:o.editFormData.goods_class,callback:function(e){o.$set(o.editFormData,"goods_class",e)},expression:"editFormData.goods_class"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_class",attrs:{props:e}},[o._v(o._s(e.row.goods_class))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_brand",attrs:{props:e}},[t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_brand_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_brand"),rules:[function(e){return e&&e.length>0||o.error10}]},model:{value:o.editFormData.goods_brand,callback:function(e){o.$set(o.editFormData,"goods_brand",e)},expression:"editFormData.goods_brand"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_brand",attrs:{props:e}},[o._v(o._s(e.row.goods_brand))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_color",attrs:{props:e}},[t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_color_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_color"),rules:[function(e){return e&&e.length>0||o.error11}]},model:{value:o.editFormData.goods_color,callback:function(e){o.$set(o.editFormData,"goods_color",e)},expression:"editFormData.goods_color"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_color",attrs:{props:e}},[o._v(o._s(e.row.goods_color))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_shape",attrs:{props:e}},[t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_shape_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_shape"),rules:[function(e){return e&&e.length>0||o.error12}]},model:{value:o.editFormData.goods_shape,callback:function(e){o.$set(o.editFormData,"goods_shape",e)},expression:"editFormData.goods_shape"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_shape",attrs:{props:e}},[o._v(o._s(e.row.goods_shape))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_specs",attrs:{props:e}},[t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_specs_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_specs"),rules:[function(e){return e&&e.length>0||o.error13}]},model:{value:o.editFormData.goods_specs,callback:function(e){o.$set(o.editFormData,"goods_specs",e)},expression:"editFormData.goods_specs"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_specs",attrs:{props:e}},[o._v(o._s(e.row.goods_specs))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_origin",attrs:{props:e}},[t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_origin_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_origin"),rules:[function(e){return e&&e.length>0||o.error14}]},model:{value:o.editFormData.goods_origin,callback:function(e){o.$set(o.editFormData,"goods_origin",e)},expression:"editFormData.goods_origin"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_origin",attrs:{props:e}},[o._v(o._s(e.row.goods_origin))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_cost",attrs:{props:e}},[t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_cost"),rules:[function(e){return e&&e>0||o.error15}]},model:{value:o.editFormData.goods_cost,callback:function(e){o.$set(o.editFormData,"goods_cost",o._n(e))},expression:"editFormData.goods_cost"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_cost",attrs:{props:e}},[o._v(o._s(e.row.goods_cost))])]:o._e(),e.row.id===o.editid?[t("q-td",{key:"goods_price",attrs:{props:e}},[t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_price"),rules:[function(e){return e&&e>0||o.error16}]},model:{value:o.editFormData.goods_price,callback:function(e){o.$set(o.editFormData,"goods_price",o._n(e))},expression:"editFormData.goods_price"}})],1)]:e.row.id!==o.editid?[t("q-td",{key:"goods_price",attrs:{props:e}},[o._v(o._s(e.row.goods_price))])]:o._e(),t("q-td",{key:"creater",attrs:{props:e}},[o._v(o._s(e.row.creater))]),t("q-td",{key:"create_time",attrs:{props:e}},[o._v(o._s(e.row.create_time))]),t("q-td",{key:"update_time",attrs:{props:e}},[o._v(o._s(e.row.update_time))]),o.editMode?o.editMode?[e.row.id===o.editid?[t("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:e}},[t("q-btn",{attrs:{round:"",flat:"",push:"",color:"secondary",icon:"check"},on:{click:function(e){return o.editDataSubmit()}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[o._v(o._s(o.$t("confirmedit")))])],1),t("q-btn",{attrs:{round:"",flat:"",push:"",color:"red",icon:"close"},on:{click:function(e){return o.editDataCancel()}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[o._v(o._s(o.$t("canceledit")))])],1)],1)]:e.row.id!==o.editid?void 0:o._e()]:o._e():[t("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:e}},[t("q-btn",{directives:[{name:"show",rawName:"v-show",value:"Supplier"!==o.$q.localStorage.getItem("staff_type")&&"Customer"!==o.$q.localStorage.getItem("staff_type")&&"Outbound"!==o.$q.localStorage.getItem("staff_type")&&"StockControl"!==o.$q.localStorage.getItem("staff_type"),expression:"\n                  $q.localStorage.getItem('staff_type') !== 'Supplier' &&\n                    $q.localStorage.getItem('staff_type') !== 'Customer' &&\n                    $q.localStorage.getItem('staff_type') !== 'Outbound' &&\n                    $q.localStorage.getItem('staff_type') !== 'StockControl'\n                "}],attrs:{round:"",flat:"",push:"",color:"info",icon:"print"},on:{click:function(t){return o.viewData(e.row)}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[o._v("\n                  "+o._s(o.$t("goods.view_goodslist.print_goods_label"))+"\n                ")])],1),t("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"edit"},on:{click:function(t){return o.editData(e.row)}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[o._v(o._s(o.$t("edit")))])],1),t("q-btn",{attrs:{round:"",flat:"",push:"",color:"dark",icon:"delete"},on:{click:function(t){return o.deleteData(e.row.id)}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[o._v(o._s(o.$t("delete")))])],1)],1)]],2)]}}])})],1),[t("div",{staticClass:"q-pa-lg flex flex-center"},[t("q-btn",{directives:[{name:"show",rawName:"v-show",value:o.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:o.$t("previous"),icon:"navigate_before"},on:{click:function(e){return o.getListPrevious()}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[o._v(o._s(o.$t("previous")))])],1),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:o.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:o.$t("next"),"icon-right":"navigate_next"},on:{click:function(e){return o.getListNext()}}},[t("q-tooltip",{attrs:{"content-class":"vbg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[o._v(o._s(o.$t("next")))])],1),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:!o.pathname_previous&&!o.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:o.$t("no_data")}})],1)],t("q-dialog",{model:{value:o.newForm,callback:function(e){o.newForm=e},expression:"newForm"}},[t("q-card",{staticClass:"shadow-24"},[t("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[t("div",[o._v(o._s(o.$t("newtip")))]),t("q-space"),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4"}},[o._v(o._s(o.$t("index.close")))])],1)],1),t("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[t("q-input",{attrs:{dense:"",outlined:"",square:"",label:o.$t("goods.view_goodslist.goods_code"),autofocus:"",rules:[function(e){return e&&e.length>0||o.error1}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_code,callback:function(e){o.$set(o.newFormData,"goods_code",e)},expression:"newFormData.goods_code"}}),t("q-input",{attrs:{dense:"",outlined:"",square:"",label:o.$t("goods.view_goodslist.goods_desc"),rules:[function(e){return e&&e.length>0||o.error2}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_desc,callback:function(e){o.$set(o.newFormData,"goods_desc",e)},expression:"newFormData.goods_desc"}}),t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.supplier_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_supplier"),rules:[function(e){return e&&e.length>0||o.error3}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_supplier,callback:function(e){o.$set(o.newFormData,"goods_supplier",e)},expression:"newFormData.goods_supplier"}}),t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_weight"),rules:[function(e){return e&&e>0||o.error4}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_weight,callback:function(e){o.$set(o.newFormData,"goods_weight",o._n(e))},expression:"newFormData.goods_weight"}}),t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_w"),rules:[function(e){return e&&e>0||o.error5}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_w,callback:function(e){o.$set(o.newFormData,"goods_w",o._n(e))},expression:"newFormData.goods_w"}}),t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_d"),rules:[function(e){return e&&e>0||o.error6}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_d,callback:function(e){o.$set(o.newFormData,"goods_d",o._n(e))},expression:"newFormData.goods_d"}}),t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_h"),rules:[function(e){return e&&e>0||o.error7}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_h,callback:function(e){o.$set(o.newFormData,"goods_h",o._n(e))},expression:"newFormData.goods_h"}}),t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_unit_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_unit"),rules:[function(e){return e&&e.length>0||o.error8}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_unit,callback:function(e){o.$set(o.newFormData,"goods_unit",e)},expression:"newFormData.goods_unit"}}),t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_class_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_class"),rules:[function(e){return e&&e.length>0||o.error9}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_class,callback:function(e){o.$set(o.newFormData,"goods_class",e)},expression:"newFormData.goods_class"}}),t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_brand_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_brand"),rules:[function(e){return e&&e.length>0||o.error10}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_brand,callback:function(e){o.$set(o.newFormData,"goods_brand",e)},expression:"newFormData.goods_brand"}}),t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_color_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_color"),rules:[function(e){return e&&e.length>0||o.error11}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_color,callback:function(e){o.$set(o.newFormData,"goods_color",e)},expression:"newFormData.goods_color"}}),t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_shape_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_shape"),rules:[function(e){return e&&e.length>0||o.error12}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_shape,callback:function(e){o.$set(o.newFormData,"goods_shape",e)},expression:"newFormData.goods_shape"}}),t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_specs_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_specs"),rules:[function(e){return e&&e.length>0||o.error13}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_specs,callback:function(e){o.$set(o.newFormData,"goods_specs",e)},expression:"newFormData.goods_specs"}}),t("q-select",{attrs:{dense:"",outlined:"",square:"",options:o.goods_origin_list,"transition-show":"scale","transition-hide":"scale",label:o.$t("goods.view_goodslist.goods_origin"),rules:[function(e){return e&&e.length>0||o.error14}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_origin,callback:function(e){o.$set(o.newFormData,"goods_origin",e)},expression:"newFormData.goods_origin"}}),t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_cost"),rules:[function(e){return e&&e>0||o.error15}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_cost,callback:function(e){o.$set(o.newFormData,"goods_cost",o._n(e))},expression:"newFormData.goods_cost"}}),t("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:o.$t("goods.view_goodslist.goods_price"),rules:[function(e){return e&&e>0||o.error16}]},on:{keyup:function(e){return!e.type.indexOf("key")&&o._k(e.keyCode,"enter",13,e.key,"Enter")?null:o.newDataSubmit()}},model:{value:o.newFormData.goods_price,callback:function(e){o.$set(o.newFormData,"goods_price",o._n(e))},expression:"newFormData.goods_price"}})],1),t("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[t("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return o.newDataCancel()}}},[o._v(o._s(o.$t("cancel")))]),t("q-btn",{attrs:{color:"primary"},on:{click:function(e){return o.newDataSubmit()}}},[o._v(o._s(o.$t("submit")))])],1)],1)],1),t("q-dialog",{model:{value:o.deleteForm,callback:function(e){o.deleteForm=e},expression:"deleteForm"}},[t("q-card",{staticClass:"shadow-24"},[t("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[t("div",[o._v(o._s(o.$t("delete")))]),t("q-space"),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[t("q-tooltip",[o._v(o._s(o.$t("index.close")))])],1)],1),t("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[o._v(o._s(o.$t("deletetip")))]),t("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[t("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return o.deleteDataCancel()}}},[o._v(o._s(o.$t("cancel")))]),t("q-btn",{attrs:{color:"primary"},on:{click:function(e){return o.deleteDataSubmit()}}},[o._v(o._s(o.$t("submit")))])],1)],1)],1),t("q-dialog",{model:{value:o.viewForm,callback:function(e){o.viewForm=e},expression:"viewForm"}},[t("div",{staticStyle:{width:"400px",height:"280px","background-color":"white"},attrs:{id:"printMe"}},[t("q-card-section",[t("div",{staticClass:"row",staticStyle:{height:"50px"}},[t("div",{staticClass:"col-3"},[t("img",{staticStyle:{width:"60px",height:"50px","margin-top":"5px","margin-left":"5px"},attrs:{src:"statics/goods/logo.png"}})]),t("div",{staticClass:"col-9",staticStyle:{height:"50px",float:"contour","margin-top":"10px"}},[t("p",{staticStyle:{"font-size":"20px","font-weight":"550"}},[o._v(o._s(o.$t("goods.view_goodslist.goods_code")+":"+o.goods_code))])])]),t("hr"),t("div",{staticClass:"row"},[t("div",{staticClass:"col-8",staticStyle:{"margin-top":"30px","padding-left":"3%"}},[t("p",{staticStyle:{"font-size":"20px","font-weight":"550"}},[o._v(o._s(o.$t("goods.view_goodslist.goods_name")+":"))]),t("p",{staticStyle:{"font-size":"20px","font-weight":"550"}},[o._v(o._s(o.goods_desc))])]),t("div",{staticClass:"col-4",staticStyle:{"margin-top":"25px"}},[t("img",{staticStyle:{width:"70%","margin-left":"23px"},attrs:{src:o.bar_code}})])])])],1),t("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[t("q-btn",{directives:[{name:"print",rawName:"v-print",value:o.printObj,expression:"printObj"}],attrs:{color:"primary",icon:"print"}},[o._v("print")])],1)])],2)},i=[],r=t("3004"),a=(t("bd4c"),t("a357"),t("18d6")),d={name:"Pagegoodslist",data(){return{goods_code:"",goods_desc:"",openid:"",login_name:"",authin:"0",pathname:"goods/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",viewForm:!1,printObj:{id:"printMe",popTitle:this.$t("inbound.asn")},table_list:[],goods_unit_list:[],goods_class_list:[],goods_brand_list:[],goods_color_list:[],goods_shape_list:[],goods_specs_list:[],goods_origin_list:[],supplier_list:[],columns:[{name:"goods_code",required:!0,label:this.$t("goods.view_goodslist.goods_code"),align:"left",field:"goods_code"},{name:"goods_desc",label:this.$t("goods.view_goodslist.goods_desc"),field:"goods_desc",align:"center"},{name:"goods_supplier",label:this.$t("goods.view_goodslist.goods_supplier"),field:"goods_supplier",align:"center"},{name:"goods_weight",label:this.$t("goods.view_goodslist.goods_weight"),field:"goods_weight",align:"center"},{name:"goods_w",label:this.$t("goods.view_goodslist.goods_w"),field:"goods_w",align:"center"},{name:"goods_d",label:this.$t("goods.view_goodslist.goods_d"),field:"goods_d",align:"center"},{name:"goods_h",label:this.$t("goods.view_goodslist.goods_h"),field:"goods_h",align:"center"},{name:"unit_volume",label:this.$t("goods.view_goodslist.unit_volume"),field:"unit_volume",align:"center"},{name:"goods_unit",label:this.$t("goods.view_goodslist.goods_unit"),field:"goods_unit",align:"center"},{name:"goods_class",label:this.$t("goods.view_goodslist.goods_class"),field:"goods_class",align:"center"},{name:"goods_brand",label:this.$t("goods.view_goodslist.goods_brand"),field:"goods_brand",align:"center"},{name:"goods_color",label:this.$t("goods.view_goodslist.goods_color"),field:"goods_color",align:"center"},{name:"goods_shape",label:this.$t("goods.view_goodslist.goods_shape"),field:"goods_shape",align:"center"},{name:"goods_specs",label:this.$t("goods.view_goodslist.goods_specs"),field:"goods_specs",align:"center"},{name:"goods_origin",label:this.$t("goods.view_goodslist.goods_origin"),field:"goods_origin",align:"center"},{name:"goods_cost",label:this.$t("goods.view_goodslist.goods_cost"),field:"goods_cost",align:"center"},{name:"goods_price",label:this.$t("goods.view_goodslist.goods_price"),field:"goods_price",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,newFormData:{goods_code:"",goods_desc:"",goods_supplier:"",goods_weight:"",goods_w:"",goods_d:"",goods_h:"",goods_unit:"",goods_class:"",goods_brand:"",goods_color:"",goods_shape:"",goods_specs:"",goods_origin:"",goods_cost:"",goods_price:"",creater:""},editid:0,editFormData:{},editMode:!1,deleteForm:!1,deleteid:0,bar_code:"",error1:this.$t("goods.view_goodslist.error1"),error2:this.$t("goods.view_goodslist.error2"),error3:this.$t("goods.view_goodslist.error3"),error4:this.$t("goods.view_goodslist.error4"),error5:this.$t("goods.view_goodslist.error5"),error6:this.$t("goods.view_goodslist.error6"),error7:this.$t("goods.view_goodslist.error7"),error8:this.$t("goods.view_unit.error1"),error9:this.$t("goods.view_class.error1"),error10:this.$t("goods.view_brand.error1"),error11:this.$t("goods.view_color.error1"),error12:this.$t("goods.view_shape.error1"),error13:this.$t("goods.view_specs.error1"),error14:this.$t("goods.view_origin.error1"),error15:this.$t("goods.view_goodslist.error8"),error16:this.$t("goods.view_goodslist.error9")}},methods:{getList(){var o=this;Object(r["e"])(o.pathname,{}).then((e=>{o.table_list=e.results,o.goods_unit_list=e.goods_unit_list,o.goods_class_list=e.goods_class_list,o.goods_brand_list=e.goods_brand_list,o.goods_color_list=e.goods_color_list,o.goods_shape_list=e.goods_shape_list,o.goods_specs_list=e.goods_specs_list,o.goods_origin_list=e.goods_origin_list,o.supplier_list=e.supplier_list,o.pathname_previous=e.previous,o.pathname_next=e.next})).catch((e=>{o.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getSearchList(){var o=this;a["a"].has("auth")&&Object(r["e"])(o.pathname+"?goods_desc__icontains="+o.filter,{}).then((e=>{o.table_list=e.results,o.goods_unit_list=e.goods_unit_list,o.goods_class_list=e.goods_class_list,o.goods_brand_list=e.goods_brand_list,o.goods_color_list=e.goods_color_list,o.goods_shape_list=e.goods_shape_list,o.goods_specs_list=e.goods_specs_list,o.goods_origin_list=e.goods_origin_list,o.supplier_list=e.supplier_list,o.pathname_previous=e.previous,o.pathname_next=e.next})).catch((e=>{o.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var o=this;a["a"].has("auth")&&Object(r["e"])(o.pathname_previous,{}).then((e=>{o.table_list=e.results,o.goods_unit_list=e.goods_unit_list,o.goods_class_list=e.goods_class_list,o.goods_brand_list=e.goods_brand_list,o.goods_color_list=e.goods_color_list,o.goods_shape_list=e.goods_shape_list,o.goods_specs_list=e.goods_specs_list,o.goods_origin_list=e.goods_origin_list,o.supplier_list=e.supplier_list,o.pathname_previous=e.previous,o.pathname_next=e.next})).catch((e=>{o.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var o=this;a["a"].has("auth")&&Object(r["e"])(o.pathname_next,{}).then((e=>{o.table_list=e.results,o.goods_unit_list=e.goods_unit_list,o.goods_class_list=e.goods_class_list,o.goods_brand_list=e.goods_brand_list,o.goods_color_list=e.goods_color_list,o.goods_shape_list=e.goods_shape_list,o.goods_specs_list=e.goods_specs_list,o.goods_origin_list=e.goods_origin_list,o.supplier_list=e.supplier_list,o.pathname_previous=e.previous,o.pathname_next=e.next})).catch((e=>{o.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var o=this;o.getList()},newDataSubmit(){var o=this,e=[];o.table_list.forEach((o=>{e.push(o.goods_code)})),-1===e.indexOf(o.newFormData.goods_code)&&0!==o.newFormData.goods_code.length?(o.newFormData.creater=o.login_name,Object(r["h"])(o.pathname,o.newFormData).then((e=>{o.getList(),o.newDataCancel(),500!=e.status_code&&o.$q.notify({message:"Success Create",icon:"check",color:"green"})})).catch((e=>{o.$q.notify({message:e.detail,icon:"close",color:"negative"})}))):-1!==e.indexOf(o.newFormData.goods_code)?o.$q.notify({message:o.$t("notice.goodserror.goods_listerror"),icon:"close",color:"negative"}):0===o.newFormData.goods_code.length&&o.$q.notify({message:o.$t("goods.view_goodslist.error1"),icon:"close",color:"negative"}),e=[]},newDataCancel(){var o=this;o.newForm=!1,o.newFormData={goods_code:"",goods_desc:"",goods_supplier:"",goods_weight:"",goods_w:"",goods_d:"",goods_h:"",goods_unit:"",goods_class:"",goods_brand:"",goods_color:"",goods_shape:"",goods_specs:"",goods_origin:"",goods_cost:"",goods_price:"",creater:""}},editData(o){var e=this;e.editMode=!0,e.editid=o.id,e.editFormData={goods_code:o.goods_code,goods_desc:o.goods_desc,goods_supplier:o.goods_supplier,goods_weight:o.goods_weight,goods_w:o.goods_w,goods_d:o.goods_d,goods_h:o.goods_h,goods_unit:o.goods_unit,goods_class:o.goods_class,goods_brand:o.goods_brand,goods_color:o.goods_color,goods_shape:o.goods_shape,goods_specs:o.goods_specs,goods_origin:o.goods_origin,goods_cost:o.goods_cost,goods_price:o.goods_price,creater:e.login_name,bar_code:o.bar_code}},editDataSubmit(){var o=this;Object(r["i"])(o.pathname+o.editid+"/",o.editFormData).then((e=>{o.editDataCancel(),o.getList(),500!=e.status_code&&o.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((e=>{o.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},editDataCancel(){var o=this;o.editMode=!1,o.editid=0,o.editFormData={goods_code:"",goods_desc:"",goods_supplier:"",goods_weight:"",goods_w:"",goods_d:"",goods_h:"",goods_unit:"",goods_class:"",goods_brand:"",goods_color:"",goods_shape:"",goods_specs:"",goods_origin:"",goods_cost:"",goods_price:"",creater:""}},deleteData(o){var e=this;e.deleteForm=!0,e.deleteid=o},deleteDataSubmit(){var o=this;Object(r["d"])(o.pathname+o.deleteid+"/").then((e=>{o.deleteDataCancel(),o.getList(),o.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((e=>{o.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var o=this;o.deleteForm=!1,o.deleteid=0},viewData(o){var e=this,s=t("d055");s.toDataURL(o.bar_code,[{errorCorrectionLevel:"H",mode:"byte",version:"2",type:"image/jpeg"}]).then((t=>{e.goods_code=o.goods_code,e.goods_desc=o.goods_desc,e.bar_code=t})).catch((o=>{console.error(o)})),e.viewForm=!0}},created(){var o=this;a["a"].has("openid")?o.openid=a["a"].getItem("openid"):(o.openid="",a["a"].set("openid","")),a["a"].has("login_name")?o.login_name=a["a"].getItem("login_name"):(o.login_name="",a["a"].set("login_name","")),a["a"].has("auth")?(o.authin="1",o.getList()):o.authin="0"},mounted(){var o=this;o.$q.platform.is.electron?o.height=String(o.$q.screen.height-290)+"px":o.height=o.$q.screen.height-290+"px"},updated(){},destroyed(){}},n=d,l=t("42e1"),g=t("1151"),c=t("eaac"),_=t("e7a9"),u=t("9c40"),p=t("05c0"),m=t("2c91"),h=t("27f9"),w=t("bd08"),b=t("db86"),f=t("ddd8"),v=t("24e8"),y=t("f09f"),k=t("d847"),q=t("a370"),$=t("7f67"),D=t("eebe"),x=t.n(D),F=Object(l["a"])(n,s,i,!1,null,null,null);"function"===typeof g["default"]&&Object(g["default"])(F);e["default"]=F.exports;x()(F,"components",{QTable:c["a"],QBtnGroup:_["a"],QBtn:u["a"],QTooltip:p["a"],QSpace:m["a"],QInput:h["a"],QTr:w["a"],QTd:b["a"],QSelect:f["a"],QDialog:v["a"],QCard:y["a"],QBar:k["a"],QCardSection:q["a"]}),x()(F,"directives",{ClosePopup:$["a"]})}}]);