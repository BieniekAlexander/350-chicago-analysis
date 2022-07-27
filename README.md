# Introduction
A repository for me to organize my work in creating visualizations for 350 Chicago.

# Initial Setup
## python environment
```
CONDA_ENV=350-chicago-vis
conda create --name $CONDA_ENV python=3.7 -y
conda activate $CONDA_ENV
pip install -r requirements.txt
```


# Resources
## Data Sources
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
- Energy Sector Data
	- [Illinois Power Stations](https://en.wikipedia.org/wiki/List_of_power_stations_in_Illinois)
	- [Illinois Coal Mines](https://isgs.illinois.edu/illinois-coal-mines-ilmines)
## Data Tools
- [Wikipedia Table Extractor](https://wikitable2csv.ggor.de/)

## Tutorials
- [Good GIS Beginner Tutorial](https://www.youtube.com/watch?v=NHolzMgaqwE)
- [QGIS setup for WSL2](https://github.com/lucernae/wsl2-qgis)