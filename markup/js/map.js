
// map init

// Массив всех объектов           
var data_obj = {
     
};
var data_obj_city = {
    'mo': [
            {
            'company': 'Мостест Москва',
            'tel': '+7 (495) 120-75-31 77',
            'email': '@mostest.ru'},
            {
            'company': 'Ростест Москва',
            'tel': '+7 (495) 150-66-59',
            'email': 'otdel@ros-test.ru'},
            {
            'company': 'Росстандарт',
            'tel': '+7 (495) 374-94-99',
            'email': 'info@rosstandart.net'} 
        ],
    'sp': [
            {
            'company': 'Интергост Петербург',
            'tel': '+7 (812) 928-60-08',
            'email': 'info@intergost.ru'},
            {
            'company': 'Тест Петербург',
            'tel': '+7 (812) 921-60-01',
            'email': 'info@testspb.info'},
            {
            'company': 'Севтест Петербург',
            'tel': '+7 (812) 409 39 49',
            'email': 'spb@sevtest.ru'},
            {
            'company': 'Промотест Петербург',
            'tel': '+7 (911) 927-94-50',
            'email': 'info@promotest.su'},
            {
            'company': 'Гортест Петербург',
            'tel': '+7 (812) 409-93-29',
            'email': 'spb@gortest.su'},
            {
            'company': 'Ростест Петербург',
            'tel': '+7 (812) 923-82-23',
            'email': 'info@ros-test.ru'},
            {
            'company': 'Мостест Петербург',
            'tel': '+7 (812) 923-20-03',
            'email': 'spb@mostest.ru'}, 
        ],
    'ekb': [
            {
            'company': 'Ростест Урал',
            'tel': '+7 (343) 311-62-80',
            'email': 'info@rostestural.ru'},
            {
            'company': 'Гортест Урал',
            'tel': '+7 (343) 328-44-36',
            'email': 'info@gortestural.ru'},
            {
            'company': 'Уралтест Екатеринбург',
            'tel': '+7 (343) 253-28-14',
            'email': 'info@uraltest.info'},
        ],
    "prm": [{
            'company': 'Ростест Пермь',
            'tel': '+7 (342) 255-46-20',
            'email': '81@gortestural.ru'}],
    "tmn":  [{
            'company': 'Ростест Тюмень',
            'tel': '+7 (345) 249-42-27',
            'email': '72@tumentest.ru'}],
    "srg":  [{
            'company': 'Ростест Сургут',
            'tel': '+7 (346) 227-02-41',
            'email': '86@hantest.ru'}],
    "ufa":  [{
            'company': 'Ростест Уфа',
            'tel': '+7 (347) 264-19-52',
            'email': '02@rostestufa.ru'}],
    "nvs":  [
                {
                'company': 'Ростест Сибирь',
                'tel': '+7 (383) 310-20-45',
                'email': 'info@rostestsibir.ru'},
                {
                'company': 'СибирьТест',
                'tel': '+7 (383) 255-34-17',
                'email': 'info@sibirtest.ru'},
                {
                'company': 'Гортест Сибирь',
                'tel': '+7 (383) 363 31 42',
                'email': 'info@gortestsibir.ru'}
            ],
    "brn":  [{
            'company': 'Ростест Барнаул',
            'tel': '+7 (3852) 25-28-47',
            'email': '22@rostestbarnaul.ru'}],
    "krs":  [
                {
                'company': 'Ростест Красноярск',
                'tel': '+7 (3912) 54-08-43',
                'email': '24@rostestkrasnoyarsk.ru'},
                {
                'company': 'Гортест Сибирь',
                'tel': '+7 (391) 989-82-06',
                'email': '24@gortestsibir.ru'},
            ],
    "oms":  [
                {
                'company': 'Ростест Омск',
                'tel': '+7 (3812) 35-66-57',
                'email': '55@rostestomsk.ru'},
                {
                'company': 'Гортест Сибирь',
                'tel': '+7 (381) 220-73-70',
                'email': '55@gortestsibir.ru'},
            ],
    "krd":  [
                {
                'company': 'Ростест Кубань',
                'tel': '+7 (861) 298-08-90',
                'email': 'info@rostestkuban.ru'},
                {
                'company': 'Ростест Краснодар',
                'tel': '+7 (861) 240-42-85',
                'email': '23@ros-test.ru'},
                {
                'company': 'Тест Краснодар',
                'tel': '+7 (861) 204 14 35',
                'email': '23@testspb.info'},
                {
                'company': 'КраснодарТест',
                'tel': '+7 (861) 944-19-82',
                'email': 'idealtest@idealtest.ru'},
                {
                'company': 'Мостест Мск',
                'tel': '+ 7 (861) 205-17-21',
                'email': '93@mostest.ru'},
            ],
    "stv": [{
            'company': 'Ростест Ставрополь',
            'tel': '+7 (865) 233-01-38',
            'email': '26@rostestkuban.ru'}],
    "sch":  [
                {
                'company': 'Центр "Сертификация"',
                'tel': '+7 (862) 266-08-02',
                'email': 'sochi@rostestkuban.ru'},
                {
                'company': 'Ростест Сочи',
                'tel': '+7 (862) 296-73-29',
                'email': 'sochi@idealtest.ru'}
            ],
    "kaz":  [
                {
                'company': 'Промотест Казань',
                'tel': '+7 (843) 258-56-07',
                'email': 'kazan@promotest.su'},
                {
                'company': 'Тест Казань',
                'tel': '+7 (843) 258-49-95',
                'email': '16@testspb.info'},
                {
                'company': 'Гортест Казань',
                'tel': '+7 (843) 207-06-46',
                'email': 'kazan@gortest.su'},
                {
                'company': 'Интергост Казань',
                'tel': '+7 (843) 258-53-02',
                'email': 'kazan@intergost.ru'},
                {
                'company': 'Мостест Казань',
                'tel': '+7 (843) 258-55-24',
                'email': '16@mostest.ru'},
                {
                'company': 'Ростест Казань',
                'tel': '+7 (843) 212-11-08',
                'email': '16@sevtest.ru'},
                {
                'company': 'Севтест Казань',
                'tel': '+7 (843) 258-87-42',
                'email': '16@ros-test.ru'},
                {
                'company': 'КазаньТест',
                'tel': '+7 (843) 212-11-08',
                'email': 'kaz@promotest.su'},
            ],
    "nno":  [
                {
                'company': 'Интергост Нижний',
                'tel': '+7 (831) 414-41-30',
                'email': '52@intergost.ru'},
                {
                'company': 'Мостест Нижний',
                'tel': '+7 (831) 420-50-49',
                'email': '52@mostest.ru'},
                {
                'company': 'Ростест Нижний',
                'tel': '+7 (831) 414-11-98',
                'email': '52@ros-test.ru'},
                {
                'company': 'Центр "Сертификация" Нижний',
                'tel': '+7 (831) 420-50-49',
                'email': 'nn@certification.net.ru'},
            ],
    "smr":  [
                {
                'company': 'Ростест Самара',
                'tel': '+7 (843) 212-11-08',
                'email': '63@rostest.net'}],
    "mrm":  [
                {
                'company': 'Тест Мурманск',
                'tel': '+7 (815) 265 52 45',
                'email': '51@testspb.info'}],
    "kln":  [
                {
                'company': 'Ростест Калининград',
                'tel': '+7 (4012) 37-64-50',
                'email': '39@rostest.net'}],
    "tul":  [
                {
                'company': 'Ростест Тула',
                'tel': '+7 (831) 420-50-49',
                'email': '71@rostest.net'}],
    "ros":  [
                {
                'company': 'РостовТест',
                'tel': '+7 (863) 265-80-07',
                'email': '61@rostestkuban.ru'},
                {
                'company': 'Севтест Ростов',
                'tel': '+7 (952) 561-01-17',
                'email': '61@sevtest.ru'},
                {
                'company': 'Гортест Ростов',
                'tel': '+7 (863) 309-10-39',
                'email': 'rostov@gortest.su'},
                {
                'company': 'Азовтест',
                'tel': '+7 (863) 294-99-51',
                'email': 'azov@promotest.su'},
                {
                'company': 'Интергост Ростов',
                'tel': '+7 (863) 294-98-12',
                'email': 'info@rostestrostov.ru'},
                {
                'company': 'Ростест Ростов',
                'tel': '+7 (863) 204-32-29',
                'email': '61@idealtest.ru'},
                {
                'company': 'Ростест Мск',
                'tel': '+7 (863) 322-11-67',
                'email': 'rostov@ros-test.ru'}
                ],
    "chb":  [
                {
                'company': 'Ростест Челябинск',
                'tel': '+7 (351) 216-06-27',
                'email': '74@gortestural.ru'},
                {
                'company': 'Уралтест Челябинск',
                'tel': '+7 (351) 247-10-02',
                'email': '74@uraltest.info'},
                {
                'company': 'Гортест Челябинск',
                'tel': '+7 (351) 216-06-27',
                'email': '74@gortestural.ru'}
                ],
    "vgd":  [
                {
                'company': 'Севтест Волгоград',
                'tel': '+7 (8442) 51-66-48',
                'email': '34@sevtest.ru'}
                ],
    "srt":  [
                {
                'company': 'Севтест Саратов',
                'tel': '+7 (8452) 68-05-74',
                'email': '64@sevtest.ru'}
                ],
    "tol":  [
                {
                'company': 'Севтест Тольятти',
                'tel': '+7 (8482) 40-95-71',
                'email': '63@sevtest.ru'}
                ],
    "ast":  [
                {
                'company': 'Ростест Астрахань',
                'tel': '+7 (851) 229-00-74',
                'email': '30@rostestkuban.ru'}
                ],
    "sl":  [
                {
                'company': 'Ростест Севастополь',
                'tel': '+7 (861) 205-17-21',
                'email': '92@rostest.net'}
                ],
    "sim":  [
                {
                'company': 'Ростест Симферополь',
                'tel': '+7 (861) 205-17-21',
                'email': '82@rostest.net'},
                {
                'company': 'Тест Симферополь',
                'tel': '+7 (913) 392-32-12',
                'email': 'info@rostestkrym.ru'}
                ],
    "ast":  [
                {
                'company': 'Ростест Астана',
                'tel': '+7 (717) 272-74-32',
                'email': 'info@astanatest.kz'},
                {
                'company': 'Гортест Сибирь',
                'tel': '+7 (717) 269-60-40',
                'email': 'kz@gortestsibir.ru'}
                ],
    "bgd":  [
                {
                'company': 'Мостест СПб',
                'tel': '+7 (919) 285-48-38',
                'email': '31@mostest.ru'}
                ],
    "blg":  [
                {
                'company': 'Ростест Сибирь',
                'tel': '+7 (4162) 31-85-25',
                'email': 'blagoveshensk@rostestsibir.ru'}
                ],
    "vld":  [
                {
                'company': 'Ростест Сибирь',
                'tel': '+7 (4232) 52-19-26',
                'email': 'vladivostok@rostestsibir.ru'},
                {
                'company': 'Гортест Сибирь',
                'tel': '+7 (423) 205-57-80',
                'email': '25@gortestsibir.ru'}
                ],
    "klg":  [
                {
                'company': 'Мостест Мск',
                'tel': '+7 (495) 120-75-31',
                'email': '40@mostest.ru'}
                ],
    "khb":  [
                {
                'company': 'Ростест Сибирь',
                'tel': '+7 (4212) 41-24-50',
                'email': 'habarovsk@rostestsibir.ru'},
                {
                'company': 'Гортест Сибирь',
                'tel': '+7 (421) 292-95-82',
                'email': '27@gortestsibir.ru'},
                ], 
}

var obj_name_city = {

    'mo': 'Москва',
    'sp': 'Санкт-Петербург',        
    'ekb': 'Екатеринбург',       
    "prm": 'Пермь',     
    "tmn":  'Тюмень',
    "srg":  'Сургут',
    "ufa":  'Уфа',
    "nvs":  'Новосибирск',
    "brn":  'Барнаул',
    "krs":  'Красноярск',
    "oms":  'Омск',
    "krd":  'Краснодар',
    "stv": 'Ставрополь',
    "sch":  'Сочи',
    "kaz":  'Казань',
    "nno":  'Нижний Новгород',
    "smr":  'Самара',
    "mrm":  'Мурманск',
    "kln":  'Калининград',
    "tul":  'Тула',
    "ros":  'Ростов-на-Дону',
    "chb":  'Челябинск',
    "vgd":  'Волгоград',
    "srt":  'Саратов',
    "tol":  'Тольятти',
    "ast":  'Астрахань',
    "sl":  'Севастополь',
    "sim":  'Симферополь',
    "ast":  'Астана',
    "bgd":  'Белгород',
    "blg":  'Благовещенск',
    "vld":  'Владивосток',
    "klg":  'Калуга',
    "khb":  'Хабаровск'
}  
colorRegion  = '#8dd1dc'; // Цвет всех регионов
focusRegion  = '#b60018'; // Цвет подсветки регионов при наведении на объекты из списка
selectRegion  = '#4da0b0'; // Цвет изначально подсвеченных регионов
hoverCity = '#b60018'; // Цвет изначально регионов при ховере и клике
highlighted_states  = {};

//  Массив подсвечиваемых регионов, указанных в массиве data_obj
for(iso in data_obj_city){
    highlighted_states[iso]  = selectRegion;
}
$(document).ready(function() {
    $(function(){$('#vmap').vectorMap({
        map: 'russia',
        backgroundColor: '#ffffff',
        borderColor:  '#ffffff',
        borderWidth:  2,
        color: colorRegion,
        colors:  highlighted_states,
        multiSelectRegion: false,
        enableZoom: true,
        hoverOpacity: 1,
        showTooltip: true,
        //  Отображаем объекты если они есть
        onLabelShow:  function(event, label, code){
            name  = '<strong>'+label.text()+'</strong><br>';
            if(data_obj_city[code]){
                    list_obj  = '<ul class="sm-list">';
                $.each(data_obj_city[code], function(index, value) {
                    for(ob  in  value){
                        list_obj  += '<li>'+value[ob]+'</li>';
                    }
                });
                    list_obj  += '</ul>';
            }else{
                list_obj  = '';
            }                                                             
            label.html(name  + list_obj);
            list_obj  = '';
        }
        // Клик по региону
    });
});

//  Выводим список объектов из массива

    var count = 0;
    addDesc('mo');
    for(region in data_obj_city){
        $('.bxslider .hover-list').append('<li><a  href="'+selectRegion+'" id="'+region+'"  class="focus-region">'+obj_name_city[region]+'</a></li>');
        if(count < 6) {
            $('.bxslider .list').append('<li><a  href="'+selectRegion+'" id="'+region+'"  class="focus-region">'+obj_name_city[region]+'</a></li>');
        }
        ++count;
    }
var textButt = "Москва ";
var icon =  '<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>';
if ($(window).width() < 767) {
    $('.seeall').html('г. ' + textButt + ' ' + icon);
    $('.bxslider').on('click', '.focus-region', function(){
        textButt = $(this).text();
        $('.seeall').html('г. ' + textButt + ' ' + icon);
        $('.hover-list').css('display', 'none');
    });
}
$('.hover-list').on('click', '.focus-region', function(){
    $('.hover-list').css('display', 'none');
});
$('.all-list').hover(function(){ $('.hover-list').css('display', 'block');},function(){$('.hover-list').css('display', '');});
$('.bxslider').on('click', '.all-list', function(){
    $('.hover-list').css('display', ($('.hover-list').css('display') == 'block') ? '' : 'block');
});
$('.bxslider').on('click', '.hover-list', function(){
    $('.hover-list').css('display', ($('.hover-list').css('display') == 'block') ? '' : 'block');
});


//  Подсветка регионов при наведении на объекты
fregion  = {};
function defaultColor(){
    $('#vmap').vectorMap('set',  'colors', fregion);
};

jQuery('#vmap').bind('regionClick.jqvmap',
    function(event, code, region)
    {
        if (data_obj_city[code]) {
            clickLabel(code);
        }
    }
);
$('.focus-region').mouseover(function(){
    iso  = $(this).prop('id');
    defaultColor();
    addDesc(iso);
    fregion  = {};
    $('.focus-region').removeClass('active-region');
    $(this).addClass('active-region');
    fregion[iso]  = '#b60018';
    $('#vmap').vectorMap('set',  'colors', fregion);
    return fregion[iso]  = '#4da0b0';
});
    $('.focus-region').mouseout(function(){
        iso  = $(this).prop('id');
        fregion  = {};
        fregion[iso]  = '#4da0b0';
        $('#vmap').vectorMap('set',  'colors', fregion);
    });

function clickLabel(id) {
    addDesc(id);
    defaultColor();
    $('.focus-region').removeClass('active-region');
    // fregion  = {};
    // fregion[id]  = '#b60018';
    // $('#vmap').vectorMap('set',  'colors', fregion);
    // return fregion[id]  = '#4da0b0';
};

$('.focus-region').on('click', function(e){
    e.preventDefault();
    var id = $(this).prop('id');
    addDesc(id);
    $('.focus-region').removeClass('active-region');
    $(this).addClass('active-region');
    defaultColor();
    fregion  = {};
    fregion[id]  = '#b60018';
    $('#vmap').vectorMap('set',  'colors', fregion);
    return fregion[id]  = '#4da0b0';
});


function addDesc (id, region) {
    var text = []; 
    text.push("<h3 class='company-city'>г. <span>"+ obj_name_city[id] +"</span></h3>") 
    $.each(data_obj_city[id], function(index, value) {
        var tel = value.tel;
        var city = data_obj_city;
        var company = value.company;
        var email = value.email;
        text.push("<p class='company-name'>"+company+"</p><p class='company-tel'>"+tel+"</p><p class=company-email'>"+email+"</p><p class='last-chld'></p>");
    });
    $.each(text, function(index, value){
        var all = ++value;
    });
    $('.desc-objw').html(text);
}
return true;
});

