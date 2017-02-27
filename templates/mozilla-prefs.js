
/* This file is appended on prefs to override them at startup
   it is used for all 'mozilla' browser types.

   For customisations this file can be copied and modified in
   different locations:

   /etc/tinfoil/templates/mozilla-prefs.js (system-wide)

  ~/.tinfoil/templates/mozilla-prefs.js    (user specific)

  ~/.tinfoil/templates/${browser}/prefs.js   (browser specific)

 */

user_pref("app.update.lastUpdateTime.browser-cleanup-thumbnails", 0);
user_pref("browser.bookmarks.restore_default_bookmarks", false);
// user_pref("browser.cache.disk.smart_size.first_run", true);
user_pref("browser.download.importedFromSqlite", true);
user_pref("browser.migration.version", 13);
user_pref("browser.download.useDownloadDir", true);
user_pref("browser.pagethumbnails.storage_version", 3);
user_pref("browser.places.smartBookmarksVersion", 4);
user_pref("browser.preferences.advanced.selectedTabIndex", 4);
user_pref("browser.privatebrowsing.autostart", false);
// user_pref("browser.search.countryCode", "US");
// user_pref("browser.search.region", "US");
user_pref("browser.search.update", false);
user_pref("browser.shell.checkDefaultBrowser", false);
// user_pref("browser.startup.homepage", "https://www.dyne.org");
// user_pref("browser.startup.page", 0);
user_pref("browser.syncPromoViewsLeftMap", "{\"addons\":0}");
user_pref("browser.tabs.closeWindowWithLastTab", false);

user_pref("extensions.blocklist.pingCountTotal", 0);
user_pref("extensions.blocklist.pingCountVersion", 0);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.databaseSchema", 16);
// user_pref("extensions.lastAppVersion", "27.1.0b2");
// user_pref("extensions.lastPlatformVersion", "3.1.0");
user_pref("extensions.shownSelectionUI", true);
user_pref("extensions.ui.dictionary.hidden", true);
user_pref("extensions.ui.lastCategory", "addons://discover/");
user_pref("extensions.ui.locale.hidden", true);

user_pref("extensions.ublock0.cloudStorage.myFiltersPane", "");
user_pref("extensions.ublock0.cloudStorage.myRulesPane", "");
user_pref("extensions.ublock0.cloudStorage.tpFiltersPane", "");
user_pref("extensions.ublock0.cloudStorage.whitelistPane", "");
user_pref("extensions.ublock0.legacyToolbarButtonAdded", true);
user_pref("services.sync.prefs.sync.extensions.ublock0.cloudStorage.myFiltersPane", false);
user_pref("services.sync.prefs.sync.extensions.ublock0.cloudStorage.myRulesPane", false);
user_pref("services.sync.prefs.sync.extensions.ublock0.cloudStorage.tpFiltersPane", false);
user_pref("services.sync.prefs.sync.extensions.ublock0.cloudStorage.whitelistPane", false);

user_pref("general.useragent.compatMode", 0);
user_pref("layout.spellcheckDefault", 0);
user_pref("media.mediasource.enabled", true);
user_pref("media.mediasource.webm.enabled", true);
user_pref("network.cookie.prefsMigrated", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("pref.privacy.disable_button.view_passwords", true);
user_pref("privacy.sanitize.migrateFx3Prefs", false);
user_pref("privacy.clearOnShutdown.downloads", true);

user_pref("services.sync.clients.lastSync", "0");
user_pref("services.sync.clients.lastSyncLocal", "0");
user_pref("services.sync.declinedEngines", "");
user_pref("services.sync.globalScore", 0);
user_pref("services.sync.migrated", true);
user_pref("services.sync.nextSync", 0);

user_pref("signon.importedFromSqlite", true);
user_pref("xpinstall.whitelist.required", true);

user_pref("status4evar.firstRun", false);
user_pref("status4evar.migration", 7);

// annoying mousewheel scroll gets often in the way
user_pref("mousewheel.with_control.action", 0);

user_pref("signon.autofillForms", true);
user_pref("privacy.clearOnShutdown.passwords", false);
user_pref("services.sync.engine.passwords", false);

// Determines how the browser should handle cookies.
// 0 : Enable all cookies (default)
// 1: Allow cookies from originating server only
// 2: Disable all cookies
// 3: Use P3P policy to decide (Mozilla Suite/SeaMonkey only)
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.enableForCurrentSessionOnly", false);
// Determines how browser sets cookie lifetimes.
// 0 (default): Use supplied lifetime
// 1: Ask before accepting
// 2: Accept for session only
// 3: Cookies last for the number of days specified in network.cookie.lifetime.days
user_pref("network.cookie.lifetimePolicy", 0);

// Determines whether the browser is allowed to perform proxy autodiscovery
user_pref("network.enablePad", false);

// Optimization (may break some sites)
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.pipelining.maxrequests", 10);
user_pref("network.http.max-persistent-connections-per-server", 8);
user_pref("browser.display.show_image_placeholders", false);
user_pref("browser.tabs.animate", false);
user_pref("browser.urlbar.trimURLs", false);

// further optimisations
user_pref("browser.sessionhistory.max_total_viewers", 0);
user_pref("config.trim_on_minimize", true);
user_pref("nglayout.initialpaint.delay", 0);
user_pref("browser.search.openintab", true);

// https everywhere
user_pref("extensions.https_everywhere.firstrun_context_menu", false);

// turn off reporting
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2",false);
user_pref("security.ssl.errorReporting.enabled", false);

// safebrowsing off, defaults shown here (taken from icecat)
user_pref("browser.safebrowsing.appRepURL","https://sb-ssl.google.com/safebrowsing/clientreport/download?key=%GOOGLE_API_KEY%");
user_pref("browser.safebrowsing.provider.google.lists","goog-badbinurl-shavar,goog-downloadwhite-digest256,goog-phish-shavar,goog-malware-shavar,goog-unwanted-shavar");
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.provider.google.updateURL","https://safebrowsing.google.com/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2&key=%GOOGLE_API_KEY%");
user_pref("browser.safebrowsing.provider.mozilla.updateURL","https://shavar.services.mozilla.com/downloads?client=SAFEBROWSING_ID&appver=%VERSION%&pver=2.2");

// pdfjs
user_pref("pdfjs.disabled", true);
user_pref("pdfjs.firstRun", true);
user_pref("pdfjs.previousHandler.alwaysAskBeforeHandling", true);
user_pref("pdfjs.previousHandler.preferredAction", 4);
