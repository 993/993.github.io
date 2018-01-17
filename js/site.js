
$(function() {
    $('#main').poptrox({
        _caption: function($a) { return $a.find('img').attr("alt"); },
        caption: function($a) { return $a.next('figcaption').text(); },
        overlayColor: '#2c2c2c',
        overlayOpacity: 0.85,
        popupCloserText: '',
        popupLoaderText: '',
        selector: 'figure a.image',
        usePopupCaption: true,
        usePopupDefaultStyling: false,
        usePopupEasyClose: false,
        usePopupNav: true,
        windowMargin: (skel.breakpoint('small').active ? 0 : 50)
    });
  });