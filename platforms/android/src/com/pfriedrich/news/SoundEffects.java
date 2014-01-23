package com.pfriedrich.news;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import android.view.SoundEffectConstants;
import android.view.View;

public class SoundEffects extends CordovaPlugin{
	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
		if("click".equals(action)){
			try{
				cordova.getActivity().runOnUiThread(new Runnable(){
					@Override
					public void run() {
						try{
							View view = cordova.getActivity().getWindow().getDecorView();
							view.playSoundEffect(SoundEffectConstants.CLICK);
						}catch(Exception e){
							callbackContext.error(e.getMessage());
						}
					}
				});
			}catch(Exception e){
				callbackContext.error(e.getMessage());
			}
	
			return true;
		}
		
		return false;
	}
}
