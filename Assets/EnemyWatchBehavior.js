#pragma strict

var player1: Transform;
var player2: Transform;

function Start () {

}

function Update () {
	var hit : RaycastHit;
    var rayDirection1 = player1.position - transform.position;
    var rayDirection2 = player2.position - transform.position;
 
    if (Physics.Raycast (transform.position, rayDirection1, hit)) {
        if (hit.transform == player1) {
            var hitDistance1 = (player1.position - transform.position);
        }
    }
    if (Physics.Raycast (transform.position, rayDirection1, hit)) {
        if (hit.transform == player2) {
            
        }
    }
    
}