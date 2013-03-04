using UnityEngine;
using System.Collections;

public class Aggro_Switch : MonoBehaviour {
	
	bool switched = false;
	public GameObject enemy;
	public GameObject player1;
	public GameObject player2;
	public GameObject goal;
	public GameObject meSwitch;
	
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	public void OnTriggerEnter(Collider other){
		if (player1 == other.gameObject || player2 == other.gameObject){
			//switchSound = AudioSource.audio.Play();
			Debug.Log ("YOOOO");
			enemy.SendMessage("changeTarget");
			goal.SendMessage("targetChanged");
			Destroy(gameObject);
		}
	}
}
