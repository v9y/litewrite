define(["require","jquery","backbone","views/app","collections/docs","utils/cache","models/settings","utils/router"],function(e){function a(){o.on("change:openDocId",c).on("change:openDocId",h).on("change:openDocId",v).on("change:openDocId",i.deleteEmpty,i),i.on("change:title",v).on("change:title",h).on("add",p),remoteStorage.onWidget("ready",m),remoteStorage.onWidget("state",function(e){e==="anonymous"?m():e=="disconnected"&&i.reset().addNew()}),t.when(o.deferred,i.deferred).done(f),s.loading.done(h,d),remoteStorage.displayWidget("remotestorage-connect"),remoteStorage.util.silenceAllLoggers(),t(function(){new r})}function f(){l(),c(),s.loading.resolve()}function l(){_.isUndefined(o.get("openDocId"))&&o.save("openDocId",i.first().id)}function c(){s.openDoc=i.get(o.get("openDocId"))}function h(){document.title=(s.openDoc?s.openDoc.get("title"):null)||"Litewrite"}function p(e){o.save("openDocId",e.id)}function d(){n.history.start()}function v(){u.navigate(s.openDoc.get("url"))}function m(){i.trigger("fetch"),i.fetch({success:function(){i.isEmpty()&&i.addNew(),i.deferred.resolve()}})}var t=e("jquery"),n=e("backbone"),r=e("views/app"),i=e("collections/docs"),s=e("utils/cache"),o=e("models/settings"),u=e("utils/router");return a})