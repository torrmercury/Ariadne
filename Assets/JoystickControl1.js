 
var xSpeed = 250.0;
var ySpeed = 120.0;
var goal: Transform;
var speed : int = 20;

private var x = 0.0;
private var y = 0.0;

private var flashlight : Light;

function Start () {
	flashlight = this.transform.Find("Main Camera").Find("Spotlight").GetComponent("Light");
	
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;
 
    // Make the rigid body not change rotation
    if (rigidbody)
        rigidbody.freezeRotation = true;
}
 
function LateUpdate () {
		//in order to access a enemyTargetTracker (a c# script),
		// the c# script must be in the standard assest folder and the 
		//javascript script must be outside of the standard assets folder.
		if (!enemyTargetTracker.PLAYER_ONE_DEAD){ 
 			
       		x += Input.GetAxis("Joy X") * xSpeed * 0.02;
        	y += Input.GetAxis("Joy Y") * ySpeed * 0.02;
        	var rotation = Quaternion.Euler(y, x, 0);
        	transform.rotation = rotation;
        }
}

function Update () {
	//Debug.Log(Input.GetAxis("Sprint"));
	if (Input.GetButton("Joy Sprint1") || Input.GetButton("Joy Sprint1 Alt")){
		speed = 35;
	} else{
		speed = 20;
	}

	if (!enemyTargetTracker.PLAYER_ONE_DEAD){
		var controller : CharacterController = GetComponent(CharacterController);
		var HDir = Vector3.zero;
		
		ForwardDir = this.transform.forward;
		RightDir = this.transform.right;
		CombinedDir = ForwardDir * Input.GetAxis("Joy V") + RightDir * Input.GetAxis("Joy H");
		CombinedDir.y = 0;
		controller.Move(CombinedDir.normalized * Time.deltaTime * speed);
	}
	
<<<<<<< HEAD
	
	var flashlight : Light;
	flashlight = this.transform.Find("Main Camera").Find("Spotlight").GetComponent("Light");
	
	//CHANGE to reflect controller input
	if (Input.GetKeyDown(KeyCode.E)) {
		flashLightOn = !flashLightOn;
=======
	//CHANGE to reflect actual input
	if (Input.GetKeyDown(KeyCode.E)) {
>>>>>>> enemy now chases player in close range with flashlight off
		flashlight.enabled = !flashlight.enabled;
	}
}