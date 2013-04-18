using UnityEngine;
using System.Collections;

public class mainMenu : MonoBehaviour {
	
	
	public Camera mainCam;
	public Camera optionCam;
	public Camera instructionCam;
	public GameObject getReady;
	private int currentCamIndex =0;
	
	// Use this for initialization
	void Start () {
		mainCam.camera.enabled = true;
		optionCam.camera.enabled = false;
		instructionCam.camera.enabled = false;
	}
	
	// Update is called once per frame
	void Update () {
		//main screen
		if ( currentCamIndex == 0 ){
			if ( Input.GetButton("Activate1")){
				mainCam.camera.enabled = false;
				optionCam.camera.enabled = true;
				currentCamIndex=1;
			}
			else if ( Input.GetButton("deployThread1")){
				mainCam.camera.enabled = false;
				instructionCam.camera.enabled = true;
				currentCamIndex=2;
			}
			else if ( Input.GetButton("startGame")){
				getReady.GetComponent("Renderer").renderer.enabled =true;
				Application.LoadLevel(1);
				currentCamIndex = 3;
			}
		}
		//option screen
		else if (currentCamIndex ==1 ){
			if ( Input.GetButton("backButton")){
				optionCam.camera.enabled = false;
				mainCam.camera.enabled = true;
				currentCamIndex=0;
			}
				
		}
		//intruction scree
		else if (currentCamIndex == 2){
			if ( Input.GetButton("backButton")){
				instructionCam.camera.enabled = false;
				mainCam.camera.enabled = true;
				currentCamIndex=0;
			}
		}
		
	
	}
}
