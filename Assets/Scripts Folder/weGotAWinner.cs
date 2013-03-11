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
		if (player1 == other.gameObject){
			Debug.Log ("win collision - player1");
			Application.LoadLevel (1);
		}
		else if ( player2 == other.gameObject ){
			Debug.Log ("win collision - player2");
			Application.LoadLevel (2);
		}
	}
	
}
