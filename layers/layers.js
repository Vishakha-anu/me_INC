var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_INC_sessionsINC_1 = new ol.format.GeoJSON();
var features_INC_sessionsINC_1 = format_INC_sessionsINC_1.readFeatures(json_INC_sessionsINC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INC_sessionsINC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INC_sessionsINC_1.addFeatures(features_INC_sessionsINC_1);
var lyr_INC_sessionsINC_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INC_sessionsINC_1, 
                style: style_INC_sessionsINC_1,
                interactive: true,
                title: 'INC_sessions — INC'
            });
var format_quick_2 = new ol.format.GeoJSON();
var features_quick_2 = format_quick_2.readFeatures(json_quick_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_quick_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_quick_2.addFeatures(features_quick_2);
var lyr_quick_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_quick_2, 
                style: style_quick_2,
                interactive: true,
                title: '<img src="styles/legend/quick_2.png" /> quick'
            });
var format_INCSessions_3 = new ol.format.GeoJSON();
var features_INCSessions_3 = format_INCSessions_3.readFeatures(json_INCSessions_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INCSessions_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INCSessions_3.addFeatures(features_INCSessions_3);
var lyr_INCSessions_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INCSessions_3, 
                style: style_INCSessions_3,
                interactive: true,
                title: '<img src="styles/legend/INCSessions_3.png" /> INC Sessions'
            });

lyr_OSMStandard_0.setVisible(true);lyr_INC_sessionsINC_1.setVisible(true);lyr_quick_2.setVisible(true);lyr_INCSessions_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_INC_sessionsINC_1,lyr_quick_2,lyr_INCSessions_3];
lyr_INC_sessionsINC_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'INC Sessions_S.No.': 'INC Sessions_S.No.', 'INC Sessions_Year': 'INC Sessions_Year', 'INC Sessions_Name of the Place': 'INC Sessions_Name of the Place', 'INC Sessions_President': 'INC Sessions_President', });
lyr_quick_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'INC Sessions_S.No.': 'INC Sessions_S.No.', 'INC Sessions_Year': 'INC Sessions_Year', 'INC Sessions_Name of the Place': 'INC Sessions_Name of the Place', 'INC Sessions_President': 'INC Sessions_President', });
lyr_INCSessions_3.set('fieldAliases', {'S.No.': 'S.No.', 'Year': 'Year', 'Name of the Place': 'Name of the Place', 'President': 'President', });
lyr_INC_sessionsINC_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'INC Sessions_S.No.': 'Range', 'INC Sessions_Year': 'TextEdit', 'INC Sessions_Name of the Place': 'TextEdit', 'INC Sessions_President': 'TextEdit', });
lyr_quick_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'INC Sessions_S.No.': 'Range', 'INC Sessions_Year': 'Range', 'INC Sessions_Name of the Place': 'TextEdit', 'INC Sessions_President': 'TextEdit', });
lyr_INCSessions_3.set('fieldImages', {'S.No.': '', 'Year': '', 'Name of the Place': '', 'President': '', });
lyr_INC_sessionsINC_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'INC Sessions_S.No.': 'header label', 'INC Sessions_Year': 'header label', 'INC Sessions_Name of the Place': 'header label', 'INC Sessions_President': 'header label', });
lyr_quick_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'INC Sessions_S.No.': 'no label', 'INC Sessions_Year': 'no label', 'INC Sessions_Name of the Place': 'no label', 'INC Sessions_President': 'no label', });
lyr_INCSessions_3.set('fieldLabels', {'S.No.': 'no label', 'Year': 'no label', 'Name of the Place': 'no label', 'President': 'no label', });
lyr_INCSessions_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});