function blog(){
    fetch('/Blog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Content-Type": "text/plain"
        },
        body: JSON.stringify({
                Name: document.getElementById("Name").value,
                Descript:document.getElementById("Description").value,
                date:document.getElementById("Date").value,
                img:document.getElementById("img").value,
                Author:document.getElementById("Author").value,
                Video:document.getElementById("Video").value
        })
    });
}