$(document).ready(function() {
	var vKey = 86;
	var aKey = 65;
	var cKey = 67;
	var backSpaceKey = 8;
	var deleteKey = 46;
	var hyphenKey = 189;
	var hyphenNumKey = 109;
	var tabKey = 9;
	var leftKey = 37;
	var rightKey = 39;
	var enterKey = 13;

	$(".brno").on("keyup", function(e) {
		var brno = $(this).val().replace(/-/gi,"");

		if(e.keyCode == backSpaceKey) {
			e.stopPropagation();
		} else {
			if(brno.length == 3) {
				$(this).val(brno + "-");
			}

			if(brno.length == 5) {
				$(this).val(brno.substring(0,3) + "-" + brno.substring(3,5) + "-");
			}

			if(brno.length >= 10) {
				$(this).val(brno.substring(0,3) + "-" + brno.substring(3,5) + "-" + brno.substring(5,10));
			}
		}
	});

	$(".hyphenNum").on("keydown", function(e) {
		if (
			!((e.keyCode >= 48 && e.keyCode <= 57) // 숫자
			|| (e.keyCode >= 96 && e.keyCode <= 105) // 숫자(Num)
			|| (e.keyCode == hyphenNumKey) // 하이프키값(Num)
			|| (e.keyCode == hyphenKey) // 하이프키값
			|| (e.ctrlKey && e.keyCode == vKey)	// ctrl+v
			|| (e.ctrlKey && e.keyCode == aKey)	// ctrl+a
			|| (e.ctrlKey && e.keyCode == cKey)	// ctrl+c
			|| (e.keyCode == backSpaceKey) // Backspace
			|| (e.keyCode == deleteKey) // delete
			|| (e.keyCode == tabKey) // tab
			|| (e.keyCode == leftKey) // 왼쪽 방향키
			|| (e.keyCode == rightKey) // 오른쪽 방향키
			|| (e.keyCode == enterKey)) // 엔터
		) {
			e.preventDefault();
		}
	});

	$(".onlyNum").on("keydown", function(e) {
		if (
			!((e.keyCode >= 48 && e.keyCode <= 57) // 숫자
			|| (e.keyCode >= 96 && e.keyCode <= 105) // 숫자(Num)
			|| (e.ctrlKey && e.keyCode == vKey)	// ctrl+v
			|| (e.ctrlKey && e.keyCode == aKey)	// ctrl+a
			|| (e.ctrlKey && e.keyCode == cKey)	// ctrl+c
			|| (e.keyCode == backSpaceKey) // Backspace
			|| (e.keyCode == deleteKey) // delete
			|| (e.keyCode == tabKey) // tab
			|| (e.keyCode == leftKey) // 왼쪽 방향키
			|| (e.keyCode == rightKey) // 오른쪽 방향키
			|| (e.keyCode == enterKey)) // 엔터
		) {
			e.preventDefault();
		}
	});

	$(".telno").on("keyup", function(e) {
		var telno = $(this).val().replace(/-/gi,"");

		if(e.keyCode == backSpaceKey) {
			e.stopPropagation();
		} else {
			if((telno.substring(0,3) == "010") || (telno.substring(0,3) == "070")) {
				if(telno.length == 3) {
					$(this).val(telno.substring(0,3) + "-");
				}

				if(telno.length == 7) {
					$(this).val(telno.substring(0,3) + "-" + telno.substring(3,7) + "-");
				}

				if(telno.length >= 11) {
					$(this).val(telno.substring(0,3) + "-" + telno.substring(3,7) + "-" + telno.substring(7,11));
				}
			}

			if(telno.substring(0,2) == "02") {
				if(telno.length == 2) {
					$(this).val(telno.substring(0,2) + "-");
				}

				if(telno.length == 5) {
					$(this).val(telno.substring(0,2) + "-" + telno.substring(2,5) + "-");
				}

				if(telno.length == 6) {
					$(this).val(telno.substring(0,2) + "-" + telno.substring(2,6) + "-");
				}

				if(telno.length == 9) {
					$(this).val(telno.substring(0,2) + "-" + telno.substring(2,5) + "-" + telno.substring(5,9));
				}

				if(telno.length >= 10) {
					$(this).val(telno.substring(0,2) + "-" + telno.substring(2,6) + "-" + telno.substring(6,10));
				}
			}

			if(
				(telno.substring(0,3) == "031")
				|| (telno.substring(0,3) == "032")
				|| (telno.substring(0,3) == "033")
				|| (telno.substring(0,3) == "041")
				|| (telno.substring(0,3) == "042")
				|| (telno.substring(0,3) == "043")
				|| (telno.substring(0,3) == "044")
				|| (telno.substring(0,3) == "051")
				|| (telno.substring(0,3) == "052")
				|| (telno.substring(0,3) == "053")
				|| (telno.substring(0,3) == "054")
				|| (telno.substring(0,3) == "055")
				|| (telno.substring(0,3) == "061")
				|| (telno.substring(0,3) == "062")
				|| (telno.substring(0,3) == "063")
				|| (telno.substring(0,3) == "064")
			) {

				if(telno.length == 3) {
					$(this).val(telno.substring(0,3) + "-");
				}

				if(telno.length == 6) {
					$(this).val(telno.substring(0,3) + "-" + telno.substring(3,6) + "-");
				}

				if(telno.length >= 10) {
					$(this).val(telno.substring(0,3) + "-" + telno.substring(3,6) + "-" + telno.substring(6,10));
				}

				if(telno.length >= 11) {
					$(this).val(telno.substring(0,3) + "-" + telno.substring(3,7) + "-" + telno.substring(7,11));
				}
			}

			if(telno.substring(0,4) == "0505") {
				if(telno.length == 4) {
					$(this).val(telno.substring(0,4) + "-");
				}

				if(telno.length == 8) {
					$(this).val(telno.substring(0,4) + "-" + telno.substring(4,8) + "-");
				}

				if(telno.length >= 12) {
					$(this).val(telno.substring(0,4) + "-" + telno.substring(4,8) + "-" + telno.substring(8,12));
				}
			}
		}
	});
	$(".jumin").on("keyup", function(e) {
		var jumin = $(this).val();
		if(jumin.length == 6) {
			$(this).val(jumin.substring(0,6) + "-");
		}
	});
	// form-control 에러 표시 없애기
	$(".form-control").on("focusin", function() {
		formErrorViewRemove($(this));
	});

	// Ajax요청 글로벌 설정
	$.ajaxSetup({
		dataType: "json"
        ,error: function(data) {
        	if (data.status == 500 || data.status == 404 || data.status == 0) {
        		if (data.status == 0) {
        			alert("전송 가능한 용량을 초과 하였습니다.");
        		} else {
        			alert("서버 요청중 에러가 발생 하였습니다.");
        		}
        	} else if (data.responseJSON != null && data.responseJSON.result != null && data.responseJSON.result == "error" && data.responseJSON.errors != null) {
	        	var result = data.responseJSON;
	        	var errors = result.errors;

	            for (var i = 0; i < errors.length; i++) {
	            	var objectName = errors[i].objectName;
	            	var field = errors[i].field;

	            	if (field.indexOf(".") > -1) {
	            		field = field.replace(".","\\.");
	            	}

	            	var message = errors[i].message;
	            	var fieldNm = "#" + objectName + " #" + field;
	            	var viewType = errors[i].viewType;

	            	if (viewType == undefined) {
	            		viewType = "";
	            	}

	            	if (viewType == "alert") {
	            		alert(message);
	            		if (fieldNm != "# #") {
	            			$(fieldNm).focus();
	            		}
	            		return;
	            	} else {
		            	if ($(fieldNm).length > 0) {
		            		 if ($(fieldNm).parent().attr("class").indexOf("form-group") > -1) {
			            		$(fieldNm).parent().addClass("has-error");
			            		$(fieldNm).parent().children("span").text(message);
			            		$(fieldNm).parent().children("span").css("display","");
		            		 } else if ($(fieldNm).parent().parent().attr("class").indexOf("form-group") > -1) {
		            			$(fieldNm).parent().parent().addClass("has-error");
			            		$(fieldNm).parent().parent().children("span").text(message);
			            		$(fieldNm).parent().parent().children("span").css("display","");
		            		 }
		            	}
	            	}
	            }
        	} else if (data.responseJSON != null && data.responseJSON.result != null && data.responseJSON.result == "error") {
        		if (data.responseJSON.message != null) {
        			alert(data.responseJSON.message);
        		} else {
        			alert("서버 요청중 에러가 발생 하였습니다.");
        		}
        	} else {
        		alert("잘못된 접근 방식 입니다.");
        	}
        }
	});



	// .form-datepicker 에 대한 처리
	$(".form-datepicker").each(function(index, item) {
		formDatepickerMake($(this),"");
	});

	// .form-month-datepicker 에 대한 처리
	$(".form-month-datepicker").each(function(index, item) {
		formDatepickerMake($(this),"months");
	});
	// .form-datepicker-nopre 에 대한 처리
	$(".form-datepicker-nopre").each(function(index, item) {
		formDatepickerMake($(this),"nopre");
	});
});

var formErrorViewRemove = function(obj) {
	if (
    	obj.parent().attr("class") != undefined
    	&& obj.parent().attr("class").indexOf("has-error") > -1
    ) {
		obj.parent().removeClass("has-error");
		obj.parent().children("span").text("");
		obj.parent().children("span").css("display","none");
    } else if (
    	obj.parent().parent().attr("class") != undefined
    	&& obj.parent().parent().attr("class").indexOf("has-error") > -1
    ) {
    	obj.parent().parent().removeClass("has-error");
    	obj.parent().parent().children("span").text("");
    	obj.parent().parent().children("span").css("display","none");
    }
}

//숫자3자리마다 콤마 찍기
var numberWithCommas = function(str) {
	return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//도로명주소검색
var roadNmJusoSearch = function(frmId, zipId, bassRnadId, dtalRnadId, etcRnadId) {
	// 기존모달창은 제거
	$("#roadNmJusoSearch").remove();

	var roadNmJusoResult;

	// 새로운모달창 생성 HTML 정의 및 생성
	var html = "";
	html += "<div class='modal fade' id='roadNmJusoSearch' tabindex='-1' role='dialog' aria-labelledby='roadNmJusoSearch' aria-hidden='true' style='z-index:9999'>\n";
	html += "    <div class='modal-dialog modal-lg'>\n";
	html += "        <div class='modal-content'>\n";
	html += "            <div class='modal-header'>\n";
	html += "                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button>\n";
	html += "                <h4 class='modal-title'>\n";
	html += "                    도로명 주소찾기\n";
	html += "                </h4>\n";
	html += "            </div>\n";
	html += "            <div class='modal-body f100'>\n";
	html += "                <div class='box p10 mB10'>\n";
	html += "                    <p>도로명 및 건물번호로 검색 하세요.</p>\n";
	html += "                    <p>예) 도로명 : 태정로</p>\n";
	html += "                    <p>예) 도로명+건물번호 : 태정로 6</p>\n";
	html += "                </div>\n";
	html += "             	 <form name='roadNmJusoSearchFrm' id='roadNmJusoSearchFrm' action='/com/juso/roadNmJusoSearchProcess.do' method='post'>\n";
	html += "                <div class='box-gray center mB20'>\n";
	html += "					 <input type='hidden' name='_csrf' value='" + $("meta[name='_csrf']").attr("content") + "'/>";
	html += "                    <div class='search-select'>\n";
	html += "                        <input type='text' value='' name='searchWord' id='searchWord' class='form-control form f90'>\n";
	html += "                        <button type='submit' class='button button-form button-point'>검색</button>\n";
	html += "                    </div>\n";
	html += "                </div>\n";
	html += "				 <ul class='headTable f0 mTarea mB10' style='display:none;' id='roadNmJusoSearchTot'>\n";
    html += "					<li class='fl mT10'>총 <strong class='font-p1'>0</strong> 건</li>\n";
    html += "				 </ul>\n";
	html += "                </form>\n";
	html += "                 <table class='tbl-write'>\n";
	html += "                    <colgroup>\n";
	html += "                        <col width='80px'>\n";
	html += "                        <col width='*'>\n";
	html += "                    </colgroup>\n";
	html += "                    <thead>\n";
	html += "                    <tr>\n";
	html += "                        <th class='center'>우편번호</th>\n";
	html += "                        <th class='center'>도로명주소</th>\n";
	html += "                    </tr>\n";
	html += "                    </thead>\n";
	html += "                    <tbody id='roadNmJusoSearchList'>\n";
	html += "                        <tr>\n";
	html += "                            <td colspan='2' class='center'>검색된 결과가 없습니다.</td>\n";
	html += "                        </tr>\n";
	html += "                    </tbody>\n";
	html += "                </table>\n";
	html += "            </div>\n";
	html += "            <div class='modal-footer'>\n";
	html += "                <button type='button' data-dismiss='modal' aria-hidden='true' class='button mL10' style='width:80px'>취소</button>\n";
	html += "            </div>\n";
	html += "        </div>\n";
	html += "    </div>\n";
	html += "</div>\n";
	$("body").append(html);
	$("#roadNmJusoSearch").modal();
	$("#roadNmJusoSearch").ajaxForm({
    	success: function(data) {
    		if (data.totalCount > 0) {
    			var list = data.list;

    			var totCountHtml = "<li class='fl mT10'>총 <strong class='font-p1'>" + numberWithCommas(data.totalCount) + "</strong> 건</li>";
    			$("#roadNmJusoSearchTot").html(totCountHtml);
    			$("#roadNmJusoSearchTot").css("display", "");

    			if (data.totalCount < 1000 && list) {
	    			$("#roadNmJusoSearch #roadNmJusoSearchList").html("");

	    			for (var i = 0; i < list.length; i++) {
	    				var address = list[i].bassRnad;
	    				if (list[i].etcRnad) {
	    					address += " " + list[i].etcRnad;
	    				}

	    				var html = "<tr><td class='center'><a href='javascript:roadNmJusoSearchResult(\"" + frmId + "\", \"" + zipId + "\", \"" + bassRnadId + "\", \"" + dtalRnadId + "\", \"" + etcRnadId + "\", \"" + list[i].zip + "|" + list[i].bassRnad + "|" + list[i].etcRnad + "\");'>" + list[i].zip + "</a></td><td><a href='javascript:roadNmJusoSearchResult(\"" + frmId + "\", \"" + zipId + "\", \"" + bassRnadId + "\", \"" + dtalRnadId + "\", \"" + etcRnadId + "\", \"" + list[i].zip + "|" + list[i].bassRnad + "|" + list[i].etcRnad + "\");'>" + address + "</a></td></tr>";
	    				$("#roadNmJusoSearch #roadNmJusoSearchList").append(html);
	    			}
    			} else {
    				var manySearchHtml = "";

    				manySearchHtml += "<span class='fr'>\n";
    				manySearchHtml += "	<select name='bassRnad' id='roadNmJusobassRnad' class='form-control fix3'>\n";
    				manySearchHtml += "	<option value=''>--- 시도/시군구 ---</option>\n";
    				for (var i = 0; i < list.length; i++) {
    					manySearchHtml += "	<option value='" + list[i].bassRnad + "'>" + list[i].bassRnad + "</option>\n";
    				}
    				manySearchHtml += "	</select>\n";
    				manySearchHtml += "</span>\n";

    				$("#roadNmJusoSearchTot").append(manySearchHtml);

    				$("#roadNmJusoSearch #roadNmJusoSearchList").html("");
	    			var html = "<tr><td class='center' colspan='3'>주소검색 결과가 너무 많습니다.<br/>목록에서 시도/시군구명을 선택하여 검색 범위를 좁힐 수 있습니다.</td></tr>";
    				$("#roadNmJusoSearch #roadNmJusoSearchList").append(html);

    				$("#roadNmJusobassRnad").on("change", function() {
    					$("#roadNmJusoSearchFrm").submit();
    				});

    			}
    		} else {
    			$("#roadNmJusoSearchTot").css("display", "none");
    			$("#roadNmJusoSearch #roadNmJusoSearchList").html("");
    			var html = "<tr><td class='center' colspan='3'>검색된 결과가 없습니다.</td></tr>";
				$("#roadNmJusoSearch #roadNmJusoSearchList").append(html);
    		}
        }
    });


}


// 도로명주소 검색 결과처리
var roadNmJusoSearchResult = function(frmId, zipId, bassRnadId, dtalRnadId, etcRnadId, address) {
	var address = address.split("\|");

	if (address.length > 0) {
		$("#" + frmId + " #" + zipId).val(address[0]);
	}

	if (address.length > 1) {
		$("#" + frmId + " #" + bassRnadId).val(address[1]);
	}

	if (address.length > 2) {
		if (address[2] && address[2] != "null") {
			$("#" + frmId + " #" + etcRnadId).val(address[2]);
		}
	}

	$("#roadNmJusoSearch").modal('hide');
	setTimeout(function() {
		$("#" + frmId + " #" + dtalRnadId).focus();
	}, 100);
}

var formDatepickerMake = function(obj, type) {
	var _this = obj;
	var nowFormDatepicker = _this;
	var nowFormDatepickerSubSpan = _this.parent().children("span");
	var now = new Date();

	_this.parent().append("<div class='input-group' style='width:130px;'></div>");
	_this.parent().children("div").append(nowFormDatepicker);
	_this.parent().append("<span class='input-group-addon'><i class='fa fa-calendar'></i>");
	_this.parent().parent().append(nowFormDatepickerSubSpan);

	var dateFormat = "yyyy-mm-dd";
	var viewMode = "days";
	var minViewMode = "days";

	if (type == "months") {
		dateFormat = "yyyy-mm";
		viewMode = "months";
		minViewMode = "months";
	}
	_this.datepicker({
		format: dateFormat
		,viewMode: viewMode
	    ,minViewMode: minViewMode
	    ,onRender: function(date) {
	    	if (type == "nopre") {
	    		return date.valueOf() < now.valueOf() ? "disabled" : "";
	    	}else {
	    		return "";
	    	}
		}
	}).on("changeDate", function(ev) {
		formErrorViewRemove(_this);
  		_this.datepicker("hide");
	});

	_this.parent().children("span").on("click", function() {
		_this.datepicker("show");
	});

	_this.attr("readOnly", "readOnly");
}

//날짜 타입 월 슬래쉬추가
var monthSlashInto = function(month) {
	month =month.replace(/(.{4})/g,"$1-");
	return month;
}
//날짜 타입 년 슬래쉬추가
var daySlashInto = function(date) {
	  date =date.replace(/(.{4})/g,"$1-");
      var year =date.substr("0","5");
      var day = date.substr("5","7").replace(/(.{2})/g,"$1-");
      day =day.replace("--","");
      date = year + day;

      return date;
}


//년도 셀렉트박스 옵션.
var yearSelectBoxMake = function(name,data) {
	var now = new Date();
	var year = now.getFullYear();
	for(var i = year; i >=2019; i-- ){
		if(data == i){
			$("#"+name).append("<option value='"+i+"' selected>"+i+"</option>");
		}else{
			$("#"+name).append("<option value='"+i+"'>"+i+"</option>");
		}

	}

}



//전화번호 데이터 슬래쉬 추가.
	var telFomat = function(telno) {
		if((telno.substring(0,3) == "010") || (telno.substring(0,3) == "070")) {
			telno = telno.substring(0,3) + "-" + telno.substring(3,7) + "-" + telno.substring(7,11)
		}

		if(telno.substring(0,2) == "02") {

			if(telno.length == 9) {
				telno =telno.substring(0,2) + "-" + telno.substring(2,5) + "-" + telno.substring(5,9);
			}

			if(telno.length >= 10) {
				telno =telno.substring(0,2) + "-" + telno.substring(2,6) + "-" + telno.substring(6,10);
			}
		}

		if(
			(telno.substring(0,3) == "031")
			|| (telno.substring(0,3) == "032")
			|| (telno.substring(0,3) == "033")
			|| (telno.substring(0,3) == "041")
			|| (telno.substring(0,3) == "042")
			|| (telno.substring(0,3) == "043")
			|| (telno.substring(0,3) == "044")
			|| (telno.substring(0,3) == "051")
			|| (telno.substring(0,3) == "052")
			|| (telno.substring(0,3) == "053")
			|| (telno.substring(0,3) == "054")
			|| (telno.substring(0,3) == "055")
			|| (telno.substring(0,3) == "061")
			|| (telno.substring(0,3) == "062")
			|| (telno.substring(0,3) == "063")
			|| (telno.substring(0,3) == "064")
		) {
			telno = telno.substring(0,3) + "-" + telno.substring(3,6) + "-" + telno.substring(6,10)
		}

		if(telno.substring(0,4) == "0505") {
			telno = telno.substring(0,4) + "-" + telno.substring(4,8) + "-" + telno.substring(8,12)
		}
		return telno;
}

	//충경력 포맷.
	var totalCarrFormat = function(carr) {
		var year = Math.floor(carr /12);
		var month = carr % 12;
		if(year==0){
			year="";
		}else{
			year=year+"년"
		}
		return year+month+"개월"
	}


	//날짜 포맷.
   var  dateFormatEv = function (date,type) {
	   var returnDate ="";
	   if(type=="month"){
	  	 if(date.getMonth()<9){returnDate = date.getFullYear()+"-0"+(date.getMonth()+1);}
	  	 if(date.getMonth()>=9){returnDate = date.getFullYear()+"-"+(date.getMonth()+1);}
	   }else{
		   console.log()
	      if(date.getMonth()<9){returnDate = date.getFullYear()+"-0"+(date.getMonth()+1);}
	  	  if(date.getMonth()>=9){returnDate = date.getFullYear()+"-"+(date.getMonth()+1);}
	  	  if(date.getDate()<10){returnDate = returnDate+"-0"+date.getDate();}
	  	  if(date.getDate()>=10){returnDate =returnDate+"-"+date.getDate();}
	   }
	   return returnDate;
   }

var openPdfViewer = function(type, id, flid, fileCd) {
	var pdfFile = webRoot + "/com/file/fileDownload.do";
	if (flid != "" && fileCd != "") {
		pdfFile += "?flid=" + flid + "&fileCd=" + fileCd;
	} else if (flid != "" && fileCd == "") {
		pdfFile += "?flid=" + flid;
	} else if (flid == "" && fileCd != "") {
		pdfFile += "?fileCd=" + fileCd;
	} else {
		alert("PDF 파일정보가 존재하지 않습니다.");
		return;
	}
	pdfFile = encodeURIComponent(pdfFile);

	var pdfViewer = webRoot + "/pdfjs/viewer.html?file=" + pdfFile;

	if (type == "iframe") {
		if (id == "") {
			alert("IFRAME 아이디가 존재 하지 않습니다.");
			return;
		} else {
			if ($("#" + id).length > 0) {
				$("#" + id).attr("src", pdfViewer);
				$("#" + id).css("display", "");
			} else {
				alert("IFRAME 아이디가 존재 하지 않습니다.");
				return;
			}
		}
	} else {
		var remote = window.open(pdfViewer, "pdfViewer");
		remote.focus();
	}
}

//기관검색
var etpSearch = function(frmId, brnoId, rtnFunction) {
   	// 기존모달창은 제거
   	$("#etpSearchView").remove();

   	if (brnoId.indexOf(".") > -1) {
   		brnoId = brnoId.replace(".", "\\.");
   	}

   	// 새로운모달창 생성 HTML 정의 및 생성
   	var html = "";
	html += "<div class='modal fade' id='etpSearchView' tabindex='-1' role='dialog' aria-labelledby='etpSearchView' aria-hidden='true' style='z-index:9999'>\n";
	html += "    <div class='modal-dialog modal-lg'>\n";
	html += "        <div class='modal-content'>\n";
	html += "            <div class='modal-header'>\n";
	html += "                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button>\n";
	html += "                <h4 class='modal-title'>\n";
	html += "                    기관 찾기\n";
	html += "                </h4>\n";
	html += "            </div>\n";
	html += "            <div class='modal-body f100'>\n";
	html += "             	 <form name='etpSearchViewFrm' id='etpSearchViewFrm' action='" + webRoot + "/com/etp/etpSearchProcess.do' method='post'>\n";
	html += "                <div class='box-gray center mB20'>\n";
	html += "					 <input type='hidden' name='_csrf' value='" + $("meta[name='_csrf']").attr("content") + "'/>";
	html += "                    <div class='search-select'>\n";
	html += "                        <input type='text' value='' name='searchWord' id='searchWord' class='form-control form f90 inline'>\n";
	html += "                        <button type='submit' class='button button-form button-point inline'>검색</button>\n";
	html += "                    </div>\n";
	html += "                </div>\n";
	html += "				 <ul class='headTable f0 mTarea mB10' style='display:none;' id='etpSearchViewFrmTot'>\n";
    html += "					<li class='fl mT10'>총 <strong class='font-p1'>0</strong> 건</li>\n";
    html += "				 </ul>\n";
	html += "                </form>\n";
	html += "                 <table class='tbl-write'>\n";
	html += "                    <colgroup>\n";
	html += "                        <col width='140px'>\n";
	html += "                        <col width='100px'>\n";
	html += "                        <col width='*'>\n";
	html += "                    </colgroup>\n";
	html += "                    <thead>\n";
	html += "                    <tr>\n";
	html += "                        <th class='center'>기관명</th>\n";
	html += "                        <th class='center'>대표자명</th>\n";
	html += "                        <th class='center'>소재지</th>\n";
	html += "                    </tr>\n";
	html += "                    </thead>\n";
	html += "                    <tbody id='etpSearchList'>\n";
	html += "                        <tr>\n";
	html += "                            <td colspan='3' class='center'>검색된 결과가 없습니다.</td>\n";
	html += "                        </tr>\n";
	html += "                    </tbody>\n";
	html += "                </table>\n";
	html += "            </div>\n";
	html += "            <div class='modal-footer'>\n";
	html += "                <button type='button' data-dismiss='modal' aria-hidden='true' class='button mL10' style='width:80px'>취소</button>\n";
	html += "            </div>\n";
	html += "        </div>\n";
	html += "    </div>\n";
	html += "</div>\n";
	$("body").append(html);

   	$("#etpSearchViewFrm").ajaxForm({
    	success: function(data) {
    		if (data.totalCount > 0) {
    			var list = data.list;

    			var totCountHtml = "<li class='fl mT10'>총 <strong class='font-p1'>" + numberWithCommas(data.totalCount) + "</strong> 건</li>";
    			$("#etpSearchViewFrmTot").html(totCountHtml);
    			$("#etpSearchViewFrmTot").css("display", "");

    			$("#etpSearchView #etpSearchList").html("");

    			for (var i = 0; i < list.length; i++) {
    				var etp = list[i];
    				var address = etp.bassRnad;

    				if (etp.dtalRnad != null && etp.dtalRnad.length > 0) {
    					address += " " + etp.dtalRnad;
    				}

    				if (etp.etcRnad != null && etp.etcRnad.length > 0) {
    					address += " " + etp.etcRnad;
    				}

    				var html = "<tr><td class='center'><a href='javascript:$(\"#etpSearchView\").modal(\"hide\");" + rtnFunction + "(" + JSON.stringify(etp) + ");'>" + etp.nmor + "</a></td><td class='center'><a href='javascript:$(\"#etpSearchView\").modal(\"hide\");" + rtnFunction + "(" + JSON.stringify(etp) + ");'>" + etp.rptn + "</a></td><td><a href='javascript:$(\"#etpSearchView\").modal(\"hide\");" + rtnFunction + "(" + JSON.stringify(etp) + ");'>" + address + "</a></td></tr>";
    				$("#etpSearchView #etpSearchList").append(html);
    			}
    		} else {
    			$("#etpSearchViewFrmTot").css("display", "none");
    			$("#etpSearchView #etpSearchList").html("");
    			var html = "<tr><td class='center' colspan='3'>검색된 결과가 없습니다.</td></tr>";
				$("#etpSearchView #etpSearchList").append(html);
    		}
    	}
   	});

   	$("#etpSearchView").modal();

   	if ($("#" + brnoId).length > 0) {
		if ($("#" + brnoId).val() != "") {
			$("#etpSearchViewFrm #searchWord").val($("#" + brnoId).val());
			$("#etpSearchViewFrm").submit();
		}
	}
}

/**
 * 파일명에서 확장자명 추출
 * @param filename   파일명
 * @returns _fileExt 확장자명
 */
var getExtensionOfFilename = function(filename) {
    var _fileLen = filename.length;

    /**
     * lastIndexOf('.')
     * 뒤에서부터 '.'의 위치를 찾기위한 함수
     * 검색 문자의 위치를 반환한다.
     * 파일 이름에 '.'이 포함되는 경우가 있기 때문에 lastIndexOf() 사용
     */
    var _lastDot = filename.lastIndexOf('.');

    // 확장자 명만 추출한 후 소문자로 변경
    var _fileExt = filename.substring(_lastDot, _fileLen).toLowerCase();

    return _fileExt;
}

// 리포트뷰어
var reportViewer = function(reportFileNm, reportParam) {
	var remote = window.open(webRoot + '/com/report/viewer.do?reportFileNm=' + encodeURIComponent(reportFileNm) + "&reportParam=" + encodeURIComponent(reportParam), 'ers_viewer', 'width=900,height=800');
	remote.focus();
}

