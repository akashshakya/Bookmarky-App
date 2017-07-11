
var bookmarkArray = [];
var siteName;
var siteAdd;
var showB = [];
var i;
var count;

function collectData () {

	 siteName = document.getElementById('siteName').value;
	 siteAdd = document.getElementById('addressofsite').value;

	 var bookmark = {
		site: siteName,
		url: siteAdd,
	 };		 

 	if ((typeof(storage)) !== undefined) {

	 		if (showB != null) {
	 			bookmarkArray = showB;
	 		}

	 		bookmarkArray.push(bookmark);

	 		localStorage.setItem("bookmarks", JSON.stringify(bookmarkArray));

	 		showB = JSON.parse(localStorage.getItem("bookmarks"));

	 		document.getElementById('show').innerHTML += '<li class="mdl-list__item mdl-list__item--three-line">'+
														    '<span class="mdl-list__item-primary-content">'+
														      '<i class="material-icons mdl-list__item-avatar">website</i>'+
														      '<span id="show1">' + showB[count].site + '</span>'+
														      '<span id="show2" class="mdl-list__item-text-body">'+
														       '<a target="_blank" href="http://'+showB[count].url+'">'+showB[count].url+'</a>'+
														      '</span>'+
														    '</span>'+
														    '<span class="mdl-list__item-secondary-content">'+
														      '<a class="mdl-list__item-secondary-action" style="cursor: pointer;" onclick="deleteBookmark()"><i class="material-icons">delete</i></a>'
														    +'</span>'+
														  '</li>';

			displayStored();
		
		} else {
			document.getElementById('message').innerHTML = "LOCAL STORAGE IS NOT AVAILABLE";
		}

		e.preventDefault();

}

function displayStored(){

	console.log('CREATED BY: AKASH SHAKYA');
	console.log('EMAIL: AKASHSHAKYA752@GMAIL.COM');

	showB = JSON.parse(localStorage.getItem("bookmarks"));
	
	if (showB == null) {
		count = 0;
	} else {
		count = showB.length;
	}
	document.getElementById('show').innerHTML = '';
	for (i = 0; i <= count; i++) {
	document.getElementById('show').innerHTML += '<li class="mdl-list__item mdl-list__item--three-line">'+
												    '<span class="mdl-list__item-primary-content">'+
												      '<i class="material-icons mdl-list__item-avatar">website</i>'+
												      '<span id="show1">'+showB[i].site+'</span>'+
												      '<span id="show2" class="mdl-list__item-text-body">'+
												       '<a target="_blank" href="http://'+showB[i].url+'">'+showB[i].url+'</a>'+
												      '</span>'+
												    '</span>'+
												    '<span class="mdl-list__item-secondary-content">'+
												      '<a class="mdl-list__item-secondary-action" style="cursor: pointer;" id="'+i+'" onclick="deleteBookmark(this.id)" ><i class="material-icons">delete</i></a>'
												    +'</span>'+
												  '</li>';


	}
	
}

displayStored();

function deleteBookmark (idOfBookmark) {

	// console.log(idOfBookmark);
	showB.splice(idOfBookmark, 1);
	localStorage.setItem("bookmarks", JSON.stringify(showB));
	displayStored();

}