(this.webpackJsonpnatgram=this.webpackJsonpnatgram||[]).push([[0],{15:function(e,a,s){},16:function(e,a,s){},43:function(e,a,s){"use strict";s.r(a);var t=s(1),c=s.n(t),n=s(6),i=s.n(n),l=(s(15),s(16),s(7)),r=s(8),d=s(10),o=s(9),m=s(0),j=function(e){var a=e.image,s=e.userName;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"story me-2",children:Object(m.jsx)("img",{className:"story-image w-100",src:a,alt:"image"})}),Object(m.jsx)("p",{className:"story-user-name text-center",children:s})]})},b=s.p+"static/media/profilePic.8469a897.jpeg",u=function(e){var a=e.url,s=e.userName,t=e.liked,c=e.bookmarked,n=e.id,i=e.onLike,l=e.onSave;return Object(m.jsxs)("div",{className:"mb-3 bg-light w-100 natgram-feed-post",children:[Object(m.jsxs)("div",{className:"feed-post-top-section p-2 d-flex flex-row",children:[Object(m.jsx)("div",{className:"d-flex flex-column justify-content-center",children:Object(m.jsx)("img",{src:b,className:"feed-post-profile-pic"})}),Object(m.jsx)("div",{className:"d-flex flex-column justify-content-center",children:Object(m.jsx)("p",{className:"feed-post-user-name",children:s})}),Object(m.jsx)("div",{className:"d-flex flex-column justify-content-center ms-auto",children:Object(m.jsx)("i",{className:"fa fa-ellipsis-h ms-auto","aria-hidden":"true"})})]}),Object(m.jsxs)("div",{className:"feed-post-middle-section w-100",children:[Object(m.jsx)("img",{className:"w-100",src:a}),Object(m.jsxs)("div",{className:"d-flex flex-row px-2 my-2",children:[Object(m.jsx)("i",{className:t?"fa fa-2x me-2 fa-heart":"fa fa-2x me-2 fa-heart-o",onClick:function(){return i(n)}}),Object(m.jsx)("i",{className:"fa fa-comment-o me-2 fa-2x"}),Object(m.jsx)("i",{className:"fa fa-send-o me-2 fa-2x"}),Object(m.jsx)("i",{className:c?"fa fa-bookmark ms-auto fa-2x":"fa fa-bookmark-o ms-auto fa-2x",onClick:function(){return l(n)}})]}),Object(m.jsx)("div",{className:"p-2",children:Object(m.jsxs)("p",{className:"like-text",children:["Liked by ",Object(m.jsx)("span",{className:"font-weight-bold",children:s})," and"," ",Object(m.jsx)("span",{className:"font-weight-bold",children:"others"})]})})]})]})},f=function(e){var a=e.userName,s=e.fullName;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"profile-container mt-5 d-flex flex-row",children:[Object(m.jsx)("img",{src:b,className:"profile"}),Object(m.jsxs)("div",{className:"d-flex flex-column justify-content-center ml-3",children:[Object(m.jsx)("p",{className:"user-name",children:a}),Object(m.jsx)("p",{className:"full-name",children:s})]})]}),Object(m.jsx)("p",{className:"bio",children:"I am Santosh Kumar and currently doing my B.Tech from IIT Tirupati. I love to explore nature. I keep investigating about interseting thing of nature."})]})},x=function(){return Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("a",{className:"navbar-brand natgram-text",href:"#",children:"NATGRAM"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(m.jsxs)("ul",{className:"navbar-nav  ms-auto",children:[Object(m.jsx)("li",{className:"nav-item active",children:Object(m.jsx)("a",{className:"nav-link",href:"#",children:Object(m.jsx)("i",{className:"fa fa-home"})})}),Object(m.jsx)("li",{className:"nav-item active",children:Object(m.jsx)("a",{className:"nav-link",href:"#",children:Object(m.jsx)("i",{className:"fa fa-commenting"})})}),Object(m.jsx)("li",{className:"nav-item active",children:Object(m.jsx)("a",{className:"nav-link",href:"#",children:Object(m.jsx)("i",{className:"fa fa-heart-o"})})}),Object(m.jsx)("li",{className:"nav-item active",children:Object(m.jsx)("a",{className:"nav-link",href:"#",children:Object(m.jsx)("div",{className:"nav-profile-pic-container d-flex flex-column justify-content-center",children:Object(m.jsx)("img",{className:"profile-pic",src:b,alt:"prfile_pic"})})})})]})})]})})},h=s.p+"static/media/collegeImage.887bf62d.jpg",N=[{id:1,url:h,userName:"_s_k_y_29",liked:!1},{id:2,url:h,userName:"_s_k_y_29",liked:!1,bookmarked:!1},{id:3,url:h,userName:"_s_k_y_29",liked:!1,bookmarked:!1},{id:4,url:h,userName:"_s_k_y_29",liked:!1,bookmarked:!1},{id:5,url:h,userName:"_s_k_y_29",liked:!1,bookmarked:!0},{id:6,url:h,userName:"_s_k_y_29",liked:!1,bookmarked:!1}],v=[{id:1,url:b,userName:"_s_k_y_29"},{id:2,url:b,userName:"_s_k_y_29"},{id:3,url:b,userName:"_s_k_y_29"},{id:4,url:b,userName:"_s_k_y_29"}],O=function(e){Object(d.a)(s,e);var a=Object(o.a)(s);function s(){var e;Object(l.a)(this,s);for(var t=arguments.length,c=new Array(t),n=0;n<t;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={stories:v,posts:N},e.handleLike=function(a){var s=e.state.posts,t=s.findIndex((function(e){if(e.id===a)return!0}));!0===s[t].liked?s[t].liked=!1:s[t].liked=!0,e.setState({posts:s})},e.handleSave=function(a){var s=e.state.posts,t=s.findIndex((function(e){if(e.id===a)return!0}));!0===s[t].bookmarked?s[t].bookmarked=!1:s[t].bookmarked=!0,e.setState({posts:s})},e}return Object(r.a)(s,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(x,{className:"d-none d-md-block"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-12 col-md-7 mt-md-5",children:[Object(m.jsx)("div",{className:"natgram-feed-story bg-light mt-4 d-flex flex-row",children:this.state.stories.map((function(e){return Object(m.jsx)(j,{image:e.url,userName:e.userName},e.id)}))}),Object(m.jsx)("div",{className:"mt-5 mb-3",children:this.state.posts.map((function(a){return Object(m.jsx)(u,{id:a.id,url:a.url,userName:a.userName,liked:a.liked,bookmarked:a.bookmarked,onLike:e.handleLike,onSave:e.handleSave},a.id)}))})]}),Object(m.jsx)("div",{className:"col-1"}),Object(m.jsx)("div",{className:"col-12 col-md-4 d-none d-md-block mt-md-5",children:Object(m.jsx)(f,{userName:"_s_k_y_29",fullName:"Santosh Kumar Yadav"})})]})})]})}}]),s}(t.Component);var k=function(){return Object(m.jsx)(O,{})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,n=a.getLCP,i=a.getTTFB;s(e),t(e),c(e),n(e),i(e)}))};s(18),s(19),s(20);i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),p()}},[[43,1,2]]]);
//# sourceMappingURL=main.4c218bca.chunk.js.map