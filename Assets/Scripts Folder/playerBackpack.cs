using UnityEngine;
using System.Collections;

public class playerBackpack : MonoBehaviour {
	//class that holds what the player has, right now it is just the key
	
	public GameObject keySphere;
	public GameObject door1;
	public GameObject door2;
	
	static bool key = false;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	void OnControllerColliderHit( ControllerColliderHit other ){
		//Debug.Log ("collision happend with door1");
		
		if ( other.gameObject.tag.Equals( "door1")){
			//Debug.Log ("collision happend with door1");
			if (key == true){
				door1.SendMessage("openSesame");
				Debug.Log ("made it");
				key = false;
			}
		}
		
		//open the door when the player2  has key2 and hits door2 
		if ( other.gameObject.tag.Equals( "door2")){
			if(key == true){
				door2.SendMessage("openSesame");
				key = false;
			}
		}
	}
	/*
	
	public void OnCollisionEnter ( Collision other ){
		//open the door when the player1  has key1 and hits door1 
		Debug.Log ("collision happend with door1");
		
		if ( this.gameObject.tag.Equals( "player1")){
			Debug.Log ("collision happend with door1");
			if ( other.gameObject.CompareTag("door1") && key == true){
				myDoor.SendMessage("openSesame");
				Debug.Log ("made it");
				key = false;
			}
		}
		
		//open the door when the player2  has key2 and hits door2 
		else if ( this.gameObject.CompareTag("player2")){
			if( other.gameObject.CompareTag("door2") && key == true){
				myDoor.SendMessage("openSesame");
				key = false;
			}
		}
	}
	*/
	public void haveKey(){
		Debug.Log ("player1 key = true");
		key = true;
	}
	
}
