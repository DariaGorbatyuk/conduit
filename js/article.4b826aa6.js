"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[942],{1020:function(e,a,t){t.r(a),t.d(a,{default:function(){return C}});var s=t(3396),l=t(4870),r=t(7139),n=t(9242),i=t(6093),u=t(6492),c=t(65),o=t(2483),d=t(9716),g=t(8487),p=t(1964);const m={class:"article-page"},U={class:"banner"},k={key:0,class:"container"},_={class:"article-meta"},v=["src"],S={class:"info"},w={class:"date"},h={key:0},b=(0,s._)("i",{class:"ion-edit"},"Edit article",-1),f=["onClick"],y=(0,s._)("i",{class:"ion-trash-a"}," Delete article ",-1),F=[y],q={class:"container page"},A={key:2,class:"row article-content"},D={class:"col-xs-12"};var j={__name:"Article",setup(e){const a=(0,c.oR)(),t=(0,o.yj)(),y=(0,o.tv)(),j=(0,s.Fl)((()=>a.state.article.isLoading)),z=(0,s.Fl)((()=>a.state.article.data)),C=(0,s.Fl)((()=>a.state.article.errors)),W=(0,s.Fl)((()=>a.getters[u.jr.currentUser])),Z=(0,s.Fl)((()=>!(!W||!z)&&W.value.username===z.value.author.username)),H=()=>{a.dispatch(i.Hp.deleteArticle,{slug:t.params.slug}).then((()=>{y.push({name:"globalFeed"})}))};return(0,s.bv)((()=>{a.dispatch(i.Hp.getArticle,{slug:t.params.slug})})),(e,a)=>{const t=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",U,[(0,l.SU)(z)?((0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("h1",null,(0,r.zw)((0,l.SU)(z).title),1),(0,s._)("div",_,[(0,s.Wm)(t,{to:{name:"userProfile",params:{slug:(0,l.SU)(z).author.username}}},{default:(0,s.w5)((()=>[(0,s._)("img",{src:(0,l.SU)(z).author.image,alt:""},null,8,v)])),_:1},8,["to"]),(0,s._)("div",S,[(0,s.Wm)(t,{to:{name:"userProfile",params:{slug:(0,l.SU)(z).author.username}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)((0,l.SU)(z).author.username),1)])),_:1},8,["to"]),(0,s._)("span",w,(0,r.zw)((0,l.SU)(z).createdAt),1)]),(0,l.SU)(Z)?((0,s.wg)(),(0,s.iD)("span",h,[(0,s.Wm)(t,{class:"btn btn-outline-secondary btn-sm",to:{name:"editArticle",params:{slug:(0,l.SU)(z).slug}}},{default:(0,s.w5)((()=>[b])),_:1},8,["to"]),(0,s._)("button",{class:"btn btn-outline-danger btn-sm",onClick:(0,n.iM)(H,["prevent"])},F,8,f)])):(0,s.kq)("",!0)])])):(0,s.kq)("",!0)]),(0,s._)("div",q,[(0,l.SU)(j)?((0,s.wg)(),(0,s.j4)((0,l.SU)(d.Z),{key:0})):(0,s.kq)("",!0),(0,l.SU)(C)?((0,s.wg)(),(0,s.j4)((0,l.SU)(g.Z),{key:1})):(0,s.kq)("",!0),(0,l.SU)(z)?((0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("div",D,[(0,s._)("div",null,[(0,s._)("p",null,(0,r.zw)((0,l.SU)(z).body),1)]),(0,s.Wm)((0,l.SU)(p.Z),{tags:(0,l.SU)(z).tagList},null,8,["tags"])])])):(0,s.kq)("",!0)])])}}};const z=j;var C=z}}]);
//# sourceMappingURL=article.4b826aa6.js.map