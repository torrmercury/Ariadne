// Smothly open a door
var smooth = 2.0;
var enter : boolean;
private var playernum = 0;

//Main function
function Update (){
	if(enter == true){
		if((Input.GetKeyDown(KeyCode.F) || Input.GetButtonDown("Activate1")) && playernum == 1 && enemyTargetTracker.PLAYER1KEY == 0){
			animation.Play("in-open-slowly");
			Debug.Log("OPEN SESAME");
		} else if(Input.GetButtonDown("Activate2") && playernum == 2 && enemyTargetTracker.PLAYER2KEY == 1){
			animation.Play("in-open-slowly");
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
//@youtube.com/user/maksimum654321