/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.pfriedrich.news;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebSettings.RenderPriority;

import org.apache.cordova.*;

public class NewsApp extends CordovaActivity {
	@Override
	@SuppressLint("NewApi")
	public void init(CordovaWebView webView, CordovaWebViewClient webViewClient, CordovaChromeClient webChromeClient) {
		webView.getSettings().setUserAgentString("Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7");
		/*webView.getSettings().setRenderPriority(RenderPriority.HIGH);
		webView.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);*/

		super.init(webView, webViewClient, webChromeClient);
	}
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        super.loadUrl(Config.getStartUrl(), 30000);
    }
}

