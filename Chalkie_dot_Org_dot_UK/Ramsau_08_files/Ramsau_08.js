// Created by iWeb 3.0.4 local-build-20140701

function createMediaStream_id1()
{return IWCreatePhotocast("http://chalkie.selfhost.de/Chalkie_dot_Org_dot_UK/Ramsau_08_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://chalkie.selfhost.de/Chalkie_dot_Org_dot_UK',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://chalkie.selfhost.de/Chalkie_dot_Org_dot_UK',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(163,163),new IWSize(163,27),new IWSize(196,205),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-5,5,6,154),url:'Ramsau_08_files/stroke_8.png'},{rect:new IWRect(-5,-5,6,10),url:'Ramsau_08_files/stroke_9.png'},{rect:new IWRect(1,-2,159,7),url:'Ramsau_08_files/stroke_10.png'},{rect:new IWRect(160,-3,5,8),url:'Ramsau_08_files/stroke_11.png'},{rect:new IWRect(160,5,7,154),url:'Ramsau_08_files/stroke_12.png'},{rect:new IWRect(160,159,9,10),url:'Ramsau_08_files/stroke_13.png'},{rect:new IWRect(1,159,159,7),url:'Ramsau_08_files/stroke_14.png'},{rect:new IWRect(-7,159,8,7),url:'Ramsau_08_files/stroke_15.png'}],new IWSize(163,163)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-3,2,5,101),url:'Ramsau_08_files/stroke.png'},{rect:new IWRect(-3,-3,5,5),url:'Ramsau_08_files/stroke_1.png'},{rect:new IWRect(2,-3,496,5),url:'Ramsau_08_files/stroke_2.png'},{rect:new IWRect(498,-3,5,5),url:'Ramsau_08_files/stroke_3.png'},{rect:new IWRect(498,2,6,101),url:'Ramsau_08_files/stroke_4.png'},{rect:new IWRect(498,103,5,6),url:'Ramsau_08_files/stroke_5.png'},{rect:new IWRect(2,103,496,6),url:'Ramsau_08_files/stroke_6.png'},{rect:new IWRect(-3,103,5,7),url:'Ramsau_08_files/stroke_7.png'}],new IWSize(501,107))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Ramsau_08_files/Ramsau_08Moz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id2');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
