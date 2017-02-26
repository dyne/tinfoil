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
