if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const r=e=>i(e,n),b={module:{uri:n},exports:t,require:r};a[n]=Promise.all(s.map((e=>b[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c219d92"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"420309ca7e2aea5bc045f0c92dd65bd5"},{url:"/_next/static/abtRAbGdiqCOJRtmsSbuu/_buildManifest.js",revision:"ae9eef61ecb4f32528f2e03fce5305d0"},{url:"/_next/static/abtRAbGdiqCOJRtmsSbuu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/396-4b8e2ef6e572afc0.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/717-4862d5dfa4cf94db.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/750-31b02d8c3670b8ff.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/841-1c9aed4474689b78.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/_not-found-a32ed941d7b87e29.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/layout-7e58fb302ddf7b97.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/page-61d96cc72323f63a.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/bord/page-0aff12fdcd1c8357.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/checkfortune/page-00456f3e54190ac5.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/community/page-a204297016fb12b6.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/contact/%5Bid%5D/page-9c7e622e48250afb.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/contact/page-6100e219c7c392e7.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/join/page-596932c21a05cc63.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/login/page-8cbd405559618d16.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/matchlist/page-1c9ed8ea4ee2d29a.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/myfortune/page-0a4c21307852e376.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/picklist/%5Bid%5D/page-e3f1ec91bd667e8f.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/picklist/page-d7a8bb1f399b05f6.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/pickone/page-9b72b384373a85fe.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/app/pages/write/page-ec2a59a0b2dc97ee.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/fd9d1056-e9a1b17cabaf5ce8.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/main-65e3480dcfee0da6.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/main-app-883ca716ce8ea4b2.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/pages/_app-27277a117f49dcf1.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/pages/_error-91a5938854a6f402.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-aed8b40bf04e8668.js",revision:"abtRAbGdiqCOJRtmsSbuu"},{url:"/_next/static/css/033ffc888848587b.css",revision:"033ffc888848587b"},{url:"/_next/static/css/0ffce07bac8db0d9.css",revision:"0ffce07bac8db0d9"},{url:"/_next/static/css/3da6a25dd65a11aa.css",revision:"3da6a25dd65a11aa"},{url:"/_next/static/css/4f7fdaf985d3ec82.css",revision:"4f7fdaf985d3ec82"},{url:"/_next/static/css/73591a778c967ce1.css",revision:"73591a778c967ce1"},{url:"/_next/static/css/896d05649667bf3c.css",revision:"896d05649667bf3c"},{url:"/_next/static/css/89cefbc84002b874.css",revision:"89cefbc84002b874"},{url:"/_next/static/css/ab89b597d730c051.css",revision:"ab89b597d730c051"},{url:"/_next/static/css/e7a39884e47a97ec.css",revision:"e7a39884e47a97ec"},{url:"/_next/static/css/e8da564c7cf1908d.css",revision:"e8da564c7cf1908d"},{url:"/_next/static/css/f51561db8626d7e8.css",revision:"f51561db8626d7e8"},{url:"/_next/static/css/f908063ce0885d40.css",revision:"f908063ce0885d40"},{url:"/_next/static/css/fe9bbb96f1b8c05c.css",revision:"fe9bbb96f1b8c05c"},{url:"/_next/static/media/gender_female1.2d3684a7.png",revision:"91f93042fbddc844eec506577bd4bb75"},{url:"/_next/static/media/gender_female2.7863bac8.png",revision:"456b245099e6b82c67879157e2d1e7d4"},{url:"/_next/static/media/gender_female3.b234a4b3.png",revision:"045d401efb28676d19b88a02d130b748"},{url:"/_next/static/media/gender_male1.645fe364.png",revision:"dbb8cc1571ff3e29627f98018736ea4b"},{url:"/_next/static/media/gender_male2.8487f631.png",revision:"fdc2bf9cf95bb10c117a4ce884f0177c"},{url:"/_next/static/media/gender_male3.4baba4da.png",revision:"beb496a87f77101ab033afc28013ead5"},{url:"/_next/static/media/icon_heart.c42a472d.png",revision:"c42a472d"},{url:"/favicomatic/apple-touch-icon-114x114.png",revision:"0177aec929bfb212d7df87dbdaf7cbbf"},{url:"/favicomatic/apple-touch-icon-120x120.png",revision:"62c6e24a3cda80bf92c0d897543783f5"},{url:"/favicomatic/apple-touch-icon-144x144.png",revision:"73cf30e589d3f6a156c68763b2575dee"},{url:"/favicomatic/apple-touch-icon-152x152.png",revision:"cc0a87804904b4f7a7c12cd785feb568"},{url:"/favicomatic/apple-touch-icon-57x57.png",revision:"c65cbbc34aa94b3459d2a027d762a13b"},{url:"/favicomatic/apple-touch-icon-60x60.png",revision:"f4d0eee6e25f7686440ede7e61c5c8b9"},{url:"/favicomatic/apple-touch-icon-72x72.png",revision:"ff1fc305bd12b60577d8233f17895a26"},{url:"/favicomatic/apple-touch-icon-76x76.png",revision:"90094055e851a4942bedc1a5ffb43c50"},{url:"/favicomatic/code.txt",revision:"3eefd6f286ef79e3471e70d6bd75469a"},{url:"/favicomatic/favicon-128.png",revision:"dd9169eae1e8864a479bccde9009697e"},{url:"/favicomatic/favicon-16x16.png",revision:"ad4b2184971ac5235a8fab307ffc9620"},{url:"/favicomatic/favicon-196x196.png",revision:"cd8511d4caeed9e33585454fa0b46d82"},{url:"/favicomatic/favicon-32x32.png",revision:"84145ba562d9fee8479f3219eecf0533"},{url:"/favicomatic/favicon-96x96.png",revision:"0c473ec0c5aa1d77beaccd8b29e0dcfa"},{url:"/favicomatic/favicon.ico",revision:"64c890f70a75c2862e707b47f2bbb774"},{url:"/favicomatic/mstile-144x144.png",revision:"73cf30e589d3f6a156c68763b2575dee"},{url:"/favicomatic/mstile-150x150.png",revision:"8249eccac92319591febf154911bedb1"},{url:"/favicomatic/mstile-310x150.png",revision:"69adca8b87007595ba488da32ad313be"},{url:"/favicomatic/mstile-310x310.png",revision:"da259b266962585987ec7c19fe2ffb18"},{url:"/favicomatic/mstile-70x70.png",revision:"dd9169eae1e8864a479bccde9009697e"},{url:"/imges/ball.png",revision:"8aed4353c3c7faaabe4341665c797f12"},{url:"/imges/community.png",revision:"0fec7e46de1b230af66dddd5fe2877fe"},{url:"/imges/gender_female.png",revision:"91f93042fbddc844eec506577bd4bb75"},{url:"/imges/gender_female1.png",revision:"91f93042fbddc844eec506577bd4bb75"},{url:"/imges/gender_female2.png",revision:"456b245099e6b82c67879157e2d1e7d4"},{url:"/imges/gender_female3.png",revision:"045d401efb28676d19b88a02d130b748"},{url:"/imges/gender_male.png",revision:"dbb8cc1571ff3e29627f98018736ea4b"},{url:"/imges/gender_male1.png",revision:"dbb8cc1571ff3e29627f98018736ea4b"},{url:"/imges/gender_male2.png",revision:"fdc2bf9cf95bb10c117a4ce884f0177c"},{url:"/imges/gender_male3.png",revision:"beb496a87f77101ab033afc28013ead5"},{url:"/imges/icon_arrow_back.png",revision:"2fac03048c6aa6db37c7aa432a5548b7"},{url:"/imges/icon_arrow_forward.png",revision:"b3d89fc9fad4b8c1d8d3a679aea2d08b"},{url:"/imges/icon_heart.png",revision:"a47cf214cdd298a3c7b46c401bfe4ea2"},{url:"/imges/icon_heart_black.png",revision:"8897879f6a876ef09c32162ca04aa5cc"},{url:"/imges/icon_pencil.png",revision:"4309b6a89e1c37b245728a49c1693af1"},{url:"/imges/icon_submit_update.png",revision:"db3698a0a0d88d9883a0d2167a14b150"},{url:"/imges/icon_write.png",revision:"71b1eb050d77477d8532d284aabbd1ce"},{url:"/imges/image 12.png",revision:"d71556a0245dfa99f8ccc4d6ca497346"},{url:"/imges/image 8.png",revision:"bb9d073bd3747ab4548d8af9d036725e"},{url:"/imges/line.png",revision:"ee969c06e01eac30705d5215bf7932a1"},{url:"/imges/loading.gif",revision:"81f981504ae2063323606cb29793a8a5"},{url:"/imges/loading2.gif",revision:"0ac274e561067ee9d830b19fb13dac5c"},{url:"/imges/logout.png",revision:"593bc5076779fac919bf800833232842"},{url:"/imges/main.png",revision:"6de5ddca3c13271fed5d2a098fa025ef"},{url:"/imges/main_angel_cut.png",revision:"e367a810eb78b4bd722aa82216fc7abe"},{url:"/imges/match.png",revision:"f015806bae4ce3aa784e1e04a3b89e5f"},{url:"/imges/pick.png",revision:"2ceb40c1df73647222a353249fc03914"},{url:"/imges/reply.png",revision:"4435cc7def6de3c7e9c6c3c8003d2224"},{url:"/imges/x.png",revision:"294c7531f79f0240ff08f9948d1405f6"},{url:"/manifest.json",revision:"4d0cd1d7410806b26e8744ce17af0b75"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
