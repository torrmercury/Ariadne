var moveSpeed = 17.5;
var damping = 6.0;
var smooth = true;
var counter = 0;
var target : Transform;
var player1: Transform;
var player2: Transform;
var goal: Transform;

@script AddComponentMenu("Camera-Control/Smooth Look At")


function LateUpdate () {
		if (target) {
			if (smooth)
			{
				// Look at and dampen the rotation
				var rotation = Quaternion.LookRotation(target.position - transform.position);
				transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
			}
			else
			{
				// Just lookat
			    transform.LookAt(target);
			}
		}
	
}

function Update (){
	if ( counter++ > 300){
   		follow();
   	}
}

function Start () {
	// Make the rigid body not change rotation
   	if (rigidbody)
		rigidbody.freezeRotation = true;
}


//enemy moves toward player
function follow(){
	if(target){
		transform.Translate(moveSpeed *Vector3(0,0,1)* Time.deltaTime);
	}
}

 
//change the target from one player to another
function targetP1(){
	target = player1;
}
function targetP2(){
	target = player2;
}

function OnTriggerEnter (other : Collider) {
	if (other.transform == player1){
		Debug.Log("Player1 got hit");
		target = player2;
	    goal.SendMessage("player1Died");
	}else if (other.transform == player2){
		Debug.Log("Player2 got hit");
		target = player1;
		goal.SendMessage("player2Died");
	}
}

function getTarget(): int{
	if ( target == player1){	
		return 1;
	}
	else{ return 2;	}
}
