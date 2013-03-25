using UnityEngine;
using System.Collections;

public class goalHUD : MonoBehaviour {

	public Texture2D ghostPic;
	public Texture2D key;
	
	void OnGUI(){
		int screenWidth = Screen.width;
		int screenHeight = Screen.height;
		
		GUI.backgroundColor = Color.grey;
		GUI.Box(new Rect ( 0,screenHeight*.85f,screenWidth, screenHeight*.15f), "");
		//toolbarInt = GUI.Toolbar(new Rect ( 0,screenHeight*.9f,screenWidth, screenHeight*.1f), toolbarInt, toolbarStrings);
		
		//Draw player 1 HUD
		GUI.DrawTexture( new Rect ( screenWidth*.05f ,screenHeight*.85f,screenWidth*.1f , screenHeight*.15f), ghostPic);
		GUI.DrawTexture( new Rect ( screenWidth*.15f ,screenHeight*.85f,screenWidth*.1f , screenHeight*.15f), key);
		
		
		//Draw Player 2 HUD
		GUI.DrawTexture( new Rect ( screenWidth*.57f ,screenHeight*.85f,screenWidth*.1f , screenHeight*.15f), ghostPic);
		GUI.DrawTexture( new Rect ( screenWidth*.67f ,screenHeight*.85f,screenWidth*.1f , screenHeight*.15f), key);
	}
}
