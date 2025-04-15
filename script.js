document.getElementById('lyricsForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const artist = document.getElementById('artist').value.trim();
    const song = document.getElementById('song').value.trim();
    const output = document.getElementById('lyricsOutput');
  
    output.textContent = 'Fetching lyrics...';
  
    fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then(res => res.json())
      .then(data => {
        if (data.lyrics) {
          output.textContent = data.lyrics;
        } else {
          output.textContent = 'Lyrics not found.';
        }
      })
      .catch(err => {
        console.error(err);
        output.textContent = 'Error fetching lyrics.';
      });
  });
  
