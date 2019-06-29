// Created by iWeb 3.0.4 local-build-20140518

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_0:new IWPhotoFrame([IWCreateImage('live_at_MPI-CBG_Xmas_2010_files/GraphPaper_01.png'),IWCreateImage('live_at_MPI-CBG_Xmas_2010_files/GraphPaper_02.png'),IWCreateImage('live_at_MPI-CBG_Xmas_2010_files/GraphPaper_01_1.png'),IWCreateImage('live_at_MPI-CBG_Xmas_2010_files/GraphPaper_01_2.png'),IWCreateImage('live_at_MPI-CBG_Xmas_2010_files/GraphPaper_09.png'),IWCreateImage('live_at_MPI-CBG_Xmas_2010_files/GraphPaper_08.png'),IWCreateImage('live_at_MPI-CBG_Xmas_2010_files/GraphPaper_07.png'),IWCreateImage('live_at_MPI-CBG_Xmas_2010_files/GraphPaper_01_3.png')],null,0,0.883333,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'live_at_MPI-CBG_Xmas_2010_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('live_at_MPI-CBG_Xmas_2010_files/live_at_MPI-CBG_Xmas_2010Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
