// Document ready
$(function(){
    $('.box-compare').on('focus', '#depCity, .retCity, #m_hotel, #pulocation', function () {
        $(this).val('');
    });

    $('body.mobile, body.tablet')
        .find('.depDate, .retDate, .pickupDate, .dropoffDate').each(function () {
            convertDateFormat_to('m', this, '-');
        }).end()
        .on('click', '.mobissimo-submit', function () {
            if ($('#pl_mobissimosearch_form_hotel').length != 0) {
                if ($('#m_hotel').val().length != 0) {
                    $('.depDate, .retDate').each(function () {
                        convertDateFormat_to('d', this, '-');
                    });
                }
            } else if ($('#pl_mobissimosearch_form_car').length != 0) {
                if ($('#pulocation').val().length != 0) {
                    $('.pickupDate, .dropoffDate').each(function () {
                        convertDateFormat_to('d', this, '-');
                    });
                }
            } else if ($('#pl_mobissimosearch_form_air').length != 0) {
                if ($('[name="depCity"]').val().length != 0 && $('[name="retCity"]').val().length != 0) {
                    $('[name="depDate"], [name="retDate"]').each(function () {
                        convertDateFormat_to('d', this, '-');
                    });
                }
            }
        });
    /*
     * Get val from date field
     * and convert it to the mobile o desktop format
     */
    function convertDateFormat_to(type, el, sep) {
        // desktop: m-d-y, mobile: y-d-m;
        var val, y, m, d, newDate;

        val = $(el).val();
        if (type == 'm') {
            m = val.substring(0, 2);
            d = val.substring(3, 5);
            y = val.substring(6, 10);
            newDate = y + sep + m + sep + d;
            $(el).attr('type', 'date').val(newDate);
        } else if (type == 'd') {
            y = val.substring(0, 4);
            m = val.substring(5, 7);
            d = val.substring(8, 10);
            newDate = m + sep + d + sep + y;
            $(el).attr('type', 'text').val(newDate);
        }
    }
    //
    $.datepicker.setDefaults($.datepicker.regional["it"]);
});