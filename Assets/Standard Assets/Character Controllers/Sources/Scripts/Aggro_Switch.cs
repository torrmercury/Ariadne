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
	public void OnTriggerStay(Collider other){
		if ((player1 == other.gameObject && Input.GetButton("activateSwitch1")) || (player2 == other.gameObject && Input.GetButton("activateSwitch2")) || Input.GetKeyDown(KeyCode.R)){
			//Debug.Log ("YOOOO");
			enemy.SendMessage("changeTarget");
			goal.SendMessage("targetChanged");
			Destroy(gameObject);
		}
	}
}
