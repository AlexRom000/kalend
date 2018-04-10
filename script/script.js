var nowDate = new Date();
var currentMonth = nowDate.getMonth();
var currentYear = nowDate.getFullYear();
var nextMonth = new Date(currentYear, currentMonth+1, 1);
var bod = document.getElementById('body');
var year = document.getElementById('y');
var month = document.getElementById('m');
var arr = ['Січень' , 'Лютий' , 'Березь' , 'Квітень' , 'Травень' , 'Червень' , 'Липень' , 'Серпень' , 'Вересень' , 'Жовтень' , 'Листопад' , 'Грудень'];

function createCalendar(id, currentYear, currentMonth){
	var day = new Date(currentYear, currentMonth, 1);
	var num = day.getDay() -1;
	var weekln = 0;

// --------------Нумерація днів в тиждні-----
		if(num < 0){
			num = 6;
		}


	while(day.getMonth() == currentMonth){
		var tr = document.createElement('tr');
		var i = 0;
		while(i < 7 ){
			var td = document.createElement('td');

			if(weekln == 0 ){
					if(i < num){
					td.innerHTML = '';
				}else{
					td.innerHTML = day.getDate();
					day.setDate(day.getDate()+1);
				}
			}else{
				td.innerHTML = day.getDate();
				day.setDate(day.getDate()+1);
			}


			tr.appendChild(td);
			i++;


			if(day.getDate() == nextMonth.getDate()){
				if(weekln == 0){
					continue;
				}
				break;
			}


		}
		tab.appendChild(tr);
		weekln++;
	}

//-------------Запис місяця і року в елементи на сторінці---


	year.innerHTML = currentYear;
	month.innerHTML = arr[currentMonth];

	

//------------Робота з алертом---------


	var TD = document.getElementsByTagName('td');
	for(var i = 0; i<TD.length; i++){
		if(i < num){
			continue;
		}
		TD[i].onclick = function(){
			alert(arr[currentMonth] + ' ' + this.innerHTML);
		};
	}


//----------------Робота з фоном---


		function changeBG(){
		if(currentMonth == 11 ||  currentMonth == 0 || currentMonth == 1){
			bod.style.backgroundImage = "url('images/зима.jpg')";
		}else if(currentMonth == 2 || currentMonth == 3 || currentMonth == 4){
			bod.style.backgroundImage = "url('images/весна.jpg')";
		}else if(currentMonth == 5 || currentMonth == 6 || currentMonth == 7){
			bod.style.backgroundImage = "url('images/літо.jpg')";
		}else{
			bod.style.backgroundImage = "url('images/осінь.jpg')";
	}
}
	
changeBG();	

};


createCalendar('tab', 2100,7);