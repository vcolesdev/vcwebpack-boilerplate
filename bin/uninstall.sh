#!/bin/bash
# Uninstall script

DEPS=node_modules
BUILD=build
LOCKFILE=package-lock.json

# Prompt the user to remove Symfony.
while true; do
read -p "Remove node_modules and start fresh? (y/n) " yn

# Options
case $yn in
  # If yes, remove node_modules folder and its contents.
  [yY] ) echo "Removing node_modules directory..."; break;;
  # If no, exit the application.
  [nN] ) echo "Abort mission! Exiting..."; exit;;
  # User did not enter a valid response.
  * ) echo "Please choose a valid response, y/n";;
esac; done

# Check for node_modules dir.
if [ -d "$DEPS" ]; then
  rm -Rf $DEPS && rm -Rf $BUILD && rm $LOCKFILE
   echo "That's all for now, folks!  $DEPS, $BUILD, and $LOCKFILE removed."
  else echo "No $DEPS directory found. Exiting..."; fi

echo "So fresh and so clean, clean. Dependencies removed."
