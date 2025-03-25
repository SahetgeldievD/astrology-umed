{
    const moonPhase = {
    url: 'https://api.farmsense.net/v1/moonphases/?d=',
    time: Math.floor(Date.now() / 1000)
}

const {url, time} = moonPhase
const todaysMoon = `${url}${time}`
    const phaseTranslations = {
        "New Moon": "Новолуние",
        "Waxing Crescent": "Растущая луна (кресцент)",
        "First Quarter": "Первая четверть",
        "Waxing Gibbous": "Растущая луна (гиббоз)",
        "Full Moon": "Полнолуние",
        "Waning Gibbous": "Убывающая луна (гиббоз)",
        "3rd Quarter": "Третья четверть",
        "Waning Crescent": "Убывающая луна (кресцент)"
    };

    async function getMoon() {
        try {
            const response = await fetch(todaysMoon);
            const data = await response.json();

            const currentPhase = data[0]["Phase"];
            const translatedPhase = phaseTranslations[currentPhase] || "Неизвестная фаза";

            const img = new Image();
            const div = document.getElementById('moonPhase');
            img.onload = function () {
                div.appendChild(img);
            };

            switch (currentPhase) {
                case "New Moon":
                    img.src = 'phases/newMoon.png';
                    break;
                case "Waxing Crescent":
                    img.src = 'phases/waxingCrescent.png';
                    break;
                case "First Quarter":
                    img.src = 'phases/firstQuarter.png';
                    break;
                case "Waxing Gibbous":
                    img.src = 'phases/waxingGibbous.png';
                    break;
                case "Full Moon":
                    img.src = 'phases/fullMoon.png';
                    break;
                case "Waning Gibbous":
                    img.src = 'phases/waningGibbous.png';
                    break;
                case "3rd Quarter":
                    img.src = 'phases/lastQuarter.png';
                    break;
                case "Waning Crescent":
                    img.src = 'phases/waningCrescent.png';
                    break;
                default:
                    img.src = 'phases/unknown.png';
            }

            document.getElementById('phaseInfo').innerText = `Луна освещена на ${(data[0]["Illumination"]) * 100}% и находится в фазе "${translatedPhase}".`;
        } catch (error) {
            console.error("Ошибка при получении данных о фазе Луны:", error);
            document.getElementById('phaseInfo').innerText = "Не удалось получить данные о фазе Луны.";
        }
    }


getMoon();
}

const h3Element = document.querySelector('h3');
if (h3Element) {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}.${currentDate.getFullYear()}`;
    h3Element.textContent = formattedDate;
}