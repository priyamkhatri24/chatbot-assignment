/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[3],{317:function(Da,ta,aa){aa.r(ta);var oa=aa(2),ja=aa(174);Da=aa(314);aa=aa(268);var la=window,da=function(y){function x(w,f){var a=y.call(this,w,f)||this;a.url=w;a.range=f;a.request=new XMLHttpRequest;a.request.open("GET",a.url,!0);la.Uint8Array&&(a.request.responseType="arraybuffer");a.request.setRequestHeader("X-Requested-With","XMLHttpRequest");a.status=ja.a.NOT_STARTED;return a}Object(oa.c)(x,y);return x}(Da.ByteRangeRequest);
Da=function(y){function x(w,f,a,e){w=y.call(this,w,f,a,e)||this;w.Or=da;return w}Object(oa.c)(x,y);x.prototype.hq=function(w,f){return w+"/bytes="+f.start+","+(f.stop?f.stop:"")};return x}(Da["default"]);Object(aa.a)(Da);Object(aa.b)(Da);ta["default"]=Da}}]);}).call(this || window)
