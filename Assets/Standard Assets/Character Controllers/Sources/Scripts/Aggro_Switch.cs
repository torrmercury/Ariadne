using UnityEngine;
using System.Collections;

public class Aggro_Switch : MonoBehaviour {
	
	bool switched = false;
	public GameObject enemy;
	public GameObject player1;
	public GameObject player2;
	
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	public void OnTriggerEnter(Collider other){
		if (player1 == other.gameObject || player2 == other.gameObject){
			Debug.Log ("YOOOO");
			enemy.SendMessage("changeTarget");
			Destroy(gameObject);
		}
	}
}
