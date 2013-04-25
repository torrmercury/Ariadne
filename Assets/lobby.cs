using UnityEngine;
 
public class lobby : MonoBehaviour
{
	public GameObject wall1;
	public GameObject wall2;
	
	public bool first = false;
    // Use this for initialization
    void Start()
    {
        PhotonNetwork.ConnectUsingSettings("v1.0");
    }
 
    void OnGUI()
    {
        GUILayout.Label(PhotonNetwork.connectionStateDetailed.ToString());
    }
	void OnJoinedLobby()
	{
		PhotonNetwork.JoinRandomRoom();
		
	}
	void OnPhotonRandomJoinFailed()
	{
		first = true;
	    PhotonNetwork.CreateRoom(null);
	}
	void OnJoinedRoom()
	{
		if ( first){
			
			GameObject monster = PhotonNetwork.Instantiate("_Player1Controller", new Vector3(-32.0f,1.25f,-54.0f), Quaternion.identity, 0);
			CharacterControl controller = monster.GetComponent<CharacterControl>();
    		controller.enabled = true;
    	//	Camera camera = monster.GetComponent<Camera>();
			
    		//camera.enabled = true;
			//monster.camera = enabled;
		}
		else { 
			GameObject monster = PhotonNetwork.Instantiate("_Player2Controller", new Vector3(-34.0f,1.25f,-54.0f), Quaternion.identity, 0);
			CharacterControl controller = monster.GetComponent<CharacterControl>();
    		controller.enabled = true;
			//monster.camera = enabled;
	
		}
	}
}