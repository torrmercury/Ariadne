
var damping = 6.0;
var smooth = true;
var target : Transform;
var player1: Transform;
var player2: Transform;

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
}


 
//change the target from one player to another
function changeTarget(){
	if (target == player1){ target = player2;}
	else { target = player1 ;}
}

function OnTriggerEnter (other : Collider) {
	var collid1 : CapsuleCollider;
	collid1 = player1.GetComponent("CapsuleCollider");
	if (other == collid1){
		Debug.Log("PLayer1 got hit");
		player1.SendMessage("moveToStart");
		target = player2;
		
	}
	var collid12 : CapsuleCollider;
	collid2 = player2.GetComponent("CapsuleCollider");
	if (other == collid2){
		Debug.Log("PLayer2 got hit");
		player2.SendMessage("moveToStart");
		target = player1;
	}
}
