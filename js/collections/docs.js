define(["require","jquery","underscore","backbone","localstorage","models/doc","models/settings","utils/backbone.remoteStorage-documents"],function(e){function f(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var t=e("jquery"),n=e("underscore"),r=e("backbone"),i=e("localstorage"),s=e("models/doc"),o=e("models/settings"),u=e("utils/backbone.remoteStorage-documents"),a=r.Collection.extend({model:s,sync:u,initialize:function(e){this.deferred=t.Deferred(),this.on("change:content",this.ensureOrder).on("change:lastEdited",this.saveWhenIdle).on("change:title",this.updateUrl)},addNew:function(){this.add({id:n.uniqueId(),lastEdited:(new Date).getTime()})},comparator:function(e,t){return e.get("lastEdited")>t.get("lastEdited")?-1:1},saveTimeout:undefined,saveWhenIdle:function(e){clearTimeout(this.saveTimeout),this.saveTimeout=setTimeout(n.bind(e.save,e),1e3)},updateUrl:function(e){var t=encodeURI(e.get("title").toLowerCase().replace(/\s|&nbsp;/g,"-"));if(t.length<1){e.set("url","");return}var n=this.filter(function(e){return(new RegExp("^"+f(t)+"(-[0-9]|$)")).test(e.get("url"))}).length;t=n<1?t:t+"-"+n,e.set("url",t)},ensureOrder:function(){o.get("openDocId")!==this.first().id&&this.sort()},deleteEmpty:function(){var e=this.get(o.previous("openDocId"));e&&e.isEmpty()&&e.destroy()}}),l=new a;return l})