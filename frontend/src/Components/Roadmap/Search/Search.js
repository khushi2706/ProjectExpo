import React from 'react'
import './Search.css'
export default function Search() {
    return (
        <div style={{ width: "100%" }}>
            <div style={{ paddingLeft: 40, paddingRight: 40, justifyContent: "left" }}>
                <div className="container-search-box-title">Find new roadmap</div>
                <div style={{ marginTop: 40 }} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}
                >
                    {/*search bar*/}
                    <div className="container-serach-box-search-bar" style={{ width: "80%" }}>
                        <i
                            className="material-icons"
                            style={{ marginLeft: 10, fontSize: 28, color: "#9B9B9B" }}
                        >
                            search
                        </i>
                        <div style={{ paddingLeft: 20 }} />
                        <input
                            type="text"
                            className="search-bar-input-box"
                            placeholder="Search Roadmap..."
                        />
                    </div>
                    {/*Search button*/}
                    <button className="search-bar-button">Search</button>
                </div>
            </div>
        </div>

    )
}
