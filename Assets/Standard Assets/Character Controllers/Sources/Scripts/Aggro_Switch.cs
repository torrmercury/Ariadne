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
		if(!switched){
			if (player1 == other.gameObject && (Input.GetButton("Activate1") || Input.GetKeyDown(KeyCode.R))){
				switched = true;
				enemy.SendMessage("targetP2");
		    	enemyTargetTracker.TARGET_PLAYER = 1;
				audio.Play();
				transform.Find("lever").animation.Play();
			} else if(player2 == other.gameObject && Input.GetButton("Activate2")){
				switched = true;
				enemy.SendMessage("targetP1");
				enemyTargetTracker.TARGET_PLAYER = 0;
				audio.Play();
				transform.Find("lever").animation.Play();
			}
		}
	}
}
