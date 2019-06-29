// Created by iWeb 3.0.4 local-build-20140701

function createMediaStream_id2()
{return IWCreatePhotocast("http://chalkie.selfhost.de/Chalkie_dot_Org_dot_UK/Science_photos_and_movies_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://chalkie.selfhost.de/Chalkie_dot_Org_dot_UK',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://chalkie.selfhost.de/Chalkie_dot_Org_dot_UK',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(190,190),new IWSize(190,32),new IWSize(204,237),27,27,0,new IWSize(18,31)),new IWPhotoFrame([IWCreateImage('Science_photos_and_movies_files/Pushpin_01.jpg'),IWCreateImage('Science_photos_and_movies_files/Pushpin_02.jpg'),IWCreateImage('Science_photos_and_movies_files/Pushpin_03.jpg'),IWCreateImage('Science_photos_and_movies_files/Pushpin_06.jpg'),IWCreateImage('Science_photos_and_movies_files/Pushpin_09.jpg'),IWCreateImage('Science_photos_and_movies_files/Pushpin_02_1.jpg'),IWCreateImage('Science_photos_and_movies_files/Pushpin_03_1.jpg'),IWCreateImage('Science_photos_and_movies_files/Pushpin_04.jpg')],null,1,0.500000,0.000000,0.000000,0.000000,0.000000,18.000000,18.000000,18.000000,18.000000,298.000000,472.000000,298.000000,472.000000,'Science_photos_and_movies_files/bullet_pp_3.png',new IWPoint(0.500000,-10),new IWSize(45,65),0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Science_photos_and_movies_files/Science_photos_and_moviesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
