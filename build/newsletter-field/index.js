(()=>{"use strict";var e,t={293:()=>{const e=window.wp.blocks,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/newsletter-field","title":"Newsletter Field","category":"gutena","parent":["gutena/newsletter"],"icon":"email-alt","description":"Gutena Newsletter Field","textdomain":"newsletter-block-gutena","supports":{"html":false,"color":{"background":true,"text":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontStyle":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true},"spacing":{"padding":true,"margin":true}},"attributes":{"style":{"type":"object","default":{"color":{"text":"#000000","background":"#EBEBEB"},"border":{"radius":"5px"},"spacing":{"padding":{"top":"12px","bottom":"12px","left":"20px","right":"20px"},"margin":{"top":"10px","bottom":"10px","left":"0","right":"0"}},"typography":{"fontSize":"18px"}}},"className":{"type":"string","default":"gutena-block-field"},"textSuccess":{"type":"string","default":"Thank you for subscribing!"},"textSubscribed":{"type":"string","default":"You\'re already subscribed with us!"},"provider":{"type":"string"},"mailchimpApiKey":{"type":"string"},"mailchimpListID":{"type":"string"},"iconColor":{"type":"string"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","script":"gutena-newsletter-block","style":"file:./style-index.css"}'),l=window.wp.element,r=window.wp.i18n,n=window.wp.components,a=window.wp.blockEditor;(0,e.registerBlockType)(t,{edit:function(e){let{attributes:t,setAttributes:i}=e;const o=(0,a.useBlockProps)({className:"gutena-newsletter-field-block"}),s=(0,l.createElement)("a",{href:"https://mailchimp.com/help/find-audience-id/",target:"_blank"},(0,r.__)("Find Audience ID","newsletter-block-gutena"));return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(a.InspectorControls,{key:"settings"},(0,l.createElement)(n.PanelBody,{title:(0,r.__)("Provider","newsletter-block-gutena")},(0,l.createElement)(n.SelectControl,{label:(0,r.__)("Choose Provider","newsletter-block-gutena"),value:t.provider,options:[{label:(0,r.__)("-- Select --","newsletter-block-gutena"),value:""},{label:(0,r.__)("Mailchimp","newsletter-block-gutena"),value:"mailchimp"}],onChange:e=>i({provider:e})}),"mailchimp"===t.provider?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.TextControl,{label:(0,r.__)("Mailchimp API Key","newsletter-block-gutena"),value:t.mailchimpApiKey,onChange:e=>i({mailchimpApiKey:e})}),(0,l.createElement)(n.TextControl,{label:(0,r.__)("Mailchimp Audience ID","newsletter-block-gutena"),value:t.mailchimpListID,onChange:e=>i({mailchimpListID:e}),help:s})):(0,l.createElement)(l.Fragment,null)),(0,l.createElement)(n.PanelBody,{title:(0,r.__)("Messages","newsletter-block-gutena"),initialOpen:!1},(0,l.createElement)(n.TextControl,{label:(0,r.__)("Success Message","newsletter-block-gutena"),value:t.textSuccess,onChange:e=>i({textSuccess:e})}),(0,l.createElement)(n.TextControl,{label:(0,r.__)("Already Subscribed Message","newsletter-block-gutena"),value:t.textSubscribed,onChange:e=>i({textSubscribed:e})})),(0,l.createElement)(a.PanelColorSettings,{title:(0,r.__)("Icon Color"),colorSettings:[{value:t.iconColor,onChange:e=>i({iconColor:e}),label:(0,r.__)("Color","newsletter-block-gutena")}]})),(0,l.createElement)("div",o,(0,l.createElement)("form",{className:"gutena-newsletter-form"},(0,l.createElement)("input",{type:"email",id:"gutena-newsletter-field",className:"gutena-newsletter-field",placeholder:"name@email.com"}),(0,l.createElement)("input",{type:"submit",id:"gutena-newsletter-action",className:"gutena-newsletter-action",value:"→",style:{color:t.iconColor}}))))}})}},l={};function r(e){var n=l[e];if(void 0!==n)return n.exports;var a=l[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,l,n,a)=>{if(!l){var i=1/0;for(u=0;u<e.length;u++){for(var[l,n,a]=e[u],o=!0,s=0;s<l.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](l[s])))?l.splice(s--,1):(o=!1,a<i&&(i=a));if(o){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[l,n,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={388:0,891:0};r.O.j=t=>0===e[t];var t=(t,l)=>{var n,a,[i,o,s]=l,c=0;if(i.some((t=>0!==e[t]))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(s)var u=s(r)}for(t&&t(l);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},l=globalThis.webpackChunknewsletter_block_gutena=globalThis.webpackChunknewsletter_block_gutena||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=r.O(void 0,[891],(()=>r(293)));n=r.O(n)})();