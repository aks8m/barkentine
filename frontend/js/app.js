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
        isCanceled: false,
        isParsing: false,
        statusInProgress: false,
        statusSuccess: false,
        statusError: false,
        statusBlank: true,
        lastRefreshTime: 'N/A',
        personaCount: 0,
        egoCount: 0,
        alterCount: 0,
        relCount: 0,
        sharedAlterCount: 0,
        sankeyDataNone: {
            "nodes": [
                {
                    "node": 0,
                    "name": "2289"
                },
                {
                    "node": 1,
                    "name": "71.6"
                }
],
            "links": [
                {
                    "source": 0,
                    "target": 1,
                    "value": 1
                }
]
        },
        sankeyDataLoosely: {
            "nodes": [
                {
                    "node": 0,
                    "name": "2289"
                },
                {
                    "node": 1,
                    "name": "71.6"
                },
                {
                    "node": 2,
                    "name": "0"
                },
                {
                    "node": 3,
                    "name": "1"
                },
                {
                    "node": 4,
                    "name": "8"
                },
                {
                    "node": 5,
                    "name": "11"
                },
                {
                    "node": 6,
                    "name": "60.8"
                },
                {
                    "node": 7,
                    "name": "66"
                }

],
            "links": [
                {
                    "source": 0,
                    "target": 2,
                    "value": 81
                },
                {
                    "source": 2,
                    "target": 1,
                    "value": 81
                },
                {
                    "source": 0,
                    "target": 3,
                    "value": 2
                },
                {
                    "source": 3,
                    "target": 1,
                    "value": 2
                },
                {
                    "source": 0,
                    "target": 4,
                    "value": 8
                },
                {
                    "source": 4,
                    "target": 1,
                    "value": 8
                },
                {
                    "source": 0,
                    "target": 5,
                    "value": 6
                },
                {
                    "source": 5,
                    "target": 1,
                    "value": 6
                },
                {
                    "source": 0,
                    "target": 6,
                    "value": 1
                },
                {
                    "source": 6,
                    "target": 1,
                    "value": 1
                },
                {
                    "source": 0,
                    "target": 7,
                    "value": 2
                },
                {
                    "source": 7,
                    "target": 1,
                    "value": 2
                }
]
        },
        sankeyDataHighly: {
            "nodes": [
                {
                    "node": 0,
                    "name": "2289"
                },
                {
                    "node": 1,
                    "name": "71.6"
                },
                {
                    "node": 2,
                    "name": "2.1"
                },
                {
                    "node": 3,
                    "name": "37"
                },
                {
                    "node": 4,
                    "name": "19"
                },
                {
                    "node": 5,
                    "name": "GA"
                },
                {
                    "node": 6,
                    "name": "13"
                },
                {
                    "node": 7,
                    "name": "Georgia"
                },
                {
                    "node": 8,
                    "name": "1.1"
                },
                {
                    "node": 9,
                    "name": "0.2"
                },
                {
                    "node": 10,
                    "name": "frontier status, population size, poverty, age"
                },
                {
                    "node": 11,
                    "name": "36"
                },
                {
                    "node": 12,
                    "name": "0.4"
                },
                {
                    "node": 13,
                    "name": "0.5"
                },
                {
                    "node": 14,
                    "name": "2.3"
                },
                {
                    "node": 15,
                    "name": "11"
                },
                {
                    "node": 16,
                    "name": "17"
                },
                {
                    "node": 17,
                    "name": "23"
                },
                {
                    "node": 18,
                    "name": "30"
                },
                {
                    "node": 19,
                    "name": "22"
                },
                {
                    "node": 20,
                    "name": "63.8"
                }

],
            "links": [
                {
                    "source": 0,
                    "target": 2,
                    "value": 100
                },
                {
                    "source": 2,
                    "target": 3,
                    "value": 4
                },
                {
                    "source": 3,
                    "target": 1,
                    "value": 4
                },
                {
                    "source": 2,
                    "target": 4,
                    "value": 3
                },
                {
                    "source": 4,
                    "target": 1,
                    "value": 3
                },
                {
                    "source": 2,
                    "target": 5,
                    "value": 6
                },
                {
                    "source": 5,
                    "target": 1,
                    "value": 6
                },
                {
                    "source": 2,
                    "target": 6,
                    "value": 8
                },
                {
                    "source": 6,
                    "target": 1,
                    "value": 8
                },
                {
                    "source": 2,
                    "target": 7,
                    "value": 6
                },
                {
                    "source": 7,
                    "target": 1,
                    "value": 6
                },
                {
                    "source": 2,
                    "target": 8,
                    "value": 2
                },
                {
                    "source": 8,
                    "target": 1,
                    "value": 2
                },
                {
                    "source": 2,
                    "target": 9,
                    "value": 9
                },
                {
                    "source": 9,
                    "target": 1,
                    "value": 9
                },
                {
                    "source": 2,
                    "target": 10,
                    "value": 1
                },
                {
                    "source": 10,
                    "target": 1,
                    "value": 1
                },
                {
                    "source": 2,
                    "target": 11,
                    "value": 1
                },
                {
                    "source": 11,
                    "target": 1,
                    "value": 1
                },
                {
                    "source": 2,
                    "target": 12,
                    "value": 2
                },
                {
                    "source": 12,
                    "target": 1,
                    "value": 2
                },
                {
                    "source": 2,
                    "target": 13,
                    "value": 2
                },
                {
                    "source": 13,
                    "target": 1,
                    "value": 2
                },
                {
                    "source": 2,
                    "target": 14,
                    "value": 1
                },
                {
                    "source": 14,
                    "target": 1,
                    "value": 1
                },
                {
                    "source": 2,
                    "target": 15,
                    "value": 8
                },
                {
                    "source": 15,
                    "target": 1,
                    "value": 8
                },
                {
                    "source": 2,
                    "target": 16,
                    "value": 5
                },
                {
                    "source": 16,
                    "target": 1,
                    "value": 5
                },
                {
                    "source": 2,
                    "target": 17,
                    "value": 6
                },
                {
                    "source": 17,
                    "target": 1,
                    "value": 6
                },
                {
                    "source": 2,
                    "target": 18,
                    "value": 2
                },
                {
                    "source": 18,
                    "target": 1,
                    "value": 2
                },
                {
                    "source": 2,
                    "target": 19,
                    "value": 5
                },
                {
                    "source": 19,
                    "target": 1,
                    "value": 5
                },
                {
                    "source": 2,
                    "target": 20,
                    "value": 2
                },
                {
                    "source": 20,
                    "target": 1,
                    "value": 2
                }
]
        }
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
        parse: function () {
            var vm = this;

            vm.isParsing = true;

            if (vm.selectedCSV != '' && vm.personaName != '') {

                vm.showUploadProgressBar = true;
                vm.handleStatus(1);

                Papa.parse(vm.selectedCSV, {
                    chunkSize: vm.chunkSize,
                    header: true,
                    worker: true,
                    chunk: function (results, parser) {
                        if (!vm.isCanceled) {
                            vm.rowsParsed = (parseInt(vm.rowsParsed) + results.data.length).toString();
                            vm.chunkCounter += 1;
                            vm.loadProgressStyleValue = 'width:' +
                                vm.chunkCounter * vm.chunkPercentage * 100 + '%';
                            vm.parsedData = vm.parsedData.concat(results.data);
                        } else {
                            parser.abort();
                            vm.clear();
                            vm.isParsing = false;
                            vm.isCanceled = false;
                        }
                    },
                    complete: function (results, file) {
                        vm.loadProgressStyleValue = 'width:100%';
                        vm.isParseBtnDisabled = true;
                        vm.isUploadBtnDisabled = false;
                        vm.isParsing = false;
                        vm.handleStatus(2);
                        vm.showUploadProgressBar = false;
                    }
                });
            }
        },
        clear: function () {
            var vm = this;

            if (vm.isParsing)
                vm.isCanceled = true;

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
            vm.handleStatus(0);
        },
        upload: function () {
            var vm = this;

            vm.showUploadProgressBar = true;
            vm.loadProgressStyleValue = 'width:100%';
            vm.isUploadBtnDisabled = true;
            vm.handleStatus(1);

            axios.post('http://localhost:8080/barkentine', {
                    personaName: vm.personaName,
                    parsedData: vm.parsedData
                })
                .then(function (response) {
                    vm.isParseBtnDisabled = true;
                    vm.isUploadBtnDisabled = true;
                    vm.handleStatus(2);
                    vm.showUploadProgressBar = false;
                })
                .catch(function (error) {
                    vm.isParseBtnDisabled = true;
                    vm.isUploadBtnDisabled = true;
                    vm.handleStatus(3);
                    vm.showUploadProgressBar = false;
                });
        },
        handleStatus: function (status) {
            var vm = this;
            //0 - blank, 1-progress, 2-success, 3-danger
            if (status == 0) {
                vm.statusInProgress = false;
                vm.statusSuccess = false;
                vm.statusError = false;
                vm.statusBlank = true;
            } else if (status == 1) {
                vm.statusInProgress = true;
                vm.statusSuccess = false;
                vm.statusError = false;
                vm.statusBlank = false;
            } else if (status == 2) {
                vm.statusInProgress = false;
                vm.statusSuccess = true;
                vm.statusError = false;
                vm.statusBlank = false;
            } else if (status == 3) {
                vm.statusInProgress = false;
                vm.statusSuccess = false;
                vm.statusError = true;
                vm.statusBlank = false;
            }
        },
        exploreRefresh: function () {
            var vm = this;

            axios.get('http://localhost:8080/barkentine/stats')
                .then(function (response) {
                    vm.alterCount = response.data["alterCount"];
                    vm.egoCount = response.data["egoCount"];
                    vm.lastRefreshTime = response.data["lastRefreshedTime"];
                    vm.personaCount = response.data["personaCount"];
                    vm.relCount = response.data["relationshipCount"];
                    vm.sharedAlterCount = response.data["sharedAlterCount"];
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        },
        generateSankey: function () {



            var vm = this;
            var units = "Widgets";

            var margin = {
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10
                },
                width = 1000,
                height = 800;

            var formatNumber = d3.format(",.0f"), // zero decimal places
                format = function (d) {
                    return formatNumber(d) + " " + units;
                },
                color = d3.scale.category20();

            // append the svg canvas to the page
            var svg = d3.select("#diagram").append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")


            // Set the sankey diagram properties
            var sankey = d3.sankey()
                .nodeWidth(36)
                .nodePadding(40)
                .size([width, height]);

            var path = sankey.link();

            var graph = vm.sankeyDataLoosely;

            sankey
                .nodes(graph.nodes)
                .links(graph.links)
                .layout(100);

            // add in the links
            var link = svg.append("g").selectAll(".link")
                .data(graph.links)
                .enter().append("path")
                .attr("class", "link")
                .attr("d", path)
                .style("stroke-width", function (d) {
                    return Math.max(1, d.dy);
                })
                .sort(function (a, b) {
                    return b.dy - a.dy;
                });

            // add the link titles
            link.append("title")
                .text(function (d) {
                    return d.source.name + " → " +
                        d.target.name + "\n" + format(d.value);
                });

            // add in the nodes
            var node = svg.append("g").selectAll(".node")
                .data(graph.nodes)
                .enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d) {
                    return "translate(" + d.x + "," + d.y + ")";
                })
                .call(d3.behavior.drag()
                    .origin(function (d) {
                        return d;
                    })
                    .on("dragstart", function () {
                        this.parentNode.appendChild(this);
                    })
                    .on("drag", dragmove));

            // add the rectangles for the nodes
            node.append("rect")
                .attr("height", function (d) {
                    return d.dy;
                })
                .attr("width", sankey.nodeWidth())
                .style("fill", function (d) {
                    return d.color = color(d.name.replace(/ .*/, ""));
                })
                .style("stroke", function (d) {
                    return d3.rgb(d.color).darker(2);
                })
                .append("title")
                .text(function (d) {
                    return d.name + "\n" + format(d.value);
                });

            // add in the title for the nodes
            node.append("text")
                .attr("x", -6)
                .attr("y", function (d) {
                    return d.dy / 2;
                })
                .attr("dy", ".35em")
                .attr("text-anchor", "end")
                .attr("transform", null)
                .text(function (d) {
                    return d.name;
                })
                .filter(function (d) {
                    return d.x < width / 2;
                })
                .attr("x", 6 + sankey.nodeWidth())
                .attr("text-anchor", "start");

            // the function for moving the nodes
            function dragmove(d) {
                d3.select(this).attr("transform",
                    "translate(" + d.x + "," + (
                        d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
                    ) + ")");
                sankey.relayout();
                link.attr("d", path);
            }


        }
    }
});
