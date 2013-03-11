using UnityEngine;
using System.Collections;

public class switchBehavior : MonoBehaviour {
	
	public GameObject source;
	public bool target = false;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
	
	}
	
	public void OnTriggerEnter(Collider other){
		Component lookScript = source.GetComponent("SmoothLookAt");
		lookScript.GetComponent("changeTarget");
		target = !target;
		string playerString="";
		if (target == false){
			playerString += "Player 1";
		}
		else { playerString += "Player 2"; }
		Debug.Log ("target is:"+ playerString);
		
	}
}
