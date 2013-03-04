using UnityEngine;
using System.Collections;

public class respawnPlayerScript : MonoBehaviour {

	public GameObject player1;
	public GameObject player2;
	public Texture2D blood;
	bool player1dead = false;
	bool player2dead = false;
	Vector3 player1RespawnPoint ;
	Vector3 player2RespawnPoint ;
	float player1Counter = 0;
	float player2Counter = 0;
	Rigidbody p1rigid ;
	Rigidbody p2rigid ;
	
	void player1Relocate(){
		player1.transform.Translate(player1RespawnPoint);
		p1rigid.constraints=RigidbodyConstraints.FreezeAll; 
		
	}
	void player1Respawn(){
		p1rigid.constraints = RigidbodyConstraints.None;
		p1rigid.constraints=RigidbodyConstraints.FreezePositionY;
		player1dead = false;
		
	}
	
	void OnGUI(){
		//show blood texture on screen.
		if ( player1dead ){
			
			//GUI.DrawTexture(new Rect(0f, (.52f*Screen.width)-(.48f * Screen.width), Screen.width*.48f, Screen.height), blood);
			
		}
		if (player2dead){
			GUI.DrawTexture(new Rect(Screen.width*.52f, (.52f*Screen.width)-(.48f * Screen.width), Screen.width*.48f, Screen.height),blood);
		}

	}
	void player1Died(){
		print ("p1died called");
		player1dead = true;
	}
	
	void player2Died(){
		player2dead = true;
	}
	
	void Update(){
		if (player1dead){
			player1Relocate();
			player1Counter = player1Counter + Time.deltaTime;
			print (player1Counter);
			if (player1Counter > 5){
				print ("hihihi");
				player1Respawn();
				player1Counter = 0;
			}
		}
		if(player2dead){
			player1Respawn();
		}
	}
	void Start(){
		player1RespawnPoint = new Vector3(23f,2.5f,13.5f)	;
		player2RespawnPoint = player2.transform.position	;
		p1rigid = player1.rigidbody;
		p2rigid = player2.rigidbody;
	}
	
	
	
}