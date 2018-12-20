/*点击返回时空隧道页*/
// $('.back2').on('touchstart',function(){
//     // window.location.href="tunnel.html";
//     // window.android.log('返回')
//     window.history.go(-1)
// });




/*3秒后将上下提示箭头隐藏*/
setTimeout(function(){
    $('.icon').css('display','none')
},3000);

var isplay = false;

//js获取url参数
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
var dynastyId = GetQueryString("resourceId");


var appId = [
    "ef0511e8b1821d55f6b759e67d2ee3ec",
    "ef0511e8b1821d55f6b759e6e56d239d",
    "ef0511e8b1821d55f6b759e6fa34334e",
    "ef0611e8b1821d55f6b759e6b791fbdb",
    "ef8311e8b1821d55f6b759e6925d6adf",
    "ef8311e8b1821d55f6b759e6abb99310",
    "ef8311e8b1821d55f6b759e6c28af1b1",
    "ef8311e8b1821d55f6b759e6ef225972",
    "ef8411e8b1821d55f6b759e60430f973",
    "ef8411e8b1821d55f6b759e6244da5a4",
    "ef8411e8b1821d55f6b759e63d26bb25",
    "ef8411e8b1821d55f6b759e64cc747c6",
    "ef8411e8b1821d55f6b759e683479ca7",
    "ef8411e8b1821d55f6b759e6955dbd28",
    "ef8411e8b1821d55f6b759e6c4577ee9",
    "ef8411e8b1821d55f6b759e6d5864caa",
    "ef8411e8b1821d55f6b759e6e7fe3c3b"

]

var dynastyid_ = [
    "8e5211e89b32df04b89855faa46f9ac1",
    "b65611e8b154b32f29a5eb7ae6266a6f",
    "b65911e8b154b32f29a5eb7af2192a4a",
    "b66511e8b154b32f29a5eb7ae771b1d2",
    "b65b11e8b154b32f29a5eb7aab772011",
    "8e5211e89b32df04b89855faab8f7cd2",
    "b66611e8b154b32f29a5eb7a469e50a1",
    "b65711e8b154b32f29a5eb7a996ce2e7",
    "8e3611e89b32df04b89855fac4fa5b98",
    "b66411e8b154b32f29a5eb7af75297f5",
    "b66311e8b154b32f29a5eb7a4e6269b5",
    "b66311e8b154b32f29a5eb7abf72a852",
    "b66411e8b154b32f29a5eb7a6b1e696b",
    "8e1411e8b9a391c63513b9a0cb8d3852",
    "8e5211e89b32df04b89855fa9e6b88f0",
    "b66511e8b154b32f29a5eb7a68338936",
    "8b4711e88f3ac33d823a3b765286932e"


]

var dynastyIdI = dynastyId



for(var u = 0;u<appId.length ;u++  ){
    if(dynastyId ==appId[u]){
        dynastyIdI = dynastyid_[u]
    }
}
function back() {
    //ios ws

    if(dynastyIdI != dynastyId){
        if(typeof( goofypapaGame ) != "undefined" && goofypapaGame ){
            window.location.href='goofypapa://back;stopAllAudio';
            return;
        }
    }
    
    //android ws
    if( typeof(goofyPapa) !== "undefined" ){
        goofyPapa.back();
        return;
    }
    
    if(history.length) {
        history.go(-1);
        return;
    }
}


    var index
    var index1

        //滑动
    var SwiperList = new Swiper("#swiper-container",{
        direction : 'horizontal',
        observer: true,
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        initialSlide: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on:{
            slideChange: function () {
                // document.querySelectorAll('.audioplay').pause()
                // $(".audioplay").pause()

                // alert(isplay)
                   if( typeof( goofypapaGame ) != "undefined" && goofypapaGame ){
                       goofypapaStopAllAndPlayAudio( $(".swiper-slide").find(".audioplay")[SwiperList.realIndex].value, function(){
                       } );
                   }else if( typeof( window.android ) != "undefined" ) {
                       window.android.initMusic($('.swiper-slide-active input')[0].value);
                       window.android.startMusic();
                   }else{
                       console.log(" p_url ");
                   }
                   isplay  = !isplay;



                // $(".swiper-slide").find(".audioplay")[index].pause()
            },
            // slideChangeTransitionEnd:function () {
            //     $(".swiper-slide").find(".audioplay")[index1].play()
            // }

        }
    });




// var t_parameter3 = {};
// t_parameter3.dynastyId = dynastyIdI;
// goofypapaPost( "http://www.dadpat.com/dynastyInfo/getAllList.do", t_parameter3, function( p_res ){
//     // alert(JSON.stringify(p_res) +'在轮播时判断是否收藏')
//     var chaodaiData = p_res.data;  //拿到各个朝代的data
//     console.log(new Date().getTime()+"--------------------------begin")
//
//
//     for( var j = 0; j < chaodaiData.length; ++j ){
//         var imgUrl = chaodaiData[j]["image"][0]["imageUrl"]
//         var content = chaodaiData[j]["dynastyDescp"].split(";")[0]
//         var audioUrl = chaodaiData[j]['audio'][0]['attUrl']
//         var chaodaiName = chaodaiData[j]['dynastyName']
//         var s = $("#template1").html().replace("$img$", "http://www.dadpat.com/" + imgUrl).replace("$chaodai$",chaodaiName).replace("$content$", content).replace("$audio$", "http://www.dadpat.com/" + audioUrl)
//         $("#swiper1").append(s);
//
//     }
//
//     // setTimeout(function () {
//     //     showAudio(dyId1)
//     // })
//
//     //p标签的滑动
//     swiperP = new Swiper('#swiper1 .swiper-container', {
//         direction: 'vertical',
//         slidesPerView: 'auto',
//         touchMoveStopPropagation : false,
//         freeMode: true,
//         mousewheel: true,
//     });
//
//     console.log(new Date()+"--------------------------end")
//
// }, function( p_res ){
//
// } );




if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

    // alert(new Date().getTime()+"--------------------------begin")

    var t_parameter3 = {};
    t_parameter3.dynastyId = dynastyIdI;
    goofypapaPost( "http://www.dadpat.com/dynastyInfo/getAllList.do", t_parameter3, function( p_res ){
        // alert(JSON.stringify(p_res) +'在轮播时判断是否收藏')
        var chaodaiData = p_res.data;  //拿到各个朝代的data

        console.log(chaodaiData, 'chaodaiData')

        for( var j = 0; j < chaodaiData.length; ++j ){
            var imgUrl = chaodaiData[j]["image"][0]["imageUrl"]
            var content = chaodaiData[j]["dynastyDescp"].split(";")[0]
            var audioUrl = chaodaiData[j]['audio'][0]['attUrl']
            var chaodaiName = chaodaiData[j]['dynastyName']
            var s = $("#template1").html().replace("$img$", "http://www.dadpat.com/" + imgUrl).replace("$chaodai$",chaodaiName).replace("$content$", content).replace("$audio$", "http://www.dadpat.com/" + audioUrl)
            $("#swiper1").append(s);

        }

        // setTimeout(function () {
        //     showAudio(dyId1)
        // })

        //p标签的滑动
        swiperP = new Swiper('#swiper1 .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            touchMoveStopPropagation : false,
            freeMode: true,
            mousewheel: true,
        });

    }, function( p_res ){

    } );

    // alert(new Date().getTime()+"--------------------------end")
}else{
    // alert(new Date().getTime()+"--------------------------begin")
    $.ajax({
        type: "post",
        url: "http://www.dadpat.com/dynastyInfo/getAllList.do",
        dataType: "jsonp", //以键/值对的形式
        async: true,
        data:{"dynastyId": dynastyIdI },
        success: function (data) {
            var chaodaiData = data.data;  //拿到各个朝代的data

            console.log(chaodaiData, 'chaodaiData')

            for( var j = 0; j < chaodaiData.length; ++j ){
                var imgUrl = chaodaiData[j]["image"][0]["imageUrl"]
                var content = chaodaiData[j]["dynastyDescp"].split(";")[0]
                var audioUrl = chaodaiData[j]['audio'][0]['attUrl']
                var chaodaiName = chaodaiData[j]['dynastyName']
                var s = $("#template1").html().replace("$img$", "http://www.dadpat.com/" + imgUrl).replace("$chaodai$",chaodaiName).replace("$content$", content).replace("$audio$", "http://www.dadpat.com/" + audioUrl)
                $("#swiper1").append(s);
            }

            // setTimeout(function () {
            //     showAudio(dyId1)
            // })

            //p标签的滑动
            swiperP = new Swiper('#swiper1 .swiper-container', {
                direction: 'vertical',
                slidesPerView: 'auto',
                touchMoveStopPropagation : false,
                freeMode: true,
                mousewheel: true,
            });
        }
    });

    // alert(new Date().getTime()+"--------------------------end")
}







/*点击按钮播放音频*/
$('.audio').on( 'touchstart',function(){




    index = SwiperList.realIndex
    index1 = index+1
    // alert(isplay)
    if(!isplay){

        if( typeof( goofypapaGame ) != "undefined" && goofypapaGame ){
            goofypapaStopAllAndPlayAudio( $(".swiper-slide").find(".audioplay")[SwiperList.realIndex].value, function(){
            } );
        }else if( typeof( window.android ) != "undefined" ) {
            window.android.initMusic($('.swiper-slide-active input')[0].value);
            window.android.startMusic();
        }else{
            console.log(" p_url ");
        }

        // $(".swiper-slide").find(".audioplay")[SwiperList.realIndex].play()

    }else{

        if( typeof( goofypapaGame ) != "undefined" && goofypapaGame ){
            goofypapaStopAllAudio();
        }else{
            console.log(" p_url ");
        }

        // $(".swiper-slide").find(".audioplay")[SwiperList.realIndex].pause()
    }
    isplay = !isplay
});


