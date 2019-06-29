// Created by iWeb 3.0.4 local-build-20140701

function createMediaStream_id1()
{return IWCreatePhotocast("http://chalkie.selfhost.de/Chalkie_dot_Org_dot_UK/Xmas_Matlock_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://chalkie.selfhost.de/Chalkie_dot_Org_dot_UK',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://chalkie.selfhost.de/Chalkie_dot_Org_dot_UK',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(191,191),new IWSize(191,34),new IWSize(229,240),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-5,5,8,182),url:'Xmas_Matlock_files/stroke.png'},{rect:new IWRect(-5,-4,8,9),url:'Xmas_Matlock_files/stroke_1.png'},{rect:new IWRect(3,-3,186,8),url:'Xmas_Matlock_files/stroke_2.png'},{rect:new IWRect(189,-4,8,9),url:'Xmas_Matlock_files/stroke_3.png'},{rect:new IWRect(189,5,6,182),url:'Xmas_Matlock_files/stroke_4.png'},{rect:new IWRect(189,187,5,9),url:'Xmas_Matlock_files/stroke_5.png'},{rect:new IWRect(3,187,186,9),url:'Xmas_Matlock_files/stroke_6.png'},{rect:new IWRect(-5,187,8,7),url:'Xmas_Matlock_files/stroke_7.png'}],new IWSize(191,191)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Xmas_Matlock_files/Xmas_MatlockMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id2');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
