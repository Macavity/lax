

var roundNumber = function(num, precision) {
    return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision).toFixed(precision);
};

function isNumber (o) {
    return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
}

var getBar = function(name, valueFull, valueMax, colorFull, colorEmpty, viewType){
    var maxValue = valueMax + (valueFull/100 * 5);

    if( valueFull > maxValue ){
        valueFull = maxValue;
    }
    var $drug_value = valueFull - valueMax;
    var $drug_width;
    var labelSuffix = "",
        conditionalBreak = "",
        isSmallBar = false,
        $clr;
    var $bar;

    if(!valueMax || valueMax <= 0){
        return '';
    }

    if( ~viewType.indexOf("percent") ){

        valueFull = roundNumber(valueFull * 100 / valueMax, 2);
        valueMax = 100;
        labelSuffix = "%";
    }
    else{
        labelSuffix = "/"+valueMax;
    }

    if( ~viewType.indexOf("break") ){
        conditionalBreak = '<br>';
    }
    if( ~viewType.indexOf("2") ){
        isSmallBar = true;
    }


    var $fullwidth = Math.round((valueFull/valueMax)*50);
    var $alt = name+': '+valueFull + labelSuffix;
    var $full = ($fullwidth != 0) ? '<img src="rpg/images/bar_'+colorFull+'_middle.gif" width="'+$fullwidth+'" height="13" border="0" alt="'+$alt+'" title="'+$alt+'">' : '';
    var $emptywidth = 50-$fullwidth;
    var $empty = ($emptywidth != 0) ? '<img src="rpg/images/bar_'+colorEmpty+'_middle.gif" width="'+$emptywidth+'" height="13" border="0" alt="'+$alt+'" title="'+$alt+'">' : '';

    if(isSmallBar){
        $full = '<img src="rpg/images/bar_2_full.gif" width="'+$fullwidth+'" height="7" alt="'+$alt+'" title="'+$alt+'">';
        $empty = '<img src="rpg/images/bar_2_empty.gif" width="'+$emptywidth+'" height="7" alt="'+$alt+'" title="'+$alt+'">';
    }

    if(valueFull == 0)
        $clr = colorEmpty;
    else
        $clr = colorFull;
    $bar = (isSmallBar) ? '<img src="rpg/images/bar_2_begin.gif">' : '<img width="6" height="13" src="rpg/images/bar_'+$clr+"_begin.gif\">";
    $bar += $full + $empty;
    if(valueFull<valueMax){
        $clr = colorEmpty;
    }
    else if(valueFull > valueMax){
        $drug_width = $fullwidth/$value * $drug_value;
        $bar += '<img src="rpg/images/bar_orange_middle.gif" width="'+$drug_width+'" height="13" alt="+'+$drug_value+'">';
    }
    else{
        $clr = colorFull;
    }
    $bar += (isSmallBar) ? '<img src="rpg/images/bar_2_end.gif">' : '<img width="6" height="13" src="rpg/images/bar_'+$clr+"_end.gif\">";
    if(!~viewType.indexOf("bar")){
        $bar += " "+conditionalBreak+"<b>"+valueFull+labelSuffix+"</b>&nbsp;&nbsp;&nbsp;";
    }
    return $bar;
};