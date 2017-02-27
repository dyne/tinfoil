//////////
// Tinfoil - Default preferences for mozilla.anon

// 1: Allow cookies from originating server only
user_pref("network.cookie.cookieBehavior", 1);
// 2: Accept for session only
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.cookie.enableForCurrentSessionOnly", true);
user_pref("privacy.clearOnShutdown.passwords", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("browser.privatebrowsing.autostart", true);


