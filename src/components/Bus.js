import React, { Component } from 'react';

var request = require('request');
var cheerio = require('cheerio');

var key = 'NJDdbKOFJopjpR571rBLghfjGiIl2c4S7TQKARAmKo6w4Cg85bwSiGkzy9oLSWYamu2cZCP%2BylsmdHGhExiOXQ%3D%3D';
var url = 'http://ws.bus.go.kr/api/rest/buspos/getBusPosByRtid';
var busRouteId = '227000043';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + key;
queryParams += '&' + encodeURIComponent('busRouteId') + '=' + busRouteId;


class Bus extends Component {
  constructor() {
    super();

    this.state = {
      msg: 'message testing'
    };
    
  }

  render() {

    return (
      <button 
        className="Bus 35" 
        onClick={ () => func1() }
      >
        Bus 35
      </button>
      //<h1>{`Bus 35: , ${this.props.message}`}</h1>
      //<h1>{`state.msg: , ${this.state.msg}`}</h1>
    );
  }
}

function func1() {
  
  alert('func1 called');
  var msg = {};
  request({
    url: url + queryParams,
    method: 'GET'
    }, function (error, response, body) {

      msg += makeMsgBusOrd(body, 'sectOrd');
      console.log( msg );
  });
  
}


function makeMsgBusOrd(body, word)
{
  var msg = "<h2> 35 Bus Information </h2><p>";

  var $ = cheerio.load(body);
  $('itemList').each(function(idx) {
    var no1 = $(this).find( word ).text();
    msg += "<h1> 구간순번: " +  no1 + '</h1><p>';
    //console.log(`구간순번: ${no1}, 구간ID: ${no2 ? no2 : '---'}`);
  });

  return msg;
}


export default Bus;