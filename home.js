// DOM Elements
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause-btn");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");
const songImage = document.getElementById("song-img");
const songTitleDisplay = document.getElementById("song-title");
const songArtistDisplay = document.getElementById("song-artist");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

// Song list
const songs = [
    {
        title: "Missing me (Mahaan)",
        artist: "Dhruv Vikram, Santhosh Narayanan",
        image: "./images/missing me.jpg",
        file: "./songs/Missing-Me-MassTamilan.fm.mp3"
    },
    {
        title: "Kotha Raja (King Of Kotha)",
        artist: "Jakes Bejoy,Asal Kolaar,Dabzee,Roll Rida,Resmi Sateesh",
        image: "./images/Kotha raja.jpg",
        file: "./songs/Kotha-Raja-Jakes-Bejoy-Asal-Kolaar-Dabzee-Roll-Rida-Resmi-Sateesh.mp3"
    },
    {
        title: "Ordinary Person (LEO)",
        artist: "Nikitha Gandhi",
        image: "./images/ordinary person.jpg",
        file: "./songs/Ordinary Person.mp3"
    },
    {
        title: "The Life Of Ram (Jaanu)",
        artist: "Pradeep Kumar",
        image: "./images/life of ram.jpg",
        file: "./songs/The Life Of Ram - SenSongsMp3.Co.mp3"
    },
    {
        title: "Im Scared Song (LEO)",
        artist: "Anirudh Ravichander",
        image: "./images/ordinary person.jpg",
        file: "./songs/Im Scared.mp3"
    },
    {
        title: "Toofan Megamix",
        artist: "Nikhol Musiq",
        image: "./images/dj.jpg",
        file: "./songs/TOOFAN_MEGAMIX___NIKHIL_MUSIQ___@SunixThakor(256k).mp3"
    },
    {
        title: "Papa Meri Jaan (Animal)",
        artist: "Sonu Nigam",
        image: "./images/animal.jpg",
        file: "./songs/ANIMAL__Saari_Duniya_Jalaa_Denge__Film_Version__Ranbir_K,_Bobby_D,_Sandeep,_B_Praak,Jaani,_Bhushan_K(256k).mp3"
    },
    {
        title: "Fire Song (KANGUVA)",
        artist: "Anurag Kulkarni, Deepthi Suresh, Devi Sri Prasad, and Shree Mani",
        image: "./images/fire song.jpg",
        file: "./songs/[iSongs.info] 03 - Fire Song.mp3"
    },
    {
        title: "Believer Imagine Dradons",
        artist: "Imagine Dradons",
        image: "./images/beliver.jpg",
        file: "./songs/Believer(PagalNew.Com.Se).mp3"
    },
    {
        title: "Animal OST",
        artist: "Animal Music Cast",
        image: "./images/animal.jpg",
        file: "./songs/ANIMAL__Deluxe_Edition_Album____Ranbir_Kapoor,_Rashmika_M,_Bobby_D,_Tripti_D___Sandeep_V___Bhushan_K(256k).mp3"
    },
    {
        title: "Rage Of Narappa (Narappa)",
        artist: "Dhanunjay, Varam",
        image: "./images/rage of narappa.jpg",
        file: "./songs/Rage of Narappa.mp3"
    },
    {
        title: "Hrudhayam Jaripe (PPLM)",
        artist: "Yazin Nizar",
        image: "./images/PPLM.jpg",
        file: "./songs/Hrudayam Jaripe - SenSongsmp3.Co.mp3"
    },
    {
        title: "Sun Saathiya (ABCD 2)",
        artist: "Lucky Hari",
        image: "./images/ABCD 2.jpg",
        file: "./songs/Sun_Saathiya_-_Full_Song_-_Disney_s_ABCD_2___Varun_Dhawan_-_Shraddha_Kapoor___Sachin_-_Jigar(256k).mp3"
    },
    {
        title: "Salaar BGM",
        artist: "Ravi Basrur",
        image: "./images/salaar.jpg",
        file: "./songs/Salaar_BGM_–The_Tatoo___RaviBasrur___PrasanthNeel___VijayKiragandur___Hombale_Films(256k).mp3"
    },
    {
        title: "Closer",
        artist: "The Chainsmokers",
        image: "./images/closer.jpg",
        file: "./songs/The_Chainsmokers_-_Closer__Lyrics__ft._Halsey(256k).mp3"
    },
    {
        title: "Garam Garam (Saripodhaa Sanivaaram)",
        artist: "Vishal Dadlani",
        image: "./images/SS.jpeg",
        file: "./songs/Garam Garam.mp3"
    },
    {
        title: "Kallolam (PPLM)",
        artist: "Anurag Kulakarini",
        image: "./images/PPLM.jpg",
        file: "./songs/Kallolam - SenSongsmp3.Co.mp3"
    },
    {
        title: "Die With A Smile",
        artist: "Lady Gaga, Bruno Mars",
        image: "./images/die.jpg",
        file: "./songs/Lady-Gaga-Bruno-Mars-Die-With-A-Smile.mp3"
    },
    {
        title: "Raa Saami (Peddhanna)",
        artist: "Mukesh & Chorus",
        image: "./images/Raa saami.jpg",
        file: "./songs/Raa Saami.mp3"
    },
    {
        title: "Dancin",
        artist: "Aaron Smith",
        image: "./images/dj.jpg",
        file: "./songs/Aaron Smith Dancin(PagalWorld).mp3"
    },
    {
        title: "Red Sea (Devera)",
        artist: "Anirudh Ravichander",
        image: "./images/Devara.jpg",
        file: "./songs/Red Sea.mp3"
    },
    {
        title: " Polakattum Para Para (MASTER)",
        artist: "Sanrhosh Narayanan",
        image: "./images/master.jpg",
        file: "./songs/Polakattum Para Para - SenSongsMp3.Co.mp3"
    },
    {
        title: "Ayudha Pooja (Devera)",
        artist: "Kala Bhairava",
        image: "./images/Devara.jpg",
        file: "./songs/Ayudha Pooja.mp3"
    },
    {
        title: "Fear Song (Devera)",
        artist: "Anirudh Ravichander",
        image: "./images/Devara.jpg",
        file: "./songs/Fear.mp3"
    },
    {
        title: "Sound Of Salaar (Salaar)",
        artist: "Ravi Basrur",
        image: "./images/salaar.jpg",
        file: "./songs/Sound_of_Salaar___Music_By_Ravi_Basrur___Hombale_Films(256k).mp3"
    }
    // Add more songs here...
];

// Track the current song index
let currentSongIndex = 0;

// Load the current song
function loadSong(songIndex) {
    const song = songs[songIndex];
    audio.src = song.file;
    songImage.src = song.image || "./images/default-cover.png"; // Default image if not provided
    songTitleDisplay.textContent = song.title || "Unknown Title";
    songArtistDisplay.textContent = song.artist || "Unknown Artist";
    audio.load();
}

// Play/Pause functionality
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
    }
});

// Update progress bar and time displays
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress || 0;

    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    durationDisplay.textContent = formatTime(audio.duration);
});

// Seek functionality: Change time when progress bar is moved
progressBar.addEventListener("input", () => {
    const newTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});

// Format time (convert seconds to MM:SS)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Next song functionality
nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the start
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = "Pause";
});

// Previous song functionality
prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to the end
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = "Pause";
});

// Load the first song on page load
loadSong(currentSongIndex);
