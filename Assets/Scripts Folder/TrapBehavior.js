#pragma strict
#pragma downcast
function Start () {
	for (var state : AnimationState in animation) {
    	state.speed = 4;
	}
}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	if(other.tag == "Player1" || other.tag == "Player2")
    	animation.Play("Up");
}

function OnTriggerExit (other : Collider) {
	if(other.tag == "Player1" || other.tag == "Player2")
    	animation.Play("Down");
}