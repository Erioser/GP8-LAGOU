(function(window){var svgSprite='<svg><symbol id="icon-mine" viewBox="0 0 1024 1024"><path d="M909.941268 908.539338c-7.472182-111.620194-62.636572-215.4694-151.337777-284.933471l-5.332449-3.682879-0.048095 0.071631c-5.0449-3.084245-10.79588-4.734838-16.714683-4.734838-20.337187 0-32.472576 9.804297-32.472576 26.231431 0 9.564843 4.423753 18.555611 11.847839 24.653493l-0.083911 0.143263 4.710278 3.371794c74.389244 53.1802 116.27112 133.834124 124.472919 239.763712l0.088004 1.155313c-0.073678 0.890276-0.12075 1.787716-0.12075 2.696412 0 17.900695 14.511505 32.413224 32.413224 32.413224 17.300015 0 31.431873-13.554714 32.361035-30.622438l0.644683 0L909.941268 908.539338z"  ></path><path d="M805.554826 365.66005c0-161.142074-132.674719-292.25011-295.765167-292.25011S214.023468 204.517977 214.023468 365.66005c0 86.823438 38.390355 167.813007 105.678878 223.647663-120.791064 64.466244-200.967104 187.445136-210.041784 323.216379l-0.373507 5.659907c-0.007163 0.11768-0.017396 0.233314-0.023536 0.352017l-0.033769 0.515746 0.020466 0c-0.008186 0.275269-0.020466 0.550539-0.020466 0.827855 0 15.176654 12.30321 27.480888 27.480888 27.480888 15.176654 0 27.480888-12.30321 27.480888-27.480888 0-0.277316-0.01228-0.552585-0.020466-0.827855l0.571005 0 0.430812-5.643534c9.958816-129.028679 91.737354-242.011916 208.630644-288.568255 34.898835 16.21224 88.175225 33.093722 135.962601 33.093722 44.273343 0 87.266529-9.756201 128.203894-29.220508l29.984918-17.407462 24.485671-16.068977C764.318656 539.284413 805.554826 455.592292 805.554826 365.66005zM509.788635 599.087451c-130.319068 0-236.332567-104.734366-236.332567-233.450936 0-128.694057 106.013499-233.403864 236.332567-233.403864 130.331347 0 236.357126 104.709807 236.357126 233.403864C746.145761 494.354108 640.119983 599.087451 509.788635 599.087451z"  ></path></symbol><symbol id="icon-home" viewBox="0 0 1040 1024"><path d="M1020.076628 500.229885 519.846743 0 19.616858 500.229885c-15.693487 15.693487-15.693487 39.233716 0 54.927203 15.693487 15.693487 39.233716 15.693487 54.927203 0l56.888889-56.888889 3.923372 474.727969c0 27.463602 23.54023 51.003831 51.003831 51.003831l665.011494 0c27.463602 0 51.003831-23.54023 51.003831-51.003831l5.885057-472.766284 56.888889 56.888889c7.846743 7.846743 17.655172 11.770115 27.463602 11.770115 9.808429 0 19.616858-3.923372 27.463602-11.770115C1033.808429 539.463602 1033.808429 515.923372 1020.076628 500.229885zM602.237548 980.842912l-162.819923 0 0-162.819923c0-17.655172 23.54023-41.195402 41.195402-41.195402l82.390805 0c17.655172 0 41.195402 23.54023 41.195402 41.195402L604.199234 980.842912z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M662.635 460.563q0-87.1-61.912-149.013t-149.013-61.912-149.013 61.912-61.912 149.013 61.912 149.013 149.013 61.912 149.013-61.912 61.912-149.013zM903.69 852.278q0 24.482-17.891 42.373t-42.373 17.891q-25.424 0-42.373-17.891l-161.488-161.017q-84.276 58.381-187.853 58.381-67.326 0-128.768-26.13t-105.933-70.622-70.622-105.933-26.13-128.768 26.13-128.768 70.622-105.933 105.933-70.622 128.768-26.13 128.767 26.13 105.933 70.622 70.622 105.933 26.13 128.768q0 103.578-58.381 187.853l161.488 161.488q17.421 17.421 17.421 42.373z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)