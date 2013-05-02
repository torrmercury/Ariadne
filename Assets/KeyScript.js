#pragma strict

var player1: Transform;
var player2: Transform;

function Start () {

}

function Update () {
	transform.Rotate (0,50*Time.deltaTime,-50*Time.deltaTime);
}

function OnTriggerEnter (other : Collider) {
    if (other.tag == "Player1"){
		if(enemyTargetTracker.PLAYER1KEY == 0){
			Debug.Log ("P1 GOT KEY");
			enemyTargetTracker.PLAYER1KEY = 1;
			Destroy(gameObject);
		}else{
			Debug.Log ("P1 GOT KEY AGAIN");
		}
	}
	if (other.tag == "Player2"){
		if(enemyTargetTracker.PLAYER2KEY == 0){
			Debug.Log ("P2 GOT KEY");
			enemyTargetTracker.PLAYER2KEY = 1;
			Destroy(gameObject);
		}else{
			Debug.Log ("P2 GOT KEY AGAIN");
		}
	}
}