
let data = [
  {
    "country": "United States",
    "state": "Arizona",
    "city": "Scottsdale",
    "contact": "602-383-3500"
  },
  {
    "country": "United States",
    "state": "Arizona",
    "city": "Scottsdale",
    "contact": "602-383-3500"
  },
  {
    "country": "United States",
    "state": "California",
    "city": "Irvine",
    "contact": "949-777-0400"
  },
  {
    "country": "United States",
    "state": "Colorado",
    "city": "Centennial",
    "contact": "720-407-1400"
  },
  {
    "country": "United States",
    "state": "Connecticut",
    "city": "Norwalk",
    "contact": "203-299-1420"
  },
  {
    "country": "United States",
    "state": "Florida",
    "city": "Boca Raton",
    "contact": "561-997-2900"
  },
  {
    "country": "United States",
    "state": "Idaho",
    "city": "Boise",
    "contact": "800-460-1237"
  },
  {
    "country": "United States",
    "state": "Illinois",
    "city": "Rosemont",
    "contact": "800-843-4488"
  },
  {
    "country": "United States",
    "state": "Iowa",
    "city": "West Des Moines",
    "contact": "515-246-4100"
  },
  {
    "country": "United States",
    "state": "Kansas",
    "city": "Overland Park",
    "contact": "913-322-2020"
  },
  {
    "country": "United States",
    "state": "Maryland",
    "city": "Crofton (Sirius Federal)",
    "contact": "800-391-0204"
  },
  {
    "country": "United States",
    "state": "Minnesota",
    "city": "Bloomington",
    "contact": "952-896-6300"
  },
  {
    "country": "United States",
    "state": "Missouri",
    "city": "St.Louis",
    "contact": "314-726-3630"
  },
  {
    "country": "United States",
    "state": "Nebraska",
    "city": "Omaha",
    "contact": "402-965-2300"
  },
  {
    "country": "United States",
    "state": "New York",
    "city": "Liverpool",
    "contact": "315-214-6200"
  },
  {
    "country": "United States",
    "state": "New York",
    "city": "Pittsford",
    "contact": "800-460-1237"
  },
  {
    "country": "United States",
    "state": "North Carolina",
    "city": "Charlotte",
    "contact": "800-460-1237"
  },
  {
    "country": "United States",
    "state": "North Carolina",
    "city": "Greensboro",
    "contact": "336-365-7037"
  },
  {
    "country": "United States",
    "state": "North Carolina",
    "city": "Raleigh",
    "contact": "800-460-1237"
  },
  {
    "country": "United States",
    "state": "Ohio",
    "city": "Cincinnati",
    "contact": "513-891-8888"
  },
  {
    "country": "United States",
    "state": "Ohio",
    "city": "Strongsville",
    "contact": "5440-826-8800"
  },
  {
    "country": "United States",
    "state": "South Dakota",
    "city": "Sioux Falls",
    "contact": "800-460-1237"
  },
  {
    "country": "United States",
    "state": "Texas",
    "city": "Austin",
    "contact": "512-840-7419"
  },
  {
    "country": "United States",
    "state": "Texas",
    "city": "Dallas",
    "contact": "972-725-2000"
  },
  {
    "country": "United States",
    "state": "Texas",
    "city": "Houston",
    "contact": "713-463-1600"
  },
  {
    "country": "United States",
    "state": "Texas",
    "city": "San Antonio",
    "contact": "800-460-1237"
  },
  {
    "country": "United States",
    "state": "Utah",
    "city": "Salt Lake City",
    "contact": "801-964-4900"
  },
  {
    "country": "United States",
    "state": "Washington",
    "city": "Bellevue",
    "contact": "425-406-5112"
  },
  {
    "country": "India",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "contact": "91-44-6650-7800"
  },
  {
    "country": "Canada",
    "state": "Ontario",
    "city": "Mississauga",
    "contact": "800-460-1237"
  }
]




$(function () {
  $("#tabs").tabs();
});


$(function () {
  $("#accordion").accordion({
    active: false,
    collapsible: true,
  });
});





// tab-3 location appending

for(let i=0;i<data.length;i++){
  table = document.createElement("table");
  table.setAttribute("class","table");
  tableRow=document.createElement("tr");
  tableRow.setAttribute("class","table-row");
  tablecol1=document.createElement("td");
  tablecol1.setAttribute("class","table-col1");
  image=document.createElement("img");
  image.src="images/us.png";

  tablecol2=document.createElement("td");
  tablecol2.setAttribute("class","table-col2");
  tablecol2.innerHTML=data[i].state;
  tablecol3=document.createElement("td");
  tablecol3.setAttribute("class","table-col3");
  tablecol3.innerHTML=data[i].city;
  tablecol4=document.createElement("td");
  tablecol4.setAttribute("class","table-col4");
  tablecol4.innerHTML=data[i].contact;

  tablecol1.append(image);
  tableRow.append(tablecol1);
  tableRow.append(tablecol2);
  tableRow.append(tablecol3);
  tableRow.append(tablecol4);
  
  table.append(tableRow);
  $("#tabs-3").append(table);

}
