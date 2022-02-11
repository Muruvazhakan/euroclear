import React, { useState, useEffect } from 'react';
import Card from '../../Component/Card/Card';
import { DropdownButton, Dropdown, Row, FormGroup, Button, Container, Col, Alert } from 'react-bootstrap/'
import './MainQuery.css'
import ExportToExcel from '../../Component/ExportToExcel/ExportToExcel';
import axios from 'axios';
import PieCharts from '../../Component/Chart/PieCharts';
import * as UrlDatas from '../../Assets/Datas/Datas';
import querybg from '../../Assets/img/bg1.jpg';
import Tada from 'react-reveal/Tada';
import Flash from 'react-reveal/Flash';
// import DatePicker, { ReactDatePicker } from "react-datepicker";
import DatePicker from 'react-datepicker';
const cors = require('cors');
require('checkboxes');
function MainQuery() {

    const datas = {
        statisticson: ["Number of Shareholders", "% of Shareholders", "Ownership", "Market Value", "Settlement", "Dividends"],
        account: ["Book entry account", "Equity savings account"],
        viewby: ["Age of the Investor", "Sector of the Investor", "Issuing Company"],
        gender: ["Male", "Female"],
        age: ["<17y", "18-25y", "26-45y", "46-65y", ">65y"],
        sector: ["Households", "Finance and insurance companies", "Public entities", "Non-profit communities", "Foreign countries"],
        column: ["Account Type", "Gender", "Issuer(Finnish Vs Non-Fin)"],
    }


    const initialdata = {
        defaultvalue: "Select the",
        statisticson: "",
        account: "",
        viewby: "",
        issuer: "",
        gender: "",
        age: "",
        sector: "",
        location: "",
        fromdate: new Date(),
        todate: new Date(),
        analysis: "",
        column: "",
        ismessage: false,
        message:null,
    };
    const [selecteddata, setSelecteddata] = React.useState(initialdata);


    const [statist, setstatist] = useState('Select the value');

    const [data, setData] = React.useState([])
    const [fileName, setFileName] = React.useState("MyFile")
    let arrayval = [];
    const selectdata = {};

    useEffect(() => {
        const fetchData = () => {
            axios.get('https://jsonplaceholder.typicode.com/posts').then(r => setData(r.data))
        }
        fetchData();
        document.title = "Statistics for Journalists - Euroclear";
        handleQuerySelect();
    }, [])

    const handleQuerySelect = () => {
        console.log("handleQuerySelect");

        fetch(UrlDatas.QueryScreenUrl, {
            method: 'GET',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'

            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson + " responseJson");

                if (responseJson !== "no") {
                    console.log(" Values are present");
                    console.log(typeof (responseJson));

                    arrayval = JSON.parse(responseJson);
                    console.log("arrayval" + typeof (responseJson));
                    arrayval.forEach(elem => {
                        if (Array.isArray(data[elem.attributeName])) {
                            data[elem.attributeName].push(elem.value);
                        } else {
                            data[elem.attributeName] = elem.value;
                        }
                    })
                    console.log(arrayval);
                    console.log(datas);
                }
                else {
                    console.log("Issue");
                }

            })
            .catch((error) => {
                console.error(error);
            });

    }


    const handleSelectViews = (val) => {

        setSelecteddata({
            ...selecteddata,
            viewby: val
        });
    };

    const handleGenderSelect = (val) => {

        setSelecteddata({
            ...selecteddata,
            gender: val
        });
    };

    const handleAgeSelect = (val) => {
        setSelecteddata({
            ...selecteddata,
            age: val
        });

    };
    const handleStatsSelect = (val) => {

        setSelecteddata({
            ...selecteddata,
            statisticson: val
        });
    };

    const handleSectorSelect = (val) => {
        setSelecteddata({
            ...selecteddata,
            sector: val
        })
    };

    const handleAccountSelect = (val) => {
        setSelecteddata({
            ...selecteddata,
            account: val
        })
    };
    const handleIssuerSelect = (val) => {
        setSelecteddata({
            ...selecteddata,
            issuer: val
        })
    };

    const handleLocationSelect = (val) => {
        setSelecteddata({
            ...selecteddata,
            location: val
        })
    };
    const handleFromDateSelect = (val) => {
        setSelecteddata({
            ...selecteddata,
            fromdate: val
        })
    }

    const handleToSelect = (val) => {
        setSelecteddata({
            ...selecteddata,
            todate: val
        })
    }


    const handleColumnSelect = (val) => {
        setSelecteddata({
            ...selecteddata,
            column: val
        })
    }
    
    const handleMessageSelect = () => {
        setSelecteddata({
            ...selecteddata,
            ismessage: !selecteddata.ismessage
        })
    }
    const [date, setDate] = useState(new Date());
    const handleMessageSend = (val) =>{
        
    }
    const handleReset = () => {
        setSelecteddata("")
    }
    const handleHistory = () => {
        
    }
    const handleSubmit = () => {
        
    }
    
							
							
    return <>
        {/* <Card> */}

        {/* <ExportToExcel apiData={data} fileName={fileName} /> */}
        
        <img
            src={querybg}
            alt="Euroclear"
            width="100%"
            height="350px"
            className=" title-img" />
        <div className='title-Statistics'>Statistics for Journalists</div>
        <Flash>
        <Container fluid className="Container-styles-main" >
            <Card className="card-styles-main">
                <form >

                    <div className="title-styles"> Selections </div>
                    <Row xl={6}>
                        <Col xl={3} >
                            <FormGroup >

                                <div className='group-align simple-style'>
                                    <div className='text-spacing-style'>
                                        Statistics
                                    </div>
                                    <DropdownButton variant="outline-dark" className='single-align' id="statisticson" title={selecteddata.statisticson == "" ? `${selecteddata.defaultvalue} Statistics` : selecteddata.statisticson} onSelect={handleStatsSelect}>

                                        {datas.statisticson.map((data, key) => (
                                            <Dropdown.Item eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                        ))}


                                    </DropdownButton>

                                </div>

                            </FormGroup>
                        </Col>

                        <Col xl={3} >
                            <FormGroup >
                                <div className='group-align '>
                                    <div className='text-spacing-style'>
                                        Options
                                    </div>
                                    <DropdownButton variant="outline-dark" className='single-align ' id="View" title={selecteddata.viewby == "" ? `${selecteddata.defaultvalue} View` : selecteddata.viewby} onSelect={handleSelectViews}>

                                        {datas.viewby.map((data, key) => (
                                            <Dropdown.Item eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                        ))}


                                    </DropdownButton>

                                </div>
                            </FormGroup>
                        </Col>

                        <Col xl={3}>
                            <FormGroup >
                                <div className='group-align simple-style1'>
                                    <div className='text-spacing-style'>
                                        Organized by
                                    </div>

                                    <DropdownButton variant="outline-dark" className='single-align' id="Column" title={selecteddata.column == "" ? `${selecteddata.defaultvalue} Column` : selecteddata.column} onSelect={handleColumnSelect}>

                                        {datas.column.map((data, key) => (
                                            <Dropdown.Item eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                        ))}
                                    </DropdownButton>

                                </div>
                            </FormGroup>
                        </Col>



                    </Row>

                    <div className="title-styles"> Filters </div>

                    <Row xl={6}>

                        <Col xl={3}>
                            <FormGroup >
                                <div className='group-align'>
                                    <div className='text-spacing-style'>
                                        Account
                                    </div>

                                    <DropdownButton variant="outline-dark" className='single-align' id="Sector" title={selecteddata.account == "" ? `${selecteddata.defaultvalue} Account` : selecteddata.account} onSelect={handleAccountSelect}>

                                        {datas.account.map((data, key) => (
                                            <Dropdown.Item eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                        ))}
                                    </DropdownButton>

                                </div>
                            </FormGroup>
                        </Col>


                        <Col xl={3}>
                            <FormGroup >
                                <div className='group-align'>
                                    <div className='text-spacing-style'>
                                        Gender
                                    </div>

                                    <DropdownButton variant="outline-dark" className='single-align dropdown-style ' id="Gender" title={selecteddata.gender == "" ? `${selecteddata.defaultvalue} Gender` : selecteddata.gender} onSelect={handleGenderSelect}>

                                        {datas.gender.map((data, key) => (
                                            <Dropdown.Item className='dropdown-style' eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                        ))}


                                    </DropdownButton>

                                </div>
                            </FormGroup>


                        </Col>

                        <Col xl={3}>
                            <FormGroup >
                                <div className='group-align'>
                                    <div className='text-spacing-style'>
                                        Age
                                    </div>

                                    <DropdownButton variant="outline-dark" className='single-align' id="Age" title={selecteddata.age == "" ? `${selecteddata.defaultvalue} Age` : selecteddata.age} onSelect={handleAgeSelect}>

                                        {datas.age.map((data, key) => (
                                            <Dropdown.Item eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                        ))}


                                    </DropdownButton>

                                </div>
                            </FormGroup>
                        </Col>

                        <Col xl={3}>
                            <FormGroup >
                                <div className='group-align'>
                                    <div className='text-spacing-style'>
                                        Investor sector
                                    </div>

                                    <DropdownButton variant="outline-dark" className='single-align' id="Sector" title={selecteddata.sector == "" ? `${selecteddata.defaultvalue} Sector` : selecteddata.sector} onSelect={handleSectorSelect}>

                                        {datas.sector.map((data, key) => (
                                            <Dropdown.Item eventKey={data} key={key} title={data} >{data}</Dropdown.Item>
                                        ))}
                                    </DropdownButton>

                                </div>
                            </FormGroup>
                        </Col>



                    </Row>
                    <div className='date-style-main' > Date From
                        <input id="dateRequired" type="date" dateFormat="dd-mm-yyyy" className='date-style' name="dateRequired" onClick={handleFromDateSelect} />

                        To
                        <input id="dateRequired" type="date" className='date-style' name="dateRequired" onClick={handleToSelect} />
                    </div>
                </form>

                <Button variant='dark' className='forgot-pass button-submit' onClick={handleSubmit} size="lg"> Submit</Button>
                <Button variant='dark'  className='forgot-pass button-submit' size="lg" onClick={handleReset}> Reset</Button>
                <Button variant='dark' href="/History" className='forgot-pass' size="lg" onClick={handleHistory}> My History</Button>
                <Row>
                    <div className='group-align'>
                        Can't find what you're looking for? Click here to send a message
                        <input className='checkbox-style' type="checkbox" onClick={handleMessageSelect} />

                    </div>

                </Row>
                {selecteddata.ismessage ?
                    <>
                    <Tada >
                        <input className='text-box-style group-align' type="text" />
                        <Button variant='dark' className='forgot-pass' size="lg" onClick={handleMessageSend}> Send</Button>
                        </Tada>
                    </>
                    : null
                }

            </Card>

        </Container>
        </Flash>
        {/* <ExportToExcel /> */}
        {/* </Card> */}
    </>;
}

export default MainQuery;
