// Smothly open a door
public var doorOpenClip : AudioClip;
public var doorCloseClip : AudioClip;
var smooth = 2.0;
var DoorOpenAngle = 90.0;
var DoorCloseAngle = 0.0;
var open : boolean;
var enter : boolean;
private var playernum = 0;


//Main function
function Update (){

if(open == true){
var target = Quaternion.Euler (0, DoorOpenAngle, 0);
// Dampen towards the target rotation
transform.localRotation = Quaternion.Slerp(transform.localRotation, target,
Time.deltaTime * smooth);
}

if(open == false){
audio.clip = doorOpenClip;
var target1 = Quaternion.Euler (0, DoorCloseAngle, 0);
// Dampen towards the target rotation
transform.localRotation = Quaternion.Slerp(transform.localRotation, target1,
Time.deltaTime * smooth);
}

if(enter == true){
if(Input.GetKeyDown(KeyCode.F) || (Input.GetButtonDown("Activate1") && playernum == 1) || (Input.GetButtonDown("Activate2") && playernum == 2)){
open = !open;
audio.Play();
switchDoorSound();
}
}
}

//Activate the Main function when player is near the door
function OnTriggerEnter (other : Collider){

if (other.gameObject.tag == "Player1") {
	(enter) = true;
	playernum = 1;
}
if (other.gameObject.tag == "Player2") {
	(enter) = true;
	playernum = 2;
}
}

//Deactivate the Main function when player is go away from door
function OnTriggerExit (other : Collider){

if (other.gameObject.tag == "Player1" || other.gameObject.tag == "Player2") {
	(enter) = false;
	playernum = 0;
}
}

function switchDoorSound(){
	yield WaitForSeconds (audio.clip.length);
	if(open == true){
		audio.clip = doorCloseClip;
	} else{
		audio.clip = doorOpenClip;
	}
}
//@youtube.com/user/maksimum654321