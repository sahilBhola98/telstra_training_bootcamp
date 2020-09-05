fetch('http://workshops-server.herokuapp.com/workshops')
  .then(function(response){
  return response.json();
  })
  .then(function(workshops){

  console.log(workshops);

  const tbody = document.querySelector("tbody");
  workshops.forEach(function(workshop){
    tbody.innerHTML+=`<tr>
      <th>
        <img src="${workshop.imageUrl}" style="width:200px  " alt="">
      </th>
      <th>${workshop.name}</th>
      <th>${workshop.location.city}</th>

    </tr>`;
  });

  })
  .catch(function(error){
  console.log(error.message);
  })
