using UnityEngine;
using System.Collections;

public class enemyTargetTracker : MonoBehaviour {
	
	public static int TARGET_PLAYER = 0;
	public static int PLAYER1KEY = 0;
	public static int PLAYER2KEY = 0;
	// Update is called once per frame
	void Update () {
	
	}
	
	public void targetChanged(){
		Debug.Log ("targetchanged method called, target = "+TARGET_PLAYER);
		TARGET_PLAYER = (TARGET_PLAYER + 1) %2 ;
	}
	public void player1KeyGot(){
		PLAYER1KEY = (PLAYER1KEY + 1) %2 ;
	}
	public void player2KeyGot(){
		PLAYER2KEY = (PLAYER2KEY + 1) %2 ;
	}
	
}
