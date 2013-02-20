
var damping = 6.0;
var smooth = true;
var target : Transform;
var player1: Transform;
var player2: Transform;

var spawnPoint1: Vector3;
var spawnPoint2: Vector3;

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

function Start () {
	// Make the rigid body not change rotation
   	if (rigidbody)
		rigidbody.freezeRotation = true;
		
	spawnPoint1 = player1.position;
	spawnPoint2 = player2.position;
}


 
//change the target from one player to another
function changeTarget(){
	if (target == player1){ target = player2;}
	else { target = player1 ;}
}

function OnTriggerStay (other : Collider) {
	if (other.transform == player1){
		Debug.Log("PLayer1 got hit");
		other.transform.position = spawnPoint1;
		target = player2;
		
	}else if (other.transform == player2){
		Debug.Log("PLayer2 got hit");
		other.transform.position = spawnPoint2;
		target = player1;
	}
}

function OnTriggerEnter (other : Collider) {
	if (other.transform == player1){
		Debug.Log("PLayer1 got hit");
		other.transform.position = spawnPoint1;
		target = player2;
		
	}else if (other.transform == player2){
		Debug.Log("PLayer2 got hit");
		other.transform.position = spawnPoint2;
		target = player1;
	}
}