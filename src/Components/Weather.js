import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import { setLoadingFalse, setLoadingTrue } from "../redux/slices/loadingSlice";

const Weather = () => {
    let display = useSelector(selectDisplay);
    const dispatch = useDispatch();
    let latitude = display.capitalInfo.latlng[0];
    let longitude = display.capitalInfo.latlng[1];

    const [weather, setWeather] = useState();

    // ------------------------------------
    // PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
    // ------------------------------------

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
