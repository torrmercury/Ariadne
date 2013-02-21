using UnityEngine;
using System.Collections;

public class playerBackpack : MonoBehaviour {
	//class that holds what the player has, right now it is just the key
	
	public GameObject keySphere;
	public GameObject myDoor;
	bool key = false;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	
	public void onTriggerEnter ( Collider other ){
		//can collide with the key and puts it in its backpack as true
		if ( keySphere == other.gameObject ){
			Debug.Log ("made it");
			key = true;
		}
		//open the door when the player hits the right door 
		if ( other.gameObject == myDoor && key == true ){
			myDoor.SendMessage("openSesame");
			key = false;
		}
	}
	
}
