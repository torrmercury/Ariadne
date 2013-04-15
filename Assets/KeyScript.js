#pragma strict

var player1: Transform;
var player2: Transform;

function Start () {

}

function Update () {

}

function OnTriggerStay (other : Collider) {
    if ((player1 == other.gameObject && Input.GetButton("Activate1")) || Input.GetKeyDown(KeyCode.R)){
		if(enemyTargetTracker.PLAYER1KEY == 0){
			Debug.Log ("P1 GOT KEY");
			enemyTargetTracker.PLAYER1KEY = 1;
			Destroy(gameObject);
		}else{
			Debug.Log ("P1 GOT KEY AGAIN");
		}
	}
	if (player2 == other.gameObject && Input.GetButton("Activate2")){
		if(enemyTargetTracker.PLAYER2KEY == 0){
			Debug.Log ("P2 GOT KEY");
			enemyTargetTracker.PLAYER2KEY = 1;
			Destroy(gameObject);
		}else{
			Debug.Log ("P2 GOT KEY AGAIN");
		}
	}
}