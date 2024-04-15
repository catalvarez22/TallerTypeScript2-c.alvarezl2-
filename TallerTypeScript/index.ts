// File: index.ts
import seriesData from './Data'; // Importa los datos de las series

const seriesList = document.getElementById('series-list');
const seriesDetails = document.getElementById('series-details');

function displaySeriesDetails(serie) {
    seriesDetails.innerHTML = `
        <h3>${serie.name}</h3>
        <p>Canal: ${serie.channel}</p>
        <p>Temporadas: ${serie.seasons}</p>
    `;
}

function createSeriesRow(serie) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${serie.id}</td>
        <td><a href="#" class="series-link">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;

    const seriesLink = row.querySelector('.series-link');
    seriesLink.addEventListener('click', () => {
        displaySeriesDetails(serie);
    });

    return row;
}

seriesData.forEach((serie) => {
    const row = createSeriesRow(serie);
    seriesList.appendChild(row);
});
