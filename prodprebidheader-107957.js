var rtbpbjs=rtbpbjs||{};rtbpbjs.que=rtbpbjs.que||[];var getQueryString_val_new=function(field,url){var href=url?url:window.location.href;var reg=new RegExp('[?&]'+field+'=([^&#]*)','i');var string=reg.exec(href);return string?string[1]:null;};var blocksitetest=getQueryString_val_new('blocksitetest');var lineitemidcode={};var adslot88=setInterval(function(){var andbeyondcreativead=Array();if(window.googletag&&googletag.pubadsReady&&googletag.apiReady){clearInterval(adslot88);googletag.cmd.push(function(){googletag.pubads().addEventListener('slotRenderEnded',function(event){var slot=event.slot;var andbeyondslotname=slot.getAdUnitPath().toString();var andbeyondcreativediv=slot.getSlotElementId();var andbeyondlineitemID=event.lineItemId;var andbeyondcreativeId=event.creativeId;var andbeyondadvertiserId=event.advertiserId;var andbeyondcampaignId=event.campaignId;creativeid1(andbeyondlineitemID,andbeyondcreativediv,andbeyondslotname,andbeyondcreativeId,andbeyondadvertiserId,andbeyondcampaignId);});});}
function creativeid1(andbeyondlineitemID,andbeyondcreativediv,andbeyondslotname,andbeyondcreativeId,andbeyondadvertiserId,andbeyondcampaignId){andbeyondtemp={};if(andbeyondlineitemID!=null&&andbeyondcreativediv.indexOf("andbeyond")<0){andbeyondtemp['abplineItemId']=andbeyondlineitemID;andbeyondtemp['abpcreativeDIV']=andbeyondcreativediv;andbeyondtemp['abpslotname']=andbeyondslotname;andbeyondtemp['abpcreativeID']=andbeyondcreativeId;andbeyondtemp['abpadvertiserId']=andbeyondadvertiserId;andbeyondtemp['abpcampaignId']=andbeyondcampaignId;lineitemidcode[andbeyondslotname]=andbeyondtemp;}}},101);if(!googletag||!googletag.apiReady||googletag.apiready&&!googletag.pubadsReady){var googletag=googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){googletag.pubads().enableSingleRequest();googletag.enableServices();});}
function refreshbid2teads(id){id1=eval(id);googletag.pubads().refresh([id1]);}
var randomvaldatatestand=Math.floor(Math.random()*10)+1;var url22=window.location.origin+window.location.pathname;setTimeout(function(){var smailetest1=1;var windowwidth1=window.innerWidth;setInterval(function(){if(window.googletag&&googletag.pubadsReady&&googletag.apiReady){if(document.querySelector('#adunit1x1')){}else{var test17='<div style="width:1px;height:1px;"><div id="adunit1x1"><scr'+'ipt>google'+'tag.cmd.'+'push(func'+'tion() { google'+'tag.displ'+'ay("adunit1x1"); });</scr'+'ipt></div></div></div>';if(document.querySelectorAll(".article-nwsplit-arp-wrap-nf")[0]){googletag.cmd.push(function(){adunit1x1=googletag.defineSlot("/21751243814,78059622/537953_KT_Teads_Inread_1x1",[1,1],"adunit1x1").addService(googletag.pubads().setTargeting("prebidtrue",'0'));});document.querySelectorAll("body")[0].insertAdjacentHTML("afterend",test17);refreshbid2teads('adunit1x1');}}}},1000);},2000);