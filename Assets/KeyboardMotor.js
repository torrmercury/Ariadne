var speed : int = 8;

function FixedUpdate () {
	var controller : CharacterController = GetComponent(CharacterController);
	var HDir = Vector3.zero;
	if ( Input.GetButton("Sprint")){
		speed = 15;
		Debug.Log ("i can sprint now");
	}
	else { speed = 8;}
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