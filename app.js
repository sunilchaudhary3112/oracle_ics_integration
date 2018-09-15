
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

var client = new Client();
var options = { format: 'Letter' };
var transform = {
    '<>': 'div', 'class': 'card', 'html': [
        { '<>': 'h3', 'text': 'Travel Request Web Form Data' },
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


module.exports = function () {
    var self = this;

    this.init = function (config) {
        var app = express();
        var router = express.Router();
        router.use(bodyParser.json());
        app.use('/', router);
        var logger = (config ? config.logger : null);
        if (!logger) {
            logger = console;
        }
        console.log("inside init");

        router.get('/generate/pdf/:process_id', function (req, res) {
            console.log(req.params.process_id);
            console.log("inside /");
            /// Api to get JSON DATA 

            var args_to_get_json = {
                headers: { "Content-Type": "application/json", "Authorization": "Basic " + new Buffer("cloud.admin:scenic@4AmaZoN").toString("base64") }

            }
            var url_to_get_json = `https://intprocesseedemo-gse00014270.uscom-east-1.oraclecloud.com/ic/api/process/v1/processes/${req.params.process_id}/dataobjects`;
            client.get(url_to_get_json, args_to_get_json, function (data, response) {
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

                if (projectNumber != undefined) {

                    var options = {
                        url: `https://ucf1-edtm-fa-ext.oracledemos.com/fscmRestApi/resources/11.13.18.05/projects/${projectNumber}`,
                        method: 'GET',
                        headers: {
                            "Authorization": "Basic " + new Buffer("ppm_impl:lf663uDI7").toString("base64"),
                            'Content-Type': 'application/json',
                            'Accept-Encoding': 'gzip'
                        },
                        encoding: null
                    };
                    request(options, function (err, response, body) {

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
                                            headers: { "Content-Type": "application/json", "Authorization": "Basic Y2xvdWQuYWRtaW46c2NlbmljQDRBbWFab04=" },
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
                                        client.post("https://IntProcessEEDemo-gse00014270.uscom-east-1.oraclecloud.com:443/ic/api/integration/v1/flows/rest/PROJTASKATTACH/1.0/projtaskattach ", argsToSendAttachment, function (data, response) {
                                            // parsed response body as js object
                                            console.log(data);
                                            res.send(data);

                                        }).on('error', function (err) {
                                            console.log('something went wrong on the request', err);
                                        });
                                    });
                                }
                            });
                        } else {
                            console.log('\n\nRESPONSE IS NOT GZIPPED!');
                        }
                    });


                }



            }).on('error', function (err) {
                console.log('something went wrong on the request', err);
                res.send('im the home page!');
            });
            // End of api call to get JSON DATA

        });


        return app;
    };

    return this;
}();