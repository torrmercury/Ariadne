using UnityEngine;
using System.Collections;

public class HUDscript : MonoBehaviour {
	
	public GameObject goal;
	public Texture2D keyTexture;
	public Texture2D doorTexture;
	public Texture2D switchTexture;
	public Texture2D ghostTexture;
	
	void OnGUI() {
		//size of screen
		float screenWidth =(float) Screen.width;
		float screenHeight = (float)Screen.height;
		//Debug.Log(screenHeight);
		float startMiddleBar = (float).48 * screenWidth;
		float widthMiddleBar =(float) (.52*screenWidth)-startMiddleBar;
		
		//coords for shared middle HUD
		Rect sphereRectText = new Rect ( startMiddleBar, screenHeight * .15f ,widthMiddleBar, widthMiddleBar);
		Rect sphereRect = new Rect ( startMiddleBar, (screenHeight * .15f + widthMiddleBar ), widthMiddleBar, widthMiddleBar);
		Rect doorRectText = new Rect ( startMiddleBar, screenHeight * .4f, widthMiddleBar, widthMiddleBar);
		Rect doorRect = new Rect ( startMiddleBar, screenHeight * .4f +widthMiddleBar, widthMiddleBar, widthMiddleBar);
		Rect switchRectText = new Rect(startMiddleBar- (.33f*widthMiddleBar), screenHeight*.65f, 1.5f*widthMiddleBar,widthMiddleBar);
		Rect switchRect = new Rect(startMiddleBar, screenHeight*.65f +widthMiddleBar, widthMiddleBar,widthMiddleBar);
		//draw middle shared hud
		GUI.DrawTexture(sphereRect,keyTexture);
		GUI.TextArea(sphereRectText, "FIND THIS");
		GUI.DrawTexture(doorRect,doorTexture);
		GUI.TextArea(doorRectText,"TO OPEN THIS");
		GUI.DrawTexture(switchRect,switchTexture);
		GUI.TextArea(switchRectText,"ENEMY\nTARGET\nSWITCH");
		/*
		//screen coords for switch and its text
		Rect switchRect = new Rect(screenWidth*.35f, screenHeight*.01f,70,70);
		Rect switchRectText = new Rect(screenWidth*.35f +70, screenHeight*.01f,100,70);
		//screen coords for ghost and its text
		Rect ghostRect = new Rect(screenWidth*.10f, screenHeight*.01f,70,70);
		Rect ghostRectText = new Rect(screenWidth*.10f +70, screenHeight*.01f,70,70);
		if (enemyTargetTracker.TARGET_PLAYER == 0 ){
			GUI.DrawTexture(new Rect(240, 10, 60, 60), switchTexture);
			GUI.TextArea(new Rect(300, 10, 110, 60), "MAKES GHOST CHASE OPPONENT");
			GUI.DrawTexture(new Rect(20, 10, 60, 60), ghostTexture);
			GUI.color = Color.red;
    		GUI.TextArea(new Rect(80, 10, 60, 60), "HE IS AFTER YOU");
			//GUI.color = Color.green;
    		//GUI.Box(new Rect(700, 15, 400, 20), "SAFE :)))!!!!");
		}
		else{
    		GUI.DrawTexture(new Rect(240, 10, 60, 60), switchTexture);
			GUI.TextArea(new Rect(300, 10, 110, 60), "CAREFUL! HE'LL CHASE YOU");
			GUI.color = Color.green;
    		GUI.TextArea(new Rect(80, 10, 60, 60), "SAFE, FOR NOW");
		}
		*/
    }
	
}

