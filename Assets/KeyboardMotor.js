var alive = true;
var speed : int = 20;
private var flashlight : Light;
private var pointlight : Light;
private var shakeScript : CameraShake;

function Start () {
	pointlight = this.transform.Find("Main Camera").Find("Point light").GetComponent("Light");
	flashlight = this.transform.Find("Main Camera").Find("Spotlight").GetComponent("Light");
	shakeScript = this.transform.Find("Main Camera").GetComponent("CameraShake");
}

function FixedUpdate () {
	var controller : CharacterController = GetComponent(CharacterController);
	var HDir = Vector3.zero;
	if(!alive){
		speed = 0;
	}else if(Input.GetKey(KeyCode.Space)){
		speed = 30;
		shakeScript.shouldShake = true;
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

	if (Input.GetKey (KeyCode.UpArrow) || Input.GetKey(KeyCode.W)){
		HDir = this.transform.forward;
		HDir.y = 0;
		controller.Move(HDir.normalized * Time.deltaTime*speed);
		var flags;
		flags = controller.Move(HDir.normalized * Time.deltaTime*speed);
		//Debug.Log(flags);
	}
	if (Input.GetKey (KeyCode.DownArrow) || Input.GetKey(KeyCode.S)){
		HDir = this.transform.forward * -1;
		HDir.y = 0;
		//var flags;
		flags = controller.Move(HDir.normalized * Time.deltaTime*speed);
		//Debug.Log(flags);
	}
	if (Input.GetKey (KeyCode.LeftArrow) || Input.GetKey(KeyCode.A)){
		HDir = this.transform.right * -1;
		HDir.y = 0;
		controller.Move(HDir.normalized * Time.deltaTime*speed);
	}
	if (Input.GetKey (KeyCode.RightArrow) || Input.GetKey(KeyCode.D)){
		HDir = this.transform.right;
		HDir.y = 0;
		controller.Move(HDir.normalized * Time.deltaTime*speed);
	}
}

function Update () {
	if (Input.GetKeyDown(KeyCode.E)) {
		flashlight.enabled = !flashlight.enabled;
		pointlight.enabled = !pointlight.enabled;
	}
}