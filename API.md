#API Documentation

API Provide two services

### Arabic to Roman converter
Path : /api/service/arabictoromanconverter
Method : GET
Query parameters: date in french format (dd/mm/YYYY)
Return: string

### Weather data by date and WOEID*
Path : /api/service/weather
Method : GET
Query parameters: date in french format (dd/mm/YYYY), woeid (integer)

```
{"romanDate":"XXV/III/MMXXII","weather":{"min_temp":8.219999999999999,"max_temp":19.634999999999998}}
```
Example for Paris : /api/service/weather?date=25/03/2022&woeid=615702


####* To obtain WOEID, please check location search API in : https://www.metaweather.com/api/