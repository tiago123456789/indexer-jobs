'use strict';

function getUrl(path) {
    return location.origin + "/job/enterprises-greather-quantity-job";
}

function getEnterprisesGreatherQuantityJob(callback) {
    $.get(getUrl(), callback);
}

function builderGraphicEnterprisesGreatherQuantityJob() {
    var ctx = $('#myChart');
    getEnterprisesGreatherQuantityJob(function (data) {
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.datas,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                    borderWidth: 1
                }]
            }
        });
    });
}

builderGraphicEnterprisesGreatherQuantityJob();