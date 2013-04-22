var moveSpeed = 17.5;
var damping = 6.0;
var smooth = true;
var target : Transform;
var player1: Transform;
var player2: Transform;
var goal: Transform;
var watchPosition;
var countDown = 2.0f;
var chaseBegan = false;

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
	if (chaseBegan){
   		follow();
   	} else if (Vector3.Distance(watchPosition, player1.transform.position) < 8){
		target = player1;
		startChase();
   	} else if (Vector3.Distance(watchPosition, player2.transform.position) < 8){
		target = player2;
		startChase();
   	}
   	Debug.Log(Vector3.Distance(watchPosition, player1.transform.position));
}

function Start () {
	watchPosition = this.transform.position + this.transform.forward * 25;
	// Make the rigid body not change rotation
   	if (rigidbody)
		rigidbody.freezeRotation = true;
}

function startChase() {
	countDown = countDown - Time.deltaTime;
	if(countDown <= 0){
		transform.Find("Enemy_Sphere").GetComponent(MeshRenderer).enabled = true;
	   	chaseBegan = true;
	   	Destroy(gameObject, 7.0f);
   	}
}

//enemy moves toward player
function follow(){
	if(target){
		transform.Translate(moveSpeed *Vector3(0,0,1)* Time.deltaTime);
	}
}


function OnTriggerEnter (other : Collider) {
	if (other.transform == player1){
		Debug.Log("Player1 got hit");
	    goal.SendMessage("player1Died");
	    Destroy(gameObject);
	}else if (other.transform == player2){
		Debug.Log("Player2 got hit");
		goal.SendMessage("player2Died");
	    Destroy(gameObject);
	}
}