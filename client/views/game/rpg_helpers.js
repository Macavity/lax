
/*var generateBar = function($name,$value1,$value2,$color1,$color2,$view_type){
    // $name name of the Bar
    // $value1 value of the FULL part of the Bar
    // $value2 value of the MAX part of the bar
    // $color1 color of FULL part of the Bar
    // $color2 color of EMPTY part of the Bar
    $max_value = $value2 + ($value/100 * 5);
    if( $value1 > $max_value ){
        $value1 = $max_value;
    }
    $drug_value = $value1 - $value2;


    if(!$value2 || $value2 <= 0){
        return '';
    }

    if(substr_count($view_type,"percent")>0){
        $value1 = round($value1 * 100 / $value2,2);
        $value2 = 100;
        //$pr_right = "/$value2%";
        $pr_right = "%";
    }
    else{
        $pr_right = "/$value2";
    }
    if(substr_count($view_type,"break")>0){
        $break_line = '<br>';
    }
    if(substr_count($view_type,"2")>0){
        $smallbar = true;
    }

    $fullwidth = round(($value1/$value2)*50);
    $alt = $name.': '.$value1.$pr_right;
    $full = ($fullwidth != 0) ? '<img src="rpg/images/bar_'.$color1.'_middle.gif" width="'.$fullwidth.'" height="13" border="0" alt="'.$alt.'" title="'.$alt.'">' : '';
    $emptywidth = 50-$fullwidth;
    $empty = ($emptywidth != 0) ? '<img src="rpg/images/bar_'.$color2.'_middle.gif" width="'.$emptywidth.'" height="13" border="0" alt="'.$alt.'" title="'.$alt.'">' : '';
    if($smallbar){
        $full = '<img src="rpg/images/bar_2_full.gif" width="'.$fullwidth.'" height="7" alt="'.$alt.'" title="'.$alt.'">';
        $empty = '<img src="rpg/images/bar_2_empty.gif" width="'.$emptywidth.'" height="7" alt="'.$alt.'" title="'.$alt.'">';
    }

    if($value1 == 0)
        $clr = $color2;
    else
        $clr = $color1;
    $bar = ($smallbar) ? '<img src="rpg/images/bar_2_begin.gif">' : "<img width=\"6\" height=\"13\" src=\"rpg/images/bar_".$clr."_begin.gif\">";
    $bar .= $full.$empty;
    if($value1<$value2){
        $clr = $color2;
    }
    elseif($value1 > $value2){
        $drug_width = $fullwidth/$value * $drug_value;
        $bar .= '<img src="rpg/images/bar_orange_middle.gif" width="'.$drug_width.'" height="13" alt="+'.$drug_value.'">';
    }
else{
        $clr = $color1;
    }
    $bar .= ($smallbar) ? '<img src="rpg/images/bar_2_end.gif">' : "<img width=\"6\" height=\"13\" src=\"rpg/images/bar_".$clr."_end.gif\">";
    if(!substr_count($view_type,"bar")>0){
        $bar .= " $break_line<b>$value1$pr_right</b>&nbsp;&nbsp;&nbsp;";
    }
    return $bar;
}*/




