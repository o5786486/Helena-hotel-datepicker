//取得今天的日期
var today = new Date();
//取得明天的日期
var tomorrow = new Date();
//明天的日期＝今天的日期+1 這是預設值 可以依照你的需求改預設end date要+幾天
tomorrow.setDate(tomorrow.getDate() + 1);
//去抓input欄位
var input = document.getElementById('input-id');
//用來設定input欄位預設值的顯示格式
input.value = fecha.format(today, 'YYYY-MM-DD') + ' - ' + fecha.format(tomorrow, 'YYYY-MM-DD');
//用來設定日期選擇器的一些細部設定 可以加很多設定 不會可以問我 或去 http://lopezb.com/hoteldatepicker/ 看他的範例
var datepicker = new HotelDatepicker(input,{autoClose: false,
    i18n: {
        selected: '請確認您的日期:',
        night: '晚',
        nights: '晚',
        button: '關閉',
        'checkin-disabled': 'Check-in disabled',
        'checkout-disabled': 'Check-out disabled',
        'day-names-short': ['日', '一', '二', '三', '四', '五', '六'],
        'day-names': [' 星期日', ' 星期一', ' 星期二', ' 星期三', '星期四', '星期五', '星期六'],
        'month-names-short': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        'month-names': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        'error-more': '日期範圍不得超過 1 晚',
        'error-more-plural': '日期範圍不得超過 %d 晚',
        'error-less': '日期範圍不得少於 1 晚',
        'error-less-plural': '日期範圍不得少於 %d 晚',
        'info-more': '請選擇至少 1 晚的日期範圍',
        'info-more-plural': '請選擇至少 %d 晚的日期範圍',
        'info-range': '請選擇 %d 到 %d 晚之間的日期範圍',
        'info-default': '請選擇日期範圍'
    }
});
