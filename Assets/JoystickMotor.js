var speed : int = 5;

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	var HDir = Vector3.zero;
	
	ForwardDir = this.transform.forward;
	RightDir = this.transform.right;
	CombinedDir = ForwardDir * Input.GetAxis("Joy V") + RightDir * Input.GetAxis("Joy H");
	CombinedDir.y = 0;
	controller.Move(CombinedDir.normalized * Time.deltaTime * speed);
}