var xSpeed = 250.0;
var ySpeed = 120.0;
var speed : int = 20;

private var x = 0.0;
private var y = 0.0;
private var flashlight : Light;
private var pointlight : Light;
private var shakeScript : CameraShake;

function Start () {
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;
    flashlight = this.transform.Find("Main Camera").Find("Spotlight").GetComponent("Light");
	pointlight = this.transform.Find("Main Camera").Find("Point light").GetComponent("Light");
	shakeScript = this.transform.Find("Main Camera").GetComponent("CameraShake");
 
    // Make the rigid body not change rotation
    if (rigidbody)
        rigidbody.freezeRotation = true;
}
 
function LateUpdate () {

		if (!enemyTargetTracker.PLAYER_TWO_DEAD){ 
		    x += Input.GetAxis("JoyLeftStickH2") * xSpeed * 0.02;
		    y += Input.GetAxis("JoyLeftStickV2") * ySpeed * 0.02;
			y = Mathf.Clamp(y, -60F, 60F);
		    var rotation = Quaternion.Euler(y, x, 0);
		    transform.rotation = rotation;
		}
}

function Update () {
	if(Input.GetButton("Joy Sprint2")){
		speed = 30;
		this.transform.Find("Main Camera").getComponent(CameraShake).shouldShake = true;
	} else{
		speed = 10;
		if(shakeScript.shouldShake){
			shakeScript.shouldShake = false;
			this.transform.Find("Main Camera").rotation.x = this.transform.rotation.x;
			this.transform.Find("Main Camera").rotation.y = this.transform.rotation.y;
			this.transform.Find("Main Camera").rotation.z = this.transform.rotation.z;
			this.transform.Find("Main Camera").rotation.w = this.transform.rotation.w;
		}
	}

	if (!enemyTargetTracker.PLAYER_TWO_DEAD){
		var controller : CharacterController = GetComponent(CharacterController);
		var HDir = Vector3.zero;
		
		ForwardDir = this.transform.forward;
		RightDir = this.transform.right;
		CombinedDir = ForwardDir * Input.GetAxis("JoyRightStickV2") * -1 + RightDir * Input.GetAxis("JoyRightStickH2");
		CombinedDir.y = 0;
		controller.Move(CombinedDir.normalized * Time.deltaTime * speed);
	}

	if (Input.GetButtonDown("flashlightOn2")) {
		flashlight.enabled = !flashlight.enabled;
		pointlight.enabled = !pointlight.enabled;
	}
}