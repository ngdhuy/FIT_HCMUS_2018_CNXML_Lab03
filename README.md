# FIT - HCMUS - VNU - 2018

## __Class__ XML technical 2018

* __University:__ University of Science - VNU - Ho Chi Minh city
* __Lecturers:__ Tien-Huy NGUYEN
* __TA:__ Duc-Huy NGUYEN

## Demo about

1. Read large Data File (Size > 1Mb).
2. Update information of Object.
3. Write object to file.

## Porject information

* __Created by:__ Duc-Huy Nguyen - ndhuy@fit.hcmus.edu.vn
* __Created date:__ March 31st, 2018
* __Technical:__
    * NodeJS
    * Xml2JS
    * Sotfware architecture: _3 tiers_

## Project Architecture
### Note:
Using [PostMan](https://www.getpostman.com/apps) to test Service/API

1. __Web Server__

* __Folder:__ _apps_
* __Port:__ 3002
* __Terminal:__
```
$ nodemon apps/webServer.js
```
* __URL:__ 
```
localhost:3002
```
* __Purpose:__ response to client resource of Website (index.html)
    * _img:_ contain images of UI/Template of pages.
    * _css:_ contain css of UI/Template of pages.
    * _js:_ contain client javascript files which are using Ajax to call back Server to get data.

2. __BUS Tier__

* __Folder:__ _bus_
* __Port:__ 3001
* __Terminal:__
```
$ nodemon bus/busService.js
```
* __URL:__
```
localhost:3001
```
* __Purpose:__
    * Public Bussiness Services for Apps (Client).
    * Contact (call) with Data (tier) for Create/Read/Update/Detele (CRUD).

3. __Data Tier__

* __Folder:__ _data_
* __Port:__ 3000
* __Terminal:__
```
$ nodemon data/dataService.js
```
* __URL:__
```
locahost:3000
```
* __Purpose:__
    * Connect with DB (data).
    * Provide Service (CRUD) for BUS tier.