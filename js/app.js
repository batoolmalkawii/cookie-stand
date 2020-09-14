'use strict'

// Globals
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// Seattle Store
var storeLocation1 = {
    location: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    customersPerHour: 0,
    avgCookiesPerHour: [],
    totalCookies: 0,
    getCustomersNumber: function () {
        this.customersPerHour = getRandNum(this.minCustomers, this.maxCustomers);
    },
    getPurchCookies: function () {
        for (var i = 0; i < hours.length; i++) {
            this.getCustomersNumber();
            var cookiesPerHour = Math.ceil(this.customersPerHour * this.avgCookiesPerCustomer);
            this.avgCookiesPerHour.push(cookiesPerHour);
            this.totalCookies += cookiesPerHour;
        }

    },
    render: function () {
        var container = document.getElementById('seattle');
        console.log(container);
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent= `${this.location} produces a total of ${this.totalCookies} cookies per day!`;
        var pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        pEl.textContent = `${this.location} Store is the place where you find the most delicious salmon-shaped cookies in the world.`;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var j = 0; j < hours.length; j++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[j]}: ${this.avgCookiesPerHour[j]}`;
        }
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total: ${this.totalCookies}`;

    }
}

// Tokyo Store
var storeLocation2 = {
    location: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesPerCustomer: 1.2,
    customersPerHour: 0,
    avgCookiesPerHour: [],
    totalCookies: 0,
    getCustomersNumber: function () {
        this.customersPerHour = getRandNum(this.minCustomers, this.maxCustomers);
    },
    getPurchCookies: function () {
        for (var i = 0; i < hours.length; i++) {
            this.getCustomersNumber();
            var cookiesPerHour = Math.ceil(this.customersPerHour * this.avgCookiesPerCustomer);
            this.avgCookiesPerHour.push(cookiesPerHour);
            this.totalCookies += this.avgCookiesPerHour[i];
        }

    },
    render: function () {
        var container = document.getElementById('tokyo');
        console.log(container);
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent= `${this.location} produces a total of ${this.totalCookies} cookies per day!`;
        var pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        pEl.textContent = `${this.location} Store is the place where you find the most delicious salmon-shaped cookies in the world.`;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var j = 0; j < hours.length; j++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[j]}: ${this.avgCookiesPerHour[j]}`;
        }
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total: ${this.totalCookies}`;

    }
}

// Dubai Store
var storeLocation3 = {
    location: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesPerCustomer: 3.7,
    customersPerHour: 0,
    avgCookiesPerHour: [],
    totalCookies: 0,
    getCustomersNumber: function () {
        this.customersPerHour = getRandNum(this.minCustomers, this.maxCustomers);
    },
    getPurchCookies: function () {
        for (var i = 0; i < hours.length; i++) {
            this.getCustomersNumber();
            var cookiesPerHour = Math.ceil(this.customersPerHour * this.avgCookiesPerCustomer);
            this.avgCookiesPerHour.push(cookiesPerHour);
            this.totalCookies += this.avgCookiesPerHour[i];
        }

    },
    render: function () {
        var container = document.getElementById('dubai');
        console.log(container);
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent= `${this.location} produces a total of ${this.totalCookies} cookies per day!`;
        var pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        pEl.textContent = `${this.location} Store is the place where you find the most delicious salmon-shaped cookies in the world.`;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var j = 0; j < hours.length; j++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[j]}: ${this.avgCookiesPerHour[j]}`;
        }
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total: ${this.totalCookies}`;

    }
}

// Paris Store
var storeLocation4 = {
    location: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesPerCustomer: 2.3,
    customersPerHour: 0,
    avgCookiesPerHour: [],
    totalCookies: 0,
    getCustomersNumber: function () {
        this.customersPerHour = getRandNum(this.minCustomers, this.maxCustomers);
    },
    getPurchCookies: function () {
        for (var i = 0; i < hours.length; i++) {
            this.getCustomersNumber();
            var cookiesPerHour = Math.ceil(this.customersPerHour * this.avgCookiesPerCustomer);
            this.avgCookiesPerHour.push(cookiesPerHour);
            this.totalCookies += this.avgCookiesPerHour[i];
        }

    },
    render: function () {
        var container = document.getElementById('paris');
        console.log(container);
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent= `${this.location} produces a total of ${this.totalCookies} cookies per day!`;
        var pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        pEl.textContent = `${this.location} Store is the place where you find the most delicious salmon-shaped cookies in the world.`;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var j = 0; j < hours.length; j++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[j]}: ${this.avgCookiesPerHour[j]}`;
        }
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total: ${this.totalCookies}`;

    }
}

// Lima Store
var storeLocation5 = {
    location: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesPerCustomer: 4.6,
    customersPerHour: 0,
    avgCookiesPerHour: [],
    totalCookies: 0,
    getCustomersNumber: function () {
        this.customersPerHour = getRandNum(this.minCustomers, this.maxCustomers);
    },
    getPurchCookies: function () {
        for (var i = 0; i < hours.length; i++) {
            this.getCustomersNumber();
            var cookiesPerHour = Math.ceil(this.customersPerHour * this.avgCookiesPerCustomer);
            this.avgCookiesPerHour.push(cookiesPerHour);
            this.totalCookies += this.avgCookiesPerHour[i];
        }

    },
    render: function () {
        var container = document.getElementById('lima');
        console.log(container);
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent= `${this.location} produces a total of ${this.totalCookies} cookies per day!`;
        var pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        pEl.textContent = `${this.location} Store is the place where you find the most delicious salmon-shaped cookies in the world.`;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var j = 0; j < hours.length; j++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[j]}: ${this.avgCookiesPerHour[j]}`;
        }
        var liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `Total: ${this.totalCookies}`;

    }
}

// call functions
storeLocation1.getPurchCookies();
storeLocation1.render();
storeLocation2.getPurchCookies();
storeLocation2.render();
storeLocation3.getPurchCookies();
storeLocation3.render();
storeLocation4.getPurchCookies();
storeLocation4.render();
storeLocation5.getPurchCookies();
storeLocation5.render();
// helper function
function getRandNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + 1));

}