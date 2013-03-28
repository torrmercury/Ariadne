using UnityEngine;
using System.Collections;

public class goalHUD : MonoBehaviour {

	public Texture2D ghostPic;
	public Texture2D key;
	public Texture2D middleHUD;
	
	void OnGUI(){
		int screenWidth = Screen.width;
		int screenHeight = Screen.height;
		
		//Middle HUD
		GUI.DrawTexture( new Rect( screenWidth * .45f, 0f, screenWidth *.1f, screenHeight) ,  middleHUD); 
		
		//Draw player 1 HUD
		if ( enemyTargetTracker.TARGET_PLAYER ==0){
		GUI.DrawTexture( new Rect ( screenWidth*.30f ,0,screenWidth*.15f , screenHeight*.2f), ghostPic);
		}
		if ( enemyTargetTracker.PLAYER1KEY ==1){
		GUI.DrawTexture( new Rect ( 0f ,screenHeight*.8f,screenWidth*.15f , screenHeight*.2f), key);
		}
		
		
		//Draw Player 2 HUD
		if ( enemyTargetTracker.TARGET_PLAYER ==1){
		GUI.DrawTexture( new Rect ( screenWidth*.85f ,0,screenWidth*.15f , screenHeight*.2f), ghostPic);
		}
		if ( enemyTargetTracker.PLAYER2KEY == 1){
		GUI.DrawTexture( new Rect (screenWidth*.55f ,screenHeight*.8f,screenWidth*.15f , screenHeight*.2f), key);
		}
	}
}
