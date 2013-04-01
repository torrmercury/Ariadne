 
var xSpeed = 250.0;
var ySpeed = 120.0;
var goal: Transform;
var speed : int = 20;
var chainLinkPrefab: Transform;
var maxChainLink = 200;
private var flashlight : Light;

private var x = 0.0;
private var y = 0.0;
 
function Start () {
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;
 
    // Make the rigid body not change rotation
    if (rigidbody){
        rigidbody.freezeRotation = true;
        }
    flashlight = this.transform.Find("Main Camera").Find("Spotlight").GetComponent("Light");
}
 
function LateUpdate () {
		//in order to access a enemyTargetTracker (a c# script),
		// the c# script must be in the standard assest folder and the 
		//javascript script must be outside of the standard assets folder.
		if (!enemyTargetTracker.PLAYER_ONE_DEAD){ 
 			
       		x += Input.GetAxis("JoyLeftStickH1") * xSpeed * 0.02;
        	y += Input.GetAxis("JoyLeftStickV1") * ySpeed * 0.02;
        	var rotation = Quaternion.Euler(y, x, 0);
        	transform.rotation = rotation;
        }
}

function Update () {
	//Debug.Log(Input.GetAxis("Sprint"));
	if (Input.GetButton("Joy Sprint1")){
		speed = 35;
	} else{
		speed = 20;
	}

	if (!enemyTargetTracker.PLAYER_ONE_DEAD){
		var controller : CharacterController = GetComponent(CharacterController);
		var HDir = Vector3.zero;
		
		ForwardDir = this.transform.forward;
		RightDir = this.transform.right;
		CombinedDir = ForwardDir * Input.GetAxis("JoyRightStickV1") + RightDir * Input.GetAxis("JoyRightStickH1");
		CombinedDir.y = 0;
		controller.Move(CombinedDir.normalized * Time.deltaTime * speed);
	}
	
	if ( Input.GetButton ("deployThread1")){
		//createThread
		//Debug.Log("hizzhere");
		//drop chain links
		//Rigidbody chainLink;
       // chainLink = Instantiate(chainLinkPrefab, transform.position, transform.rotation) as Rigidbody;
       Instantiate (chainLinkPrefab, this.transform.position, Quaternion.identity);
  
	}
	if (Input.GetButtonDown("flashlightOn")) {
		flashlight.enabled = !flashlight.enabled;
	}
}