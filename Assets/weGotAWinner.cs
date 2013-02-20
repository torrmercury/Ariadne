using UnityEngine;
using System.Collections;

public class weGotAWinner : MonoBehaviour {
	
	public GameObject player1;
	public GameObject player2;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	public void OnTriggerEnter(Collider other){
		Debug.Log ("win collion");
		if (player1 == other.gameObject){
			Debug.Log ("player1");
			Application.LoadLevel (1);
		}
		else if ( player2 == other.gameObject ){
			Debug.Log ("player2");
			Application.LoadLevel (2);
		}
	}
	
}
