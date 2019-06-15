var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var finishedString = "";
  for (var playlist in library["playlists"]) {
    var id = library["playlists"][playlist]["id"];
    var name = library["playlists"][playlist]["name"];
    var numTracks = library["playlists"][playlist]["tracks"].length;
    finishedString += id + ": " + name + " - " + numTracks + " tracks" + "\n";
  }
  return finishedString;
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var finishedString = "";
  for (var tracks in library["tracks"]) {
    var id = library["tracks"][tracks]["id"];
    var name = library["tracks"][tracks]["name"];
    var artist = library["tracks"][tracks]["artist"];
    var album = library["tracks"][tracks]["album"];
    finishedString += id + ": " + name + " by " + artist + " (" + album + ") " + "\n";
  }
  return finishedString;
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

  function playlistInfo(playlist) {
    var playlistInfoFinal = "";
    var indPlaylistId = library["playlists"][playlist];

    var id = indPlaylistId["id"];
    var name = indPlaylistId["name"];
    var numTracks = indPlaylistId["tracks"].length;
    playlistInfoFinal += id + ": " + name + " - " + numTracks + " tracks" + "\n";

    return playlistInfoFinal;
  }

  function tracksInfo(playlist) {
    var playlistId = library["playlists"][playlist];
    var playlistTracks = playlistId["tracks"];
    var finishedString = "";

    for (var trackPos in playlistTracks) {
      var tracksTrackId = playlistTracks[trackPos];
      var indTrackId = library["tracks"][tracksTrackId];
      var trackName = indTrackId["name"];
      var artistName = indTrackId["artist"];
      var albumName = indTrackId["album"];

      finishedString += indTrackId["id"] + ": " + trackName + " by " + artistName + " (" + albumName + ") " + "\n";

    }
    return finishedString;
  }
  return playlistInfo(playlistId) + tracksInfo(playlistId);
}

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library["playlists"][playlistId]["tracks"].push(trackId);
  return library["playlists"][playlistId];
}

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library
  //name: Pied Piper
  //artist: Crispian St.Peters
  //album: Follow Me

var addTrack = function (name, artist, album) {
  var uniqueId = uid();
  library["tracks"][uniqueId] = {};
  library["tracks"][uniqueId]["id"] = uniqueId;
  library["tracks"][uniqueId]["name"] = name;
  library["tracks"][uniqueId]["artist"] = artist;
  library["tracks"][uniqueId]["album"] = album;
}

addTrack("Pied Piper", "Crispian St.Peters", "Follow Me");

// adds a playlist to the library

var addPlaylist = function (name) {
  var uniqueId = uid();
  library["playlists"][uniqueId] = {};
  library["playlists"][uniqueId]["id"] = uniqueId;
  library["playlists"][uniqueId]["name"] = name;
  library["playlists"][uniqueId]["tracks"] = [];
}

addPlaylist("Silicon Valley");

// STRETCH:
// given a query string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

  var regex = '[' + query + ']';
  return 'library'.search(regex);
}
console.log(printSearchResults('Code Monkey'));
console.log(printSearchResults('Model View Controller'));
