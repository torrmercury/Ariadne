var speed : int = 30;

function Update () {
	if (Input.GetKey (KeyCode.W)){
		transform.rotation = Quaternion.LookRotation(Vector3(0, 0, 1));
		transform.Translate (Vector3(0,0,1) * Time.deltaTime*speed);
	}
	if (Input.GetKey (KeyCode.S)){
		transform.rotation = Quaternion.LookRotation(Vector3(0, 0, -1));
		transform.Translate (Vector3(0,0,1) * Time.deltaTime*speed);
	}
	if (Input.GetKey (KeyCode.A)){
		transform.rotation = Quaternion.LookRotation(Vector3(-1, 0, 0));
		transform.Translate (Vector3(0,0,1) * Time.deltaTime*speed);
	}
	if (Input.GetKey (KeyCode.D)){
		transform.rotation = Quaternion.LookRotation(Vector3(1, 0, 0));
		transform.Translate (Vector3(0,0,1) * Time.deltaTime*speed);
	}
}