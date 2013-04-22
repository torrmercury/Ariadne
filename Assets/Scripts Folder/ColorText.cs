using UnityEngine;
using System.Collections;

public class ColorText : MonoBehaviour {
	public Color color;
    void Awake() 
    {
        transform.GetComponent<MeshRenderer>().material.SetColor("_Color", color);
    }
}
