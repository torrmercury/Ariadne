using UnityEngine;
using System.Collections;

public class respawnPlayerScript : MonoBehaviour {
	
	//variables set outside
	public GameObject goal;
	public GameObject player1;
	public GameObject player2;
	public Texture2D blood;
	public Transform startp1;
	public Transform startp2;
	
	//variables for within
	bool player1dead = false;
	bool player2dead = false;
	float player1Counter = 0;
	float player2Counter = 0;
	Rigidbody p1rigid ;
	Rigidbody p2rigid ;
	
	
	//p1 go back to start position 
	void player1Relocate(){
	//	player1.transform.position(player1RespawnPoint);
		player1.transform.position = Vector3.Lerp(this.transform.position, startp1.position, Time.time);
	}
	//p1 now alive
	void player1Respawn(){
		player1dead = false;
	}
	
	//p2 go back to start
	void player2Relocate(){
	//	player1.transform.position(player1RespawnPoint);
		player2.transform.position = Vector3.Lerp(this.transform.position, startp2.position, Time.time);
		p2rigid.constraints=RigidbodyConstraints.FreezeAll; 	
	}
	//p2 back alive
	void player2Respawn(){
		player2dead = false;
	}
	
	
	void OnGUI(){
		//show blood texture on screen.
		if ( player1dead ){
			
			GUI.DrawTexture(new Rect(0f, (.52f*Screen.width)-(.48f * Screen.width), Screen.width*.48f, Screen.height), blood);
			
		}
		if (player2dead){
			GUI.DrawTexture(new Rect(Screen.width*.52f,  Screen.height * .04f, Screen.width*.48f, Screen.height),blood);
		}

	}
	void player1Died(){
		//print ("p1died called");
		enemyTargetTracker.PLAYER_ONE_DEAD = true;
		player1dead = true;
	}
	
	void player2Died(){
		enemyTargetTracker.PLAYER_TWO_DEAD = true;
		player2dead = true;
	}
	
	void Update(){
		if (player1dead){
			player1Relocate();
			player1Counter = player1Counter + Time.deltaTime;
			//print (player1Counter);
			if (player1Counter > 5){
				//print ("hihihi");
				player1Respawn();
				enemyTargetTracker.PLAYER_ONE_DEAD = false;
				player1Counter = 0;
			}
		}
		if(player2dead){
			player2Relocate();
			player2Counter = player2Counter + Time.deltaTime;
			//print (player2Counter);
			if (player2Counter > 5){
				//print ("hihihi");
				player2Respawn();
				enemyTargetTracker.PLAYER_TWO_DEAD = false;
				player2Counter = 0;
			}
		}
	}
	void Start(){
		p1rigid = player1.rigidbody;
		p2rigid = player2.rigidbody;
	}
	
	
	
}