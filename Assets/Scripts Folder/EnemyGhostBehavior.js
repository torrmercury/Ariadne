var moveSpeed = 17.5;
var damping = 6.0;
var counter = 0;
var target : Transform;
var player1: Transform;
var player2: Transform;
var goal: Transform;

@script AddComponentMenu("Camera-Control/Smooth Look At")


function LateUpdate () {
	if (target) {
		// Look at and dampen the rotation
		var newRotation = Quaternion.LookRotation(target.position - transform.position);
		transform.rotation = Quaternion.Slerp(transform.rotation, newRotation, Time.deltaTime * damping);
		
		// float in air until near player
		if(Vector3.Distance(this.transform.position, target.position) > 40){
			transform.eulerAngles.z = 0;
		}
		Debug.Log(transform.eulerAngles);
	} else{
	
	}
}

function Update (){
	if (target){
   		transform.Translate(moveSpeed *Vector3(0,0,1)* Time.deltaTime);
   	} else if (enemyTargetTracker.TARGET_PLAYER == 0){
   		target = player1;
   	} else if (enemyTargetTracker.TARGET_PLAYER == 1){
   		target = player2;
   	}
}

function Start () {
	// Make the rigid body not change rotation
   	if (rigidbody)
		rigidbody.freezeRotation = true;
}

function OnTriggerEnter (other : Collider) {
	if (other.transform == player1){
		Debug.Log("Player1 got hit");
		target = player2;
	    goal.SendMessage("player1Died");
	    enemyTargetTracker.TARGET_PLAYER = 1;
	}else if (other.transform == player2){
		Debug.Log("Player2 got hit");
		target = player1;
		goal.SendMessage("player2Died");
	    enemyTargetTracker.TARGET_PLAYER = 0;
	}
}