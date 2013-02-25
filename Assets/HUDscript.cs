using UnityEngine;
using System.Collections;

public class HUDscript : MonoBehaviour {

	public GameObject enemy;
	GameObject targetedPlayer;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnGUI() {
		//targetedPlayer = (GameObject) enemy.SendMessage("getTarget");
		if ( targetedPlayer.tag.Equals ("player1")){
        	GUI.color = Color.red;
        	GUI.Box(new Rect(10, 15, 15, 15), "RUNNN!!!!");
		}
		else {
			GUI.color = Color.green;
        	GUI.Box(new Rect(10, 15, 15, 15), "SAFE :)))!!!!");
		}
    }

	public int distanceToEnemy ( GameObject ghost ){
		int distance = 0 ; 
		return distance;
		
	}
}

