using UnityEngine;
using System.Collections;

public class weGotAWinner : MonoBehaviour {
	
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	public void OnTriggerEnter(Collider other){
		if ("Player1" == other.tag){
			Debug.Log ("win collision - player1");
			Application.LoadLevel (1);
		}
		else if ("Player2" == other.tag){
			Debug.Log ("win collision - player2");
			Application.LoadLevel (2);
		}
	}
	
}
