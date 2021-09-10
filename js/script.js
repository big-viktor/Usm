const mausHeadAdd = document.getElementById('s2-0');


const aroow = document.querySelector('.s1__block2')
const mausHead = document.querySelector('.active_van')
const activContent = document.querySelector('.active_van')
const activContentVan = document.querySelector('.active_van2');

const divActive = () =>{
    
    aroow.classList.remove("s1__block2_active2");
    activContent.classList.add("delet");
    activContentVan.classList.remove("delet");
    // alert('activ')
};


const prewHover = ()=>{
   
};
let last_known_scroll_position = 0;
let ticking = false;


window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
  
    if (last_known_scroll_position >= 400) {
        aroow.classList.add("s1__block2_active2");
        activContent.classList.remove("delet");
        activContentVan.classList.add("delet");
  
    }
  });
;


let textConcept  = document.getElementById('concept');
let textResults  = document.getElementById('results');
let btnNextProCase  = document.getElementById('btn_next_project');
let imgCase  = document.getElementById('img_case');
let imgCase1  = document.getElementById('img_case1');
let imgCase2  = document.getElementById('img_case2');
let imgCase3  = document.getElementById('img_case3');
let imgCase4  = document.getElementById('img_case4');
let imgCase5  = document.getElementById('img_case5');
let hoverImg  = document.querySelector('.hover_container_img');
let centerImg  = document.querySelector('.center_img');
let contentImg  = document.querySelector('.content_img_center');
let imgCaseS  = document.querySelector('.img_case');

const textProject = []

project1 = {
    text1 = "<br><br>В рамках продвижение бренда воды “ГОРНАЯ”, нами был разработан масштабный маркетингово-коммуникационный комплекс 360 в который входил полный спектр инструментов: от Digital и ТВ ротации до активации с Influencers. В несколько проектных этапов мы:<br><br>- провели первичный анализ рынка, конкурентов и выявили необходимые специфики<br>- разработали и согласовали бренду концепцию и слоган: “ПЕЙ ГОРНУЮ - БОЛЕЙ ЗА СБОРНУЮ!”<br><br>Концепция вода и спорт всегда останется выигрышной и понятной. Мы усилилили её, выстроив позиционирование на Олимпийском спорте и олимпийских спортсменах. Концепция ився последующая рекламная кампания были согласованы нами с Олимпийским комитетом России.<br><br>- подобрали пул абмассадоров<br>В пул бренда мы отобрали самых результативных и ярких представителей Олимпийской сборной РФ: Артур Далалоян, Яна Егорян, Дженнифер Акиниймика и Гаджимурад Рашидов.<br>- разработали и сняли серию рекламных роликов для Digital и ТВ Ротации<br>В единой концепции и стилистике провели сьёмки 4 рекламных роликов с каждым спортсменом “ГОРНОЙ” и запустили 5-ти месячную рекламную кампанию на федеральных каналах: Первый, Россия 1 и МАТЧ ТВ с охватом более 12.000.000 человек<br> - подготовили стимулирующую акцию, которая познакомила и вовлекла аудиторию в жизнь Бренда, а также позволила стимулировать продажи в целевом регионе.<br><br> Стимулирующая акция “ПЕЙ ГОРНУЮ - БОЛЕЙ ЗА СБОРНУЮ” призывала поделится словами поддержки спортсменам Олимпийской сборной, перейдя на промо-сайт акции и скопирую уникальную открытку с изображением спортсмена.<br> Реализация данного комплекса дала нам все условия для расширению бренда ГОРНАЯ на полке ретейлера и выполнения торговых KPIs согласованных сзаказчиков.",
    text2 = "Увеличение узнаваемости бренда в целевом регионе на 86,5 % Первое место в сегменте “Вода” по обьёму ТВ и Digital рекламы <br>Увеличение продаж после проведения стимулирующей акции в целевом регионе на 47,5% ",
    img1='url(../img/gornaya1.jpg)',
    img2='url(../img/project/project13/go1.jpg)',
    img3='url(../img/project/project13/go8.jpg)',
    img4='url(../img/project/project13/go2.jpg)',
    img5='url(../img/project/project13/go3.jpg)',
    img6='url(../img/project/project13/go6.jpg)',
    
};
   
project2 = {
    text1 = "Мечтай с душой ! Воодушевившись сюжетом мультфильма от Disney «Душа», в котором главный герой попадает в мир, где зарождаются человеческие увлечения, мечты и интересы, Splat призывает нас не бояться мечтать и запускает конкурс совместно с торговой сетью «Лента», который позволит осуществить самые заветные мечты участников",
    text2 = "Подобрали лица рекламной кампании.Кто может рассказать более мотивирующую историю, чем звезды спорта?Именно поэтому мы выбрали самых подходящих по критериям аудитории, средними охватами и личным брендом спортсменов:Александр Большунов – чемпион мира, четырехкратный призер Олимпийских игр по лыжным гонкам; Дина и Арина Аверины – тринадцатикратные чемпионки мира, шестикратные чемпионки Европы по художественной гимнастике Алина Балашова – звезда отечественной сноуборд индустрии<br><br>Сформировали промо материалы: Каждая история уникальна, но при этом должна полностью отражать посыл рекламной кампании. Это отлично подчеркнули архивные фотографии становления спортсменов, которые фактически иллюстрировали копирайтинг поста и усилили впечатление истории. <br><br>В конце карусели, мы добавили нативную фотографию с продукцией и спортсменами, подводя тем самым концептуальный итог истории, фокусируя внимание на бренде.",
    img1='url(../img/project/project12/di1.jpg)',
    img2='url(../img/project/project12/di2.jpg)',
    img3='url(../img/project/project12/di1.jpg)',
    img4='url(../img/project/project12/di3.jpg)',
    img5='url(../img/project/project12/di2.jpg)',
    img6='url(../img/project/project12/di3.jpg)',
};
project3 = {
    text1 = "Подписание и сопровождение контракта абсолютного чемпиона UFC Хабиба Нурмагомедова и Toyota motor. Масштабирование контракта за пределы Российской Федерации, покупка рекламных активаций Toyota Объединенные Арабские Эмираты.",
    text2 = "Повышение узнаваемости бренда, увеличение охватов рекламных постов бренда более чем в 10 раз, повышение уровня продаж в Восточной части РФ, предоставление самой крупной рекламной площадки в российском Instagram для рекламной кампании новой линейки внедорожников TRD, повышение и заинтересованности и доверия крупного бизнеса к клиенту.",
    img1='url(../img/habib.jpg)',
    img2='url(../img/project/project1/sl/sl2.jpg)',
    img3='url(../img/project/project1/sl/sl3.jpg)',
    img4='url(../img/project/project1/sl/sl4.jpg)',
    img5='url(../img/project/project1/sl/sl6.jpg)',
    img6='url(../img/project/project1/sl/sl8.jpg)',
};
project4 = {
    text1 = "Реализация презентации фильма о мировом сноубординге Channel Zero",
    text2 = "- Подбор и согласование площадки мероприятия Фудмолл Депо;<br><br>- Разработка платформы по покупке билетов с возможностью внедрения торговой акции;",
    img1='url(../img/project/project10/sl2.jpg)',
    img2='url(../img/project/project10/sl12.png)',
    img3='url(../img/project/project10/sl10.png)',
    img4='url(../img/project/project10/sl5.jpg)',
    img5='url(../img/project/project10/sl4.jpg)',
    img6='url(../img/project/project10/sl13.png)',
};
project5 = {
    text1 = "Подписание и сопровождение рекламного контракта западного бренда одежды класса Luxe – Billionaire и ведущего промоушена смешанных единоборств Fight Nights Global.",
    text2 = "Повышение узнаваемости, привлечение новой целевой аудитории к бренду.<br><br>- Охват рекламной кампании с интеграцией бренда Billionaire на МАТЧ ТВ – 4 185 000 человек;<br><br>- Охват рекламной кампании в social media более 1 500 000 человек;<br><br>- Конверсия BTL акции - 25,6 %, в рамках данной BTL акции конверсия высчитывается исходя из количества переходов с QR кодов на посадочную страницу Billionaire;<br><br>- Амбассадор рекламной кампании – спортивный функционер, общественный деятель, президент промоутерской компании «Fight Nights Global» – Камил Гаджиев",
    img1='url(../img/fn.jpg)',
    img2='url(../img/project/project9/sl5.jpg)',
    img3='url(../img/project/project9/sl6.jpg)',
    img4='url(../img/project/project9/sl2.jpg)',
    img5='url(../img/project/project9/sl1.jpg)',
    img6='url(../img/project/project9/sl9.jpg)',
};
project6 = {
    text1 = "Реализация мастер-классов чемпиона мира, призера Олимпийских игр по хоккею – Алексея Яшина на ГУМ Катке при поддержке Федерального проекта «Спорт - норма жизни»",
    text2 = "Организация и проведение мастер-классов;<br><br> Разработка айдентики проекта;<br><br> Разработка промо-страницы мероприятия;<br><br> SMM сопровождение проекта;<br><br>   Привлечение региональных и федеральных СМИ",
    img1='url(../img/y1.jpg)',
    img2='url(../img/zima.jpg)',
    img3='url(../img/y3.jpg)',
    img4='url(../img/y4.jpg)',
    img5='url(../img/yashin.jpg)',
    img6='url(../img/zima.jpg)',
};
project7 = {
    text1 = "Wabi Sabi короткометражный экшн-спорт фильм Евгения Иванова о большом путешествии в посках потерянной красоты, о его личном творческом пути, основой и ключом развития стало внетрассовое катание в больших горах. Это бесконечное путешествие в поисках новых маршрутов с целью найти уникальные рельефы для катания. Это уникальная история, которая будет интересна не только профессиональным представителям сноуборд-культуры, но и простым любителям, вдохновляющимся экстремальными видами спорта",
    text2 = "Презентацию фильма посетили более 700 человек, более 30 лидеров общественного мнения и молодежных блогеров, собрано более 800 постов в социальных сетях, показ фильма продолжается в регионах России",
    img1='url(../img/project/project2/sl1.jpg)',
    img2='url(../img/project/project2/sl2.jpg)',
    img3='url(../img/project/project2/sl3.jpg)',
    img4='url(../img/project/project2/sl4.jpg)',
    img5='url(../img/project/project2/sl2.jpg)',
    img6='url(../img/project/project2/sl1.jpg)',
   
};
project8 = {
    text1 = "Первая в России хоккейная лига среди сборных команд офицеров и ветеранов России, а так же государственных гражданских служащих и других представителей органов государственной власти, созданная с целью поддержки и развития детского, юношеского и любительского спорта Российской Федерации, патриотического воспитания молодежи и популяризации здорового образа жизни среди офицеров и гражданского населения страны.",
    text2 = "- Разработали PR стратегию ОХЛ;<br><br>- Организовали официальное открытие ОХЛ в Олимпийском комитете России;<br><br>- Привлекли и провели интеграцию коммерческих партнеров;<br><br>- Организовали матч закрытия сезона 2018-2019 в ледовом дворце ЦСКА<br><br>USM Group сопровождает ОХЛ в рамках PR стратегии и event маркетинга, мы делаем уровень профессионального спорта доступным для всех любителей, а также красочные события для неравнодушных людей на трибунах.",
    img1='url(../img/project/project3/sl1.jpg)',
    img2='url(../img/project/project3/sl4.jpg)',
    img3='url(../img/project/project3/sl5.jpg)',
    img4='url(../img/project/project3/sl6.jpg)',
    img5='url(../img/project/project3/sl8.jpg)',
    img6='url(../img/project/project3/sl1.jpg)',
};
project9 = {
    text1 = "Организация event на волне хайпа.<br><br>Откровенный разговор Давидыча на программе Вдудь содрогнул спортивную общественность.",
    text2 = "- Разработка Pr стратегии<br><br>- Подбор площадки проведения мероприятия;<br><br>- Оформление площадки;<br><br>- Привлечение и интеграция коммерческих партнеров<br><br>- Привлечение блогеров и спортивных деятелей",
    img1='url(../img/davidich.jpg)',
    img2='url(../img/project/project6/sl1.jpg)',
    img3='url(../img/project/project6/sl1.jpg)',
    img4='url(../img/project/project6/sl1.jpg)',
    img5='url(../img/project/project6/sl1.jpg)',
    img6='url(../img/project/project6/sl1.jpg)',
};
project10 = {
    text1 = "Music Cycle Festival – крупнейшее событие, объединяющее любителей разных современных спортивных направлений на одной площадке с самыми лучшими тренерами мирового уровня в едином прорыве: Cycle, Zumba, Salsation, Kangoo, Jumps",
    text2 = "Всего в мероприятии приняли участие более 800 человек из 15 регионов России, привлекли более 5 коммерческих партнеров.<br><br>По итогам мероприятия вышло более 50 публикаций в СМИ и 120 публикаций в социальных сетях",
    img1='url(../img/project/project4/sl1.jpg)',
    img2='url(../img/project/project4/sl2.jpg)',
    img3='url(../img/project/project4/sl3.jpg)',
    img4='url(../img/project/project4/sl4.jpg)',
    img5='url(../img/project/project4/sl5.jpg)',
    img6='url(../img/project/project4/sl8.jpg)',
};
project11 = {
    text1 = "Организация Фестиваля в целях продвижения туристско-рекреационного потенциала Республики Дагестан на Российский и международные рынки, ознакомлением посетителей мероприятия с уникальными культурными и национальными традициями народов и регионов. В мероприятии приняли участие жители Республики Дагестан, представители более 190 народов из субъектов Российской Федерации. В рамках Мероприятия прошли мастер-классы по народно-художественному мастерству Республики, спортивные состязания, концертная и развлекательная программа, а также круглые столы, тематикой которых стали взаимодействие туристических кластеров между регионами, этнобрендирование, обмен этнотурестическим медиаконтентом, медиакоммуникации в некоммерческом секторе",
    text2 = "- Разработка концепции мероприятия;<br><br>- Разработка коммуникационного плана продвижения проекта;<br><br>- Разработка брендбука мероприятия; <br><br>- Разработка сайта проекта;<br><br>- Создание видео контента;<br><br>- Создание и ведение social media;<br><br>- Привлечение СМИ;<br><br>- Организация форумной части с участием спикеров;<br><br>- Организация концертной программы; <br><br> - Организация экскурсионных программ;<br><br>- Организация логистических решений",
    img1='url(../img/project/project8/sl2.jpg)',
    img2='url(../img/project/project8/sl3.jpg)',
    img3='url(../img/project/project8/sl7.jpg)',
    img4='url(../img/project/project8/sl8.jpg)',
    img5='url(../img/project/project8/sl9.jpg)',
    img6='url(../img/project/project8/sl11.jpg)',
};
project12 = {
    text1 = "Вывод на рынок и развитие Лыжно-биатлонного комплекса «Зимний клуб Forest Hills», основной направленностью которого является активный зимний отдых и профессиональная подготовка спортсменов по зимним видам спорта.",
    text2 = "Forest Hills зарекомендовал себя, как лыжный центр, который предоставляет качественные услуги в сегменте лыжного спорта и зимнего отдыха, открытие Зимнего клуба посетило более 600 человек, на мероприятии присутствовало 5 Олимпийских чемпионов и призеров Олимпийских игр, провели более 5 профильных offline событий, амбассадорами Зимнего клуба стали выдающиеся спортсмены и бизнесмены.<br><br> По итогам работы вышло более 50 публикаций в СМИ и более 200 в социальных сетях",
    img1='url(../img/project/project7/sl1.jpg)',
    img2='url(../img/project/project7/sl2.jpg)',
    img3='url(../img/project/project7/sl3.jpg)',
    img4='url(../img/project/project7/sl4.jpg)',
    img5='url(../img/project/project7/sl5.jpg)',
    img6='url(../img/project/project7/sl6.jpg)',
};
project13 = {
    text1 = "Серии лыжных гонок, расширяющих свою географию ежегодно, для любителей активного время провождения, позволяющая почувствовать себя профессионалом, не только благодаря уровню организации проекта, а также кубковому зачету и финалу в гору, по аналогии с лучшими международными профессиональными стартами Tour De Ski",
    text2 = "- Придумали и разработали event не имеющий аналогов в любительском лыжном спорте России.<br><br>- Разработали pr стратегию мероприятия;<br><br>- Привлекли 4х олимпийских чемпионов по лыжным гонкам в рамках celebrity маркетинга<br><br>- Организовали 4 event в разных городах в рамках.<br><br>- Привлекли и интегрировали более 5 коммерческих партнеров<br><br>- Организовали работу волонтерского корпуса.",
    img1='url(../img/project/project5/sl1.jpg)',
    img2='url(../img/project/project5/sl2.jpg)',
    img3='url(../img/project/project5/sl3.jpg)',
    img4='url(../img/project/project5/sl4.jpg)',
    img5='url(../img/project/project5/sl5.jpg)',
    img6='url(../img/project/project5/sl6.jpg)',
};
textProject.push(project1,project2,project3,project4,project5,project6,project7,project8,project9,project10,project11,project12,project13); 
for (let i = 0; i < textProject.length; i++) {
        textVan = textProject[i];
    };
let indSlid = -1;

textProject[indSlid]
 function nextProject() {
   
    if(indSlid === 12){
        indSlid=-1;
    }else{
        // hoverImg.classList.add('noneActive')
        // imgCase.classList.add('img_case__active')
        // btnNextProCase.classList.add('btn__position_case__active')
        indSlid += +1;
        imgCase.style.backgroundImage = textProject[indSlid].img1;
        imgCase1.style.backgroundImage = textProject[indSlid].img2;
        imgCase2.style.backgroundImage = textProject[indSlid].img3;
        imgCase3.style.backgroundImage = textProject[indSlid].img4;
        imgCase4.style.backgroundImage = textProject[indSlid].img5;
        imgCase5.style.backgroundImage = textProject[indSlid].img6;


        textConcept.innerHTML = textProject[indSlid].text1;
        textResults.innerHTML = textProject[indSlid].text2;
    }
}

  

  let big = false;
  function bigImg(x) {
    contentImg.classList.remove('delet_display');
        centerImg.style.backgroundImage = x.style.backgroundImage; 
        console.log(x.style.backgroundImage)
        big = true;

     
 
  };
  const minImg=(y)=>{
       
    contentImg.classList.add('delet_display');
    centerImg.src = "";
  }

//   if(big === false){

//     // x.style.height = "664px";
//     // x.style.width = "664px";
//     // x.style.position = "absolute";
//     // x.style.zIndex = "1000";
//     // x.style.top = "0px";
//     // x.style.bottom="0px";
//     // x.style.left = "-280px";
//     x.style.transition = "0.4s";
//     centerImg.src = x.src; 
//     console.log()
//     big = true;

//   }else{
//     // x.style.height = "310px";
//     // x.style.width = "215px";
//     // x.style.position = "relative";
//     // x.style.zIndex = "1";
//     // x.style.top = "none";
//     // x.style.bottom = "none";
//     // x.style.left = "0px";
//     x.style.transition = "0.4s";
//     big = false;
//   };
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});;




$(function() {

    var idPage = $('main').attr('data-id');
    if (idPage != '0') {
        $('.c-m-menu__link contact a').attr('href', 'index.php#s5');
        $('.c-m-menu__link.tops').removeClass('tops');
        $('.page__menu__linkallon').removeClass('tops');

        $('.page__menu__linkallon .linkgroup__link[data-id="3"]').attr('href', 'index.php#s5');
        $('.usl a').attr('href', 'index.php#s3');
        $('.usl').attr('href', 'index.php#s3');

    }
    $('.page__menu__linkgroup .linkgroup__link--active').removeClass('linkgroup__link--active');
    $('.page__menu__linkgroup .linkgroup__link[data-id="' + idPage + '"]').addClass('linkgroup__link--active');
    switch (idPage) {
        case '3':

            break;

        default:
            break;
    }

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            location.href = "thanks.php"
        });
        return false;
    });
    $('.loc-project').on('click', function() {
        location.href = "project.php"
    })
    $(".tops").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 500);
        $('.sub-menu').removeClass('mefix1');
        $('.mob-menu').fadeOut();

    });

    $('.main__menu').removeClass('main__menu--scroll');
    if ($(this).scrollTop() > 50) {
        $('.main__menu').addClass('main__menu--scroll');
    } else {
        // бла-бла-бла
    }
    $(window).scroll(function() {
        $('.main__menu').removeClass('main__menu--scroll');
        if ($(this).scrollTop() > 50) {
            $('.main__menu').addClass('main__menu--scroll');
        } else {
            // бла-бла-бла
        }
    });
    $.fn.equivalent = function() {
            //запишем значение jQuery выборки к которой будет применена эта функция в локальную переменную $blocks
            var $blocks = $(this),
                //примем за максимальную высоту - высоту первого блока в выборке и запишем ее в переменную maxH
                maxH = $blocks.eq(0).height();
            //делаем сравнение высоты каждого блока с максимальной
            $blocks.each(function() {
                maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
            });
            //устанавливаем найденное максимальное значение высоты для каждого блока jQuery выборки
            $blocks.height(maxH);
        }
        //применяем нашу функцию в элементам jQuery выборки - $('.nav')
    $('.s3__t1').equivalent();



    $('.c-menu-mob__overlay').on('click', function() {
        //CssSelector.restart();
        $('.c-m-wp').css({ 'left': '-100%' });
        $('.c-menu-mob').fadeOut('1500');
    })
    $('.c-m-menu__link').on('click', function() {
        //CssSelector.restart();
        $('.c-m-wp').css({ 'left': '-100%' });
        $('.c-menu-mob').fadeOut('1500');
    })
    $('.menu__bar').on('click', function() {
        //CssSelector.restart();

        $('.c-menu-mob').fadeIn('1500');
        $('.c-m-wp').css({ 'left': '0' });
    })

    //slider
    $('.page__carusel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false


    });

    $('.carusel-next').on('click', function() {
        $('.page__carusel').slick('slickNext');
    })
    $('.carusel-prev').on('click', function() {
        $('.page__carusel').slick('slickPrev');
    })
    $('.carusel-prev').on('click', function() {
        $('.page__carusel').slick('currentSlide');
    })
    const
        SLIDES_TO_SHOW = 1,
        $slickElement = $('.page__carusel');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        const
            page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW),
            numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);

        $('.slide-number', slick.$slider.parent()).html('<span>' + page + '</span>  / ' + numPages + '');
    });

    $('.slider-partn').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        responsive: [{
                breakpoint: 1195,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }


        ]


    });
    var slnum = parseInt($('.part__sl').text());

    function windowSize() {
        if ($(window).width() <= '1195') {
            $('.part__sl').text('4');
            slnum = parseInt($('.part__sl').text());
        }
        if ($(window).width() <= '900') {
            $('.part__sl').text('3');
            slnum = parseInt($('.part__sl').text());
        }
        if ($(window).width() <= '768') {
            $('.part__sl').text('2');
            slnum = parseInt($('.part__sl').text());
        }
        if ($(window).width() <= '380') {
            $('.part__sl').text('1');
            slnum = parseInt($('.part__sl').text());
        }
    }
    $(window).on('load resize', windowSize);

    $('.part-next').on('click', function() {
        $('.slider-partn').slick('slickNext');
    })
    $('.part-prev').on('click', function() {
        $('.slider-partn').slick('slickPrev');
    })

    const
        SLIDES_TO_SHOW1 = 1,
        $slickElement1 = $('.slider-partn');

    $slickElement1.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        const
            page1 = Math.ceil(((currentSlide || 0) + slnum) / SLIDES_TO_SHOW1),
            numPages1 = Math.ceil(slick.slideCount / SLIDES_TO_SHOW1);

        $('.part__sl').html(page1);
    });

    $('.block-tab ').find('.tab__item[data-id="0"]').show();
    $('.tab__link').on('click', function() {
        let id = $(this).attr('data-id');
        let idProject = parseInt(id) + 1;
        console.log(idProject);
        $('.tab__link.tab__link--active').removeClass('tab__link--active');
        $(this).addClass('tab__link--active');
        $('.block-tab .tab__item').hide();

        $('.block-tab ').find('.tab__item[data-id="' + id + '"]').show();
        $('.project__btn').attr('href', 'project' + idProject + '.php');

    })
    loadJson();

    function loadJson() {
        $.getJSON("/config.json", function(data) {
            let id = location.pathname.slice(1);

            id = id.slice(0, -4);
            addMeta(id, data); //вставка мета данных
        })

        function addMeta(id, data) {
            for (i in data) {
                if (i == id) {

                    //$(document).prop('title', data[i]['title']);
                    //$('meta[name=description]').attr('content', data[i]['description']);
                    //$('meta[name=keywords]').attr('content', data[i]['keywords']);

                }
            }
        }


    }

    $('.show-modal').on('click', function() {
        //
        let id = $(this).attr('data-id');
        modalOpen();
        if (id === '1') {
            $('.jq-name').html('Заполните форму. <br> Мы вышлем Вам дополнительные материалы');
        } else {
            $('.jq-name').html('Рассчитать <br> проект');
        }
    })
    $('.modal-close').on('click', function() {
        modalClose();
    })
    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".modal__content"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            modalClose();
        }
    });
    $

    function modalOpen() {
        $('.modal__wrapper').fadeIn();
        $('body').css({
            "overflowY": "hidden"

        });
    }

    function modalClose() {
        $('.modal__wrapper').fadeOut();
        $('body').css({
            "overflowY": "auto"
        });
    }





















    //quize
    $('.usm-quiz__label[data-radio="true"]').on('click', function() {
        let parentId = $(this).attr('data-parent');
        let allEl = $('.usm-quiz__label[data-radio="true"][data-parent="' + parentId + '"]').children('.usm-quiz__checbox').children('i');
        allEl.removeClass('active');
        $('.usm-quiz__label[data-radio="true"][data-parent="' + parentId + '"]').removeAttr('data-active');
        $('.usm-quiz__label[data-radio="true"][data-parent="' + parentId + '"]').removeAttr('data-name');
        $(this).children('.usm-quiz__checbox').children('i').addClass('active');

        let name = $(this).children('.usm-quiz__text').text();
        $(this).attr('data-name', name);
        $(this).attr('data-active', '1');
        $('.usm-quiz__next').attr('disabled', false);
    });
    $('.usm-quiz__label[data-checkbox="true"]').on('click', function() {

        let el = $(this).children('.usm-quiz__checbox').children('i');
        el.toggleClass('active');
        if (el.hasClass('active')) {
            let name = $(this).children('.usm-quiz__text').text();
            $(this).attr('data-name', name);
            $(this).attr('data-active', '1');
        } else {
            $(this).removeAttr('data-name');
            $(this).removeAttr('data-active');
        }
    });
    var progress = 20;
    $('.usm-quiz__next').on('click', function() {
        let progres = parseInt($(this).attr('data-progres'));
        let id = $(this).attr('data-id'),
            count = parseInt(id),
            out = '';
        let el = $('.usm-quiz-sl[data-id="' + (count - 1) + '"]');
        $('.usm-quiz__prev').attr('data-id', (count - 1));
        $(this).attr('data-id', count + 1);
        $('.usm-quiz-sl.active').removeClass('active');
        $('.usm-quiz__num').text('0' + count);

        $('.usm-quiz-sl[data-id="' + count + '"]').addClass('active');
        let tt = count - 1;
        $('.usm-quiz__next').attr('disabled', true);

        progres = progres + progress;
        $(this).attr('data-progres', progres)
        $('.quiz__progresbar').css({
            'width': progres + '%'
        })
        switch (count - 1) {
            case 3:
                //$('.usm-quiz__prev').show();
                $('.usm-quiz__next').attr('disabled', false);
                break;
            case 4:
                console.log('4');
                out = "";
                let qv1 = el.children('.usm-quiz__qv').children('.usm-quiz__label ').children('textarea').val();
                out += '<input type="hidden" name="Вопрос №' + (count - 1) + '" value="' + qv1 + '">';
                $(".hidden-input__data" + (count - 1)).html(out);
                $('.usm-quiz__next').attr('disabled', false);
                break;
            case 5:
                out = "";
                let rr = $('.gg').val();
                out += '<input type="hidden" name="Вопрос №' + (count - 1) + '" value="' + rr + '">';
                $(".hidden-input__data" + (count - 1)).html(out);
                $('.quiz__brtGroup').hide();
                $('.usm-quiz__count').hide();
                $('.usm-quiz__next').attr('disabled', false);
                break;

            default:
                break;
        }



        let qv = el.children('.usm-quiz__qv').children('.usm-quiz__label').is('[data-parent="' + (count - 1) + '"]');


        out = ''
        if (qv === true) {
            $('.usm-quiz__label[data-parent="' + (count - 1) + '"]').each(function() {
                if ($(this).attr('data-active') === '1') {
                    let name = $(this).attr('data-name');

                    out += '<input type="hidden" name="Вопрос №' + (count - 1) + '" value="' + name + '">';

                }
            });
            $(".hidden-input__data" + (count - 1)).html(out);
        } else {

        }



    });


    $('.usm-quiz__prev').on('click', function() {
        let id = $(this).attr('data-id'),
            count = parseInt(id);
        $('.usm-quiz-sl.active').removeClass('active');
        $('.usm-quiz__num').text('0' + count);
        $(this).attr('data-id', count - 1);
        $('.usm-quiz__next').attr('data-id', count);
        $('.usm-quiz-sl[data-id="' + count + '"]').addClass('active');
        switch (id) {
            case '1':
                $('.usm-quiz__prev').attr('data-id', '1');
                $('.usm-quiz__next').attr('data-id', '2');
                $('.usm-quiz__prev').hide();
                break;

            default:
                break;
        }
    })

});


!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;
$(document).ready(function(){
    $('.slider').slick({
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
                centerMode: false,

            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});;


// btnNextProCase.addEventListener('click', nextProject);
activContentVan.addEventListener('click', prewHover);
mausHead.addEventListener('mouseover', divActive);