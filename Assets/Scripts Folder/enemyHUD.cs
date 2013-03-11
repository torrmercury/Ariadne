using UnityEngine;
using System.Collections;

public class enemyHUD : MonoBehaviour {
	
	public GameObject player1;
	public GameObject player2;
	public Texture2D enemyPic;
	static float sizeOfPic = (float) (.52f*Screen.width)-(.48f * Screen.width);
	Rect enemyPicPosition;
	float screenWidth;
	float startMiddleBar;
	float widthMiddleBar;
	float picDimension;
	void Start(){
		//Debug.Log("poopshoot");
		screenWidth = (float) Screen.width;
		startMiddleBar = (float) .48 * screenWidth;
		widthMiddleBar = (float) (.52*screenWidth)-startMiddleBar;
		picDimension = (float) widthMiddleBar * 1.5f;
		enemyPicPosition = new Rect ( .48f * Screen.width, 0f , picDimension, picDimension);
		
	}
	
	void OnGUI(){
		//screen coords
		//Rect startPosition = new Rect (startMiddleBar,0f,widthMiddleBar,widthMiddleBar);
		
		//draw enemy
		GUI.DrawTexture(enemyPicPosition, enemyPic);
		Vector3 distanceVector = distanceFromTarget();
		float distanceToEnd;
		float pictureSpeed;
		float distanceToTarget = distanceVector.magnitude;
		
		if (enemyTargetTracker.TARGET_PLAYER == 0){
			distanceToEnd = enemyPicPosition.x ;
			pictureSpeed =(float) (distanceToEnd/distanceVector.magnitude) *3f* Time.deltaTime;
			enemyPicPosition = new Rect( enemyPicPosition.x - pictureSpeed ,0f,picDimension,picDimension);
		}
		else {
			distanceToEnd = screenWidth - enemyPicPosition.xMax ;
			pictureSpeed =(float) (distanceToEnd/distanceVector.magnitude) *3f* Time.deltaTime;
			enemyPicPosition = new Rect( enemyPicPosition.x + pictureSpeed ,0f,picDimension,picDimension);
		}
		
	}
	Vector3 distanceFromTarget(){
		Vector3 enemyPosition = this.transform.position;
		Vector3 playerPosition;
		Vector3 distanceToTarget;
		if (enemyTargetTracker.TARGET_PLAYER == 0){
			playerPosition = player1.transform.position;
		}
		else {
			playerPosition = player2.transform.position;
		}
		distanceToTarget = enemyPosition - playerPosition;
		return distanceToTarget;
	
	}
}
