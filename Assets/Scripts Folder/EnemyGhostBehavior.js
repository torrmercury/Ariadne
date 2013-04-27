var moveSpeed = 1.5;
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
		var targetDirection = target.position - transform.position;
		
		if(Vector3.Distance(this.transform.position, target.position) > 10){
			targetDirection.y = 0;
		}
		
		var newRotation = Quaternion.LookRotation(targetDirection);
		transform.rotation = Quaternion.Slerp(transform.rotation, newRotation, Time.deltaTime * damping);
		
	}
}

function Update (){
	if (target){
   		transform.Translate(moveSpeed * Vector3(0,0,1) * Time.deltaTime);
   	} else if (enemyTargetTracker.TARGET_PLAYER == 0){
   		target = player1;
   	} else if (enemyTargetTracker.TARGET_PLAYER == 1){
   		target = player2;
   	}
   	
   	if (((target && Vector3.Distance(this.transform.position, target.position) > 10) || !target) && this.transform.position.y < 7.5){
   		transform.Translate(moveSpeed * Vector3(0,1,0) * Time.deltaTime);
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
	    enemyTargetTracker.TARGET_PLAYER = -1;
	}else if (other.transform == player2){
		Debug.Log("Player2 got hit");
		target = player1;
		goal.SendMessage("player2Died");
	    enemyTargetTracker.TARGET_PLAYER = -1;
	}
}