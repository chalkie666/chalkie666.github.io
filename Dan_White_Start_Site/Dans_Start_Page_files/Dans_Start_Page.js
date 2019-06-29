// Created by iWeb 3.0.4 local-build-20140701

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.33,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Dans_Start_Page_files/Dans_Start_PageMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('Dans_Start_Page_files','shapeimage_2','0');IMpreload('Dans_Start_Page_files','shapeimage_2','1');IMpreload('Dans_Start_Page_files','shapeimage_2','2');IMpreload('Dans_Start_Page_files','shapeimage_2','3');IMpreload('Dans_Start_Page_files','shapeimage_2','4');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
