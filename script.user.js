// ==UserScript==
// @name		yt-hide-live
// @version		1.2
// @description	Hide LIVE videos on YouTube's pages
// @author		Wim Godden <wim@wimgodden.be>
// @author		Dym Sohin <re@dym.sh>
// @match		https://*.youtube.com/*
// @grant		none
// @namespace	https://greasyfork.org/users/48886
// @license		CC0
// ==/UserScript==
 
(function() {
	'use strict'
 
	function removeLiveVideos(){
		document
			.querySelectorAll( `ytd-item-section-renderer` )
			.forEach( e =>
			{
				const is_live = e.querySelector( `.badge-style-type-live-now-alternate` )
				if( is_live )
				{
					e.style.display = 'none'
				}
			})
	}
 
	const observer = new MutationObserver(removeLiveVideos)
	observer.observe(
		document.querySelector('#page-manager')
		, { childList:true, subtree:true }
	)

})()

