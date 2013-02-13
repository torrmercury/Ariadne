using UnityEngine;
using System.Collections;

public class sphereSwitch : MonoBehaviour {
	
	bool switched = false;
	public GameObject enemy;
	
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	public void OnTriggerEnter(Collider other){
		enemy.SendMessage("changeTarget");
	}
}
