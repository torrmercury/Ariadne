using UnityEngine;
using System.Collections;

public class DoorSwitch : MonoBehaviour {
	
	public GameObject player;
	public GameObject enemy;
	//public GameObject door;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	public void OnTriggerEnter(Collider other){
		//destorys itself if the key is meant for the player
		/*if ( player == other.gameObject){
			Debug.Log("hi babe");
			Destroy (this);
		}
		*/
		if (other.gameObject.CompareTag("Player1")){
            Destroy(this.gameObject);
			Debug.Log ("PLAYER 1 GOT KEY");
			player.SendMessage ("haveKey");
		}
		if (other.gameObject.CompareTag("Player2")){
            Destroy(this.gameObject);
			Debug.Log ("PLAYER 2 GOT KEY");
			player.SendMessage ("haveKey");
		}
	}
}
