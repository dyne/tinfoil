
# Tinfoil

<img src="http://zapatopi.net/afdb/lizhurley.jpg"
	alt="Tinfoil logo featuring Liz Hurley, courtesy of Zapatopi"
	title="Tinfoil logo featuring Liz Hurley, courtesy of Zapatopi"
		style="float: right">

*A minimalist tool to manage multiple profiles for web browsers* aka **The no-nonsense web wrapper**

[![software by Dyne.org](https://www.dyne.org/wp-content/uploads/2015/12/software_by_dyne.png)](http://www.dyne.org)

## How to install

Tinfoil requires the `zsh` shell to be installed.

To install tinfoil on your GNU+Linux system, launch `make install` as root from inside its directory: this will copy files to `/usr/local/share/tinfoil` and `/etc/tinfoil`. A different destination can be specified using the `PREFIX` variable:
```
 make install PREFIX=/usr
```

Tinfoil can make good use of some extra tools when installed, for instance `firejail` for process isolation and `dmenu` for easier graphical interaction.

Web browsers must be installed separately. At the moment tinfoil supports the following browsers: `firefox`, `iceweasel`, `icecat` and `palemoon`.

## How does it work?

Tinfoil commands can be launched from a terminal or from the `Run command:` dialog of your window manager. Tinfoil commands can also be bound to hotkeys: then it is recommended to bind a single key to launch the `tinfoil-dmenu` helper.

To launch the `firefox` browser for a new profile called `luther`, enter the command:
```
 tinfoil firefox luther
```

To start an `iceweasel` browser instance using a temporary `anonymous` profile which will be deleted when the browser window is closed:
```
 tinfoil iceweasel anon
```

Profiles are stored inside `~/.tinfoil/profiles`, each one consists of a directory whose name is composed as `$browser.$profile`, so the example above created the luther profile for the icecat browser inside `.tinfoil/profiles/icecat.luther`.

## What is this for, exactly?

We live in times when Russian Hackers may be hiding behind every corner: if they are armed with a microwave cannon... then tinfoil is the only thing that can save you.

[![Russian Hackers love Microwave Cannons](https://img.youtube.com/vi/0XbLz0L6UdI/0.jpg)](https://www.youtube.com/watch?v=0XbLz0L6UdI)

## Advanced usage

Tinfoil provides a simple and powerful way to maintain browser configurations across profiles and even different browsers of the same family (right now only the `mozilla` and `chrome` families are supported). The way it works is by cascading configurations like `user.js` (basically the `about:config` settings) applying templates to all browsers of the same family, or some templates only to specific browsers, or some others just to specific profile names.

### Cascading configurations

Configurations are stored both in system-wide and user-specific directories, where user specific configurations end up overriding the system-wide ones. The locations where the configurations reside are:
 - `/usr/local/share/tinfoil/templates` (fallback defaults)
 - `/etc/tinfoil/templates` (system-wide defaults)
 - `~/.tinfoil/templates` (user defaults)

In each of the above directories the configuration files can be named with filenames starting with `[browser|family][.profile]` so they will be applied to: 
 - a browser family (i.e. `mozilla-prefs.js`) so that all browsers of the family will inherit the configuration
 - a specific browser (i.e. `icecat-prefs.js`) so that all profiles used in the browser will inherit the configuration
 - a specific profile for all browsers of the same family (i.e. `mozilla.luther-prefs.js`) so that all profiles named `luther` will inherit the configuration when used in any browser of the `mozilla` family
 - a specific profile for a certain browser (i.e. `icecat.luther-prefs.js`) so that the settings will be activated only when a specific profile is used in a specific browser

For instance the default configuration for all `mozilla` family browsers is [templates/mozilla-prefs.js](templates/mozilla-prefs.js) and the default configuration for the all the anonymous profiles is [templates/mozilla.anon-prefs.js](templates/mozilla.anon-prefs.js).

### Firejail process isolation

In case `firejail` is installed, then the `tinfoil-firejail` command can be used to isolate the execution environment of the browser; it is used the same way as `tinfoil` followed by two arguments: the name of the browser and the name of the profile.

Firejail configurations are files terminated by the `.firejail` extension and function pretty much the same way as the `-prefs.js` files: they are found in the same `/templates` locations and can be named and assigned to a browsery family, a specific browser and/or to profile names. For instance the default firejail configuration for all `mozilla` family browsers is [templates/mozilla.firejail](templates/mozilla.firejail).

### Check configuration

Tinfoil can be launched with the `conf` command preceeding the selected browser and profile arguments: it will then print out its configuration for the specific selection, showing the templates applied and their path inside declared variables that can be used by other scripts using `eval` on its output.

The configuration variables are rendered using the following scheme:
```
browser="$browser"
profile="$profile"
browsertype="$browsertype"
profilepath="~/.tinfoil/profiles/$browser.$profile"
vendorpath="~/.${vendor[$browser]}"
cachepath="~/.cache/${vendor[$browser]}"
browser_executable="/full/path/to/the/browser/executable/binary"
firejail_profiles+=(array_of_paths_to_configuration_files)
userjs_templates+=(array_of_paths_to_userjs_mozilla_configurations)
```

## Stage of development

Tinfoil is work in progress! if you are interested in giving a hand, tinfoil's developers can be contacted using the issues on GitHub or over IRC on https://irc.dyne.org channel **#dyne** (or direct port 9999 SSL)

Tinfoil is the browser wrapper of choice for the heads GNU+Linux distribution: https://heads.dyne.org

Contributions to Tinfoil are welcome, especially to add more supported browsers, integration with desktop workflows and even graphical interfaces. The `lint` Makefile target is provided to test the consistency of code and correct common mistakes: please run the check using `make lint` to make sure your contribution conforms to the coding style adopted in Tinfoil.

## Licensing

Tinfoil is Copyright (C) 2017 by the Dyne.org Foundation

Tinfoil is designed, written and maintained by Denis Roio <jaromil@dyne.org>

This source code is free software; you can redistribute it and/or modify it under the terms of the GNU Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.

This source code is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  Please refer to the GNU Public License for more details.

You should have received a copy of the GNU Public License along with this source code; if not, write to: Free Software Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.

