var speed : int = 30;

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	if (Input.GetKey (KeyCode.UpArrow)){
		transform.rotation = Quaternion.LookRotation(Vector3(0, 0, 1));
		controller.Move(Vector3(0,0,1) * Time.deltaTime*speed);
	}
	if (Input.GetKey (KeyCode.DownArrow)){
		transform.rotation = Quaternion.LookRotation(Vector3(0, 0, -1));
		controller.Move(Vector3(0,0,-1) * Time.deltaTime*speed);
	}
	if (Input.GetKey (KeyCode.LeftArrow)){
		transform.rotation = Quaternion.LookRotation(Vector3(-1, 0, 0));
		controller.Move(Vector3(-1,0,0) * Time.deltaTime*speed);
	}
	if (Input.GetKey (KeyCode.RightArrow)){
		transform.rotation = Quaternion.LookRotation(Vector3(1, 0, 0));
		controller.Move(Vector3(1,0,0) * Time.deltaTime*speed);
	}
}