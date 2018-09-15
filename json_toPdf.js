//Library loading
function json_to_pdf_convert() {
    var json2html = require('node-json2html');
    var fs = require('fs');
    var pdf = require('html-pdf');


    var data = {
        "levels": 0,
        "dataVariableFlatTree": [
            {
                "levels": 0,
                "editable": true,
                "name": "TaskOutcomeDataObject",
                "nodeType": "NODE_TYPE_VARIABLE",
                "scope": "TravelApproval"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "businessUnit",
                "nodeType": "NODE_TYPE_VARIABLE",
                "scope": "TravelApproval",
                "value": "300000046987012"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "personId",
                "nodeType": "NODE_TYPE_VARIABLE",
                "scope": "TravelApproval",
                "value": "300000047669136"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "managerID",
                "nodeType": "NODE_TYPE_VARIABLE",
                "scope": "TravelApproval",
                "value": "300000049043467"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "expenseReportID_ERP",
                "nodeType": "NODE_TYPE_VARIABLE",
                "scope": "TravelApproval",
                "value": "0"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "travelRequestWebFormDataObject",
                "nodeType": "NODE_TYPE_VARIABLE",
                "scope": "TravelApproval",
                "value": "{\"creator\":null,\"destination\":\"Madrid\",\"email\":null,\"employeeUserName\":null,\"endDateOfTravel\":\"2018-09-12\",\"estimatedCostOfTravel\":1200.0,\"firstName\":\"Robert\",\"isCarNeeded\":true,\"isHotelNeeded\":true,\"justification\":\"Customer Meeting\",\"lastName\":\"Jackman\",\"managerUserName\":\"henry.jones_ecnn@oracledemos.com\",\"noOfPerdDays\":4.0,\"startDateOfTravel\":\"2018-09-08\"}"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "userName",
                "nodeType": "NODE_TYPE_VARIABLE",
                "scope": "TravelApproval"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "managerUserName",
                "nodeType": "NODE_TYPE_VARIABLE",
                "scope": "TravelApproval",
                "value": "henry.jones_ecnn@oracledemos.com"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "assignmentId",
                "nodeType": "NODE_TYPE_VARIABLE",
                "scope": "TravelApproval",
                "value": "300000049043653"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "ownerType",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "ROLE"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "processDN",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "oracleinternalpcs/Pre_Travel_Authorization_App!1.0*/TravelApproval"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "dueDate",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "dueDateExtend",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "title",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "Instance #911 of Travel Approval"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "expirationExtend",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "instanceId",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "bpmn:911"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "caseNumber",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "ecid",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "fef0d556-b1d6-4542-b03c-4c9ccd2505bb-00e19337"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "caseId",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "action",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "componentName",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "TravelApproval"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "organizationalUnit",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "owner",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "Pre Travel Authorization App.ProcessOwner"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "componentType",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "BPMN"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "creator",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "robert.jackman_ecnn@oracledemos.com"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "modifyDate",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "2018-09-06T14:26:25.873000Z"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "conversationId",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "urn:d3b6e7bb-b1e0-11e8-b735-c6b03cebbcbb"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "compositeRevision",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "1.0"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "activityName",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "Approve Request"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "compositeName",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "Pre_Travel_Authorization_App"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "reviewer",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "Pre Travel Authorization App.ProcessReviewer"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "instanceNumber",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "911"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "priority",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "5"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "creationDate",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "2018-09-06T14:26:21.850000Z"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "compositeInstanceId",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "170"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "compositeLabel",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "soa_1c556a30-37aa-4617-83b8-b8f93fb631a2"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "compositeDN",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "oracleinternalpcs/Pre_Travel_Authorization_App!1.0*soa_1c556a30-37aa-4617-83b8-b8f93fb631a2"
            },
            {
                "levels": 0,
                "editable": false,
                "name": "caseIdKey",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "reviewerType",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval",
                "value": "ROLE"
            },
            {
                "levels": 0,
                "editable": true,
                "name": "expiration",
                "nodeType": "NODE_TYPE_INSTANCE_ATTRIBUTE",
                "scope": "TravelApproval"
            }
        ],
        "links": [
            {
                "length": 0,
                "rel": "canonical",
                "href": "https://IntProcessEEDemo-gse00014270.uscom-east-1.oraclecloud.com:443/ic/api/process/v1/processes/911/dataobjects"
            },
            {
                "length": 0,
                "rel": "parent",
                "href": "https://IntProcessEEDemo-gse00014270.uscom-east-1.oraclecloud.com:443/ic/api/process/v1/processes/911"
            },
            {
                "length": 0,
                "rel": "self",
                "href": "https://IntProcessEEDemo-gse00014270.uscom-east-1.oraclecloud.com:443/ic/api/process/v1/processes/911/dataobjects"
            }
        ]
    }


    var jsonData = JSON.stringify(data);
    jsonData = JSON.parse(jsonData);

    var filterObjArr = jsonData.dataVariableFlatTree.filter(obj => obj.name == 'travelRequestWebFormDataObject');

    var filterObjData = JSON.stringify(filterObjArr[0].value);
    var filterObj = JSON.parse(filterObjData);

    var transform = {
        '<>': 'div', 'class': 'card', 'html': [
            { '<>': 'h3', 'text': 'Travel Request Web Form Data' },
            { '<>': 'h4', 'text': 'Creator: ${creator}' },
            { '<>': 'h4', 'text': 'Destination: ${destination}' },
            { '<>': 'h4', 'text': 'Email: ${email}' },
            { '<>': 'h4', 'text': 'EmployeeUserName: ${employeeUserName}' },
            { '<>': 'h4', 'text': 'EndDateOfTravel: ${endDateOfTravel}' },
            { '<>': 'h4', 'text': 'EstimatedCostOfTravel: ${estimatedCostOfTravel}' },
            { '<>': 'h4', 'text': 'FirstName: ${firstName}' },
            { '<>': 'h4', 'text': 'IsCarNeeded: ${isCarNeeded}' },
            { '<>': 'h4', 'text': 'IsHotelNeeded: ${isHotelNeeded}' },
            { '<>': 'h4', 'text': 'Justification: ${justification}' },
            { '<>': 'h4', 'text': 'LastName: ${lastName}' },
            { '<>': 'h4', 'text': 'ManagerUserName: ${managerUserName}' },
            { '<>': 'h4', 'text': 'NoOfPerdDays: ${noOfPerdDays}' },
            { '<>': 'h4', 'text': 'StartDateOfTravel: ${startDateOfTravel}' }

        ]
    };

    console.log(transform);

    var html = json2html.transform(filterObj, transform);
    console.log(html);

    var options = { format: 'Letter' };

    pdf.create(html, options).toFile('myWebPDFFILE.pdf', function (err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
    });

    var pdf_file_name = 'myWebPDFFILE';
    return pdf_file_name;
}

json_to_pdf_convert();

//Temp CODE
var fs = require('fs');
var Client = require('node-rest-client').Client;

var client = new Client();
// var readStream = fs.createReadStream('myWebPDFFILE.pdf');
// readStream.pipe(writableStream);
var file_data;
fs.readFile('myWebPDFFILE.pdf', (err, read_data) => {
    if (err) throw err;
    console.log(read_data.toString('utf8'));
    file_data = read_data;
    var args = {
        headers: { "Content-Type": "application/json", "Authorization": "Basic Y2xvdWQuYWRtaW46c2NlbmljQDRBbWFab04=" },
        data: {
            "Header": null, "Body": {
                "uploadAttachment": {
                    "entityName": "PJF_PROJ_ELEMENTS",
                    "categoryName": "PROJECT_PLAN",
                    "allowDuplicate": "yes",
                    "attachmentRows": {
                        "UserKeyA": "Data Centre Support",
                        "UserKeyB": "1.0",
                        "UserKeyC": null,
                        "UserKeyD": null,
                        "UserKeyE": null,
                        "AttachmentType": "FILE",
                        "Title": "ProjectFile12.pdf",
                        "Content": file_data.toString('base64')
                        //"Content": "eyJhRSI6bnVsbCwiYW9Ub1IiOiI3LiBBcHByb3ZhbCBvZiBUZXJtcyBvZiBSZWZlcmVuY2UiLCJiTiI6IjIuIEJ1c2luZXNzIE5lZWRzLCBTY29wZSBhbmQgT2JqZWN0aXZlcyIsImJTTyI6bnVsbCwiYlQiOm51bGwsImJVQ0YiOm51bGwsImJhY2tncm91bmQiOm51bGwsImJ1c2luZXNzTGVhZCI6bnVsbCwiYnVzaW5lc3NOZWVkcyI6bnVsbCwiYnVzaW5lc3Njb25maXJtYXRpb24iOm51bGwsImNNVSI6bnVsbCwiY29udHJhY3RWYWx1ZSI6bnVsbCwiY3JpdGljYWxNYXRlcmlhbENvbnRyYWN0IjpudWxsLCJjdXN0b21lcnNOZWVkc2FuZEJlbmVmaXRzIjpudWxsLCJjeWJlckNyaXRpY2FsIjpudWxsLCJlQ1AiOiJFeGlzdGluZyBDb250cmFjdCBQb3NpdGlvbiIsImVTIjoiMS4gRXhlY3V0aXZlIFN1bW1hcnkiLCJpU0IiOm51bGwsImlUQSI6bnVsbCwiaW1hZ2UiOiJodHRwczovL2NkbjMuY29tcHV0ZXJ3b3JsZHVrLmNvbS9jbXNkYXRhL2ZlYXR1cmVzLzM2NjQ0MDIvbGxveWRzLWJhbmstbG9nby0yLWZlYi0yMDEzX3RodW1iMTIwMF8xNi05LnBuZyIsImluaXRpYXRpdmVUaXRsZSI6bnVsbCwiaW5pdGlhdGl2ZVRyZWF0bWVudCI6bnVsbCwib0JJIjpudWxsLCJvb0dTQSI6bnVsbCwicFJOIjpudWxsLCJwU08iOm51bGwsInByb2plY3RudW1iZXIiOiIzMDAwMDAxMzY0NTc4NDkiLCJyQk8iOm51bGwsInJlcGVhdGFibGVTZWN0aW9uIjpbXSwicmVwZWF0YWJsZVNlY3Rpb24xIjpbeyJkYXRlIjpudWxsLCJldmlkZW5jZSI6bnVsbCwibGFiZWwiOm51bGwsIm5hbWUiOiJCcmlhbiBKb3NlcGgiLCJyb2xlIjoiQWNjb3VudGFibGUgRXhlY3V0aXZlIn1dLCJzTSI6bnVsbCwic09JUiI6bnVsbCwic1NUIjpudWxsLCJzb0dTQSI6bnVsbCwic291cmNpbmdDYXRlZ29yeSI6IkNvbXB1dGVyIFN1cHBsaWVzIiwic291cmNpbmdMZWFkIjpudWxsLCJzb3VyY2luZ1N1YkNhdGVnb3J5IjoiTGFwdG9wcyIsInNwZW5kUHJvZmlsZSI6bnVsbCwidENTIjpudWxsLCJ0ZXh0QXJlYSI6bnVsbCwidGV4dEFyZWExIjpudWxsLCJ2b2x1bWVzIjpudWxsfQ==" }
                    }
                }
            }
        }
    }
    client.post("https://IntProcessEEDemo-gse00014270.uscom-east-1.oraclecloud.com:443/ic/api/integration/v1/flows/rest/PROJTASKATTACH/1.0/projtaskattach ", args, function (data, response) {
        // parsed response body as js object
        console.log(data);

    }).on('error', function (err) {
        console.log('something went wrong on the request', err);
    });
});


// Working api



// End of Working api

// var fs = require('fs');
// var sftp = require('sftp-node');

// var options = {
//     host: '129.157.248.101',
//     port: '22',
//     username: 'opc',
//     privateKey: './genkey.ppk'
//   };

//   sftp.upload(options, '/', './myWebPDFFILE.pdf', function(err,res){
//     if(err) console.log('err: '+err);
//     else{
//       console.log('res: '+res);
//     }
//   });