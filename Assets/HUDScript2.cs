using UnityEngine;
using System.Collections;

public class HUDScript2 : MonoBehaviour {
	
	public GameObject goal;
	public Texture2D keyTexture;
	public Texture2D doorTexture;
	public Texture2D switchTexture;
	public Texture2D ghostTexture;
	//private Screen gameScreen;
	/*
	void OnGUI() {
		//size of screen
		float screenWidth =(float) Screen.width;
		float screenHeight = (float)Screen.height;
		//screen coords for switch and its text
		Rect switchRect = new Rect(screenWidth*.85f, screenHeight*.01f,70,70);
		Rect switchRectText = new Rect(screenWidth*.85f +70, screenHeight*.01f,100,70);
		//screen coords for ghost and its text
		Rect ghostRect = new Rect(screenWidth*.60f, screenHeight*.01f,70,70);
		Rect ghostRectText = new Rect(screenWidth*.60f +70, screenHeight*.01f,70,70);
		if (enemyTargetTracker.TARGET_PLAYER == 1 ){
			GUI.DrawTexture(switchRect, switchTexture);
			GUI.TextArea(switchRectText, "MAKES GHOST CHASE OPPONENT");
			GUI.DrawTexture(ghostRect, ghostTexture);
			GUI.color = Color.red;
    		GUI.TextArea(ghostRectText, "HE IS AFTER YOU");
			//GUI.color = Color.green;
    		//GUI.Box(new Rect(700, 15, 400, 20), "SAFE :)))!!!!");
		}
		else{
    		GUI.DrawTexture(switchRect, switchTexture);
			GUI.TextArea(switchRectText, "Careful, It will Chase You");
			GUI.color = Color.green;
    		GUI.TextArea(ghostRectText, "SAFE, FOR NOW");
		}
    }
    */
	
}