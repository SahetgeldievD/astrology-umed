{
    const mercuryRetrograde = {
    url: 'https://mercuryretrogradeapi.com?date=',
    date: new Date().toISOString().slice(0, 10),
}

const {url, date} = mercuryRetrograde
const isRetrograde = `${url}${date}`

async function getMercury(){
    const response = await fetch(isRetrograde);
    const data = await response.json();
    if(data["is_retrograde"] === true){
    document.getElementById('mercuryRetrograde').innerText = `
Меркурий в настоящее время ретроградный. Действуйте осторожно.`;
    }
    else {
        document.getElementById('mercuryRetrograde').innerText = `Меркурий в настоящее время не находится в ретроградном движении.`;
        console.log("Меркурий в настоящее время не находится в ретроградном движении.")
    }
}

getMercury();
}