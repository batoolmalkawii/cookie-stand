'use strict'

// Globals
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var stores = [];
var locationsTotalPerHour = []
var locationsTotalPerDay = 0;
for (var i = 0; i < hours.length; i++) {
    locationsTotalPerHour[i] = 0;
}

// Constructor
function Store(location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.avgCookiesPerHour = [];
    this.totalCookies = 0;
    stores.push(this);
}

// Prototypes
Store.prototype.getPurchCookies = function () {
    for (var i = 0; i < hours.length; i++) {
        var customersPerHour = getRandNum(this.minCustomers, this.maxCustomers);
        var cookiesPerHour = Math.ceil(customersPerHour * this.avgCookiesPerCustomer);
        this.avgCookiesPerHour.push(cookiesPerHour);
        this.totalCookies += cookiesPerHour;
        locationsTotalPerHour[i] += cookiesPerHour;
    }
    locationsTotalPerDay += this.totalCookies;
};
Store.prototype.render = function (tableEl) {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.location;
    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
        var tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = this.avgCookiesPerHour[i];
    }
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.totalCookies;
};

// Table functions
function renderHeaderRow(tableEl) {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    for (var i = 0; i < hours.length; i++) {
        var thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = hours[i];
    }
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = 'Daily Location Total';
}
function renderFooterRow(tableEl) {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = 'Total';
    for (var i = 0; i < hours.length; i++) {
        var tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = locationsTotalPerHour[i];
    }
    var tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = totalOfTotals();
}
function salesTable() {
    var container = document.getElementById('container');
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    renderHeaderRow(tableEl);
    for (var i = 0; i < stores.length; i++) {
        stores[i].getPurchCookies();
        stores[i].render(tableEl);
    }
    renderFooterRow(tableEl);
}

// Helper functions
function getRandNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + 1));
}
function totalOfTotals() {
    return (locationsTotalPerDay);
}

// Create objects
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

// Call functions
salesTable();

