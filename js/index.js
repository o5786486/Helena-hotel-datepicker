var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
var input = document.getElementById('input-id');
input.value = fecha.format(today, 'YYYY-MM-DD') + ' - ' + fecha.format(tomorrow, 'YYYY-MM-DD');
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