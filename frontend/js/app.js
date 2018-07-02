var app = new Vue({
    el: '#app',
    data: {
        name: 'Vue.js',
        uploadFileLabel: 'Choose .csv file to parse',
        selectedCSV: '',
        parsedData: '',
        showUploadProgressBar: false
    },
    // define methods under the `methods` object
    methods: {
        onFileChange: function (f) {
            var vm = this;

            vm.selectedCSV = f.target.files[0];
            vm.uploadFileLabel = vm.selectedCSV.name;
        },
        parseCSV: function () {
            var vm = this;

            vm.showUploadProgressBar = true;
            Papa.parse(vm.selectedCSV, {
                delimiter: "", // auto-detect
                newline: "", // auto-detect
                quoteChar: '"',
                escapeChar: '"',
                header: true,
                trimHeaders: false,
                dynamicTyping: false,
                preview: 0,
                encoding: "",
                worker: false,
                comments: false,
                step: undefined,
                complete: function (results, file) {
                    vm.parsedData = results;
                    vm.showUploadProgressBar = false;
                },
                error: undefined,
                download: false,
                skipEmptyLines: false,
                chunk: undefined,
                fastMode: undefined,
                beforeFirstChunk: undefined,
                withCredentials: undefined,
                transform: undefined
            });
        }
    }
});
