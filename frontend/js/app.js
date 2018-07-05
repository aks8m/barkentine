var app = new Vue({
    el: '#app',
    data: {
        name: 'Vue.js',
        uploadFileLabel: 'Choose .csv file to parse',
        selectedCSV: '',
        parsedData: [],
        showUploadProgressBar: false,
        columnCount: '0',
        fileSize: '0 MB',
        rowsParsed: '',
        personaName: '',
        rowsParsed: '0',
        chunkSize: 1024,
        chunkPercentage: '',
        loadProgressStyleValue: 'width:0%',
        chunkCounter: 0,
        isParseBtnDisabled: false,
        isUploadBtnDisabled: true,
    },
    // define methods under the `methods` object
    methods: {
        onFileChange: function (f) {
            var vm = this;

            vm.selectedCSV = f.target.files[0];
            vm.uploadFileLabel = vm.selectedCSV.name;
            vm.personaName = vm.uploadFileLabel.split(".csv")[0];
            vm.fileSize = (vm.selectedCSV.size / 1000000).toFixed(2) + ' MB';
            vm.chunkPercentage = vm.chunkSize / parseInt(vm.selectedCSV.size);

            Papa.parse(vm.selectedCSV, {
                header: true,
                preview: 1,
                complete: function (results, file) {
                    vm.columnCount = Object.keys(results.data[0]).length;
                }
            });
        },
        parseCSV: function () {
            var vm = this;

            if (vm.selectedCSV != '' && vm.personaName != '') {

                vm.showUploadProgressBar = true;

                Papa.parse(vm.selectedCSV, {
                    chunkSize: vm.chunkSize,
                    header: true,
                    worker: true,
                    chunk: function (results, parser) {
                        vm.rowsParsed = (parseInt(vm.rowsParsed) + results.data.length).toString();
                        vm.chunkCounter += 1;
                        vm.loadProgressStyleValue = 'width:' +
                            vm.chunkCounter * vm.chunkPercentage * 100 + '%';
                        vm.parsedData = vm.parsedData.concat(results.data);
                    },
                    complete: function (results, file) {
                        vm.showUploadProgressBar = false;
                        vm.loadProgressStyleValue = 'width:0%';
                        vm.isParseBtnDisabled = true;
                        vm.isUploadBtnDisabled = false;
                    }
                });
            }
        },
        clearUpload: function () {
            var vm = this;

            vm.uploadFileLabel = 'Choose .csv file to parse';
            vm.selectedCSV = '';
            vm.parsedData = [];
            vm.showUploadProgressBar = false;
            vm.columnCount = 0;
            vm.fileSize = '0 MB';
            vm.rowsParsed = '0';
            vm.personaName = '';
            vm.rowsParsed = '0';
            vm.chunkPercentage = '';
            vm.loadProgressStyleValue = 'width:0%';
            vm.chunkCounter = 0;
            vm.isParseBtnDisabled = false;
            vm.isUploadBtnDisabled = true;
        },
        uploadParsedData: function () {
            var vm = this;

            vm.showUploadProgressBar = true;
            vm.loadProgressStyleValue = 'width:100%';

            axios.post('http://localhost:8080/barkentine/upload', {
                    personaName: vm.personaName,
                    parsedData: vm.parsedData
                })
                .then(function (response) {
                    vm.showUploadProgressBar = false;
                    vm.clearUpload();
                })
                .catch(function (error) {});
        }
    }
});
