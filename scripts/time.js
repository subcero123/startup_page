function date_time(id)
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array("一月", "二月", "三月", " 四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月");
        d = date.getDate();
        day = date.getDay();
        days = new Array('日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        //result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        result = ''+year+'年'+''+months[month]+''+days[day]+''+h+':'+m+':'+s;
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("'+id+'");','1000');
        return true;
}
