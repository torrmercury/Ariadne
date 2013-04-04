#pragma strict

var player1: Transform;
var player2: Transform;

function Start () {

}

function Update () {

}

function OnTriggerStay (other : Collider) {
    if ((player1 == other.gameObject && Input.GetButton("Activate1")) || Input.GetKeyDown(KeyCode.R)){
			Debug.Log ("P1 GOT KEY");
			GlobalScript.player1key = 1;
			Destroy(gameObject);
	}
	if (player2 == other.gameObject && Input.GetButton("Activate2")){
			Debug.Log ("P2 GOT KEY");
			GlobalScript.player2key = 1;
			Destroy(gameObject);
	}
}