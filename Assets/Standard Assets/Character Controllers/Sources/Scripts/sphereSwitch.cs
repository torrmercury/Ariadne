using UnityEngine;
using System.Collections;

public class sphereSwitch : MonoBehaviour {
	
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
			enemy.SendMessage("changeTarget");
			Destroy(gameObject);
		}
	}
}
