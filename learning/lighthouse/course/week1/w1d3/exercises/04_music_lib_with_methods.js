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
             },
  printPlaylists: function () {
    var finishedString = "";
    for (var playlist in this["playlists"]) {
      var id = this["playlists"][playlist]["id"];
      var name = this["playlists"][playlist]["name"];
      var numTracks = this["playlists"][playlist]["tracks"].length;
      finishedString += id + ": " + name + " - " + numTracks + " tracks" + "\n";
    }
    return finishedString;
  },

  printTracks: function () {
    var finishedString = "";
    for (var tracks in this["tracks"]) {
      var id = this["tracks"][tracks]["id"];
      var name = this["tracks"][tracks]["name"];
      var artist = this["tracks"][tracks]["artist"];
      var album = this["tracks"][tracks]["album"];
      finishedString += id + ": " + name + " by " + artist + " (" + album + ") " + "\n";
    }
    return finishedString;
  },

  printPlaylist: function (playlistId) {

    var playlistInfo = function(playlist) {
      var playlistInfoFinal = "";
      var indPlaylistId = this["playlists"][playlist];

      var id = indPlaylistId["id"];
      var name = indPlaylistId["name"];
      var numTracks = indPlaylistId["tracks"].length;
      playlistInfoFinal += id + ": " + name + " - " + numTracks + " tracks" + "\n";

      return playlistInfoFinal;
    }

    var tracksInfo = function(playlist) {
      var playlistId = this["playlists"][playlist];
      var playlistTracks = playlistId["tracks"];
      var finishedString = "";

      for (var trackPos in playlistTracks) {
        var tracksTrackId = playlistTracks[trackPos];
        var indTrackId = this["tracks"][tracksTrackId];
        var trackName = indTrackId["name"];
        var artistName = indTrackId["artist"];
        var albumName = indTrackId["album"];

        finishedString += indTrackId["id"] + ": " + trackName + " by " + artistName + " (" + albumName + ") " + "\n";

      }
      return finishedString;
    }
    return playlistInfo.call(library, playlistId) + tracksInfo.call(library, playlistId);
  },

  addTrackToPlaylist: function(trackId, playlistId){
    this["playlists"][playlistId]["tracks"].push(trackId);
    return this["playlists"][playlistId];
  },

  addTrack: function (name, artist, album) {
    var uniqueId = uid();
    this["tracks"][uniqueId] = {};
    this["tracks"][uniqueId]["id"] = uniqueId;
    this["tracks"][uniqueId]["name"] = name;
    this["tracks"][uniqueId]["artist"] = artist;
    this["tracks"][uniqueId]["album"] = album;
  },

  addPlaylist: function (name) {
    var uniqueId = uid();
    this["playlists"][uniqueId] = {}
    this["playlists"][uniqueId]["id"] = uniqueId;
    this["playlists"][uniqueId]["name"] = name;
    this["playlists"][uniqueId]["tracks"] = [];
  },

}


var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// STRETCH:
// given a query string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {
//
//   var regex = '[' + query + ']';
//   return 'this'.search(regex);
// }
//console.log(printSearchResults('Code Monkey'));
//console.log(printSearchResults('Model View Controller'));
