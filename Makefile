PREFIX ?= /usr/local

# escape slashes in path to be used by sed
pescape = $(subst /,\/,$1)
ESCPREFIX = $(call pescape,${PREFIX})

all:
	@echo "Tinfoil is a script and does not need compilation, it can be simply executed."
	@echo
	@echo "To install it in /usr/local together use 'make install' as root."
	@echo "To change the install location, override the env var PREFIX=/usr/local"
	@echo

install:
	@echo "Installing tinfoil to ${PREFIX}/share/tinfoil"
	@mkdir -p  $(PREFIX)/share/tinfoil
	@cp -ra templates $(PREFIX)/share/tinfoil
	@cp -ra zuper     $(PREFIX)/share/tinfoil
	@echo "Installing executable in ${PREFIX}/bin/tinfoil"
	@sed "s/^basedir=./basedir=$(ESCPREFIX)\/share\/tinfoil/g" \
		 tinfoil > $(PREFIX)/bin/tinfoil
	@chmod +x      $(PREFIX)/bin/tinfoil
	@install -m 0755 tinfoil-firejail $(PREFIX)/bin/tinfoil-firejail
	@install -m 0755 tinfoil-dmenu    $(PREFIX)/bin/tinfoil-dmenu
	@echo "Default configuration in /etc/tinfoil"
	@mkdir -p /etc/tinfoil
	@install -m 0644 -b -C templates/mozilla-prefs.js      /etc/tinfoil
	@install -m 0644 -b -C templates/mozilla.anon-prefs.js /etc/tinfoil

lint:
	shellcheck -e SC1083,SC2048,SC2086,SC2034 -s zsh -f gcc tinfoil
