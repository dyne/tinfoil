# Tinfoil

<img src="http://zapatopi.net/afdb/lizhurley.jpg"
	alt="Tinfoil logo featuring Liz Hurley, courtesy of Zapatopi"
	title="Tinfoil logo featuring Liz Hurley, courtesy of Zapatopi"
		style="float: right">

*A minimalist tool to manage multiple profiles for web browsers* aka **The no-nonsense web wrapper**

[![software by Dyne.org](https://www.dyne.org/wp-content/uploads/2015/12/software_by_dyne.png)](http://www.dyne.org)

## How does it work?

Install tinfoil on your system (needs root, PREFIX defaults to `/usr/local/share/tinfoil`)
```
 # make install
```

Create a new profile called `luther` for the `icecat` browser:
```
 $ tinfoil new icecat luther
```

Start a new `icecat` browser instance using the new `luther` profile:
```
 $ tinfoil icecat luther
```

Start an anonymous `icecat` browser instance using a temporary profile which will be deleted when the browser window will be closed:
```
 $ tinfoil icecat anon
```

## Stage of development

Tinfoil is work in progress! if you are interested in giving a hand, tinfoil's developers can be contacted using the issues on GitHub or over IRC on https://irc.dyne.org channel **#dyne** (or direct port 9999 SSL)

Tinfoil is the browser wrapper of choice for the heads GNU+Linux distribution: https://heads.dyne.org

## Licensing

Tinfoil is Copyright (C) 2017 by the Dyne.org Foundation

This source code is free software; you can redistribute it and/or modify it under the terms of the GNU Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.

This source code is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  Please refer to the GNU Public License for more details.

You should have received a copy of the GNU Public License along with this source code; if not, write to: Free Software Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.

