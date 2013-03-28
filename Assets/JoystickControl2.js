var xSpeed = 250.0;
var ySpeed = 120.0;
var goal: Transform;
var speed : int = 20;
var chainLinkPrefab: Transform;
private var x = 0.0;
private var y = 0.0;
private var flashlight : Light;

function Start () {
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;
    flashlight = this.transform.Find("Main Camera").Find("Spotlight").GetComponent("Light");
 
    // Make the rigid body not change rotation
    if (rigidbody)
        rigidbody.freezeRotation = true;
}
 
function LateUpdate () {

		if (!enemyTargetTracker.PLAYER_TWO_DEAD){ 
		    x += Input.GetAxis("Joy X2") * xSpeed * 0.02;
		    y += Input.GetAxis("Joy Y2") * ySpeed * 0.02;
		
		    var rotation = Quaternion.Euler(y, x, 0);
		
		    transform.rotation = rotation;
		}
}

function Update () {
	if (Input.GetButton("Joy Sprint2") || Input.GetButton("Joy Sprint2 Alt")){
		speed = 35;
	} else{
		speed = 20;
	}

	if (!enemyTargetTracker.PLAYER_TWO_DEAD){
		var controller : CharacterController = GetComponent(CharacterController);
		var HDir = Vector3.zero;
		
		ForwardDir = this.transform.forward;
		RightDir = this.transform.right;
		CombinedDir = ForwardDir * Input.GetAxis("Joy V2") * -1 + RightDir * Input.GetAxis("Joy H2");
		CombinedDir.y = 0;
		controller.Move(CombinedDir.normalized * Time.deltaTime * speed);
	}
	if ( Input.GetButton ("deployThread")){
		//createThread
		//Debug.Log("hizzhere");
		//drop chain links
		//Rigidbody chainLink;
       // chainLink = Instantiate(chainLinkPrefab, transform.position, transform.rotation) as Rigidbody;
       Instantiate (chainLinkPrefab, this.transform.position, Quaternion.identity);
  
	}
	if (Input.GetButtonDown("flashlightOn2")) {
		flashlight.enabled = !flashlight.enabled;
	}
}