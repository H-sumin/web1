var Body={
    setAColor:function(color){
        // let selectedA = document.querySelectorAll('body a');
        // for (var i=0; i<selectedA.length; i++){
        //     selectedA[i].style.color=color;
        // }
        $('body a').css('color', color);
    },
    setBackgroundColor:function(color){
        //document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color);
    },
    setColor:function(color){
        //document.querySelector('body').style.color=color;
        $('body').css('color', color);
    }
};
function nightDayHandler(self){
    if(self.value==='night'){
        Body.setAColor('white');
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value="day";
    } else {
        Body.setAColor('black');
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value="night";
    }
}
