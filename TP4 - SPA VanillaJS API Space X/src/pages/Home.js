import getData from '../utils/getData';

const Home = async () => {
  const data = await getData();
  console.log(data);

  const characters = data?.results || [];
  
  const view = `
    <h1>Lanzamientos de SpaceX</h1>
    <div class="grid">
      ${data.map(launch => `
        <div class="card" data-id="${launch.id}">
         <a href="#/${launch.id}">
          <img src="${launch.links.patch.small}" alt="${launch.name}">
          </a>
          <h3>${launch.name}</h3>
        </div>
      `).join('')}
    </div>
  `;
  
  return view;
};

export default Home;
