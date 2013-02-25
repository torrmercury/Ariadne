var xSpeed = 250.0;
var ySpeed = 120.0;
 
private var x = 0.0;
private var y = 0.0;

var speed : int = 5;

function Start () {
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;
 
    // Make the rigid body not change rotation
    if (rigidbody)
        rigidbody.freezeRotation = true;
}
 
function LateUpdate () {
 
        x += Input.GetAxis("Joy X2") * xSpeed * 0.02;
        y += Input.GetAxis("Joy Y2") * ySpeed * 0.02;
 
        var rotation = Quaternion.Euler(y, x, 0);
 
        transform.rotation = rotation;
}

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	var HDir = Vector3.zero;
	
	ForwardDir = this.transform.forward;
	RightDir = this.transform.right;
	CombinedDir = ForwardDir * Input.GetAxis("Joy V2") * -1 + RightDir * Input.GetAxis("Joy H2");
	CombinedDir.y = 0;
	controller.Move(CombinedDir.normalized * Time.deltaTime * speed);
}