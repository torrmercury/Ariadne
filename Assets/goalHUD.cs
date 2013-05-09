using UnityEngine;
using System.Collections;

public class goalHUD : MonoBehaviour {

	public Texture2D ghostPic;
	public Texture2D key;
	public Texture2D middleHUD;
	private float _alpha = 2F;
	
	void OnGUI(){
		int screenWidth = Screen.width;
		int screenHeight = Screen.height;
		
		//Middle HUD
		GUI.DrawTexture( new Rect( screenWidth * .45f, 0f, screenWidth *.1f, screenHeight) ,  middleHUD); 
		
		//Draw player 1 HUD
		if ( enemyTargetTracker.TARGET_PLAYER ==0){
			//GUI.DrawTexture( new Rect ( screenWidth*.30f ,0,screenWidth*.15f , screenHeight*.2f), ghostPic);
			if ( Time.time%2 >= 1 ){
				GUI.color = new Color(.5F,.5F,.5F,_alpha);
				GUI.DrawTexture(new Rect(0f,0f, screenWidth*.47f, screenHeight), ghostPic);
			}
		}
		if ( enemyTargetTracker.PLAYER1KEY ==1){
			GUI.DrawTexture( new Rect ( 0f ,screenHeight*.8f,screenWidth*.15f , screenHeight*.2f), key);
		}
		
		
		//Draw Player 2 HUD
		if ( enemyTargetTracker.TARGET_PLAYER ==1){
			if ( Time.time%2 >= 1 ){
				GUI.color = new Color(.5F,.5F,.5F,_alpha);
				GUI.DrawTexture(new Rect(screenWidth*.53f, 0f, screenWidth*.47f, screenHeight), ghostPic);
			}
		}
		if ( enemyTargetTracker.PLAYER2KEY == 1){
			GUI.DrawTexture( new Rect (screenWidth*.55f ,screenHeight*.8f,screenWidth*.15f , screenHeight*.2f), key);
		}
	}
}
