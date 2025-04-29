gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDTitleObjects1= [];
gdjs.MainCode.GDTitleObjects2= [];
gdjs.MainCode.GDP1ButtonObjects1= [];
gdjs.MainCode.GDP1ButtonObjects2= [];
gdjs.MainCode.GDP2ButtonObjects1= [];
gdjs.MainCode.GDP2ButtonObjects2= [];
gdjs.MainCode.GDQuitButtonObjects1= [];
gdjs.MainCode.GDQuitButtonObjects2= [];
gdjs.MainCode.GDSquareWhiteSliderObjects1= [];
gdjs.MainCode.GDSquareWhiteSliderObjects2= [];
gdjs.MainCode.GDsetSpeedObjects1= [];
gdjs.MainCode.GDsetSpeedObjects2= [];
gdjs.MainCode.GDHighScoreUIObjects1= [];
gdjs.MainCode.GDHighScoreUIObjects2= [];
gdjs.MainCode.GDHSUITextObjects1= [];
gdjs.MainCode.GDHSUITextObjects2= [];
gdjs.MainCode.GDHSTextObjects1= [];
gdjs.MainCode.GDHSTextObjects2= [];
gdjs.MainCode.GDGuide1LObjects1= [];
gdjs.MainCode.GDGuide1LObjects2= [];
gdjs.MainCode.GDGuide1RObjects1= [];
gdjs.MainCode.GDGuide1RObjects2= [];
gdjs.MainCode.GDGuideObjects1= [];
gdjs.MainCode.GDGuideObjects2= [];
gdjs.MainCode.GDGuide2LObjects1= [];
gdjs.MainCode.GDGuide2LObjects2= [];
gdjs.MainCode.GDGuide2RObjects1= [];
gdjs.MainCode.GDGuide2RObjects2= [];
gdjs.MainCode.GDBackgroundObjects1= [];
gdjs.MainCode.GDBackgroundObjects2= [];


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HSText"), gdjs.MainCode.GDHSTextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDHSTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDHSTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(8).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("P1Button"), gdjs.MainCode.GDP1ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDP1ButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDP1ButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDP1ButtonObjects1[k] = gdjs.MainCode.GDP1ButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDP1ButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.MainCode.GDSquareWhiteSliderObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber((( gdjs.MainCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDSquareWhiteSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "P1Game");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("P2Button"), gdjs.MainCode.GDP2ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDP2ButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDP2ButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDP2ButtonObjects1[k] = gdjs.MainCode.GDP2ButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDP2ButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.MainCode.GDSquareWhiteSliderObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber((( gdjs.MainCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.MainCode.GDSquareWhiteSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "P2Game");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MainCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDQuitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDQuitButtonObjects1[k] = gdjs.MainCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDQuitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDTitleObjects1.length = 0;
gdjs.MainCode.GDTitleObjects2.length = 0;
gdjs.MainCode.GDP1ButtonObjects1.length = 0;
gdjs.MainCode.GDP1ButtonObjects2.length = 0;
gdjs.MainCode.GDP2ButtonObjects1.length = 0;
gdjs.MainCode.GDP2ButtonObjects2.length = 0;
gdjs.MainCode.GDQuitButtonObjects1.length = 0;
gdjs.MainCode.GDQuitButtonObjects2.length = 0;
gdjs.MainCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.MainCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.MainCode.GDsetSpeedObjects1.length = 0;
gdjs.MainCode.GDsetSpeedObjects2.length = 0;
gdjs.MainCode.GDHighScoreUIObjects1.length = 0;
gdjs.MainCode.GDHighScoreUIObjects2.length = 0;
gdjs.MainCode.GDHSUITextObjects1.length = 0;
gdjs.MainCode.GDHSUITextObjects2.length = 0;
gdjs.MainCode.GDHSTextObjects1.length = 0;
gdjs.MainCode.GDHSTextObjects2.length = 0;
gdjs.MainCode.GDGuide1LObjects1.length = 0;
gdjs.MainCode.GDGuide1LObjects2.length = 0;
gdjs.MainCode.GDGuide1RObjects1.length = 0;
gdjs.MainCode.GDGuide1RObjects2.length = 0;
gdjs.MainCode.GDGuideObjects1.length = 0;
gdjs.MainCode.GDGuideObjects2.length = 0;
gdjs.MainCode.GDGuide2LObjects1.length = 0;
gdjs.MainCode.GDGuide2LObjects2.length = 0;
gdjs.MainCode.GDGuide2RObjects1.length = 0;
gdjs.MainCode.GDGuide2RObjects2.length = 0;
gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDTitleObjects1.length = 0;
gdjs.MainCode.GDTitleObjects2.length = 0;
gdjs.MainCode.GDP1ButtonObjects1.length = 0;
gdjs.MainCode.GDP1ButtonObjects2.length = 0;
gdjs.MainCode.GDP2ButtonObjects1.length = 0;
gdjs.MainCode.GDP2ButtonObjects2.length = 0;
gdjs.MainCode.GDQuitButtonObjects1.length = 0;
gdjs.MainCode.GDQuitButtonObjects2.length = 0;
gdjs.MainCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.MainCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.MainCode.GDsetSpeedObjects1.length = 0;
gdjs.MainCode.GDsetSpeedObjects2.length = 0;
gdjs.MainCode.GDHighScoreUIObjects1.length = 0;
gdjs.MainCode.GDHighScoreUIObjects2.length = 0;
gdjs.MainCode.GDHSUITextObjects1.length = 0;
gdjs.MainCode.GDHSUITextObjects2.length = 0;
gdjs.MainCode.GDHSTextObjects1.length = 0;
gdjs.MainCode.GDHSTextObjects2.length = 0;
gdjs.MainCode.GDGuide1LObjects1.length = 0;
gdjs.MainCode.GDGuide1LObjects2.length = 0;
gdjs.MainCode.GDGuide1RObjects1.length = 0;
gdjs.MainCode.GDGuide1RObjects2.length = 0;
gdjs.MainCode.GDGuideObjects1.length = 0;
gdjs.MainCode.GDGuideObjects2.length = 0;
gdjs.MainCode.GDGuide2LObjects1.length = 0;
gdjs.MainCode.GDGuide2LObjects2.length = 0;
gdjs.MainCode.GDGuide2RObjects1.length = 0;
gdjs.MainCode.GDGuide2RObjects2.length = 0;
gdjs.MainCode.GDBackgroundObjects1.length = 0;
gdjs.MainCode.GDBackgroundObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
