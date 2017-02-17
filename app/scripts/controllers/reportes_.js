'use strict';

/**
 * @ngdoc function
 * @name facturacionApp.controller:ReportesCtrl
 * @description
 * # ReportesCtrl
 * Controller of the facturacionApp
 */
var app =angular.module('facturacionApp');
  app.controller('ReportesCtrl', function ($scope,$rootScope,Proformas_Services,Reportes_Services,$window,$mdDialog,LxNotificationService,$localStorage ) {
		
$scope.ListMeses=[
{id:0,nombre:"TODOS"},
{id:1,nombre:"ENERO"},
{id:2,nombre:"FEBRERO"},
{id:3,nombre:"MARZO"},
{id:4,nombre:"ABRIL"},
{id:5,nombre:"MAYO"},
{id:6,nombre:"JUNIO"},
{id:7,nombre:"JULIO"},
{id:8,nombre:"AGOSTO"},
{id:9,nombre:"SEPTIEMBRE"},
{id:10,nombre:"OCTUBRE"},
{id:11,nombre:"NOVIEMBRE"},
{id:12,nombre:"DICIEMBRE"}
];

//Productos Mas Vendidos
  
function succes_mas_vendidos(result){
  $scope.labels = result.labels;
  $scope.data = result.sumas;
}
Reportes_Services.Productos().Mas_vendidos().send({},succes_mas_vendidos).$promise.then(function(){},function(error){

			if (error.status==401) {
				LxNotificationService.error('Su sesión ha caducado');
                $localStorage.$reset();
			}

			if (error.status==500) {
				LxNotificationService.error('Ha ocurrido un error ');
			}
			

});

//VENTAS POR MES 

function selectCallback(_newValue, _oldValue) {
            console.log('Old value: ', _oldValue);
            console.log('New value: ', _newValue);
            }

var bookmark;
$scope.ModelMes = {
                    selectedMes: $scope.ListMeses[0]
                  };

$scope.$watch('ModelMes.selectedMes', function(newValue, oldValue) {
        $scope.get_ventas_x_mes();
    });

$scope.series_x_mes=['Nro. Ventas'];
function succes_x_mes(result){
  $scope.labels_x_mes = result.labels;
  $scope.data_x_mes = result.sumas;

// angular-chart.js converts hex colors to objects that look like the objects in $scope.colors below. However, if we look angular-chart.js (not the minified file), it is missing getColor() on line 239 of angular-chart.js for rgba colors. As a result, rgba values submitted as "rgba(number, number, number, number)" are not converted into objects like the hex colors are. Because of this, the rest of the functions fail to run properly, and you get a weird chart.
var chart = new Chart(angular.element(document.querySelector('#line')), {
    type : 'line',
    data : {
        labels : $scope.labels_x_mes,
        datasets : [{
                label : 'Nro ventas',
                data : $scope.data_x_mes,
                backgroundColor : 'rgba(0, 53, 138, 0.7)',
                borderColor : 'rgba(125, 216, 236, 1)',
                borderWidth : 1
            }
        ]
    },
    options : {
        responsive : true,
        scales : {
            yAxes : [{
                    ticks : {
                        beginAtZero : true
                    }
                }
            ]
        },
        title: {
            position:'left',
            display: true,
            text: 'NRO DE VENTAS'
        }
    }
});

}
$scope.get_ventas_x_mes=function(){

    Reportes_Services.Facturacion().ventas_x_mes().send({mes:$scope.ModelMes.selectedMes},succes_x_mes).$promise.then(function(){},function(error){

            if (error.status==401) {
                LxNotificationService.error('Su sesión ha caducado');
                $localStorage.$reset();
            }

            if (error.status==500) {
                LxNotificationService.error('Ha ocurrido un error ');
            }

        });

}




	  	});

