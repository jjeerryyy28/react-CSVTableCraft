import React, { useState, useEffect, useRef } from "react";
import Papa from "papaparse";
import { PulseLoader } from "react-spinners";
import Excel from "../../images/excel.svg";
import Icon from "../../images/icon.svg";
import Subtract from "../../images/Subtract.svg";
import Vector from "../../images/Vector-1.svg";
import Mask from "../../images/mask.svg";
import dash from "../../images/dashboard.png"
import uploads from "../../images/upload.png";
import Invoice from "../../images/invoice.png";
import Schedule from "../../images/schedule.png";
import Calendar from "../../images/calendar.png";
import Notification from "../../images/notification-bell.png";
import Setting from "../../images/setting.png";
import "./upload.css";
import '../uploaded/uploaded.css';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [linkData, setLinkData] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagSelections, setTagSelections] = useState({});
  const [prefixData, setPrefixData] = useState([]);
  const [isFileInputDisabled, setIsFileInputDisabled] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsUploading(true);
      setIsFileInputDisabled(true);

      // Simulate loading for 2 seconds (adjust as needed)
      setTimeout(() => {
        Papa.parse(selectedFile, {
          complete: (result) => {
            // Start processing from the second row
            const validRows = result.data.slice(1).filter((row) => row && row.length >= 3);
            const links = validRows.map((row) => row[1]).filter(Boolean);
            const prefixes = validRows.map((row) => row[2]).filter(Boolean);
            setLinkData(links);
            setPrefixData(prefixes);
            setIsFileUploaded(true);
            setIsFileInputDisabled(false);
            setIsUploading(false);
          },
          header: false,
        });
      }, 2000);
    } else {
      console.log("No file selected.");
    }
  };


  const handleTagSelect = (linkIndex, event) => {
    const selectedTag = event.target.value;
    setTagSelections((prevSelections) => {
      const newSelections = { ...prevSelections };
      if (newSelections[linkIndex]) {
        // Check if the tag is already selected for the link
        if (!newSelections[linkIndex].includes(selectedTag)) {
          newSelections[linkIndex].push(selectedTag);
        }
      } else {
        newSelections[linkIndex] = [selectedTag];
      }
      return newSelections;
    });
  };

  const handleTagRemove = (linkIndex, tagIndex) => {
    setTagSelections((prevSelections) => {
      const newSelections = { ...prevSelections };
      if (newSelections[linkIndex]) {
        newSelections[linkIndex] = newSelections[linkIndex].filter((_, index) => index !== tagIndex);
        if (newSelections[linkIndex].length === 0) {
          delete newSelections[linkIndex];
        }
      }
      return newSelections;
    });
  };

  useEffect(() => {
    const fetchedTags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6"];
    setTags(fetchedTags);
  }, []);


  return (
    <div className="upload">
      <div className="overlap">
        <div className="group">
          <div className="search-bar" />
          <div style={{
            display: "flex",
            flexDirection: "row", // Ensure images are in a row
            alignItems: "center",
            justifyContent: "center",
            // border: "1px solid blue",
            width: "296px",
            height: "32.93px",
            top: "50px",
            left: "1114px"
          }}>
            <img className="vector" alt="Vector" src={Vector} style={{marginLeft: "-60px"}}/>
            <img className="mask" alt="Mask" src={Mask} style={{ marginLeft: "150px", borderRadius:"50px" }} />
          </div>
        </div>
        <div className="frame">
          <div className="frame-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper">Upload CSV</div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="menu-name">
          <div className="settings">
            <div className="div">Settings</div>
            <img className="img" alt="settings" src={Setting} />
          </div>
          <div className="notification">
            <div className="div">Notification</div>
            <img className="img" alt="Iconly bold" src={Notification} />
          </div>
          <div className="group-2">
            <div className="frame-2">
              <div className="calendar" />
              <div className="messages">
                <div className="text-wrapper-2">Calendar</div>
                <img className="img" alt="Iconly bold document" src={Calendar} style={{marginLeft: "-39px"}}/>
              </div>
            </div>
          </div>
          <div className="schedule">
            <div className="div">Schedule</div>
            <img className="img" alt="Iconly bold document" src={Schedule} />
          </div>
          <div className="invoice">
            <div className="text-wrapper-3">Invoice</div>
            <img className="iconly-bold-ticket" alt="Iconly bold ticket" src={Invoice} />
          </div>
          <div className="div-2">
            <div className="analytics">
              <div className="chart" />
              <div className="text-wrapper-5" style={{marginLeft: "-33px"}}>Upload</div>
              <img className="iconly-bold-category" alt="Iconly bold category" src={uploads} style={{marginLeft: "-35px"}}/>
            </div>
            <div className="div-2">
              <div className="rectangle" />
              <div className="text-wrapper-5">Dashboard</div>
              <img className="iconly-bold-category" alt="Iconly bold category" src={dash} />
            </div>
          </div>
        </div>
        <div className="logo-and-company">
          <div className="overlap-group">
            <img className="subtract" alt="Subtract" src={Subtract} />
          </div>
          <div className="text-wrapper-6">Base</div>
        </div>
      </div>
      <div className="input-container">
        <div className="overlap-2">
          <div className="group-3">
            <div className="frame-3">
              <img
                src={Excel}
                alt=""
                className="excel"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
              />
              {selectedFile ? (
                <label
                  htmlFor="fileInput"
                  className="browse-link"
                  style={{ color: isFileInputDisabled ? "#ccc" : "#605bff", fontWeight: '400' }}
                >
                  {selectedFile.name}
                  <span style={{ color: "red" }} className="hidden-text" onClick={() => setSelectedFile(null)}>
                    <br />
                    Remove
                  </span>
                </label>
              ) : (
                <>
                  Drop your excel sheet here or &nbsp;
                  <label
                    htmlFor="fileInput"
                    className="browse-link"
                    style={{ color: isFileInputDisabled ? "#ccc" : "#605bff", fontWeight: '400' }}
                  >
                    browse
                  </label>
                </>
              )}
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                style={{ display: "none" }}
                ref={fileInputRef}
              />
            </div>
          </div>
          <div className="rectangle-2" />
        </div>
        <div className="size-md-icon-left" onClick={handleUpload}>
          <img className="icon" alt="Icon" src={Icon} />
          <button
            className={`value ${isUploading ? "instant-animation" : ""}`}
            disabled={isUploading}
            style={{
              color: "#ffffff",
              border: "none",
              outline: "none",
            }}
          >
            {isUploading ? (
              <PulseLoader color="#ffffff" loading={isUploading} height={30} width={30} />
            ) : (
              "Upload"
            )}
          </button>
        </div>
      </div>

      {isFileUploaded && (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr style={{
                width: "1034px",
                height: "58px",
                flexShrink: 0
              }}>
                <th>S.No.</th>
                <th>Links</th>
                <th>Prefix</th>
                <th>Add tags</th>
                <th>Select tags</th>
              </tr>
            </thead>
            <tbody>
              {linkData.map((link, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </td>
                  <td>{prefixData[index]}</td>
                  <td style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <select onChange={(e) => handleTagSelect(index, e)}
                      style={{
                        border: 'none',
                        outline: 'none',
                        width: '150px',
                        height: '40px',
                        padding: '12px',
                        display: "flex",
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        gap: '8px',
                        flexShrink: 0,
                        borderRadius: '8px',
                        background: 'var(--Light-Gohan, #FFF);'
                      }}>
                      <option value="">Select Tag</option>
                      {tags.map((tag) => (
                        <option key={tag} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                    {/* <button
                      onClick={() => handleTagSelect(index, { target: { value: selectedTags } })}
                    >
                      Add
                    </button> */}
                  </td>
                  <td>
                    {tagSelections[index] &&
                      tagSelections[index].map((selectedTag, tagIndex) => (
                        <span key={tagIndex}
                          className="tag"
                          style={{
                            backgroundColor: '#605bff',
                            borderRadius: '4px',
                            height: '24px',
                            width: '62px',
                            padding: '4px 4px 4px 8px',
                            color: "#ffffff"
                          }}>
                          <span className="tag-name">{selectedTag}</span>
                          <button
                            className="remove-tag"
                            style={{
                              width: '16px',
                              height: '16px',
                              color: "#ffffff",
                              backgroundColor: "#605bff",
                              border: "none",
                              outline: "none",
                            }}
                            onClick={() => handleTagRemove(index, tagIndex)}
                          >
                            x
                          </button>
                        </span>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Upload;