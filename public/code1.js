gdjs.P1GameCode = {};
gdjs.P1GameCode.localVariables = [];
gdjs.P1GameCode.GDPlayerObjects1_1final = [];

gdjs.P1GameCode.GDPlayerObjects1= [];
gdjs.P1GameCode.GDPlayerObjects2= [];
gdjs.P1GameCode.GDPlayerObjects3= [];
gdjs.P1GameCode.GDPlatform0Objects1= [];
gdjs.P1GameCode.GDPlatform0Objects2= [];
gdjs.P1GameCode.GDPlatform0Objects3= [];
gdjs.P1GameCode.GDSideObjects1= [];
gdjs.P1GameCode.GDSideObjects2= [];
gdjs.P1GameCode.GDSideObjects3= [];
gdjs.P1GameCode.GDPlatform1Objects1= [];
gdjs.P1GameCode.GDPlatform1Objects2= [];
gdjs.P1GameCode.GDPlatform1Objects3= [];
gdjs.P1GameCode.GDTImeTextObjects1= [];
gdjs.P1GameCode.GDTImeTextObjects2= [];
gdjs.P1GameCode.GDTImeTextObjects3= [];
gdjs.P1GameCode.GDSpeedObjects1= [];
gdjs.P1GameCode.GDSpeedObjects2= [];
gdjs.P1GameCode.GDSpeedObjects3= [];
gdjs.P1GameCode.GDGreenFlatBarObjects1= [];
gdjs.P1GameCode.GDGreenFlatBarObjects2= [];
gdjs.P1GameCode.GDGreenFlatBarObjects3= [];
gdjs.P1GameCode.GDUpperformObjects1= [];
gdjs.P1GameCode.GDUpperformObjects2= [];
gdjs.P1GameCode.GDUpperformObjects3= [];
gdjs.P1GameCode.GDItem0Objects1= [];
gdjs.P1GameCode.GDItem0Objects2= [];
gdjs.P1GameCode.GDItem0Objects3= [];
gdjs.P1GameCode.GDExplosion1Objects1= [];
gdjs.P1GameCode.GDExplosion1Objects2= [];
gdjs.P1GameCode.GDExplosion1Objects3= [];
gdjs.P1GameCode.GDPlatform2Objects1= [];
gdjs.P1GameCode.GDPlatform2Objects2= [];
gdjs.P1GameCode.GDPlatform2Objects3= [];
gdjs.P1GameCode.GDPlatform3Objects1= [];
gdjs.P1GameCode.GDPlatform3Objects2= [];
gdjs.P1GameCode.GDPlatform3Objects3= [];
gdjs.P1GameCode.GDTimeUIObjects1= [];
gdjs.P1GameCode.GDTimeUIObjects2= [];
gdjs.P1GameCode.GDTimeUIObjects3= [];
gdjs.P1GameCode.GDTimeLabelObjects1= [];
gdjs.P1GameCode.GDTimeLabelObjects2= [];
gdjs.P1GameCode.GDTimeLabelObjects3= [];
gdjs.P1GameCode.GDHighScoreUIObjects1= [];
gdjs.P1GameCode.GDHighScoreUIObjects2= [];
gdjs.P1GameCode.GDHighScoreUIObjects3= [];
gdjs.P1GameCode.GDHSLabelObjects1= [];
gdjs.P1GameCode.GDHSLabelObjects2= [];
gdjs.P1GameCode.GDHSLabelObjects3= [];
gdjs.P1GameCode.GDHSTextObjects1= [];
gdjs.P1GameCode.GDHSTextObjects2= [];
gdjs.P1GameCode.GDHSTextObjects3= [];
gdjs.P1GameCode.GDPlatform4Objects1= [];
gdjs.P1GameCode.GDPlatform4Objects2= [];
gdjs.P1GameCode.GDPlatform4Objects3= [];
gdjs.P1GameCode.GDItem1Objects1= [];
gdjs.P1GameCode.GDItem1Objects2= [];
gdjs.P1GameCode.GDItem1Objects3= [];
gdjs.P1GameCode.GDItem2Objects1= [];
gdjs.P1GameCode.GDItem2Objects2= [];
gdjs.P1GameCode.GDItem2Objects3= [];
gdjs.P1GameCode.GDItem3Objects1= [];
gdjs.P1GameCode.GDItem3Objects2= [];
gdjs.P1GameCode.GDItem3Objects3= [];
gdjs.P1GameCode.GDBackgroundObjects1= [];
gdjs.P1GameCode.GDBackgroundObjects2= [];
gdjs.P1GameCode.GDBackgroundObjects3= [];


gdjs.P1GameCode.asyncCallback15629804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.P1GameCode.localVariables);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}gdjs.P1GameCode.localVariables.length = 0;
}
gdjs.P1GameCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.P1GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.P1GameCode.asyncCallback15629804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.P1GameCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(11));
}
{ //Subevents
gdjs.P1GameCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.P1GameCode.asyncCallback15628556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.P1GameCode.localVariables);

{ //Subevents
gdjs.P1GameCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.P1GameCode.localVariables.length = 0;
}
gdjs.P1GameCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.P1GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(10)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.P1GameCode.asyncCallback15628556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.P1GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15628644);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).getChild("Score").setNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
{ //Subevents
gdjs.P1GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.P1GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.P1GameCode.GDPlayerObjects1, gdjs.P1GameCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDPlayerObjects2[k] = gdjs.P1GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{

/* Reuse gdjs.P1GameCode.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDPlayerObjects1[k] = gdjs.P1GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


};gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.P1GameCode.GDPlayerObjects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform0Objects1Objects = Hashtable.newFrom({"Platform0": gdjs.P1GameCode.GDPlatform0Objects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.P1GameCode.GDPlayerObjects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform1Objects1Objects = Hashtable.newFrom({"Platform1": gdjs.P1GameCode.GDPlatform1Objects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.P1GameCode.GDPlayerObjects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform2Objects1Objects = Hashtable.newFrom({"Platform2": gdjs.P1GameCode.GDPlatform2Objects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.P1GameCode.GDPlayerObjects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform3Objects1Objects = Hashtable.newFrom({"Platform3": gdjs.P1GameCode.GDPlatform3Objects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.P1GameCode.GDPlayerObjects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform4Objects1Objects = Hashtable.newFrom({"Platform4": gdjs.P1GameCode.GDPlatform4Objects1});
gdjs.P1GameCode.asyncCallback15640268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.P1GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}gdjs.P1GameCode.localVariables.length = 0;
}
gdjs.P1GameCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.P1GameCode.localVariables);
for (const obj of gdjs.P1GameCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.P1GameCode.asyncCallback15640268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.P1GameCode.GDPlayerObjects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDUpperformObjects1Objects = Hashtable.newFrom({"Upperform": gdjs.P1GameCode.GDUpperformObjects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.P1GameCode.GDPlayerObjects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDItem0Objects1Objects = Hashtable.newFrom({"Item0": gdjs.P1GameCode.GDItem0Objects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.P1GameCode.GDExplosion1Objects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.P1GameCode.GDPlayerObjects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDItem1Objects1Objects = Hashtable.newFrom({"Item1": gdjs.P1GameCode.GDItem1Objects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.P1GameCode.GDExplosion1Objects1});
gdjs.P1GameCode.asyncCallback15644732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.P1GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setAcceleration(2000);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setDeceleration(2000);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(500);
}
}gdjs.P1GameCode.localVariables.length = 0;
}
gdjs.P1GameCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.P1GameCode.localVariables);
for (const obj of gdjs.P1GameCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.P1GameCode.asyncCallback15644732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.P1GameCode.GDPlayerObjects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDItem2Objects1Objects = Hashtable.newFrom({"Item2": gdjs.P1GameCode.GDItem2Objects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.P1GameCode.GDExplosion1Objects1});
gdjs.P1GameCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() < 1);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


};gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.P1GameCode.GDPlayerObjects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDItem3Objects1Objects = Hashtable.newFrom({"Item3": gdjs.P1GameCode.GDItem3Objects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDExplosion1Objects1Objects = Hashtable.newFrom({"Explosion1": gdjs.P1GameCode.GDExplosion1Objects1});
gdjs.P1GameCode.asyncCallback15649340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.P1GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setAcceleration(2000);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setDeceleration(2000);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(500);
}
}gdjs.P1GameCode.localVariables.length = 0;
}
gdjs.P1GameCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.P1GameCode.localVariables);
for (const obj of gdjs.P1GameCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.P1GameCode.asyncCallback15649340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform0Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform1Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform2Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform3Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform4Objects1Objects = Hashtable.newFrom({"Platform0": gdjs.P1GameCode.GDPlatform0Objects1, "Platform1": gdjs.P1GameCode.GDPlatform1Objects1, "Platform2": gdjs.P1GameCode.GDPlatform2Objects1, "Platform3": gdjs.P1GameCode.GDPlatform3Objects1, "Platform4": gdjs.P1GameCode.GDPlatform4Objects1});
gdjs.P1GameCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.P1GameCode.GDPlatform2Objects1, gdjs.P1GameCode.GDPlatform2Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlatform2Objects2.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlatform2Objects2[i].getX() > 770 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDPlatform2Objects2[k] = gdjs.P1GameCode.GDPlatform2Objects2[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlatform2Objects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(-(1));
}}

}


{

/* Reuse gdjs.P1GameCode.GDPlatform2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlatform2Objects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlatform2Objects1[i].getX() < 16 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDPlatform2Objects1[k] = gdjs.P1GameCode.GDPlatform2Objects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlatform2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}}

}


};gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDItem0Objects1ObjectsGDgdjs_9546P1GameCode_9546GDItem1Objects1ObjectsGDgdjs_9546P1GameCode_9546GDItem2Objects1ObjectsGDgdjs_9546P1GameCode_9546GDItem3Objects1Objects = Hashtable.newFrom({"Item0": gdjs.P1GameCode.GDItem0Objects1, "Item1": gdjs.P1GameCode.GDItem1Objects1, "Item2": gdjs.P1GameCode.GDItem2Objects1, "Item3": gdjs.P1GameCode.GDItem3Objects1});
gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform0Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform1Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform2Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform3Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform4Objects1Objects = Hashtable.newFrom({"Platform0": gdjs.P1GameCode.GDPlatform0Objects1, "Platform1": gdjs.P1GameCode.GDPlatform1Objects1, "Platform2": gdjs.P1GameCode.GDPlatform2Objects1, "Platform3": gdjs.P1GameCode.GDPlatform3Objects1, "Platform4": gdjs.P1GameCode.GDPlatform4Objects1});
gdjs.P1GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PlatformTime");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "LevelTime");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HPTime");
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(20);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(20);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(600);
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(500);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(2000);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setDeceleration(2000);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HSText"), gdjs.P1GameCode.GDHSTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TImeText"), gdjs.P1GameCode.GDTImeTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(Math.ceil(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Timer")));
}{for(var i = 0, len = gdjs.P1GameCode.GDTImeTextObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDTImeTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()));
}
}{for(var i = 0, len = gdjs.P1GameCode.GDHSTextObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDHSTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(11).getChild(0).getChild("Score").getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreenFlatBar"), gdjs.P1GameCode.GDGreenFlatBarObjects1);
{for(var i = 0, len = gdjs.P1GameCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDGreenFlatBarObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.P1GameCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDGreenFlatBarObjects1[i].SetMaxValue(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenFlatBar"), gdjs.P1GameCode.GDGreenFlatBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDGreenFlatBarObjects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDGreenFlatBarObjects1[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDGreenFlatBarObjects1[k] = gdjs.P1GameCode.GDGreenFlatBarObjects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDGreenFlatBarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Dead");
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Timer");
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "PlatformTime");
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "HPTime");
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "LevelTime");
}
{ //Subevents
gdjs.P1GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GreenFlatBar"), gdjs.P1GameCode.GDGreenFlatBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDPlayerObjects1[k] = gdjs.P1GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDGreenFlatBarObjects1.length;i<l;++i) {
    if ( !(gdjs.P1GameCode.GDGreenFlatBarObjects1[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDGreenFlatBarObjects1[k] = gdjs.P1GameCode.GDGreenFlatBarObjects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDGreenFlatBarObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.P1GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.P1GameCode.GDPlayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.P1GameCode.GDPlayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects2);
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_1 = true;
        gdjs.P1GameCode.GDPlayerObjects2[k] = gdjs.P1GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.P1GameCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.P1GameCode.GDPlayerObjects1_1final.indexOf(gdjs.P1GameCode.GDPlayerObjects2[j]) === -1 )
            gdjs.P1GameCode.GDPlayerObjects1_1final.push(gdjs.P1GameCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.P1GameCode.GDPlayerObjects1_1final, gdjs.P1GameCode.GDPlayerObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.P1GameCode.GDPlayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.P1GameCode.GDPlayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects2);
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_1 = true;
        gdjs.P1GameCode.GDPlayerObjects2[k] = gdjs.P1GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.P1GameCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.P1GameCode.GDPlayerObjects1_1final.indexOf(gdjs.P1GameCode.GDPlayerObjects2[j]) === -1 )
            gdjs.P1GameCode.GDPlayerObjects1_1final.push(gdjs.P1GameCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.P1GameCode.GDPlayerObjects1_1final, gdjs.P1GameCode.GDPlayerObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform0"), gdjs.P1GameCode.GDPlatform0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform0Objects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15635556);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform1"), gdjs.P1GameCode.GDPlatform1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform1Objects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15636468);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.P1GameCode.GDPlatform2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform2Objects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15637380);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform3"), gdjs.P1GameCode.GDPlatform3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform3Objects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15638292);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDPlatform3Objects1 */
{for(var i = 0, len = gdjs.P1GameCode.GDPlatform3Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform3Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform4"), gdjs.P1GameCode.GDPlatform4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform4Objects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15639324);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDPlayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(515);
}
}
{ //Subevents
gdjs.P1GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Upperform"), gdjs.P1GameCode.GDUpperformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects, gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDUpperformObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15641308);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDPlayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(5);
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].setY(gdjs.P1GameCode.GDPlayerObjects1[i].getY() + (50));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Item0"), gdjs.P1GameCode.GDItem0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects, gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDItem0Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15641892);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDItem0Objects1 */
gdjs.P1GameCode.GDExplosion1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDExplosion1Objects1Objects, (( gdjs.P1GameCode.GDItem0Objects1.length === 0 ) ? 0 :gdjs.P1GameCode.GDItem0Objects1[0].getPointX("")), (( gdjs.P1GameCode.GDItem0Objects1.length === 0 ) ? 0 :gdjs.P1GameCode.GDItem0Objects1[0].getPointY("")), "");
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(5);
}{for(var i = 0, len = gdjs.P1GameCode.GDItem0Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem0Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Item1"), gdjs.P1GameCode.GDItem1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects, gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDItem1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15643484);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDItem1Objects1 */
/* Reuse gdjs.P1GameCode.GDPlayerObjects1 */
gdjs.P1GameCode.GDExplosion1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDExplosion1Objects1Objects, (( gdjs.P1GameCode.GDItem1Objects1.length === 0 ) ? 0 :gdjs.P1GameCode.GDItem1Objects1[0].getPointX("")), (( gdjs.P1GameCode.GDItem1Objects1.length === 0 ) ? 0 :gdjs.P1GameCode.GDItem1Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.P1GameCode.GDItem1Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(2500);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setDeceleration(2500);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(750);
}
}
{ //Subevents
gdjs.P1GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Item2"), gdjs.P1GameCode.GDItem2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects, gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDItem2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15646260);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDItem2Objects1 */
gdjs.P1GameCode.GDExplosion1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDExplosion1Objects1Objects, (( gdjs.P1GameCode.GDItem2Objects1.length === 0 ) ? 0 :gdjs.P1GameCode.GDItem2Objects1[0].getPointX("")), (( gdjs.P1GameCode.GDItem2Objects1.length === 0 ) ? 0 :gdjs.P1GameCode.GDItem2Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.P1GameCode.GDItem2Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).sub(5);
}
{ //Subevents
gdjs.P1GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Item3"), gdjs.P1GameCode.GDItem3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlayerObjects1Objects, gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDItem3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15648044);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDItem3Objects1 */
/* Reuse gdjs.P1GameCode.GDPlayerObjects1 */
gdjs.P1GameCode.GDExplosion1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDExplosion1Objects1Objects, (( gdjs.P1GameCode.GDItem3Objects1.length === 0 ) ? 0 :gdjs.P1GameCode.GDItem3Objects1[0].getPointX("")), (( gdjs.P1GameCode.GDItem3Objects1.length === 0 ) ? 0 :gdjs.P1GameCode.GDItem3Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.P1GameCode.GDItem3Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(0);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setDeceleration(0);
}
}{for(var i = 0, len = gdjs.P1GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(0);
}
}
{ //Subevents
gdjs.P1GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.P1GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlayerObjects1[i].getY() > 725 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDPlayerObjects1[k] = gdjs.P1GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}}

}


{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Item0"), gdjs.P1GameCode.GDItem0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item1"), gdjs.P1GameCode.GDItem1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item2"), gdjs.P1GameCode.GDItem2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item3"), gdjs.P1GameCode.GDItem3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform0"), gdjs.P1GameCode.GDPlatform0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform1"), gdjs.P1GameCode.GDPlatform1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.P1GameCode.GDPlatform2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform3"), gdjs.P1GameCode.GDPlatform3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform4"), gdjs.P1GameCode.GDPlatform4Objects1);
{for(var i = 0, len = gdjs.P1GameCode.GDPlatform0Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform0Objects1[i].setY(gdjs.P1GameCode.GDPlatform0Objects1[i].getY() - (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
for(var i = 0, len = gdjs.P1GameCode.GDPlatform1Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform1Objects1[i].setY(gdjs.P1GameCode.GDPlatform1Objects1[i].getY() - (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
for(var i = 0, len = gdjs.P1GameCode.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform2Objects1[i].setY(gdjs.P1GameCode.GDPlatform2Objects1[i].getY() - (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
for(var i = 0, len = gdjs.P1GameCode.GDPlatform3Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform3Objects1[i].setY(gdjs.P1GameCode.GDPlatform3Objects1[i].getY() - (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
for(var i = 0, len = gdjs.P1GameCode.GDPlatform4Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform4Objects1[i].setY(gdjs.P1GameCode.GDPlatform4Objects1[i].getY() - (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
}{for(var i = 0, len = gdjs.P1GameCode.GDItem0Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem0Objects1[i].setY(gdjs.P1GameCode.GDItem0Objects1[i].getY() - (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
for(var i = 0, len = gdjs.P1GameCode.GDItem1Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem1Objects1[i].setY(gdjs.P1GameCode.GDItem1Objects1[i].getY() - (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
for(var i = 0, len = gdjs.P1GameCode.GDItem2Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem2Objects1[i].setY(gdjs.P1GameCode.GDItem2Objects1[i].getY() - (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
for(var i = 0, len = gdjs.P1GameCode.GDItem3Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem3Objects1[i].setY(gdjs.P1GameCode.GDItem3Objects1[i].getY() - (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "PlatformTime", 0.75, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.P1GameCode.GDPlatform0Objects1.length = 0;

gdjs.P1GameCode.GDPlatform1Objects1.length = 0;

gdjs.P1GameCode.GDPlatform2Objects1.length = 0;

gdjs.P1GameCode.GDPlatform3Objects1.length = 0;

gdjs.P1GameCode.GDPlatform4Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform0Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform1Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform2Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform3Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform4Objects1Objects, "Platform" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 4)), gdjs.randomInRange(17, 769), runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(100);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.P1GameCode.GDPlatform2Objects1);
{for(var i = 0, len = gdjs.P1GameCode.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform2Objects1[i].setX(gdjs.P1GameCode.GDPlatform2Objects1[i].getX() + (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()));
}
}
{ //Subevents
gdjs.P1GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "HPTime", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15655700);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platform0"), gdjs.P1GameCode.GDPlatform0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform1"), gdjs.P1GameCode.GDPlatform1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.P1GameCode.GDPlatform2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform3"), gdjs.P1GameCode.GDPlatform3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform4"), gdjs.P1GameCode.GDPlatform4Objects1);
gdjs.P1GameCode.GDItem0Objects1.length = 0;

gdjs.P1GameCode.GDItem1Objects1.length = 0;

gdjs.P1GameCode.GDItem2Objects1.length = 0;

gdjs.P1GameCode.GDItem3Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDItem0Objects1ObjectsGDgdjs_9546P1GameCode_9546GDItem1Objects1ObjectsGDgdjs_9546P1GameCode_9546GDItem2Objects1ObjectsGDgdjs_9546P1GameCode_9546GDItem3Objects1Objects, "Item" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 3)), 0, 0, "");
}{gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.P1GameCode.mapOfGDgdjs_9546P1GameCode_9546GDPlatform0Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform1Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform2Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform3Objects1ObjectsGDgdjs_9546P1GameCode_9546GDPlatform4Objects1Objects);
}{for(var i = 0, len = gdjs.P1GameCode.GDItem0Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem0Objects1[i].putAroundObject((gdjs.P1GameCode.GDPlatform0Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform0Objects1[0] : (gdjs.P1GameCode.GDPlatform1Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform1Objects1[0] : (gdjs.P1GameCode.GDPlatform2Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform2Objects1[0] : (gdjs.P1GameCode.GDPlatform3Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform3Objects1[0] : (gdjs.P1GameCode.GDPlatform4Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform4Objects1[0] : null))))), 25, -(90));
}
for(var i = 0, len = gdjs.P1GameCode.GDItem1Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem1Objects1[i].putAroundObject((gdjs.P1GameCode.GDPlatform0Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform0Objects1[0] : (gdjs.P1GameCode.GDPlatform1Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform1Objects1[0] : (gdjs.P1GameCode.GDPlatform2Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform2Objects1[0] : (gdjs.P1GameCode.GDPlatform3Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform3Objects1[0] : (gdjs.P1GameCode.GDPlatform4Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform4Objects1[0] : null))))), 25, -(90));
}
for(var i = 0, len = gdjs.P1GameCode.GDItem2Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem2Objects1[i].putAroundObject((gdjs.P1GameCode.GDPlatform0Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform0Objects1[0] : (gdjs.P1GameCode.GDPlatform1Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform1Objects1[0] : (gdjs.P1GameCode.GDPlatform2Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform2Objects1[0] : (gdjs.P1GameCode.GDPlatform3Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform3Objects1[0] : (gdjs.P1GameCode.GDPlatform4Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform4Objects1[0] : null))))), 25, -(90));
}
for(var i = 0, len = gdjs.P1GameCode.GDItem3Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem3Objects1[i].putAroundObject((gdjs.P1GameCode.GDPlatform0Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform0Objects1[0] : (gdjs.P1GameCode.GDPlatform1Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform1Objects1[0] : (gdjs.P1GameCode.GDPlatform2Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform2Objects1[0] : (gdjs.P1GameCode.GDPlatform3Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform3Objects1[0] : (gdjs.P1GameCode.GDPlatform4Objects1.length !== 0 ? gdjs.P1GameCode.GDPlatform4Objects1[0] : null))))), 25, -(90));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "LevelTime", 30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() < 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15656668);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform0"), gdjs.P1GameCode.GDPlatform0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform1"), gdjs.P1GameCode.GDPlatform1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.P1GameCode.GDPlatform2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform3"), gdjs.P1GameCode.GDPlatform3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platform4"), gdjs.P1GameCode.GDPlatform4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlatform0Objects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlatform0Objects1[i].getY() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDPlatform0Objects1[k] = gdjs.P1GameCode.GDPlatform0Objects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlatform0Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlatform1Objects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlatform1Objects1[i].getY() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDPlatform1Objects1[k] = gdjs.P1GameCode.GDPlatform1Objects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlatform1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlatform2Objects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlatform2Objects1[i].getY() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDPlatform2Objects1[k] = gdjs.P1GameCode.GDPlatform2Objects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlatform2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlatform3Objects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlatform3Objects1[i].getY() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDPlatform3Objects1[k] = gdjs.P1GameCode.GDPlatform3Objects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlatform3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDPlatform4Objects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDPlatform4Objects1[i].getY() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDPlatform4Objects1[k] = gdjs.P1GameCode.GDPlatform4Objects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDPlatform4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDPlatform0Objects1 */
/* Reuse gdjs.P1GameCode.GDPlatform1Objects1 */
/* Reuse gdjs.P1GameCode.GDPlatform2Objects1 */
/* Reuse gdjs.P1GameCode.GDPlatform3Objects1 */
/* Reuse gdjs.P1GameCode.GDPlatform4Objects1 */
{for(var i = 0, len = gdjs.P1GameCode.GDPlatform0Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform0Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.P1GameCode.GDPlatform1Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.P1GameCode.GDPlatform2Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.P1GameCode.GDPlatform3Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.P1GameCode.GDPlatform4Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDPlatform4Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Item0"), gdjs.P1GameCode.GDItem0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item1"), gdjs.P1GameCode.GDItem1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item2"), gdjs.P1GameCode.GDItem2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Item3"), gdjs.P1GameCode.GDItem3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDItem0Objects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDItem0Objects1[i].getY() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDItem0Objects1[k] = gdjs.P1GameCode.GDItem0Objects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDItem0Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDItem1Objects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDItem1Objects1[i].getY() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDItem1Objects1[k] = gdjs.P1GameCode.GDItem1Objects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDItem1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDItem2Objects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDItem2Objects1[i].getY() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDItem2Objects1[k] = gdjs.P1GameCode.GDItem2Objects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDItem2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.P1GameCode.GDItem3Objects1.length;i<l;++i) {
    if ( gdjs.P1GameCode.GDItem3Objects1[i].getY() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.P1GameCode.GDItem3Objects1[k] = gdjs.P1GameCode.GDItem3Objects1[i];
        ++k;
    }
}
gdjs.P1GameCode.GDItem3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.P1GameCode.GDItem0Objects1 */
/* Reuse gdjs.P1GameCode.GDItem1Objects1 */
/* Reuse gdjs.P1GameCode.GDItem2Objects1 */
/* Reuse gdjs.P1GameCode.GDItem3Objects1 */
{for(var i = 0, len = gdjs.P1GameCode.GDItem0Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem0Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.P1GameCode.GDItem1Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.P1GameCode.GDItem2Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.P1GameCode.GDItem3Objects1.length ;i < len;++i) {
    gdjs.P1GameCode.GDItem3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.P1GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.P1GameCode.GDPlayerObjects1.length = 0;
gdjs.P1GameCode.GDPlayerObjects2.length = 0;
gdjs.P1GameCode.GDPlayerObjects3.length = 0;
gdjs.P1GameCode.GDPlatform0Objects1.length = 0;
gdjs.P1GameCode.GDPlatform0Objects2.length = 0;
gdjs.P1GameCode.GDPlatform0Objects3.length = 0;
gdjs.P1GameCode.GDSideObjects1.length = 0;
gdjs.P1GameCode.GDSideObjects2.length = 0;
gdjs.P1GameCode.GDSideObjects3.length = 0;
gdjs.P1GameCode.GDPlatform1Objects1.length = 0;
gdjs.P1GameCode.GDPlatform1Objects2.length = 0;
gdjs.P1GameCode.GDPlatform1Objects3.length = 0;
gdjs.P1GameCode.GDTImeTextObjects1.length = 0;
gdjs.P1GameCode.GDTImeTextObjects2.length = 0;
gdjs.P1GameCode.GDTImeTextObjects3.length = 0;
gdjs.P1GameCode.GDSpeedObjects1.length = 0;
gdjs.P1GameCode.GDSpeedObjects2.length = 0;
gdjs.P1GameCode.GDSpeedObjects3.length = 0;
gdjs.P1GameCode.GDGreenFlatBarObjects1.length = 0;
gdjs.P1GameCode.GDGreenFlatBarObjects2.length = 0;
gdjs.P1GameCode.GDGreenFlatBarObjects3.length = 0;
gdjs.P1GameCode.GDUpperformObjects1.length = 0;
gdjs.P1GameCode.GDUpperformObjects2.length = 0;
gdjs.P1GameCode.GDUpperformObjects3.length = 0;
gdjs.P1GameCode.GDItem0Objects1.length = 0;
gdjs.P1GameCode.GDItem0Objects2.length = 0;
gdjs.P1GameCode.GDItem0Objects3.length = 0;
gdjs.P1GameCode.GDExplosion1Objects1.length = 0;
gdjs.P1GameCode.GDExplosion1Objects2.length = 0;
gdjs.P1GameCode.GDExplosion1Objects3.length = 0;
gdjs.P1GameCode.GDPlatform2Objects1.length = 0;
gdjs.P1GameCode.GDPlatform2Objects2.length = 0;
gdjs.P1GameCode.GDPlatform2Objects3.length = 0;
gdjs.P1GameCode.GDPlatform3Objects1.length = 0;
gdjs.P1GameCode.GDPlatform3Objects2.length = 0;
gdjs.P1GameCode.GDPlatform3Objects3.length = 0;
gdjs.P1GameCode.GDTimeUIObjects1.length = 0;
gdjs.P1GameCode.GDTimeUIObjects2.length = 0;
gdjs.P1GameCode.GDTimeUIObjects3.length = 0;
gdjs.P1GameCode.GDTimeLabelObjects1.length = 0;
gdjs.P1GameCode.GDTimeLabelObjects2.length = 0;
gdjs.P1GameCode.GDTimeLabelObjects3.length = 0;
gdjs.P1GameCode.GDHighScoreUIObjects1.length = 0;
gdjs.P1GameCode.GDHighScoreUIObjects2.length = 0;
gdjs.P1GameCode.GDHighScoreUIObjects3.length = 0;
gdjs.P1GameCode.GDHSLabelObjects1.length = 0;
gdjs.P1GameCode.GDHSLabelObjects2.length = 0;
gdjs.P1GameCode.GDHSLabelObjects3.length = 0;
gdjs.P1GameCode.GDHSTextObjects1.length = 0;
gdjs.P1GameCode.GDHSTextObjects2.length = 0;
gdjs.P1GameCode.GDHSTextObjects3.length = 0;
gdjs.P1GameCode.GDPlatform4Objects1.length = 0;
gdjs.P1GameCode.GDPlatform4Objects2.length = 0;
gdjs.P1GameCode.GDPlatform4Objects3.length = 0;
gdjs.P1GameCode.GDItem1Objects1.length = 0;
gdjs.P1GameCode.GDItem1Objects2.length = 0;
gdjs.P1GameCode.GDItem1Objects3.length = 0;
gdjs.P1GameCode.GDItem2Objects1.length = 0;
gdjs.P1GameCode.GDItem2Objects2.length = 0;
gdjs.P1GameCode.GDItem2Objects3.length = 0;
gdjs.P1GameCode.GDItem3Objects1.length = 0;
gdjs.P1GameCode.GDItem3Objects2.length = 0;
gdjs.P1GameCode.GDItem3Objects3.length = 0;
gdjs.P1GameCode.GDBackgroundObjects1.length = 0;
gdjs.P1GameCode.GDBackgroundObjects2.length = 0;
gdjs.P1GameCode.GDBackgroundObjects3.length = 0;

gdjs.P1GameCode.eventsList10(runtimeScene);
gdjs.P1GameCode.GDPlayerObjects1.length = 0;
gdjs.P1GameCode.GDPlayerObjects2.length = 0;
gdjs.P1GameCode.GDPlayerObjects3.length = 0;
gdjs.P1GameCode.GDPlatform0Objects1.length = 0;
gdjs.P1GameCode.GDPlatform0Objects2.length = 0;
gdjs.P1GameCode.GDPlatform0Objects3.length = 0;
gdjs.P1GameCode.GDSideObjects1.length = 0;
gdjs.P1GameCode.GDSideObjects2.length = 0;
gdjs.P1GameCode.GDSideObjects3.length = 0;
gdjs.P1GameCode.GDPlatform1Objects1.length = 0;
gdjs.P1GameCode.GDPlatform1Objects2.length = 0;
gdjs.P1GameCode.GDPlatform1Objects3.length = 0;
gdjs.P1GameCode.GDTImeTextObjects1.length = 0;
gdjs.P1GameCode.GDTImeTextObjects2.length = 0;
gdjs.P1GameCode.GDTImeTextObjects3.length = 0;
gdjs.P1GameCode.GDSpeedObjects1.length = 0;
gdjs.P1GameCode.GDSpeedObjects2.length = 0;
gdjs.P1GameCode.GDSpeedObjects3.length = 0;
gdjs.P1GameCode.GDGreenFlatBarObjects1.length = 0;
gdjs.P1GameCode.GDGreenFlatBarObjects2.length = 0;
gdjs.P1GameCode.GDGreenFlatBarObjects3.length = 0;
gdjs.P1GameCode.GDUpperformObjects1.length = 0;
gdjs.P1GameCode.GDUpperformObjects2.length = 0;
gdjs.P1GameCode.GDUpperformObjects3.length = 0;
gdjs.P1GameCode.GDItem0Objects1.length = 0;
gdjs.P1GameCode.GDItem0Objects2.length = 0;
gdjs.P1GameCode.GDItem0Objects3.length = 0;
gdjs.P1GameCode.GDExplosion1Objects1.length = 0;
gdjs.P1GameCode.GDExplosion1Objects2.length = 0;
gdjs.P1GameCode.GDExplosion1Objects3.length = 0;
gdjs.P1GameCode.GDPlatform2Objects1.length = 0;
gdjs.P1GameCode.GDPlatform2Objects2.length = 0;
gdjs.P1GameCode.GDPlatform2Objects3.length = 0;
gdjs.P1GameCode.GDPlatform3Objects1.length = 0;
gdjs.P1GameCode.GDPlatform3Objects2.length = 0;
gdjs.P1GameCode.GDPlatform3Objects3.length = 0;
gdjs.P1GameCode.GDTimeUIObjects1.length = 0;
gdjs.P1GameCode.GDTimeUIObjects2.length = 0;
gdjs.P1GameCode.GDTimeUIObjects3.length = 0;
gdjs.P1GameCode.GDTimeLabelObjects1.length = 0;
gdjs.P1GameCode.GDTimeLabelObjects2.length = 0;
gdjs.P1GameCode.GDTimeLabelObjects3.length = 0;
gdjs.P1GameCode.GDHighScoreUIObjects1.length = 0;
gdjs.P1GameCode.GDHighScoreUIObjects2.length = 0;
gdjs.P1GameCode.GDHighScoreUIObjects3.length = 0;
gdjs.P1GameCode.GDHSLabelObjects1.length = 0;
gdjs.P1GameCode.GDHSLabelObjects2.length = 0;
gdjs.P1GameCode.GDHSLabelObjects3.length = 0;
gdjs.P1GameCode.GDHSTextObjects1.length = 0;
gdjs.P1GameCode.GDHSTextObjects2.length = 0;
gdjs.P1GameCode.GDHSTextObjects3.length = 0;
gdjs.P1GameCode.GDPlatform4Objects1.length = 0;
gdjs.P1GameCode.GDPlatform4Objects2.length = 0;
gdjs.P1GameCode.GDPlatform4Objects3.length = 0;
gdjs.P1GameCode.GDItem1Objects1.length = 0;
gdjs.P1GameCode.GDItem1Objects2.length = 0;
gdjs.P1GameCode.GDItem1Objects3.length = 0;
gdjs.P1GameCode.GDItem2Objects1.length = 0;
gdjs.P1GameCode.GDItem2Objects2.length = 0;
gdjs.P1GameCode.GDItem2Objects3.length = 0;
gdjs.P1GameCode.GDItem3Objects1.length = 0;
gdjs.P1GameCode.GDItem3Objects2.length = 0;
gdjs.P1GameCode.GDItem3Objects3.length = 0;
gdjs.P1GameCode.GDBackgroundObjects1.length = 0;
gdjs.P1GameCode.GDBackgroundObjects2.length = 0;
gdjs.P1GameCode.GDBackgroundObjects3.length = 0;


return;

}

gdjs['P1GameCode'] = gdjs.P1GameCode;
