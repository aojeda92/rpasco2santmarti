var wms_layers = [];

var lyr_PNOA_2019_BAL_5064410_ORTCLAIRC_clasificado_todos_pte_DEM_0 = new ol.layer.Image({
                            opacity: 1,
                            title: 'PNOA_2019_BAL_506-4410_ORT-CLA-IRC_clasificado_todos_pte_DEM',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/PNOA_2019_BAL_5064410_ORTCLAIRC_clasificado_todos_pte_DEM_0.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [341762.973396, 4840099.699029, 344367.195659, 4842719.491171]
                            })
                        });
var lyr_PNOA_2019_BAL_5064410_ORTCLARGB_clasificado_todos_pte_DEM_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'PNOA_2019_BAL_506-4410_ORT-CLA-RGB_clasificado_todos_pte_DEM',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/PNOA_2019_BAL_5064410_ORTCLARGB_clasificado_todos_pte_DEM_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [341762.973396, 4840099.699029, 344367.195659, 4842719.491171]
                            })
                        });
var lyr_PNOA_2019_BAL_5084410_ORTCLAIRC_clasificado_todos_pte_DEM_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'PNOA_2019_BAL_508-4410_ORT-CLA-IRC_clasificado_todos_pte_DEM',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/PNOA_2019_BAL_5084410_ORTCLAIRC_clasificado_todos_pte_DEM_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [344364.469523, 4840095.323080, 346969.373589, 4842718.407476]
                            })
                        });
var lyr_PNOA_2019_BAL_5084410_ORTCLARGB_clasificado_todos_pte_DEM_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'PNOA_2019_BAL_508-4410_ORT-CLA-RGB_clasificado_todos_pte_DEM',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/PNOA_2019_BAL_5084410_ORTCLARGB_clasificado_todos_pte_DEM_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [344364.469523, 4840095.323080, 346969.373589, 4842718.407476]
                            })
                        });
var lyr_PNOA_2019_BAL_5064412_ORTCLAIRC_clasificado_todos_pte_DEM_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'PNOA_2019_BAL_506-4412_ORT-CLA-IRC_clasificado_todos_pte_DEM',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/PNOA_2019_BAL_5064412_ORTCLAIRC_clasificado_todos_pte_DEM_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [341763.711811, 4842711.876184, 344369.917447, 4845332.350265]
                            })
                        });
var lyr_PNOA_2019_BAL_5064412_ORTCLARGB_clasificado_todos_pte_DEM_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'PNOA_2019_BAL_506-4412_ORT-CLA-RGB_clasificado_todos_pte_DEM',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/PNOA_2019_BAL_5064412_ORTCLARGB_clasificado_todos_pte_DEM_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [341763.711811, 4842711.876184, 344369.917447, 4845332.350265]
                            })
                        });
var lyr_PNOA_2019_BAL_5084412_ORTCLAIRC_clasificado_todos_pte_DEM_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'PNOA_2019_BAL_508-4412_ORT-CLA-IRC_clasificado_todos_pte_DEM',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/PNOA_2019_BAL_5084412_ORTCLAIRC_clasificado_todos_pte_DEM_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [344367.190218, 4842708.803397, 346972.774119, 4845329.957141]
                            })
                        });
var lyr_PNOA_2019_BAL_5084412_ORTCLARGB_clasificado_todos_pte_DEM_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'PNOA_2019_BAL_508-4412_ORT-CLA-RGB_clasificado_todos_pte_DEM',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/PNOA_2019_BAL_5084412_ORTCLARGB_clasificado_todos_pte_DEM_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [344367.190218, 4842708.803397, 346972.774119, 4845329.957141]
                            })
                        });
var lyr_GOIB_Ortofoto_Expedita_2023_IB_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ideib.caib.es/geoserveis/services/imatges/GOIB_Ortofoto_Expedita_2023_IB/MapServer/WMSServer",
                              attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'GOIB_Ortofoto_Expedita_2023_IB',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GOIB_Ortofoto_Expedita_2023_IB_8, 0]);
var lyr_ELEMLINTEXTOSLIMITESEJESTXTMASAMASATXTPARCELAPARCELATXTSUBPARCESUBPARCETXTCONSTRUCONSTRUCatastro_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'ELEMLIN/TEXTOS/LIMITES/EJES/TXTMASA/MASA/TXTPARCELA/PARCELA/TXTSUBPARCE/SUBPARCE/TXTCONSTRU/CONSTRU/Catastro',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ELEMLINTEXTOSLIMITESEJESTXTMASAMASATXTPARCELAPARCELATXTSUBPARCESUBPARCETXTCONSTRUCONSTRUCatastro_9, 0]);
var format_Montes_BALEARES_10 = new ol.format.GeoJSON();
var features_Montes_BALEARES_10 = format_Montes_BALEARES_10.readFeatures(json_Montes_BALEARES_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Montes_BALEARES_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Montes_BALEARES_10.addFeatures(features_Montes_BALEARES_10);
var lyr_Montes_BALEARES_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Montes_BALEARES_10, 
                style: style_Montes_BALEARES_10,
                popuplayertitle: 'Montes_BALEARES',
                interactive: true,
                title: '<img src="styles/legend/Montes_BALEARES_10.png" /> Montes_BALEARES'
            });
var lyr_Metricas_p90_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Metricas_p90',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Metricas_p90_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [341756.461502, 4840086.181660, 346972.787734, 4845342.807157]
                            })
                        });
var format_INVENTARIO_ALCUDIA_12 = new ol.format.GeoJSON();
var features_INVENTARIO_ALCUDIA_12 = format_INVENTARIO_ALCUDIA_12.readFeatures(json_INVENTARIO_ALCUDIA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INVENTARIO_ALCUDIA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INVENTARIO_ALCUDIA_12.addFeatures(features_INVENTARIO_ALCUDIA_12);
var lyr_INVENTARIO_ALCUDIA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INVENTARIO_ALCUDIA_12, 
                style: style_INVENTARIO_ALCUDIA_12,
                popuplayertitle: 'INVENTARIO_ALCUDIA',
                interactive: true,
    title: 'INVENTARIO_ALCUDIA<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_0.png" /> 1<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_1.png" /> 2<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_2.png" /> 3<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_3.png" /> 4<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_4.png" /> 5<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_5.png" /> 6<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_6.png" /> 7<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_7.png" /> 8<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_8.png" /> 9<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_9.png" /> 10<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_10.png" /> 11<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_11.png" /> 12<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_12.png" /> 13<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_13.png" /> 14<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_14.png" /> 15<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_15.png" /> 16<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_16.png" /> 17<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_17.png" /> 18<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_18.png" /> 19<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_19.png" /> 20<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_20.png" /> 21<br />\
    <img src="styles/legend/INVENTARIO_ALCUDIA_12_21.png" /> <br />'
        });

lyr_PNOA_2019_BAL_5064410_ORTCLAIRC_clasificado_todos_pte_DEM_0.setVisible(true);lyr_PNOA_2019_BAL_5064410_ORTCLARGB_clasificado_todos_pte_DEM_1.setVisible(true);lyr_PNOA_2019_BAL_5084410_ORTCLAIRC_clasificado_todos_pte_DEM_2.setVisible(true);lyr_PNOA_2019_BAL_5084410_ORTCLARGB_clasificado_todos_pte_DEM_3.setVisible(true);lyr_PNOA_2019_BAL_5064412_ORTCLAIRC_clasificado_todos_pte_DEM_4.setVisible(true);lyr_PNOA_2019_BAL_5064412_ORTCLARGB_clasificado_todos_pte_DEM_5.setVisible(true);lyr_PNOA_2019_BAL_5084412_ORTCLAIRC_clasificado_todos_pte_DEM_6.setVisible(true);lyr_PNOA_2019_BAL_5084412_ORTCLARGB_clasificado_todos_pte_DEM_7.setVisible(true);lyr_GOIB_Ortofoto_Expedita_2023_IB_8.setVisible(true);lyr_ELEMLINTEXTOSLIMITESEJESTXTMASAMASATXTPARCELAPARCELATXTSUBPARCESUBPARCETXTCONSTRUCONSTRUCatastro_9.setVisible(true);lyr_Montes_BALEARES_10.setVisible(true);lyr_Metricas_p90_11.setVisible(true);lyr_INVENTARIO_ALCUDIA_12.setVisible(true);
var layersList = [lyr_PNOA_2019_BAL_5064410_ORTCLAIRC_clasificado_todos_pte_DEM_0,lyr_PNOA_2019_BAL_5064410_ORTCLARGB_clasificado_todos_pte_DEM_1,lyr_PNOA_2019_BAL_5084410_ORTCLAIRC_clasificado_todos_pte_DEM_2,lyr_PNOA_2019_BAL_5084410_ORTCLARGB_clasificado_todos_pte_DEM_3,lyr_PNOA_2019_BAL_5064412_ORTCLAIRC_clasificado_todos_pte_DEM_4,lyr_PNOA_2019_BAL_5064412_ORTCLARGB_clasificado_todos_pte_DEM_5,lyr_PNOA_2019_BAL_5084412_ORTCLAIRC_clasificado_todos_pte_DEM_6,lyr_PNOA_2019_BAL_5084412_ORTCLARGB_clasificado_todos_pte_DEM_7,lyr_GOIB_Ortofoto_Expedita_2023_IB_8,lyr_ELEMLINTEXTOSLIMITESEJESTXTMASAMASATXTPARCELAPARCELATXTSUBPARCESUBPARCETXTCONSTRUCONSTRUCatastro_9,lyr_Montes_BALEARES_10,lyr_Metricas_p90_11,lyr_INVENTARIO_ALCUDIA_12];
lyr_Montes_BALEARES_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Nom_finca': 'Nom_finca', 'Min_Illa': 'Min_Illa', 'Min_Munici': 'Min_Munici', 'Min_Titula': 'Min_Titula', 'Util_pub': 'Util_pub', 'Cod_publ': 'Cod_publ', 'Sup_ha': 'Sup_ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_INVENTARIO_ALCUDIA_12.set('fieldAliases', {'INVENTARIO': 'INVENTARIO', 'RODAL': 'RODAL', 'COORDENADA': 'COORDENADA', 'COORDENA_1': 'COORDENA_1', 'Biomasa To': 'Biomasa To', 'Biomasa _1': 'Biomasa _1', });
lyr_Montes_BALEARES_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Nom_finca': 'TextEdit', 'Min_Illa': 'TextEdit', 'Min_Munici': 'TextEdit', 'Min_Titula': 'TextEdit', 'Util_pub': 'TextEdit', 'Cod_publ': 'Range', 'Sup_ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_INVENTARIO_ALCUDIA_12.set('fieldImages', {'INVENTARIO': 'TextEdit', 'RODAL': 'TextEdit', 'COORDENADA': 'TextEdit', 'COORDENA_1': 'TextEdit', 'Biomasa To': 'TextEdit', 'Biomasa _1': 'TextEdit', });
lyr_Montes_BALEARES_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Nom_finca': 'no label', 'Min_Illa': 'no label', 'Min_Munici': 'no label', 'Min_Titula': 'no label', 'Util_pub': 'no label', 'Cod_publ': 'no label', 'Sup_ha': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_INVENTARIO_ALCUDIA_12.set('fieldLabels', {'INVENTARIO': 'no label', 'RODAL': 'no label', 'COORDENADA': 'no label', 'COORDENA_1': 'no label', 'Biomasa To': 'no label', 'Biomasa _1': 'no label', });
lyr_INVENTARIO_ALCUDIA_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});