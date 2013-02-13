<<<<<<< HEAD:Assets/Standard Assets/Scripts/Camera Scripts/SmoothLookAt.js
var damping = 6.0;
var smooth = true;
var target : Transform;
var player1 : Transform;
var player2 : Transform;
var buttonSwitch: Transform;
public var switchBoolean = 1;
=======
var target : Transform;
var player1: Transform;
var player2: Transform;
var damping = 6.0;
var smooth = true;
var switched = 0;
>>>>>>> switch now works:Assets/Standard Assets/Character Controllers/Sources/Scripts/SmoothLookAt.js

@script AddComponentMenu("Camera-Control/Smooth Look At")

function LateUpdate () {
	
	Debug.Log("target == player1??"+ (target == player1));
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

<<<<<<< HEAD:Assets/Standard Assets/Scripts/Camera Scripts/SmoothLookAt.js
//changes player targeted by enemy
public function changeTarget(){
	var playerTarget = buttonSwitch.target;
	if ( playerTarget == false ){
		target = player1;
	} 
	else { target =  player2;}
}
 
=======
//change the target from one player to another
function changeTarget(){
	if (target == player1){ target = player2;}
	else { target = player1 ;}
}
>>>>>>> switch now works:Assets/Standard Assets/Character Controllers/Sources/Scripts/SmoothLookAt.js
