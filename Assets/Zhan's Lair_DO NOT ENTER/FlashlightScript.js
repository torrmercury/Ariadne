#pragma strict

function Start () {

}

function Update () {
	var flashlight : Light;
	flashlight = this.GetComponent("Light");
	if (Input.GetKeyDown(KeyCode.E)) {
		flashlight.enabled = !flashlight.enabled;
	}
}