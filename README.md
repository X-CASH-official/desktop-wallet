# XCASH_GUI_Wallet

## Introduction

This is the new GUI wallet for XCASH. Currently this wallet supports Windows, MacOSX, and Linux operating systems, with the goal to support Android and IOS mobile devices in the future. Some features of this wallet are:

## Table of Contents  
[System Requirements](#system-requirements)  
[Dependencies](#dependencies)  
[Installation Process](#installation-process)  
* [Installation From Binaries](#installation-from-binaries)  
* [Installation From Source](#installation-from-source)  
* [Installing Node.js](#installing-nodejs) 
* [Configuring NPM If Root](#configuring-npm-if-root)  
* [Updating NPM](#updating-npm)  
* [Installing Packages Globally Using NPM](#installing-packages-globally-using-npm)  
* [Cloning the Repository](#cloning-the-repository)  
* [Updating node_modules](#updating-node_modules)  
* [Build XCASH_GUI_Wallet](#build-xcash_gui_wallet)  
* [Updating to the latest angular](#updating-to-the-latest-angular)  


## System Requirements
 
Most systems will be able to use the wallet, given they are on the Windows, MacOSX, or Linux operating system.


## Installation Process


### Installation From Binaries
It is recommend to install the wallet from the binaries that are provided on the [release page](https://github.com/X-CASH-official-team/XCASH_GUI_Wallet/releases)

### Installation From Source
You can also build the binaries from source. The following explains how to to do this.

### Dependencies

The following table summarizes the tools and libraries required to run XCASH_GUI_Wallet

| Dependencies                                 | Min. version  | Ubuntu package            |
| -------------------------------------------- | ------------- | ------------------------- |
| Node.js                                      | 12             |  install from binaries    | 
| Angular                                      | 8             |  install from NPM         |
| XCASH_DPOPS                                  | latest version | [build from source](https://github.com/X-CASH-official/XCASH_DPOPS) or [download the latest release](https://github.com/X-CASH-official/X-CASH/releases)




### Installing Node.js

```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt update
sudo apt install -y nodejs
```


### Configuring NPM If Root
Note if your installing this on a root account then you need to run these additional commands  
`npm config set user 0`  
`npm config set unsafe-perm true`



### Updating NPM

Now you need to update NPM  
`npm install -g npm`



### Installing Packages Globally Using NPM

Now you need to install Angular globally  
`npm install -g @angular/cli@latest`



### Cloning the Repository
```
git clone https://github.com/X-CASH-official-team/XCASH_GUI_Wallet.git
``` 



### Updating node_modules

Now you need to install all of the dependencies. Navigate to the folder with the package.json file, and then run  
`npm update`



### Build XCASH_GUI_Wallet

To build XCASH_DPOPS - Delegates Website, naviagte to the folder with the package.json file, and then run  
`ng build --prod --aot`


### Updating to the Latest Angular

If there is a new angular version out and you want to update the program to it, before we have officially updated to it run these following steps:

`ng update @angular/cli @angular/core`

This might give Package A has an incompatible peer dependency to B. If this is the case run the following for each B package

`npm install --save-dev B@latest` where B is the string for the package name

You should then be able to update with no warnings about packages.