// Created by iWeb 3.0.4 local-build-20140701

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://chalkie.selfhost.de/Chalkie_dot_Org_dot_UK/Old_Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Old_Blog_files/Old_BlogMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
