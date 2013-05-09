var xSpeed = 250.0;
var ySpeed = 120.0;
var normalSpeed : int = 1;
var sprintSpeed : int = 3;

////thread deploy no longer used.
//var chainLinkPrefab: Transform;
//var maxChainLink = 200;


private var flashlight : Light;
private var pointlight : Light;

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
	pointlight = this.transform.Find("Main Camera").Find("Point light").GetComponent("Light");
}
 
function LateUpdate () {
		//in order to access a enemyTargetTracker (a c# script),
		// the c# script must be in the standard assest folder and the 
		//javascript script must be outside of the standard assets folder.
		if (!enemyTargetTracker.PLAYER_ONE_DEAD){ 	
       		x += Input.GetAxis("JoyLeftStickH1") * xSpeed * 0.02;
        	y += Input.GetAxis("JoyLeftStickV1") * ySpeed * 0.02;
        	y = Mathf.Clamp(y, -45F, 60F);
        	var rotation = Quaternion.Euler(y, x, 0);
        	transform.rotation = rotation;
        }
        
}

function Update () {
	//Debug.Log(Input.GetAxis("Sprint"));
	if(Input.GetButton("Joy Sprint1")){
		speed = sprintSpeed;
	} else{
		speed = normalSpeed;
	}

	if (!enemyTargetTracker.PLAYER_ONE_DEAD){
		var controller : CharacterController = GetComponent(CharacterController);
		
		ForwardDir = this.transform.forward;
		RightDir = this.transform.right;
		CombinedDir = ForwardDir * Input.GetAxis("JoyRightStickV1") + RightDir * Input.GetAxis("JoyRightStickH1");
		CombinedDir.y = 0;
		controller.Move(CombinedDir.normalized * Time.deltaTime * speed);
		
		if(CombinedDir == Vector3.zero){
			this.transform.Find("skeleton").animation.CrossFade("idle");
		}else {
			this.transform.Find("skeleton").animation.CrossFade("run");
		}
	}
	
	if (Input.GetButtonDown("flashlightOn")) {
		flashlight.enabled = !flashlight.enabled;
		pointlight.enabled = !pointlight.enabled;
	}
	
	
//	if ( Input.GetButton ("deployThread1")){
//		//createThread
//		//Debug.Log("hizzhere");
//		//drop chain links
//		//Rigidbody chainLink;
//       // chainLink = Instantiate(chainLinkPrefab, transform.position, transform.rotation) as Rigidbody;
//		var threadpos = this.transform.position;
//		threadpos.y = 0;
//       	Instantiate (chainLinkPrefab, threadpos, Quaternion.identity);
//  
//	}
}