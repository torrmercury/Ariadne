#pragma strict
var winpic: Texture2D;
function Start () {
	
}

function OnGUI () {
	GUI.DrawTexture(new Rect(0f, 0f, Screen.width, Screen.height), winpic);
}