# Introduction
A repository for me to organize my work in making analyses for 350 Chicago.


# Notes for Users
## Visualizations and Dashboards
- [350 Chicago ArcGIS Map](https://www.arcgis.com/apps/mapviewer/index.html?webmap=8e631f2e4e5640978672a1dd453539e3)
	- click through the `Layers` menu to hide and reveal informational layers on the map
	- Note - this map currently has a lot of visualizations - I might decompose the map into more specific ones as this work expands


# References
## Data Sources
Data Sources
- [350 Chicago Google Drive](https://drive.google.com/drive/folders/0B9H2N5OtIHU_VXE4OU02dVNhdEU?resourcekey=0-MdyGQULriqnN3fiqjurB-A&usp=sharing)
	- [Divestment State Network and Targets](https://docs.google.com/spreadsheets/d/1J6DHhZK_IPoVdaHbwLXOloTFaGtxFYrGkeYxX_jrl9k/edit#gid=646887933)
- GIS Data
	- [IL 2020 Congressional Maps](https://www.elections.il.gov/shape)
	- [DistrictBuilder](https://app.districtbuilder.org/) - I had to pass Block Equivalency Files into here to get renderable shapefiles for Illinois
- Government Data
	- [CEJA Senate Sponsorship](https://www.ilga.gov/legislation/BillStatus.asp?DocNum=1718&GAID=16&DocTypeID=SB&SessionID=110&GA=102)
	- [CEJA House Sponsorship](https://ilga.gov/legislation/billstatus.asp?DocNum=804&GAID=16&GA=102&DocTypeID=HB&LegID=129364&SessionID=110)
	- [Senate Members](https://www.ilga.gov/senate/default.asp)
	- [House Members](https://www.ilga.gov/house/default.asp)
	- [Illinois Counties and Townships](https://isgs.illinois.edu/research/coal/shapefiles)
	- CEJA Records:
		- [SB2408 Vote in House](https://legiscan.com/IL/rollcall/SB2408/id/1108219)
		- [SB2408 Vote in Senate](https://legiscan.com/IL/rollcall/SB2408/id/1062042)
		- [CEJA Senate Sponsorship](https://www.ilga.gov/legislation/BillStatus.asp?DocNum=1718&GAID=16&DocTypeID=SB&SessionID=110&GA=102)
		- [CEJA House Sponsorship](https://ilga.gov/legislation/billstatus.asp?DocNum=804&GAID=16&GA=102&DocTypeID=HB&LegID=129364&SessionID=110)
	- IEC Environmental Scorecard:
		- [IEC 2022 Environmental Scorecard Report](https://ilenviro.org/2022-environmental-scorecard/)
- Energy Sector Data
	- [Illinois Power Stations](https://en.wikipedia.org/wiki/List_of_power_stations_in_Illinois)
	- [Illinois Coal Mines and Related Data](https://isgs.illinois.edu/research/coal/shapefiles)


# Notes for Developers
## Setup
### Coding Environment
I'm using Visual Studio code as an IDE for this project. It's probably not necessary that you use this IDE to work in this repository, but I'll be customizing some things about the project, i.e. making macros, which will be made to work in VSCode. If you'd like to set up VSCode:
- [Install VSCode](https://code.visualstudio.com/)
- TODO...

### Python Environment
```
CONDA_ENV=350-chicago-vis
conda create --name $CONDA_ENV python=3.7 -y
conda activate $CONDA_ENV
pip install -r requirements.txt
```
## Other Tools
### GIS Visualizations
- I'm doing all GIS visualizations in this project using [ArcGIS](https://www.arcgis.com/home/index.html), which tracks project assets online
- I'd previously tried to use [QGIS](https://www.qgis.org/en/site/)
	- If sharing work in QGIS, please make use of the [Trackable QGIS Project Plugin](https://www.opengis.ch/2019/04/09/plugin-for-tracking-qgis-project-files-in-git/) when committing

### Data Tools
- [Wikipedia Table Extractor](https://wikitable2csv.ggor.de/)

## References
- [Good GIS Beginner Tutorial](https://www.youtube.com/watch?v=NHolzMgaqwE)
- [QGIS setup for WSL2](https://github.com/lucernae/wsl2-qgis)
