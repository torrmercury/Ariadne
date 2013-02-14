var speed : int = 600;

function FixedUpdate () {
	if (Input.GetKey (KeyCode.W)){
		transform.rotation = Quaternion.LookRotation(Vector3(0, 0, 1));
		//rigidbody.MovePosition(Vector3(0,0,1) * Time.deltaTime*speed);
		rigidbody.AddForce (Vector3(0,0,1) * Time.fixedDeltaTime *speed);
	}
	if (Input.GetKey (KeyCode.S)){
		transform.rotation = Quaternion.LookRotation(Vector3(0, 0, -1));
		rigidbody.AddForce (Vector3(0,0,1) * Time.fixedDeltaTime *-speed);
	}
	if (Input.GetKey (KeyCode.A)){
		transform.rotation = Quaternion.LookRotation(Vector3(-1, 0, 0));
		rigidbody.AddForce (Vector3(1,0,0) * Time.fixedDeltaTime *-speed);
	}
	if (Input.GetKey (KeyCode.D)){
		transform.rotation = Quaternion.LookRotation(Vector3(1, 0, 0));
		rigidbody.AddForce (Vector3(1,0,0) * Time.fixedDeltaTime *speed);
	}
	
}

function OnCollisionEnter(collision : Collision) {
    // Debug-draw all contact points and normals
    for (var contact : ContactPoint in collision.contacts) {
        Debug.Log("im here");
    }
}