define(["require", "exports", "../../../src/file-manager/base/file-manager", "../../../src/file-manager/layout/index", "../../../src/file-manager/actions/toolbar"], function (require, exports, file_manager_1, index_1, toolbar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var hostUrl = 'https://ng2jq.syncfusion.com/ej2services/';
    //let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    file_manager_1.FileManager.Inject(toolbar_1.Toolbar, index_1.NavigationPane);
    var feObj = new file_manager_1.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download',
            getImageUrl: hostUrl + 'api/FileManager/GetImage'
        },
        fileOpen: function (args) {
            // addEventLog('The ' + (args.fileDetails as any)["name"] + (<any>args.fileDetails).isFile ? ' file' : ' folder') + ' will be opened.');
        },
        beforeSend: function (args) {
            addEventLog('beforeSend');
        },
        fileSelect: function (args) {
            addEventLog(args.action + 'ed: ' + args.fileDetails["name"]);
        },
        menuClick: function (args) {
            addEventLog('"' + args.item.text + '" menu item is clicked');
        },
        menuOpen: function (args) {
            addEventLog('context menu will be opened');
        },
        success: function (args) {
            addEventLog('Success');
        },
        failure: function (args) {
            addEventLog('Service failure');
        },
        toolbarClick: function (args) {
            if (args.item && args.item.text == "Custom tool") {
                window.alert("Custom tool is clicked");
            }
            addEventLog(args.fileDetails["name"] + 'toolbar item is clicked');
        }
    });
    feObj.appendTo('#file');
    function addEventLog(text) {
        var clog = document.getElementById('events');
        clog.innerHTML = text + '\n' + clog.innerHTML;
    }
});
