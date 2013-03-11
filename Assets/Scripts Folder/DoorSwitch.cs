using UnityEngine;
using System.Collections;

public class DoorSwitch : MonoBehaviour {
	
	public GameObject player;
	public GameObject player2;
	public GameObject enemy;
	public GameObject goal;
	
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
		Debug.Log(enemyTargetTracker.PLAYER1KEY);
		if (other.gameObject.CompareTag("Player1") && enemyTargetTracker.PLAYER1KEY == 0){
            Destroy(this.gameObject);
			goal.SendMessage("player1KeyGot");
			Debug.Log ("PLAYER 1 GOT KEY");
			player.SendMessage ("haveKey");
			//goal.SendMessage("targetChanged()");
		}
		if (other.gameObject.CompareTag("Player2") && enemyTargetTracker.PLAYER2KEY == 0){
            Destroy(this.gameObject);
			Debug.Log ("PLAYER 2 GOT KEY");
			goal.SendMessage("player2KeyGot");
			player2.SendMessage ("haveKey");
			//goal.SendMessage("targetChanged()");
		}
	}
}
