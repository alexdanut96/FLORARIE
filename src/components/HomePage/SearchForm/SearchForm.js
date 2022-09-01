import React from "react";
import "../SearchForm/SearchForm.css"
import { FiMapPin } from "react-icons/fi"
import { BsCalendar3 } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"


export function SearchForm() {
    var date = new Date()
    var year = date.getFullYear()
    var month = String(date.getMonth() + 1).padStart(2, '0')
    var currentDate = String(date.getDate()).padStart(2, '0')
    var datePattern = year + '-' + month + '-' + currentDate

    return (
        <div className="search-form-container">
            <div className="search-form">
                <div className="form-text">Unde vrei sa trimiti flori?</div>
                <div className="form-content">
                    <div className="choose-location">
                        <FiMapPin />
                        <input type="text" placeholder="Cauta orasul" />
                        <i className="fa fa-pencil"></i>
                    </div>
                    <div className="choose-date">
                        <BsCalendar3 />
                        <input type="text" placeholder={datePattern} />
                        <IoIosArrowDown />
                    </div>
                    <div className="search-form-submit">Vezi florile</div>
                </div>
            </div>
        </div>

    )

}