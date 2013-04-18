using UnityEngine;
using System.Collections;

[RequireComponent(typeof(AudioSource))]
public class Aggro_Switch : MonoBehaviour {
	
	bool switched = false;
	public GameObject enemy;
	public GameObject player1;
	public GameObject player2;
	public GameObject goal;
	
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	public void OnTriggerStay(Collider other){
		if ((player1 == other.gameObject && Input.GetButton("Activate1")) || Input.GetKeyDown(KeyCode.R)){
			//Debug.Log ("YOOOO");
			enemy.SendMessage("targetP2");
	    	enemyTargetTracker.TARGET_PLAYER = 1;
			audio.Play();
			gameObject.GetComponent<MeshRenderer>().enabled = false;
			Destroy(gameObject, audio.clip.length);
		} else if(player2 == other.gameObject && Input.GetButton("Activate2")){
			enemy.SendMessage("targetP2");
			enemyTargetTracker.TARGET_PLAYER = 0;
			audio.Play();
			gameObject.GetComponent<MeshRenderer>().enabled = false;
			Destroy(gameObject, audio.clip.length);
		}
	}
}
