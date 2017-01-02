/**
* simple jquery pagination new version
* A simple jQuery pagination plugin.
* https://github.com/rajaguru17/jqueryPagination-new/blob/master/jquery-pagesection.js
*
* Copyright 2017 rajaguru17
* Released under the MIT license.
* https://github.com/rajaguru17/jqueryPagination-new/blob/master/LICENSE
*/

(function($) {
    var pageNumber;
    var pageValue = {
        totalItems: 1,
        itemsPerPage: 1,
        currentPage: 1,
        selectFormat:false,
        onPageChange: function(pageNumber, event) {}
    }
    var pageOptions;
    $.fn.pagesection = function(page) {
        if (page) {
            for (var k = 0; k < Object.keys(page).length; k++) {
                pageValue[Object.keys(page)[k]] = page[Object.keys(page)[k]]
            }
        }
        pageOptions = parseInt(pageValue.totalItems) / parseInt(pageValue.itemsPerPage);
        if (parseInt(pageValue.totalItems) % parseInt(pageValue.itemsPerPage) != 0) {
            pageOptions = parseInt(pageOptions) + 1;
        }
        var pagebtn = '<button class=butCls id=firstPage title=firstpage><div class=lft-btn><div class=lft-btn-s></div></div></button> <button class=butCls id=previousPage title=previouspage><div class=lft-btn></div></button> <input id=pageNumber type=number value="' + pageValue.currentPage + '"> / <span id=totalPage>' + pageOptions + '</span> <button class="butCls nextpage" id=nextPage  title=nextpage><div class=rgt-btn></div></button> <button class=butCls id=lastPage title=lastpage><div class=rgt-btn><div class=rgt-btn-s></div></div></button>';
        this.append(pagebtn);
    }
    document.addEventListener('DOMContentLoaded', function() {
        function pageReset(event) {
            if (document.getElementById('pageNumber').value > pageOptions) {
                document.getElementById('pageNumber').value = pageOptions;
            }
            if (document.getElementById('pageNumber').value < 1) {
                document.getElementById('pageNumber').value = 1;
            }
            pageNumber = document.getElementById('pageNumber').value;
            return pageValue.onPageChange(pageNumber, event);
        }
        document.getElementById('pageNumber').addEventListener('change', function() {
            pageReset();
        });
        document.getElementById('nextPage').addEventListener('click', function() {
            document.getElementById('pageNumber').value = parseInt(document.getElementById('pageNumber').value) + 1;
            pageReset();
        });
        document.getElementById('firstPage').addEventListener('click', function() {
            document.getElementById('pageNumber').value = 1;
            pageReset();
        });
        document.getElementById('previousPage').addEventListener('click', function() {
            document.getElementById('pageNumber').value = parseInt(document.getElementById('pageNumber').value) - 1;
            pageReset();
        });
        document.getElementById('lastPage').addEventListener('click', function() {
            document.getElementById('pageNumber').value = pageOptions;
            pageReset();
        });
        pageReset();
    });
})(jQuery);
