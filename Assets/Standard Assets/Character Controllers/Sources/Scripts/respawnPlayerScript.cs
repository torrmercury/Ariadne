using UnityEngine;
using System.Collections;

public class respawnPlayerScript : MonoBehaviour {
	
	//variables set outside
	public GameObject goal;
	public GameObject player1;
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
	public Texture2D bite13;
	public Texture2D bite14;
	public Texture2D bite15;
	public Texture2D bite16;
	public Texture2D bite17;
	public Texture2D bite18;
	public Texture2D bite19;
	
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
			if( player1Counter > .1){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite2);
			}
			if( player1Counter > .2){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite3);
			}
			if( player1Counter > .3){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite4);
			}
			if( player1Counter > .4){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite5);
			}
			if( player1Counter > .5){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite6);
			}
			if( player1Counter > .6){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite7);
			}
			if( player1Counter > .7){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite8);
			}
			if  (player1Counter > .8){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite9);
			}
			if  (player1Counter > .9){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite10);
			}
			if  (player1Counter > 1.0){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite11);
			}
			if  (player1Counter > 1.1){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite12);
			}
			if( player1Counter > 1.2){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite13);
			}
			if( player1Counter > 1.3){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite14);
			}
			if( player1Counter > 1.4){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite15);
			}
			if( player1Counter > 1.5){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite16);
			}
			if( player1Counter > 1.6){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite17);
			}
			if( player1Counter > 1.7){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite18);
			}
			if( player1Counter > 1.8){
				GUI.DrawTexture(new Rect(0f, 0f, Screen.width*.45f, Screen.height), bite19);
			}
			
		}
		if (player2dead){
			//GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height),blood);
			GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite1);
			if( player2Counter > .1){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite2);
			}
			if( player2Counter > .2){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite3);
			}
			if( player2Counter > .3){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite4);
			}
			if( player2Counter > .4){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite5);
			}
			if( player2Counter > .5){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite6);
			}
			if( player2Counter > .6){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite7);
			}
			if( player2Counter > .7){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite8);
			}
			if  (player2Counter > .8){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite9);
			}
			if  (player2Counter > .9){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite10);
			}
			if  (player2Counter > 1.0){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite11);
			}
			if  (player2Counter > 1.1){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite12);
			}
			if( player2Counter > 1.2){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite13);
			}
			if( player2Counter > 1.3){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite14);
			}
			if( player2Counter > 1.4){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite15);
			}
			if( player2Counter > 1.5){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite16);
			}
			if  (player2Counter > 1.6){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite17);
			}
			if  (player2Counter > 1.7){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite18);
			}
			if  (player2Counter > 1.8){
				GUI.DrawTexture(new Rect(Screen.width*.55f,  0f, Screen.width*.45f, Screen.height), bite19);
			}
		}
		

	}
	void player1Died(){
		//print ("p1died called");
		AudioSource[] audio = player1.GetComponents<AudioSource>();
		AudioSource audio0 = audio[1];
		audio0.Play();
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