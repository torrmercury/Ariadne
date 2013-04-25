using UnityEngine;
using System.Collections;

public class respawnPlayerScript : MonoBehaviour {
	
	//variables set outside
	public GameObject goal;
	public static GameObject player1;
	public GameObject player2;
	
	//bite textures
	public Texture2D bite1;
	public Texture2D bite2;
	public Texture2D bite3;
	public Texture2D bite4;
	public Texture2D bite5;
	public Texture2D bite6;
	public Texture2D bite7;
	public Texture2D bite8;
	public Texture2D bite9;
	public Texture2D bite10;
	public Texture2D bite11;
	public Texture2D bite12;
	
	//start positions
	private Vector3 startp1;
	private Vector3 startp2;
	
	
	//variables for within
	bool player1dead = false;
	bool player2dead = false;
	float player1Counter = 0;
	float player2Counter = 0;
	
	
	//p1 go back to start position 
	void player1Relocate(){
		player1.transform.position = startp1;
	}
	//p2 go back to start
	void player2Relocate(){
		player2.transform.position = startp2;
	}
	
	
	void OnGUI(){
		//show blood texture on screen.
		if ( player1dead ){
			GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite1);
			if( player1Counter > .2){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite2);
			}
			if( player1Counter > .4){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite3);
			}
			if( player1Counter > .6){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite4);
			}
			if( player1Counter > .8){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite5);
			}
			if( player1Counter > 1.0){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite6);
			}
			if( player1Counter > 1.2){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite7);
			}
			if( player1Counter > 1.4){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite8);
			}
			if  (player1Counter > 1.6){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite9);
			}
			if  (player1Counter > 1.8){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite10);
			}
			if  (player1Counter > 2.0){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite11);
			}
			if  (player1Counter > 2.2){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite12);
			}
			
		}
		if (player2dead){
			//GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height),blood);
			GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite1);
			if( player2Counter > .2){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite2);
			}
			if( player2Counter > .4){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite3);
			}
			if( player2Counter > .6){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite4);
			}
			if( player2Counter > .8){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite5);
			}
			if( player2Counter > 1.0){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite6);
			}
			if( player2Counter > 1.2){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite7);
			}
			if( player2Counter > 1.4){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite8);
			}
			if  (player2Counter > 1.6){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite9);
			}
			if  (player2Counter > 1.8){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite10);
			}
			if  (player2Counter > 2.0){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite11);
			}
			if  (player2Counter > 2.2){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite12);
			}
		}
		

	}
	void player1Died(){
		//print ("p1died called");
		player1.audio.Play();
		enemyTargetTracker.PLAYER_ONE_DEAD = true;
		player1dead = true;
	}
	
	void player2Died(){
		player1.audio.Play();
		enemyTargetTracker.PLAYER_TWO_DEAD = true;
		player2dead = true;
	}
	
	void Update(){
		if (player1dead){
			player1Counter = player1Counter + Time.deltaTime;
			//print (player1Counter);
			if (player1Counter > 5){
				//print ("hihihi");
				player1Relocate();
				player1dead = false;
				enemyTargetTracker.PLAYER_ONE_DEAD = false;
				player1Counter = 0;
			}
		}
		if(player2dead){
			player2Counter = player2Counter + Time.deltaTime;
			//print (player2Counter);
			if (player2Counter > 5){
				//print ("hihihi");
				player2Relocate();
				player2dead = false;
				enemyTargetTracker.PLAYER_TWO_DEAD = false;
				player2Counter = 0;
			}
		}
	}
	void Start(){
        startp1 = player1.transform.position;
		startp2 = player2.transform.position;
		
	}
}