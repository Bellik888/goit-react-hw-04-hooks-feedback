(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(e,t,c){e.exports={wrapper:"FeedbackOptions_wrapper__2USoF",button:"FeedbackOptions_button__3n-hy",good:"FeedbackOptions_good__3_i5p",neutral:"FeedbackOptions_neutral__1m1cA",bad:"FeedbackOptions_bad__1-ciY"}},function(e,t,c){e.exports={result:"Statistic_result__1wx02"}},,,,function(e,t,c){e.exports={title:"Section_title__2S6oE"}},function(e,t,c){e.exports={message:"Notification_message__eciZi"}},,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),o=c.n(s),i=(c(13),c(14),c(4)),r=(c(15),c(2)),l=c.n(r),u=c(0),d=function(e){var t=e.chooseGoodFeedback,c=e.chooseNeutralFeedback,n=e.chooseBadFeedback;return Object(u.jsxs)("div",{className:l.a.wrapper,children:[Object(u.jsx)("button",{className:[l.a.button,l.a.good].join(" "),onClick:t,children:"Good"}),Object(u.jsx)("button",{className:[l.a.button,l.a.neutral].join(" "),onClick:c,children:"Neutral"}),Object(u.jsx)("button",{className:[l.a.button,l.a.bad].join(" "),onClick:n,children:"Bad"})]})},b=c(7),j=c.n(b),p=function(e){var t=e.title,c=e.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{className:j.a.title,children:t}),c]})},h=c(3),O=c.n(h),x=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,s=e.positivePercentage;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:O.a.result,children:["Good : ",t]}),Object(u.jsxs)("p",{className:O.a.result,children:["Neutral : ",c]}),Object(u.jsxs)("p",{className:O.a.result,children:["Bad : ",n]}),Object(u.jsxs)("p",{className:O.a.result,children:["Total : ",a]}),Object(u.jsxs)("p",{className:O.a.result,children:["Positive feedback : ",s," %"]})]})},_=c(8),f=c.n(_),m=function(e){var t=e.message;return Object(u.jsx)("p",{className:f.a.message,children:t})},k=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),o=Object(i.a)(s,2),r=o[0],l=o[1],b=Object(n.useState)(0),j=Object(i.a)(b,2),h=j[0],O=j[1],_=function(){return c+r+h};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{title:"Please leave feedback",children:Object(u.jsx)(d,{chooseGoodFeedback:function(){a((function(e){return e+1}))},chooseNeutralFeedback:function(){l((function(e){return e+1}))},chooseBadFeedback:function(){O((function(e){return e+1}))}})}),_()>0?Object(u.jsx)(p,{title:"Statistics",children:Object(u.jsx)(x,{good:c,bad:h,neutral:r,total:_(),positivePercentage:Math.floor(100*c/(c+r+h))})}):Object(u.jsx)(m,{message:"No feedback given"})]})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.5a9fcb35.chunk.js.map