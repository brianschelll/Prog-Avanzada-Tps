import getData from '../utils/getData';

const Launch = async (id) => {
  const launch = await getData(id);
  
  if (!launch) return '<p>Error loading launch details</p>';
  
  return `
    <div class="detail-container">
      <a href="#/" class="back-button">← Volver al inicio</a>
       <article class="detail-card">
      <img src="${launch.links.patch.large || 'https://via.placeholder.com/300'}" 
           alt="${launch.name}" 
           class="detail-img" >
      
      <h2>${launch.name}</h2>
       </article">

        <article class="detail-card">
      <div class="detail-info">
        <p><strong>Número de vuelo:</strong> ${launch.flight_number}</p>
        <p><strong>Fecha:</strong> ${new Date(launch.date_utc).toLocaleString()}</p>
        <p><strong>Éxito:</strong> ${launch.success ? ' Sí' : ' No'}</p>
        
        ${launch.details ? `
          <p><strong>Detalles:</strong> ${launch.details}</p>
        ` : ''}
        
        ${launch.failures && launch.failures.length > 0 ? `
          <div class="failures">
            <h3> Fallas:</h3>
            ${launch.failures.map(failure => `
              <p> Tiempo: ${failure.time} segundos |  Altitud: ${failure.altitude}</p>
            `).join('')}
          </div>
        ` : ''}
      </div>
       </article>
    </div>
  `;
};

export default Launch;