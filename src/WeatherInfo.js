import React from "react";
import FormattedDate from "./FormattedDate";

import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <ul className="description">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>

        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <div className="left">
            <WeatherIcon code={props.data.icon} size={52} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="detail-weather mt-3">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
