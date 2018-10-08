
const _ = require("underscore");
const express = require('express');
const bodyParser = require('body-parser');
const Client = require('node-rest-client').Client;
const request = require('request');
const zlib = require('zlib');
const json2html = require('node-json2html');
const fs = require('fs');
const pdf = require('html-pdf');
const decompressResponse = require('decompress-response');
//var timeout = require('connect-timeout')

var client = new Client();
var options = { format: 'Letter' };
var transform = {
    '<>': 'div', 'class': 'card', 'html': [
        { '<>': 'h3', 'text': 'Sourcing Initiative' },
        { '<>': 'h4', 'text': 'aE: ${aE}' },
        { '<>': 'h4', 'text': 'aoToR: ${aoToR}' },
        { '<>': 'h4', 'text': 'bN: ${bN}' },
        { '<>': 'h4', 'text': 'bSO: ${bSO}' },
        { '<>': 'h4', 'text': 'bT: ${bT}' },
        { '<>': 'h4', 'text': 'bUCF: ${bUCF}' },
        { '<>': 'h4', 'text': 'background: ${background}' },
        { '<>': 'h4', 'text': 'businessLead: ${businessLead}' },
        { '<>': 'h4', 'text': 'businessNeeds: ${businessNeeds}' },
        { '<>': 'h4', 'text': 'businessconfirmation: ${businessconfirmation}' },
        { '<>': 'h4', 'text': 'cMU: ${cMU}' },
        { '<>': 'h4', 'text': 'contractValue: ${contractValue}' },
        { '<>': 'h4', 'text': 'criticalMaterialContract: ${criticalMaterialContract}' },
        { '<>': 'h4', 'text': 'customersNeedsandBenefits: ${customersNeedsandBenefits}' },
        { '<>': 'h4', 'text': 'cyberCritical: ${cyberCritical}' },
        { '<>': 'h4', 'text': 'eCP: ${eCP}' },
        { '<>': 'h4', 'text': 'eS: ${eS}' },
        { '<>': 'h4', 'text': 'iSB: ${iSB}' },
        { '<>': 'h4', 'text': 'iTA: ${iTA}' },
        { '<>': 'h4', 'text': 'image: ${image}' },
        { '<>': 'h4', 'text': 'initiativeTitle: ${initiativeTitle}' },
        { '<>': 'h4', 'text': 'initiativeTreatment: ${initiativeTreatment}' },
        { '<>': 'h4', 'text': 'oBI: ${oBI}' },
        { '<>': 'h4', 'text': 'ooGSA: ${ooGSA}' },
        { '<>': 'h4', 'text': 'pRN: ${pRN}' },
        { '<>': 'h4', 'text': 'pSO: ${pSO}' },
        { '<>': 'h4', 'text': 'projectnumber: ${projectnumber}' },
        { '<>': 'h4', 'text': 'bSO: ${bSO}' },
        { '<>': 'h4', 'text': 'repeatableSection: ${repeatableSection}' },
        { '<>': 'h4', 'text': 'repeatableSection1: ${repeatableSection1}' },
        { '<>': 'h4', 'text': 'sM: ${sM}' },
        { '<>': 'h4', 'text': 'sOIR: ${sOIR}' },
        { '<>': 'h4', 'text': 'sST: ${sST}' },
        { '<>': 'h4', 'text': 'soGSA: ${soGSA}' },
        { '<>': 'h4', 'text': 'sourcingCategory: ${sourcingCategory}' },
        { '<>': 'h4', 'text': 'sourcingLead: ${sourcingLead}' },
        { '<>': 'h4', 'text': 'sourcingSubCategory: ${sourcingSubCategory}' },
        { '<>': 'h4', 'text': 'spendProfile: ${spendProfile}' },
        { '<>': 'h4', 'text': 'tCS: ${tCS}' },
        { '<>': 'h4', 'text': 'textArea: ${textArea}' },
        { '<>': 'h4', 'text': 'volumes: ${volumes}' },


    ]
};

const space = ' ';
// var isFinished = false;
// var isDataSent = false;
//Code to extend time in heroku response
const extendTimeoutMiddleware = (req, res, next) => {
    console.log('extendTimeoutMiddleware');
    const space = ' ';
    let isFinished = false;
    let isDataSent = false;
    // Only extend the timeout for API requests
    if (!req.url.includes('/')) {
        next();
        return;
    }

    res.once('finish', () => {
        isFinished = true;
    });

    res.once('end', () => {
        isFinished = true;
    });

    res.once('close', () => {
        isFinished = true;
    });

    res.on('data', (data) => {
        // Look for something other than our blank space to indicate that real
        // data is now being sent back to the client.
        if (data !== space) {
            isDataSent = true;
        }
    });

    const waitAndSend = () => {
        setTimeout(() => {
            // If the response hasn't finished and hasn't sent any data back....
            console.log('If the response has not finished and has not sent any data back....');
            if (!isFinished && !isDataSent) {
                // Need to write the status code/headers if they haven't been sent yet.
                //setTimeout(function () {
                // if (!res.headersSent) {
                //     res.writeHead(202);
                // }
                console.log('res.write');
                res.write(space);
                //}, 3000);

                // Wait another 15 seconds
                waitAndSend();
            }
        }, 15000);
    };

    waitAndSend();
    next();
};


//end of code to extend time in heroku server

module.exports = function () {
    var self = this;

    this.init = function (config) {
        var app = express();
        var router = express.Router();
        router.use(bodyParser.json());
        app.use(extendTimeoutMiddleware);
        app.use('/', router);
        var logger = (config ? config.logger : null);
        if (!logger) {
            logger = console;
        }
        console.log("inside init");

        //Start of generate/pdf endpoint
        router.get('/generate/pdf/:process_id', function (req, res) {
            res.write(space);
            var success_data, err_data;
            console.log('setting timeout on req');
            req.setTimeout(500000);
            console.log(req.params.process_id);
            console.log("inside /");
            /// Api to get JSON DATA 

            var args_to_get_json = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Basic " + new Buffer("cloud.admin:ominouS@6TeRM").toString("base64")
                },
                requestConfig: {
                    timeout: 30000, //request timeout in milliseconds
                    noDelay: true, //Enable/disable the Nagle algorithm
                    keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
                    keepAliveDelay: 1000 //and optionally set the initial delay before the first keepalive probe is sent
                },
                responseConfig: {
                    timeout: 30000 //response timeout
                }

            }
            var url_to_get_json = `https://intprocessee-gse00013749.uscom-east-1.oraclecloud.com/ic/api/process/v1/processes/${req.params.process_id}/dataobjects`;

            // Start of api call to get Json Data & create PDF file
            client.get(url_to_get_json, args_to_get_json, function (data, response) {
                try {
                    //console.log(data);
                    // parsed response body as js object
                    var jsonData = JSON.stringify(data);
                    var projectNumber, ProjectName;
                    jsonData = JSON.parse(jsonData);

                    var filterObjArr = jsonData.dataVariableFlatTree.filter(obj => obj.name == 'sourceDataObject');
                    var filterObjJSONData = JSON.stringify(filterObjArr[0].value);
                    var filterObj = JSON.parse(filterObjJSONData);
                    console.log(filterObj);
                    var html = json2html.transform(filterObj, transform);

                    pdf.create(html, options).toFile('myWebPDFFILE.pdf', function (err, res) {
                        if (err) return console.log(err);
                        console.log(res); // { filename: '/app/businesscard.pdf' }
                    });

                    if (filterObj != undefined) {
                        var filterJSObj = JSON.parse(filterObj);
                        projectNumber = filterJSObj.projectnumber;
                        console.log(`projectnumber : ${projectNumber}`);
                    }
                } catch (error) {
                    console.log('something went wrong in try-catch', error);
                    console.log('Returning response -- Something went wrong while calling the url_to_get_json api')
                }

                if (projectNumber != undefined) {

                    var options = {
                        url: `https://ucf1-eedc-fa-ext.oracledemos.com/fscmRestApi/resources/11.13.18.05/projects/${projectNumber}`,
                        method: 'GET',
                        headers: {
                            "Authorization": "Basic " + new Buffer("ppm_impl:gC/q5ORy7").toString("base64"),
                            'Content-Type': 'application/json',
                            'Accept-Encoding': 'gzip'
                        },
                        encoding: null
                    };
                    // Start of Api call to get ProjectName & read Pdf file
                    request(options, function (err_toGetProjectName, response, body) {

                        if (err_toGetProjectName) {
                            console.log('Something went wrong', err_toGetProjectName);
                            res.end(err_toGetProjectName);
                        }

                        var encoding = response.headers['content-encoding']
                        if (encoding && encoding.indexOf('gzip') >= 0) {
                            zlib.gunzip(body, function (err, dezipped) {

                                var json_string = dezipped.toString('utf-8');
                                var unzip_data = JSON.parse(json_string);
                                if (unzip_data != undefined) {
                                    ProjectName = unzip_data.ProjectName;
                                    console.log('\nJSON ::\n', ProjectName);

                                    fs.readFile('myWebPDFFILE.pdf', (err, read_data) => {
                                        if (err) throw err;
                                        //console.log(read_data.toString('base64'));
                                        file_data = read_data;
                                        var argsToSendAttachment = {
                                            headers: { "Content-Type": "application/json", "Authorization": "Basic " + new Buffer("cloud.admin:gC/ominouS@6TeRM").toString("base64") },
                                            data: {
                                                "Header": null, "Body": {
                                                    "uploadAttachment": {
                                                        "entityName": "PJF_PROJ_ELEMENTS",
                                                        "categoryName": "PROJECT_PLAN",
                                                        "allowDuplicate": "yes",
                                                        "attachmentRows": {
                                                            "UserKeyA": ProjectName,
                                                            "UserKeyB": "1.0",
                                                            "UserKeyC": null,
                                                            "UserKeyD": null,
                                                            "UserKeyE": null,
                                                            "AttachmentType": "FILE",
                                                            "Title": "ProjectFile_ICS.pdf",
                                                            "Content": file_data.toString('base64')

                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        // Start of Api call to send attachment
                                        client.post("https://IntProcessEE-gse00013749.uscom-east-1.oraclecloud.com:443/ic/api/integration/v1/flows/rest/PROJTASKATTACH/1.0/projtaskattach", argsToSendAttachment, function (data, response) {
                                            // parsed response body as js object
                                            console.log(data);

                                            //success_data = data;
                                            //return;

                                            return res.end('Success in attachment of pdf');

                                        }).on('error', function (err) {
                                            console.log('something went wrong on the request', err);


                                            return res.end('something went wrong on the request');
                                        });// Start of Api call to send attachment
                                    });
                                }
                            });
                        } else {
                            console.log('\n\nRESPONSE IS NOT GZIPPED!');


                            return res.end('RESPONSE IS NOT GZIPPED');
                        }
                        console.log('End of Api call to get ProjectName');
                    }); // End of Api call to get ProjectName


                } else {
                    console.log('\n\nNot able to get Project Number from Response');

                    return res.end('something went wrong on the request');
                }


                console.log('End of api call to get JSON DATA');
            }).on('error', function (err) {
                console.log('something went wrong on the request', err);

                return res.end('something went wrong on the request');
            });// End of api call to get JSON DATA & create PDF file

            console.log('End of generate/pdf endpoint');

        });//End of generate/pdf endpoint


        return app;
    };

    return this;
}();