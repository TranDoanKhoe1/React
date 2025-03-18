import { useState } from "react";

function Filters() {
    const [typeOpen, setTypeOpen] = useState(true);
    const [timeOpen, setTimeOpen] = useState(true);
    const [ratingOpen, setRatingOpen] = useState(true);

    return (
        <aside className="filters">
            <div className="filter-header">
                <img src="../public/list_filter.png" alt="Filter Icon" className="filter-icon" />
                <h3>FILTERS</h3>
            </div>

            <div className="filter-section">
                <h4 onClick={() => setTypeOpen(!typeOpen)}>
                    Type <span className="arrow">{typeOpen ? "▲" : "▼"}</span>
                </h4>
                {typeOpen && (
                    <div className="filterOp" style={{display: "flex"}}>
                        <div className="left">
                            <label><input type="checkbox" /> Pan-fried</label>
                            <label><input type="checkbox" checked /> Grilled</label>
                            <label><input type="checkbox" /> Sauteed</label>
                            <label><input type="checkbox" /> Steamed</label>
                        </div>
                        <div className="right">
                            <label><input type="checkbox" /> Stir-fried</label>
                            <label><input type="checkbox" checked /> Roasted</label>
                            <label><input type="checkbox" /> Baked</label>
                            <label><input type="checkbox" /> Stewed</label>
                        </div>
                    </div>
                )}
            </div>

            <div className="filter-section">
                <h4 onClick={() => setTimeOpen(!timeOpen)}>
                    Time <span className="arrow">{timeOpen ? "▲" : "▼"}</span>
                </h4>
                {timeOpen && (
                    <div className="filter-options">
                        <input type="range" min="30" max="50" className="time-slider" />
                        <div className="time-labels">
                            <span style={{paddingLeft: '10px'}}>30 minutes</span>
                            <span style={{paddingLeft: '50px'}}>50 minutes</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="filter-section">
                <h4 onClick={() => setRatingOpen(!ratingOpen)}>
                    Rating <span className="arrow">{ratingOpen ? "▲" : "▼"}</span>
                </h4>
                {ratingOpen && (
                    <div className="filter-options" style={{display: "flex", flexDirection: "column"}}>
                        <label><input type="checkbox"/> ⭐⭐⭐⭐⭐</label>
                        <label><input type="checkbox"/> ⭐⭐⭐⭐</label>
                        <label><input type="checkbox"/> ⭐⭐⭐</label>
                        <label><input type="checkbox"/> ⭐⭐</label>
                        <label><input type="checkbox"/> ⭐</label>
                    </div>
                )}
            </div>

            <button className="apply-btn">Apply</button>
        </aside>
    );
}
export default Filters;