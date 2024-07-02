const topBarCenterText = `W5BIC`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/VA3HDL", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/SOUTHPLAINS_loop.gif",
    "https://radar.weather.gov/ridge/standard/KGRK_loop.gif"
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
    "CURRENT HAZARDS",
    "https://x-hv1.pivotalweather.com/maps/warnings/nwshaz.conus.png",
    
  ],
  [
    "SATELLITE CAN",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/sp/EXTENT3/GOES16-SP-EXTENT3-600x600.gif",
  ],
  [
    "SATELLITE CGL",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/sp/EXTENT3/2400x2400.jpg",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_tx.png",
  ],
  ["GREY LINE", "https://www.timeanddate.com/scripts/sunmap.php?iso=now"],
  [
    "FORECAST & ACTIVITY", 
    "https://www.wpc.ncep.noaa.gov/noaa/noaa.gif", 
    "https://www.spc.noaa.gov/exper/mesoanalysis/activity_loop.gif", 
    "https://www.spc.noaa.gov/products/watch/validww.png", 
    "https://www.spc.noaa.gov/products/exper/day4-8/day48prob.gif", 
    "https://www.wpc.ncep.noaa.gov/threats/final/hazards_d3_7_contours.png", 
    "https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif",
    "https://schumacher.atmos.colostate.edu/hilla/csu_mlp/latest/day1_3panel_latest.png",
    "https://schumacher.atmos.colostate.edu/hilla/csu_mlp/latest/day2_3panel_latest.png",
    "https://schumacher.atmos.colostate.edu/hilla/csu_mlp/latest/day3_nospc_latest.png",
    "https://x-hv1.pivotalweather.com/maps/cpc/latest/610temp.conus.png",
    "https://x-hv1.pivotalweather.com/maps/ndfd/latest/ndfd_sfctmax.conus.png",
  ],
  ["DAILY FORECAST", 
  "https://www.weather.gov/images/fwd/graphicast/image_full1.jpg", 
  "https://www.weather.gov/images/fwd/graphicast/image_full2.jpg", 
  "https://www.weather.gov/images/fwd/graphicast/image_full3.jpg", 
  "https://www.weather.gov/images/fwd/adas/temp_sfc_loop.gif", 
  "https://www.weather.gov/images/fwd/adas/heatindex_sfc_loop.gif", 
  "https://www.cpc.ncep.noaa.gov/products/stratosphere/uv_index/uvi_map.gif"
  ],
  ["TROPICS", 
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/taw/Sandwich/GOES16-TAW-Sandwich-900x540.gif", 
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/se/Sandwich/1200x1200.jpg", 
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/car/Sandwich/500x500.jpg", 
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/Sandwich/500x500.jpg", 
  "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/taw/Sandwich/900x540.jpg"
  ],
];
