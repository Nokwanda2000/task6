setTimeout(function(){
    $("#Spinner").hide()
    $("#Loader").show()
}, 1000)


const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=73TNMu44lT0m1h1Nn6Bfiq',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1cdb8ebdcmsh76090112aa930f8p177542jsn1238efd140ac',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
    var Name = response.albums[0].artists[0].name
    $("#Name").text(`${Name}`)


    var Albums = response.albums[0].release_date
    $("#Albums").text(`Released ${Albums}`)

    var sail = response.albums[0].tracks
    $("#sail").text("Sail Out")
})
    // var track2 = response.albums[0].tracks
    //     $("#track2").text[`items ${track2}`]

    // var track3 = response.albums[0].tracks
    //     $("#track3").text[`items ${track3}`]

    // var track4 = response.albums[0].tracks
    //     $("#track4").text[`items ${track4}`]
	// console.log(response);

    // let list =response.albums[0].tracks.items
    //  let list = ""
    // for(var i = 0; i < tracks.length; i++){
    //     list += <li>${tracks[1].name}</li>
    // }
    // $("#list").html(list)
    //  console.log(tracks)