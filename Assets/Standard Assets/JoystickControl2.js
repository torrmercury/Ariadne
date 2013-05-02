var xSpeed = 250.0;
var ySpeed = 120.0;
var normalSpeed : int = 1;
var sprintSpeed : int = 3;

private var x = 0.0;
private var y = 0.0;
private var flashlight : Light;
private var pointlight : Light;

function Start () {
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;
    flashlight = this.transform.Find("Main Camera").Find("Spotlight").GetComponent("Light");
	pointlight = this.transform.Find("Main Camera").Find("Point light").GetComponent("Light");
 
    // Make the rigid body not change rotation
    if (rigidbody)
        rigidbody.freezeRotation = true;
}
 
function LateUpdate () {

		//if (!enemyTargetTracker.PLAYER_TWO_DEAD){ 
		    x += Input.GetAxis("JoyLeftStickH2") * xSpeed * 0.02;
		    y += Input.GetAxis("JoyLeftStickV2") * ySpeed * 0.02;
			y = Mathf.Clamp(y, -60F, 60F);
		    var rotation = Quaternion.Euler(y, x, 0);
		    transform.rotation = rotation;
		//}
}

function Update () {
	if(Input.GetButton("Joy Sprint2")){
		speed = sprintSpeed;
	} else{
		speed = normalSpeed;
	}

	//if (!enemyTargetTracker.PLAYER_TWO_DEAD){
		var controller : CharacterController = GetComponent(CharacterController);
		var HDir = Vector3.zero;
		
		ForwardDir = this.transform.forward;
		RightDir = this.transform.right;
		CombinedDir = ForwardDir * Input.GetAxis("JoyRightStickV2") * -1 + RightDir * Input.GetAxis("JoyRightStickH2");
		CombinedDir.y = 0;
		controller.Move(CombinedDir.normalized * Time.deltaTime * speed);
	//}

	if (Input.GetButtonDown("flashlightOn2")) {
		flashlight.enabled = !flashlight.enabled;
		pointlight.enabled = !pointlight.enabled;
	}
}