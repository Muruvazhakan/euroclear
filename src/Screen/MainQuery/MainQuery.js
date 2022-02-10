import React, { useState, useEffect } from 'react';
import Card from '../../Component/Card/Card';
import { DropdownButton, Dropdown, Row, FormGroup, Button, Container, Col } from 'react-bootstrap/'
import './MainQuery.css'
import ExportToExcel from '../../Component/ExportToExcel/ExportToExcel';
import axios from 'axios';
import PieCharts from '../../Component/Chart/PieCharts';
import * as UrlDatas from '../../Assets/Datas/Datas';
const cors = require('cors');
function MainQuery() {

    const datas = {
        statisticson: ["Shareholders", "Accounts", "Ownership", "Settlement"],
        account: ["Book-Entry", "EQ-saving", "All"],
        viewby:["Age"],
        issuer:["Finnish Issuer","Non-Finnish Issuer","Instrument Types"]
        
    }
    const handleStatsSelect = (val) => {
        alert(val);
        setstatist(val);
    }

    const [statist, setstatist] = useState('Select the value');

    const [data, setData] = React.useState([])
    const [fileName, setFileName] = React.useState("MyFile")
   
    const selectdata = {};
    let arrayval=[];
    useEffect(() => {
        const fetchData = () => {
            axios.get('https://jsonplaceholder.typicode.com/posts').then(r => setData(r.data))
        }
        fetchData();
        document.title="Login - Euroclear";
        handleQuerySelect();
    }, [])

    const handleQuerySelect =() =>{     
        console.log("handleQuerySelect");            
           
            fetch(UrlDatas.QueryScreenUrl, {
              method: 'GET',
              header: {
                'Accept': 'application/json',
                'Content-type': 'application/json',                
                'Accept':"Access-Control-Allow-Origin"
              },       
        
            })
              .then((response) => response.json())
              .then((responseJson) => {
                console.log(responseJson + " responseJson");
                //ToastAndroid.show(responseJson,ToastAndroid.LONG);
        
                if (responseJson !== "no") 
                {
                  console.log(" Values are present");
                  let arrayval=[];
                  arrayval=responseJson;
                  arrayval.forEach(elem => {
                    if(Array.isArray(data[elem.attributeName])) {
                    data[elem.attributeName].push(elem.value);
                    } else {
                    data[elem.attributeName] = elem.value; 
                    }
                    })  
                }
                else
                {
                  console.log("Issue");
                  
                }
                // notify('Success','succ');
                // setShowModal(false);
              })  
              .catch((error) => {
                console.error(error);
              });         

    }

    return <>
        {/* <Card> */}

        {/* <ExportToExcel apiData={data} fileName={fileName} /> */}
        <Container fluid>
            <form className='d-flex'>
                <Row xl={3}>
                    <Col>
                        <FormGroup >

                            <div className='group-align '>
                                <div className='text-spacing-style'>
                                    Statistics On
                                </div>
                                <DropdownButton className='single-align' id="statisticson" title={statist} onSelect={handleStatsSelect}>

                                    {datas.statisticson.map(data => (
                                        <Dropdown.Item eventKey={data} title={data} >{data}</Dropdown.Item>
                                    ))}


                                </DropdownButton>

                            </div>

                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <div className='group-align'>
                                <div className='text-spacing-style'>
                                    Account
                                </div>
                                <DropdownButton className='single-align' id="statisticson" title={statist} onSelect={handleStatsSelect}>

                                    {datas.statisticson.map(data => (
                                        <Dropdown.Item eventKey={data} title={data} >{data}</Dropdown.Item>
                                    ))}


                                </DropdownButton>

                            </div>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <div className='group-align'>
                                <div className='text-spacing-style'>
                                    Group by
                                </div>

                                <DropdownButton className='single-align' id="statisticson" title={statist} onSelect={handleStatsSelect}>

                                    {datas.statisticson.map(data => (
                                        <Dropdown.Item eventKey={data} title={data} >{data}</Dropdown.Item>
                                    ))}


                                </DropdownButton>

                            </div>
                        </FormGroup>
                    </Col>
                    
                    <Col>
                        <FormGroup >

                            <div className='group-align '>
                                <div className='text-spacing-style'>
                                    Statistics On
                                </div>
                                <DropdownButton className='single-align' id="statisticson" title={statist} onSelect={handleStatsSelect}>

                                    {datas.statisticson.map(data => (
                                        <Dropdown.Item eventKey={data} title={data} >{data}</Dropdown.Item>
                                    ))}


                                </DropdownButton>

                            </div>

                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <div className='group-align'>
                                <div className='text-spacing-style'>
                                    Account
                                </div>
                                <DropdownButton className='single-align' id="statisticson" title={statist} onSelect={handleStatsSelect}>

                                    {datas.statisticson.map(data => (
                                        <Dropdown.Item eventKey={data} title={data} >{data}</Dropdown.Item>
                                    ))}


                                </DropdownButton>

                            </div>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup >
                            <div className='group-align'>
                                <div className='text-spacing-style'>
                                    Group by
                                </div>

                                <DropdownButton className='single-align' id="statisticson" title={statist} onSelect={handleStatsSelect}>

                                    {datas.statisticson.map(data => (
                                        <Dropdown.Item eventKey={data} title={data} >{data}</Dropdown.Item>
                                    ))}


                                </DropdownButton>

                            </div>
                        </FormGroup>
                    </Col>
                </Row>
            
               

            </form>
        </Container>

        {/* <ExportToExcel /> */}
        {/* </Card> */}
    </>;
}

export default MainQuery;
